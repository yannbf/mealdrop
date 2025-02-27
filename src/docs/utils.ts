interface GenericObject {
  [key: string]: any
}

interface Theme {
  color: {
    [key: string]: string
  }
}

export const sortObjectKeys = (obj: GenericObject): GenericObject =>
  Object.fromEntries(
    Object.entries(obj)
      .sort()
      .map(([k, v]) => [k, v])
  )

export const getColors = (theme: Theme) =>
  Object.keys(sortObjectKeys(theme.color)).map((key) => ({
    name: key,
    value: theme.color[key],
  }))
