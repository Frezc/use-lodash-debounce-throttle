
Bring debounce & throttle of lodash version to react-hooks.

`useDebounce` & `useThrottle` will auto create, update and cancel debounced & throttled instance, so you do not need to cancel manually.

## demo
https://frezc.github.io/use-lodash-debounce-throttle/

## usage

### install
```shell
yarn add use-lodash-debounce-throttle
```

### useDebounce
```jsx
import { useDebounce } from 'use-lodash-debounce-throttle';

const Com = () => {
  const debouncedChange = useDebounce((v) => {
    postUpdate();
  }, 500, { maxWait: 2000 });

  return (
    <input
      type="text"
      onChange={(e) => {
        debouncedChange(e.target.value)
      }}
    />
  )
}
```

### useThrottle
```jsx
import { useThrottle } from 'use-lodash-debounce-throttle';

const Com = () => {
  const debouncedChange = useThrottle((v) => {
    sendMessage();
  }, 500, { leading: false });

  return (
    <input
      type="text"
      onChange={(e) => {
        debouncedChange(e.target.value)
      }}
    />
  )
}
```

## API
- useDebounce: same as https://lodash.com/docs/4.17.11#debounce
- useThrottle: same as https://lodash.com/docs/4.17.11#throttle

## DEV
```
yarn install
yarn start
```