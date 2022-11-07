import { useState } from 'react';

import HidingSidebarOnBlur from './HidingSidebarOnBlur';

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  return (
    <>
      <HidingSidebarOnBlur showFooter={showFooter} setShowFooter={setShowFooter}>
        <a
          href='https://github.mndev.eu'
          target='_blank'
          className='btn btn--icon'
          onClick={() => setShowFooter(false)}
        >
          Author <i className='fa-brands fa-github' />
        </a>

        <a
          href='https://github.mndev.eu/Quizzical'
          target='_blank'
          className='btn btn--icon'
          onClick={() => setShowFooter(false)}
        >
          Project <i className='fa-brands fa-github' />
        </a>

        <button className='btn btn--icon footer__toggle' onClick={() => setShowFooter((prev) => !prev)}>
          <i className='fa-brands fa-github' />
        </button>
      </HidingSidebarOnBlur>

      <a href='https://opentdb.com/' target='_blank' className='footer__source'>
        API <i className='fa-solid fa-globe' />
      </a>
    </>
  );
};

export default Footer;
