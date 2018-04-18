export function negate(predicateFunc) {
  return function() {
    return !predicateFunc.apply(this, arguments);
  };
}
