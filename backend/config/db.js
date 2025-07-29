//Connect hosted DB from neone
const { Pool } = require('pg');
require('dotenv').config();


const pool = new Pool({
  connectionString: process.env.DB_CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false 
  }
});


pool.query('SELECT NOW()', (err) => {
  if (err) {
    console.error('Connection error:', err.message);
  } else {
    console.log('Successfully connected to PostgreSQL');
  }
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};



// Local postgreSQL db connection 
// const { Pool } = require('pg');
// require('dotenv').config();

// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// });

// pool.query('SELECT NOW()', (err) => {
//   if (err) {
//     console.error(' Connection error:', err.message);
//   } else {
//     console.log('Successfully connected to PostgreSQL');
//   }
// });

// module.exports = {
//   query: (text, params) => pool.query(text, params),
// };



