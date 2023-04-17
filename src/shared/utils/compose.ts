// export const compose =
//   (f: any) =>
//   (...args: any) =>
//     f(...args);

export const compose =
  (...fns: Function[]) =>
  (x: any) =>
    fns.reduceRight((y, f) => f(y), x);
