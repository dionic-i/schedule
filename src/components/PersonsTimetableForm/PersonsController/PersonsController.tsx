import { FC } from 'react';
import { useFieldArray } from 'react-hook-form';
import { TimetableFieldName, TimetablesFieldName } from '../timetable.schema';
import { Actions, FieldsContainer, FieldsRow, Person } from './PersonsController.styles';
import AmountField from '../fields';
import Button from '../../Button';
import IntervalField from '../fields/IntervalField';

const PersonsController: FC = ({ onChangePersons }) => {
  const { fields, append, remove } = useFieldArray({ name: TimetablesFieldName.timetables });

  const handleAddPerson = () => {
    append({ workDays: 5, holidayDays: 2 });
    onChangePersons && onChangePersons();
  };

  const handleRemovePerson = (index: number) => {
    remove(index);
    onChangePersons && onChangePersons();
  };

  return (
    <>
      <Actions>
        <Button type="button" onClick={handleAddPerson}>
          Добавить
        </Button>
        <IntervalField />
      </Actions>
      <FieldsContainer>
        {fields.map((field, index) => (
          <FieldsRow key={field.id}>
            <Person>{index + 1})</Person>
            <AmountField name={TimetableFieldName.workDays} label="Раб. дней" index={index} />
            <AmountField name={TimetableFieldName.holidayDays} label="Вых. дней" index={index} />
            <Button onClick={() => handleRemovePerson(index)}>Удалить</Button>
          </FieldsRow>
        ))}
      </FieldsContainer>
    </>
  );
};

export default PersonsController;
