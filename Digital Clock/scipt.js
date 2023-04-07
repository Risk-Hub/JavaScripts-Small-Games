setInterval(() => {
  let date = new Date();
  let d = date.toLocaleTimeString();
  //   console.log(d);
  let html = document.getElementById("clock");
  html.innerHTML = d;
}, 1000);
