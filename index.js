function daysInMonth(month, year) {
    if (month === 'February') {
        var daysOfMonth = 28;
        if ((year % 400 === 0) || ((year % 100 !== 0) && (year % 4 === 0))) {
            daysOfMonth = 29;
        }
        return `${month} is ${daysOfMonth}`;

    } else if (month === 'August' || 'March' || 'August' || 'September' || 'October') {
        return `${month} is 30 days`;
    } else {
        return `${month} is 31 days`;
    }
}
daysInMonth('February', 2020);

