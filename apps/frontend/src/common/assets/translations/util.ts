import { Language } from '@/common/enums/language.enum';
import { store } from '@/store/store';
import moment from 'moment';

const formatters = {
  [Language.English]: new Intl.RelativeTimeFormat('en-us', {
    numeric: 'auto',
    style: 'narrow',
  }),
  [Language.Hebrew]: new Intl.RelativeTimeFormat('he', {
    numeric: 'auto',
    style: 'narrow',
  }),
};

const justNow = {
  [Language.English]: 'Just now',
  [Language.Hebrew]: 'ממש עכשיו',
};

export const getTimeAgo = (date: Date) => {
  const lang = store.getState().global.language;
  const formatter = formatters[lang];
  const now = moment();
  const then = moment(date);
  const daysDiff = then.diff(now, 'days');
  if (daysDiff === 0) {
    const minutesDiff = now.diff(then, 'minutes');
    if (minutesDiff === 0) return justNow[lang];
    if (minutesDiff < 60) return formatter.format(minutesDiff, 'minute');
    return formatter.format(then.diff(now, 'hours'), 'hour');
  }

  if (daysDiff < 7) return formatter.format(daysDiff, 'day');
  if (daysDiff < 30) return formatter.format(then.diff(now, 'weeks'), 'week');
  else return formatter.format(then.diff(now, 'years'), 'year');
};
