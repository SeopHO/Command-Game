let question = document.querySelector('.question');

let count=0;

function drawQuestion()
{
    let timer=setInterval(function(){
        let rec = Commands_text[count];
        question.append(`${rec} `);
        count++;
        if(count === Commands_len)
        {
            clearInterval(timer);
            user_stop = false;

        }
    },1000)
}



function questionInit()
{
    drawQuestion();
}

