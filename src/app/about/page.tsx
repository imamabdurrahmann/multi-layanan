import Image from "next/image";
import { Target, Eye, Heart, Award, Users, CheckCircle, Sparkles, Shield, Handshake } from "lucide-react";
import { companyInfo } from "@/config/company";

const visionMission = {
  vision: {
    title: "Visi",
    icon: <Eye className="w-7 h-7" />,
    description: "Menjadi perusahaan yang kreatif, profesional, dan terpercaya dalam menyediakan solusi komprehensif bagi berbagai kebutuhan organisasi, serta menjadi mitra strategis yang tumbuh bersama klien di tingkat nasional maupun global.",
  },
  missions: [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Memberikan Solusi Terbaik",
      description: "Menyediakan produk dan layanan yang beragam dengan kualitas unggul sesuai kebutuhan.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Menjunjung Integritas dan Profesionalisme",
      description: "Menjalankan setiap proses bisnis dengan transparansi, kejujuran, dan komitmen terhadap standar kerja yang tinggi.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Mendorong Inovasi dan Efisiensi",
      description: "Menghadirkan pendekatan kreatif dan adaptif untuk meningkatkan efektivitas serta nilai tambah bagi klien.",
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "Membangun Kemitraan Jangka Panjang",
      description: "Menjalin hubungan kerja sama yang saling menguntungkan, berkelanjutan, dan berorientasi pada pertumbuhan bersama.",
    },
  ],
};

const aboutContent = {
  title: "Tentang SPS",
  mainDescription: `${companyInfo.name} Indonesia hadir dengan semangat muda, kreatif, dan profesional untuk memberikan solusi pengadaan terbaik bagi berbagai kebutuhan perusahaan hingga kementerian dan lembaga. Kami bergerak di beragam bidang pengadaan, mulai dari baju seragam, peralatan kantor, perlengkapan pekerjaan, hingga proyek pengadaan berskala besar.`,
  secondaryDescription: "Dengan komitmen pada kualitas, ketepatan waktu, dan pelayanan yang berorientasi pada kepuasan klien, kami menjadi mitra strategis bagi perusahaan, perkantoran, kementerian, serta lembaga lainnya. Setiap produk dan layanan yang kami tawarkan dirancang untuk mendukung kelancaran operasional dan meningkatkan citra profesional organisasi Anda.",
  quote: "Kami percaya bahwa pengadaan bukan sekadar menyediakan barang, tetapi juga menghadirkan nilai tambah melalui efisiensi, inovasi, dan kepercayaan. Oleh karena itu, Sunfelix Prima Solusi senantiasa berupaya menjadi mitra yang dapat diandalkan.",
};

const milestones = [
  { year: "2012", event: "PT Sunfelix Prima Solusi didirikan di Bengkulu" },
  { year: "2015", event: "Ekspansi layanan pengadaan barang ke seluruh Sumatra" },
  { year: "2018", event: "Peluncuran layanan konstruksi dan travel" },
  { year: "2020", event: "Perluasan layanan laundry profesional" },
  { year: "2023", event: "Mencapai 50+ klien aktif" },
  { year: "2024", event: "100+ proyek sukses diselesaikan" },
];

const teamValues = [
  "Tim profesional dan berpengalaman",
  "Komitmen pada kualitas dan ketepatan waktu",
  "Solusi yang disesuaikan dengan kebutuhan klien",
  "Harga kompetitif dan transparan",
  "Layanan purna jual yang responsif",
  "Standar keamanan dan keselamatan tinggi",
];

export default function AboutPage() {
  const yearsExperience = new Date().getFullYear() - companyInfo.established;

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-shapes">
          <div className="hero-shape hero-shape-1" />
          <div className="hero-shape hero-shape-2" />
          <div className="hero-shape hero-shape-3" />
        </div>
        <div className="max-w-6xl mx-auto px-6 lg:px-16 w-full text-center relative z-10">
          <div className="py-20 md:py-32">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">Tentang Kami</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              Solusi pengadaan komprehensif untuk organisasi, perusahaan, dan lembaga di seluruh Indonesia
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview - New Content from PDF */}
      <section className="section">
        <div className="max-w-6xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <span className="text-sm font-semibold tracking-wider text-[var(--primary)] uppercase mb-3 block">Tentang SPS</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-dark)] mb-6">Solusi Terpadu untuk Kebutuhan Bisnis Anda</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-6 text-base">
                {aboutContent.mainDescription}
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-6 text-base">
                {aboutContent.secondaryDescription}
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed italic text-base">
                "{aboutContent.quote}"
              </p>
            </div>
            <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] rounded-3xl p-8 text-white">
              <div className="text-center mb-8">
                <div className="w-32 h-32 mx-auto mb-4 relative">
                  <Image
                    src="/images/logo.png"
                    alt={companyInfo.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-lg font-semibold">{companyInfo.shortName}</div>
                <div className="text-sm text-white/70 mt-2">Since {companyInfo.established}</div>
              </div>
              <div className="grid grid-cols-2 gap-4 md:gap-6 text-center">
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="text-2xl font-bold">{yearsExperience}+</div>
                  <div className="text-sm text-white/70">Tahun Pengalaman</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm text-white/70">Klien Aktif</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="text-2xl font-bold">100+</div>
                  <div className="text-sm text-white/70">Proyek Selesai</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="text-2xl font-bold">4</div>
                  <div className="text-sm text-white/70">Layanan Utama</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Updated from PDF */}
      <section className="section-alt">
        <div className="max-w-6xl mx-auto px-6 lg:px-16">
          <div className="section-header text-center mb-12">
            <span className="text-sm font-semibold tracking-wider text-[var(--primary)] uppercase mb-3 block">Filosofi Kami</span>
            <h2 className="section-title">Visi dan Misi</h2>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-[var(--bg-gray)] mb-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] flex items-center justify-center text-white flex-shrink-0">
                {visionMission.vision.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--text-dark)] mb-4">{visionMission.vision.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">{visionMission.vision.description}</p>
              </div>
            </div>
          </div>

          {/* Mission Grid */}
          <h3 className="text-xl font-bold text-[var(--text-dark)] mb-6 text-center">Misi Kami</h3>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {visionMission.missions.map((mission, index) => (
              <article key={index} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-[var(--bg-gray)]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] flex items-center justify-center text-white flex-shrink-0">
                    {mission.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--text-dark)] mb-2">{mission.title}</h4>
                    <p className="text-sm text-[var(--text-secondary)]">{mission.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section">
        <div className="max-w-6xl mx-auto px-6 lg:px-16">
          <div className="section-header">
            <span className="text-sm font-semibold tracking-wider text-[var(--primary)] uppercase mb-3 block">Perjalanan Kami</span>
            <h2 className="section-title">Kilau {companyInfo.name}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {milestones.map((m, i) => (
              <article key={i} className="card p-6 flex gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] flex items-center justify-center text-white font-bold flex-shrink-0">
                  {m.year}
                </div>
                <p className="text-[var(--text-secondary)] self-center">{m.event}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-alt">
        <div className="max-w-6xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <span className="text-sm font-semibold tracking-wider text-[var(--primary)] uppercase mb-3 block">Keunggulan Kami</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-dark)] mb-6">Mengapa Memilih {companyInfo.name}?</h2>
              <p className="text-[var(--text-secondary)] mb-8 text-base">
                Dengan pengalaman lebih dari {yearsExperience} tahun, kami telah membangun reputasi sebagai mitra bisnis yang dapat diandalkan. Berikut adalah alasan mengapa Anda harus memilih kami:
              </p>
              <ul className="space-y-4">
                {teamValues.map((value, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle size={16} className="text-green-600" />
                    </div>
                    <span className="text-[var(--text-secondary)]">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-6">
                <div className="card p-6 text-center">
                  <Award className="w-10 h-10 text-[var(--primary)] mx-auto mb-3" />
                  <h4 className="font-bold text-base mb-2">Berkualitas</h4>
                  <p className="text-sm text-[var(--text-muted)]">Standar kualitas tertinggi</p>
                </div>
                <div className="card p-6 text-center">
                  <Users className="w-10 h-10 text-[var(--primary)] mx-auto mb-3" />
                  <h4 className="font-bold text-base mb-2">Profesional</h4>
                  <p className="text-sm text-[var(--text-muted)]">Tim ahli berpengalaman</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="card p-6 text-center">
                  <CheckCircle className="w-10 h-10 text-[var(--primary)] mx-auto mb-3" />
                  <h4 className="font-bold text-base mb-2">Terpercaya</h4>
                  <p className="text-sm text-[var(--text-muted)]">50+ klien puas</p>
                </div>
                <div className="card p-6 text-center">
                  <Heart className="w-10 h-10 text-[var(--primary)] mx-auto mb-3" />
                  <h4 className="font-bold text-base mb-2">Solusi Tepat</h4>
                  <p className="text-sm text-[var(--text-muted)]">Sesuai kebutuhan Anda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
