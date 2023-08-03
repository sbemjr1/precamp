const changeFocus1 = () => {
  let phone1 = document.getElementById("p1").value;
  if (phone1.length === 3) {
    document.getElementById("p2").focus();
  }
};

const changeFocus2 = () => {
  let phone2 = document.getElementById("p2").value;
  if (phone2.length === 4) {
    document.getElementById("p3").focus();
  }
};

let isStarted = false;

let auth = () => {
  if (isStarted === false) {
    //타이머가 작동중이 아닐때ㅑ
    isStarted = true;
    document.getElementById("finish").disabled = false;
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    document.getElementById("auth__num").innerText = token;
    document.getElementById("auth__num").style.color = `#${token}`;

    let time = 5;
    let timer;

    timer = setInterval(function () {
      if (time >= 0) {
        let min = Math.floor(time / 60);
        let sec = String(time % 60).padStart(2, "0");
        document.getElementById("auth__timer").innerText = min + ":" + sec;
        time -= 1;
      } else {
        document.getElementById("finish").disabled = true;
        isStarted = false;
        clearInterval(timer);
      }
    }, 1000);
  } else {
    //타이머가 작동중
  }
};
