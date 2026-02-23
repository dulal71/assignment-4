// total count job
const totalJob = document.getElementById("all-job");
const childNode = totalJob.children.length;
const totalCount = document.getElementById("total");
totalCount.innerText = childNode;

//total Interview job
const totalInterview = document.getElementById("total-interview");
//total rejected job
const totalreject = document.getElementById("rejected");

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
let rejectList=[];
allJob.addEventListener("click" ,function(event){
  if(event.target.classList.contains("btn-interview-selected")){
const parentNode = event.target.parentNode.parentNode.parentNode;
 const jobName = parentNode.querySelector(".job-name").innerText;
  const duty =parentNode.querySelector(".duty").innerText;
  const salary =parentNode.querySelector(".salary").innerText;
  const condition =parentNode.querySelector(".condition").innerText;
  const position =parentNode.querySelector(".position").innerText;
 parentNode.querySelector(".condition").innerText = 'Interview'; 
  // object
  const jobInfo={
    jobName,
    duty,
    salary,
    condition,
    position
  }
  
const jobExist =  interviewList.find(job=> job.jobName=== jobInfo.jobName);
if(!jobExist){
 interviewList.push(jobInfo);  
}
totalInterview.innerText=interviewList.length;
reminderInterview();
  }else if(event.target.classList.contains("btn-rejected-selected")){
   const parentNode = event.target.parentNode.parentNode.parentNode;
 const jobName = parentNode.querySelector(".job-name").innerText;
  const duty =parentNode.querySelector(".duty").innerText;
  const salary =parentNode.querySelector(".salary").innerText;
  const condition =parentNode.querySelector(".condition").innerText;
  const position =parentNode.querySelector(".position").innerText;
   parentNode.querySelector(".condition").innerText = 'Rejected';
  
  // object
  const jobInfo={
    jobName,
    duty,
    salary,
    condition,
    position
  }
  
const jobExist =  rejectList.find(job=> job.jobName=== jobInfo.jobName);
if(!jobExist){
   rejectList.push(jobInfo);  
}
totalreject.innerText= rejectList.length;
reminderRejected();
  }
  
})







 function reminderInterview(){
  interviewJob.innerHTML=``;
  for(const job of interviewList ){
    // console.log("job",job)
    const div = document.createElement("div");
    div.className = 'bg-base-100 p-4 flex justify-between shadow';
    div.innerHTML=`
    <div class="job-contant space-y-4 ">
    <div>
        <h3 class="job-name font-bold text-xl">${job.jobName}</h3>
<p class="duty text-[#64748B]">${job.duty}</p>
</div>

<p  class="salary text-[#64748B]">${job.salary}</p>
<p id="status"class="condition bg-gray-200 inline-block px-2 py-1">Not Applied</p>
<p class="postion text-gray-600">${job.position}</p>
<div class="flex gap-2">
<button id="interview-btn" class="btn-interview-selected btn btn-dash btn-success">Interview</button>
<button id="iejected-btn"  class="btn btn-dash btn-error">Rejected</button>
</div>
</div>
<button id="delete-btn" class="w-8 h-8 flex rounded-full border border-gray-200 text-[#64748B] p-2"><i class="fa-regular fa-trash-can"></i></button>
   `
   interviewJob.appendChild(div);
  }


 }
 function reminderRejected(){
  rejectedJob.innerHTML=``;
  for(const job of rejectList ){
    // console.log("job",job)
    const div = document.createElement("div");
    div.className = 'bg-base-100 p-4 flex justify-between shadow';
    div.innerHTML=`
    <div class="job-contant space-y-4 ">
    <div>
        <h3 class="job-name font-bold text-xl">${job.jobName}</h3>
<p class="duty text-[#64748B]">${job.duty}</p>
</div>

<p  class="salary text-[#64748B]">${job.salary}</p>
<p id="status"class="condition bg-gray-200 inline-block px-2 py-1">Not Applied</p>
<p class="postion text-gray-600">${job.position}</p>
<div class="flex gap-2">
<button id="interview-btn" class="btn-interview-selected btn btn-dash btn-success">Interview</button>
<button id="iejected-btn"  class="btn btn-dash btn-error">Rejected</button>
</div>
</div>
<button id="delete-btn" class="w-8 h-8 flex rounded-full border border-gray-200 text-[#64748B] p-2"><i class="fa-regular fa-trash-can"></i></button>
   `
   rejectedJob.appendChild(div);
  }

 }



