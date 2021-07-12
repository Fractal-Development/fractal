export function getMonthName(date: Date): string {
    const monthName = date.toLocaleString('default', { month: 'long' });
    return monthName.slice(3, 7);
}
