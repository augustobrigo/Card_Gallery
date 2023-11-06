window.addEventListener("load",inicio);

function inicio(){

    console.log("entro al inicio");

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            //Cogemos la lista y el div contenedor del DOM
            let contenedorIndices = document.querySelector(".carousel-indicators");
            let contenedorImagenes=document.querySelector(".carousel-inner");
            //Al hacer parse nos devuelve un objeto
            var arrayJson = JSON.parse(this.responseText);
            var nItems=String(arrayJson).length/4;
            arrayJson.forEach(function(fotoCamacho, posicion) {

                    //PARTE 1: LISTA OL
                //Creamos el elemento li de la lista para cada imagen
                let elemento = document.createElement("li");
                elemento.setAttribute("data-target", "#carouselId");
                elemento.setAttribute("data-slide-to", posicion);
                
                //Compruebo si es el primer li
                if(posicion == 0){
                    elemento.className = "active";
                }

                //Meto los li a la lista
                contenedorIndices.appendChild(elemento);

                    //PARTE 2: DIV DE LA IMAGEN
                //Creamos el div que  va a tener las clases y la imagen
                let caja = document.createElement("div");
                
                //Compruebo si la caja es el primer item del carousel
                if(posicion == 0){
                    caja.className = "carousel-item active";
                }else{
                    caja.className = "carousel-item";
                }

                    //PARTE 3: IMAGEN
                //Creamos la imagen y le damos atributos
                
                    let fila=document.createElement("row");
                 
                        let imag = document.createElement("img");
                        imag.setAttribute("src", fotoCamacho.imagen);
                       
                        imag.style = "width:100%;height:30vh;";
                         //crear texto para añadir nombre del empleado  
                        let nombre=document.createElement("span");
                        nombre.textContent=fotoCamacho.nombre;
                        
                        //Meto la imagen en la caja y la caja en el contenedor
                        caja.appendChild(imag);
                      //  caja.appendChild(nombre);
                        contenedorImagenes.appendChild(caja);
                    
                  
                
                let columna4=document.createElement("div");


                // <div class="col-lg-4">
            
                // <div class="equipo">
                
                // <div class="equipo_foto">
                // <img src="https://randomuser.me/api/portraits/women/17.jpg" class="img-fluid" />
                // <h3>Lola</h3>
                // <p>Web Designer</p>
                // </div>
                
                // <div class="equipo_texto">
                // <span>
                // Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
                // natoque penatibus et magnis dis parturient montes,
                // Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
                // natoque.
                // </span>
                // </div>
                
                // </div>
                // </div>

            );}
    };

    xhr.open("GET", "http://moralo.atwebpages.com/ajaxListar/getTodoPersonal.php", true);
    xhr.send();

}