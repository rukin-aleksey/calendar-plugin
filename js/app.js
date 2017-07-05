var date = new Date();
var year = date.getFullYear();
var month = date.getMonth()+1;
var toDay = date.getDate();
var arrayMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var calendar = document.createElement('div');
calendar.setAttribute("id","calendar");
document.body.appendChild(calendar);

function generateMonth(year, month){
 var monthList = document.createElement("div");
 monthList.setAttribute("class", "monthList");
 var mon = month - 1; // month in js from 0 to 11
 var d = new Date(year, mon);
 var table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>'

	//first row sill out from monday
	// to day, which the start month
	    // заполнить первый ряд от понедельника
      	// и до дня, с которого начинается месяц
	for (var i = 0; i < getDay(d); i++) {
        table += '<td></td>';
      } 

	//cell of calendar with date
	    // ячейки календаря с датами
	while(d.getMonth() == mon){
		table += '<td>' + d.getDate() +'</td>';
	
	// if (toDay == d.getDate()){
	// 		elem.lastChild.style.color = "red";
	// 	}

		if (getDay(d) % 7 == 6) { // sunday last day in a week, line translation (перевод строки)
			table += '<tr></tr>';
		}
		d.setDate(d.getDate() + 1);
	}

      // добить таблицу пустыми ячейками, если нужно
	if (getDay(d) != 0){
		for(var i = getDay(d); i<7; i++){
			table += '<td></td>';
		}
	}
	 //close table
	 table += '</tr></table>';
	 
	 calendar.appendChild(monthList);
	 showMonth(table, monthList, year, month, toDay);

}

function getDay(date){
	var day = date.getDay();
	if (day == 0) day = 7;
	return day - 1;
}

function showMonth (table, monthList, year, month, toDay){
	var desk = table;
	//only one assignment
	monthList.innerHTML = desk;
	var	insideTable = monthList.childNodes[0].childNodes[0];
	for(var i = 0; i < insideTable.childNodes.length; i++){
		var row = insideTable.childNodes[i];
		 // console.log(i, row); 
		for(var j = 0; j < row.childNodes.length; j++){
			var cell = row.childNodes[j];
			// console.log(j, cell);
			if(cell.textContent == (toDay)){
				cell.classList.add("toDay");
				;}
			if (j == 5 || j == 6) {
				cell.classList.add("weekend");
				if(cell.textContent == (""))
					cell.style.backgroundColor = "white";
			}
		}		
	}
}

generateMonth(year, month);
