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
              <h3 className="text-lg font-bold text-[var(--text-dark)] mb-2">Telepon</h3>
              <p className="text-2xl font-bold text-[var(--maroon-primary)] mb-4">
                {companyInfo.phone}
              </p>
              <a
                href={`https://wa.me/${companyInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#25D366] font-semibold hover:gap-3 transition-all"
              >
                <MessageCircle size={18} />
                Chat WhatsApp
              </a>
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
                <div className="grid grid-cols-2 gap-4">
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
            <div className="bg-[var(--bg-light)] rounded-2xl p-8">
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
                  className="w-full btn-primary justify-center"
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