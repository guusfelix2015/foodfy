const { date } = require("../../lib/utils");
const db = require("../../config/db");

module.exports = {
  all(callback) {
    db.query(`SELECT * recipes`, (err, results) => {
      if (err) return res.send("Database Error");

      callback(results.rows);
    });
  },

  create(data, callback) {
    const query = `
    INSERT INTO recipes (
      chef_id,
      image,
      title,
      ingredients[],
      preparation[],
      created_at
    ) VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING id
    `;

    const values = [
      data.chef_id,
      data.image,
      data.title,
      data.ingredients,
      data.preparation,
      date(Date.now()).iso,
    ];

    db.query(query, values, (err, results) => {
      if (err) throw `Database Error${err}`;
      callback(results.rows[0]);
    });
  },
};
