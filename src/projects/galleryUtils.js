/**
 * Sorts the object returned by Vite's `import.meta.glob` (eager, default
 * import) numerically by the leading number in each filename — e.g.
 * "1.png.png", "2.png.png", ... "10.png.png" — and returns a plain array
 * of image URLs in the right order.
 *
 * Any file that doesn't match the `<number>.png.png` pattern (the stray
 * "0.png", "o.png", "o.o" placeholder files some folders have) is ignored
 * automatically, so you don't need to delete them from the repo for this
 * to work correctly.
 */
export function sortGlobImages(globResult) {
  return Object.keys(globResult)
    .filter((path) => /\/(\d+)\.png\.png$/.test(path))
    .sort((a, b) => {
      const numA = parseInt(a.match(/\/(\d+)\.png\.png$/)[1], 10);
      const numB = parseInt(b.match(/\/(\d+)\.png\.png$/)[1], 10);
      return numA - numB;
    })
    .map((key) => globResult[key]);
}
