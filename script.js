// total count job
const totalJob = document.getElementById("all-job");
const childNode = totalJob.children.length;
const totalCount = document.getElementById("total");
totalCount.innerText = childNode;
// available-job

const availableJob = document.getElementById("available-job");
availableJob.innerText = childNode;
//get all job section

const allJob = document.getElementById('all-job');
const interviewJob = document.getElementById('interview-job');
const rejectedJob = document.getElementById("rejected-job");





//get btn

const  allFilterBtn =document.getElementById("all-btn");
const interviewFilterBtn =document.getElementById("interview-filter-btn");
const rejectFilterBtn =document.getElementById("rejected-filter-btn");



//  Toggle Button
//remove classList
function toggleBtn(id){
  allFilterBtn.classList.remove("bg-primary","text-white");
  interviewFilterBtn.classList.remove("bg-primary","text-white");
  rejectFilterBtn.classList.remove("bg-primary","text-white");

// add classList
  allFilterBtn.classList.add("bg-white","text-gray-600");
  interviewFilterBtn.classList.add("bg-white","text-gray-600");
  rejectFilterBtn.classList.add("bg-white","text-gray-600");
// selcted the click btn
const selcted = document.getElementById(id);
selcted.classList.remove("bg-white","text-gray-600");
selcted.classList.add("bg-primary","text-white");


if(id === "interview-filter-btn"){
  interviewJob.classList.remove("hidden");
allJob.classList.add("hidden");
 rejectedJob.classList.add("hidden");

}else if(id === "rejected-filter-btn"){
  interviewJob.classList.add("hidden");
allJob.classList.add("hidden");
 rejectedJob.classList.remove("hidden");
}else{
   rejectedJob.classList.add("hidden");
    interviewJob.classList.add("hidden");
    allJob.classList.remove("hidden");

}
 
}