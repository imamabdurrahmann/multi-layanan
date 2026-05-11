import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { companyInfo } from "@/config/company";

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-xl text-white/80">
            Tim kami siap membantu Anda 24/7
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <span className="text-sm font-semibold tracking-wider text-[var(--maroon-primary)] uppercase">Hubungi Kami</span>
              <h2 className="section-title mt-2 mb-6">Siap Membantu Anda</h2>

              <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
                Hubungi tim kami untuk konsultasi gratis, penawaran harga, atau pertanyaan tentang layanan kami. Kami siap merespons setiap kebutuhan bisnis Anda.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--maroon-primary)] to-[var(--maroon-light)] flex items-center justify-center text-white flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--text-dark)] mb-1">Alamat Kantor</h4>
                    <p className="text-[var(--text-secondary)]">
                      {companyInfo.address}<br />
                      {companyInfo.city}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--maroon-primary)] to-[var(--maroon-light)] flex items-center justify-center text-white flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--text-dark)] mb-1">Telepon / WhatsApp</h4>
                    <p className="text-[var(--text-secondary)]">
                      {companyInfo.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--maroon-primary)] to-[var(--maroon-light)] flex items-center justify-center text-white flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--text-dark)] mb-1">Email</h4>
                    <p className="text-[var(--text-secondary)]">
                      {companyInfo.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--maroon-primary)] to-[var(--maroon-light)] flex items-center justify-center text-white flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--text-dark)] mb-1">Jam Operasional</h4>
                    <p className="text-[var(--text-secondary)]">
                      {companyInfo.operatingHours.weekdays}<br />
                      {companyInfo.operatingHours.saturday}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/${companyInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#20bd5a] transition-colors"
                >
                  <MessageCircle size={20} />
                  Chat WhatsApp
                </a>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--maroon-primary)] text-white font-semibold rounded-lg hover:bg-[var(--maroon-light)] transition-colors"
                >
                  <Mail size={20} />
                  Kirim Email
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card p-8">
              <h3 className="text-xl font-bold text-[var(--text-dark)] mb-6">Kirim Pesan</h3>
              <form className="space-y-4" action="https://formspree.io/f/your-form-id" method="POST">
                <div>
                  <label htmlFor="name" className="form-label">Nama Lengkap</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="Masukkan nama Anda"
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
                    placeholder="Tulis pesan atau pertanyaan Anda..."
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

      {/* Map Placeholder */}
      <section className="section-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-[var(--maroon-primary)] to-[var(--maroon-light)] rounded-3xl p-12 text-center text-white">
            <MapPin size={48} className="mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl font-bold mb-2">Lokasi Kantor</h3>
            <p className="text-white/80 mb-4">
              {companyInfo.address}, {companyInfo.city}
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--maroon-primary)] font-semibold rounded-lg hover:bg-white/90 transition-colors"
            >
              Buka di Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
