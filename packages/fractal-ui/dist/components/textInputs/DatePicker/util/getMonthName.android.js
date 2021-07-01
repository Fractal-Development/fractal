export function getMonthName(date) {
    const monthName = date.toLocaleString('default', { month: 'long' });
    return monthName.slice(3, 7);
}
//# sourceMappingURL=getMonthName.android.js.map