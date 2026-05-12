import Link from "next/link";
import { Phone, Mail, Clock, Send, MessageCircle, Building, ArrowRight, MapPin } from "lucide-react";
import { companyInfo } from "@/config/company";

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section py-16">
        <div className="hero-shapes">
          <div className="hero-shape hero-shape-1" />
          <div className="hero-shape hero-shape-2" />
          <div className="hero-shape hero-shape-3" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hubungi Kami</h1>
            <p className="text-xl text-white/80">
              Tim kami siap membantu Anda 24/7
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top Section - 3 Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Card 1 - Office */}
            <div className="bg-gradient-to-br from-[var(--maroon-dark)] to-[var(--maroon-primary)] rounded-2xl p-6 text-white">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                <Building size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Kantor Kami</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {companyInfo.address}<br />
                {companyInfo.city}
              </p>
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-sm text-white/60">Jam Operasional</p>
                <p className="text-sm">{companyInfo.operatingHours.weekdays}</p>
              </div>
            </div>

            {/* Card 2 - Phone */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-[var(--bg-gray)]">
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center mb-4">
                <Phone size={24} className="text-[#25D366]" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text-dark)] mb-2">WhatsApp</h3>
              <div className="space-y-3">
                <a
                  href={`https://wa.me/${companyInfo.whatsapp1}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#25D366] font-semibold hover:gap-3 transition-all"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.296-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.478 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp 1: {companyInfo.mobile1}
                </a>
                <a
                  href={`https://wa.me/${companyInfo.whatsapp2}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#25D366] font-semibold hover:gap-3 transition-all"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.296-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.478 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp 2: {companyInfo.mobile2}
                </a>
              </div>
            </div>

            {/* Card 3 - Email */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-[var(--bg-gray)]">
              <div className="w-12 h-12 rounded-xl bg-[var(--gold-primary)]/10 flex items-center justify-center mb-4">
                <Mail size={24} className="text-[var(--gold-primary)]" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text-dark)] mb-2">Email</h3>
              <p className="text-lg font-semibold text-[var(--text-dark)] mb-4">
                {companyInfo.email}
              </p>
              <a
                href={`mailto:${companyInfo.email}`}
                className="inline-flex items-center gap-2 text-sm text-[var(--maroon-primary)] font-semibold hover:gap-3 transition-all"
              >
                Kirim Email
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Bottom Section - 2 Columns Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Info Text with Quick Links */}
            <div>
              <span className="text-sm font-semibold tracking-wider text-[var(--maroon-primary)] uppercase">
                Hubungi Kami
              </span>
              <h2 className="section-title mt-2 mb-6">Siap Membantu Anda</h2>

              <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
                Hubungi tim kami untuk konsultasi gratis, penawaran harga, atau pertanyaan tentang layanan kami.
                Kami siap merespons setiap kebutuhan bisnis Anda dalam 1x24 jam.
              </p>

              {/* Quick Links Cards */}
              <div className="space-y-4">
                <h4 className="font-bold text-[var(--text-dark)]">Layanan Kami</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link href="/pengadaan" className="flex items-center gap-3 p-4 bg-[var(--bg-light)] rounded-xl hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                      <span className="text-blue-500 font-bold">P</span>
                    </div>
                    <span className="text-sm font-medium">Pengadaan Barang</span>
                  </Link>
                  <Link href="/konstruksi" className="flex items-center gap-3 p-4 bg-[var(--bg-light)] rounded-xl hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                      <span className="text-orange-500 font-bold">K</span>
                    </div>
                    <span className="text-sm font-medium">Konstruksi</span>
                  </Link>
                  <Link href="/travel" className="flex items-center gap-3 p-4 bg-[var(--bg-light)] rounded-xl hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center">
                      <span className="text-teal-500 font-bold">T</span>
                    </div>
                    <span className="text-sm font-medium">Travel</span>
                  </Link>
                  <Link href="/laundry" className="flex items-center gap-3 p-4 bg-[var(--bg-light)] rounded-xl hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                      <span className="text-purple-500 font-bold">L</span>
                    </div>
                    <span className="text-sm font-medium">Laundry</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="bg-[var(--bg-light)] rounded-2xl p-4 sm:p-6 lg:p-8">
              <h3 className="text-xl font-bold text-[var(--text-dark)] mb-6">Kirim Pesan</h3>
              <form className="space-y-4" method="POST">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="form-label">Nama Lengkap</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      className="form-input"
                      placeholder="Nama Anda"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="form-input"
                      placeholder="nama@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="form-label">Nomor WhatsApp</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    className="form-input"
                    placeholder="08xx-xxxx-xxxx"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="form-label">Layanan yang Dibutuhkan</label>
                  <select id="service" name="service" className="form-input">
                    <option value="">Pilih layanan...</option>
                    <option value="pengadaan">Pengadaan Barang</option>
                    <option value="konstruksi">Konstruksi</option>
                    <option value="travel">Travel</option>
                    <option value="laundry">Laundry</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="form-label">Pesan</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-input"
                    rows={4}
                    placeholder="Tulis pesan Anda..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto btn-primary justify-center"
                >
                  <Send size={18} />
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}