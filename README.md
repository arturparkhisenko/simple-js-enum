# simple-enum
**Simple class for Enum type in JavaScript<br>**
You can use it as typical enum or as two-way access map
<hr>

- **Only 17 lines (15 sloc) | 464 Bytes unzipped** :fire: 
-  **Simple for use**
- **No dependencies**
## Install
You can install this library from **npm** or **yarn**:
```
npm install simple-js-enum
```
```
yarn add simple-js-enum
```

If you have some questions, problems or suggestions **you can create an issue, pull request or connect me**

## Example

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

## Licence
Yevhen Diachenko 2018 | [MIT](https://github.com/EugeneDyachenko/simple-js-enum/blob/master/LICENSE)
