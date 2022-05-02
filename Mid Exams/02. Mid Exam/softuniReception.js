function softuniReception(arr){

    let studentsPerHour = Number(arr[0]) + Number(arr[1]) + Number(arr[2]);
    let totalStudents = Number(arr[3]);
    let hours = 0;

    for(let i = 1; totalStudents > 0; i++){
        if(i % 4 === 0){
            hours++;
        }else{
            hours++;
            totalStudents -= studentsPerHour;
        }
    }
    console.log(`Time needed: ${hours}h.`);
}

softuniReception(['1','2','3','45']
    )