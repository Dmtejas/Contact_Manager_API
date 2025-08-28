const errorHandler = (err,req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.json({"Message": err})
}

module.exports = errorHandler