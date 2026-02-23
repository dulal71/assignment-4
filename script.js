// total count job
const totalJob = document.getElementById("all-job");
const childNode = totalJob.children.length;
const totalCount = document.getElementById("total");
totalCount.innerText = childNode;

//total Interview job


const totalInterview = document.getElementById("total-interview");

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



// create Object
let interviewList=[];
allJob.addEventListener("click" ,function(event){
  const parentNode = event.target.parentNode.parentNode.parentNode;
 
  const jobName = parentNode.querySelector(".job-name").innerText;
  const duty =parentNode.querySelector(".duty").innerText;
  const salary =parentNode.querySelector(".salary").innerText;
  const condition =parentNode.querySelector(".condition").innerText;
  const postion =parentNode.querySelector(".postion").innerText;
  
  const jobInfo={
    jobName,
    duty,
    salary,
    condition,
    postion
  }
  
const jobExist = interviewList.find(job=> job.jobName=== jobInfo.jobName);
if(!jobExist){
  interviewList.push(jobInfo);  
}
totalInterview.innerText=interviewList.length;

})



