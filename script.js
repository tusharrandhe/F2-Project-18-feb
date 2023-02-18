let bookName = document.getElementById("name");
let studentName = document.getElementById("sname").value;
let btn = document.getElementById("button");

btn.addEventListener(onclick,submit(bookName));
function submit(bookName){
console.log(bookName.value);
}