const mostrador = document.querySelector('#mostrador');
const allBTNS = document.querySelector('.allBTNS');


allBTNS.addEventListener( 'click' , counter );

let value = 0;

function counter(e) {

    const btn = e.target.id;

    if(btn=='incremento'){
        value+=1;
    } else if(btn=='decremento'){
        value-=1;
    } else if (btn=='reset'){
        value = 0;
    }
    mostrador.textContent = value;

}
