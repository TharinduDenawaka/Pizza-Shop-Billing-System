const db = require('../config/db');

module.exports = {
  getAllProducts: async () => {
    const { rows } = await db.query('SELECT * FROM products ORDER BY name');
    return rows;
  },

 
  getProductById: async (id) => {
    const { rows } = await db.query('SELECT * FROM products WHERE id = $1', [id]);
    return rows[0];
  }
};