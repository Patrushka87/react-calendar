export const currentYear = new Date().getFullYear();
export const currentMonth = new Date().getMonth();
const isLeapYear = currentYear % 4 === 0;

export const months = [
    { name: 'January', days: 31 },
    { name: 'February', days: isLeapYear ? 29 : 28 },
    { name: 'March', days: 31 },
    { name: 'April', days: 30 },
    { name: 'May', days: 31 },
    { name: 'June', days: 30 },
    { name: 'July', days: 31 },
    { name: 'August', days: 31 },
    { name: 'September', days: 30 },
    { name: 'October', days: 31 },
    { name: 'November', days: 30 },
    { name: 'December', days: 31 },
];
