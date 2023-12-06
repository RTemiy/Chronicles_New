export default function importAllIDirectory (r: any): object {
  const files = {}
  r.keys().map((item: string) => {
    files[item.replace('./', '')] = r(item)
  })
  return files
}
