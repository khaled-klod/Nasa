'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    fingerprint: {
      prepend: 'https://khaled-klod.github.io/Nasa/', // Adjust to match your GitHub Pages URL
    },
  });

  return app.toTree();
};
