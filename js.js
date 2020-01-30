var flag = false;

function game() {
    document.getElementById('pc').setAttribute("disabled", "disabled");
    document.getElementById('player').setAttribute("disabled", "disabled");
    var run = 0;
    document.getElementById('gamefield').onclick = function(event) {

        if (flag == true) { return; }
        if (event.target.className == "cell" && event.target.textContent == "") {
            if (event.target.className == "cell") {
                if (run % 2 == 0) {
                    event.target.innerHTML = '0'
                } else {
                    event.target.innerHTML = 'X'
                }
            }

            run++
            winlines();
            console.log(flag)
            if (run == 9 && flag == false) {
                document.getElementById('result').innerHTML += "Draw";
                setTimeout(function() {
                    window.location.reload(1);
                }, 5000);
            }

        }
    }
}

function pcgame() {
    document.getElementById('player').setAttribute("disabled", "disabled");
    document.getElementById('pc').setAttribute("disabled", "disabled");
}

function winlines() {

    var cells = document.getElementsByClassName('cell');
    var arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]

    ]
    for (var i = 0; i < arr.length; i++) {

        if (cells[arr[i][0]].innerHTML == "X" && cells[arr[i][1]].innerHTML == "X" && cells[arr[i][2]].innerHTML == "X") {
            flag = true;
            document.getElementById('result').innerHTML += " X wins";


            setTimeout(function() {
                window.location.reload(1);
            }, 5000);
        } else if (cells[arr[i][0]].innerHTML == "0" && cells[arr[i][1]].innerHTML == "0" && cells[arr[i][2]].innerHTML == "0") {
            flag = true;
            document.getElementById('result').innerHTML += " 0 wins";


            setTimeout(function() {
                window.location.reload(1);
            }, 5000);
        }
    }
}

function newgame() {
    window.location.reload();

}

function stop() {

    //document.getElementsByClassName('cell').setAttribute("disabled", "disabled");
}