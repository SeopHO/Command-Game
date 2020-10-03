let question = document.querySelector('.question');

let count=0;

function disappearQuestion()
{
    question.style.display='none';
}

function drawQuestion()
{
    let timer=setInterval(function(){
        let rec = Commands_text[count];
        question.append(`${rec} `);
        count++;
        if(count === Commands_len)
        {
            clearInterval(timer);
            setTimeout(disappearQuestion,3000);
            user_stop = false;
        }
    },1000)
}

function questionInit()
{
    drawQuestion();
}

