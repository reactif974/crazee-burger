
// format number type float
export function formatPrice(priceToFormat) {
    let price = priceToFormat;
    if (!price) return "0,00 € ";
    const formattedPrice = new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
    }).format(price);
    return formattedPrice;
  }