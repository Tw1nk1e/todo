export default function formatDate(date) {

  // var dd = date.getDate();
  // if (dd < 10) dd = '0' + dd;
  //
  // var mm = date.getMonth() + 1;
  // if (mm < 10) mm = '0' + mm;
  //
  // var yy = date.getFullYear() % 100;
  // if (yy < 10) yy = '0' + yy;
  //
  // var hours = date.getHours();
  //
  // var min = date.getMinutes();
  // if (min<10) min = '0' + min;
  //
  // var sec = date.getSeconds();
  // if (sec<10) sec = '0' + sec;

  return date.toLocaleTimeString() + ' ' + date.toLocaleDateString();
}
