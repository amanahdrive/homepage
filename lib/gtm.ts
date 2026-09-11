// Google Tag Manager & Meta Conversions API (CAPI) Event Tracking Utility
// CV Amanah Drive Palembang

declare global {
  interface Window {
    dataLayer?: Record<string, any>[];
  }
}

export interface LeadTrackingParams {
  lead_source: string;
  button_text?: string;
  package_name?: string;
  package_price?: number;
  vehicle_type?: string;
  selected_slot?: string;
  target_phone?: string;
  [key: string]: any;
}

/**
 * Generate a unique event_id for Meta Ads deduplication (Browser Pixel + Server CAPI)
 */
export function generateEventId(): string {
  return 'ev_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9);
}

// In-memory sets to prevent duplicate firing within short intervals
const throttledEvents = new Map<string, number>();
const sentCapiEvents = new Set<string>();

/**
 * Throttle helper to prevent accidental fast double clicks from double-firing events
 */
function shouldThrottle(key: string, cooldownMs = 1200): boolean {
  if (typeof window === "undefined") return false;
  const now = Date.now();
  const lastFired = throttledEvents.get(key) || 0;
  if (now - lastFired < cooldownMs) {
    return true; // Already fired recently, drop duplicate
  }
  throttledEvents.set(key, now);
  return false;
}

/**
 * Safely pushes an object to the global window.dataLayer array
 */
export function pushToDataLayer(payload: Record<string, any>) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);
  }
}

/**
 * Asynchronously send an event to Meta Conversions API (CAPI) via Next.js Server Route.
 * Guarantees zero duplicate CAPI dispatches for the same event_id.
 */
export async function sendCapiEvent(params: {
  event_name: 'Lead' | 'Contact' | 'FindLocation' | 'SubmitApplication' | 'PageView' | string;
  event_id?: string;
  custom_data?: Record<string, any>;
  user_data?: {
    phone?: string;
    email?: string;
    first_name?: string;
  };
}) {
  if (typeof window === "undefined") return;

  const eventId = params.event_id || generateEventId();
  const dedupeKey = `${params.event_name}_${eventId}`;

  // If this exact event has already been sent to CAPI, skip to avoid double firing
  if (sentCapiEvents.has(dedupeKey)) {
    return;
  }
  sentCapiEvents.add(dedupeKey);

  const payload = {
    event_name: params.event_name,
    event_id: eventId,
    event_source_url: window.location.href,
    custom_data: params.custom_data || {},
    user_data: params.user_data || {},
  };

  try {
    if (navigator.sendBeacon) {
      const blob = new Blob([JSON.stringify(payload)], { type: "application/json" });
      navigator.sendBeacon("/api/capi", blob);
    } else {
      fetch("/api/capi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        keepalive: true,
      }).catch(() => {});
    }
  } catch (err) {
    // Fail silently in background
    console.debug("[CAPI] Event push handled", err);
  }
}

/**
 * Conversion event for WhatsApp interactions (Chat / konsultasi WhatsApp).
 * Sesuai instruksi: event 'contact' dikhususkan untuk semua yang mengarah ke WA.
 * Event 'lead' / 'generate_lead' HANYA dipakai untuk form pendaftaran.
 * Anti Double-Firing: Mencegah double click dalam interval 1.2 detik.
 */
export function trackWhatsAppContact(params: LeadTrackingParams) {
  // Prevent duplicate clicks on the same button
  const throttleKey = `wa_${params.lead_source}_${params.button_text || ''}`;
  if (shouldThrottle(throttleKey)) {
    return;
  }

  const contactEventId = generateEventId();

  // Push Meta Ads & GA4 compatible 'contact' event with event_id
  pushToDataLayer({
    event: "contact",
    event_name: "contact",
    event_id: contactEventId,
    contact_method: "whatsapp",
    lead_source: params.lead_source,
    button_text: params.button_text,
    package_name: params.package_name,
    package_price: params.package_price,
    vehicle_type: params.vehicle_type,
    selected_slot: params.selected_slot,
    target_phone: params.target_phone || "+628137790961",
    currency: "IDR",
    value: params.package_price || 0,
  });

  // Trigger Meta CAPI Server-Side 'Contact' Event
  sendCapiEvent({
    event_name: "Contact",
    event_id: contactEventId,
    custom_data: {
      content_name: params.package_name || params.button_text || "WhatsApp Contact",
      currency: "IDR",
      value: params.package_price || 0,
      lead_source: params.lead_source,
    },
    user_data: {
      phone: params.target_phone || "628137790961",
    },
  });
}

// Alias untuk menjaga backward-compatibility di seluruh komponen,
// memastikan seluruh tombol WA sekarang HANYA menembakkan event Contact (bukan Lead)
export const trackWhatsAppLead = trackWhatsAppContact;

/**
 * Primary conversion event for Form Submissions (Form Booking Homepage).
 * Sesuai instruksi: event 'lead' (Meta Ads) dan 'generate_lead' (GA4) HANYA dipakai untuk form booking.
 */
export function trackFormSubmissionLead(params: {
  event_id?: string;
  lead_source: string;
  package_name?: string;
  package_price?: number;
  vehicle?: string;
  slot_time?: string;
  user_phone?: string;
  user_name?: string;
}): string {
  // Prevent duplicate submissions within short interval
  const formKey = `form_${params.user_phone || ''}_${params.package_name || ''}`;
  if (shouldThrottle(formKey, 2000)) {
    return params.event_id || '';
  }

  const eventId = params.event_id || generateEventId();

  // 1. DataLayer GA4 generate_lead
  pushToDataLayer({
    event: "generate_lead",
    event_name: "generate_lead",
    event_id: eventId,
    lead_source: params.lead_source || "registration_form",
    lead_type: "online_form",
    package_name: params.package_name,
    value: params.package_price || 0,
    currency: "IDR",
    vehicle: params.vehicle,
    slot_time: params.slot_time,
  });

  // 2. DataLayer submit_application
  pushToDataLayer({
    event: "submit_application",
    event_name: "submit_application",
    event_id: eventId,
    lead_source: params.lead_source || "registration_form",
    package_name: params.package_name,
    value: params.package_price || 0,
    currency: "IDR",
  });

  // 3. Meta Conversions API (CAPI) Server Event: Lead
  sendCapiEvent({
    event_name: "Lead",
    event_id: eventId,
    custom_data: {
      content_name: params.package_name || "Form Pendaftaran Kursus",
      value: params.package_price || 0,
      currency: "IDR",
      lead_source: params.lead_source || "registration_form",
    },
    user_data: {
      phone: params.user_phone,
      first_name: params.user_name ? params.user_name.trim().split(" ")[0] : undefined,
    },
  });

  // 4. Meta Conversions API (CAPI) Server Event: SubmitApplication
  sendCapiEvent({
    event_name: "SubmitApplication",
    event_id: eventId,
    custom_data: {
      content_name: params.package_name || "Form Pendaftaran Kursus",
      value: params.package_price || 0,
      currency: "IDR",
      lead_source: params.lead_source || "registration_form",
    },
    user_data: {
      phone: params.user_phone,
      first_name: params.user_name ? params.user_name.trim().split(" ")[0] : undefined,
    },
  });

  return eventId;
}

/**
 * Event for direct phone calls (tel: links)
 */
export function trackPhoneCall(source: string) {
  const callEventId = generateEventId();
  pushToDataLayer({
    event: "contact_phone",
    event_name: "contact_phone",
    event_id: callEventId,
    contact_method: "phone_call",
    lead_source: source,
    target_phone: "+628137790961",
  });

  sendCapiEvent({
    event_name: "Contact",
    event_id: callEventId,
    custom_data: {
      content_name: "Phone Call",
      lead_source: source,
    },
  });
}

/**
 * Event when a user views or filters package categories
 */
export function trackPackageFilter(category: string) {
  pushToDataLayer({
    event: "filter_packages",
    filter_category: category,
  });
}

/**
 * Event when a user customizes their driving lesson in the Booking Calculator
 */
export function trackCalculationEvent(params: {
  vehicle: string;
  sessions: number;
  hasSim: boolean;
  withPickup: boolean;
  totalPrice: number;
}) {
  const calcEventId = generateEventId();
  pushToDataLayer({
    event: "calculate_cost",
    event_name: "calculate_cost",
    event_id: calcEventId,
    vehicle_type: params.vehicle,
    sessions_count: params.sessions,
    include_sim: params.hasSim,
    with_pickup: params.withPickup,
    value: params.totalPrice,
    currency: "IDR",
  });

  // Trigger Meta CAPI SubmitApplication for booking simulations
  sendCapiEvent({
    event_name: "SubmitApplication",
    event_id: calcEventId,
    custom_data: {
      content_name: `Booking ${params.vehicle} (${params.sessions} sesi)`,
      currency: "IDR",
      value: params.totalPrice,
    },
  });
}

/**
 * Event when user selects a practice time slot
 */
export function trackSlotSelect(slotLabel: string, time: string) {
  pushToDataLayer({
    event: "select_schedule_slot",
    slot_label: slotLabel,
    slot_time: time,
  });
}

/**
 * Event when user clicks Google Maps link
 */
export function trackLocationView(destination: string = "Amanah Drive Palembang") {
  const mapsEventId = generateEventId();
  pushToDataLayer({
    event: "view_location",
    event_name: "view_location",
    event_id: mapsEventId,
    destination_name: destination,
    action: "open_gmaps",
  });

  // Trigger Meta CAPI FindLocation
  sendCapiEvent({
    event_name: "FindLocation",
    event_id: mapsEventId,
    custom_data: {
      content_name: destination,
    },
  });
}

/**
 * Event when an FAQ question is opened
 */
export function trackFaqToggle(question: string, isOpen: boolean) {
  if (isOpen) {
    pushToDataLayer({
      event: "faq_expand",
      faq_question: question,
    });
  }
}
