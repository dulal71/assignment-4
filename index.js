//get all job section
const allJob = document.getElementById('all-job');
const interviewJob = document.getElementById("interview-job");
const rejectedJob=document.getElementById("rejected-job");
const emptyState= document.getElementById("empty");


let currentStatus = "all";
const activeStyle = ['bg-primary', 'btn-soft', 'text-white'];
const inActiveStyle = ['btn-soft', 'bg-white'];

//  Toggle Button and get all tab button
function toggleBtn(tab){ 
                                          //id=all-btn //id="interview-btn"//rejected-btn
  const totaltabs = ['all','interview','rejected'];
  currentStatus = tab;
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
    emptyState .classList.add("hidden");
 }
 if(tab === "all"){
   allJob.classList.remove("hidden"); 
if(allJob.children.length < 1){
   emptyState.classList.remove("hidden");
}
 }
 else if(tab==='interview'){
    interviewJob.classList.remove("hidden"); 
    if(interviewJob.children.length < 1){
   emptyState.classList.remove("hidden");
 }
}else{
   rejectedJob.classList.remove("hidden");
   if(rejectedJob.children.length < 1){
   emptyState.classList.remove("hidden");
 }
}

}
 

toggleBtn(currentStatus);


const totalCount = document.getElementById("total");
const totalInterview = document.getElementById("total-interview");
const totalreject = document.getElementById("total-rejected");
const available = document.getElementById('total-available');

// total count 
function totalState(){
   const countObject = {
      all:allJob.children.length,
      interview:interviewJob.children.length,
      rejected:rejectedJob.children.length
   };
   totalCount.innerText=countObject['all'];
   totalInterview.innerText=countObject['interview'];
   totalreject.innerText=countObject['rejected'];
   available.innerText=countObject[currentStatus];
   if(countObject[currentStatus]<1){
      emptyState.classList.remove("hidden");
   }else{
      emptyState.classList.add("hidden"); 
   }

}
 totalState();




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
 totalState();
 })

 