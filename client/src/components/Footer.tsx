import { Link } from "wouter";
import { Wifi, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from "lucide-react";
import { navLinks, socialLinks, contactInfo } from "@/data/links";

const iconMap: Record<string, typeof Facebook> = {
  Facebook,
  Twitter,
  Linkedin,
  Github,
};

export function Footer() {
  const quickLinks = navLinks.slice(0, 6);
  const moreLinks = navLinks.slice(6);

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center">
                <Wifi className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <span className="text-lg font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                  SWING
                </span>
                <span className="text-xs text-muted-foreground block -mt-1">
                  IIIT Kottayam
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Smart Wireless Inter-Networking Research Group - Advancing research in SDN, IoT, NLP, and Security.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = iconMap[social.icon];
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-md bg-muted flex items-center justify-center text-muted-foreground hover-elevate transition-colors"
                    aria-label={social.platform}
                    data-testid={`social-link-${social.platform.toLowerCase()}`}
                  >
                    {IconComponent && <IconComponent className="w-4 h-4" />}
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">More</h3>
            <ul className="space-y-2">
              {moreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`footer-more-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="footer-phone"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="footer-email"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} SWING @ IIIT Kottayam. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Smart Wireless Inter-Networking Research Group
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
