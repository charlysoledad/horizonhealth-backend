const httpStatus = require('http-status')
const cors = require('cors');
const APIError = require('../utils/APIError');

const options = {
  origin: (origin, callback) => {

    const whitelist = ['localhost', 'chrome-extension']
    
    const index = whitelist.findIndex((aWhiteListedOrigin) => origin.includes(aWhiteListedOrigin))
    if (!origin || index !== -1) {
      callback(null, true)
    } else {
      const error = {
        message: `'${origin}' is not allowed to access the specified route/resource`,
        status: httpStatus.FORBIDDEN,
      }
      callback(new APIError(error),false)
    }
  },
  credentials: false,
}

module.exports= () => cors(options)