import React, { useState } from 'react';
import data from '../data';
import './Accordion.css';

export const Accordion = () => {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(getCurrentId) {
    console.log('111',getCurrentId)
    setSelected(selected === getCurrentId ? null : getCurrentId);
  }

  return (
    <div className='container'>
      <div className='wrapper'>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className='item' key={dataItem.id}>
              <div
                onClick={() => handleSingleSelection(dataItem.id)}
                className='title'
              >
                <h3>{dataItem.question}</h3>
                <span>{selected === dataItem.id ? '-' : '+'}</span>
              </div>
              {selected === dataItem.id && (
                <div className='content'>
                  <p>{dataItem.answer}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <div>
            <h1>Error!</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
