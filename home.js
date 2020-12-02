function ageInDays(){
    var age = prompt("What is your age");
    var ageInDayss = age * 365;
    var h1 = document.createElement('h1');
    var textAnswer =  document.createTextNode('You are ' + ageInDayss + ' Days old:)\n');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}
function reset(){
    document.getElementById('ageInDays').remove();
}
function cat_img(){
    var image = document.createElement("img");
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    document.getElementById("flex-box-contain").appendChild(image);
}

function rpsgame(yourChoice){
    var humanChoice,computerChoice;
    humanChoice = yourChoice.id;
    computerChoice = ["rock","paper","scissor"][Math.floor(Math.random()*3)];
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissor").remove();
    var d = dicison(humanChoice,computerChoice);
    var massage;
    if(d==1)
        massage = document.createTextNode("YOU WIN!");
    else if(d==0.5)
        massage = document.createTextNode("YOU TIED!");
    else
        massage = document.createTextNode("YOU LOSE!");
    var h1 = document.createElement("h1");
    var img1 = document.createElement("img");
    var img2 = document.createElement("img");
    h1.appendChild(massage);
    if(d==1)
        h1.style  = "color: green"
    else if(d==0.5)
        h1.style  = "color: blue"
    else
        h1.style  = "color: red"
    if(humanChoice == "rock")
        img1.src = "rock.png";
    else if(humanChoice == "paper")
        img1.src = "paper.png";
    else
        img1.src = "scissor.png";
    if(computerChoice == "rock")
        img2.src = "rock.png";
    else if(computerChoice == "paper")
        img2.src = "paper.png";
    else
        img2.src = "scissor.png";
    document.getElementById("flex-box-rps").appendChild(img1);
    document.getElementById("flex-box-rps").appendChild(h1);
    document.getElementById("flex-box-rps").appendChild(img2);
}

function dicison(humanChoice,computerChoice){
    var data = {
        "rock":{"rock" : 0.5,"paper" : 0, "scissor": 1},
        "paper":{"rock" : 1,"paper" : 0.5, "scissor": 0},
        "scissor":{"rock" : 0,"paper" : 1, "scissor": 0.5}
    }
    return data[humanChoice][computerChoice];
}