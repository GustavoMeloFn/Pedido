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
            text: "É, nem queria mesmo...",
            confirmButtonText: "Não mesmo.",
            confirmButtonColor: '#d33',
            showCancelButton: true,
            cancelButtonText: "Mudei de ideia",
            cancelButtonColor: '#3085d6',
            allowOutsideClick: false
          }).then((result) => {
            if (result.value) {
              window.location.href = "https://www.youtube.com/watch?v=z-weWuwFmKM&list=RDMM-YOOjdk6cpQ&index=17";
            }
          });
    }

    cont = cont + 1;
            
    button.style.position = "absolute";
    button.style.top = Math.random() * height + "px";
    button.style.left = Math.random() * width + "px";
});