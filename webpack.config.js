const path = require('path');

module.exports = {
  // ...
  resolve: {
    alias: {
      '@tools': path.resolve(__dirname, '/components/tools')
    }
  }
};
