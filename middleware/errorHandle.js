const errorHandler = (err,req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.json({Error: "Error occurred"})
}

module.exports = errorHandler