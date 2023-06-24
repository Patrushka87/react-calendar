export const currentYear = new Date().getFullYear();
export const currentMonth = new Date().getMonth();
const isLeapYear = currentYear % 4 === 0;

export const months = [
    { name: 'january', days: 31 },
    { name: 'february', days: isLeapYear ? 29 : 28 },
    { name: 'march', days: 31 },
    { name: 'april', days: 30 },
    { name: 'may', days: 31 },
    { name: 'june', days: 30 },
    { name: 'july', days: 31 },
    { name: 'august', days: 31 },
    { name: 'september', days: 30 },
    { name: 'october', days: 31 },
    { name: 'november', days: 30 },
    { name: 'december', days: 31 },
];
