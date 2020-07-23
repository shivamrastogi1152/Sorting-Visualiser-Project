let arr = [];
let sorted = [];
let w = 5;

var i;
var startswapping=false;
var doneonce = false;
var current;

function setup(){

    createCanvas(1000,600);
    var Canvas = document.getElementById("defaultCanvas0");
    Canvas.style.display = 'block';
    Canvas.style.margin = '0 auto';
    Canvas.style.border = '5px solid black';
    Canvas.style.marginTop = '100px';


    arr = new Array(Math.floor(width/w));
    sorted = new Array(Math.floor(width/w));
    for(let i=0;i<arr.length;i++)
    {
        arr[i]=random(height);
        sorted[i]=false;
    }

    frameRate(30);

    i = (arr.length/2 - 1); 

}

function draw(){
    background(51);

    for(let i=0;i<arr.length;i++){
        stroke(0);
        if(i==current) fill(255,0,0);
        else if(sorted[i]==true) fill(0,255,0);
        else fill(255);
        rect(i*w,height-arr[i],w,arr[i]);
    }

    if(i>=0 && startswapping==false)
    {
        heapify(arr,arr.length,i);
        current=i;
        i--;
    }
    else if(i<0 &&!doneonce)
    {
        startswapping=true;
        current=i;
        i=arr.length-1;
        doneonce=true;
    }

    if(i>0 && startswapping)
    {
        swap(arr,0,i);
        heapify(arr,i,0);
        sorted[i]=true;
        i--;
    }

}

function heapify(arr,n,i){

    let largest = i;
    let left = 2*i+1;
    let right = 2*i+2;

    if(left<n && arr[left]>arr[largest]) largest=left;
    if(right<n && arr[right]>arr[largest]) largest=right;

    if(largest!=i){
        swap(arr,i,largest);
        heapify(arr,n,largest);
    }
    
    return;
}

function swap(arr, a, b)
{
    let temp = arr[a];
    arr[a]=arr[b];
    arr[b]=temp;
}