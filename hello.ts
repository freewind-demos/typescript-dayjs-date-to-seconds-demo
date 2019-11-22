import dayjs from 'dayjs';

const now = new Date();

console.log(now)

const milliSeconds1 = dayjs(now).valueOf();
console.log(milliSeconds1);

const milliSeconds2 = now.getTime();
console.log(milliSeconds2);
