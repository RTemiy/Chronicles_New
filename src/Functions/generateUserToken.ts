export default function generateUserToken (): string {
  function rand (): string {
    return Math.random().toString(36).substr(2)
  }
  return rand() + rand()
}
