const RandomNumber = Math.round(100 * Math.random());


function checkNum(rNum){
    function getAnsw(){
        let Answ = prompt("Угадай число от 1 до 100");
        console.log(Answ);
        if(isNaN(Answ))
        {
            alert("Введите валидное число!");
            getAnsw();
        }
        if(Answ != null)
        {
            Answ = +Answ.trim();
            if(Answ > rNum){
                console.log("Загаданное число меньше");
                console.log(Answ);
                console.log(RandomNumber);
                getAnsw();
            }
            else if(Answ < rNum){
                console.log("Загаданное число больше");
                console.log(Answ);
                console.log(RandomNumber);
                getAnsw();
            }
            else if(Answ == rNum){
                console.log("Поздравляю, Вы угадали!!!");
                console.log(Answ);
                console.log(RandomNumber);
            }
        }
        else{
            console.log("игра окончена!!!");
        }
        
    }
    getAnsw();
}
checkNum(RandomNumber);
//

function one(x){
    function two(){
        const a = +prompt("Enter a number: ");
        x--;

        console.log(a);
        console.log(x);

        if(x!=a){
            two();
        }
    }
    two();
}

//one(10);