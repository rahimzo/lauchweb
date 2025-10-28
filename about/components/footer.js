class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background-color: black;
          color: white;
          padding: 3rem 2rem;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        .footer-section h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
          position: relative;
          display: inline-block;
        }
        .footer-section h3:after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 40px;
          height: 1px;
          background-color: white;
        }
        .footer-section p, .footer-section a {
          color: #aaa;
          line-height: 1.6;
          margin-bottom: 0.8rem;
          display: block;
        }
        .footer-section a:hover {
          color: white;
        }
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .social-links a {
          color: white;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        .social-links a:hover {
          background-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-3px);
        }
        .copyright {
          text-align: center;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: #666;
          font-size: 0.9rem;
        }
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
          }
        }
      </style>
      <footer>
        <div class="footer-content">
          <div class="footer-section">
            <h3>Location</h3>
            <p>12 Bruton Street</p>
            <p>Mayfair, London W1J 6PY</p>
            <p>United Kingdom</p>
            <a href="https://maps.google.com/maps?q=Ocean+Studios+Nails+%26+Beauty" target="_blank">View on Map</a>
          </div>
          <div class="footer-section">
            <h3>Hours</h3>
            <p>Monday - Friday: 10am - 8pm</p>
            <p>Saturday: 9am - 7pm</p>
            <p>Sunday: 11am - 5pm</p>
          </div>
          <div class="footer-section">
            <h3>Connect</h3>
            <a href="tel:+442045678901">+44 20 4567 8901</a>
            <a href="mailto:hello@velvetclaw.com">hello@velvetclaw.com</a>
            <div class="social-links">
              <a href="https://instagram.com" target="_blank"><i data-feather="instagram"></i></a>
              <a href="https://wa.me/442045678901" target="_blank"><i data-feather="message-square"></i></a>
              <a href="https://pinterest.com" target="_blank"><i data-feather="heart"></i></a>
            </div>
          </div>
        </div>
        <div class="copyright">
          &copy; ${new Date().getFullYear()} The Velvet Claw. All rights reserved.
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
