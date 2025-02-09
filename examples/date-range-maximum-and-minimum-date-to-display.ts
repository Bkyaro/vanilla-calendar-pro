import VanillaCalendar, { Options } from 'vanilla-calendar-pro';
import 'vanilla-calendar-pro/build/vanilla-calendar.min.css';

const options: Options = {
  date: {
    min: '1920-01-01',
    max: '2038-12-31',
  },
  settings: {
    range: {
      min: '2000-01-01',
      max: '2024-12-31',
    },
    visibility: {
      disabled: true,
    },
  },
};

const calendar = new VanillaCalendar('#calendar', options);
calendar.init();
