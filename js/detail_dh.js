// calendar-nav 당해 년도 및 월를 구하는 과정입니다. 
let date = new Date();

const rendarcalendar =() => {
let currYear = date.getFullYear();

let currMonth = date.getMonth();

let months = [
    `January`,
    'February',
    `March`,
    `April`, 
    `May`,
    `June`,
    `July`,
    `August`,
    `September`,
    `October`,
    `November`,
    `December`
]   

let currentDate = document.querySelector(".calendar-date");
currentDate.innerHTML =`${months[currMonth]} ${currYear}`;

// 지난 달의 날짜와 다음달의 날짜를 구해 현재 월의 날짜와 합성하여 입력하는 과정입니다.
const prevlast = new Date (currYear,currMonth, 0)
const thisLast = new Date (currYear,currMonth+1, 0)

const PLDate = prevlast.getDate();
const PLDay = prevlast.getDay();

const TLDate = thisLast.getDate();
const TLDay = thisLast.getDay();

const prevDates = [];
const thisDates = [...Array(TLDate+1).keys()].slice(1);
const nextDates = [];

if (PLDay !==6) {
    for (let i =0; i < PLDay+1; i++){
        prevDates.unshift(PLDate-i);
    }
}

for (let i = 1; i <7 -TLDay; i ++) {
    nextDates.push(i);
}

const dates = prevDates.concat(thisDates,nextDates);

const FirstDateIndex = dates.indexOf(1);
const LastDateIndex = dates.lastIndexOf(TLDate);

dates.forEach((date,i)=>{

const DateCondition = i >= FirstDateIndex && i < LastDateIndex + 1
                    ? `this`
                    : `other`

    dates[i] = `<li class="calendar-dates ${DateCondition}">${date}</li>`;
}) 

document.querySelector('.calendar-days').innerHTML = dates.join(``);}

rendarcalendar();
// 지난 달 다음달 그리고 오늘로 이동하는 함수 입니다

const prevMonth = () => {
    date.setMonth(date.getMonth() - 1);
   rendarcalendar();
}

const nextMonth = ()=> {
    date.setMonth(date.getMonth() +1 );
    rendarcalendar();
}

const goToday = () => {
    date = new Date();
    rendarcalendar();
}

document.querySelector('.calendar-button1').addEventListener("click",function() {
    prevMonth();
} )

document.querySelector('.calendar-button2').addEventListener("click",function() {
    nextMonth();
    console.log(nextMonth());
} )

// 당월 날짜를 클릭 시 오늘 운동을 입력할 수 있는 모달창을 생성하는 과정입니다.

const modal = document.querySelector(".cal-modal-container")
const openmodal = document.querySelector(".calendar-days")

openmodal.addEventListener("click",e => (
    modal.style.display ="flex"
))

const closemodal = document.querySelector(".cal-modal-button2")

closemodal.addEventListener("click",e =>(
    modal.style.display ="none"
))


  // 모달창에서 입력한 내용을 투두리스트에 옮기는 과정입니다.

    let currnetDates = null;
    $(".calendar-days > li").on("click", function(){
        currnetDates = $(this).text();

    })

    $(".cal-modal-button1").on("click",function(){

    let currentYears = date.getFullYear();
    let currentMonths =date.getMonth()+1;


    let inputTodos = $(".cal-modal-input").val();
    $(".todolist").append(`<tr id="todolist-content">
    <td>${currentYears}년 ${currentMonths}월 ${currnetDates}일</td><td>${inputTodos}<td/>
    <input type="checkbox" class="todo-checkbox"</td><td>
    </tr>`)
    })


    // 투두리스트 완료한 운동 삭제 하는 버튼 입니다.!! 
    const deleteCheck = document.getElementById("todolist-delete");
    
    deleteCheck.addEventListener("click",()=>{
       const ChekcedBox =document.querySelectorAll(".todo-checkbox")
       ChekcedBox.forEach(ChekcedBox => {
        if(ChekcedBox.checked){
            ChekcedBox.parentNode.parentNode.remove();
        }
        })
        })
    // 투두리스트 전체 선택 하는 버튼입니다 .!!

    const Allcheck = document.getElementById("todolist-allCheck");
    Allcheck.addEventListener("click",()=>{
        const checkList = document.querySelectorAll(".todo-checkbox")
        checkList.forEach(checkList =>{
            checkList.checked = true ;
        })
    })


   