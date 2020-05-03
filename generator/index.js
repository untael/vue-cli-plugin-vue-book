const fs = require('fs')

module.exports = (api, opts) => {
  api.render('./book')

  const dependencies = {
    "vue-book": '^0.1.0-alpha.31',
  }

  api.extendPackage(dependencies)
}
