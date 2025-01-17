export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US").format(amount); // No style or currency
};

export const formatPercentage = (percentage) => {
  if (percentage === undefined || percentage === null) return "0%";
  return `${percentage.toFixed(2)}`;
};
