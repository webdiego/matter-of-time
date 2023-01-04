import React, { useEffect } from 'react';
import { DayPicker } from 'react-day-picker';
import Time from './Time';
import Image from 'next/image';
import { add } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';

export default function DatePicker() {
  const [selected, setSelected] = React.useState<Date>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [tomorrow, setTomorrow] = React.useState<Date>();

  useEffect(() => {
    const utcDate = zonedTimeToUtc(new Date(), Intl.DateTimeFormat().resolvedOptions().timeZone);
    setTomorrow(
      add(utcDate, {
        days: 1,
      })
    );
  }, []);

  const disabledDays = [
    {
      from: tomorrow,
      to: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [selected]);

  return (
    <>
      <DayPicker
        mode="single"
        fromYear={1904}
        toYear={new Date().getFullYear()}
        captionLayout="dropdown"
        selected={selected}
        onSelect={(selected) => {
          if (!selected) return;
          setSelected(selected);
          setLoading(true);
        }}
        disabled={disabledDays}
      />
      <div className="h-32 flex items-center">
        {loading && <Image src={'/clock-anim.svg'} width={20} height={20} alt="logo" />}
        {selected && !loading && <Time {...{ selected }} />}
      </div>
    </>
  );
}
