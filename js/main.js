function displayBugPanel(){
	var def = document.getElementById('deffect');
	var rail = document.getElementById('testrail');
	def.style.display = 'inline';
	rail.style.display = 'none';
}

function displayRailPanel(){
	var def = document.getElementById('deffect');
	var rail = document.getElementById('testrail');
	def.style.display = 'none';
	rail.style.display = 'inline';
}

function selectFunction(){
	if (resultIn.value > 0){
		$('#conclusionIn').html('<option value="Fixed">Fixed</option><option value="Fixedddd">Fixedddd</option>');
	} else if (resultIn.value < 0){
		$('#conclusionIn').html('<option value="Reproduced">Reproduced</option>');
	}else{
		$('#conclusionIn').html('<option value="Can\'t reproduce">Can\'t reproduce</option>');
	}
}

function generateHeader() {
	var resultIn = document.getElementById("resultIn");
	var conclusionIn = document.getElementById("conclusionIn");
	var selfConclusionIn = document.getElementById("selfConclusionIn");
	console.log(selfConclusionIn.value.length);
	if (selfConclusionIn.value.length == 0){
		console.log("1");
		if (resultIn.value > 0){
		var rezultFormat = "{panel:title=Result:|titleColor=#004d1a|borderColor=#0E6251|titleBGColor=#4dff88|bgColor=#ccffdd}";
		var conclusionFormat = "| (i) *Conclusion:* | " + conclusionIn.value + " (/) |<br>{panel}";
		}else if (resultIn.value < 0){
		var rezultFormat = "{panel:title=Result:|titleColor=#662900|borderColor=#922B21|titleBGColor=#ff6600|bgColor=#ff8533}"
		var conclusionFormat = "| (i) *Conclusion:* | " + conclusionIn.value + " (x) |<br>{panel}";
		}else if (resultIn.value == 0){
		var rezultFormat = "{panel:title=Result:|titleColor=#000000|borderColor=#000000|titleBGColor=#ccc3ae|bgColor=#fff4da}"
		var conclusionFormat = "| (i) *Conclusion:* | " + conclusionIn.value + " (x) |<br>{panel}";
		}
	}else{
		console.log("2");
		if (resultIn.value > 0){
		var rezultFormat = "{panel:title=Result:|titleColor=#004d1a|borderColor=#0E6251|titleBGColor=#4dff88|bgColor=#ccffdd}";
		var conclusionFormat = "| (i) *Conclusion:* | " + selfConclusionIn.value + " (/) |<br>{panel}";
		}else if (resultIn.value < 0){
		var rezultFormat = "{panel:title=Result:|titleColor=#662900|borderColor=#922B21|titleBGColor=#ff6600|bgColor=#ff8533}"
		var conclusionFormat = "| (i) *Conclusion:* | " + selfConclusionIn.value + " (x) |<br>{panel}";
		}else if (resultIn.value == 0){
		var rezultFormat = "{panel:title=Result:|titleColor=#000000|borderColor=#000000|titleBGColor=#ccc3ae|bgColor=#fff4da}"
		var conclusionFormat = "| (i) *Conclusion:* | " + selfConclusionIn.value + " (x) |<br>{panel}";
		}
	}

	
	var resultOut = document.getElementById("resultOut");
	var conclusionOut = document.getElementById("conclusionOut");

	resultOut.innerHTML = rezultFormat;
	conclusionOut.innerHTML = conclusionFormat;
}

function generateReport() {
	
    var branchIn = document.getElementById("branchIn");
    var revisionIn = document.getElementById("revisionIn");
    var platformIn = document.getElementById("platformIn");
    var browserIn = document.getElementById("browserIn");
	var osIn = document.getElementById("osIn");
	var deviceIn = document.getElementById("deviceIn");
	
    var branchOut = document.getElementById("branchOut");
    var revisionOut = document.getElementById("revisionOut");
    var platformOut = document.getElementById("platformOut");
    var browserOut = document.getElementById("browserOut");
	var osOut = document.getElementById("osOut");
	var deviceOut = document.getElementById("deviceOut");

	if (browserIn.value.length > 0){
		browserOut.style.display = 'inline';
		browserOut.innerHTML = browserFormat;
	}else{
		browserOut.style.display = 'none';
	}
	
	if (osIn.value.length > 0){
		osOut.style.display = 'inline';
		osOut.innerHTML = osFormat;
	}else{
		osOut.style.display = 'none';
	}
	
	if (deviceIn.value.length > 0){
		deviceOut.style.display = 'inline';
		deviceOut.innerHTML = deviceFormat;
	}else{
		deviceOut.style.display = 'none';
	}
	
	var branchFormat = ["| (i) *Verified with:* | {{" + branchIn.value];
	var revisionFormat = ["/" + revisionIn.value] + "}} |";
	var platformFormat = ["| (i) *Platform:* | " + platformIn.value + " |"];
	var browserFormat = ["| (i) *Browser:* | " + browserIn.value + " |<br>"];
	var osFormat = ["| (i) *OS:* | " + osIn.value + " |<br>"];
	var deviceFormat = ["| (i) *Device:* | " + deviceIn.value + " |<br>"];

	generateHeader();
	branchOut.innerHTML = branchFormat;
	revisionOut.innerHTML = revisionFormat;
	platformOut.innerHTML = platformFormat;
	browserOut.innerHTML = browserFormat;
	osOut.innerHTML = osFormat;
	deviceOut.innerHTML = deviceFormat;
}