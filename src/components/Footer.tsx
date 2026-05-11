import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const footerLinks = [
  { href: "/", label: "Beranda" },
  { href: "/about", label: "Tentang Kami" },
  { href: "/pengadaan", label: "Pengadaan" },
  { href: "/konstruksi", label: "Konstruksi" },
  { href: "/travel", label: "Travel" },
  { href: "/laundry", label: "Laundry" },
  { href: "/contact", label: "Hubungi Kami" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-2xl mb-4 flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <span className="text-[var(--gold-primary)] font-bold">SF</span>
              </div>
              PT Sunfelix
            </h3>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              Solusi bisnis terpercaya untuk pengadaan barang, konstruksi, travel, dan laundry. Melayani dengan profesionalisme dan dedikasi tinggi.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--gold-primary)] transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-[var(--gold-light)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Hubungi Kami</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-[var(--gold-primary)] flex-shrink-0" />
                <span className="text-white/70">
                 Jl. Bisnis Indonesia No. 123<br />
                  Jakarta Pusat 10110
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 text-[var(--gold-primary)] flex-shrink-0" />
                <span className="text-white/70">+62 812-3456-7890</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 text-[var(--gold-primary)] flex-shrink-0" />
                <span className="text-white/70">info@sunfelix.co.id</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-sm text-white/50">
          © {new Date().getFullYear()} PT Sunfelix. Hak Cipta Dilindungi.
        </div>
      </div>
    </footer>
  );
}
