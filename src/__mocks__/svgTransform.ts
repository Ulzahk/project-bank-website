const path = require('path');


module.exports = {
  process() {
    return {
      code: `module.exports = {};`,
    };
  },
  getCacheKey() {
    return 'svgTransform';
  },
};