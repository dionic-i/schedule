import { object, array, number } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { TPersonsTimetable } from './timetable.types';

const REQUIRED_MSG = 'Введите число';
const MIN_MSG = 'Введите число больше ${min}';
const MAX_MSG = 'Введите число меньше ${max}';

export enum TimetableFieldName {
  workDays = 'workDays',
  holidayDays = 'holidayDays',
}

export enum TimetablesFieldName {
  interval = 'interval',
  timetables = 'timetables',
}

const workDayFieldSchema = number()
  .nullable()
  .default(null)
  .transform((value) => (Number.isNaN(value) ? null : parseInt(value, 10)))
  .required(REQUIRED_MSG)
  .min(1, MIN_MSG)
  .max(30, MAX_MSG);

const holidayDayFieldSchema = number()
  .nullable()
  .default(null)
  .transform((value) => (Number.isNaN(value) ? null : parseInt(value, 10)))
  .required(REQUIRED_MSG)
  .min(1, MIN_MSG)
  .max(30, MAX_MSG);

const intervalFieldSchema = number()
  .nullable()
  .default(6)
  .transform((value) => (Number.isNaN(value) ? null : parseInt(value, 10)))
  .required(REQUIRED_MSG)
  .min(1, MIN_MSG)
  .max(365, MAX_MSG);

const timetablesSchema = array()
  .of(
    object().shape({
      [TimetableFieldName.workDays]: workDayFieldSchema,
      [TimetableFieldName.holidayDays]: holidayDayFieldSchema,
    })
  )
  .default([])
  .required();

export const timetablesFormSchema = object().shape({
  [TimetablesFieldName.interval]: intervalFieldSchema,
  [TimetablesFieldName.timetables]: timetablesSchema,
});

export const timetableDefaultValues = timetablesFormSchema.getDefault() as TPersonsTimetable;

export const timetableResolver = yupResolver<TPersonsTimetable>(timetablesFormSchema);
