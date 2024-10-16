var imgLinks = ["1.jpg", "2", "3"];
var getImg = document.getElementById("img");
var count = 0;
console.log(getImg);
console.log(count);

function fun(){

    if(count >= 3){
        count = 0;
    }else if(count <= 0){
        count = 3;
    }

    getImg.setAttribute("src", imgLinks[count]);

    if(value === '+'){
        count++
        return
    }else if(value === '-'){
        count--
        return
    }
    
    count--
}

setInterval(fun, 6000)
