let arr = [];
let w = 5;

let state = [];

// var DoQuickSort = false;
// var doneOnce = false;

// var qsortbtn = document.getElementById('qsort');
// qsortbtn.addEventListener('click',()=>{
//     console.log('Click on qsort');
//     DoQuickSort=true
// });

function setup()
{
    createCanvas(1000,600);
    var Canvas = document.getElementById("defaultCanvas0");
    Canvas.style.display = 'block';
    Canvas.style.margin = '0 auto';
    Canvas.style.border = '5px solid black';
    Canvas.style.marginTop = '100px';

    arr = new Array(floor(width/w));

    for(let i=0;i<arr.length;i++)
    {
       arr[i]= random(height);
       state[i]=-1;
    }
    frameRate(30);

    quickSort(arr,0,arr.length-1);

}
function draw()
{
    background(51);

    for(let i=0;i<arr.length;i++)
    {   
        if(state[i]==0)
        {
            fill(255,0,0);
        }
        else if(state[i]==1) fill(0,100,200);
        else fill(255,255,255);
        
        stroke(0);
        // noStroke();
        rect(i*w,height-arr[i],w,arr[i]);
    }
}

function sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve,ms));
}   

async function swap(arr,a,b)
{   
    await sleep(50);

    let temp = arr[a];
    arr[a]=arr[b];
    arr[b]=temp;
}

async function partition(arr,start,end)
{   
    for(let i=start;i<end;i++)
    {
        state[i]=1;
    }

    let pivotIndex = start;
    state[pivotIndex]=0;
    let pivotValue = arr[end];

    for(let i=start;i<end;i++)
    {
        if(arr[i]<pivotValue)
        {
            await swap(arr,i,pivotIndex);
            state[pivotIndex]=-1;
            pivotIndex++;
            state[pivotIndex]=0;
        }
    }

    await swap(arr,pivotIndex,end);

    for(let i=start;i<end;i++)
    {   
        if(i!=pivotIndex)
        state[i]=-1;
    }

    return pivotIndex;
}

async function quickSort(arr,start,end)
{
    if(start>=end){
        return;
    }

    let partitionIndex = await partition(arr,start,end);
    state[partitionIndex]=-1;

    await Promise.all([
        quickSort(arr,start,partitionIndex-1),
        quickSort(arr,partitionIndex+1,end)
    ]);

}

