Aurora App Module Template
==========================

A module template for building top level Aurora app modules.

__NOTE:__
This readme is for building modules inside of Aurora Frontend

__NOTE:__
An app module means that your module renders other modules passed into it, and has an array of `modules` in `options`.

#### Include it in the module-map to enable use

```js
// ./src/modules/module-map.js
const moduleMap = {
  'my-app-module': (callback) => {
    require.ensure([], (require) => {
      callback(null, require('./MyAppModule/MyAppModule.jsx'));
    });
  },
  ...
};
```

#### Document how the JSON-config looks for this module

```js
{
  type: 'my-app-module',
  visible: ['mobile', 'tablet', 'desktop'],
  options: {
    a: '...',
    b: '....',
    c: '.....',
    modules: [...] // other modules
  }
}
```

#### Document the module interface

```js
<MyAppModule
  a={'...'}
  b={'....'}
  c={'.....'}
  modules={[...]}
/>
```

#### Document the different options and how it works

- `a` - this options does..
- `b` - this options does..
- `c` - this options does..
- `modules` - a set of modules

__Example implementation__

```js
render() {
  //......

  let children = this.props.modules.map((module, i) => {
    let Module = module.type;

    return (
      <Module
        key={i}
        {...module.options}
      />
    );
  });

  //......
}
```
