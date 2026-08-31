from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "Resume.pdf"

NAME = "Harsh Pandey"
ROLE = "Full-Stack Product Engineer"
CONTACTS = [
    ("Pune, India", None),
    ("coding.harshp@gmail.com", "mailto:coding.harshp@gmail.com"),
    ("harshpandey.com", "https://harshpandey.com"),
    ("github.com/harshpandey002", "https://github.com/harshpandey002"),
    ("linkedin.com/in/harshpandey002", "https://www.linkedin.com/in/harshpandey002"),
]

SUMMARY = (
    "Full-stack product engineer with 5+ years of experience building polished web and mobile products "
    "across consumer apps, event platforms, trading tools, Web3 interfaces, dashboards, and developer utilities. "
    "Strongest at the intersection of product UI and practical systems: React, Next.js, TypeScript, React Native/Expo, "
    "realtime data, local-first storage, API design, Prisma-backed backends, and stateful workflows that need to stay "
    "understandable under pressure."
)

EXPERIENCE = [
    {
        "company": "Juice Labs",
        "role": "Full-Stack Developer",
        "date": "Jan 2023 - Present",
        "bullets": [
            "Worked across a production fan-engagement and rewards platform for live events, including quests, prizes, affiliate codes, workspace/market flows, venue show-board UX, scheduled notifications, API payloads, and redemption/refund paths.",
            "Contributed inside a TypeScript monorepo spanning Next.js server and dashboard apps, mobile/Capacitor surfaces, super-admin tooling, shared core/react packages, CLI utilities, API docs, and product docs.",
            "Improved reliability around Prisma transactions, tests, Sentry/ClickHouse-backed observability, and AWS-integrated infrastructure.",
        ],
    },
    {
        "company": "AppSecure Security",
        "role": "Front-End Developer",
        "date": "Jan 2022 - Aug 2022",
        "bullets": [
            "Designed and built the secure frontend for PentaBug, a bug bounty platform used by security researchers and organizations, using Next.js, React, and Auth0.",
            "Helped onboard 200+ hackers and 5 companies in the first month after launch.",
        ],
    },
    {
        "company": "Freelance",
        "role": "Full-Stack Developer",
        "date": "Jul 2021 - Nov 2022",
        "bullets": [
            "Built client products including BlockTrain, EduCompanion, and Beyond Pinks across education, mentoring, blockchain learning, and product-content workflows.",
            "Built BlockTrain as a full-stack blockchain education platform with courses, articles, tutorials, and project guides; reached 125k+ visitors in its first 2 months.",
        ],
    },
]

PROJECTS = [
    {
        "name": "Pouch - Expense Tracker",
        "link": "https://apps.apple.com/us/app/pouch-expense-tracker/id6779575380",
        "meta": "Expo, React Native, TypeScript, SQLite, Drizzle, RevenueCat, Zustand",
        "bullets": [
            "Shipped an iOS/Android-first personal finance app with categories, groups, budgets, calendar views, insights, CSV export, onboarding, and trial/paywall flows.",
            "Built local-first data flows with Expo Router, NativeWind, SQLite + Drizzle, Reanimated/Gesture Handler, SVG charts, and subscription plumbing.",
        ],
    },
    {
        "name": "Roost",
        "link": "https://apps.apple.com/us/app/roost-v2/id6743691245",
        "meta": "Expo, React Native, Google Places/Maps, Express, Prisma, PostgreSQL",
        "bullets": [
            "Shipped an iOS social food-discovery app for nearby/trending restaurants, wishlists, reviews, photo uploads, profiles, and follows.",
            "Built location/reverse-geocoding flows, SecureStore auth, push notifications, UploadThing uploads, Zustand state, and a bundled Express + Prisma backend.",
        ],
    },
    {
        "name": "Algo Trading",
        "link": "https://trading.harshpandey.com",
        "meta": "Next.js, TypeScript, Kite Connect, WebSockets, SSE, Sentry",
        "bullets": [
            "Built a single-tenant options execution desk with live ticks, candle sync, option-chain selection, risk-based sizing, armed entries, stop-loss, and square-off flows.",
            "Implemented frozen anchor candles, synthetic stop-limit triggers, durable active-trade state, order reconciliation, SSE fan-out, logging, and deployment safeguards.",
        ],
    },
    {
        "name": "LockWars",
        "link": None,
        "meta": "Expo, React Native, TypeScript, Firebase, Socket.io, Zustand, Jotai",
        "bullets": [
            "Built a fantasy sports mobile app with auth, lobbies, lineups, player cards, matchup rooms, promotions, wallets, and realtime chat.",
        ],
    },
]

SKILLS = [
    ("Frontend", "React, Next.js, React Native, Expo, TypeScript, Tailwind CSS, NativeWind, shadcn/ui, Radix UI"),
    ("Backend/Data", "Node.js, Express, Prisma, Drizzle, PostgreSQL, SQLite, MongoDB, Firebase, REST APIs, WebSockets, SSE"),
    ("Systems", "auth, payments/subscriptions, local-first storage, realtime state, dashboards, exports, push notifications, file uploads"),
    ("Web3/Trading", "Solidity, Hardhat, ethers.js, thirdweb, wagmi, viem, Kite Connect, wallet flows, contract reads/writes"),
    ("Tools", "Git, GitHub, Vercel, Sentry, AWS, ClickHouse, Figma"),
]

EDUCATION = [
    ("B.Tech, Computer Science and Engineering", "Sikkim Manipal Institute of Technology", "2018 - 2022, 8.28 CGPA"),
    ("TSBSE", "Narayana Junior College, Hyderabad", "2016 - 2018, 91.3%"),
]


def esc(text: str) -> str:
    return text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def link(text: str, url: str | None, color="#135f7f") -> str:
    if not url:
        return esc(text)
    return f'<link href="{esc(url)}"><font color="{color}">{esc(text)}</font></link>'


def make_doc() -> BaseDocTemplate:
    doc = BaseDocTemplate(
        str(OUTPUT),
        pagesize=letter,
        leftMargin=0.48 * inch,
        rightMargin=0.48 * inch,
        topMargin=0.38 * inch,
        bottomMargin=0.36 * inch,
        title="Harsh Pandey Resume",
        author="Harsh Pandey",
    )
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="normal")
    doc.addPageTemplates([PageTemplate(id="one-page", frames=[frame])])
    return doc


styles = getSampleStyleSheet()
styles.add(ParagraphStyle(
    name="Name",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=21,
    leading=23,
    textColor=colors.HexColor("#111827"),
    spaceAfter=1,
))
styles.add(ParagraphStyle(
    name="Role",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=10.5,
    leading=12,
    textColor=colors.HexColor("#374151"),
    spaceAfter=2,
))
styles.add(ParagraphStyle(
    name="Contact",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=7.9,
    leading=9.5,
    textColor=colors.HexColor("#4b5563"),
    alignment=1,
))
styles.add(ParagraphStyle(
    name="Section",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=8.6,
    leading=10,
    textColor=colors.HexColor("#111827"),
    spaceBefore=6,
    spaceAfter=3,
    borderWidth=0,
))
styles.add(ParagraphStyle(
    name="Summary",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8.15,
    leading=10.1,
    textColor=colors.HexColor("#1f2937"),
    spaceAfter=1,
))
styles.add(ParagraphStyle(
    name="ItemTitle",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=8.7,
    leading=10.2,
    textColor=colors.HexColor("#111827"),
))
styles.add(ParagraphStyle(
    name="ItemMeta",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=7.8,
    leading=9.2,
    textColor=colors.HexColor("#4b5563"),
    alignment=2,
))
styles.add(ParagraphStyle(
    name="SmallMeta",
    parent=styles["Normal"],
    fontName="Helvetica-Oblique",
    fontSize=7.6,
    leading=9.1,
    textColor=colors.HexColor("#4b5563"),
))
styles.add(ParagraphStyle(
    name="ResumeBullet",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=7.65,
    leading=9.0,
    leftIndent=8,
    firstLineIndent=-5,
    bulletIndent=0,
    textColor=colors.HexColor("#1f2937"),
    spaceAfter=1.15,
))
styles.add(ParagraphStyle(
    name="Skill",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=7.55,
    leading=8.8,
    textColor=colors.HexColor("#1f2937"),
    spaceAfter=1.3,
))
styles.add(ParagraphStyle(
    name="Edu",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=7.7,
    leading=9.2,
    textColor=colors.HexColor("#1f2937"),
    spaceAfter=1,
))


def section(title: str):
    return [
        Paragraph(title.upper(), styles["Section"]),
        Table([[""]], colWidths=[7.54 * inch], rowHeights=[0.45], style=TableStyle([
            ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#d1d5db")),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 0),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
        ])),
        Spacer(1, 2.2),
    ]


def item_header(left: str, right: str | None = None):
    data = [[Paragraph(left, styles["ItemTitle"]), Paragraph(right or "", styles["ItemMeta"])]]
    return Table(data, colWidths=[5.35 * inch, 2.19 * inch], style=TableStyle([
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ]))


def bullet(text: str):
    return Paragraph(f"- {esc(text)}", styles["ResumeBullet"])


def build():
    story = []
    story.append(Paragraph(NAME, styles["Name"]))
    story.append(Paragraph(ROLE, styles["Role"]))
    contact_text = " &nbsp;|&nbsp; ".join(link(label, href) for label, href in CONTACTS)
    story.append(Paragraph(contact_text, styles["Contact"]))
    story.append(Spacer(1, 3))

    story.extend(section("Summary"))
    story.append(Paragraph(esc(SUMMARY), styles["Summary"]))

    story.extend(section("Experience"))
    for job in EXPERIENCE:
        story.append(item_header(f'{job["company"]} - {job["role"]}', job["date"]))
        for point in job["bullets"]:
            story.append(bullet(point))
        story.append(Spacer(1, 1.5))

    story.extend(section("Selected Projects"))
    for project in PROJECTS:
        title = link(project["name"], project["link"]) if project["link"] else esc(project["name"])
        story.append(item_header(title, ""))
        story.append(Paragraph(esc(project["meta"]), styles["SmallMeta"]))
        for point in project["bullets"]:
            story.append(bullet(point))
        story.append(Spacer(1, 1.4))

    story.extend(section("Skills"))
    for label, values in SKILLS:
        story.append(Paragraph(f"<b>{esc(label)}:</b> {esc(values)}", styles["Skill"]))

    story.extend(section("Education"))
    for degree, school, detail in EDUCATION:
        story.append(Paragraph(f"<b>{esc(degree)}</b> - {esc(school)} - {esc(detail)}", styles["Edu"]))

    doc = make_doc()
    doc.build(story)

    page_width, page_height = letter
    # Header accent and link hit targets.
    from pypdf import PdfReader, PdfWriter
    from reportlab.pdfgen import canvas
    import io

    packet = io.BytesIO()
    c = canvas.Canvas(packet, pagesize=letter)
    c.setFillColor(colors.HexColor("#0f766e"))
    c.rect(0, page_height - 6, page_width, 6, stroke=0, fill=1)
    c.save()
    packet.seek(0)

    base = PdfReader(str(OUTPUT))
    overlay = PdfReader(packet)
    writer = PdfWriter()
    page = base.pages[0]
    page.merge_page(overlay.pages[0])
    writer.add_page(page)
    with OUTPUT.open("wb") as f:
        writer.write(f)


if __name__ == "__main__":
    build()
