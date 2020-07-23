// async function sleep(ms)
// {
//     return new Promise(resolve => setTimeout(resolve,ms));
// }

// let arr = [];
// let w = 5;

// var curr_size=1;
// var left_start = 0;

// function setup(){
//     createCanvas(1000,600);
//     var Canvas = document.getElementById("defaultCanvas0");
//     Canvas.style.display = 'block';
//     Canvas.style.margin = '0 auto';
//     Canvas.style.border = '5px solid black';
//     Canvas.style.marginTop = '100px';

//     arr = new Array(floor(width/w));

//     for(let i=0;i<arr.length;i++){
//        arr[i]= random(height);
//     }
//     frameRate(30);

//     mergeSort(arr,0,arr.length-1);
// }

// async function draw(){

//     background(51);
//     for(let i=0;i<arr.length;i++){
//         rect(i*w,height-arr[i],w,arr[i]);
//     }

//     // if(curr_size<=arr.length)
//     // {
//     //     for(left_start=0;left_start<arr.length-1;left_start+= 2*curr_size){

//     //         let mid = min(left_start+curr_size-1,arr.length-1);
//     //         var right_end = min(left_start+2*curr_size-1,arr.length-1);

//     //         merge(arr,left_start,mid,right_end);
//     //         await sleep(1);
//     //     }
        
//     //     curr_size*=2;
//     // }
//     // else{
//     //     console.log("Sorted");
//     //     noLoop();
//     // }

// }

// function merge(arr,l,m,r)
// {   
//     console.log("Merge Called");
//     var i=l;
//     var j=m+1;
//     var k=0;
//     var size = r - l + 1;

//     var temp = new Array(size);

//     while(i<=m && j<=r){
//         if(arr[i]<arr[j]){
//             temp[k++]=arr[i++];
//         }
//         else temp[k++]=arr[j++];
//     }

//     while(i<=m) temp[k++]=arr[i++];
//     while(j<=r) temp[k++]=arr[j++];

//     i=l;
//     k=0;
//     for(i=l;i<=r;i++)
//     {
//         arr[i]=temp[k++];
//     }
// }

// async function mergeSort(arr,l,r)
// {
//     if(l>=r) return;

//     var m = (l+r)/2;
//     await Promise.all([
//     mergeSort(arr,l,m),
//     mergeSort(arr,m+1,r)    
//     ]);

//     // await sleep(50);
//     await merge(arr,l,m,r);
// }
 
