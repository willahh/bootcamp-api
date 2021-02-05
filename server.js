const express = require('express');
const dotenv = require('dotenv');
const bootcamps = require('./routes/bootcamps');
const logger = require('./middleware/logger');
const morgan = require('morgan');

dotenv.config({ path: './config/config.env' });

const PORT = process.env.PORT || 5000;

const app = express();

// Dev loggin middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
