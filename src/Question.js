import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
  const [hidden, setHidden] = useState(true);
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setHidden(!hidden)}>
          {/* Show different icon depending on state */}
          {hidden ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      {/* info that will be shown/hidden if false */}
      {!hidden && <p>{info}</p>}
    </article>
  );
};

export default Question;
