function guineaPig(arr){

    for(let i = 1; i <= 30; i++){
        arr[0] -= 0.3;
        if(i % 2 === 0){
            arr[1] -= arr[0] * 0.05;
        }
        if(i % 3 === 0){
            arr[2] -= arr[3] / 3;
        }
    }

    if(arr[0] >= 0 && arr[1] >= 0 && arr[2] >= 0){
        console.log(`Everything is fine! Puppy is happy! Food: ${arr[0].toFixed(2)}, Hay: ${arr[1].toFixed(2)}, Cover: ${arr[2].toFixed(2)}.`);
    }else{
        console.log("Merry must go to the pet store!");
    }

}

guineaPig((["10", 
"5", 
"5.2", 
"1"])
)