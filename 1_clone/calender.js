let currentYear = 2024;
let currentMonth = 3;

function createCalendar(year, month) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, month, 1).getDay();

  let calendarHTML = "<div class='calendar'>";

  calendarHTML +=
    "<span class='arrow' onclick='changeMonth(\"prev\")'>&lt;</span>";
  calendarHTML += `<span>${year}년 ${month + 1}월</span>`;
  calendarHTML +=
    "<span class='arrow' onclick='changeMonth(\"next\")'>&gt;</span>";

  calendarHTML += "<div class='days'>";

  for (let day = 1; day <= daysInMonth; day++) {
    calendarHTML += `<div class='day'>${day}</div>`;
  }

  calendarHTML += "</div></div>";
  return calendarHTML;
}

function updateCalendar() {
  const calendarContainer = document.getElementById("calendar-container");
  calendarContainer.innerHTML = createCalendar(currentYear, currentMonth);
}

function changeMonth(direction) {
  if (direction === "next") {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
  } else if (direction === "prev") {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
  }
  updateCalendar();
}

// 사용 예시
const calendarContainer = document.getElementById("calendar-container");
const yearMonthContainer = document.createElement("div");

yearMonthContainer.className = "year-month";

document.body.appendChild(yearMonthContainer);

updateCalendar();
