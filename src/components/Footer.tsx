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
                <a href={`https://wa.me/${companyInfo.whatsapp1}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-white/70 hover:text-[var(--gold)] transition-colors group">
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--gold)]/20 transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.296-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.478 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </div>
                  <div>
                    <span className="text-xs text-white/40 block">WhatsApp 1</span>
                    <span className="text-sm">{companyInfo.mobile1}</span>
                  </div>
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${companyInfo.whatsapp2}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-white/70 hover:text-[var(--gold)] transition-colors group">
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--gold)]/20 transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.296-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.478 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </div>
                  <div>
                    <span className="text-xs text-white/40 block">WhatsApp 2</span>
                    <span className="text-sm">{companyInfo.mobile2}</span>
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
