"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const navLinks = [
  { name: "Competitions", href: "#competitions" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Winners", href: "#winners" },
  { name: "Leaderboard", href: "#leaderboard" },
  { name: "Categories", href: "#categories" },
  { name: "Support", href: "#support" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
       
        <Link href="/" className={styles.brand}>
          Brand name
        </Link>

      
        <nav className={styles.navDesktop}>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              {link.name}
            </Link>
          ))}
        </nav>

       
        <div className={styles.authDesktop}>
          <Link href="#login" className={styles.login}>
            Log in
          </Link>
          <Link href="#sign-up" className={styles.signup}>
            Sign up
          </Link>
        </div>

    
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

    
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
        <button
          className={styles.closeBtn}
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>
        <nav>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className={styles.authMobile}>
          <Link href="#login" className={styles.login}>
            Log in
          </Link>
          <Link href="#sign-up" className={styles.signup}>
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}
