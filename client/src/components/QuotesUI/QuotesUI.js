import React from 'react';

import '../Header/styles.css';

const QuotesUI = ({items}) => (
  <div>
      {items.map((item,id) => (
          <p key={id}>
              {item[Object.keys(item)[1]]}
              <span>{item[Object.keys(item)[1]]}</span>
          </p>
      ))}
  </div>
);
export default QuotesUI;
