import './style.css';
import { useState } from 'react';

const Accordion = ({ title, text }) => {
  const [active, setActive] = useState(false);
  return (
    <div aria-expanded={active} className={`accordion ${active && 'active'}`}>
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role */}
      <h2 role="button" className="title" onClick={() => setActive(!active)}>
        {title}
      </h2>
      <p className="text">
        {text}
      </p>
    </div>
  );
};

export default Accordion;
