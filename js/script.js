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

let days = jonmo.getDate() - time.getDate()



    if (days < 0) {
        months--;
        days += new Date(time.getFullYear(),time.getMonth() + 1,0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

    let minutes = Math.floor((diff / (1000 * 60)) % 60);

    let seconds = Math.floor((diff / 1000) % 60);

    
        let y = document.querySelector('#y')
        y.innerHTML = `${ years}`

        let m = document.querySelector('#m')
        m.innerHTML = `${ months}`

        let d = document.querySelector('#d')
        d.innerHTML = `${ days}`

        let h = document.querySelector('#h')
        h.innerHTML = `${ hours}`

        let mi = document.querySelector('#mi')
        mi.innerHTML = `${ minutes}`

        let s = document.querySelector('#s')
        s.innerHTML = `${ seconds}`


}, 1000);

//==========================


//========================================//


let head = document.querySelector('#oma')

let index = 0;
const count = setInterval( () =>{
index++
head.innerHTML = `\r${index}`
if (index === 22) {
    clearInterval(count)
}

},100)




let mas = document.querySelector('#ayesha')

let i = 0;
const counts = setInterval( () =>{
index++
mas.innerHTML = `\r${i}`
if (i == 1) {
    clearInterval(counts)
}

},100)