
var activePage = 0;
var pages = new Array();
					//[ID			,Title]
pages[pages.length] = ["home"		,"home"];
pages[pages.length] = ["events"		,"our events"];
pages[pages.length] = ["committee"	,"the committee"];
pages[pages.length] = ["contact"	,"contact us"];
//pages[pages.length] = ["join"		,"join us"];
//pages[pages.length] = ["sponsors"	,"sponsors"];

var events = new Array();
					  //[Title
					  //,Time Info
					  //,[YYYY-MM-DD,Date Info] if dateInfo empty: use ISO; else use dateInfo
					  //,Location
					  //,Description
					  //,Button]
events[events.length] = ["Freshers Mingle"
						,"6pm"
						,["2014-10-09"]
						,"EEE Room 407"
						,"Come along to our freshers' mingle for a chance to meet fellow freshers! There'll be games, samosas, pekoras, a chocolate fountain and a chilli eating competition (warning: not for the weak!). It's also a great opportunity to get to know this year's PakSoc committee, a friendly team of Pakistanis who are here to make your time in PakSoc unforgettable, so come along to see what we have in store for you this year! "
						,["free"]];
						
events[events.length] = ["Freshers Dinner"
						,"7pm"
						,["2014-10-23"]
						,"Miran Masala"
						,"The freshers' dinner is a fantastic way to meet fellow PakSoc members and bond over one of the highlights of Pakistani culture...food! Loosen those belts and prepare yourself for mouthwatering pakistani cuisine at Miran Masala, a 5 star restaurant conveniently located on High Street Kensington- satisfaction guaranteed! This event is not one to be missed, there are limited tickets so get yours before they're gone!"
						,["book",""]];
						
events[events.length] = ["Inspiring Journeys"
						,"10am - 1pm"
						,["2013-10-31","October"]
						,"Sir Alexander Fleming Building, Lecture Theatre G16"
						,"An exciting conference aiming to encourage university students and graduates to test the waters of the business world and utilise the skills they have in order to fulfill their ambitions."
						,["reg",""]];

events[events.length] = ["Shaam"
						,"6pm"
						,["2013-11-21"]
						,"Copthorne Tara Hotel London Kensington"
						,"'Shaam' is Imperial College Pakistan Society's flagship event. It is an annual charity dinner and is one of the largest student led events in London, attracting hundreds of guests, Pakistanis and non-Pakistanis alike. The event includes a 3 course dinner, entertainment by upcoming acts as well as a dessert hall containing a variety of popular Pakistani desserts and beverages."
						,["book",""]];
						
events[events.length] = ["Football Tournament"
						,"5.45pm"//Time TBC
						,["2013-12-01","December"]
						,"Fairlop Powerleague"
						,"16 teams. One Trophy. One Winner. Imperial College PakSoc's annual Charity Football Tournament!"
						,["reg",""]];
						
events[events.length] = ["Science Exhibition"
						,""//Time TBC
						,["2014-01","January 2014"]
						,""//Venue TBC
						,"Imperial College has a strong scientific background and we are keen to encourage and promote science to the younger generation. We plan to put on a science exhibition for school children from underprivileged backgrounds, in order to inspire and encourage them to pursue science in the future."
						,["reg",""]];
						
events[events.length] = ["Cultural Fortnight"
						,""//Time TBC
						,["2014-02","February 2014"]
						,""//Venue TBC
						,"This will be Imperial College Pakistan Society's first cultural fortnight. The aim is to showcase and promote Pakistani culture, while providing an opportunity for us to expand and reach a wider audience.  It will comprise of informative events, such as political and socio-economic talks and poetry readings; social events, for example a girl's only 'mehndi' event or a dinner; sports events, including a Pakistan Society versus Indian Society cricket match and exhibitions."
						,["reg",""]];
						
var cmt = new Array();
cmt[cmt.length] = ["Mustafa","Ali",
				   "President"];
cmt[cmt.length] = ["Nauman","Akhlaq",
				   "President"];
cmt[cmt.length] = ["Khayam","Bashir",
				   "Vice President"];
cmt[cmt.length] = ["Mariam","Choudhry",
				   "Secretary"];
cmt[cmt.length] = ["Wajahat","Sherwani",
				   "Events Manager"];
cmt[cmt.length] = ["Athif","Ilyas",
				   "Events Manager"];
cmt[cmt.length] = ["Dua","Zaidi",
				   "Events Officer"];
cmt[cmt.length] = ["Shanzeh","Khurshid",
				   "Events Officer"];
cmt[cmt.length] = ["Talal","Musaddaq",
				   "Treasurer"];
cmt[cmt.length] = ["Usmaan","Qureshi",
				   "Treasurer"];
cmt[cmt.length] = ["Rizwan","Zeb",
				   "Publicity Officer"];
cmt[cmt.length] = ["Khalid","Kazi",
				   "Sports Officer"];
cmt[cmt.length] = ["Nida","Mahmud",
				   "PHD Representative"];
cmt[cmt.length] = ["Hakeem","Javaid",
				   "Web Officer"];
						

$(function() {
	addPageLinks();
	findNextEvent();
	addEvents();
	addCmt();
	
	loadedPage = false;
	if(window.location.hash) {
		var hash = window.location.hash.substring(1);
		for(var i=0;i<pages.length;i++){
			if(hash == pages[i][0]){
				loadedPage = true;
				preselectedPage = i;
			}
		}
		if(!loadedPage){
			preselectedPage = 0;
		}
	} else {
		preselectedPage = 0;
	}
	
	if(loadedPage) {
		//Animate-In Menu
		$("#menu").stop().animate({left:"0%"},function(){
			
			$("#menuContents").slideDown(function(){
				//Setup Homepage
				setPage(preselectedPage);
			});
			$("#menuFooter").slideDown();
			
		});
	} else {
		$("#intro1").delay(300).fadeIn(function(){
			$("#intro1").delay(700).fadeOut(function(){
				$("#intro2").fadeIn(function(){
					$("#intro2").delay(700).fadeOut(function(){
						//Animate-In Menu
						$("#menu").stop().animate({left:"0%"},function(){
							
							$("#menuContents").slideDown(function(){
								//Setup Homepage
								setPage(preselectedPage);
							});
							$("#menuFooter").slideDown();
							
						});
						
					});
				});
			});
		});
	}
});

function addPageLinks(){
	for(var i=0;i<pages.length;i++){
		addLink(i);
	}
}
function addLink(N){
	var newLink = '<a href="#'+pages[N][0]+'"';
	newLink += 'id="pageLink'+N+'"';
	newLink += 'class="pageLink"';
	newLink += 'onmousedown="loadPage('+N+');"';
	newLink += '>'+pages[N][1]+'</a>';
	$('#pageLinks').append(newLink);
}

function setPage(N){
	$("#pageMark").stop().animate({top:$("#pageLink"+N).position().top},0,{queue:false});
	setLink(N);
	showPage(N);
}

function loadPage(N){
	if(N == activePage){return;}
	resetLink(activePage);
	setLink(N);
	$("#"+pages[activePage][0]).stop().fadeOut("fast",function(){
		showPage(N);
	});
}

function showPage(N){
	activePage = N;
	//$("#"+pages[N][0]).fadeIn("fast");
	
	$("#"+pages[N][0]).css('left','100%');
	$("#"+pages[N][0]).stop().show();
	$("#"+pages[N][0]).stop().animate({left:'0%'});
	
	//$("#"+pages[N][0]).stop().slideDown('slow');
}

function resetLink(N){
	$("#pageLink"+N).css("right","");
	$("#pageLink"+N).css("color","");
	$("#pageLink"+N).css("cursor","");
}
function setLink(N){
	$("#pageMark").stop().animate({left:'0%',top:$("#pageLink"+N).position().top},{queue:false});
	$("#pageLink"+N).css("right","0%");
	$("#pageLink"+N).css("color","#FFF");
	$("#pageLink"+N).css("cursor","default");
}

function findNextEvent(){
	for(i=0;i<events.length;i++){
		if(theDate(events[i][2][0]) > new Date()){
			addNextEvent(i);
			return;
		}
	}
}
function addNextEvent(e){
	var nextEvent="";
	nextEvent+= '<div class="title name">'+events[e][0]+'</div>';
	nextEvent+= '<div class="date">'+eventDate(e)+'</div>';
	nextEvent+= '<div class="time">'+eventTime(e)+'</div>';
	nextEvent+= '<div class="venue">'+eventVenue(e)+'</div>';
	nextEvent+= eventLink(e);
	nextEvent+= '<div class="eLink"><a href="#events" onmousedown="loadPage(1);">More Info</a></div>';
	//nextEvent+= '<div class="desc">'+events[e][4]+'</div>';
	$('#nextEvent').append(nextEvent);
}

function addEvents(){
	var theEventsList="";
	for(i=0;i<events.length;i++){
		theEventsList+=eventBox(i);
	}
	$('.events').append(theEventsList);
}

function eventBox(e){
	var newEvent;
	newEvent = '<div class="box">';
	newEvent+= '<div class="title name">'+events[e][0]+'</div>';
	newEvent+= '<div class="venue">'+eventVenue(e)+'</div>';
	newEvent+= '<div class="time">'+eventTime(e)+'</div>';
	newEvent+= '<div class="date">'+eventDate(e)+'</div>';
	newEvent+= '<div class="desc">'+events[e][4]+'</div>';
	newEvent+= eventLink(e);
	newEvent+= '</div>';
	return newEvent;
}

function eventVenue(e){
	var venueData = events[e][3];
	if(venueData == ""){
		return "Venue TBC";
	}
	return venueData;
}

function eventTime(e){
	var timeData = events[e][1];
	if(timeData == ""){
		return " ";
	}
	return timeData;
}

function eventDate(e){
	var dateData = events[e][2];
	var dateVal = dateData[0];
	if(dateTBC(dateVal)){
		dateDesc = dateData[1];
		if(dateDesc == ""){
			return "Date TBC";
		}
		return dateDesc;
	}
	return getDateStr(dateVal);
}

function eventLink(e){
	var entryData = events[e][5];
	var entryType = entryData[0];
	var entryLink = entryData[1];
	var eventLink = "";
	
	var eventDate = events[e][2][0];
	if(theDate(eventDate) <= new Date()){
		return "";
	}
	
	if(entryType == "free"){
		eventLink += '<div class="noLink">';
			eventLink += "Free Entry";
		eventLink += '</div>';
		return eventLink;
	}
	
	if(entryLink == "closed"){
		eventLink += '<div class="deadLink">';
		if(entryType == "reg"){
			eventLink += "Registrations Closed";
		}
		if(entryType == "book"){
			eventLink += "Bookings Closed";
		}
		eventLink += '</div>';
		return eventLink;
	}
	
	if(entryLink == ""){
		eventLink += '<div class="deadLink">';
		if(entryType == "reg"){
			eventLink += "Registrations Opening Soon";
		}
		if(entryType == "book"){
			eventLink += "Bookings Opening Soon";
		}
		eventLink += '</div>';
		return eventLink;
	}
	
	if(entryLink != ""){
		eventLink += '<div class="liveLink"><a href="'+entryLink+'" target="_blank">';
		if(entryType == "reg"){
			eventLink += "Register";
		}
		if(entryType == "book"){
			eventLink += "Book Tickets";
		}
		eventLink += '</a></div>';
		return eventLink;
	}
}

function addCmt(){
	var theCmt="";
	for(i=0;i<cmt.length;i++){
		theCmt+=cmtBox(i);
	}
	$('.committee').append(theCmt);
}

function cmtBox(c){
	var newCmt;
	newCmt = '<div class="box">';
	newCmt+= '<img src="img/cmt/'+cmt[c][0].toLowerCase()+'.jpg">';
	newCmt+= '<div class="title">'+cmt[c][0]+' '+cmt[c][1]+'</div>'
	newCmt+= '<div class="pos">'+cmt[c][2]+'</div>'
	newCmt+= '</div>';
	return newCmt;
}



//General Functions

function getDateStr(dateN){
	
	dateN = dateN.split('-');
	
	var d = new Date (dateN[0]*1,(dateN[1]*1)-1,dateN[2]*1);
	var theDay = d.getDay();
	var theDate = d.getDate();
	var theMonth = d.getMonth();

	var month_names = new Array ( );
	month_names[month_names.length] = "January";
	month_names[month_names.length] = "February";
	month_names[month_names.length] = "March";
	month_names[month_names.length] = "April";
	month_names[month_names.length] = "May";
	month_names[month_names.length] = "June";
	month_names[month_names.length] = "July";
	month_names[month_names.length] = "August";
	month_names[month_names.length] = "September";
	month_names[month_names.length] = "October";
	month_names[month_names.length] = "November";
	month_names[month_names.length] = "December";
	
	var day_names = new Array ( );
	day_names[day_names.length] = "Sunday";
	day_names[day_names.length] = "Monday";
	day_names[day_names.length] = "Tuesday";
	day_names[day_names.length] = "Wednesday";
	day_names[day_names.length] = "Thursday";
	day_names[day_names.length] = "Friday";
	day_names[day_names.length] = "Saturday";
	
	if (theDate == 1 || theDate == 21 || theDate ==31){
	   sup = "st";
	} else if (theDate == 2 || theDate == 22){
	   sup = "nd";
	} else if (theDate == 3 || theDate == 23){
	   sup = "rd";
	} else {
	   sup = "th";
	}
	
	return day_names[theDay]
			+ " " + theDate + sup 
			+ " " + month_names[theMonth];
}

function theDate(dateN){
	
	dateN = dateN.split('-');
	
	if(dateN.length==3){
		return new Date (dateN[0]*1,(dateN[1]*1)-1,dateN[2]*1);
	}
	if(dateN.length==2){
		return new Date (dateN[0]*1,(dateN[1]*1)-1);
	}

}

function dateTBC(dateN){
	
	dateN = dateN.split('-');
	
	if(dateN.length == 3){
		return false;
	}
	
	return true;

}


function submitMSG(){
	
	if(!dataOK()){
		return;
	}
	
	varIDs= ['name','email','message'];
	vars = "";
	for(i=0;i<varIDs.length;i++){
		vars += addVarID(varIDs[i]);
	}
	
	document.getElementById('output').innerHTML = "Sending...";
	callDB('send',vars);
	
	elem('name').value = "";
	elem('email').value = "";
	elem('message').value = "";
	document.getElementById('output').innerHTML = "Message Sent";
}

function dataOK(){
	
	if(!fieldOK('name',"Enter Your Name")){
		return false;
	}
	
	if(!fieldOK('email',"Enter Your Email Address")){
		return false;
	};
	
	if(!validateEmail(elem('email').value)){
		fieldError('email',"Enter A Valid Email Address");
		return false;
	}
	
	if(!fieldOK('message',"Enter Your Message")){
		return false;
	}
	
	return true;
}

function fieldOK(id,message){
	if(elem(id).value == ""){
		fieldError(id,message);
		return false;
	}
	return true;
}
function fieldError(id,message){
	document.getElementById('output').innerHTML = message;
	elem(id).focus();
}

function validateEmail(email) { 
    var pattern = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
    return pattern.test(email);
}

function callDB(page,vars){
	var xmlhttp;
	if(window.XMLHttpRequest){xmlhttp=new XMLHttpRequest();
	}else{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
	
	xmlhttp.open("POST","php/"+page+".php",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send(vars);
}

function addVarID(newVar){
	if(vars==""){
		return newVar + "=" + elem(newVar).value;
	}
	return "&" + newVar + "=" + elem(newVar).value;
}

function elem(id){
	return document.getElementById(id);
}


