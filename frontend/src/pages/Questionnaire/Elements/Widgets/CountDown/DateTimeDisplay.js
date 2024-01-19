import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  function FormatNumberLength(num, length) {
    var r = "" + num;
    while (r.length < length) {
        r = "0" + r;
    }
    return r;
}
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <p>{FormatNumberLength(value,2)}</p>
    </div>
  );
};

export default DateTimeDisplay;
