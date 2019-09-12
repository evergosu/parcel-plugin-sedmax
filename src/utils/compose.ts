/* eslint-disable @typescript-eslint/no-explicit-any */
export default function compose(
  fn1: (a: any) => any,
  ...fns: Array<(a: any) => any>
) {
  return fns.reduce((prevFn, nextFn) => value => prevFn(nextFn(value)), fn1);
}
