const main = document.getElementById('main');
const coll = document.getElementsByClassName("collapsible");
const contenido =document.getElementById('content');

let i;


listaMotos = [];

const restarproducto =(e) => {
  let motoresta = e.target.getAttribute('id')
  listaMotos.splice(parseInt(listaMotos.indexOf(motoresta)),1)
  mostrar_carrito();
}
const eliminarproducto = (e) => {
  let sinMoto = e.target.getAttribute('id');

  listaMotos = listaMotos.filter((id) => {
    return id !== sinMoto
  })
  mostrar_carrito();
}

function create_cards() { 
  //este for loq ue hace es definir cuantas cartas van a haber 
  //pasando el parametro en el parentesis al final
  products.forEach((motos) => {
    //el forEach es el que me lo repite cada que creo algo en 
    const card_render = document.createElement('div');
    const header_card = document.createElement('div');
    const h2_title = document.createElement('h2');
    const card_main = document.createElement('div');
    const div_image = document.createElement('div');
    const image_card = document.createElement('img');
    const btn_card = document.createElement('button');
    const h4_price = document.createElement('h4')
    const h4_model = document.createElement('h4')
    const h4_km = document.createElement('h4')
    
    card_render.classList.add('card');
    header_card.classList.add('header-card');
    h2_title.setAttribute('id', 'h2');
    h2_title.textContent = motos.name;
    card_main.classList.add('card-main');
    div_image.classList.add('card-image');
    image_card.src = motos.img;
// eta linea creo que es la que le da la imagen que intentare cambiar
// dsde el archivo products
    image_card.setAttribute('alt','Image Card');
    image_card.classList.add('img'); 
    btn_card.setAttribute('id',motos.id);    
    btn_card.classList.add('btn-card');
    btn_card.textContent = 'DEUDA';
    h4_price.setAttribute('id', 'h4');
    //NO SEA PENDEJO Y NO SE TE OLVIDE QUE ESA ID ES PARA QUE SE RECONOZCA DESDE EL CSS
    h4_price.textContent = motos.price + " MILLONES";
    h4_model.setAttribute('id', 'h4');
    h4_model.textContent = motos.model;
    h4_km.setAttribute('id', 'h4');
    h4_km.textContent = motos.km + " Km";

    btn_card.addEventListener('click', endeudarse);
    // NO ENTIENDO PORQUE INTERRUMPER EL FOR
    //ya no interrumpe el for
    div_image.appendChild(image_card);
    header_card.appendChild(h2_title);
    card_render.appendChild(header_card);
    card_render.appendChild(card_main);
    card_render.appendChild(div_image);
    card_render.appendChild(h4_price);
    card_render.appendChild(h4_model);
    card_render.appendChild(h4_km);
    card_render.appendChild(btn_card);
    main.appendChild(card_render);
  })
}

const mostrar_carrito = () => {
  contenido.innerHTML = '';
  const carro = [...new Set(listaMotos)];
  // console.log(carro);
  // hay que estar demaciado pendiente de esta parte

  carro.forEach(motosuno => {
    const todas_motos = products.filter(products => {
      return products.id === parseInt(motosuno);
    })

    let contador =0;

    for (let id of listaMotos){
      if(id === motosuno){
        contador++;
      }
    }
    
    console.log(todas_motos);
        const card_producto_cart = document.createElement('div');
        console.log(card_producto_cart);
        const name = document.createElement('p');
        const price = document.createElement('p');
        const cont = document.createElement('p');
        const btn_suma = document.createElement('button');
        const btn_resta = document.createElement('button');
        const btn_eliminar = document.createElement('button');
        btn_suma.setAttribute('id', todas_motos[0].id);
        btn_resta.setAttribute('id',todas_motos[0].id);
        btn_eliminar.setAttribute('id',todas_motos[0].id);

        name.textContent = todas_motos[0].name;
        // name.textContent = products.id;
        price.textContent = todas_motos[0].price;
        btn_suma.textContent = '+';
        btn_resta.textContent = '-'
        btn_eliminar.textContent = 'X';
        cont.textContent = contador;

        card_producto_cart.classList.add('card_producto')
        card_producto_cart.appendChild(name);
        card_producto_cart.appendChild(price);
        card_producto_cart.appendChild(cont)
        card_producto_cart.appendChild(btn_suma);
        card_producto_cart.appendChild(btn_resta);
        card_producto_cart.appendChild(btn_eliminar);

        btn_eliminar.addEventListener('click', eliminarproducto)
        btn_resta.addEventListener('click', restarproducto)
        btn_suma.addEventListener('click',endeudarse)

        contenido.appendChild(card_producto_cart);
        
  }
    
    )


}











function endeudarse(hola){
  // console.log(listaMotos);
  // listaMotos.push(event.target.getAttribute('id'))
  // console.log(listaMotos.push(event.target.getAttribute('id')));
  listaMotos.push(hola.target.getAttribute('id'));
  // console.log(contenido);
  mostrar_carrito();
  
}
function colapsar(){
  // siendo sncero no tengo ni la menor idea de como funciona esta funcion, la saque de https://www.w3schools.com/howto/howto_js_collapsible.asp
  // pero lo que entendi es que usa el largor de coll que es la funcion de arriba que sale de uan clase en el html llamada collapsible
  //  coll[i].addEventListener("click", function() no se bien que hace el coll[i] pero se que con un click activara toggle con el class list
  // y lo demas no se bien, se que 
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
}



colapsar();

create_cards();


