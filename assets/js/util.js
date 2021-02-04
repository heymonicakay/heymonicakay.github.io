const mybutton = document.getElementById("myBtn");

export const pickOne = (arr) => {
    var numberOutOfAHat = Math.floor(Math.random() * arr.length);
    const random = arr[numberOutOfAHat]
    console.log(random);
    return random
}

export const shuffle = (arr) => {
    for (let i = arr.length - 1, temp, rand; i > 0; i--) {
        rand = Math.floor(Math.random() * i);
        temp = arr[i];
        arr[i] = arr[rand];
        arr[rand] = temp;
    }
    return arr;
}

export const err = (e) => {
    console.log(e, "THIS IS AN ERROR")
}

export const scrollFunction = () => {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }