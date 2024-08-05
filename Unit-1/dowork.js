var j = 0;
function count(){
    for (var i = 0; i < 2000000000 ; i++) {
        j = i;
    }
    postMessage(j);
}
count();