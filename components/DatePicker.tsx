import React from 'react';
import { DayPicker } from 'react-day-picker';
import Time from './Time';

export default function DatePicker() {
  const [selected, setSelected] = React.useState<Date>();
  const disabledDays = [{ from: new Date(), to: new Date(new Date().getFullYear(), 12, 31) }];

  return (
    <>
      <DayPicker
        mode="single"
        fromYear={1904}
        toYear={new Date().getFullYear()}
        captionLayout="dropdown"
        selected={selected}
        onSelect={setSelected}
        disabled={disabledDays}
      />

      {selected && <Time {...{ selected }} />}
    </>
  );
}
