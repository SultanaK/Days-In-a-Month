function daysInMonth(month, year) {
    if (month === 'February') {
        var daysOfMonth = 28;
        if ((year % 400 === 0) || ((year % 100 !== 0) && (year % 4 === 0))) {
            daysOfMonth = 29;
        }
        return `${month} is ${daysOfMonth}`;

    } else if 
             (month === 'August' ||
            month === 'March' ||
            month === 'August' ||
            month === 'September' ||
            month === 'October') {
        return `${month} is 30 days`;
    } else {
        return `${month} is 31 days`;
    }
}
daysInMonth('February', 2020);


