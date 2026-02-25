//get all job section
const allJob = document.getElementById('all-job');
const interviewJob = document.getElementById("interview-job");
const rejectedJob=document.getElementById("rejected-job");


let currentStatus = "all";
const activeStyle = ['bg-primary', 'btn-soft', 'text-white'];
const inActiveStyle = ['btn-soft', 'bg-white'];

//  Toggle Button and get all tab button
function toggleBtn(tab){ 
                                          //id=all-btn //id="interview-btn"//rejected-btn
  const totaltabs = ['all','interview','rejected'];
 for(const tabs of totaltabs){
    const tabName = document.getElementById( tabs + "-btn");
    console.log(tabName);
    if(tabs === tab){
           tabName.classList.remove(...inActiveStyle);
        tabName.classList.add(...activeStyle);
     }
    else {
       tabName.classList.add(...inActiveStyle);
         tabName.classList.remove(...activeStyle);
   
    }

 }
 const allSection =[allJob,interviewJob,rejectedJob]
 for(const section of allSection ){
   section.classList.add("hidden");
 }
 if(tab === "all"){
   allJob.classList.remove("hidden"); 
 }else if(tab==='interview'){
    interviewJob.classList.remove("hidden"); 
 }else{
   rejectedJob.classList.remove("hidden");
 }
}

toggleBtn(currentStatus);


// total count 
const totalCount = document.getElementById("total");
totalCount.innerText = allJob.children.length;
const totalInterview = document.getElementById("total-interview");
 const totalreject = document.getElementById("total-rejected");



 const mainContainer=document.getElementById("job-container");
 mainContainer.addEventListener("click",function(event){
const clickElement=event.target;
console.log(clickElement.parentNode.parentNode.parentNode);
const card = clickElement.closest('.job-card');
const cardParent = card.parentNode;
console.log(cardParent);
const status = card.querySelector(".condition");
if(clickElement.classList.contains("btn-interview-selected")){
   interviewJob.appendChild(card);
   status.innerText= "Interview";
}
if(clickElement.classList.contains("btn-rejected-selected")){
rejectedJob.appendChild(card);
 status.innerText= "Rejected";
}
if(clickElement.classList.contains("delete")){
cardParent.removeChild(card);
}
 })