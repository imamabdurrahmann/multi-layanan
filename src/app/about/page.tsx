import { Target, Eye, Heart, Award, Users, CheckCircle } from "lucide-react";
import { companyInfo } from "@/config/company";

const visionValues = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Visi",
    description: "Menjadi perusahaan solusi bisnis terdepan yang memberikan nilai tambah bagi setiap klien dengan layanan berkualitas dan terpercaya.",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Misi",
    description: "Memberikan layanan pengadaan, konstruksi, travel, dan laundry dengan standar tertinggi untuk memenuhi kebutuhan bisnis klien.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Nilai",
    description: "Integritas, profesionalisme, dan inovasi menjadi landasan kami dalam setiap layanan yang diberikan.",
  },
];

const milestones = [
  { year: "2019", event: "PT Sunfelix didirikan dengan layanan pengadaan barang" },
  { year: "2020", event: "Ekspansi layanan ke sektor konstruksi" },
  { year: "2021", event: "Peluncuran layanan travel dan transportasi" },
  { year: "2022", event: "Perluasan layanan laundry profesional" },
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
      <section className="hero-section py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tentang Kami</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {companyInfo.name} adalah perusahaan solusi bisnis terpercaya yang menyediakan layanan pengadaan barang, konstruksi, travel, dan laundry untuk kebutuhan bisnis Anda.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold tracking-wider text-[var(--maroon-primary)] uppercase">Tentang {companyInfo.name}</span>
              <h2 className="section-title mt-2">Solusi Terpadu untuk Kebutuhan Bisnis Anda</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                Didirikan pada tahun {companyInfo.established}, {companyInfo.name} telah berkembang menjadi perusahaan solusi bisnis terpercaya di Indonesia. Dengan pengalaman lebih dari {yearsExperience} tahun, kami berkomitmen untuk memberikan layanan berkualitas tinggi yang disesuaikan dengan kebutuhan setiap klien.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Visi kami adalah menjadi mitra bisnis yang dapat diandalkan dalam setiap aspek operasional bisnis Anda. Melalui layanan pengadaan barang, konstruksi, travel, dan laundry, kami siap membantu bisnis Anda berkembang lebih efisien dan profesional.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[var(--maroon-primary)] to-[var(--maroon-light)] rounded-3xl p-8 text-white">
              <div className="text-center mb-8">
                <div className="text-6xl font-bold mb-2">SF</div>
                <div className="text-lg font-semibold">{companyInfo.name}</div>
                <div className="text-sm text-white/70 mt-2">Since {companyInfo.established}</div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-2xl font-bold">{yearsExperience}+</div>
                  <div className="text-sm text-white/70">Tahun Pengalaman</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm text-white/70">Klien Aktif</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-2xl font-bold">100+</div>
                  <div className="text-sm text-white/70">Proyek Selesai</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-2xl font-bold">4</div>
                  <div className="text-sm text-white/70">Layanan Utama</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section-alt py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-6xl text-[var(--maroon-light)] mb-6">"</div>
          <blockquote className="text-2xl md:text-3xl font-medium text-[var(--text-dark)] leading-relaxed mb-6">
            Kepercayaan klien adalah aset berharga yang kami jaga dengan sepenuh hati melalui dedikasi dan kualitas layanan terbaik.
          </blockquote>
          <cite className="text-[var(--maroon-primary)] font-semibold">— Manajemen {companyInfo.name}</cite>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="section-header">
            <span className="text-sm font-semibold tracking-wider text-[var(--maroon-primary)] uppercase">Filosofi Kami</span>
            <h2 className="section-title mt-2">Visi, Misi, dan Nilai</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {visionValues.map((item) => (
              <article key={item.title} className="card p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--maroon-primary)] to-[var(--maroon-light)] flex items-center justify-center text-white mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--text-dark)] mb-3">{item.title}</h3>
                <p className="text-[var(--text-secondary)]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section section-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="section-header">
            <span className="text-sm font-semibold tracking-wider text-[var(--maroon-primary)] uppercase">Perjalanan Kami</span>
            <h2 className="section-title mt-2">Kilau {companyInfo.name}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((m, i) => (
              <article key={i} className="card p-6 flex gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--maroon-primary)] to-[var(--maroon-light)] flex items-center justify-center text-white font-bold flex-shrink-0">
                  {m.year}
                </div>
                <p className="text-[var(--text-secondary)] self-center">{m.event}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold tracking-wider text-[var(--maroon-primary)] uppercase">Keunggulan Kami</span>
              <h2 className="section-title mt-2">Mengapa Memilih {companyInfo.name}?</h2>
              <p className="text-[var(--text-secondary)] mb-8">
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
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="card p-6 text-center">
                  <Award className="w-10 h-10 text-[var(--maroon-primary)] mx-auto mb-3" />
                  <h4 className="font-bold">Berkualitas</h4>
                  <p className="text-sm text-[var(--text-muted)]">Standar kualitas tertinggi</p>
                </div>
                <div className="card p-6 text-center">
                  <Users className="w-10 h-10 text-[var(--maroon-primary)] mx-auto mb-3" />
                  <h4 className="font-bold">Profesional</h4>
                  <p className="text-sm text-[var(--text-muted)]">Tim ahli berpengalaman</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="card p-6 text-center">
                  <CheckCircle className="w-10 h-10 text-[var(--maroon-primary)] mx-auto mb-3" />
                  <h4 className="font-bold">Terpercaya</h4>
                  <p className="text-sm text-[var(--text-muted)]">50+ klien puas</p>
                </div>
                <div className="card p-6 text-center">
                  <Target className="w-10 h-10 text-[var(--maroon-primary)] mx-auto mb-3" />
                  <h4 className="font-bold">Solusi Tepat</h4>
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
