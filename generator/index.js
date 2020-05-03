const fs = require('fs')

module.exports = (api, opts) => {
  api.render('./book')

  const dependencies = {
    "vue-book": '^0.1.0-alpha.31',
  }

  api.registerCommand(
    'serve:book',
    {
      description: 'serve',
      usage: 'serve:book'
    },
    () => {
      console.log('serve:book')
    }

  )
  api.registerCommand(
    'build:book',
    {
      description: 'build',
      usage: 'build:book'
    },
    () => {
      console.log('build:book')
    }
  )

  api.extendPackage(dependencies)
}
