export function measure<T extends (...args: any[]) => Promise<any>>(fn: T) {
  return async function (...args: Parameters<T>) {
    const start = Date.now();
    const res = await fn(...args);
    const ms = Date.now() - start;
    console.log(`Execution time: ${fn.name} -> ${ms}ms`);
    return res;
  } as T;
}
