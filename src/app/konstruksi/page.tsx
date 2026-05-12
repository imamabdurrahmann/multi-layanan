import { HardHat, CheckCircle, ArrowRight, Building2, Wrench, Ruler } from "lucide-react";
import Link from "next/link";
import { companyInfo } from "@/config/company";
import { konstruksiPortfolio, konstruksiServices } from "@/data/konstruksi";

export default function KonstruksiPage() {
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
              <HardHat className="w-10 h-10 text-[var(--gold)]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Konstruksi</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Jasa konstruksi terpercaya untuk proyek infrastruktur, gedung, dan bangunan dengan standar keselamatan tinggi
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
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-dark)] mb-6">Jasa Konstruksi Profesional</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4 text-base">
                PT Sunfelix menyediakan layanan konstruksi lengkap untuk berbagai kebutuhan — mulai dari pembangunan gedung perkantoran, pabrik industri, hingga infrastruktur jalan dan jembatan.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4 text-base">
                Tim kami dilengkapi dengan tenaga ahli bersertifikat dan peralatan modern untuk menjamin setiap proyek selesai dengan hasil terbaik.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed text-base">
                Dengan komitmen pada keselamatan kerja (K3) dan quality control ketat, kami menjamin setiap proyek selesai tepat waktu dengan hasil terbaik.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Lingkup Layanan Konstruksi</h3>
              <ul className="space-y-4">
                {konstruksiServices.map((service, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[var(--gold)] flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="section-alt">
        <div className="max-w-6xl mx-auto px-6 lg:px-16">
          <div className="section-header text-center mb-12">
            <span className="text-sm font-semibold tracking-wider text-[var(--primary)] uppercase mb-3 block">Kategori Layanan</span>
            <h2 className="section-title">Jenis Konstruksi yang Kami Tangani</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <article className="card p-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] flex items-center justify-center text-white mx-auto mb-4">
                <Building2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-dark)] mb-3">Bangunan Komersial</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Gedung perkantoran, ruko, pusat perbelanjaan, dan fasilitas komersial lainnya dengan desain modern dan efisien.
              </p>
            </article>
            <article className="card p-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] flex items-center justify-center text-white mx-auto mb-4">
                <Wrench className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-dark)] mb-3">Konstruksi Industrial</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Pabrik, warehouse, gudang, dan fasilitas industrial dengan standar konstruksi berkualitas tinggi.
              </p>
            </article>
            <article className="card p-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] flex items-center justify-center text-white mx-auto mb-4">
                <Ruler className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-dark)] mb-3">Renovasi & Retrofitting</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Renovasi total, pembaruan fasilitas, dan upgrade sistem bangunan existing sesuai standar terkini.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section">
        <div className="max-w-6xl mx-auto px-6 lg:px-16">
          <div className="section-header">
            <span className="text-sm font-semibold tracking-wider text-[var(--primary)] uppercase mb-3 block">Portofolio</span>
            <h2 className="section-title">Proyek yang Telah Kami Selesaikan</h2>
            <p className="section-subtitle mx-auto mb-10 md:mb-14">
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
                  <h3 className="font-bold text-[var(--text-dark)] mb-3">{item.title}</h3>
                  <p className="text-sm text-[var(--primary)] font-medium mb-3">{item.client}</p>
                  <p className="text-sm text-[var(--text-secondary)] mb-6">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.scope.map((tag) => (
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
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-dark)] mb-4">Punya Proyek Konstruksi?</h2>
            <p className="text-lg text-[var(--text-secondary)] mb-8">
              Hubungi tim kami untuk konsultasi, survei lokasi, dan penawaran estimasi biaya. Kami siap membantu Anda dalam 1x24 jam.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary justify-center">
                Diskusikan Proyek
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
