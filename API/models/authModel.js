
const db = require('../config/db');


exports.findByCredentials = async (email, password) => {
  const result = await db.query(
    'SELECT * FROM users WHERE email = $1 AND password = $2',
    [email, password]
  );
  return result.rows[0];
};
