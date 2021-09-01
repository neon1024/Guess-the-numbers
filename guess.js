
var target = Math.floor(Math.random() * 11);

var limit = 1*10;

function getValue() {
    let x = document.getElementById('enter').value;

    if(x==target)
    {
        alert("target found");
        window.location.reload();   //refreshes the page after a succesful message
    }
    else
        if(x<target)
        {
            alert("try higher");
            return false;
        }
        else
        {
            alert("try lower");
            return false;
        }
}

function bruteFind() {

    var start = new Date().getTime();

    for(var i=0;i<=limit;i++)
        if(i==target)
        {
            var end = new Date().getTime();

            var duration = end - start;

            alert("target found\ntarget: " + target);
            window.location.reload();
        }
}

function cheat() {
    alert("target: " + target);
    window.location.reload();
}
