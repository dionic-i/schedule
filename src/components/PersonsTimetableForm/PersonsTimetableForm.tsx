import { FC, useCallback, useEffect, useState } from 'react';
import { useForm, FormProvider, useWatch } from 'react-hook-form';
import { TPersonsTimetable } from './timetable.types';
import { timetableDefaultValues, timetableResolver, TimetablesFieldName } from './timetable.schema';
import PersonsController from './PersonsController/PersonsController';
import { Actions, Root } from './PersonsTimetableForm.styles';
import Button from '../Button';
import MeetingDay from '../MeetingDay/MeetingDay';
import { checkPersonCalendars } from '../../libs/slotsParser';

const PersonsTimetableForm: FC = () => {
  const [state, setState] = useState<{ calculated: boolean; meetingDay: number | null; personsCount: number }>({
    calculated: false,
    meetingDay: null,
    personsCount: 0,
  });

  const { calculated, meetingDay, personsCount } = state;

  const formMethods = useForm<TPersonsTimetable>({
    mode: 'onSubmit',
    defaultValues: timetableDefaultValues,
    resolver: timetableResolver,
  });

  const { handleSubmit, control } = formMethods;

  const onSubmit = useCallback((formValues: TPersonsTimetable) => {
    const personsCount = formValues.timetables.length;
    const calculated = personsCount > 1 && formValues.interval > 0;
    const meetingDay = personsCount > 1 ? checkPersonCalendars(formValues.timetables, formValues.interval) : null;

    setState({
      calculated,
      meetingDay,
      personsCount,
    });
  }, []);

  const timetable = useWatch({ name: TimetablesFieldName.timetables, control });
  const interval = useWatch({ name: TimetablesFieldName.interval, control });

  useEffect(() => {
    setState((state) => ({
      ...state,
      calculated: false,
    }));
  }, [timetable, interval]);

  return (
    <Root>
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <PersonsController />
          <Actions>
            <Button type="submit">Искать день</Button>
          </Actions>
        </form>
      </FormProvider>
      <MeetingDay calculated={calculated} personsCount={personsCount} meetingDay={meetingDay} />
    </Root>
  );
};

export default PersonsTimetableForm;
