const counter = document.getElementById("counter")
const plus = document.getElementById("plus").addEventListener("click", increaseCounter);
const minus = document.getElementById("minus").addEventListener("click", decreaseCounter);
const pause = document.getElementById("pause").addEventListener("click", stopActions)

function changeInterval(a, b){
  const counterIntervalID = setInterval(counter, 1000);
    if (counterIntervalID === "plus") {
        clearInterval(counterIntervalID) === "minus"
    } else {
      counterIntervalID;
    }
 console.log(a);
 console.log(b);
}

function increaseCounter() {
  for (let i = 0; i < counter.length; i++) {
        increase += counter;
      }
}

function begin()
{
    increaseCounter();
    setTimeout(begin, 1000);
}


