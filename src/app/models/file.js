const db = require("../../config/db")

module.exports = {
  create(data, callback) {
    const query = `
    INSERT INTO files (
      name,
      path,
      recipe_id
    ) VALUES ($1, $2, $3)
    RETURNING id
    `
    const values = [ 
      data.filename,
      data.path,
      data.recipe_id,
    ]

    db.query(query, values, (err, results) => {
      if(err) throw `Database Error! ${err}`
      console.log(results.rows[0])
      return callback(results.rows[0])
    }) 
  },
}