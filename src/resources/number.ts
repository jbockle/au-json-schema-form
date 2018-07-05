Number.isInteger = Number.isInteger || ((value) => {
  return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
});
