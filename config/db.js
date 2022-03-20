import { createPool } from 'mysql2';

const db = createPool({
  host: 'localhost',
  user: 'root',
  password: 'csalam123',
  database: 'studentdb',
  port: 3306,
});

// check whether connecrion is successful
db.getConnection((err) => {
  if (err) {
    console.log('Error connecting to database');
  } else {
    console.log('Database connection is successful.');
  }
});

export default db.promise();
