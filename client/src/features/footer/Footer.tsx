import React from 'react';
import './footer.css';

const Footer = (): JSX.Element => {
  return (
    <footer id="footer" className="footer">
      {`© Сделано Владимиром, Павлом и Игарьком с Божьей помощью в ${new Date().getFullYear()} году и какой-то там матери! Все права защищены и всех.`}
    </footer>
  );
};

export default Footer;
