import throttle from 'lodash/throttle';
import { ThrottleSettings } from 'lodash';
import createCancelableHook from './createCancelableHook';

const useDebounce = createCancelableHook((...params) => throttle(...params), (wait?: number, options?: ThrottleSettings) => {
  const compareParams: any[] = [wait];
  if (options) {
    compareParams.push(options.leading);
    compareParams.push(options.trailing);
  }
  return compareParams;
})

export default useDebounce;
