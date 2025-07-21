import { createContext, useContext, useState } from "react";

const InvoicesContext = createContext();

export const InvoicesProvider = ({ children }) => {
  const [invoices, setInvoices] = useState([]);

  const addInvoice = (invoice) => {
    const invoiceWithId = {
      ...invoice,
      id: Date.now().toString(),
      invoiceNumber: `INV-${Date.now().toString().slice(-6)}`,
    };
    setInvoices((prev) => [invoiceWithId, ...prev]);
  };

  return (
    <InvoicesContext.Provider value={{ invoices, addInvoice }}>
      {children}
    </InvoicesContext.Provider>
  );
};

export const useInvoices = () => useContext(InvoicesContext);
