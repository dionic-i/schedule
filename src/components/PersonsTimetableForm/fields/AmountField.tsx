import { FC } from 'react';
import { Field, Wrapper, Label, Message, Root } from './fields.styles';
import { useController } from 'react-hook-form';
import { TimetableFieldName, TimetablesFieldName } from '../timetable.schema';

export interface IAmountFieldProps {
  name: TimetableFieldName.workDays | TimetableFieldName.holidayDays;
  label: string;
  index: number;
}

const AmountField: FC<IAmountFieldProps> = ({ name, label, index }) => {
  const fieldName = `${TimetablesFieldName.timetables}.${index}.${name}` as const;

  const {
    field: { value, onChange },
    fieldState: { error, invalid },
  } = useController({
    name: fieldName,
  });

  return (
    <Root>
      <Wrapper>
        <Label htmlFor={fieldName}>{label}</Label>
        <Field autoComplete="off" $error={invalid} name={fieldName} value={value} onChange={onChange} />
      </Wrapper>
      {error && error?.message && <Message>{error?.message}</Message>}
    </Root>
  );
};

export default AmountField;
