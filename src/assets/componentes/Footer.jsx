import React from 'react';
import './Footer.css'; 
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="redes">
          {/* redes sociales de contacto de aespa */}
          <a href="https://www.instagram.com/aespa_official/" target="_blank" rel="noopener noreferrer" className="link">Instagram</a>
          <a href="https://x.com/aespa_official" target="_blank" rel="noopener noreferrer" className="link">Twitter</a>
          <a href="https://www.youtube.com/@aespa" target="_blank" rel="noopener noreferrer" className="link">YouTube</a>
        </div>
        <br /><p>© 2024 aespa Fanpage.</p><br />
      </div>
    </footer>
  );
};

export default Footer;
