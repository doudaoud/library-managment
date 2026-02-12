import React from "react";
import {
  BookOpen,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

/**
 * Footer Component - Standard CSS Version
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Security", href: "#" },
      { label: "Roadmap", href: "#" },
    ],
    Company: [
      { label: "About Us", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
    Resources: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Community", href: "#" },
      { label: "Support", href: "#" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Contact", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <>
      <link rel="stylesheet" href="/css/footer.css" />
      <footer className="footer">
        {/* Main Footer Content */}
        <div className="footer-container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-brand">
              <div className="brand-logo">
                <div className="logo-icon-wrapper">
                  <BookOpen size={24} color="white" />
                </div>
                <span className="brand-name">LibraryHub</span>
              </div>

              <p className="brand-description">
                Transform your library management with our modern, intuitive
                platform. Serving libraries worldwide since 2024.
              </p>

              {/* Contact Info */}
              <div className="contact-info">
                <div className="contact-item">
                  <Mail size={16} />
                  <span>support@libraryhub.com</span>
                </div>

                <div className="contact-item">
                  <Phone size={16} />
                  <span>+1 (555) 123-4567</span>
                </div>

                <div className="contact-item">
                  <MapPin size={16} />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="footer-links-col">
                <h4 className="footer-heading">{category}</h4>

                <ul className="footer-links-list">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="footer-link">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="footer-divider">
            <div className="footer-bottom">
              {/* Copyright */}
              <div className="copyright">
                <p>&copy; {currentYear} LibraryHub. All rights reserved.</p>
              </div>

              {/* Social Links */}
              <div className="social-links">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="social-btn"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>

              {/* Language Selector (Placeholder) */}
              <div className="lang-select">
                <select>
                  <option>English</option>
                  <option>Français</option>
                  <option>Español</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bar">
          <div className="footer-container" style={{ padding: "0 20px" }}>
            <p className="footer-bar-text">
              Made with ❤️ by the LibraryHub team |
              <a href="#" className="footer-bar-link">
                Status
              </a>{" "}
              •
              <a href="#" className="footer-bar-link">
                Changelog
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
