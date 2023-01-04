import {
  differenceInYears,
  differenceInMonths,
  differenceInCalendarISOWeeks,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';

export default function getTimeObject(dateSelected: Date | any) {
  const utcDate = zonedTimeToUtc(new Date(), Intl.DateTimeFormat().resolvedOptions().timeZone);
  return {
    years: differenceInYears(dateSelected, utcDate),
    months: differenceInMonths(dateSelected, utcDate),
    weeks: differenceInCalendarISOWeeks(dateSelected, utcDate),
    days: differenceInDays(dateSelected, utcDate),
    hours: differenceInHours(dateSelected, utcDate),
    minutes: differenceInMinutes(dateSelected, utcDate),
    seconds: differenceInSeconds(dateSelected, utcDate),
  };
}
