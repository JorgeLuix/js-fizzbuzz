const totalBox = 100;

const gridd = document.getElementById('gridd');

for (let i = 1; i <= totalBox; i++) {
    const lightbox = (i % 2 === 0) ? 'light' : '';
    /*if ((i % 3 === 0) && (i % 5 === 0)) {
        yellowbox = 
    }*/
    gridd.innerHTML += 
     `<div class="squaresmall ">
             <div class="contenuto d-flex justify-content-center 
                align-items-center border rounded-2 ${lightbox}">
                ${i} 
            </div>
        </div>`;
 }