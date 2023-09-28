let openbtn=document.querySelector('#open-btn');
let modalcontainer=document.querySelector('#modal-container');
let closebtn=document.querySelector('#close-btn');

openbtn.addEventListener('click',function(){
    modalcontainer.style.display='block';
});

closebtn.addEventListener('click',function(){
    modalcontainer.style.display='none';
});