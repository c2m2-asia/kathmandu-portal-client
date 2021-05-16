import React, { Fragment, useEffect } from 'react';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import './styles.css';

function ScrollTopBtn() {
  useEffect(() => {
    /* ======= Back to Top Button and Navbar Scrolling control ======= */
    const scrollToTopBtn = document.querySelector('.back-to-top');
    const rootElement = document.documentElement;

    function handleScroll() {
      // do something on scroll
      if (rootElement.scrollTop > 200) {
        //show button
        scrollToTopBtn.style.display = 'block';
      } else {
        //hide button
        scrollToTopBtn.style.display = 'none';
      }
    }

    function scrollToTop() {
      //scroll to top logic
      rootElement.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
    scrollToTopBtn.addEventListener('click', scrollToTop);
    document.addEventListener('scroll', handleScroll);
  });
  return (
    <Fragment>
      <div className="back-to-top show-back-to-top">
        <KeyboardArrowUpIcon />
      </div>
    </Fragment>
  );
}

export default ScrollTopBtn;
