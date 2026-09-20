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
    <section id="daftar" className="py-14 sm:py-28 relative bg-[#f8f9fc] border-t border-[rgba(17,18,21,0.08)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left max-w-3xl mb-8 sm:mb-14 space-y-2.5 sm:space-y-3">
          <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs text-[#0F7A73] uppercase tracking-wider font-semibold">
            <FileCheck className="w-3.5 h-3.5 text-[#0F7A73]" />
            <span>Reservasi Resmi</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#111215] tracking-tight leading-tight">
            Kunci Slot Latihan Mengemudi Anda
          </h2>
          <p className="text-[#45474d] text-xs sm:text-base leading-relaxed">
            Isi formulir pendaftaran singkat di bawah ini. Tim konsultan resmi Amanah Drive akan segera menyiapkan jadwal dan memandu proses belajar Anda hingga mahir.
          </p>
        </div>

        {/* Architectural Split Console (Live Summary + Technical Form) */}
        <div className="border border-[rgba(17,18,21,0.08)] bg-white rounded-[4px] overflow-hidden">
          
          {successData ? (
            <div className="text-center p-8 sm:p-14 space-y-4 max-w-xl mx-auto">
              <div className="w-12 h-12 bg-[#e6f4f2] text-[#0F7A73] rounded-[4px] flex items-center justify-center mx-auto mb-2 border border-[#0F7A73]/20">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111215] tracking-tight">
                Pendaftaran Berhasil Dikirim!
              </h3>
              <p className="text-xs sm:text-sm text-[#45474d] leading-relaxed">
                Terima kasih, <strong>{successData.nama}</strong>. Data rencana kursus untuk <strong>{successData.paket_nama}</strong> telah berhasil kami terima.
              </p>

              <div className="p-4 bg-[#f8f9fc] rounded-[4px] border border-[rgba(17,18,21,0.08)] text-left space-y-1.5 text-xs text-[#45474d]">
                <div className="flex items-center gap-2 font-semibold text-[#111215]">
                  <Sparkles className="w-4 h-4 text-[#0F7A73]" />
                  <span>Langkah Terakhir:</span>
                </div>
                <p>Klik tombol di bawah untuk terhubung langsung dengan Kak Lia di WhatsApp dan mengonfirmasi ketersediaan instruktur Anda.</p>
              </div>

              <div className="pt-2">
                <a
                  href={successData.whatsapp_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-btn-teal w-full gap-2 text-sm py-3 font-bold"
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
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[rgba(17,18,21,0.08)]">
              
              {/* Left Column: Live Reservation Summary Console (4 cols) */}
              <div className="lg:col-span-4 bg-[#f8f9fc] p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-5">
                  <div className="border-b border-[rgba(17,18,21,0.08)] pb-4">
                    <p className="inline-flex items-center gap-1.5 font-mono text-[10px] text-[#0F7A73] uppercase tracking-wider font-semibold mb-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0F7A73]" />
                      <span>Ringkasan Pilihan</span>
                    </p>
                    <h3 className="text-lg font-bold text-[#111215] tracking-tight">
                      {selectedPkg?.name || "Paket Kursus"}
                    </h3>
                    <div className="text-2xl font-extrabold text-[#111215] tabular-nums mt-1">
                      {selectedPkg?.price && selectedPkg.price > 0
                        ? `Rp ${(selectedPkg.price).toLocaleString("id-ID")}`
                        : "Konsultasi Khusus"}
                    </div>
                  </div>

                  {/* Summary Spec Points */}
                  <div className="space-y-3 text-xs text-[#45474d]">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[#9aa0a6]">UNIT MOBIL:</span>
                      <span className="font-semibold text-[#111215]">{selectedVehicle?.name || "Ayla / Xenia"}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[#9aa0a6]">JAM LATIHAN:</span>
                      <span className="font-semibold text-[#111215]">{selectedSlot?.time || "Pagi / Sore"}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[#9aa0a6]">ANTAR-JEMPUT:</span>
                      <span className={`font-semibold ${formData.antar_jemput ? "text-[#0F7A73]" : "text-[#9aa0a6]"}`}>
                        {formData.antar_jemput ? "Ya (Gratis)" : "Tidak"}
                      </span>
                    </div>
                  </div>

                  {/* Trust Callouts */}
                  <div className="pt-4 border-t border-[rgba(17,18,21,0.08)] space-y-2 text-[11px] text-[#45474d]">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                      <span>Instruktur Sabar &amp; Bersertifikat</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                      <span>Sertifikat Kelulusan Resmi CV</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                      <span>Tanpa Biaya Tambahan Bensin</span>
                    </div>
                  </div>
                </div>

                <div className="text-[11px] font-mono text-[#9aa0a6]">
                  Amanah Drive &bull; Official Registration Console
                </div>
              </div>

              {/* Right Column: Interactive Form (8 cols) */}
              <div className="lg:col-span-8 p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  
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
                    <div className="flex items-center gap-2.5 p-3.5 rounded-[4px] bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm">
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Field 1: Identitas */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#111215] mb-1.5">
                        Nama Lengkap Siswa <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Ahmad Fadilah"
                        value={formData.nama}
                        onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-[4px] border border-[rgba(17,18,21,0.15)] focus:border-[#0F7A73] text-xs sm:text-sm text-[#111215] outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#111215] mb-1.5">
                        Nomor WhatsApp Aktif <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Contoh: 081234567890"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-[4px] border border-[rgba(17,18,21,0.15)] focus:border-[#0F7A73] text-xs sm:text-sm text-[#111215] outline-none transition-colors"
                      />
                      <p className="text-[10px] text-[#9aa0a6] mt-1 font-mono">
                        Jadwal &amp; rincian pendaftaran akan dikirim ke nomor ini.
                      </p>
                    </div>
                  </div>

                  {/* Field 2: Pilihan Kursus Dinamis */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-semibold text-[#111215] mb-1.5">
                        <Package className="w-3.5 h-3.5 text-[#0F7A73]" />
                        <span>Pilihan Paket</span>
                      </label>
                      <select
                        value={formData.paket_id}
                        onChange={(e) => setFormData({ ...formData, paket_id: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-[4px] border border-[rgba(17,18,21,0.15)] focus:border-[#0F7A73] text-xs sm:text-sm text-[#111215] bg-white outline-none transition-colors"
                      >
                        {packages.map((pkg) => (
                          <option key={pkg.id} value={pkg.id}>
                            {pkg.name} ({pkg.price > 0 ? `Rp ${(pkg.price / 1000).toLocaleString('id-ID')}rb` : 'Khusus'})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-semibold text-[#111215] mb-1.5">
                        <Car className="w-3.5 h-3.5 text-[#0F7A73]" />
                        <span>Unit Mobil</span>
                      </label>
                      <select
                        value={formData.kendaraan_id}
                        onChange={(e) => setFormData({ ...formData, kendaraan_id: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-[4px] border border-[rgba(17,18,21,0.15)] focus:border-[#0F7A73] text-xs sm:text-sm text-[#111215] bg-white outline-none transition-colors"
                      >
                        {fleet.map((veh) => (
                          <option key={veh.id} value={veh.id}>
                            {veh.name} ({veh.type})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-semibold text-[#111215] mb-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#0F7A73]" />
                        <span>Jam Latihan</span>
                      </label>
                      <select
                        value={formData.slot_waktu_id}
                        onChange={(e) => setFormData({ ...formData, slot_waktu_id: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-[4px] border border-[rgba(17,18,21,0.15)] focus:border-[#0F7A73] text-xs sm:text-sm text-[#111215] bg-white outline-none transition-colors"
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
                  <div className="p-4 rounded-[4px] bg-[#f8f9fc] border border-[rgba(17,18,21,0.08)] space-y-3">
                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.antar_jemput}
                        onChange={(e) => setFormData({ ...formData, antar_jemput: e.target.checked })}
                        className="w-4 h-4 rounded text-[#0F7A73] focus:ring-[#0F7A73] border-gray-300"
                      />
                      <span className="text-xs sm:text-sm font-bold text-[#0F7A73]">
                        Saya Membutuhkan Layanan Antar-Jemput Siswa (Gratis)
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
                          className="w-full px-3 py-2 rounded-[4px] border border-[rgba(17,18,21,0.15)] bg-white text-xs text-[#111215] outline-none focus:border-[#0F7A73]"
                        />
                      </div>
                    )}
                  </div>

                  {/* Catatan Tambahan */}
                  <div>
                    <label className="block text-xs font-semibold text-[#111215] mb-1.5">
                      Catatan Belajar / Kebutuhan Khusus (Opsional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Contoh: Pernah coba stir tapi masih grogi tanjakan, butuh instruktur yang sangat sabar..."
                      value={formData.catatan}
                      onChange={(e) => setFormData({ ...formData, catatan: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[4px] border border-[rgba(17,18,21,0.15)] focus:border-[#0F7A73] text-xs sm:text-sm text-[#111215] outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="tech-btn-teal w-full text-sm py-3 font-bold gap-2 cursor-pointer"
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
                    <p className="text-center text-[10px] font-mono text-[#9aa0a6] mt-2">
                      PRIVASI TERJAMIN &bull; DATA HANYA DIGUNAKAN UNTUK KONFIRMASI JADWAL
                    </p>
                  </div>

                </form>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
