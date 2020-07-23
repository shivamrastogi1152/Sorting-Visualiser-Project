let arr = [];
let sorted = [];
let w = 5;

var i=0;
var j=i+1;  
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

    if(i<arr.length-1)
    {
        let minIdx = i;
        sorted[minIdx]=true;

        current=i+1;
        for(j=i+1;j<arr.length;j++)
        {   
            if(arr[j]<arr[minIdx])
            minIdx=j;
        }
        swap(arr,i,minIdx);
        i++;
    }
    else 
    {
        console.log("Sorted");
        noLoop();
    }

}

function swap(arr, a, b)
{
    let temp = arr[a];
    arr[a]=arr[b];
    arr[b]=temp;
}