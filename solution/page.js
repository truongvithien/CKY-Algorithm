// function in page

function inputImage(files) {
  var obj = files[0];
  logs(escape(obj.name) + " loaded");
  logs(escape(obj.name) + " (assign id = "+0+")");
  addImage(window.URL.createObjectURL(obj));
  logs(escape(obj.name) + " processed")
}

function logs(content){
  var log_line = document.getElementById("logs")
  log_line.innerHTML += content + "<br />";
}

function addImage(src) {
	var img = new Image();
	img.addEventListener("load",function(){processingImage(img);}, false);
	img.src=src;
}

function doReset() {
  images = [];
  document.getElementById("extraction").innerHTML = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("logs").innerHTML = "";
}