const rupees = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
});
export const formatRupees = (value: number): string => rupees.format(value);
export const formatGain = (value: number): string =>
  (value >= 0 ? '+' : '−') + formatRupees(Math.abs(value));
export const formatReturn = (value: number): string =>
  (value >= 0 ? '+' : '') + Number(value.toFixed(2)).toString() + '%';
