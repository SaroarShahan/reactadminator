const date = new Date();
const d = date.getDate();
const m = date.getMonth();
const y = date.getFullYear();

export default [
  {
    title: 'All Day Event',
    start: new Date(y, m, 1)
  },
  {
    title: 'Long Event',
    start: new Date(y, m, d - 5)
  },
  {
    title: 'Repeating Event',
    start: new Date(y, m, d - 3, 16, 0)
  },
  {
    title: 'Repeating Event',
    start: new Date(y, m, d + 4, 16, 0)
  },
  {
    title: 'Birthday Party',
    start: new Date(y, m, d + 1, 19, 0),
    end: new Date(y, m, d + 1, 22, 30),
    allDay: false,
    desc: 'Gathering'
  },
  {
    title: 'Click for Google',
    start: new Date(y, m, 28),
    end: new Date(y, m, 29),
    url: 'http ://google.com/',
    desc: 'Google',
    bullet: 'success'
  }
];
