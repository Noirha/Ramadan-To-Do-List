let span = document.getElementById("plus");
let inputs = document.getElementById("inputs");
let input = document.getElementsByTagName("input")[0]
let continer = document.getElementById("continer")

span.addEventListener("click", function () {
    if (input.value.length === 0) {
        alert("please Enter Your Task")
    } else {
        inputs.innerHTML += `
<div class="task">
 <span id="taskname">
 ${document.querySelector("input").value}
 </span>
 <div class="flex-task">
 <span class="opacity"><i class="fa-solid fa-check"></i></span>
 <span class="delet"><i class="fa-solid fa-minus"></i></span>
 </div>
 </div>
`
input.value = "";

        let delet = document.querySelectorAll(".opacity");
        delet.forEach(item => {
            item.addEventListener("click", (eo) => {

                let o = eo.target.parentElement.parentElement.parentElement.getElementsByTagName("span")[0];
                o.classList.toggle("la")
                if (o.classList.contains("la")) {
                    o.style.textDecoration = "line-through";
                }
                else {
                    o.style.textDecoration = "none";
                }


                let even2 = eo.target.parentElement;
                even2.classList.toggle("fals");
                if (even2.classList.contains("fals")) {
                    even2.innerHTML = `
<i class="fa-solid fa-close"></i>
`
                    item.parentElement.parentElement.style.width = "200px";
                    item.parentElement.parentElement.style.opacity = "0.5";
                } else {
                    even2.innerHTML = ` 
<i class="fa-solid fa-check"></i>`
                    item.parentElement.parentElement.style.width = "100%";
                    item.parentElement.parentElement.style.opacity = "1";
                }
            })
        })
        let del = document.querySelectorAll(".delet");
        del.forEach(item => {
            item.addEventListener("click", function () {
                this.parentElement.parentElement.remove()
            })
        })
    }
})

