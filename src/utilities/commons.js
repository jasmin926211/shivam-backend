export const generateInvoiceNumber = ({ totalOrders = 0, companyName, invoiceDate }) => {
  const company = companyName.replace(/\s/g, '').toUpperCase().substring(0, 3);
  const order = (totalOrders + 1).toString().padStart(6, '0');
  const date = new Date(invoiceDate);
  const year = date.getFullYear().toString().slice(-2);
  const month = date.getMonth() + 1;
  const monthString = month.toString().padStart(2, '0');

  return `${company}-${order}-${monthString}${year}`;
};
