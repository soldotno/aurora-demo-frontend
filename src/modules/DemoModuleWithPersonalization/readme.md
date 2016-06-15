Aurora Module Template
======================

A module template for building Aurora modules.

__NOTE:__
This readme is for building modules inside of Aurora Frontend
When you want to outsource a module to npm see [aurora-module-template](https://github.com/soldotno/aurora-module-template)

#### Include it in your module-map and module-includes to enable use

```js
// module-map.js
const moduleMap = {
  'my-module': (callback) => {
    require.ensure([], (require) => {
      callback(null, require('./MyModule/MyModule.jsx'));
    });
  },
  ...
};

// module-includes.js
module.exports = [
  'my-module',
  ...
];
```

#### Document how the JSON-config looks for this module

```js
{
  type: 'my-module',
  visible: ['mobile', 'tablet', 'desktop'],
  options: {
    a: '...',
    b: '....',
    c: '.....'
  }
}
```

#### Document the module interface

```js
<MyModule
  a={'...'}
  b={'....'}
  c={'.....'}
/>
```

#### Document the different options and how it works

- `a` - this options does..
- `b` - this options does..
- `c` - this options does..
