export default function generateUserToken () {
  function rand () {
    return Math.random().toString(36).substr(2)
  }
  return (rand() + rand())
}
