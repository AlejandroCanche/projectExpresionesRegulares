let modalUnion1 = document.getElementById('modalUnion1');
let flex1 = document.getElementById('flex1');
let abrir1 = document.getElementById('abrir1');
let cerrar1 = document.getElementById('close1');

abrir1.addEventListener('click', function(){
    modalUnion1.style.display = 'block';
});

cerrar1.addEventListener('click', function(){
    modalUnion1.style.display = 'none';
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flex1){
        modalUnion1.style.display = 'none';
    }
});



let modalUnion2 = document.getElementById('modalUnion2');
let flex2 = document.getElementById('flex2');
let abrir2 = document.getElementById('abrir2');
let cerrar2 = document.getElementById('close2');

abrir2.addEventListener('click', function(){
    modalUnion2.style.display = 'block';
});

cerrar2.addEventListener('click', function(){
    modalUnion2.style.display = 'none';
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flex2){
        modalUnion2.style.display = 'none';
    }
});



let modalUnion3 = document.getElementById('modalUnion3');
let flex3 = document.getElementById('flex3');
let abrir3 = document.getElementById('abrir3');
let cerrar3 = document.getElementById('close3');

abrir3.addEventListener('click', function(){
    modalUnion3.style.display = 'block';
});

cerrar3.addEventListener('click', function(){
    modalUnion3.style.display = 'none';
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flex3){
        modalUnion3.style.display = 'none';
    }
});



let modalConcatenacion = document.getElementById('modalConcatenacion');
let flex4 = document.getElementById('flex4');
let abrir4 = document.getElementById('abrir4');
let cerrar4 = document.getElementById('close4');

abrir4.addEventListener('click', function(){
    modalConcatenacion.style.display = 'block';
});

cerrar4.addEventListener('click', function(){
    modalConcatenacion.style.display = 'none';
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flex4){
        modalConcatenacion.style.display = 'none';
    }
});



let modalCierreEstrella = document.getElementById('modalCierreEstrella');
let flex5 = document.getElementById('flex5');
let abrir5 = document.getElementById('abrir5');
let cerrar5 = document.getElementById('close5');

abrir5.addEventListener('click', function(){
    modalCierreEstrella.style.display = 'block';
});

cerrar5.addEventListener('click', function(){
    modalCierreEstrella.style.display = 'none';
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flex5){
        modalCierreEstrella.style.display = 'none';
    }
});



let modalPrecedencia = document.getElementById('modalPrecedencia');
let flex6 = document.getElementById('flex6');
let abrir6 = document.getElementById('abrir6');
let cerrar6 = document.getElementById('close6');

abrir6.addEventListener('click', function(){
    modalPrecedencia.style.display = 'block';
});

cerrar6.addEventListener('click', function(){
    modalPrecedencia.style.display = 'none';
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flex6){
        modalPrecedencia.style.display = 'none';
    }
});



let modalCompletez1 = document.getElementById('modalCompletez1');
let flex7 = document.getElementById('flex7');
let abrir7 = document.getElementById('abrir7');
let cerrar7 = document.getElementById('close7');

abrir7.addEventListener('click', function(){
    modalCompletez1.style.display = 'block';
});

cerrar7.addEventListener('click', function(){
    modalCompletez1.style.display = 'none';
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flex7){
        modalCompletez1.style.display = 'none';
    }
});



let modalCompletez2 = document.getElementById('modalCompletez2');
let flex8 = document.getElementById('flex8');
let abrir8 = document.getElementById('abrir8');
let cerrar8 = document.getElementById('close8');

abrir8.addEventListener('click', function(){
    modalCompletez2.style.display = 'block';
});

cerrar8.addEventListener('click', function(){
    modalCompletez2.style.display = 'none';
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flex8){
        modalCompletez2.style.display = 'none';
    }
});



let modalCorreccion= document.getElementById('modalCorreccion');
let flex9 = document.getElementById('flex9');
let abrir9 = document.getElementById('abrir9');
let cerrar9 = document.getElementById('close9');

abrir9.addEventListener('click', function(){
    modalCorreccion.style.display = 'block';
});

cerrar9.addEventListener('click', function(){
    modalCorreccion.style.display = 'none';
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flex9){
        modalCorreccion.style.display = 'none';
    }
});