let addbtn = document.querySelector(".addbtn");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let delbtns = document.querySelectorAll(".delbtn");

addbtn.addEventListener("click", function(){

    let newitem = document.createElement("li");
    newitem.innerText = inp.value;
    ul.appendChild(newitem);

    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";

    delbtn.classList.add("delbtn");

    newitem.appendChild(delbtn);

    console.log(`task added, ${inp.value}`);
    inp.value = "";

})

// event delegation

ul.addEventListener("click", function(event){
    
    // console.log(event.target.parentElement);
    if(event.target.nodeName == "BUTTON"){
        console.log(event.target.parentElement);
        event.target.parentElement.remove();
        // console.dir(event.target);
        // console.log("ul is clicked");
    }
})

// for(delbtn of delbtns){
//     delbtn.addEventListener("click", function(){
//         console.log(this.parentElement);
//         this.parentElement.remove();
//     })
// }
