# simple-enum
Simple JavaScript Enumeration<br>
You can use it for creating set of related named constants.

## Install
You can install this library from **npm** or **yarn**:
```
npm install simple-js-enum
```
```
yarn add simple-js-enum
```

### Import
```js
const Enum = require('simple-js-enum');
```

### Creating from Array
```js
const LoadStatus = new Enum(['Loading', 'Loaded', 'Error']);
```
### Access ways:
* **Default way:**
```js
console.log(LoadStatus.Loading); // 0
```
* **Reverted way:**
```js
console.log(LoadStatus[0]); // 'Loading'
```

### Creating from Object
If you want to use numbers different to default you can pass object:
```js
const LoadStatus = new Enum({
  Loading: 10,
  Loaded: 20,
  Error: 30
});
console.log(LoadStatus.Error); // 30
console.log(LoadStatus[30]); // 'Error'
```

### Get keys or values arrays
* **Get array with constants names**
```js
const LoadStatus = new Enum(['Loading', 'Loaded', 'Error']);
console.log(LoadStatus.values); // ['Loading', 'Loaded', 'Error']
```
* **Get array with number values**
```js
const LoadStatus = new Enum(['Loading', 'Loaded', 'Error']);
console.log(LoadStatus.numbers); // [0, 1, 2]
```

### Unfroze enum
Enum is frozen by default. But you can pass `{ frozen: false }` and it'll be unfrozen:
```js
const LoadStatus = new Enum(['Loading', 'Loaded', 'Error'], { frozen: false });
LoadStatus.Something = 111
```
*It is not recommended and can leads to errors. For example You can rewrite existed property etc*
