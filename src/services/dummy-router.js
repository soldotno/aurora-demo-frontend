const { slice, merge } = require('aurora-deep-slice-merge');
const clone = require('stringify-clone');
const deepEqual = require('deep-equal');

const demo = {
  pageInfo: {
    title: 'Demo Aurora config',
  },
  app: {
    type: 'demo-app',
    options: {
      modules: [{
        type: 'demo-hom',
        options: {
          modules: [{
            type: 'demo-module-with-data',
            visibility: ['small'],
            options: {
              _dataOptions: {
                name: 'A',
                age: 1
              }
            }
          }, {
            type: 'demo-module-with-data',
            visibility: ['medium'],
            options: {
              _dataOptions: {
                name: 'B',
                age: 2
              }
            }
          }, {
            type: 'demo-module-with-data',
            visibility: ['large'],
            options: {
              _dataOptions: {
                name: 'C',
                age: 3
              }
            }
          }, {
            type: 'demo-module-with-data',
            options: {
              _dataOptions: {
                name: 'D',
                age: 4
              }
            }
          }, {
            type: 'demo-hom',
            options: {
              modules: [{
                type: 'demo-module-with-data',
                visibility: ['small'],
                options: {
                  _dataOptions: {
                    name: 'E',
                    age: 5
                  }
                }
              }, {
                type: 'demo-module-with-data',
                visibility: ['medium'],
                options: {
                  _dataOptions: {
                    name: 'F',
                    age: 6
                  }
                }
              }, {
                type: 'demo-module-with-data',
                visibility: ['large'],
                options: {
                  _dataOptions: {
                    name: 'G',
                    age: 7
                  }
                }
              }, {
                type: 'demo-module-with-data',
                options: {
                  _dataOptions: {
                    name: 'H',
                    age: 8
                  }
                }
              }]
            }
          }]
        }
      }]
    }
  }
};

const redux = {
  pageInfo: {
    title: 'Demo Aurora config',
  },
  app: {
    type: 'demo-app',
    options: {
      modules: [{
        type: 'demo-hom',
        options: {
          modules: [{
            type: 'demo-module-with-redux',
            visibility: ['small'],
            options: {
              _dataOptions: {
                name: 'AA-redux',
                age: 11
              }
            }
          }, {
            type: 'demo-module-with-redux',
            visibility: ['medium'],
            options: {
              _dataOptions: {
                name: 'BB-redux',
                age: 22
              }
            }
          }, {
            type: 'demo-module-with-redux',
            visibility: ['large'],
            options: {
              _dataOptions: {
                name: 'CC-redux',
                age: 33
              }
            }
          }, {
            type: 'demo-module-with-redux',
            options: {
              _dataOptions: {
                name: 'DD-redux',
                age: 44
              }
            }
          }]
        }
      }]
    }
  }
};

const geo = {
  pageInfo: {
    title: 'Demo Aurora config',
  },
  app: {
    type: 'demo-app',
    options: {
      modules: [{
        type: 'demo-hom',
        options: {
          modules: [{
            type: 'demo-module-with-geolocation',
            visibility: ['small'],
            options: {
              _dataOptions: {
                name: 'EE-geo',
                age: 55
              }
            }
          }, {
            type: 'demo-module-with-geolocation',
            visibility: ['medium'],
            options: {
              _dataOptions: {
                name: 'FF-geo',
                age: 66
              }
            }
          }, {
            type: 'demo-module-with-geolocation',
            visibility: ['large'],
            options: {
              _dataOptions: {
                name: 'GG-geo',
                age: 77
              }
            }
          }, {
            type: 'demo-module-with-geolocation',
            options: {
              _dataOptions: {
                name: 'HH-geo',
                age: 88
              }
            }
          }]
        }
      }]
    }
  }
};

const routes = {
  '/demo': demo,
  '/demo/': demo,
  '/redux': redux,
  '/redux/': redux,
  '/geo': geo,
  '/geo/': geo,
};

module.exports = function({
  path,
  query,
  skip,
  limit,
  page,
  version,
  settings,
}) {
  if (!routes[path]) {
    return Promise.reject(new Error('Route requested not found'));
  }

  let config = slice(routes[path], skip, limit);

  let hasMore = !deepEqual(
    slice(routes[path], skip, limit),
    slice(routes[path], skip, limit + 1)
  );

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        meta: {
          pagination: {
            hasMore
          },
          version: 123
        },
        data: {
          config
        }
      });
    }, 1000);
  });
};
