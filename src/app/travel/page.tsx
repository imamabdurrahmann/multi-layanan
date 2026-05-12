import { Plane, CheckCircle, ArrowRight, Train, Hotel } from "lucide-react";
import Link from "next/link";
import { companyInfo } from "@/config/company";
import { travelCategories, travelPortfolio, travelServices } from "@/data/travel";

export default function TravelPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section py-16 md:py-20">
        <div className="hero-shapes">
          <div className="hero-shape hero-shape-1" />
          <div className="hero-shape hero-shape-2" />
          <div className="hero-shape hero-shape-3" />
        </div>
        <div className="max-w-6xl mx-auto px-6 lg:px-16 w-full text-center relative z-10">
          <div className="py-20 md:py-32">
            <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
              <Plane className="w-10 h-10 text-[var(--gold)]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Travel</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Layanan perjalanan dan akomodasi untuk kebutuhan bisnis dan pemerintahan
            </p>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="section">
        <div className="max-w-6xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <span className="text-sm font-semibold tracking-wider text-[var(--primary)] uppercase mb-3 block">Layanan Kami</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-dark)] mb-6">Layanan Perjalanan dan Akomodasi</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4 text-base">
                Kami menyediakan layanan perjalanan lengkap untuk memenuhi kebutuhan transportasi bisnis Anda. Dari pemesanan tiket kereta api, pesawat, hingga booking hotel — kami pastikan perjalanan Anda lancar dan nyaman.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4 text-base">
                Dengan kemitraan dari maskapai dan hotel ternama, kami menawarkan harga kompetitif dan layanan berkualitas untuk kebutuhan perjalanan Anda.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed italic text-base">
                Kami bekerja sama dengan mitra resmi untuk harga terbaik, fleksibilitas jadwal, dan proses booking yang transparan serta sesuai regulasi pengadaan pemerintah jika diperlukan.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {travelServices.slice(0, 4).map((service, i) => (
                <div key={i} className="card p-6 flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[var(--text-secondary)]">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Travel Categories from PDF */}
      <section className="section-alt">
        <div className="max-w-6xl mx-auto px-6 lg:px-16">
          <div className="section-header text-center mb-12">
            <span className="text-sm font-semibold tracking-wider text-[var(--primary)] uppercase mb-3 block">Kategori Layanan</span>
            <h2 className="section-title">Layanan Perjalanan dan Akomodasi</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {travelCategories.map((category, index) => (
              <article key={index} className="card p-6 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] flex items-center justify-center text-white mx-auto mb-4">
                  {index === 0 ? <Train className="w-8 h-8" /> : index === 1 ? <Plane className="w-8 h-8" /> : <Hotel className="w-8 h-8" />}
                </div>
                <h3 className="text-xl font-bold text-[var(--text-dark)] mb-3">{category.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{category.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section">
        <div className="max-w-6xl mx-auto px-6 lg:px-16">
          <div className="section-header">
            <span className="text-sm font-semibold tracking-wider text-[var(--primary)] uppercase mb-3 block">Portofolio</span>
            <h2 className="section-title">Proyek yang Telah Kami Layani</h2>
            <p className="section-subtitle mx-auto mb-10 md:mb-14">
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
                  <h3 className="font-bold text-[var(--text-dark)] mb-3">{item.title}</h3>
                  <p className="text-sm text-[var(--primary)] font-medium mb-3">{item.client}</p>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{item.description}</p>
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-[var(--text-muted)] mb-2">Rute:</p>
                    <div className="flex flex-wrap gap-2">
                      {item.routes.map((route) => (
                        <span key={route} className="text-xs px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full">
                          {route}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.services.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 bg-[var(--bg-gray)] rounded-full">
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
        <div className="max-w-6xl mx-auto px-6 lg:px-16">
          <div className="max-w-2xl mx-auto text-center py-16 md:py-20">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-dark)] mb-4">Butuh Layanan Travel untuk Perjalanan Anda?</h2>
            <p className="text-lg text-[var(--text-secondary)] mb-8">
              Hubungi tim kami untuk konsultasi itinerary dan penawaran harga terbaik. Kami siap membantu Anda dalam 1x24 jam.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary justify-center">
                Konsultasi Gratis
                <ArrowRight size={18} />
              </Link>
              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href={`https://wa.me/${companyInfo.whatsapp1}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp justify-center text-sm"
                >
                  WA Admin 1
                </a>
                <a
                  href={`https://wa.me/${companyInfo.whatsapp2}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp justify-center text-sm"
                >
                  WA Admin 2
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
