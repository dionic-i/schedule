import { FC, memo } from 'react';
import { Content } from './MeetingDay.styles';

export interface IMeetingDayProps {
  calculated?: boolean;
  personsCount: number;
  meetingDay: number | null;
}

const MeetingDay: FC<IMeetingDayProps> = ({ calculated, personsCount, meetingDay }) => {
  const canHaveMeeting = personsCount > 1 && calculated && meetingDay !== null;

  return (
    <>
      {personsCount < 2 && <Content>Добавьте расписания, чтобы определить кода можно встретиться.</Content>}
      {canHaveMeeting && (
        <Content>
          {personsCount} человек(а) могут встретится на {meetingDay || 0} день.
        </Content>
      )}
      {personsCount > 1 && !calculated && <Content>Пока еще не известно, когда можно встретиться.</Content>}
      {calculated && meetingDay === null && (
        <Content $error>{personsCount} человек(а) не смогут встретится никогда.</Content>
      )}
    </>
  );
};

export default memo<IMeetingDayProps>(MeetingDay);
