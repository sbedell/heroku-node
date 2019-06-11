const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect()
  .then(() => console.log('Connected! \n'))
  .catch(err => console.error('\n[!] Connection error:', err.stack));

// client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
//   if (err) throw err;
//   for (let row of res.rows) {
//     console.log(JSON.stringify(row));
//   }
//   client.end();
// });

// Promise version of .query():
client.query('SELECT NOW()')
  .then(result => console.log(result))
  .catch(e => console.error(e.stack))
  .finally(() => client.end());
