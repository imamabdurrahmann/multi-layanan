import Link from "next/link";
import { Package, HardHat, Plane, Shirt, Award, Clock, ThumbsUp, Heart, Shield, ArrowRight, Phone } from "lucide-react";
import { companyInfo } from "@/config/company";

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

const whyChooseUs = [
  { icon: <Award className="w-6 h-6" />, title: "Profesional" },
  { icon: <Clock className="w-6 h-6" />, title: "Tepat Waktu" },
  { icon: <ThumbsUp className="w-6 h-6" />, title: "Hemat & Berkualitas" },
  { icon: <Heart className="w-6 h-6" />, title: "Layanan Prima" },
  { icon: <Shield className="w-6 h-6" />, title: "Garansi Services" },
];

export default function HomePage() {
  const experienceYears = new Date().getFullYear() - companyInfo.established;

  return (
    <div>
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-shapes">
          <div className="hero-shape hero-shape-1" />
          <div className="hero-shape hero-shape-2" />
          <div className="hero-shape hero-shape-3" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10">
          <div className="text-center py-16 md:py-24">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {companyInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 font-medium">
              {companyInfo.tagline}
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2 text-lg">
              Hubungi Kami
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="section bg-[var(--bg-light)]" id="layanan">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="section-header">
            <h2 className="section-title">Layanan Kami</h2>
            <p className="section-subtitle mx-auto">
              Kami menyediakan berbagai layanan profesional yang disesuaikan dengan kebutuhan bisnis Anda
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link href={service.href} key={service.title} className="service-card group">
                <div className="icon-wrapper group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-[var(--text-dark)] mb-3">{service.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--primary)] group-hover:gap-2 transition-all">
                  Lihat Detail
                  <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="section bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="section-header">
            <h2 className="section-title">Kenapa Pilih Kami</h2>
            <p className="section-subtitle mx-auto">
              Keunggulan yang membedakan kami dari penyedia layanan lainnya
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="why-card">
                <div className="why-icon">
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="stats-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="stat-card">
              <div className="stat-number">{experienceYears}+</div>
              <div className="stat-label">Tahun Pengalaman</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Klien Puas</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100+</div>
              <div className="stat-label">Proyek Selesai</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="cta-content">
            <h2>Siap Memulai Proyek Anda?</h2>
            <p>Hubungi kami untuk konsultasi gratis</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2 justify-center">
                Mulai Proyek Anda
                <ArrowRight size={18} />
              </Link>
              <a
                href={`https://wa.me/${companyInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp inline-flex items-center gap-2 justify-center"
              >
                <Phone size={18} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}