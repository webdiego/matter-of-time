import React, { useState, useEffect } from 'react';

import getTimeObject from '../util/getTimeObject';
export default function Time({ selected }: Date | any) {
  const [age, setAge] = useState(getTimeObject(selected));

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(getTimeObject(selected));
    }, 1000);

    return () => clearInterval(interval);
  }, [selected]);

  return (
    <div>
      <p>You have</p>
      {Object.entries(age).map(([key, value], index) => {
        return (
          <p key={index}>
            {new Intl.NumberFormat('it-IT').format(Math.abs(+value))}
            {key}
          </p>
        );
      })}
    </div>
  );
}
