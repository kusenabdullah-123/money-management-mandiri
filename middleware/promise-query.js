const connect = require("../database/db");
const promiseQuery = (query, data) => {
  return new Promise((resolve, reject) => {
    connect.query(query, data, function (err, results) {
      err ? reject(err) : resolve(results);
    });
  });
};

module.exports = { promiseQuery };
