import { Shirt, CheckCircle, ArrowRight, Sparkles, Shield, Clock } from "lucide-react";
import Link from "next/link";
import { laundryPortfolio, laundryServices } from "@/data/laundry";

export default function LaundryPage() {
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
              <Shirt className="w-10 h-10 text-[var(--gold)]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Laundry</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Jasa laundry profesional untuk hotel, rumah sakit, dan bisnis dengan hasil bersih dan higienis
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
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-dark)] mb-6">Jasa Laundry Profesional</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4 text-base">
                PT Sunfelix menyediakan layanan laundry profesional untuk memenuhi kebutuhan bisnis Anda. Dengan mesin laundry modern dan tim berpengalaman, kami menjamin hasil yang bersih, wangi, dan higienis untuk setiap jenis linen dan seragam.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed text-base">
                Mulai dari laundry hotel bintang 5, rumah sakit, hingga laundry industrial untuk perusahaan — kami siap menangani volume besar dengan konsistensi kualitas tinggi.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Lingkup Layanan Laundry</h3>
              <ul className="space-y-4">
                {laundryServices.map((service, i) => (
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

      {/* Service Features */}
      <section className="section-alt">
        <div className="max-w-6xl mx-auto px-6 lg:px-16">
          <div className="section-header text-center mb-12">
            <span className="text-sm font-semibold tracking-wider text-[var(--primary)] uppercase mb-3 block">Keunggulan Kami</span>
            <h2 className="section-title">Mengapa Memilih Layanan Laundry Kami?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <article className="card p-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] flex items-center justify-center text-white mx-auto mb-4">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-dark)] mb-3">Hasil Berkualitas</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Pencucian dengan deterjen premium dan teknologi modern untuk hasil bersih dan wangi tahan lama.
              </p>
            </article>
            <article className="card p-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] flex items-center justify-center text-white mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-dark)] mb-3">Standar Higienis</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Protokol pencucian sesuai standar medis dan hotel bintang 5 untuk jaminan kebersihan maksimal.
              </p>
            </article>
            <article className="card p-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] flex items-center justify-center text-white mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-dark)] mb-3">Tepat Waktu</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Pengiriman tepat waktu sesuai jadwal yang disepakati untuk kelancaran operasional bisnis Anda.
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
            <h2 className="section-title">Klien yang Telah Kami Layani</h2>
            <p className="section-subtitle mx-auto mb-10 md:mb-14">
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
                  <h3 className="font-bold text-[var(--text-dark)] mb-3">{item.title}</h3>
                  <p className="text-sm text-[var(--primary)] font-medium mb-3">{item.client}</p>
                  <p className="text-sm text-[var(--text-secondary)] mb-6">{item.description}</p>
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
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-dark)] mb-4">Butuh Layanan Laundry untuk Bisnis Anda?</h2>
            <p className="text-lg text-[var(--text-secondary)] mb-8">
              Hubungi tim kami untuk survei kebutuhan dan penawaran harga khusus. Kami siap membantu Anda dalam 1x24 jam.
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
        </div>
      </section>
    </div>
  );
}
