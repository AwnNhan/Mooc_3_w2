function upDate(event) {
  const previewPic = event.target;
  const mainImageDiv = document.getElementById("image");

  mainImageDiv.textContent = previewPic.alt;
  mainImageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
  const mainImageDiv = document.getElementById("image");

  mainImageDiv.style.backgroundImage = "url('')";

  mainImageDiv.textContent = "Hover over an image below to display here.";
}
