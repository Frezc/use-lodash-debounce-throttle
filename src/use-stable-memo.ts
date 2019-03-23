import { useRef } from "react";

export default function useStableMemo<T = any>(nextCreate: () => T, deps?: any[]) {
  const valueRef = useRef<T | undefined>(undefined);
  const depsRef = useRef<any[] | undefined>(undefined);

  if (depsRef.current && deps && areHookInputsEqual(deps, depsRef.current)) {
    return valueRef.current;
  }

  valueRef.current = nextCreate();
  depsRef.current = deps;
  return valueRef.current;
}

function areHookInputsEqual(
  nextDeps: any[],
  prevDeps: any[],
) {
  for (let i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
    if (Object.is(nextDeps[i], prevDeps[i])) {
      continue;
    }
    return false;
  }
  return true;
}