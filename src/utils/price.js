// Preco no formato do Figma: "$100" (inteiro) ou "$599.90".
export function formatPrice(value) {
  const number = Number(value);
  return Number.isInteger(number) ? `$${number}` : `$${number.toFixed(2)}`;
}
