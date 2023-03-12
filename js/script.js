const totalBox = 100;

const gridd = document.getElementById('gridd');


for (let square = 1; square <= totalBox; square++) {
    let testo = square;
    let colorbzz = '';
    let colorfzz = '';
    let colorfbuzz = '';
    if ( square % 15 === 0 ) {
        testo = 'fizzbuzz';
        colorfbuzz = 'fbuzz';

    }
    else if ( square % 3 === 0 ) {
        testo = 'fizz';
        colorfzz = 'fzz';
    }
    else if (square % 5 === 0 ){
        testo = 'buzz';
       colorbzz = 'bzz';
    }
   
     gridd.innerHTML += 
     `<div class="squaresmall ">
             <div class="contenuto d-flex justify-content-center 
                align-items-center rounded-2  ${colorbzz} ${colorfzz} ${colorfbuzz}">
                ${testo}
            </div>
        </div>`;
   
 }