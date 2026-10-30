/** Resolves a root-relative public path ("/icons/x.svg") against the deploy base, e.g. /iOSGamble/ on GitHub Pages. */
export const asset = (path: string) => import.meta.env.BASE_URL + path.replace(/^\//, '')
