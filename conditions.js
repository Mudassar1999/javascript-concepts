document.write('Chapter 3');
document.write('<br>');

// Ternary Operator

let marks =18;
let gra;

(marks>60)? gra='Pass':gra='Fail';

document.write(gra);

document.write('<br>');


// If Else Statement

if (marks>40){
    document.write("Pass")
}
else{
    document.write("Fail")
}

document.write('<br>');
// function to find grad with IfElseIf Statement

let findGrd= (marks1)=>{
if (marks1<=100 && marks1>=90){
    document.write('Grade A')
}else if(marks1<=89 && marks1>=80){
    document.write('Grade B')
}else{
    document.write('Grade C')
}
}

findGrd(78);

document.write('<br>');
// Switch Statement

let day = 2;

switch(day){
    case 0:
        document.write('Monday');
    break;
    case 1:
        document.write('Tuesday');
    break;
    case 2:
        document.write('Wednesday');
    break;
    case 3:
        document.write('Thursday');
    break;
    case 4:
        document.write('Friday');
    break;
    case 5:
        document.write('Saturday');
    break;
    case 6:
        document.write('Sunday');
    break;
    default:
        document.write('Error');

}
document.write('<br>');
// 