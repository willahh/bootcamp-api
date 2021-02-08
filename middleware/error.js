const ErrorResponse = require('./../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
  console.error('=>', err);

  let error = { ...err };

  error.message = err.message;

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    error = new ErrorResponse(
      `Bootcamp not found with id of ${err.value}`,
      404
    );
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    error = new ErrorResponse(`Duplicate field value entered`, 400);
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message);
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server error',
  });
};

module.exports = errorHandler;
