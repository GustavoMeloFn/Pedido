let button = document.getElementById('no');
let height = window.innerHeight - 50;
let width = window.innerWidth - 50;
let cont = 0;
button.addEventListener('click', function () {
            
    if(cont == 0){
        alert('Hahaha, botão errado bobinha 🤣, mas vou te dar mais uma chance!');
    }else if(cont == 1){
        alert('...Hahaha 🤨, errou de novo né? sem problemas');
    }else if(cont == 2){
        alert('🥲 Pode tentar o outro...');
    }else{
        Swal.fire({
            imageUrl: "img/sad.jpg",
            imageHeight: 200,
            imageAlt: "A tall image",
            text: "É, nem queria mesmo..."
        });
    }

    cont = cont + 1;
            
    button.style.position = "absolute";
    button.style.top = Math.random() * height + "px";
    button.style.left = Math.random() * width + "px";
});