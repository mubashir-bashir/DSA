let arr= [7,8,3,1,2,24,9,34,4]

let printArray=(arr)=>{
    let output = '';
    for(i=0; i<arr.length; i++){
       output += arr[i]+ ' ';
    }
    console.log(output);
}
// bubble sort 

for(let i=0;i<arr.length-1;i++){
    for(let j=0;j<arr.length-i-1;j++){
        if(arr[j] > arr[j+1]){
            // swap
            let temp= arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }

    }
}

printArray(arr)