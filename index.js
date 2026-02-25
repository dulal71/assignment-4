
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
}

toggleBtn(currentStatus);