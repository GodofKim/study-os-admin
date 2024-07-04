import styles from "./index.module.css";
import { Calendar as MantineCalendar } from "@mantine/dates";
import { MantineProvider } from "@mantine/core";
import { DateRange } from "../../InputField/type/DateRangeInput";
import { IconChevronLeftMini, IconChevronRightMini } from "../../../main";
import { useState } from "react";

export const RangeCalendar = ({
  dateRangeValue,
  onChangeDateRangeValue,
}: {
  dateRangeValue: DateRange;
  onChangeDateRangeValue?: (value: DateRange) => void;
}) => {
  const [level, setLevel] = useState("month");

  const handleDateClick = (date: Date) => {
    if (!dateRangeValue.start) {
      onChangeDateRangeValue?.({ start: date, end: null });
    } else if (!dateRangeValue.end) {
      if (date.getTime() >= dateRangeValue.start.getTime()) {
        onChangeDateRangeValue?.({
          start: dateRangeValue.start,
          end: date,
        });
      } else {
        onChangeDateRangeValue?.({
          start: date,
          end: dateRangeValue.start,
        });
      }
    } else {
      onChangeDateRangeValue?.({ start: date, end: null });
    }
  };

  const handleTodayClick = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (!dateRangeValue.start) {
      onChangeDateRangeValue?.({ start: today, end: null });
    } else if (!dateRangeValue.end) {
      if (today.getTime() >= dateRangeValue.start.getTime()) {
        onChangeDateRangeValue?.({
          start: dateRangeValue.start,
          end: today,
        });
      } else {
        onChangeDateRangeValue?.({
          start: today,
          end: dateRangeValue.start,
        });
      }
    } else {
      onChangeDateRangeValue?.({ start: today, end: null });
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
          selected:
            !dateRangeValue.end &&
            date.getTime() === dateRangeValue.start?.getTime(),
          inRange:
            !!dateRangeValue.start &&
            !!dateRangeValue.end &&
            date >= dateRangeValue.start &&
            date <= dateRangeValue.end,
          firstInRange:
            !!dateRangeValue.start &&
            !!dateRangeValue.end &&
            date.getTime() === dateRangeValue?.start?.getTime(),
          lastInRange:
            !!dateRangeValue.start &&
            !!dateRangeValue.end &&
            date.getTime() === dateRangeValue?.end?.getTime(),
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
          <button
            onClick={() => onChangeDateRangeValue?.({ start: null, end: null })}
          >
            삭제
          </button>
          <button onClick={handleTodayClick}>오늘</button>
        </div>
      )}
    </MantineProvider>
  );
};
