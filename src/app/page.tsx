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
      {/* Hero Section */}
      <section className="hero-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="hero-content">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-white/90 font-medium">Melayani Sejak 2019</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Solusi Bisnis <span className="text-[var(--gold-primary)]">Terpercaya</span> untuk Kebutuhan Anda
              </h1>

              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                PT Sunfelix menyediakan layanan pengadaan barang, konstruksi, travel, dan laundry untuk membantu bisnis Anda berkembang dengan efisien dan profesional.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Hubungi Kami
                  <ArrowRight size={18} />
                </Link>
                <Link href="/about" className="btn-secondary">
                  Pelajari Lebih Lanjut
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-[var(--gold-primary)] to-[var(--gold-dark)] flex items-center justify-center shadow-2xl">
                  <div className="text-center text-[var(--maroon-dark)] p-8">
                    <div className="text-6xl font-bold mb-2">SF</div>
                    <div className="text-sm font-semibold">Sunfelix</div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[var(--gold-light)] opacity-40 blur-xl animate-pulse" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-[var(--maroon-light)] opacity-30 blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-2xl shadow-sm border border-[var(--bg-gray)]">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--maroon-primary)] to-[var(--maroon-light)] flex items-center justify-center text-white mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-[var(--maroon-primary)]">{stat.value}</div>
                <div className="text-sm text-[var(--text-secondary)] mt-1">{stat.label}</div>
              </div>
            ))}
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
