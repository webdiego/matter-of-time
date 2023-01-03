import React, { useState, useMemo } from 'react';
import getMessage from '../util/getMessage';
import getTimeObject from '../util/getTimeObject';

export default function Time({ selected }: Date | any) {
  const [time, setTime] = useState(getTimeObject(selected));
  let message = getMessage(time.years);

  useMemo(() => {
    message = getMessage(time.years);
  }, [selected]);

  useMemo(() => {
    const interval = setInterval(() => {
      setTime(getTimeObject(selected));
    }, 1000);

    return () => clearInterval(interval);
  }, [selected]);

  return (
    <div className="mx-auto max-w-xs mt-2">
      <div className="flex  justify-center text-center items-center text-lg">
        <p className="font-bold wavy text-center text-lg">You are:</p>
        <p className=" pl-2 text-focus-in">{message}</p>
      </div>
      {/* <p className="font-bold wavy text-center text-lg">You are:</p> */}
      <div className="flex overflow-x-auto mt-4">
        {Object.entries(time).map(([key, value], index) => {
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
