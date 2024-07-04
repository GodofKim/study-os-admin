import styles from "./index.module.css";
import { Calendar as MantineCalendar } from "@mantine/dates";
import { MantineProvider } from "@mantine/core";
import { IconChevronLeftMini, IconChevronRightMini } from "../../../main";
import { useState } from "react";

export const DateCalendar = ({
  dateValue,
  onChangeDateValue,
}: {
  dateValue: Date | null;
  onChangeDateValue?: (value: Date | null) => void;
}) => {
  const [level, setLevel] = useState("month");

  const handleDateClick = (date: Date) => {
    if (dateValue && date.getTime() === dateValue.getTime()) {
      onChangeDateValue?.(null);
    } else {
      onChangeDateValue?.(date);
    }
  };

  const handleTodayClick = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (dateValue && today.getTime() === dateValue.getTime()) {
      onChangeDateValue?.(null);
    } else {
      onChangeDateValue?.(today);
    }
  };

  return (
    <MantineProvider>
      <MantineCalendar
        classNames={{
          calendarHeader: styles.calendarHeader,
          calendarHeaderControl: styles.calendarHeaderControl,
          calendarHeaderLevel: styles.calendarHeaderLevel,
          levelsGroup: styles.levelsGroup,
          yearsList: styles.yearsList,
          yearsListCell: styles.yearsListCell,
          yearsListControl: styles.yearsListControl,
          monthsList: styles.monthsList,
          monthsListCell: styles.monthsListCell,
          monthsListControl: styles.monthsListControl,
          monthThead: styles.monthThead,
          monthCell: styles.monthCell,
          month: styles.month,
          weekday: styles.weekday,
          day: styles.day,
        }}
        getDayProps={(date) => ({
          selected: !!dateValue && date.getTime() === dateValue.getTime(),
          onClick: () => handleDateClick(date),
        })}
        monthsListFormat="M[월]"
        decadeLabelFormat={(startDate, endDate) =>
          `${startDate.getFullYear()}년 - ${endDate.getFullYear()}년`
        }
        yearLabelFormat={(date) => `${date.getFullYear()}년`}
        monthLabelFormat={(date) =>
          `${date.getFullYear()}년 ${date.getMonth() + 1}월`
        }
        weekdayFormat={(date) => "일월화수목금토"[date.getDay()]}
        firstDayOfWeek={0}
        previousIcon={<IconChevronLeftMini size={24} />}
        nextIcon={<IconChevronRightMini size={24} />}
        onLevelChange={(level) => setLevel(level)}
      />
      {level === "month" && (
        <div className={styles.calendarControls}>
          <button onClick={() => onChangeDateValue?.(null)}>삭제</button>
          <button onClick={handleTodayClick}>오늘</button>
        </div>
      )}
    </MantineProvider>
  );
};
