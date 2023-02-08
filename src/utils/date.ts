export const getDate = (): string => {
  return new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate()
}