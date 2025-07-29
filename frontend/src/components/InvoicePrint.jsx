import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const InvoicePrint = () => {
  const { id } = useParams();
  const [invoice, setInvoice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handlePrint = () => window.print();
  const handleBack = () => navigate("/invoices");

  useEffect(() => {
    const fetchInvoice = async () => {
      try {
        const response = await axios.get(
          `https://pizza-shop-billing-system.onrender.com/api/invoices/${id}`
        );
        setInvoice(response.data);
      } catch (err) {
        setError("Failed to load invoice details");
      } finally {
        setLoading(false);
      }
    };

    fetchInvoice();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (error || !invoice) {
    return (
      <div className="p-6 bg-red-50 text-red-600 rounded-lg max-w-md mx-auto text-center print:hidden">
        <p className="text-lg font-medium">{error || "Invoice not found"}</p>
      </div>
    );
  }

  return (
    <div className="mx-auto my-10 max-w-4xl p-4 sm:p-8 bg-white rounded-xl shadow-md print:shadow-none border border-gray-100 print:border-0">
      <div id="print-section">
        <div className="mb-8 text-center border-b pb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            <span className="text-orange-500">Pizza</span> Shop
          </h1>
          <p className="text-gray-600 mt-1">50/5 Awissawella road, Colombo</p>
          <p className="text-gray-600">Tel: +94 76 760 3689</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 bg-gray-50 p-4 rounded-lg">
          <div>
            <p className="text-sm text-gray-500">Invoice #</p>
            <p className="font-medium text-gray-800">
              {invoice.invoice_number}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Cashier</p>
            <p className="font-medium text-gray-800">{invoice.cashier_name}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Date & Time</p>
            <p className="font-medium text-gray-800">
              {new Date(invoice.date).toLocaleString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
              })}
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3 font-medium text-gray-700 rounded-l-lg">
                  Item
                </th>
                <th className="p-3 font-medium text-gray-700 text-right">
                  Qty
                </th>
                <th className="p-3 font-medium text-gray-700 text-right">
                  Price
                </th>
                <th className="p-3 font-medium text-gray-700 text-right rounded-r-lg">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {invoice.items.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="p-3 text-gray-800">{item.name}</td>
                  <td className="p-3 text-gray-800 text-right">
                    {item.quantity}
                  </td>
                  <td className="p-3 text-gray-800 text-right">
                    Rs. {item.price}
                  </td>
                  <td className="p-3 text-gray-800 text-right font-medium">
                    Rs. {item.quantity * item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="bg-gray-50 p-4 rounded-lg mb-8">
          <div className="flex justify-between py-2">
            <span className="text-gray-600">Subtotal:</span>
            <span className="font-medium">Rs. {invoice.subtotal}</span>
          </div>
          <div className="flex justify-between py-2 border-t border-gray-200">
            <span className="text-gray-600">Tax (10%):</span>
            <span className="font-medium">Rs. {invoice.tax}</span>
          </div>
          <div className="flex justify-between py-2 border-t border-gray-200 font-bold text-lg">
            <span className="text-gray-800">Total:</span>
            <span className="text-orange-600">Rs. {invoice.total}</span>
          </div>
        </div>
      </div>

      <div className="print:hidden flex flex-col sm:flex-row justify-center gap-4 mt-8">
        <button
          onClick={handlePrint}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium shadow hover:shadow-md flex items-center justify-center"
        >
          🖨️ Print Invoice
        </button>
        <button
          onClick={handleBack}
          className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium shadow hover:shadow-md flex items-center justify-center"
        >
          🔙 Back to Invoices
        </button>
      </div>
    </div>
  );
};

export default InvoicePrint;
