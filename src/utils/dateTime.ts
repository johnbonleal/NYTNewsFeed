import moment from 'moment';

export const formatDate = (date: moment.Moment | Date = moment(), F: string = 'L') =>
  moment(date).format(F);