import {RootState} from '@redux/store';
import {useSelector} from 'react-redux';

type Result<S> = S extends (...args: any[]) => infer R ? R : any;

export function useReduxState<
  S extends (state: RootState) => any,
  R extends Result<S>,
>(selector: S, equalityFn?: (left: R, right: R) => boolean) {
  return useSelector(selector, equalityFn) as R;
}
