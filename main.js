// Targetting elements and infos

let inputF = document.querySelector("#addTask");
let inputD = document.querySelector("#date");
let AddButton = document.querySelector(".AddButton");
let TaskList = document.querySelector(".listContainer");




AddButton.addEventListener("click", function() {

    // creating task's elements

    var TaskCont = document.createElement("div");
    var para = document.createElement("p");
    var radio = document.createElement("input");
    var label = document.createElement("label");

    var DateCont = document.createElement("div");
    var paraD = document.createElement("p");
    var subD = document.createElement("sub");
    var paraH = document.createElement("p");
    var subH = document.createElement("sub");
    var paraM = document.createElement("p");
    var subM = document.createElement("sub");
    var paraS = document.createElement("p");
    var subS = document.createElement("sub");

    var done = document.createElement("button");
    var del = document.createElement("button");

    // Adding classes for created elements

    TaskCont.classList.add("Task");
    para.classList.add("addedTask");
    radio.id.add("check");

    DateCont.classList.add("Countdown");
    paraD.classList.add("count days");
    paraH.classList.add("count hours");
    paraM.classList.add("cont minutes");
    paraS.classList.add("count seconds");
    
    done.classList.add("done group");
    del.classList.add("del group");

    if (inputF.value ==="") {
        AddButton.Disabled = true ;

    }else{
        label.innerHTML = inputF.value ;
        done.innerHTML = "✔";
        del.innerHTML = "✖";
        subD.innerHTML = "days";
        subH.innerHTML = "hours";
        subM.innerHTML = "minutes";
        subS.innerHTML = "seconds";


        const dateD = new Date(inputD);
        const currentDate =new  Date();

        const seconds = (dateD - currentDate) / 1000;

        const secs = Math.floor(seconds) % 60;
        const mins = Math.floor(seconds / 60) % 60;
        const hours = Math.floor(seconds / 3600) % 24;
        const days = Math.floor(seconds / 3600 / 24);


     paraD.innerHTML = formatTime(days);
     paraH.innerHTML = formatTime(hours);
     paraM.innerHTML = formatTime(mins);
     paraS.innerHTML = formatTime(secs);

     TaskList.appendChild(TaskCont);
     TaskCont.appendChild(para);
     TaskCont.appendChild(DateCont);
     TaskCont.appendChild(done);
     TaskCont.appendChild(del);

    para.appendChild(radio);
    para.appendChild(label);

    DateCont.appendChild(paraD);
    DateCont.appendChild(paraH);
    DateCont.appendChild(paraM);
    DateCont.appendChild(paraS);

    paraD.appendChild(subD);
    paraH.appendChild(subH);
    paraM.appendChild(subM);
    paraS.appendChild(subS);

    inputF.value ="";
    inputD.value="";

    }


})

function formatTime(time){
    return time < 10 ? '0$(time)'  : time;
}