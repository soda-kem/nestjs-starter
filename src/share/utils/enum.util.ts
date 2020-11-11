/* Don't support Heterogeneous Enum or Nested Enum */
import { uniqueArray } from './array.util'

export const getKeyEnum = (e: Record<string, any>): string[] => {
  const keys = Object.keys(e)
  if (keys.some(k => /^\d+$/.test(k))) {
    return keys.filter(k => !/^\d+$/.test(k))
  }
  return keys
}

/* Don't support Heterogeneous Enum or Nested Enum */
export const getValueEnum = (e: Record<string, any>): any[] => {
  return getKeyEnum(e).map(k => e[k])
}

/* Don't support Heterogeneous Enum or Nested Enum */
export const enumToObject = (e: Record<string, any>): Record<string, any> => {
  const keys = getKeyEnum(e)
  const o: Record<string, any> = {}
  for (const key of keys) {
    o[key] = e[key]
  }
  return o
}

export const getSwaggerEnumDescription = (e: Record<string, any>) => {
  return getKeyEnum(e)
    .map(k => {
      return `${k} : ${e[k]}`
    })
    .join('<br>')
}

/* Don't support Heterogeneous Enum or Nested Enum */
export const getValueEnumArray = (es: Record<string, any>[]): any[] => {
  return uniqueArray(es.map(getValueEnum).flat())
}

export const getSwaggerEnumArrayDescription = (es: Record<string, any>[]) => {
  return es
    .map(e => {
      return getValueEnum(e).map(k => {
        return `${k} : ${e[k]}`
      })
    })
    .flat()
    .join('<br>')
}
