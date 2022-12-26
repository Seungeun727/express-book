module.exports = {
  errorHandler: (err, req, res, next) => {
    let error = {
      statusCode: err.statusCode || 500,
      message: err.message || "Internal Server error"
    };
    res.status(error.statusCode).json({ message: error.message });
  },
};