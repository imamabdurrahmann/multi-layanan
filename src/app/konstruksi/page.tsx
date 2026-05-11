import { HardHat, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { konstruksiPortfolio, konstruksiServices } from "@/data/konstruksi";

export default function KonstruksiPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full text-center">
          <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
            <HardHat className="w-10 h-10 text-[var(--gold-primary)]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Konstruksi</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Jasa konstruksi terpercaya untuk proyek infrastruktur, gedung, dan bangunan dengan standar keselamatan tinggi
          </p>
        </div>
      </section>

      {/* Service Description */}
      <section className="section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold tracking-wider text-[var(--maroon-primary)] uppercase">Layanan Kami</span>
              <h2 className="section-title mt-2">Jasa Konstruksi Profesional</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                PT Sunfelix menyediakan layanan konstruksi lengkap untuk berbagai kebutuhan — mulai dari pembangunan gedung perkantoran, pabrik industri, hingga infrastruktur jalan dan jembatan. Tim kami dilengkapi dengan tenaga ahli bersertifikat dan peralatan modern.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Dengan komitmen pada keselamatan kerja (K3) dan quality control ketat, kami menjamin setiap proyek selesai tepat waktu dengan hasil terbaik.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[var(--maroon-primary)] to-[var(--maroon-light)] rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Lingkup Layanan Konstruksi</h3>
              <ul className="space-y-3">
                {konstruksiServices.map((service, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[var(--gold-light)] flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section section-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="section-header">
            <span className="text-sm font-semibold tracking-wider text-[var(--maroon-primary)] uppercase">Portofolio</span>
            <h2 className="section-title mt-2">Proyek Konstruksi yang Telah Kami Selesaikan</h2>
            <p className="section-subtitle mx-auto">
              Berikut adalah beberapa contoh proyek konstruksi yang telah kami kerjakan dengan hasil memuaskan
            </p>
          </div>

          <div className="portfolio-grid">
            {konstruksiPortfolio.map((item, i) => (
              <article key={i} className="portfolio-item">
                <div className="portfolio-image flex-col text-lg gap-2">
                  <HardHat className="w-10 h-10 text-white/50" />
                  <span className="text-sm text-white/70">{item.year}</span>
                </div>
                <div className="portfolio-content">
                  <h3 className="font-bold text-[var(--text-dark)] mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--maroon-primary)] font-medium mb-2">{item.client}</p>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.scope.map((tag) => (
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
      <section className="section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="section-title mb-4">Punya Proyek Konstruksi?</h2>
          <p className="text-[var(--text-secondary)] mb-8">
            Hubungi tim kami untuk konsultasi, survei lokasi, dan penawaran estimasi biaya.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Hubungi Kami
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
