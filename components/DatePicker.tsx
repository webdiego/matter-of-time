import React, { useEffect } from 'react';
import { DayPicker } from 'react-day-picker';
import Time from './Time';
import Image from 'next/image';
export default function DatePicker() {
  const [selected, setSelected] = React.useState<Date>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const disabledDays = [{ from: new Date(), to: new Date(new Date().getFullYear(), 12, 31) }];

  useEffect(() => {
    if (selected) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
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
