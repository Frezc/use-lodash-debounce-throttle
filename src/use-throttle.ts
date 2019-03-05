import { throttle } from 'lodash-es';
import createCancelableHook from './createCancelableHook';

interface ThrottleSettings {
  /**
   * If you'd like to disable the leading-edge call, pass this as false.
   */
  leading?: boolean;

  /**
   * If you'd like to disable the execution on the trailing-edge, pass false.
   */
  trailing?: boolean;
}

const useDebounce = createCancelableHook((...params) => throttle(...params), (wait?: number, options?: ThrottleSettings) => {
  const compareParams: any[] = [wait];
  if (options) {
    compareParams.push(options.leading);
    compareParams.push(options.trailing);
  }
  return compareParams;
})

export default useDebounce;
