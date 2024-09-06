onload = () => {

    Swal.fire({
      imageUrl: "../img/dogFofo.jpg",
      imageHeight: 250,
      imageAlt: "A tall image",
      text: "Hehehe Não pensei que chegaria até aqui, aceite isso:"
    });

    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };