// ! Selecting Elements

let paraRange = document.querySelector("#paraRange");
let paraNum = document.querySelector("#paraNum");
let wordsRange = document.querySelector("#wordsRange");
let wordsNum = document.querySelector("#wordsNum");
let tags = document.querySelector("#tagSelect");

// ! Showing the changed value in span

paraRange.addEventListener("click", function () {
  paraNum.innerText = paraRange.value;
});

wordsRange.addEventListener("click", function () {
  wordsNum.innerText = wordsRange.value;
});

// ! Adding list item in Tags list

const tagOptions = ["p", "h1", "h2", "h3", "h4", "h5", "h6", "span"];
function opt(el){
    let select = document.createElement("option");
    tags.append(select)
    select.innerText = `<${el}>`;
    
    
};
tagOptions.forEach(opt)


