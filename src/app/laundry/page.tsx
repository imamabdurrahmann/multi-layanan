import { Shirt, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { laundryPortfolio, laundryServices } from "@/data/laundry";

export default function LaundryPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full text-center">
          <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
            <Shirt className="w-10 h-10 text-[var(--gold-primary)]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Laundry</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Jasa laundry profesional untuk hotel, rumah sakit, dan bisnis dengan hasil bersih dan higienis
          </p>
        </div>
      </section>

      {/* Service Description */}
      <section className="section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold tracking-wider text-[var(--maroon-primary)] uppercase">Layanan Kami</span>
              <h2 className="section-title mt-2">Jasa Laundry Profesional</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                PT Sunfelix menyediakan layanan laundry profesional untuk memenuhi kebutuhan bisnis Anda. Dengan mesin laundry modern dan tim berpengalaman, kami menjamin hasil yang bersih, wangi, dan higienis untuk setiap jenis linen dan seragam.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Mulai dari laundry hotel bintang 5, rumah sakit, hingga laundry industrial untuk perusahaan mining — kami siap menangani volume besar dengan konsistensi kualitas tinggi.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[var(--maroon-primary)] to-[var(--maroon-light)] rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Lingkup Layanan Laundry</h3>
              <ul className="space-y-3">
                {laundryServices.map((service, i) => (
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
            <h2 className="section-title mt-2">Proyek Laundry yang Telah Kami Layani</h2>
            <p className="section-subtitle mx-auto">
              Berikut adalah beberapa contoh klien laundry yang telah percaya pada layanan kami
            </p>
          </div>

          <div className="portfolio-grid">
            {laundryPortfolio.map((item, i) => (
              <article key={i} className="portfolio-item">
                <div className="portfolio-image flex-col text-lg gap-2">
                  <Shirt className="w-10 h-10 text-white/50" />
                  <span className="text-sm text-white/70">{item.volume}</span>
                </div>
                <div className="portfolio-content">
                  <h3 className="font-bold text-[var(--text-dark)] mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--maroon-primary)] font-medium mb-2">{item.client}</p>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{item.description}</p>
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
      <section className="section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="section-title mb-4">Butuh Layanan Laundry untuk Bisnis Anda?</h2>
          <p className="text-[var(--text-secondary)] mb-8">
            Hubungi tim kami untuk survei kebutuhan dan penawaran harga khusus.
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
