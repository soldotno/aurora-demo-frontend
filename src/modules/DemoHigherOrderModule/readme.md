Aurora Higher Order Module Template
===================================

A module template for building higher order Aurora modules.

__NOTE:__
This readme is for building modules inside of Aurora Frontend

__NOTE:__
A higher order module means that your module renders other modules passed into it, and has an array of `modules` in its `options`.

#### Include it in the module-map to enable use

```js
// module-map.js
const moduleMap = {
  'my-higher-order-module': (callback) => {
    require.ensure([], (require) => {
      callback(null, require('./MyHigherOrderModule/MyHigherOrderModule.jsx'));
    });
  },
  ...
};
```

#### Document how the JSON-config looks for this module

```js
{
  type: 'my-higher-order-module',
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
<MyHigherOrderModule
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
