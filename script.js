let interviewList=[];
let rejectList=[];
let currentStatus = 'all';

//get all job section
const mainContainer=document.getElementById("main");
const allJob = document.getElementById('all-job');
const interviewJob = document.getElementById("interview-job");

// total count job
const totalCount = document.getElementById("total");
const totalInterview = document.getElementById("total-interview");
 const totalreject = document.getElementById("total-rejected");
 const totalAvailable = document.getElementById("total-available");
function calculateCount(){
totalCount.innerText=allJob.children.length;
totalInterview.innerText=interviewList.length;
 totalreject.innerText=rejectList.length;
 totalAvailable.innerText = allJob.children.length;
 
}

 calculateCount();








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
const selected = document.getElementById(id);
currentStatus= id;
selected.classList.remove("bg-white","text-gray-600");
selected.classList.add("bg-primary","text-white");
//  <!-- <p class="text-[#64748B]"><span id="total-available">0</span> jobs</p> -->


if(id === "interview-filter-btn"){
  interviewJob.classList.remove("hidden");
allJob.classList.add("hidden");
 totalAvailable.textContent = `${interviewList.length} of ${totalCount.innerText}`;
reminderInterview();
}else if(id === "rejected-filter-btn"){
  interviewJob.classList.remove("hidden");
allJob.classList.add("hidden");
totalAvailable.textContent = `${rejectList.length} of ${totalCount.innerText}`;

reminderRejected();

}else if(id==="all-btn"){
  //  rejectedJob.classList.add("hidden");
    interviewJob.classList.add("hidden");
    allJob.classList.remove("hidden");
   totalAvailable.innerText = allJob.children.length;
 
}
 
}



// create Object

mainContainer.addEventListener("click" ,function(event){
 
  if(event.target.classList.contains("btn-interview-selected")){
      interviewJob.innerHTML=``;
const parentNode = event.target.parentNode.parentNode.parentNode;
console.log(parentNode);
 const jobName = parentNode.querySelector(".job-name").innerText;
  const duty =parentNode.querySelector(".duty").innerText;
  const salary =parentNode.querySelector(".salary").innerText;
  const condition =parentNode.querySelector(".condition").innerText;
  const post=parentNode.querySelector(".post").innerText;
  parentNode.querySelector(".condition").innerText = 'Interview'; 
  // object
  const jobInfo={
    jobName,
    duty,
    salary,
    condition :'Interview',
    post
  }
  
const jobExist =  interviewList.find(job=> job.jobName=== jobInfo.jobName);
if(!jobExist){
 interviewList.push(jobInfo);  
}

 

  
rejectList = rejectList.filter(job=> job.jobName != jobInfo.jobName)

if(currentStatus ==='rejected-filter-btn'){
  reminderRejected();
}

calculateCount();


 }else if(event.target.classList.contains("btn-rejected-selected")){
      interviewJob.innerHTML=``;
   const parentNode = event.target.parentNode.parentNode.parentNode;
   console.log(parentNode);
   const jobName = parentNode.querySelector(".job-name").innerText;
  const duty =parentNode.querySelector(".duty").innerText;
  const salary =parentNode.querySelector(".salary").innerText;
  const condition =parentNode.querySelector(".condition").innerText;
  const post=parentNode.querySelector(".post").innerText;
   parentNode.querySelector(".condition").innerText = 'Rejected'; 
  
  // object
  const jobInfo={
    jobName,
    duty,
    salary,
    condition :'Rejected',
    post
  }
  
const jobExist =  rejectList.find(job=> job.jobName === jobInfo.jobName);
if(!jobExist){
   rejectList.push(jobInfo);  
  
}
if(rejectList.length ==0){
 empty.classList.remove("hidden"); 
}
 

interviewList =interviewList.filter(job=> job.jobName != jobInfo.jobName);
if(currentStatus ==='interview-filter-btn'){
reminderInterview();
}
calculateCount();


  }
  
})







 function reminderInterview(){
  
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
<p id="status"class="condition bg-gray-200 inline-block px-2 py-1">${job.condition}</p>
<p class="post text-gray-600">${job.post}</p>
<div class="flex gap-2">
<button id="interview-btn" class="btn-interview-selected btn btn-dash btn-success">Interview</button>
<button id="rejected-btn"  class="btn-rejected-selected btn btn-dash btn-error">Rejected</button>
</div>
</div>
<button class="delete-btn w-8 h-8 flex rounded-full border border-gray-200 text-[#64748B] p-2"><i class="fa-regular fa-trash-can"></i></button>
   `
interviewJob.appendChild(div);
  
  }


 }
 function reminderRejected(){
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
<p id="status"class="condition bg-gray-200 inline-block px-2 py-1">${job.condition}</p>
<p class="post text-gray-600">${job.post}</p>
<div class="flex gap-2">
<button id="interview-btn" class="btn-interview-selected btn btn-dash btn-success">Interview</button>
<button id="rejected-btn"  class="btn-rejected-selected btn btn-dash btn-error">Rejected</button>
</div>
</div>
<button class="delete-btn w-8 h-8 flex rounded-full border border-gray-200 text-[#64748B] p-2"><i class="fa-regular fa-trash-can"></i></button>
   `
   interviewJob.appendChild(div);
  } 

 }

const empty = document.getElementById("empty");
// function showEmpty(){
// if(rejectList.length >0){
//    empty.classList.add("hidden");
//   }else {
   
// }
// }




allJob.addEventListener("click",function(event){
  if(event.target.classList.contains('delete-btn')){
    const parent = event.target.parentNode;
    console.log(parent);
    parent.remove();
    calculateCount();
  }
})


