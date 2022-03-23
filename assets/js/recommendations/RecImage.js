export const RecImage = ( src ) => {
  return !!src
    ? `<img src="${ src }" class="rec-image circle"/>`
    : ""
}
