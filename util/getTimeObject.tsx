import {
  differenceInYears,
  differenceInMonths,
  differenceInCalendarISOWeeks,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from 'date-fns';

export default function getTimeObject(dateSelected: Date | any) {
  return {
    years: differenceInYears(dateSelected, new Date()),
    months: differenceInMonths(dateSelected, new Date()),
    weeks: differenceInCalendarISOWeeks(dateSelected, new Date()),
    days: differenceInDays(dateSelected, new Date()),
    hours: differenceInHours(dateSelected, new Date()),
    minutes: differenceInMinutes(dateSelected, new Date()),
    seconds: differenceInSeconds(dateSelected, new Date()),
  };
}
