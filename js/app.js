var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
var arrayMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var calendar = document.createElement('div');
calendar.setAttribute('id','calendar');
document.body.appendChild(calendar);


function generateMonth(year, month, arrayMonth){
	// console.log(month);
		//This elem contains monthList and span with MonthName
 	var blockMonth = document.createElement('div');
	 blockMonth.setAttribute('class', 'blockMonth');

 		//this elem contains monthTable
 	var monthList = document.createElement('div');
 	monthList.setAttribute('class', 'monthList');


 	var monthName = document.createElement('span');
	 monthName.setAttribute('class', 'monthNameText');
	 monthName.innerHTML = arrayMonth[month];
	 // console.log((new Date).getMonth());

 var mon = month; // month in js from 0 to 11
 var d = new Date(year, mon);
 var monthTable = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>'

	//first row sill out from monday
	// to day, which the start month
	    // заполнить первый ряд от понедельника
      	// и до дня, с которого начинается месяц
	for (var i = 0; i < getDay(d); i++) {
        monthTable += '<td></td>';
      } 

	//cell of calendar with date
	    // ячейки календаря с датами
	while(d.getMonth() == mon){
		monthTable += '<td>' + d.getDate() +'</td>';
	
		if (getDay(d) % 7 == 6) { // sunday last day in a week, line translation (перевод строки)
			monthTable += '<tr></tr>';
		}
		d.setDate(d.getDate() + 1);
	}
      // добить таблицу пустыми ячейками, если нужно
	if (getDay(d) != 0){
		for(var i = getDay(d); i<7; i++){
			monthTable += '<td></td>';
		}
	}

	 //close monthTable
	 monthTable += '</tr></table>';
	 

	 monthList.innerHTML = monthTable;
	 blockMonth.appendChild(monthName);
	 blockMonth.appendChild(monthList);
	 showBlockMonth(blockMonth, year, month);
}

function getDay(date){
	var day = date.getDay();
	if (day == 0) day = 7;
	return day - 1;
}

function showBlockMonth (blockMonth,year, month){
	//only one assignment
	calendar.appendChild(blockMonth);
	//detection Today And Weekend
	detectionTodayAndWeekend(blockMonth, year, month);
}

function detectionTodayAndWeekend (blockMonth, year, month,){
		//access to row in monthTable
	var	insideTable = blockMonth.childNodes[1].firstChild.firstChild;
	 //access to row in monthTable
	for(var i = 0; i < insideTable.childNodes.length; i++){
		var row = insideTable.childNodes[i];
		    console.log(i, row);
		 //access to cell in monthTable
		for(var j = 0; j < row.childNodes.length; j++){
			var cell = row.childNodes[j];
			// console.log(j, cell, date.getDate());
						if (j == 5 || j == 6) {
				cell.classList.add('weekend');
				if(cell.textContent == (''))
					cell.style.backgroundColor = 'white';
			}
			if((month==(new Date).getMonth()) && cell.textContent == (date.getDate())){
				cell.classList.add('toDay');
				row.classList.add('thisWeek');
			}
		}		
	}
}

function createBlockMonth(){
	for (var i = 0; i<arrayMonth.length; i++)
	generateMonth(year, i, arrayMonth);
};

createBlockMonth();
