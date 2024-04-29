export type TTimetable = {
  workDays: number;
  holidayDays: number;
};

export const checkIsHoliday = (value: TTimetable, day: number): boolean => {
  const { workDays, holidayDays } = value;

  const allDays = workDays + holidayDays;
  const dayFromStart = day % allDays;

  return dayFromStart === 0 || (dayFromStart > workDays && dayFromStart <= allDays);
};

export const checkPersonCalendars = (calendars: TTimetable[], interval: number) => {
  let shareHolidayDay: null | number = null;

  for (let i = 0; i < interval; i++) {
    const day = i + 1;
    const shareHolidays = [];

    for (let j = 0; j < calendars.length; j++) {
      const personCalendar = calendars[j];
      const hasHoliday = checkIsHoliday(personCalendar, day);

      shareHolidays.push(hasHoliday);
    }

    if (shareHolidays.every(Boolean)) {
      shareHolidayDay = day;
      break;
    }
  }

  return shareHolidayDay;
};
