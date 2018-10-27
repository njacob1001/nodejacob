import React from 'react';
//import './_minimal_footer.scss';

const MinimalFooter = () => (
  <footer className="Footer-wrapper">
    <div className="Footer-container">
      <span className="Footer-title">Follow me: </span>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/jacob-gonzalez-210b84166"
        className="Footer-link"
      ><strong>LinkedIn</strong></a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/njacob1001"
        className="Footer-link"
      ><strong>GitHub</strong></a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.youtube.com/channel/UCQ-ykK7GU9qDczl7Cb2DpmA"
        className="Footer-link"
      ><strong>Youtube</strong></a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/jacobdesarrolloweb/"
        className="Footer-link"
      ><strong>Facebook</strong></a>
    </div>
  </footer>
);

export default MinimalFooter;
