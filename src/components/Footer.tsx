import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import { companyInfo } from "@/config/company";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 py-12 lg:py-16">
          {/* Company Info Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 relative flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt={companyInfo.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-white leading-tight text-sm lg:text-base">{companyInfo.name}</h3>
                <p className="text-sm text-[var(--gold)]">{companyInfo.tagline}</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Memberikan layanan profesional dalam pengadaan barang, konstruksi, travel, dan laundry untuk kebutuhan bisnis Anda.
            </p>
            {/* Social Media */}
            <div className="flex items-center gap-3">
              <a
                href={companyInfo.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#E1306C] hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a
                href={companyInfo.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[var(--gold)] rounded-full"></span>
              Kontak Kami
            </h4>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${companyInfo.phone}`} className="flex items-start gap-3 text-white/70 hover:text-[var(--gold)] transition-colors group">
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--gold)]/20 transition-colors">
                    <MessageCircle size={16} />
                  </div>
                  <div>
                    <span className="text-xs text-white/40 block">Telepon</span>
                    <span className="text-sm">{companyInfo.phone}</span>
                  </div>
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${companyInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-white/70 hover:text-[var(--gold)] transition-colors group">
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--gold)]/20 transition-colors">
                    <MessageCircle size={16} />
                  </div>
                  <div>
                    <span className="text-xs text-white/40 block">Seluler</span>
                    <span className="text-sm">{companyInfo.mobile1}</span>
                    <span className="text-sm block">{companyInfo.mobile2}</span>
                  </div>
                </a>
              </li>
              <li>
                <a href={`mailto:${companyInfo.email}`} className="flex items-start gap-3 text-white/70 hover:text-[var(--gold)] transition-colors group">
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--gold)]/20 transition-colors">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="text-xs text-white/40 block">Email</span>
                    <span className="text-sm">{companyInfo.email}</span>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70 group">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="text-xs text-white/40 block">Alamat</span>
                  <span className="text-sm">{companyInfo.address}</span>
                  <span className="text-sm block">{companyInfo.city}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[var(--gold)] rounded-full"></span>
              Tautan Cepat
            </h4>
            <ul className="space-y-2">
              {companyInfo.footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-white/70 hover:text-[var(--gold)] hover:translate-x-1 transition-all duration-300"
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Links Section */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[var(--gold)] rounded-full"></span>
              Media Sosial
            </h4>
            <div className="space-y-4">
              <a
                href={companyInfo.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-[#E1306C]/20 border border-white/10 hover:border-[#E1306C]/50 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </div>
                <div>
                  <span className="text-xs text-white/40 block">Instagram</span>
                  <span className="text-sm text-white group-hover:text-[#E1306C] transition-colors">{companyInfo.instagram}</span>
                </div>
              </a>
              <a
                href={companyInfo.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-[#1877F2]/20 border border-white/10 hover:border-[#1877F2]/50 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#1877F2] flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </div>
                <div>
                  <span className="text-xs text-white/40 block">Facebook</span>
                  <span className="text-sm text-white group-hover:text-[#1877F2] transition-colors">{companyInfo.facebook}</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50 text-center sm:text-left">
              © {currentYear} {companyInfo.name}. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-xs text-white/40 hover:text-white/70 transition-colors">
                Kebijakan Privasi
              </Link>
              <Link href="/terms" className="text-xs text-white/40 hover:text-white/70 transition-colors">
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
