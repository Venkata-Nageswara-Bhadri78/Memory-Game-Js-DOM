let container = document.getElementById("container");

let status = {
    "image-0.png": 2,
    "image-1.png": 2,
    "image-2.png": 2,
    "image-3.png": 2,
    "image-4.png": 2,
    "image-5.png": 2,
    "image-6.png": 2,
    "image-7.png": 2,
    "image-8.png": 2,
    "image-9.png": 2,
    "image-10.png": 2,
    "image-11.png": 2
  }  

function generateUniqueRandomArray() {
    const arr = [];
    for (let i = 1; i <= 24; i++) {
        arr.push(i);
    }
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

const array = generateUniqueRandomArray();
// console.log(array);

for(let i=0 ; i<array.length ; i++){
    let value = array[i];
    let item = document.getElementById(`item-${value}`);
    // let img = `<img src='./images/image-${value%12}.png' id="image-${value}" alt='Image'>`;
    let img = document.createElement('img');
    img.src = `./images/image-${value%12}.png`;
    img.id = `image-${value}`;
    img.alt = "Alternative Text";
    img.style.display = "none";
    let newDiv = document.createElement('div');
    newDiv.className = "extra";
    // newDiv.style.backgroundColor = "green";
    newDiv.style.cursor = "pointer";
    newDiv.style.padding = "0";

    newDiv.appendChild(img);
    item.appendChild(newDiv);
    container.appendChild(item);
}

let count = 0;
let first = -1;
let second = -1;

let clicking = document.querySelectorAll('.extra');
for(let i=0 ; i<clicking.length ; i++){
    clicking[i].addEventListener('click', () => {
        clicking[i].querySelector('img').style.display = "block";
        if(first != -1 && second != -1){
            checkForEquality();
        }
        if(first==-1){
            first = i;
        }
        else{
            second = i;
        }
        count++;
    })
}

var completed = 0;
function checkForEquality(){
    let firstImageName = clicking[first].querySelector('img').src;
    let secondImageName = clicking[second].querySelector('img').src;
    // console.log(firstImageName);
    // console.log(secondImageName);
    if(firstImageName == secondImageName){
        clicking[first].querySelector('img').style.display = "block";
        completed += 2;

        clicking[second].querySelector('img').style.display = "block";
        clicking[first].querySelector('img').src = "./done-image.png";
        clicking[second].querySelector('img').src = "./done-image.png";
        console.log(completed);
    }
    else{
        clicking[first].querySelector('img').style.display = "none";
        clicking[second].querySelector('img').style.display = "none";
    }
    if(completed==24){
        console.log("Completed");
        document.getElementById('won').innerHTML = 'CONGRATS - YOU WON &#127881';
    }
    first = -1;
    second = -1;
    count = 0;
}