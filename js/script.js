let clock = document.querySelector("#clock");
let jonmo = new Date(2027, 0, 22);

let current = setInterval(() => {
  const time = new Date();

  let diff = Number(jonmo) - Number(time);

  let second = diff / 1000;


  if(second <= 0){
    clearInterval(current)
  }

  
let years = jonmo.getFullYear() - time.getFullYear()

let months = jonmo.getMonth() - time.getMonth()

let days = jonmo.getDay() - time.getDay()



    if (days < 0) {
        months--;
        days += new Date(now.getFullYear(),now.getMonth() + 1,0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

    let minutes = Math.floor((diff / (1000 * 60)) % 60);

    let seconds = Math.floor((diff / 1000) % 60);


let total = document.querySelector('#total')
    total.innerHTML = `${ years},${months} ,${ days},${hours} ,${minutes},${seconds}  `
       
    




}, 1000);
