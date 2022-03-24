const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const toTheTop = document.getElementById( "myBtn" );

toTheTop.addEventListener(
  "click",
  topFunction
)

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
  const {body, documentElement} = document

    if (body.scrollTop > 350 || documentElement.scrollTop > 350) {
      toTheTop.style.display = "block";
    }
  //
    else {
      toTheTop.style.display = "none";
    }
  }
