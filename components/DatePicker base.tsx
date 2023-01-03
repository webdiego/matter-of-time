import React from 'react';
import { DayPicker } from 'react-day-picker';
import {
  format,
  differenceInYears,
  differenceInMonths,
  differenceInCalendarISOWeeks,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from 'date-fns';

export default function DatePicker() {
  const [selected, setSelected] = React.useState<Date>();
  const [time, setTime] = React.useState<Number>(Date.now());
  let footer = <p>Please pick a day.</p>;

  React.useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  if (selected) {
    var m = differenceInMonths(selected, new Date());
    var d = differenceInDays(selected, new Date());
    var h = differenceInHours(selected, new Date());
    var mi = differenceInMinutes(selected, new Date());
    var ms = differenceInSeconds(selected, new Date());
    var y = differenceInYears(selected, new Date());
    var w = differenceInCalendarISOWeeks(selected, new Date());
    footer = (
      <>
        <p>You picked {format(selected, 'PP')}.</p>
        <p>
          You have :
          {new Intl.NumberFormat('it-IT', { maximumSignificantDigits: 3 }).format(Math.abs(y))}
          years
        </p>
        <p>{new Intl.NumberFormat('it-IT').format(Math.abs(m))} months</p>
        <p>{new Intl.NumberFormat('it-IT').format(Math.abs(w))} weeks.</p>
        <p> {new Intl.NumberFormat('it-IT').format(Math.abs(d))} days.</p>
        <p> {new Intl.NumberFormat('it-IT').format(Math.abs(h))} hours.</p>
        <p>{new Intl.NumberFormat('it-IT').format(Math.abs(mi))} minutes.</p>
        <p>
          {new Intl.NumberFormat('it-IT').format(Math.abs(ms))}
          seconds
        </p>
      </>
    );
  }
  const disabledDays = [{ from: new Date(), to: new Date(new Date().getFullYear(), 12, 31) }];
  return (
    <>
      <DayPicker
        className={''}
        mode="single"
        fromYear={1904}
        toYear={new Date().getFullYear()}
        captionLayout="dropdown"
        selected={selected}
        onSelect={setSelected}
        disabled={disabledDays}
        footer={footer}
      />
    </>
  );
}
