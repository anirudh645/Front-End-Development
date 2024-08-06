var c = 0;
function count(){
    c =c+1;
    console.log("hai");
    postMessage(c);
    setTimeout(count, 500);
}
count();