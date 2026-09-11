"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  Car,
  Clock,
  Package,
  MapPin,
  Sparkles,
  MessageCircle,
  AlertCircle,
  Loader2,
  FileCheck,
} from "lucide-react";
import { PackageItem } from "@/lib/constants";
import { generateEventId, trackFormSubmissionLead } from "@/lib/gtm";

interface Props {
  packages: PackageItem[];
  fleet: Array<{ id: string; name: string; type: string }>;
  slots: Array<{ id: string; slot: number; time: string; label: string }>;
}

export default function RegistrationFormSection({
  packages,
  fleet,
  slots,
}: Props) {
  const [formData, setFormData] = useState({
    nama: "",
    whatsapp: "",
    paket_id: packages[0]?.id || "",
    kendaraan_id: fleet[0]?.id || "",
    slot_waktu_id: slots[0]?.id || "",
    antar_jemput: false,
    alamat_jemput: "",
    catatan: "",
    company_website: "", // Honeypot antispam
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{
    whatsapp_url: string;
    nama: string;
    paket_nama: string;
  } | null>(null);

  const selectedPkg = packages.find((p) => p.id === formData.paket_id) || packages[0];
  const selectedVehicle = fleet.find((f) => f.id === formData.kendaraan_id) || fleet[0];
  const selectedSlot = slots.find((s) => s.id === formData.slot_waktu_id) || slots[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.nama.trim()) {
      setError("Silakan isi nama lengkap Anda.");
      return;
    }

    const cleanPhone = formData.whatsapp.replace(/\D/g, "");
    if (cleanPhone.length < 9) {
      setError("Nomor WhatsApp minimal 9 digit angka yang valid.");
      return;
    }

    if (formData.antar_jemput && !formData.alamat_jemput.trim()) {
      setError("Silakan masukkan alamat atau area penjemputan Anda.");
      return;
    }

    setLoading(true);

    try {
      const eventId = generateEventId();
      const pkgName = selectedPkg?.name || "Paket Kursus";
      const vehicleName = selectedVehicle ? `${selectedVehicle.name} (${selectedVehicle.type})` : "Unit Kursus";
      const slotName = selectedSlot ? `${selectedSlot.time} (${selectedSlot.label})` : "Jadwal Fleksibel";

      // 1. Trigger Form Lead (DataLayer GA4 generate_lead & Meta CAPI Lead)
      trackFormSubmissionLead({
        event_id: eventId,
        lead_source: "registration_form",
        package_name: pkgName,
        package_price: selectedPkg?.price || 0,
        vehicle: vehicleName,
        slot_time: slotName,
        user_phone: cleanPhone,
        user_name: formData.nama,
      });

      // 3. Post to server-side endpoint (Saves to Supabase homepage_leads)
      const res = await fetch("/api/booking/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nama: formData.nama,
          whatsapp: cleanPhone,
          paket_id: selectedPkg?.id,
          paket_nama: pkgName,
          kendaraan_id: selectedVehicle?.id,
          kendaraan_nama: vehicleName,
          slot_waktu_id: selectedSlot?.id,
          slot_waktu_nama: slotName,
          antar_jemput: formData.antar_jemput,
          alamat_jemput: formData.alamat_jemput,
          catatan: formData.catatan,
          meta_event_id: eventId,
          company_website: formData.company_website, // honeypot
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Gagal mengirim formulir.");
      }

      setSuccessData({
        whatsapp_url: data.whatsapp_url,
        nama: formData.nama,
        paket_nama: pkgName,
      });
    } catch (err: any) {
      setError(err.message || "Terjadi kendala jaringan. Silakan hubungi kami via WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="daftar" className="py-10 sm:py-24 relative bg-[#f8f9fa] border-t border-[#e2e4e9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F7A73]/10 text-[#0F7A73] text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-wider">
            <FileCheck className="w-3.5 h-3.5" />
            <span>Formulir Pendaftaran &amp; Reservasi Resmi</span>
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#121317] tracking-tight">
            Kunci Slot Latihan Mengemudi Anda
          </h2>
          <p className="text-[#45474d] text-xs sm:text-sm leading-relaxed">
            Isi formulir pendaftaran singkat di bawah ini. Tim konsultan resmi Amanah Drive akan segera menyiapkan jadwal dan memandu proses belajar Anda hingga mahir.
          </p>
        </div>

        {/* Card Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#e2e4e9] p-5 sm:p-8 lg:p-10 relative overflow-hidden">
          
          {successData ? (
            <div className="text-center py-6 sm:py-10 space-y-4">
              <div className="w-16 h-16 bg-[#e6f4f2] text-[#0F7A73] rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#121317]">
                Pendaftaran Berhasil Dikirim!
              </h3>
              <p className="text-xs sm:text-sm text-[#45474d] max-w-md mx-auto leading-relaxed">
                Terima kasih, <strong>{successData.nama}</strong>. Data rencana kursus untuk <strong>{successData.paket_nama}</strong> telah berhasil kami terima.
              </p>

              <div className="p-4 bg-[#f8f9fa] rounded-xl border border-[#e2e4e9] max-w-md mx-auto text-left space-y-1.5 text-xs text-[#45474d]">
                <div className="flex items-center gap-2 font-semibold text-[#121317]">
                  <Sparkles className="w-4 h-4 text-[#0F7A73]" />
                  <span>Langkah Terakhir:</span>
                </div>
                <p>Klik tombol hijau di bawah untuk terhubung langsung dengan Kak Lia di WhatsApp dan mengonfirmasi ketersediaan instruktur Anda.</p>
              </div>

              <div className="pt-2">
                <a
                  href={successData.whatsapp_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md transition-all active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Konfirmasi via WhatsApp Sekarang</span>
                </a>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSuccessData(null);
                  setFormData({
                    nama: "",
                    whatsapp: "",
                    paket_id: packages[0]?.id || "",
                    kendaraan_id: fleet[0]?.id || "",
                    slot_waktu_id: slots[0]?.id || "",
                    antar_jemput: false,
                    alamat_jemput: "",
                    catatan: "",
                    company_website: "",
                  });
                }}
                className="text-xs text-[#0F7A73] underline block mx-auto pt-2 hover:opacity-80"
              >
                Kirim pendaftaran untuk siswa lain
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              
              {/* Anti-spam Honeypot (Hidden) */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  name="company_website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.company_website}
                  onChange={(e) => setFormData({ ...formData, company_website: e.target.value })}
                />
              </div>

              {/* Error Alert */}
              {error && (
                <div className="flex items-center gap-2.5 p-3 sm:p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                  <span>{error}</span>
                </div>
              )}

              {/* Grid 1: Identitas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#121317] mb-1.5">
                    Nama Lengkap Siswa <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Ahmad Fadilah"
                    value={formData.nama}
                    onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#d1d5db] focus:border-[#0F7A73] focus:ring-2 focus:ring-[#0F7A73]/20 text-xs sm:text-sm text-[#121317] outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#121317] mb-1.5">
                    Nomor WhatsApp Aktif <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Contoh: 081234567890"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#d1d5db] focus:border-[#0F7A73] focus:ring-2 focus:ring-[#0F7A73]/20 text-xs sm:text-sm text-[#121317] outline-none transition-all"
                  />
                  <p className="text-[10px] sm:text-xs text-[#71747d] mt-1">
                    Jadwal &amp; rincian pendaftaran akan dikirim ke WhatsApp ini.
                  </p>
                </div>
              </div>

              {/* Grid 2: Pilihan Kursus Dinamis */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                
                {/* Paket */}
                <div>
                  <label className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#121317] mb-1.5">
                    <Package className="w-3.5 h-3.5 text-[#0F7A73]" />
                    <span>Pilihan Paket</span>
                  </label>
                  <select
                    value={formData.paket_id}
                    onChange={(e) => setFormData({ ...formData, paket_id: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#d1d5db] focus:border-[#0F7A73] focus:ring-2 focus:ring-[#0F7A73]/20 text-xs sm:text-sm text-[#121317] bg-white outline-none transition-all"
                  >
                    {packages.map((pkg) => (
                      <option key={pkg.id} value={pkg.id}>
                        {pkg.name} ({pkg.price > 0 ? `Rp ${(pkg.price / 1000).toLocaleString('id-ID')}rb` : 'Khusus'})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Armada */}
                <div>
                  <label className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#121317] mb-1.5">
                    <Car className="w-3.5 h-3.5 text-[#0F7A73]" />
                    <span>Unit Mobil</span>
                  </label>
                  <select
                    value={formData.kendaraan_id}
                    onChange={(e) => setFormData({ ...formData, kendaraan_id: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#d1d5db] focus:border-[#0F7A73] focus:ring-2 focus:ring-[#0F7A73]/20 text-xs sm:text-sm text-[#121317] bg-white outline-none transition-all"
                  >
                    {fleet.map((veh) => (
                      <option key={veh.id} value={veh.id}>
                        {veh.name} ({veh.type})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Jam Sesi */}
                <div>
                  <label className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#121317] mb-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#0F7A73]" />
                    <span>Preferensi Jam Latihan</span>
                  </label>
                  <select
                    value={formData.slot_waktu_id}
                    onChange={(e) => setFormData({ ...formData, slot_waktu_id: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#d1d5db] focus:border-[#0F7A73] focus:ring-2 focus:ring-[#0F7A73]/20 text-xs sm:text-sm text-[#121317] bg-white outline-none transition-all"
                  >
                    {slots.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.time} - {s.label}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Antar Jemput Option */}
              <div className="p-4 rounded-xl bg-[#f0f9f8] border border-[#d2ebe7] space-y-3">
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.antar_jemput}
                    onChange={(e) => setFormData({ ...formData, antar_jemput: e.target.checked })}
                    className="w-4 h-4 rounded text-[#0F7A73] focus:ring-[#0F7A73] border-gray-300"
                  />
                  <span className="text-xs sm:text-sm font-bold text-[#0F7A73]">
                    Saya Membutuhkan Layanan Antar-Jemput Siswa
                  </span>
                </label>

                {formData.antar_jemput && (
                  <div className="pt-1">
                    <label className="block text-xs font-medium text-[#45474d] mb-1">
                      Alamat / Patokan Lokasi Penjemputan <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Jl. Angkatan 45 No. 12, dekat RS Siloam Palembang"
                      value={formData.alamat_jemput}
                      onChange={(e) => setFormData({ ...formData, alamat_jemput: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-[#c4e2dc] bg-white text-xs text-[#121317] outline-none focus:border-[#0F7A73]"
                    />
                  </div>
                )}
              </div>

              {/* Catatan Tambahan */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-[#121317] mb-1.5">
                  Catatan Belajar / Kebutuhan Khusus (Opsional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Contoh: Pernah coba stir tapi masih grogi tanjakan, butuh instruktur yang sangat sabar..."
                  value={formData.catatan}
                  onChange={(e) => setFormData({ ...formData, catatan: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#d1d5db] focus:border-[#0F7A73] focus:ring-2 focus:ring-[#0F7A73]/20 text-xs sm:text-sm text-[#121317] outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#0F7A73] hover:bg-[#0d6862] text-white font-bold text-sm sm:text-base shadow-md transition-all active:scale-[0.99] disabled:opacity-60 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Memproses Pendaftaran...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Kirim Formulir Pendaftaran Sekarang</span>
                    </>
                  )}
                </button>
                <p className="text-center text-[10px] sm:text-xs text-[#71747d] mt-2">
                  🔒 Data Anda aman &amp; hanya digunakan untuk konfirmasi jadwal kursus resmi Amanah Drive.
                </p>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
