const mybutton = document.getElementById("myBtn");

export const pickOne = (arr) => {
  const numberOutOfAHat = Math.floor(Math.random() * arr.length);
  return arr[numberOutOfAHat]
}

export const shuffle = (data) => {
  let index = data.length - 1, temporary, random;

  for (index = index; index > 0; index-- ) {
    random = Math.floor(Math.random() * index);
    temporary = data[index];
    data[index] = data[random];
    data[random] = temporary;
  }
  return data;
}

export const err = (error) => {
    console.error("THIS IS AN ERROR", error)
}

export const scrollFunction = () => {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
