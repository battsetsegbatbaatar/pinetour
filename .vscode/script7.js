const startDate = new Date("11/6/2023, 4:00:00 AM");
const endDate = new Date("11/7/2023, 10:34:00 PM");
const hours = 1000;
const Free = (endDate, startDate) => {
  const timeSecond = (endDate - startDate) / 1000;
  const timeHour = Math.floor(timeSecond / 3600);

  if (timeSecond % 3600 > 1800) return (timeHour + 1) * hours;

  return timeHour * hours;
};
console.log(timeHour);
