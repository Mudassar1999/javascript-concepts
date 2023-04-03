function gradCalc() {
  let sum = 0;
  for (let i in arguments) {
    sum += arguments[i];
  }
  document.write(`Total Marks is: ${sum}`+ '<br>');
  let perc = sum/600 * 100;
  document.write(`Percentage is: ${perc}`+  '<br>')
  if(perc<=100 && perc >=90){
    document.write('Grade A')
  }else if(perc<=89 && perc >=80){
    document.write('Grade B')
  }else if(perc<=79 && perc >=70){
    document.write('Grade C')
  }else if(perc<=69 && perc >=60){
    document.write('Grade D')
  }else if(perc<=59 && perc >=50){
    document.write('Grade E')
  }else{
    document.write('Sorry, you  are Fail.')
  }
}
let subMarks = [67, 73, 98, 44, 34, 68];
gradCalc(...subMarks);
