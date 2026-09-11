// Google Tag Manager & DataLayer Event Tracking Utility
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
 * Safely pushes an object to the global window.dataLayer array
 */
export function pushToDataLayer(payload: Record<string, any>) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);
  }
}

/**
 * Primary conversion event for WhatsApp interactions.
 * Pushes standard GA4 'generate_lead' event as well as 'contact' event for Meta Ads Pixel.
 */
export function trackWhatsAppLead(params: LeadTrackingParams) {
  const leadData = {
    event: "generate_lead",
    event_name: "generate_lead",
    lead_type: "whatsapp",
    target_phone: params.target_phone || "+628137790961",
    currency: "IDR",
    value: params.package_price || 0,
    ...params,
  };

  // Push GA4 generate_lead
  pushToDataLayer(leadData);

  // Push Meta Ads compatible 'contact' event
  pushToDataLayer({
    event: "contact",
    event_name: "contact",
    contact_method: "whatsapp",
    lead_source: params.lead_source,
    button_text: params.button_text,
    value: params.package_price || 0,
    currency: "IDR",
  });
}

/**
 * Event for direct phone calls (tel: links)
 */
export function trackPhoneCall(source: string) {
  pushToDataLayer({
    event: "contact_phone",
    event_name: "contact_phone",
    contact_method: "phone_call",
    lead_source: source,
    target_phone: "+628137790961",
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
  pushToDataLayer({
    event: "calculate_cost",
    event_name: "calculate_cost",
    vehicle_type: params.vehicle,
    sessions_count: params.sessions,
    include_sim: params.hasSim,
    with_pickup: params.withPickup,
    value: params.totalPrice,
    currency: "IDR",
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
  pushToDataLayer({
    event: "view_location",
    event_name: "view_location",
    destination_name: destination,
    action: "open_gmaps",
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
