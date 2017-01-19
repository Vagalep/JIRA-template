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

function generateReport() {
	var testResult = document.getElementById("testResult");
    var branch = document.getElementById("branch");
    var revision = document.getElementById("revision");
    var platform = document.getElementById("platform");
	
    var browser = document.getElementById("browser");
	var browserR = document.getElementById("reportBrowse");
	
	
    var params1 = [testResult.value + "<br>" + "| (i) *Verified with:* | {{" + branch.value + "/" + revision.value + "}} |<br>" + "| (i) *Platform:* | " + platform.value + " |<br>"];
	var params2 = ["| (i) *Browser:* | " + browser.value + " |<br>"];
	
	document.getElementById('report').innerHTML = params1;
	
	console.log(params2);
	
	if (browser.value.length > 0){
		browserR.style.display = 'inline';
		browserR.innerHTML = params2;
	}else{
		browserR.style.display = 'none';
	}
}