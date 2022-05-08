function bonusScoringSystem(arr) {

    let maxBonus = 0;
    let studentAttendance = 0;

    for(let i = 3; i < arr.length; i++){
        let bonus = arr[i] / arr[1] * (5 + Number(arr[2]));
        if(bonus > maxBonus){
            maxBonus = bonus;
            studentAttendance = arr[i];
        }
    }
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${studentAttendance} lectures.`);
}

bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ]
  )