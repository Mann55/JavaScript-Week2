const students = ["Ahmed", "Maria", "Atanas", "Nahidul", "Jack"];

function takeStudentsName(students){
    for(let s=0; s<students.length; s++){
        console.log(`Hi ${students[s]}`)
    }
}

takeStudentsName((students));   


