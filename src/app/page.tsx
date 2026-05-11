import Link from "next/link";
import { ArrowRight, Package, HardHat, Plane, Shirt, Users, Award, Clock, Shield } from "lucide-react";

const services = [
  {
    icon: <Package className="w-8 h-8" />,
    title: "Pengadaan Barang",
    description: "Penyediaan komprehensif untuk kebutuhan kantor, operasional, dan industri dengan kualitas terjamin.",
    href: "/pengadaan",
  },
  {
    icon: <HardHat className="w-8 h-8" />,
    title: "Konstruksi",
    description: "Jasa konstruksi terpercaya untuk proyek infrastruktur, gedung, dan bangunan dengan standar keselamatan tinggi.",
    href: "/konstruksi",
  },
  {
    icon: <Plane className="w-8 h-8" />,
    title: "Travel",
    description: "Layanan travel dan transportasi untuk kebutuhan bisnis dan wisata dengan armada yang terawat.",
    href: "/travel",
  },
  {
    icon: <Shirt className="w-8 h-8" />,
    title: "Laundry",
    description: "Jasa laundry profesional untuk hotel, rumah sakit, dan bisnis dengan hasil bersih dan higienis.",
    href: "/laundry",
  },
];

const stats = [
  { icon: <Users className="w-6 h-6" />, value: "50+", label: "Klien Puas" },
  { icon: <Award className="w-6 h-6" />, value: "100+", label: "Proyek Selesai" },
  { icon: <Clock className="w-6 h-6" />, value: "5+", label: "Tahun Pengalaman" },
  { icon: <Shield className="w-6 h-6" />, value: "100%", label: "Garansi Mutu" },
];

const clientLogos = [
  "PT Pertamina",
  "PT PLN",
  "PT Garuda Indonesia",
  "PT Freeport",
  "PT Antam",
  "PT Semen Indonesia",
  "PT Adhi Karya",
  "PT Waskita Karya",
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section - Modern Corporate */}
      <section className="hero-section">
        {/* Animated Background Shapes */}
        <div className="hero-shapes">
          <div className="hero-shape hero-shape-1" />
          <div className="hero-shape hero-shape-2" />
          <div className="hero-shape hero-shape-3" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="hero-content">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6 border border-white/20">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-white/90 font-medium">Melayani Sejak 2019</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Solusi Bisnis <span className="text-[var(--gold-primary)]">Terpercaya</span> untuk Kebutuhan Anda
              </h1>

              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-xl">
                PT Sunfelix menyediakan layanan pengadaan barang, konstruksi, travel, dan laundry untuk membantu bisnis Anda berkembang dengan efisien dan profesional.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary group">
                  Hubungi Kami
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/about" className="btn-secondary">
                  Pelajari Lebih Lanjut
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="flex gap-8 mt-12 pt-8 border-t border-white/20">
                <div>
                  <div className="text-3xl font-bold text-[var(--gold-primary)]">50+</div>
                  <div className="text-sm text-white/70">Klien Puas</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[var(--gold-primary)]">100+</div>
                  <div className="text-sm text-white/70">Proyek Selesai</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[var(--gold-primary)]">5+</div>
                  <div className="text-sm text-white/70">Tahun Pengalaman</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                {/* Main Card */}
                <div className="w-72 h-72 rounded-3xl bg-gradient-to-br from-[var(--gold-primary)] to-[var(--gold-dark)] flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="text-center text-[var(--maroon-dark)] p-8">
                    <div className="text-7xl font-black mb-2">SF</div>
                    <div className="text-lg font-bold tracking-wider">Sunfelix</div>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-[var(--gold-light)] opacity-30 blur-2xl animate-pulse" />
                <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-white/10 blur-xl" />
                <div className="absolute top-1/2 -right-4 w-4 h-4 bg-[var(--gold-primary)] rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
                <div className="absolute bottom-1/4 -left-2 w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section" id="layanan">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="section-header">
            <span className="text-sm font-semibold tracking-wider text-[var(--maroon-primary)] uppercase">Layanan Kami</span>
            <h2 className="section-title mt-2">Solusi Lengkap untuk Bisnis Anda</h2>
            <p className="section-subtitle mx-auto">
              Kami menyediakan berbagai layanan profesional yang disesuaikan dengan kebutuhan bisnis Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link href={service.href} key={service.title} className="service-card group">
                <div className="icon-wrapper group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-[var(--text-dark)] mb-3">{service.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--maroon-primary)] group-hover:gap-2 transition-all">
                  Lihat Detail
                  <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="section section-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="section-header">
            <span className="text-sm font-semibold tracking-wider text-[var(--maroon-primary)] uppercase">Mitra Bisnis</span>
            <h2 className="section-title mt-2">Klien yang Telah Percaya pada Kami</h2>
            <p className="section-subtitle mx-auto">
              PT Sunfelix telah melayani berbagai perusahaan terkemuka di Indonesia
            </p>
          </div>

          <div className="client-logo-grid">
            {clientLogos.map((client) => (
              <div key={client} className="client-logo-item">
                <span>{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="section-title mb-4">Siap Bekerja Sama dengan Kami?</h2>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            Hubungi tim kami sekarang untuk konsultasi gratis dan penawaran terbaik untuk kebutuhan bisnis Anda.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Hubungi Sekarang
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
