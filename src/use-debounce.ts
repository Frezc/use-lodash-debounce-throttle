import debounce from 'lodash/debounce';
import { DebounceSettings } from 'lodash';
import createCancelableHook from './createCancelableHook';

const useDebounce = createCancelableHook((...params) => debounce(...params), (wait?: number, options?: DebounceSettings) => {
  const compareParams: any[] = [wait];
  if (options) {
    compareParams.push(options.leading);
    compareParams.push(options.maxWait);
    compareParams.push(options.trailing);
  }
  return compareParams;
})

export default useDebounce;
