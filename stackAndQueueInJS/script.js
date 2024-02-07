let arr=[];

function getValueFromInput(){
    return document.getElementById('entervalue').value;
}
function cleanInputBox(){
    document.getElementById('entervalue').value=null;
}
function printArray(){
    let doc=document.getElementById('output');
    doc.innerText='Output : '+arr;

}
function push(){
    console.log('push function call');
    arr.push(getValueFromInput());
    cleanInputBox();
    printArray();
}
function pop(){
    arr.pop();
    printArray();
}

function shift(){
    arr.shift();
    printArray();
}
function unshift(){
    arr.unshift(getValueFromInput());
    printArray();
}
