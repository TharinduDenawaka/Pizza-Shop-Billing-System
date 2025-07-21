const db = require('../config/db');

module.exports = {
  createInvoice: async (invoiceData) => {
    const { cashierName, items, subtotal, tax, total } = invoiceData;
    
    // Generate invoice number 
    const datePart = new Date().toISOString().slice(0, 10).replace(/-/g, '');

    const { rows } = await db.query(
      'INSERT INTO invoices (invoice_number, cashier_name, subtotal, tax, total) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [`INV-${datePart}-${Math.floor(100 + Math.random() * 900)}`, cashierName, subtotal, tax, total]
    );

    const invoice = rows[0];

   
    for (const item of items) {
      await db.query(
        'INSERT INTO invoice_items (invoice_id, product_id, name, price, quantity, total) VALUES ($1, $2, $3, $4, $5, $6)',
        [invoice.id, item.itemId, item.name, item.price, item.quantity, item.price * item.quantity]
      );
    }

    return invoice;
  },

  getAllInvoices: async () => {
    const { rows } = await db.query(`
      SELECT i.*, COUNT(ii.id) as item_count 
      FROM invoices i
      LEFT JOIN invoice_items ii ON i.id = ii.invoice_id
      GROUP BY i.id
      ORDER BY i.date DESC
    `);
    return rows;
  },

  getInvoiceById: async (id) => {
    const invoiceQuery = await db.query('SELECT * FROM invoices WHERE id = $1', [id]);
    const itemsQuery = await db.query('SELECT * FROM invoice_items WHERE invoice_id = $1', [id]);
    
    if (invoiceQuery.rows.length === 0) return null;
    
    return {
      ...invoiceQuery.rows[0],
      items: itemsQuery.rows
    };
  }
};