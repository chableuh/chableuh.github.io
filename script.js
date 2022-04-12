const circleSymbol = "O";
const crossSymbol = "X";

let field = ["e","e","e","e","e","e","e","e","e"];
let isGamerunning = true;
let wincount = 0;


function handleClick( fieldId )
{
    if(isGamerunning)
    {
        if(field[parseInt(fieldId)] == "e")
        {
            field[parseInt(fieldId)] = "X";
            document.getElementById(fieldId).innerHTML = crossSymbol;

            if(checkforwinner())
            {
                return;
            }
            
            setCircle();
        }

    }

}

function setCircle()
{
    let fieldId = Math.round(Math.random()* 8);
    if(field[parseInt(fieldId)] == "e")
        {
            field[parseInt(fieldId)] = "O";
            document.getElementById(fieldId).innerHTML = circleSymbol;

            if(checkforwinner())
            {
                return;
            }

        }
        else
        {
            setCircle();
        }
            
    

}

function checkforwinner()
{
    if(field[0] == "X" && field[1] == "X" && field[2] == "X")
    {
        setwinner("X", [0,1,2]);
        return true;
    }
    else if(field[3] == "X" && field[4] == "X" && field[5] == "X")
    {
        setwinner("X", [1,4,5]);
        return true;
    }
    
     else if(field[6] == "X" && field[7] == "X" && field[8] == "X")
    {
        setwinner("X", [6,7,8]);
        return true;
    }
    else if(field[0] == "X" && field[3] == "X" && field[6] == "X")
    {
        setwinner("X", [0,3,6]);
        return true;
    }
    else if(field[1] == "X" && field[4] == "X" && field[7] == "X")
    {
        setwinner("X", [1,4,7]);
        return true;
    }
    else if(field[2] == "X" && field[5] == "X" && field[8] == "X")
    {
        setwinner("X", [2,5,8]);
        return true;
    }
    else if(field[0] == "X" && field[4] == "X" && field[8] == "X")
    {
        setwinner("X", [0,4,8]);
        return true;
    }
    else if(field[2] == "X" && field[4] == "X" && field[6] == "X")
    {
        setwinner("X", [2,4,6]);
        return true;
    }
    else if(field[0] == "O" && field[1] == "O" && field[2] == "O")
    {
        setwinner("O", [0,1,2]);
        return true;
    }
    else if(field[3] == "O" && field[4] == "O" && field[5] == "O")
    {
        setwinner("O", [3,4,5]);
        return true;
    }
    
     else if(field[6] == "O" && field[7] == "O" && field[8] == "O")
    {
        setwinner("O", [6,7,8]);
        return true;
    }
    else if(field[0] == "O" && field[3] == "O" && field[6] == "O")
    {
        setwinner("O", [0,3,6]);
        return true;
    }
    else if(field[1] == "O" && field[4] == "O" && field[7] == "O")
    {
        setwinner("O", [1,4,7]);
        return true;
    }
    else if(field[2] == "O" && field[5] == "O" && field[8] == "O")
    {
        setwinner("O", [3,5,8]);
        return true;
    }
    else if(field[0] == "O" && field[4] == "O" && field[8] == "O")
    {
        setwinner("O", [0,4,8]);
        return true;
    }
    else if(field[2] == "O" && field[4] == "O" && field[6] == "O")
    {
        setwinner("O", [2,4,6]);
        return true;
    }
    else if(field[0] != "e" && field[1] != "e" && field[2] != "e" && field[3] != "e" && field[4] != "e" && field[5] != "e" && field[6] != "e" && field[7] != "e" && field[8] != "e")
    {
        setwinner("d")
        return true;
    }
    

}

function setwinner(winner, winningline)
{
    isGamerunning = false;
    if(winner == "O")
    {
        wincount += 1;

        document.getElementById("status").innerHTML ="Du hast gewonnen";
    }
    else if(winner == "X")
    {

        document.getElementById("status").innerHTML ="Du hast verloren";
    }
    else if(winner == "d")
    {

        document.getElementById("status").innerHTML ="Es ist unentschieden";
    }
}
