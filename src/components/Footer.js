import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <footer className="footer text-faded text-center py-5">
      <div className="container">
        <p className="m-0 small">Copyright &copy; {config.siteTitle}</p>
      </div>
    </footer>
  );
}
