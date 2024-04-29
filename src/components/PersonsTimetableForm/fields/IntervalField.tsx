import { FC } from 'react';
import { Field, Wrapper, Label, Message, Root } from './fields.styles';
import { useController } from 'react-hook-form';
import { TimetablesFieldName } from '../timetable.schema';

const IntervalField: FC = () => {
  const {
    field: { value, onChange },
    fieldState: { error, invalid },
  } = useController({
    name: TimetablesFieldName.interval,
  });

  return (
    <Root>
      <Wrapper>
        <Label htmlFor={TimetablesFieldName.interval}>Интервал</Label>
        <Field
          autoComplete="off"
          $error={invalid}
          name={TimetablesFieldName.interval}
          value={value}
          onChange={onChange}
        />
      </Wrapper>
      {error && error?.message && <Message>{error?.message}</Message>}
    </Root>
  );
};

export default IntervalField;
