import React, { useEffect, useState } from 'react';
import ConfettiMaker from './ConfettiMaker';
import isBrowser from '../helpers/isBrowser';
import Link from 'gatsby-link';

const Bee = () => {
  let [classes, setClassName] = useState('bee top');
  let [message, setMessage] = useState();
  let [offset, setOffset] = useState(0);
  let [url, setUrl] = useState('#');

  useEffect(() => {
    if (isBrowser()) {
      window.addEventListener('scroll', () => {
        let distance = window.pageYOffset;
        setOffset(distance);
        handleScroll(distance);
      });
    }
  }, []);

  const handleScroll = (distance) => {
    if (distance > 200) {
      setClassName('bee bottom');
      setMessage("What's Buzzin' ?");
      setUrl('#Contact');
    }
    if (distance < 200) {
      setClassName('bee top');
      setMessage('');
      setUrl('#');
    }
  };

  const handleClick = () => {
    if (offset > 200) {
      ConfettiMaker(['🐝']);
      setUrl('#Contact');
    }
    if (offset < 200) {
      ConfettiMaker(['😍', '🥰', '❤️']);
    }
  };

  return (
    <>
      <Link to={url}>
        <button
          className={classes}
          onClick={handleClick}
          onScroll={handleScroll}
        >
          {message && (
            <div className="chat-bubble">
              <p>{message}</p>
            </div>
          )}
          <div className="happy-bee">🐝</div>
        </button>
      </Link>
    </>
  );
};

export default Bee;
