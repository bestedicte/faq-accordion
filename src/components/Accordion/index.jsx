import './style.css';
import { useState } from 'react';

const Accordion = ({ title, text }) => {
  const [active, setActive] = useState(false);
  return (
    <div className={`accordion ${active && 'active'}`}>
      <h2 className="title" onClick={() => setActive(!active)}>
        {title}
      </h2>
      <p className="text">
        {text}
      </p>
    </div>
  );
};

export default Accordion;
