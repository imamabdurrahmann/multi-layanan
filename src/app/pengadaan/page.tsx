import { Package, CheckCircle, ArrowRight, Shirt, Building } from "lucide-react";
import Link from "next/link";
import { productCategories, pengadaanPortfolio, pengadaanAdvantages } from "@/data/pengadaan";

export default function PengadaanPage() {
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
            <Package className="w-10 h-10 text-[var(--gold)]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pengadaan Barang</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Solusi pengadaan komprehensif untuk organisasi, perusahaan, dan lembaga di seluruh Indonesia
          </p>
        </div>
      </section>

      {/* Service Description */}
      <section className="section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold tracking-wider text-[var(--primary)] uppercase">Layanan Kami</span>
              <h2 className="section-title mt-2">Pengadaan Barang Profesional</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                Kami bergerak di beragam bidang pengadaan, mulai dari baju seragam, peralatan kantor, perlengkapan pekerjaan, hingga proyek pengadaan berskala besar. Dengan komitmen pada kualitas dan ketepatan waktu, kami menjadi mitra strategis bagi perusahaan, perkantoran, kementerian, serta lembaga lainnya.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Setiap produk yang kami tawarkan dirancang untuk mendukung kelancaran operasional dan meningkatkan citra profesional organisasi Anda.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pengadaanAdvantages.slice(0, 4).map((adv, i) => (
                <div key={i} className="card p-4 flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[var(--text-secondary)]">{adv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories from PDF */}
      <section className="section section-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="section-header text-center mb-12">
            <span className="text-sm font-semibold tracking-wider text-[var(--primary)] uppercase">Kategori Produk</span>
            <h2 className="section-title mt-2">Kategori Produk dan Layanan</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {productCategories.map((category, index) => (
              <article key={index} className="card p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] flex items-center justify-center text-white">
                    {index === 0 ? <Shirt className="w-6 h-6" /> : <Building className="w-6 h-6" />}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-dark)]">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {category.items.map((item) => (
                    <span key={item} className="text-sm px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full">
                      {item}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2">
                  {category.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
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
            <h2 className="section-title mt-2">Proyek yang Telah Kami Selesaikan</h2>
            <p className="section-subtitle mx-auto">
              Berikut adalah beberapa contoh proyek pengadaan yang telah kami kerjakan untuk berbagai klien
            </p>
          </div>

          <div className="portfolio-grid">
            {pengadaanPortfolio.map((item, i) => (
              <article key={i} className="portfolio-item">
                <div className="portfolio-image text-lg">
                  <Package className="w-10 h-10 text-white/50" />
                </div>
                <div className="portfolio-content">
                  <h3 className="font-bold text-[var(--text-dark)] mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--primary)] font-medium mb-2">{item.client}</p>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.items.map((tag) => (
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
          <h2 className="section-title mb-4">Butuh Pengadaan Barang untuk Organisasi Anda?</h2>
          <p className="text-[var(--text-secondary)] mb-8">
            Hubungi tim kami untuk konsultasi gratis dan penawaran harga terbaik. Kami siap membantu Anda dalam 1x24 jam.
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
