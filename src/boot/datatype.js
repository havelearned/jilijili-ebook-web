/**
 * 字符串切割
 * @param value
 * @param vlength
 * @returns {*|string}
 */
export const ellipsis = (value, vlength = 25) => {
  if (!value) {
    return ''
  }
  if (value.length > vlength) {
    return `${value.slice(0, vlength)}...`
  }
  return value
}
