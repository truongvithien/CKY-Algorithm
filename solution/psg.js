var cnf = []

function loadPSG(){
	window.cnf = [
		['S','NP','VP'],
		['VP','VP','NP'],
		['VP','VP','PP'],
		['PP','PP','NP'],
		['NP','Nam'],
		['NP','Nó'],
		['NP','bài'],
		['NP','trường'],
		['VP','học'],
		['VP','ở'],
		['PP','ở']
	];
	showPSG(cnf);
}

function showPSG(cnf){
	document.getElementById("psg").innerHTML = "";
	for(var i = 0; i<cnf.length; i++){
		var row = document.createElement("div");
		row.id = "psg-"+i;
		var pre = document.createElement("span");
		pre.id = "psg-"+i+"-prefix";
		pre.className = "btn btn-success";
		pre.innerHTML = cnf[i][0];
		row.appendChild(pre);
		var arr = document.createElement("span");
		arr.innerHTML = '<i class="fa fa-arrow-right"></i>';
		row.appendChild(arr);
		for (var j = 1; j<cnf[i].length; j++) {
			var suf = document.createElement("span");
			suf.id = "psg-"+i+"-suffix-"+j;
			suf.innerHTML = cnf[i][j];
			suf.className = "btn btn-secondary";
			row.appendChild(suf);
		}
		document.getElementById("psg").appendChild(row);
	}
}

function newPSG(psginput) {
	window.cnf = []
	var lines = psginput.split('\n');
	for (var i = 0; i<lines.length; i++) {
		var types = lines[i].split(' ');
		types.splice(1,1)
		window.cnf.push(types);
	}
	showPSG(cnf);
}


