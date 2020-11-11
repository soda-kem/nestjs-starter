export const validArrayNumber = (values: Array<string & number>): boolean => !values.some(isNaN)

export const transformArrayNumber = (values: Array<string & number>): number[] => values.map(Number)
