import VanillaCalendar, { Options } from 'vanilla-calendar-pro';
import 'vanilla-calendar-pro/build/vanilla-calendar.min.css';

const options: Options = {
  type: 'month',
};

const calendar = new VanillaCalendar('#calendar', options);
calendar.init();
