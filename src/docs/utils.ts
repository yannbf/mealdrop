export const sortObjectKeys = (obj: any) =>
  Object.entries(obj)
    .sort()
    // @ts-ignore
    .reduce((o, [k, v]) => ((o[k] = v), o), {})

export const getColors = (theme: any) =>
  Object.keys(sortObjectKeys(theme.color)).map((key) => ({
    name: key,
    value: theme.color[key],
  }))
