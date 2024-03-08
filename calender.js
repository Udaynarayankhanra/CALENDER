const daysTag = document.querySelector(".days"),
  currentDate = document.querySelector(".current-date"),
  prevNextIcon = document.querySelectorAll(".icons span");
 
let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();


const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const renderCalendar = () => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
  let liTag = "";

  for (let i = firstDayofMonth; i > 0; i--) {
   
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateofMonth; i++) {
    
    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? "active"
        : "";
    liTag += `<li class="${isToday}">${i}</li>`;
  }

  for (let i = lastDayofMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }
  currentDate.innerText = `${months[currMonth]} ${currYear}`; 
  daysTag.innerHTML = liTag;

  var uday=document.getElementById("uday_1");
uday.style.color="red";
var month_calculation=`${currMonth}`;

var uday1=document.getElementById("uday_1");
uday1.innerText=`${month_calculation}`;
if(month_calculation==4){
  var uday5=document.getElementById("checking_content");
  var tint3=document.getElementById("tint1");

tint3.innerHTML="TECHNO INTERNATIONAL NEW TOWN";
uday5.style.backgroundColor="pink";
}
if(month_calculation==5){
  var uday5=document.getElementById("checking_content");
uday5.style.backgroundColor="red";
var tint3=document.getElementById("tint1");

tint3.innerHTML="TECHNO INTERNATIONAL NEW TOWN1";
}
 
};
renderCalendar();

prevNextIcon.forEach((icon) => {
  
  icon.addEventListener("click", () => {
   
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

    if (currMonth < 0 || currMonth > 11) {
      
      date = new Date(currYear, currMonth, new Date().getDate());
      currYear = date.getFullYear(); 
      currMonth = date.getMonth(); 
    } 
    else {
      date = new Date(); 
    }
    renderCalendar(); 
  });
});

