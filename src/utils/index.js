export function inlinePromise(promise) {
  if (promise) {
    return new Promise((resolve) => {
      promise.then(r => resolve([null, r])).catch(e => resolve([e, null]));
    });
  }
}