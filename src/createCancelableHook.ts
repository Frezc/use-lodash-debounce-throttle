import { useEffect, useRef, useMemo } from 'react';

export type Fn = (...args: any[]) => any;
export interface Cancelable {
  cancel(): void;
  flush(): void;
}

function createCancelableHook<T extends Fn, O>(createFn: (fnWrapper: Fn, wait?: number, options?: O) => T & Cancelable, depFn: (wait?: number, options?: O) => any[]) {
  return (fn: T, wait?: number, options?: O) => {
    const compareParams = depFn(wait, options);

    const debouncedFn = useRef<T & Cancelable | false>(false);
    const fnRef = useRef(fn);
    fnRef.current = fn;

    function createDebounce() {
      return createFn((...params) => {
        return fnRef.current && fnRef.current(...params)
      }, wait, options);
    }

    useMemo(() => {
      if (debouncedFn.current) {
        // only call when update
        debouncedFn.current.cancel();
        debouncedFn.current = createFn(fn);
      }
    }, compareParams);
    useEffect(() => {
      return () => {
        if (debouncedFn.current) {
          debouncedFn.current.cancel();
        }
      }
    }, []);
    if (!debouncedFn.current) {
      // first time
      debouncedFn.current = createDebounce();
    }

    return debouncedFn.current;
  }
}

export default createCancelableHook;
