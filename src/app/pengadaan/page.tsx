import { Package, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const portfolioItems = [
  {
    title: "Pengadaan Peralatan Kantor",
    client: "PT Pertamina Hulu Energi",
    description: "Penyediaan lengkap peralatan kantor untuk operasional perusahaan minyak dan gas.",
    items: ["Meja Kerja Ergonomis", "Kursi Executive", "Lemari Arsip", "AC Unit"],
  },
  {
    title: "Pengadaan Alkes Rumah Sakit",
    client: "RSUD dr. Soetomo",
    description: "Pengadaan alat kesehatan untuk peralatan ruang operasi dan ICU.",
    items: ["Mesin Anestesi", "Monitor Pasien", "Infus Pump", "Ventilator"],
  },
  {
    title: "Pengadaan Komputer & IT",
    client: "PT Bank Central Asia",
    description: "Pengadaan infrastruktur IT untuk kantor cabang di seluruh Indonesia.",
    items: ["Desktop PC", "Printer Network", "Server Rack", "UPS System"],
  },
  {
    title: "Pengadaan Furniture Hotel",
    client: "Hotel Santika Premiere",
    description: "Pengadaan furniture lengkap untuk 200 kamar hotel bintang 4.",
    items: ["Bed Set Premium", "Mini Bar Cabinet", "Working Desk", "Wardrobe"],
  },
  {
    title: "Pengadaan Peralatan laboratorium",
    client: "Universitas Indonesia",
    description: "Peralatan laboratorium penelitian mutakhir untuk fakultas MIPA.",
    items: ["Mikroskop Digital", "Centrifuge", "Spectrophotometer", "Autoclave"],
  },
  {
    title: "Pengadaan Kendaraan Operasional",
    client: "PT PLN Persero",
    description: "Pengadaan kendaraan listrik untuk tim lapangan PLN di Jawa Barat.",
    items: ["Mobil Listrik", "Motor Listrik", "Charging Station", "Spare Parts"],
  },
];

const advantages = [
  "Harga kompetitif dengan kualitas terjamin",
  "Pengiriman tepat waktu ke seluruh Indonesia",
  "Garansi resmi dari distributor resmi",
  "Layanan purna jual dan maintenance",
  "Tim procurement berpengalaman",
  "Dokumentasi lengkap dan transparan",
];

export default function PengadaanPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full text-center">
          <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
            <Package className="w-10 h-10 text-[var(--gold-primary)]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pengadaan Barang</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Penyediaan komprehensif untuk kebutuhan kantor, operasional, dan industri dengan kualitas terjamin dan harga kompetitif
          </p>
        </div>
      </section>

      {/* Service Description */}
      <section className="section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold tracking-wider text-[var(--maroon-primary)] uppercase">Layanan Kami</span>
              <h2 className="section-title mt-2">Pengadaan Barang Profesional</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                PT Sunfelix menyediakan layanan pengadaan barang terlengkap untuk memenuhi kebutuhan bisnis Anda. Dengan jaringan supplier terpercaya dan tim procurement berpengalaman, kami menjamin kualitas produk dan ketepatan pengiriman.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Mulai dari peralatan kantor, furniture, alat kesehatan, hingga kendaraan operasional — kami siap membantu Anda mendapatkan produk terbaik dengan harga yang kompetitif.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {advantages.slice(0, 4).map((adv, i) => (
                <div key={i} className="card p-4 flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[var(--text-secondary)]">{adv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section section-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="section-header">
            <span className="text-sm font-semibold tracking-wider text-[var(--maroon-primary)] uppercase">Portofolio</span>
            <h2 className="section-title mt-2">Proyek Pengadaan yang Telah Kami Selesaikan</h2>
            <p className="section-subtitle mx-auto">
              Berikut adalah beberapa contoh proyek pengadaan yang telah kami kerjakan untuk berbagai klien
            </p>
          </div>

          <div className="portfolio-grid">
            {portfolioItems.map((item, i) => (
              <div key={i} className="portfolio-item">
                <div className="portfolio-image text-lg">
                  <Package className="w-10 h-10 text-white/50" />
                </div>
                <div className="portfolio-content">
                  <h3 className="font-bold text-[var(--text-dark)] mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--maroon-primary)] font-medium mb-2">{item.client}</p>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.items.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-[var(--bg-gray)] rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="section-title mb-4">Butuh Pengadaan Barang untuk Bisnis Anda?</h2>
          <p className="text-[var(--text-secondary)] mb-8">
            Hubungi tim kami untuk konsultasi gratis dan penawaran harga terbaik.
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
