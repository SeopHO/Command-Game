let Game={};

let YourText = document.querySelector('.Yourtext');
let EnemyText = document.querySelector('.Enemytext');


Game.command = ['UP','DOWN','LEFT','RIGHT'];

let Command = Game.command;
Game.len = Command.length;

function InputText()
{
       
}

function PrintText(Command)
{
    EnemyText.textContent = Command;
}

function AddCommand()
{
    for(let i =0;i<Game.len;i++)
    {
        Command.push(Command[i]);
    }
    Game.len+=Game.len;
}

function ShuffleCommand(Command)
{
    for(let i=0;i<Game.len;i++)
    {
        let j = Math.floor(Math.random()*(i+1));
        let temp = Command[i];
        Command[i] = Command[j];
        Command[j] = temp;       
    }
    return Command;
}





