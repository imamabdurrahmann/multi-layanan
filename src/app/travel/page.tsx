import { Plane, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const portfolioItems = [
  {
    title: "Corporate Travel Management",
    client: "PT Freeport Indonesia",
    description: "Layanan travel management untuk karyawan kontraktor Freeport di Timika, Papua.",
    routes: ["Timika - Jakarta", "Timika - Bali", "Timika - Surabaya"],
    services: ["Tiket Pesawat", "Hotel", "Transportasi Darat", "Asuransi Travel"],
  },
  {
    title: "Rute Penerbangan Haji & Umroh",
    client: "PT Samawa Airways",
    description: "Penjadwalan penerbangan charter untuk jamaah haji dan umroh dari Indonesia.",
    routes: ["Jakarta - Jeddah", "Surabaya - Jeddah", "Makassar - Jeddah"],
    services: ["Tiket Grup", "Kontrak Charter", "Ground Handling", "Visa Processing"],
  },
  {
    title: "Transportasi Eksekutif",
    client: "PT Bank Mandiri",
    description: "Layanan transportasi untuk tim direksi dan manajemen Bank Mandiri.",
    routes: ["Jakarta - Bandung", "Jakarta - Bogor", "Jakarta - Surabaya"],
    services: ["Sewa Mobil Premium", "Chauffeur Service", "Airport Transfer", "City Tour"],
  },
  {
    title: "Logistik Cargo",
    client: "PT Jalur Nugraha Ekakurir (JNE)",
    description: "Jasa pengiriman cargo dan logistik untuk jaringan distribusi JNE di Jawa.",
    routes: ["Semua Rute di Jawa", "Jakarta - Lampung", "Surabaya - Bali"],
    services: ["Cargo Udara", "Cargo Laut", "Pengiriman Express", "Warehousing"],
  },
  {
    title: "Wedding Transport",
    client: "Hotel Raffles Jakarta",
    description: "Layanan transportasi premium untuk acara pernikahan dan gala dinner.",
    routes: ["Jakarta Area", "Tangerang - Jakarta", "Bogor - Jakarta"],
    services: ["Limousine", "Classic Car", "Decoration", "Driver Profesional"],
  },
  {
    title: "Medical Evacuation",
    client: "RS Premier Bintaro",
    description: "Layanan transportasi medis untuk rujukan pasien antar rumah sakit.",
    routes: ["Semua Rumah Sakit di Jabodetabek", "Jawa - Singapura", "Jawa - Malaysia"],
    services: ["Ambulans ICU", "Medical Team", "Air Ambulance", "Coordinated Transfer"],
  },
];

const services = [
  "Tiket Penerbangan Domestik & Internasional",
  "Sewa Mobil dan Transportasi Darat",
  "Booking Hotel dan Akomodasi",
  "Visa dan Immigration Service",
  "Travel Insurance",
  "Corporate Travel Management",
];

export default function TravelPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full text-center">
          <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
            <Plane className="w-10 h-10 text-[var(--gold-primary)]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Travel</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Layanan travel dan transportasi untuk kebutuhan bisnis dan wisata dengan armada yang terawat dan profesional
          </p>
        </div>
      </section>

      {/* Service Description */}
      <section className="section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold tracking-wider text-[var(--maroon-primary)] uppercase">Layanan Kami</span>
              <h2 className="section-title mt-2">Layanan Travel Komprehensif</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                PT Sunfelix menyediakan layanan travel lengkap untuk memenuhi kebutuhan transportasi bisnis Anda. Dari pemesanan tiket pesawat, sewa mobil, hingga booking hotel — kami pastikan perjalanan Anda lancar dan nyaman.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Dengan kemitraan dari maskapai dan hotel ternama, kami menawarkan harga kompetitif dan layanan berkualitas untuk corporate travel management Anda.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {services.slice(0, 4).map((service, i) => (
                <div key={i} className="card p-4 flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[var(--text-secondary)]">{service}</span>
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
            <h2 className="section-title mt-2">Proyek Travel yang Telah Kami Layani</h2>
            <p className="section-subtitle mx-auto">
              Berikut adalah beberapa contoh proyek travel dan transportasi untuk klien kami
            </p>
          </div>

          <div className="portfolio-grid">
            {portfolioItems.map((item, i) => (
              <div key={i} className="portfolio-item">
                <div className="portfolio-image flex-col text-lg gap-2">
                  <Plane className="w-10 h-10 text-white/50" />
                </div>
                <div className="portfolio-content">
                  <h3 className="font-bold text-[var(--text-dark)] mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--maroon-primary)] font-medium mb-2">{item.client}</p>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{item.description}</p>
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-[var(--text-muted)] mb-1">Rute:</p>
                    <div className="flex flex-wrap gap-1">
                      {item.routes.map((route) => (
                        <span key={route} className="text-xs px-2 py-1 bg-[var(--maroon-primary)]/10 text-[var(--maroon-primary)] rounded-full">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="section-title mb-4">Butuh Layanan Travel untuk Bisnis Anda?</h2>
          <p className="text-[var(--text-secondary)] mb-8">
            Hubungi tim kami untuk konsultasi itinerary dan penawaran harga terbaik.
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
