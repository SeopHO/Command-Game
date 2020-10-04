let question = document.querySelector('.question');

let count=0;

function appearQuestion()
{
    question.style.display='block';
    user_stop=true;
}
function disappearQuestion()
{
    question.style.display='none';
    user_stop = false;
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
            clearTimeout(timer);
        }
    },1000)
}

function questionInit()
{
    drawQuestion();
}
