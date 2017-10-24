var temp;


function createCKY(wc){
	for (var i = 0; i<wc+1; i++){
		var row = document.createElement("div");
		for (var j = 0; j<wc+1; j++) {
			var cell = document.createElement("span");
			cell.id = i+"-"+j;
			cell.className = "btn btn-secondary";
			row.appendChild(cell);
		}
		document.getElementById("cky").appendChild(row);
	}
}

function makeCKY(sp, wc){
	document.getElementById("0-0").innerHTML = 0;
	//first-row
	for(var i = 1; i<wc+1; i++) {
		document.getElementById("0-"+i).innerHTML = i + "</br>" + sp[i-1];
	}
	//first-col
	for (var i = 1; i<wc+1; i++) {
		document.getElementById(i+"-0").innerHTML = i-1;
	}
}

function doCKY(sp,wc) {
	//main-diagonal
	for (var k = 1; k<wc+1; k++) {
		var data = "";
		for (var j = 0; j<cnf.length; j++) {
			var fl = 0;
			if (cnf[j][1]==sp[k-1]) {
				var inpr = document.getElementById(k+"-"+k);
				if (fl!=1) inpr.innerHTML += " ";
				inpr.innerHTML += " "+cnf[j][0];
				inpr.className = "btn btn-info tool";
				data += "Áp dụng luật ("+j+"); ";
				inpr.setAttribute("data-tip",data);
				fl = 1;
			}
		}
		for (var i = k-1; i>0; i--)
			for (var j = i; j<k; j++) {
				var tmpSufa = document.getElementById(i+"-"+j).innerHTML.split(" ");
				var sufa = new Array();
				for (var m = 0; m < tmpSufa.length; m++){
					if (tmpSufa[m] != ""){
						sufa.push(tmpSufa[m]);
					}
				}
				console.log("\n");
				console.log("i = " + (i - 1) +", j = " + j + ", values = " + sufa);

				var tmpSufb = document.getElementById((j+1) + "-" + k).innerHTML.split(" ");
				var sufb = new Array();
				for (var m = 0; m < tmpSufb.length; m++){
					if (tmpSufb[m] != ""){
						sufb.push(tmpSufb[m]);
					}
				}
				console.log("j = " + j +", k = " + k + ", values = " + sufb);

				var data = "";
				for (var a = 0; a<sufa.length; a++) {
					for (var b = 0; b<sufb.length; b++) {
						for (var m = 0; m<cnf.length; m++) {
							console.log("sufa = " + sufa[a] +", sufb = " + sufb[b]);
							console.log("Xét " + cnf[m][0] + " -> " + cnf[m][1] + " " + cnf[m][2]);
							if (cnf[m][1]==sufa[a] && cnf[m][2]==sufb[b]) {
								var inpr = document.getElementById(i+"-"+k);
								inpr.innerHTML += " " + cnf[m][0];
								inpr.className = "btn btn-success tool";
								data += sufa[a]+"("+(i-1)+":"+j+")+"+sufb[b]+"("+j+":"+k+") => "+cnf[m][0]+ "("+0+":"+k+"); ";
								inpr.setAttribute("data-tip",data);
								console.log();
								break;
							}
						}
					}
				}
			}
	}
}

function CKY(str){
	//clear
	var clr = document.getElementById('cky');
	while (clr.firstChild) clr.removeChild(clr.firstChild);
	wordCount = str.match(/([\s]+)/g).length+1;
	splited = str.split(" ");
	createCKY(wordCount);
	makeCKY(splited,wordCount);
	doCKY(splited,wordCount)
}
