var questionBox = document.getElementById('questionBox')
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');
var image = document.getElementById('image');
var scoreCard = document.getElementById('scoreCard');
var list = document.getElementById('list');

const app = {
    questions:[
        {
            images:'paris.jpg',
            q:'Whats the capital of France',
            options:['London','Madrid','Paris','Berlin'],
            answer:3
        },
        {
            images:'athens.jpg',
            q:'Whats the capital of Greece',
            options:['Athens','Helsinki','Oslo','Sofia'],
            answer:1
        },
        {
            images:'moscow.jpg',
            q:'Whats the capital of Russia',
            options:['Vilnius','Beijing','Brasilia','Moscow'],
            answer:4
        },
        {
            images:'londra.jpg',
            q:'Whats the capital of England',
            options:['Sofia','Dublin','Barcelona','London'],
            answer:4
        },
        {
            images:'lisbon.jpg',
            q:'Whats the capital of Portugal',
            options:['London','Madrid','Lisbon','Porto'],
            answer:3
        },
        {
            images:'oslo.jpg',
            q:'Whats the capital of Norway',
            options:['Malmo','Stockholm','Kiev','Oslo'],
            answer:4
        },
        {
            images:'roma.jpg',
            q:'Whats the capital of Italy',
            options:['Milano','Roma','Torino','Paris'],
            answer:2
        }
    ],
    index: 0,
    score: 0,
    load:function(){
        if(this.index <= this.questions.length-1){
            questionBox.innerHTML = this.questions[this.index].q;
            image.src = this.questions[this.index].images;
            option1.innerHTML = this.questions[this.index].options[0];
            option2.innerHTML = this.questions[this.index].options[1];
            option3.innerHTML = this.questions[this.index].options[2];
            option4.innerHTML = this.questions[this.index].options[3];  
        } else {
            questionBox.innerHTML = "Game Over!!";
            option1.style.display ="none";
            option2.style.display ="none";
            option3.style.display ="none";
            option4.style.display ="none";
        }
    },
    
    check: function(e){
        var id = e.id.split('');
        console.log(id);
        if(id[id.length - 1] == this.questions[this.index].answer){
            this.score++;
            e.className = 'correct';
            e.innerHTML = "Correct";
            this.scoreCard();
        } else {
            e.className = 'wrong';
            e.innerHTML = "Wrong";
        }
    },

    notClickAble: function(){
        for( let i = 0; i < list.children.length; i++ ){
            list.children[i].style.pointerEvents="none";
        }
    },

    clickAble: function(){
        for( let i = 0; i < list.children.length; i++ ){
            list.children[i].style.pointerEvents="auto";
            list.children[i].className = '';
        }
    },

    scoreCard:function(){
        scoreCard.innerHTML = this.score + "/" +  this.questions.length;
    },

    next: function(){
        this.index++;
        app.load();
    }
}

window.onload = app.load();

function button(e){
    app.check(e);
    app.notClickAble();
}

function next(){
    app.next();
    app.clickAble();
}