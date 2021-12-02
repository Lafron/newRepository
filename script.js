'use strict';

checkNum(Math.round(100 * Math.random()), 10);

function checkNum(rNum, counter){
    
    getAnsw();

    function getAnsw(){
        if(counter < 1){
            let choice = confirm("Попытки закончились, хотите сыграть еще?");
            checkBool(choice);
        }
        else{
            let Answ = prompt("Угадай число от 1 до 100");
         
            if(isNaN(Answ))
            {
                alert("Введите валидное число!");
                getAnsw();
            }
            if(Answ != null)
            {
                Answ = +Answ.trim();
                if(Answ > rNum){
                    messegeFunc("меньше");
                }
                else if(Answ < rNum){
                    messegeFunc("больше");
                }
                else if(Answ == rNum){
                let choice = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
                checkBool(choice);                
                }
            }
            else{
                checkBool(false);
            }
        
        }
        
    }
    
    function messegeFunc(big){
        counter--;
        console.log(`Загаданное число ${big}, осталось попыток: ,${counter}`);
        getAnsw();
    }
    
    function checkBool(bl){
        if(bl){
            checkNum(Math.round(100 * Math.random()), 10);                    
        }
        else{
            alert("игра окончена!");
        }
    }
}


