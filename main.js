//alert("Hello JS Marathone!");

// 2.1
const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function countLettA (myText) {
  let countA=0;
   for (let i = 0; i < myText.length; i++) {
    countA += myText.charAt(i) === 'а';
  }
  return countA;
}

function getRow(firstRow, secondRow) {
  return ((countLettA(firstRow) > countLettA(secondRow)) ? firstRow : secondRow); 
}

console.log(getRow(firstRow, secondRow));

// 2.2
function formattedPhone(phone) {
  let formattPhone = '';
  for (let i = 0; i < phone.length; i++) {    
    formattPhone += phone.charAt(i);
    if (i === 1) formattPhone += ' (';
    if (i === 4) formattPhone += ') ';
    if (i === 7) formattPhone += '-';
    if (i === 9) formattPhone += '-';
  }
  return formattPhone;
}

console.log(formattedPhone('+71234567890')); // +7 (123) 456-78-90