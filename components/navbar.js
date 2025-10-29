class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background-color: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }
        .logo {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 1.5rem;
          color: black;
          text-decoration: none;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
          align-items: center;
        }
        .nav-links a {
          color: black;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.9rem;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          position: relative;
          padding-bottom: 5px;
        }
        .nav-links a:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background-color: black;
          transition: width 0.3s ease;
        }
        .nav-links a:hover:after {
          width: 100%;
        }
        .book-now {
          background-color: white;
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 0;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        .book-now:hover {
          background-color: #333;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block;
          }
          .nav-links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: white;
            flex-direction: column;
            padding: 2rem;
            gap: 1.5rem;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          }
          .nav-links.active {
            display: flex;
          }
        }
      </style>
      <nav>
        <a href="/" class="logo">THE VELVET CLAcker</a>
        <button class="mobile-menu-btn">
          <i data-feather="menu"></i>
        </button>
        <ul class="nav-links">
          <li><a href="/lauchweb/">Home</a></li>
          <li><a href="/lauchweb/services.html">Services</a></li>
          <li><a href="/lauchweb/gallery.html">Gallery</a></li>
          <li><a href="/lauchweb/about.html">About</a></li>
          <li><a href="/lauchweb/contact.html">Contact</a></li>
          <li><a href="/lauchweb/booking.html" class="book-now">Book Now</a></li>
        </ul>
      </nav>
    `;
    
    // Mobile menu toggle
    const mobileBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
    const navLinks = this.shadowRoot.querySelector('.nav-links');
    
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      feather.replace();
    });
    
    // Close mobile menu when clicking a link
    this.shadowRoot.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);
