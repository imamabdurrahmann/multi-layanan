import { Plane, Train, Hotel, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { travelCategories, travelPortfolio, travelServices } from "@/data/travel";

export default function TravelPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section py-16">
        <div className="hero-shapes">
          <div className="hero-shape hero-shape-1" />
          <div className="hero-shape hero-shape-2" />
          <div className="hero-shape hero-shape-3" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full text-center relative z-10">
          <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
            <Plane className="w-10 h-10 text-[var(--gold)]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Travel</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Layanan perjalanan dan akomodasi untuk kebutuhan bisnis dan pemerintahan
          </p>
        </div>
      </section>

      {/* Service Description */}
      <section className="section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold tracking-wider text-[var(--primary)] uppercase">Layanan Kami</span>
              <h2 className="section-title mt-2">Layanan Perjalanan dan Akomodasi</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                Kami menyediakan layanan perjalanan lengkap untuk memenuhi kebutuhan transportasi bisnis Anda. Dari pemesanan tiket kereta api, pesawat, hingga booking hotel — kami pastikan perjalanan Anda lancar dan nyaman.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                Dengan kemitraan dari maskapai dan hotel ternama, kami menawarkan harga kompetitif dan layanan berkualitas untuk kebutuhan perjalanan Anda.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed italic">
                Kami bekerja sama dengan mitra resmi untuk harga terbaik, fleksibilitas jadwal, dan proses booking yang transparan serta sesuai regulasi pengadaan pemerintah jika diperlukan.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {travelServices.slice(0, 4).map((service, i) => (
                <div key={i} className="card p-4 flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[var(--text-secondary)]">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Travel Categories from PDF */}
      <section className="section section-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="section-header text-center mb-12">
            <span className="text-sm font-semibold tracking-wider text-[var(--primary)] uppercase">Kategori Layanan</span>
            <h2 className="section-title mt-2">Layanan Perjalanan dan Akomodasi</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {travelCategories.map((category, index) => (
              <article key={index} className="card p-6 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] flex items-center justify-center text-white mx-auto mb-4">
                  {index === 0 ? <Train className="w-8 h-8" /> : index === 1 ? <Plane className="w-8 h-8" /> : <Hotel className="w-8 h-8" />}
                </div>
                <h3 className="text-xl font-bold text-[var(--text-dark)] mb-2">{category.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{category.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="section-header">
            <span className="text-sm font-semibold tracking-wider text-[var(--primary)] uppercase">Portofolio</span>
            <h2 className="section-title mt-2">Proyek yang Telah Kami Layani</h2>
            <p className="section-subtitle mx-auto">
              Berikut adalah beberapa contoh layanan travel untuk klien kami
            </p>
          </div>

          <div className="portfolio-grid">
            {travelPortfolio.map((item, i) => (
              <article key={i} className="portfolio-item">
                <div className="portfolio-image flex-col text-lg gap-2">
                  <Plane className="w-10 h-10 text-white/50" />
                </div>
                <div className="portfolio-content">
                  <h3 className="font-bold text-[var(--text-dark)] mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--primary)] font-medium mb-2">{item.client}</p>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{item.description}</p>
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-[var(--text-muted)] mb-1">Rute:</p>
                    <div className="flex flex-wrap gap-1">
                      {item.routes.map((route) => (
                        <span key={route} className="text-xs px-2 py-1 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full">
                          {route}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.services.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-[var(--bg-gray)] rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="section-title mb-4">Butuh Layanan Travel untuk Perjalanan Anda?</h2>
          <p className="text-[var(--text-secondary)] mb-8">
            Hubungi tim kami untuk konsultasi itinerary dan penawaran harga terbaik. Kami siap membantu Anda dalam 1x24 jam.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary justify-center">
              Konsultasi Gratis
              <ArrowRight size={18} />
            </Link>
            <a
              href={`https://wa.me/6282133100565`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp justify-center"
            >
              Chat WhatsApp
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
