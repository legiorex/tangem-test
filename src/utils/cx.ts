type Cx = (...a: Array<boolean | null | string | undefined>) => string
export const cx: Cx = (...args) =>
  args
    .flat()
    .filter((x) => x !== null && x !== undefined && typeof x !== 'boolean')
    .join(' ')
