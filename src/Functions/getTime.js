export default function getTime() {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  const nowTime =
    today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  today = dd + '.' + mm + '.' + yyyy;
  return {
    date: today,
    time: nowTime,
  };
}
