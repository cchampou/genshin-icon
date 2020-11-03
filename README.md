# Genshi Icons

[![Build Status](https://ci.cchampou.me/api/badges/cchampou/genshin-icon/status.svg)](https://ci.cchampou.me/cchampou/genshin-icon)

`genshi-icons` is a set of React Components containing Genshin icons in SVG.
 
![Example](https://github.com/cchampou/genshin-icon/blob/master/example.png)

## How to install

```shell script
yarn add genshi-icons
```
or
```shell script
npm install genshi-icons
```

## How to use
```jsx
import { Anemo } from 'genshi-icons';

const App = () => {
  
  return (
    <div>
      <Anemo />
      {/* You can specify color and size (in px) */}
      <Anemo size="100" color="purple" />
      {/* You can also specify size in % (for the width) */}
      <Anemo size="30%" color="purple" />
    </div>
  );
}
```
## Available components
- Anemo
- Cryo
- Dendro
- Electro
- Geo
- Hydro
- Pyro