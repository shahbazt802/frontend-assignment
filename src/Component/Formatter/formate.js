export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

export const formatPercentage = (percentage) => {
  if (percentage === undefined || percentage === null) return "0%";
  return `${percentage.toFixed(2)}%`;
};
