import { ArrowUpRight } from 'lucide-react';

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from 'react-icons/fa';

import {
  FaXTwitter,
  FaLinkedin,
} from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top container">

        {/* School Information */}
        <div>
          <a href="#top" className="footer-brand" data-cursor aria-label="Tulas International School">
            <span className="footer-brand-name">TULAS</span>
            <span className="footer-brand-sub">INTERNATIONAL SCHOOL</span>
          </a>

          <p className="footer-copy">
            Tulas International School was established in 2012 under the aegis
            of Rishabh Educational Trust to impart education through seamless
            opportunities.
          </p>
        </div>

        {/* Explore */}
        <div className="footer-column">
          <span className="footer-label">Explore</span>

          <a href="#about">
            About TIS
          </a>

          <a href="#academics">
            Academics
          </a>

          <a href="#boarding">
            Boarding Life
          </a>

          <a href="#beyond">
            Beyond Academics
          </a>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <span className="footer-label">Connect</span>

          <a href="#admission">
            Admission
            <ArrowUpRight size={15} />
          </a>

          <a href="tel:+919837983791">
            +91-9837983791
          </a>

          <a href="mailto:info@tis.edu.in">
            info@tis.edu.in
          </a>

          <span>
            0135-2699444, 0135-2699666
          </span>

          <span>
            Dehradun, Uttarakhand, India
          </span>
        </div>

        {/* Social Media */}
        <div className="footer-column">
          <span className="footer-label">Follow</span>

          <div className="socials">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/"
              aria-label="Instagram"
              data-cursor
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={20} />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/"
              aria-label="Facebook"
              data-cursor
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF size={19} />
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/"
              aria-label="YouTube"
              data-cursor
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube size={21} />
            </a>

            {/* X / Twitter */}
            <a
              href="https://x.com/"
              aria-label="X (Twitter)"
              data-cursor
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter size={21} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/"
              aria-label="LinkedIn"
              data-cursor
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={21} />
            </a>

          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom container">

        <span>
          © 2026 Tulas International School, Dehradun. Homepage Redesign |
          All Rights Reserved
        </span>

        <a
          href="https://tis.edu.in/"
          data-cursor
          target="_blank"
          rel="noreferrer"
        >
          Official Website
          <ArrowUpRight size={14} />
        </a>

      </div>
    </footer>
  );
}