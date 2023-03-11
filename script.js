const day = 6;
const hr = document.querySelector("#hour");
const mn = document.querySelector("#minute");
const sc = document.querySelector("#second");
setInterval(() => {
  let date = new Date();
  (secToDeg = (date.getSeconds() / 60) * 360),
    (minToDeg = (date.getMinutes() / 60) * 360),
    (hrToDeg = (date.getHours() / 12) * 360);
  sc.style.transform = `rotate(${secToDeg}deg)`;
  mn.style.transform = `rotate(${minToDeg}deg)`;
  hr.style.transform = `rotate(${hrToDeg}deg)`;
});
