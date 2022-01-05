import React from 'react';
//styles
import './Footer.styles.css';

function Footer() {
  return (
    <div className="footer">
      <p>Sebastian Gomez 2022</p>
      <a
        className="fab fa-github fa-2x"
        href="https://github.com/Sebastiangomezzz"
        rel="noopener noreferrer"
        target="_blank"
      ></a>
      <a
        className="fab fa-linkedin fa-2x"
        href="https://www.linkedin.com/in/sebastiangomezzz/"
        rel="noopener noreferrer"
        target="_blank"
      ></a>
    </div>
  );
}

export default Footer;
