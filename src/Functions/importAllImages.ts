export default function importAllImages (r: any): object {
  const images = {}
  r.keys().map((item: string) => { images[item.replace('./', '')] = r(item) })
  return images
}
