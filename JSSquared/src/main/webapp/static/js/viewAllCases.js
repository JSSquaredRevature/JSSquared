// Will need to be done w/ Angular later

var buttonEl = document.getElementById('logout');
buttonEl.onclick = backHome;

function backHome() {
	window.location.replace("home");
};

var baseURL = "/JSSquared/";
window.onload= () => {
    getForms();
};

function getForms() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange=displayForms;
    xhttp.open("GET", baseURL + "admin");
    xhttp.send();

    function displayForms() {
        if(xhttp.readyState === 4 && xhttp.status === 200) {
        	cases = JSON.parse(xhttp.responseText);
        	console.log(cases);
        	
        	if (cases.length === 1)
        		addFormToTable(cases[0]);
        	else if (cases.length > 1) {
        		cases.forEach(function(form, index) {
        			addFormToTable(form);
        			});
        		}
        	}
        }
    }

function addFormToTable(cases) {
    var table = document.getElementById("cases");
    var tr = document.createElement("tr");
    let td;

    addTableDef(cases.caseid, tr);
    addTableDef(cases.firstname, tr);
    addTableDef(cases.lastname, tr);
    addTableDef(cases.birthdate, tr);
    addTableDef(cases.rating, tr);
    addTableDef(cases.socialworkerid, tr);
    addTableDef(cases.placementid, tr);

    table.append(tr);
};

function addTableDef(value, tr) {
	td = document.createElement("td");
    td.innerHTML=value;
    tr.appendChild(td);
};