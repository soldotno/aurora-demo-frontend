/**
 * Dependencies
 */
const debug = require('debug')('aurora-frontend:get-module');

/**
 * Shim require.ensure in node.js
 * (check the webpack docs - async chunking)
 */
if (typeof require.ensure !== 'function') {
  require.ensure = require('isomorphic-ensure')({
    dirname: __dirname,
  });
}

/**
 * The map of modules available to resolve to
 */
const moduleMap = {
  'demo-app': (callback) => {
    require.ensure([], (require) => {
      callback(null, require('./DemoAppModule/DemoAppModule.jsx'));
    });
  },
  'demo-hom': (callback) => {
    require.ensure([], (require) => {
      callback(null, require('./DemoHigherOrderModule/DemoHigherOrderModule.jsx'));
    });
  },
  'demo-module': (callback) => {
    require.ensure([], (require) => {
      callback(null, require('./DemoModule/DemoModule.jsx'));
    });
  },
  'demo-module-with-data': (callback) => {
    require.ensure([], (require) => {
      callback(null, require('./DemoModuleWithData/DemoModuleWithData.jsx'));
    });
  },
  'demo-module-with-geolocation': (callback) => {
    require.ensure([], (require) => {
      callback(null, require('./DemoModuleWithGeolocation/DemoModuleWithGeolocation.jsx'));
    });
  },
  'demo-module-with-personalization': (callback) => {
    require.ensure([], (require) => {
      callback(null, require('./DemoModuleWithPersonalization/DemoModuleWithPersonalization.jsx'));
    });
  },
  'demo-module-with-randomization': (callback) => {
    require.ensure([], (require) => {
      callback(null, require('./DemoModuleWithRandomization/DemoModuleWithRandomization.jsx'));
    });
  },
  'demo-module-with-redux': (callback) => {
    require.ensure([], (require) => {
      callback(null, require('./DemoModuleWithRedux/DemoModuleWithRedux.jsx'));
    });
  },
  'does-not-exist': (callback) => {
    require.ensure([], (require) => {
      callback(null, require('./DoesNotExist/DoesNotExist.jsx'));
    });
  },
};

/**
 * Export a function that can resolve
 * a module from a string representation
 * to a React component / Aurora module
 * (asynchronously)
 */
module.exports = (type) => {
  /**
   * Return a Promise of the React component
   * resolved from the string type definition
   */
  return new Promise((resolve, reject) => {
    setImmediate(() => {
      if (!moduleMap[type]) {
        debug(`You are trying to render a module with type *${type}* which does not exist`);
      }

      /**
       * Pull out the specified component getter function
       * (or default gracefully)
       */
      const getModule = moduleMap[type] || moduleMap['does-not-exist'];

      /**
       * Fetch the specified component and the promise to it
       */
      getModule((err, module) => {
        return err ? reject(err) : resolve(module);
      });
    });
  });
};
