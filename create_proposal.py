"""
Professional Proposal Document for Sunfelix Portfolio Website
Times New Roman, size 12, standard margins
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import inch, cm
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak, HRFlowable, KeepTogether
)
from reportlab.lib import colors
from datetime import datetime

# Page setup
PAGE_WIDTH, PAGE_HEIGHT = A4

# Standard margins (2.5cm top/bottom, 2cm left/right)
MARGIN_TOP = 2.5 * cm
MARGIN_BOTTOM = 2.5 * cm
MARGIN_LEFT = 2.0 * cm
MARGIN_RIGHT = 2.0 * cm

# Colors
COLOR_MAROON = colors.HexColor('#6B0F1A')
COLOR_GOLD = colors.HexColor('#D4A84B')
COLOR_GRAY = colors.HexColor('#4A4A5A')

def create_proposal():
    doc = SimpleDocTemplate(
        "D:/sunfelix-portfolio/PROPOSAL_Sunfelix_Portfolio.pdf",
        pagesize=A4,
        leftMargin=MARGIN_LEFT,
        rightMargin=MARGIN_RIGHT,
        topMargin=MARGIN_TOP,
        bottomMargin=MARGIN_BOTTOM
    )

    styles = getSampleStyleSheet()

    # Custom styles - Times New Roman, 12pt
    title_style = ParagraphStyle(
        'TitleStyle',
        parent=styles['Title'],
        fontName='Times-Roman',
        fontSize=18,
        textColor=COLOR_MAROON,
        alignment=TA_CENTER,
        spaceAfter=6
    )

    subtitle_style = ParagraphStyle(
        'SubtitleStyle',
        parent=styles['Normal'],
        fontName='Times-Roman',
        fontSize=14,
        textColor=COLOR_GOLD,
        alignment=TA_CENTER,
        spaceAfter=24
    )

    heading1_style = ParagraphStyle(
        'Heading1Style',
        parent=styles['Heading1'],
        fontName='Times-Bold',
        fontSize=14,
        textColor=COLOR_MAROON,
        spaceBefore=18,
        spaceAfter=12
    )

    heading2_style = ParagraphStyle(
        'Heading2Style',
        parent=styles['Heading2'],
        fontName='Times-Bold',
        fontSize=12,
        textColor=COLOR_GRAY,
        spaceBefore=12,
        spaceAfter=8
    )

    body_style = ParagraphStyle(
        'BodyStyle',
        parent=styles['Normal'],
        fontName='Times-Roman',
        fontSize=12,
        leading=16,
        alignment=TA_JUSTIFY,
        spaceAfter=8
    )

    list_style = ParagraphStyle(
        'ListStyle',
        parent=styles['Normal'],
        fontName='Times-Roman',
        fontSize=12,
        leading=14,
        leftIndent=20,
        spaceAfter=4
    )

    table_header_style = ParagraphStyle(
        'TableHeaderStyle',
        parent=styles['Normal'],
        fontName='Times-Bold',
        fontSize=12,
        textColor=colors.white,
        alignment=TA_CENTER
    )

    table_cell_style = ParagraphStyle(
        'TableCellStyle',
        parent=styles['Normal'],
        fontName='Times-Roman',
        fontSize=11,
        alignment=TA_LEFT,
        leading=14
    )

    price_style = ParagraphStyle(
        'PriceStyle',
        parent=styles['Normal'],
        fontName='Times-Bold',
        fontSize=12,
        textColor=COLOR_MAROON,
        alignment=TA_CENTER
    )

    footer_style = ParagraphStyle(
        'FooterStyle',
        parent=styles['Normal'],
        fontName='Times-Italic',
        fontSize=10,
        textColor=COLOR_GRAY,
        alignment=TA_CENTER
    )

    story = []

    # ===== COVER PAGE =====
    story.append(Spacer(1, 2*inch))

    # Company Header
    story.append(Paragraph("PT SUNFELIX", title_style))
    story.append(Paragraph("Solusi Bisnis Terpercaya", subtitle_style))
    story.append(Spacer(1, 0.5*inch))

    story.append(HRFlowable(width="80%", thickness=2, color=COLOR_GOLD, spaceBefore=12, spaceAfter=12))

    # Proposal Title
    story.append(Spacer(1, 1*inch))
    story.append(Paragraph("PENAWARAN HARGA", title_style))
    story.append(Spacer(1, 0.3*inch))
    story.append(Paragraph("Website Portfolio Company Profile", subtitle_style))

    story.append(Spacer(1, 1.5*inch))

    # Proposal Details Table
    proposal_data = [
        ['NOMOR PENAWARAN', ':', 'SF/PROP/2026/001'],
        ['TANGGAL', ':', datetime.now().strftime('%d %B %Y')],
        ['PAKET', ':', 'ALL-INCLUSIVE'],
        ['HARGA', ':', 'Rp 1.500.000'],
        ['PERIODE VALID', ':', '30 Hari'],
        ['STATUS', ':', 'Final Offer'],
    ]

    proposal_table = Table(proposal_data, colWidths=[2.5*inch, 0.5*inch, 3*inch])
    proposal_table.setStyle(TableStyle([
        ('FONTNAME', (0, 0), (-1, -1), 'Times-Roman'),
        ('FONTSIZE', (0, 0), (-1, -1), 12),
        ('ALIGN', (0, 0), (0, -1), 'LEFT'),
        ('ALIGN', (1, 0), (1, -1), 'CENTER'),
        ('ALIGN', (2, 0), (2, -1), 'LEFT'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
        ('TOPPADDING', (0, 0), (-1, -1), 8),
        ('FONTNAME', (0, 0), (0, -1), 'Times-Bold'),
    ]))
    story.append(proposal_table)

    story.append(Spacer(1, 2*inch))

    # Client Info
    client_data = [
        ['KEPADA:', ''],
        ['', 'Yth. Tim Manajemen'],
        ['', 'PT Sunfelix'],
        ['', 'Bengkulu'],
    ]

    client_table = Table(client_data, colWidths=[1.5*inch, 4.5*inch])
    client_table.setStyle(TableStyle([
        ('FONTNAME', (0, 0), (-1, -1), 'Times-Roman'),
        ('FONTSIZE', (0, 0), (-1, -1), 12),
        ('TOPPADDING', (0, 0), (-1, -1), 4),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
        ('FONTNAME', (0, 0), (0, 0), 'Times-Bold'),
        ('TEXTCOLOR', (0, 0), (0, 0), COLOR_GRAY),
    ]))
    story.append(client_table)

    story.append(PageBreak())

    # ===== PAGE 2: PROJECT SCOPE =====
    story.append(Paragraph("1. RUANG LINGKUP PROYEK", heading1_style))

    story.append(Paragraph(
        "Dokumen ini merupakan penawaran harga untuk pengembangan Website Portfolio "
        "Company Profile yang profesional dan responsif. Proyek ini dirancang untuk "
        "meningkatkan kehadiran digital PT Sunfelix dengan fitur-fitur premium yang "
        "mendukung citra perusahaan.",
        body_style
    ))

    story.append(Spacer(1, 0.3*inch))
    story.append(Paragraph("1.1 Deskripsi Layanan", heading2_style))

    scope_items = [
        "Pengembangan website company profile modern dengan 6 halaman utama",
        "Desain custom theme dengan warna korporat Maroon dan Gold",
        "Fitur responsif mobile-first untuk semua perangkat",
        "Animasi dan efek visual premium untuk pengalaman pengguna",
        "Integrasi WhatsApp untuk komunikasi langsung dengan klien",
        "Contact form dengan validasi input",
        "Deployment dan hosting siap production"
    ]

    for item in scope_items:
        story.append(Paragraph(f"•  {item}", list_style))

    story.append(Spacer(1, 0.3*inch))
    story.append(Paragraph("1.2 Halaman Website", heading2_style))

    pages_data = [
        ['No.', 'Nama Halaman', 'Deskripsi'],
        ['1', 'Homepage', 'Hero section, layanan, statistics, CTA'],
        ['2', 'About', 'Visi misi, timeline, keunggulan perusahaan'],
        ['3', 'Contact', 'Info kontak, form, quick links layanan'],
        ['4', 'Pengadaan Barang', 'Detail layanan pengadaan'],
        ['5', 'Konstruksi', 'Detail layanan konstruksi'],
        ['6', 'Travel', 'Detail layanan travel'],
        ['7', 'Laundry', 'Detail layanan laundry'],
    ]

    pages_table = Table(pages_data, colWidths=[0.5*inch, 1.5*inch, 4*inch])
    pages_table.setStyle(TableStyle([
        ('FONTNAME', (0, 0), (-1, 0), 'Times-Bold'),
        ('FONTNAME', (0, 1), (-1, -1), 'Times-Roman'),
        ('FONTSIZE', (0, 0), (-1, -1), 11),
        ('BACKGROUND', (0, 0), (-1, 0), COLOR_MAROON),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
        ('ALIGN', (0, 0), (-1, 0), 'CENTER'),
        ('ALIGN', (0, 1), (0, -1), 'CENTER'),
        ('ALIGN', (1, 1), (-1, -1), 'LEFT'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.gray),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
        ('LEFTPADDING', (0, 0), (-1, -1), 8),
    ]))
    story.append(pages_table)

    story.append(PageBreak())

    # ===== PAGE 3: FEATURES & PRICING =====
    story.append(Paragraph("2. FITUR PREMIUM", heading1_style))

    story.append(Paragraph("2.1 Design & Layout", heading2_style))

    design_features = [
        "Custom theme dengan warna korporat (Maroon #6B0F1A, Gold #D4A84B)",
        "Hero section dengan animated floating shapes",
        "Glass morphism effects (backdrop-blur) untuk modern look",
        "Gradient backgrounds yang professional",
        "Sticky navbar dengan hamburger menu untuk mobile",
        "Smooth hover animations & transitions",
        "Scroll reveal animations untuk engagement",
        "Custom fonts dengan typography hierarchy"
    ]

    for i, item in enumerate(design_features, 1):
        story.append(Paragraph(f"{i}. {item}", list_style))

    story.append(Spacer(1, 0.2*inch))
    story.append(Paragraph("2.2 Komponen & Fungsionalitas", heading2_style))

    func_features = [
        "Responsive design untuk desktop, tablet, dan mobile",
        "Mobile hamburger menu dengan auto-close saat scroll",
        "WhatsApp floating button dengan direct link",
        "Contact form dengan focus states dan validasi",
        "Active navigation state indicator",
        "Service-specific CTA buttons yang personalized",
        "Client logo grid dengan hover effects",
        "Portfolio cards dengan smooth animations"
    ]

    for i, item in enumerate(func_features, 1):
        story.append(Paragraph(f"{i}. {item}", list_style))

    story.append(Spacer(1, 0.3*inch))
    story.append(Paragraph("2.3 Technical Features", heading2_style))

    tech_features = [
        "Next.js 15 with App Router (modern framework)",
        "Tailwind CSS v4 (utility-first styling)",
        "TypeScript (type-safe development)",
        "SEO-friendly structure dengan semantic HTML",
        "Performance optimized (lazy loading, code splitting)",
        "Deployment ready (Vercel compatible)",
        "Clean code architecture untuk maintainability"
    ]

    for i, item in enumerate(tech_features, 1):
        story.append(Paragraph(f"{i}. {item}", list_style))

    story.append(Spacer(1, 0.3*inch))
    story.append(Paragraph("3. KOMPONEN WEBSITE", heading1_style))

    components_data = [
        ['Komponen', 'Deskripsi', 'Status'],
        ['Navbar', 'Sticky header dengan mobile menu', 'Included'],
        ['Hero Section', 'Animasi floating shapes + gradient', 'Included'],
        ['Services Grid', '4 layanan dengan icon & deskripsi', 'Included'],
        ['Why Choose Us', 'Keunggulan perusahaan dengan stats', 'Included'],
        ['CTA Section', 'Call-to-action buttons responsif', 'Included'],
        ['Footer', 'Company info, contact, social links', 'Included'],
        ['WhatsApp Button', 'Floating CTA dengan direct link', 'Included'],
        ['Contact Form', 'Form dengan validasi input', 'Included'],
        ['Process Section', 'Timeline layanan perusahaan', 'Included'],
    ]

    components_table = Table(components_data, colWidths=[1.8*inch, 3.2*inch, 1*inch])
    components_table.setStyle(TableStyle([
        ('FONTNAME', (0, 0), (-1, 0), 'Times-Bold'),
        ('FONTNAME', (0, 1), (-1, -1), 'Times-Roman'),
        ('FONTSIZE', (0, 0), (-1, -1), 11),
        ('BACKGROUND', (0, 0), (-1, 0), COLOR_MAROON),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
        ('ALIGN', (0, 0), (-1, 0), 'CENTER'),
        ('ALIGN', (2, 0), (2, -1), 'CENTER'),
        ('ALIGN', (0, 1), (1, -1), 'LEFT'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.gray),
        ('TOPPADDING', (0, 0), (-1, -1), 5),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 5),
        ('LEFTPADDING', (0, 0), (-1, -1), 6),
        ('BACKGROUND', (2, 1), (2, -1), colors.HexColor('#E8F5E9')),
        ('TEXTCOLOR', (2, 1), (2, -1), colors.HexColor('#2E7D32')),
    ]))
    story.append(components_table)

    story.append(PageBreak())

    # ===== PAGE 4: PRICING TABLE =====
    story.append(Paragraph("4. BREAKDOWN HARGA", heading1_style))

    story.append(Paragraph(
        "Berikut adalah rincian harga per komponen dan fitur yang dikembangkan:",
        body_style
    ))

    story.append(Spacer(1, 0.2*inch))

    pricing_data = [
        ['No.', 'Deskripsi Item', 'Satuan', 'Harga (Rp)'],
        ['1', 'Custom Design & Theme Development', 'Paket', '300.000'],
        ['2', 'Hero Section + Animations', 'Paket', '150.000'],
        ['3', 'Homepage Development', 'Paket', '200.000'],
        ['4', 'About Page', 'Paket', '150.000'],
        ['5', 'Contact Page + Form', 'Paket', '150.000'],
        ['6', 'Service Pages (4x)', 'Paket', '200.000'],
        ['7', 'Responsive Mobile Optimization', 'Paket', '100.000'],
        ['8', 'WhatsApp Integration', 'Paket', '50.000'],
        ['9', 'Navbar + Footer Components', 'Paket', '100.000'],
        ['10', 'Deployment + Hosting Setup', 'Paket', '50.000'],
        ['', '', 'SUBTOTAL', '1.450.000'],
        ['', '', 'TOTAL', '1.500.000'],
    ]

    pricing_table = Table(pricing_data, colWidths=[0.5*inch, 3*inch, 1*inch, 1.5*inch])
    pricing_table.setStyle(TableStyle([
        ('FONTNAME', (0, 0), (-1, 0), 'Times-Bold'),
        ('FONTNAME', (0, 1), (1, -1), 'Times-Roman'),
        ('FONTNAME', (2, 1), (2, -1), 'Times-Roman'),
        ('FONTNAME', (3, 1), (3, -1), 'Times-Roman'),
        ('FONTSIZE', (0, 0), (-1, -1), 11),
        ('BACKGROUND', (0, 0), (-1, 0), COLOR_MAROON),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('ALIGN', (1, 1), (1, -1), 'LEFT'),
        ('ALIGN', (3, 1), (3, -1), 'RIGHT'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('GRID', (0, 0), (-1, 0), 0.5, COLOR_MAROON),
        ('LINEBELOW', (0, 0), (-1, 0), 1, COLOR_MAROON),
        ('LINEABOVE', (0, -3), (-1, -3), 0.5, colors.gray),
        ('LINEABOVE', (0, -2), (-1, -2), 1, colors.black),
        ('LINEABOVE', (0, -1), (-1, -1), 2, COLOR_MAROON),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
        ('LEFTPADDING', (0, 0), (-1, -1), 6),
        ('FONTNAME', (0, -3), (-1, -1), 'Times-Bold'),
        ('BACKGROUND', (0, -1), (-1, -1), colors.HexColor('#FFF8E1')),
        ('TEXTCOLOR', (0, -1), (-1, -1), COLOR_MAROON),
    ]))
    story.append(pricing_table)

    story.append(Spacer(1, 0.5*inch))

    # Price range
    story.append(Paragraph("4.1 Paket Harga", heading2_style))

    story.append(Paragraph(
        "Harga paket sudah include semua fitur premium, tanpa biaya tersembunyi:",
        body_style
    ))

    story.append(Spacer(1, 0.3*inch))

    # Main price highlight
    price_data = [
        ['PAKET ALL-INCLUSIVE'],
        ['SEMUA FITUR PREMIUM INCLUDED'],
    ]

    price_table = Table(price_data, colWidths=[6*inch])
    price_table.setStyle(TableStyle([
        ('FONTNAME', (0, 0), (-1, -1), 'Times-Bold'),
        ('FONTSIZE', (0, 0), (0, 0), 18),
        ('FONTSIZE', (0, 1), (0, 1), 12),
        ('BACKGROUND', (0, 0), (-1, -1), COLOR_MAROON),
        ('TEXTCOLOR', (0, 0), (-1, -1), colors.white),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('TOPPADDING', (0, 0), (-1, -1), 15),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 15),
    ]))
    story.append(price_table)

    story.append(Spacer(1, 0.2*inch))

    price_amount_data = [
        ['Rp 1.500.000'],
        ['(Satu Juta Lima Ratus Ribu Rupiah)'],
    ]

    price_amount_table = Table(price_amount_data, colWidths=[6*inch])
    price_amount_table.setStyle(TableStyle([
        ('FONTNAME', (0, 0), (-1, -1), 'Times-Bold'),
        ('FONTSIZE', (0, 0), (0, 0), 24),
        ('FONTSIZE', (0, 1), (0, 1), 11),
        ('TEXTCOLOR', (0, 0), (-1, -1), COLOR_MAROON),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('TOPPADDING', (0, 0), (-1, -1), 10),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 10),
    ]))
    story.append(price_amount_table)

    story.append(Spacer(1, 0.3*inch))

    story.append(Paragraph(
        "Harga sudah include:",
        body_style
    ))

    included_items = [
        "Custom design dengan theme premium",
        "6 halaman website lengkap",
        "Responsive mobile optimization",
        "WhatsApp floating button integration",
        "Contact form dengan validasi",
        "Animasi dan effects premium",
        "Deployment dan hosting setup",
        "Support teknis 1 bulan"
    ]

    for item in included_items:
        story.append(Paragraph(f"✓  {item}", list_style))

    story.append(PageBreak())

    # ===== PAGE 5: TERMS & CONDITIONS =====
    story.append(Paragraph("5. KETENTUAN DAN SYARAT", heading1_style))

    terms = [
        ("5.1", "Pengerjaan",
         "Proyek akan dimulai setelah Down Payment (DP) sebesar 50% dari total nilai diterima. Estimasi waktu pengerjaan 2-3 minggu tergantung kompleksitas."),
        ("5.2", "Revisi",
         "Paket Premium mencakup maksimal 3 kali revisi minor. Revisi mayor akan dikenakan biaya tambahan sesuai kesepakatan."),
        ("5.3", "Payment Terms",
         "- Down Payment: 50% saat kontrak ditandatangani\n- Progress Payment: 30% saat mockup disetujui\n- Final Payment: 20% saat website live"),
        ("5.4", "Garansi",
         "Garansi 1 bulan untuk bug fixing dan error handling setelah website resmi launch. Garansi tidak mencakup perubahan konten atau fitur baru."),
        ("5.5", "Ownership",
         "Setelah pembayaran lunas, seluruh source code dan asset akan menjadi milik klien. Kami berhak menampilkan project ini sebagai portofolio dengan persetujuan klien."),
        ("5.6", "Maintenance",
         "Layanan maintenance opsional dengan biaya Rp 500.000/bulan mencakup: monitoring uptime, backup mingguan, update security patches, dan support teknis."),
    ]

    for num, title, content in terms:
        story.append(Paragraph(f"{num} {title}", heading2_style))
        story.append(Paragraph(content.replace('\n', '<br/>'), body_style))

    story.append(Spacer(1, 0.3*inch))
    story.append(Paragraph("6. DETAIL TEKNIS", heading1_style))

    tech_specs = [
        "Framework: Next.js 15 dengan App Router",
        "Styling: Tailwind CSS v4 dengan custom theme",
        "Bahasa: TypeScript untuk type safety",
        "Hosting: Vercel (production-ready deployment)",
        "Domain: Belum termasuk (opsional)",
        "SSL: Included dengan Vercel deployment",
        "Performance: Optimized untuk Core Web Vitals",
    ]

    for item in tech_specs:
        story.append(Paragraph(f"•  {item}", list_style))

    story.append(PageBreak())

    # ===== PAGE 6: CLOSING =====
    story.append(Paragraph("7. PENUTUP", heading1_style))

    story.append(Paragraph(
        "Kami mengucapkan terima kasih atas perhatian dan kepercayaan Anda terhadap "
        "layanan kami. Proposal ini kami susun dengan penuh keseriusan untuk memberikan "
        "solusi terbaik bagi kebutuhan digital perusahaan Anda.",
        body_style
    ))

    story.append(Spacer(1, 0.2*inch))

    story.append(Paragraph(
        "Dengan pengalaman dan dedication tim kami, kami yakin dapat delivering sebuah "
        "website yang tidak hanya beautiful secara visual, tetapi juga efektif dalam "
        "mendukung business objectives perusahaan.",
        body_style
    ))

    story.append(Spacer(1, 0.3*inch))

    story.append(Paragraph(
        "Kami siap memulai diskusi lebih lanjut dan menjawab setiap pertanyaan yang "
        "mungkin ada. Silakan hubungi kami untuk scheduling meeting atau konsultasi gratis.",
        body_style
    ))

    story.append(Spacer(1, 0.5*inch))

    # Signature Section
    story.append(Paragraph("Hormat kami,", body_style))
    story.append(Spacer(1, 0.5*inch))
    story.append(Paragraph("Tim Development", body_style))
    story.append(Spacer(1, 0.3*inch))
    story.append(Paragraph("<b>PT Sunfelix</b>", body_style))

    story.append(Spacer(1, 0.8*inch))

    # Contact info
    contact_info = [
        "Phone: 0812-3456-7890",
        "Email: info@sunfelix.co.id",
        "Website: www.sunfelix.co.id",
    ]

    for info in contact_info:
        story.append(Paragraph(info, footer_style))

    story.append(Spacer(1, 0.5*inch))

    # Terms note
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.gray))
    story.append(Spacer(1, 0.2*inch))

    story.append(Paragraph(
        "<i>Note: Penawaran ini bersifat mengikat selama 30 hari sejak tanggal surat. "
        "Harga sudah all-inclusive, tidak ada biaya tersembunyi. "
        "Semua harga sudah final.</i>",
        footer_style
    ))

    story.append(Spacer(1, 0.3*inch))

    # Appendix reference
    story.append(Paragraph(
        "Lampiran: Demo website dapat dilihat di https://sunfelix-portfolio.vercel.app",
        footer_style
    ))

    story.append(Spacer(1, 0.3*inch))

    # Quick summary box
    summary_data = [
        ['RINGKASAN PENAWARAN'],
        ['Paket All-Inclusive: Rp 1.500.000'],
        ['Include Semua Fitur Premium'],
        ['Support 1 Bulan'],
    ]

    summary_table = Table(summary_data, colWidths=[5*inch])
    summary_table.setStyle(TableStyle([
        ('FONTNAME', (0, 0), (-1, -1), 'Times-Bold'),
        ('FONTSIZE', (0, 0), (0, 0), 12),
        ('FONTSIZE', (0, 1), (0, 1), 14),
        ('FONTSIZE', (0, 2), (-1, -1), 10),
        ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor('#FFF3E0')),
        ('TEXTCOLOR', (0, 0), (-1, -1), COLOR_MAROON),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('BOX', (0, 0), (-1, -1), 1, COLOR_GOLD),
        ('TOPPADDING', (0, 0), (-1, -1), 8),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
    ]))
    story.append(Spacer(1, 0.2*inch))
    story.append(summary_table)

    # Build document
    doc.build(story)
    print("PDF created successfully: D:/sunfelix-portfolio/PROPOSAL_Sunfelix_Portfolio.pdf")

if __name__ == "__main__":
    create_proposal()