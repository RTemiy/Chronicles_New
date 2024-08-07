export function tsv2array (tsv) {
  let result = tsv
  result = result.split('\n')
  for (let i = 0; i < result.length; i++) {
    result[i] = result[i].split('\t')
  }
  return result
}
