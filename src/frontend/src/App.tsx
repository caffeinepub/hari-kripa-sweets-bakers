import {
  ChevronRight,
  Clock,
  Flame,
  Home,
  IndianRupee,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Phone,
  Star,
  X,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Why Us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

const MENU_CATEGORIES = [
  {
    id: "breakfast",
    title: "Main Course / Breakfast",
    emoji: "🥘",
    color: "#C68A1C",
    bg: "#FDF3DC",
    items: [
      "Aloo Paratha (Single / Double) 🧈",
      "Chola Bhatura 🍛",
      "Paneer Paratha 🧀",
      "Mix Veg Paratha 🫓",
    ],
  },
  {
    id: "beverages",
    title: "Beverages",
    emoji: "☕",
    color: "#6A3B1D",
    bg: "#F5EBE0",
    items: [
      "Special Cutting Chai ☕",
      "Full Glass Chai",
      "Sweet Lassi 🥛",
      "Masala Lassi",
    ],
  },
  {
    id: "fastfood",
    title: "Fast Food",
    emoji: "🍜",
    color: "#C85E1A",
    bg: "#FDF0E8",
    items: [
      "Veg Manchurian (Dry / Gravy) 🌶️",
      "Noodles 🍝",
      "Fried Rice 🍚",
      "Chilli Potato 🥔",
    ],
  },
  {
    id: "sweets",
    title: "Sweets & Bakery",
    emoji: "🍬",
    color: "#7E2B53",
    bg: "#F8EBF2",
    items: [
      "Fresh Mithai (Seasonal) 🍮",
      "Rasgulla",
      "Gulab Jamun",
      "Bakery Items (Cakes, Biscuits) 🎂",
    ],
  },
];

const WHY_CHOOSE = [
  {
    icon: Leaf,
    label: "100% Pure Vegetarian",
    desc: "Only the freshest vegetarian ingredients, every single day.",
  },
  {
    icon: Flame,
    label: "Freshly Cooked Food",
    desc: "Prepared fresh to order — never reheated, always hot.",
  },
  {
    icon: IndianRupee,
    label: "Pocket-Friendly Prices",
    desc: "Great taste that fits every budget, without compromise.",
  },
  {
    icon: Home,
    label: "Family-Friendly Environment",
    desc: "A warm, welcoming space for families and friends.",
  },
  {
    icon: Zap,
    label: "Quick Service",
    desc: "Fast, efficient service so you never have to wait long.",
  },
];

// ─── Components ──────────────────────────────────────────────────────────────

function TopStrip() {
  return (
    <div className="bg-brand-dark text-white text-center text-xs sm:text-sm py-2 px-4 tracking-wide font-sans">
      ✨{" "}
      <span className="font-semibold">
        Har Bite Mein Swad, Har Dil Mein Hari Kripa
      </span>{" "}
      ✨
    </div>
  );
}

function Navbar({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`sticky top-0 z-50 bg-brand-creamLt transition-shadow duration-300 ${
        scrolled ? "shadow-warm" : "shadow-none"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#home"
          data-ocid="nav.link"
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center shadow-card flex-shrink-0">
            <span className="text-xl">🍮</span>
          </div>
          <div className="leading-tight">
            <p className="font-serif font-bold text-brand-dark text-base leading-none">
              Hari Kripa
            </p>
            <p className="text-[10px] text-brand-coffee font-sans">
              Sweets & Bakers
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                data-ocid="nav.link"
                className="text-sm font-medium text-brand-text hover:text-brand-orange transition-colors font-sans"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://www.swiggy.com"
          target="_blank"
          rel="noopener noreferrer"
          data-ocid="nav.primary_button"
          className="hidden md:inline-flex items-center gap-1.5 bg-brand-orange hover:bg-brand-spice text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors shadow-warm font-sans"
        >
          🛵 Order on Swiggy
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden p-2 text-brand-dark"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-brand-cream border-t border-brand-dark/10 px-4 pb-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-ocid="nav.link"
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-medium text-brand-text hover:text-brand-orange border-b border-brand-dark/10 last:border-0 font-sans"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://www.swiggy.com"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="nav.primary_button"
            className="mt-3 inline-flex items-center gap-1.5 bg-brand-orange text-white text-sm font-semibold px-4 py-2 rounded-full font-sans"
          >
            🛵 Order on Swiggy
          </a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="home"
      data-ocid="hero.section"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(120deg, #2B140F 0%, #5C2A10 40%, #C85E1A 80%, #D47A1E 100%)",
      }}
    >
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/4" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 grid md:grid-cols-2 gap-12 items-center w-full relative z-10">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-white"
        >
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/30 rounded-full px-4 py-1.5 text-sm font-medium mb-6 font-sans">
            <Leaf size={14} className="text-green-300" />
            Pure Veg | Khalilabad
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5">
            Welcome to
            <br />
            <span className="text-brand-orange">Hari Kripa</span>
            <br />
            Sweets & Bakers
          </h1>

          <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-8 font-sans max-w-lg">
            We serve more than just food — we serve{" "}
            <span className="text-brand-orange font-semibold">happiness</span>{" "}
            on every plate. Located in the heart of Khalilabad.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {[
              "✨ Fresh Ingredients",
              "✨ Hygienic Preparation",
              "✨ Authentic Taste",
              "✨ Affordable Prices",
            ].map((p) => (
              <span
                key={p}
                className="bg-white/15 border border-white/25 text-white text-xs font-medium px-3 py-1.5 rounded-full font-sans"
              >
                {p}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#menu"
              data-ocid="hero.primary_button"
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-spice text-white font-semibold px-6 py-3 rounded-full transition-colors shadow-warm font-sans"
            >
              View Our Menu <ChevronRight size={16} />
            </a>
            <a
              href="#contact"
              data-ocid="hero.secondary_button"
              className="inline-flex items-center gap-2 border-2 border-white/60 hover:border-white text-white font-semibold px-6 py-3 rounded-full transition-colors font-sans"
            >
              Contact Us
            </a>
          </div>
        </motion.div>

        {/* Right — decorative tagline card */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="hidden md:flex flex-col items-center justify-center"
        >
          <div className="bg-white/10 border border-white/25 rounded-3xl p-8 text-white text-center backdrop-blur-sm shadow-warm max-w-sm w-full">
            <div className="text-5xl mb-4">🍮</div>
            <p className="font-serif text-2xl font-bold leading-snug mb-3">
              "Har Bite Mein Swad"
            </p>
            <p className="font-sans text-white/70 text-sm mb-6">
              Har Dil Mein Hari Kripa
            </p>
            <div className="grid grid-cols-3 gap-3 text-3xl mb-4">
              {["🧈", "☕", "🍮", "🍛", "🎂", "🥛"].map((e) => (
                <span
                  key={e}
                  className="bg-white/10 rounded-xl p-2 flex items-center justify-center"
                >
                  {e}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-center gap-1 mt-2">
              <Star size={14} fill="#D47A1E" stroke="none" />
              <Star size={14} fill="#D47A1E" stroke="none" />
              <Star size={14} fill="#D47A1E" stroke="none" />
              <Star size={14} fill="#D47A1E" stroke="none" />
              <Star size={14} fill="#D47A1E" stroke="none" />
              <span className="text-xs text-white/60 ml-2 font-sans">
                Trusted by thousands
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      data-ocid="about.section"
      className="py-20 bg-brand-creamLt"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-widest font-sans">
            📖 Our Story
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-brand-dark mt-2 mb-5">
            Made with Love,
            <br />
            Served with Pride
          </h2>
          <p className="text-brand-text/80 leading-relaxed mb-4 font-sans">
            Hari Kripa Sweets & Bakers was started with a simple vision — to
            bring{" "}
            <strong>pure, delicious, and affordable vegetarian food</strong> to
            everyone in Khalilabad and beyond.
          </p>
          <p className="text-brand-text/80 leading-relaxed mb-6 font-sans">
            Our chefs combine traditional recipes with modern taste, ensuring
            every dish feels like home. From early morning chai lovers to
            evening snack seekers, we are a favorite spot for families,
            students, and food lovers.
          </p>

          <div className="mb-8">
            <p className="font-semibold text-brand-dark mb-3 font-sans">
              We specialize in:
            </p>
            <ul className="space-y-2">
              {[
                "Traditional Indian Breakfast",
                "Street-style Fast Food",
                "Freshly Prepared Sweets & Snacks",
              ].map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-2 text-brand-text/90 font-sans"
                >
                  <ChevronRight
                    size={16}
                    className="text-brand-orange flex-shrink-0"
                  />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <blockquote className="border-l-4 border-brand-orange pl-4 py-1">
            <p className="font-serif italic text-brand-dark text-lg">
              ❤️ "Yahan sirf khana nahi, rishton ka swad milta hai."
            </p>
          </blockquote>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <div
            className="rounded-2xl overflow-hidden shadow-warm"
            style={{
              background: "linear-gradient(135deg, #3A1C14 0%, #C85E1A 100%)",
              minHeight: 260,
            }}
          >
            <div className="p-8 text-white">
              <p className="text-4xl mb-4">🏠</p>
              <h3 className="font-serif font-bold text-2xl mb-2">
                A Taste of Home
              </h3>
              <p className="font-sans text-white/80 text-sm leading-relaxed">
                Every dish we serve carries the warmth of a home kitchen. We
                source the freshest ingredients daily and prepare everything
                with care — because our customers deserve nothing less.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { emoji: "🌿", label: "100% Veg", sub: "No non-veg ever" },
              { emoji: "🕐", label: "Since 2015", sub: "Trusted for years" },
              {
                emoji: "👨‍🍳",
                label: "Expert Chefs",
                sub: "Traditional recipes",
              },
              { emoji: "📍", label: "Khalilabad", sub: "Heart of the city" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-brand-cream rounded-xl p-4 border border-brand-dark/10 hover:shadow-card transition-shadow"
              >
                <p className="text-2xl mb-1">{item.emoji}</p>
                <p className="font-semibold text-brand-dark text-sm font-sans">
                  {item.label}
                </p>
                <p className="text-brand-text/60 text-xs font-sans">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MenuSection() {
  return (
    <section
      id="menu"
      data-ocid="menu.section"
      className="py-20"
      style={{ background: "#2B140F" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-widest font-sans">
            🍽️ What We Serve
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white mt-2">
            Our Menu
          </h2>
          <p className="text-white/60 font-sans mt-3 max-w-lg mx-auto">
            From morning parathas to evening sweets — we have something
            delicious for every craving.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {MENU_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.id}
              data-ocid={`menu.item.${i + 1}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-warm hover:scale-[1.02] transition-transform"
            >
              {/* Category header */}
              <div className="px-5 py-4" style={{ backgroundColor: cat.color }}>
                <p className="text-white font-serif font-bold text-lg">
                  {cat.emoji} {cat.title}
                </p>
              </div>
              {/* Items */}
              <div className="bg-white px-5 py-4 space-y-2">
                {cat.items.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-brand-orange mt-0.5">•</span>
                    <span className="text-sm text-brand-text font-sans">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            data-ocid="menu.primary_button"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-spice text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-warm font-sans"
          >
            Visit Us for Full Menu <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why" data-ocid="why.section" className="py-20 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-widest font-sans">
            ⭐ Why Choose Us
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-brand-dark mt-2">
            The Hari Kripa Difference
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {WHY_CHOOSE.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                data-ocid={`why.item.${i + 1}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-brand-creamLt rounded-2xl p-6 text-center border border-brand-dark/10 hover:shadow-card hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-brand-orange/15 flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-brand-orange" />
                </div>
                <h3 className="font-serif font-bold text-brand-dark text-sm mb-2">
                  {item.label}
                </h3>
                <p className="text-brand-text/60 text-xs leading-relaxed font-sans">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      data-ocid="contact.section"
      className="py-20"
      style={{ background: "#3A1C14" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-widest font-sans">
            📞 Get In Touch
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white mt-2">
            Find Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 border border-white/20 rounded-2xl p-8 backdrop-blur-sm"
          >
            <h3 className="font-serif font-bold text-white text-xl mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-white/85 font-sans">
                <MapPin
                  size={18}
                  className="text-brand-orange mt-0.5 flex-shrink-0"
                />
                <div>
                  <p className="font-semibold text-white">Address</p>
                  <p className="text-sm text-white/70">
                    Hari Kripa Sweets & Bakers, Khalilabad
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-white/85 font-sans">
                <Phone
                  size={18}
                  className="text-brand-orange mt-0.5 flex-shrink-0"
                />
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <a
                    href="tel:9559070719"
                    className="text-sm text-white/70 hover:text-brand-orange transition-colors"
                  >
                    9559070719
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 text-white/85 font-sans">
                <Mail
                  size={18}
                  className="text-brand-orange mt-0.5 flex-shrink-0"
                />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a
                    href="mailto:harikripasweets@email.com"
                    className="text-sm text-white/70 hover:text-brand-orange transition-colors"
                  >
                    harikripasweets@email.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 text-white/85 font-sans">
                <Clock
                  size={18}
                  className="text-brand-orange mt-0.5 flex-shrink-0"
                />
                <div>
                  <p className="font-semibold text-white">Opening Hours</p>
                  <p className="text-sm text-white/70">
                    Monday – Sunday: 7:00 AM – 10:00 PM
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 bg-[#FC8019]/20 border border-[#FC8019]/40 rounded-full px-4 py-2 text-sm text-white font-sans">
              🛵 <span className="font-semibold">Available on Swiggy</span>
            </div>
          </motion.div>

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #C85E1A 0%, #D47A1E 100%)",
            }}
          >
            <div className="p-8 h-full flex flex-col justify-between">
              <div>
                <p className="text-4xl mb-4">🍮</p>
                <h3 className="font-serif font-bold text-white text-2xl mb-3">
                  Visit Us Today!
                </h3>
                <p className="font-sans text-white/85 leading-relaxed mb-2">
                  Aaj hi aayein aur apne din ko tasty banayein!
                </p>
                <p className="font-serif italic text-white/80 text-lg mt-4">
                  "Har Bite Mein Swad, Har Dil Mein Hari Kripa"
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:9559070719"
                  data-ocid="contact.primary_button"
                  className="inline-flex items-center justify-center gap-2 bg-white text-brand-spice font-bold px-6 py-3 rounded-full hover:bg-brand-cream transition-colors font-sans shadow-warm"
                >
                  <Phone size={16} /> Call Now
                </a>
                <a
                  href="https://www.swiggy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.secondary_button"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-6 py-3 rounded-full hover:bg-white/10 transition-colors font-sans"
                >
                  🛵 Order Online
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-brand-orange/20 border border-brand-orange/40 flex items-center justify-center">
                <span className="text-xl">🍮</span>
              </div>
              <div>
                <p className="font-serif font-bold text-lg leading-tight">
                  Hari Kripa
                </p>
                <p className="text-xs text-white/50 font-sans">
                  Sweets & Bakers
                </p>
              </div>
            </div>
            <p className="font-sans text-white/60 text-sm leading-relaxed">
              Pure vegetarian sweets, fast food and bakery in the heart of
              Khalilabad.
            </p>
            <p className="font-serif italic text-brand-orange text-sm mt-3">
              "Har Bite Mein Swad"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    data-ocid="nav.link"
                    className="text-sm text-white/60 hover:text-brand-orange transition-colors font-sans"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-serif font-bold text-base mb-4">
              Our Specialties
            </h4>
            <ul className="space-y-2">
              {MENU_CATEGORIES.map((c) => (
                <li key={c.id} className="text-sm text-white/60 font-sans">
                  {c.emoji} {c.title}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/50 text-xs font-sans">
            © {year} Hari Kripa Sweets & Bakers. All rights reserved.
          </p>
          <p className="text-white/40 text-xs font-sans">
            Built with ❤️ using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-orange transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans">
      <TopStrip />
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
