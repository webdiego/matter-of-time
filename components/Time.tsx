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
    <div className="mx-auto max-w-xs mt-2">
      <p className="font-bold wavy text-center text-lg">You have:</p>
      <div className="flex overflow-x-auto mt-4">
        {Object.entries(age).map(([key, value], index) => {
          return (
            <div key={index} className="w-52 p-5">
              <p className="font-semibold">
                {new Intl.NumberFormat('it-IT').format(Math.abs(+value))}
              </p>
              <p className="text-sm">{key}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
