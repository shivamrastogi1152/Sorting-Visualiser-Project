let arr = [];
let w = 5;

var i=1;
var j=i-1;
var key;
var current;
var sorted = [];

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
        arr[i] = random(height);
        sorted[i]=false;
    }

    frameRate(30);
}

function draw(){

    background(51);

    for(let i=0;i<arr.length;i++)
    {
        stroke(0);
        if(i==current) fill(255,0,0);
        else if(sorted[i]==true) fill(0,255,0);
        else fill(255);
        rect(i*w,height-arr[i],w,arr[i]);
    }

    if(i<arr.length)
    {
        key = arr[i];
        j=i-1;
        while(j>=0 && arr[j]>key)
        {   
            current=j;
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=key;
        sorted[i]=true;
        i++;

    }
    else 
    {
        console.log("Sorted");
        noLoop();
    }


}