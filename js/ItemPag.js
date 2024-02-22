const api = new XMLHttpRequest();

const parametros = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

let itemID = parametros.itemID;

api.open('GET', `https://fortnite-api.com/v2/cosmetics/br/${itemID}?language=es-419`, true)
api.send()

api.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    let datos = JSON.parse(this.responseText).data;

        let div = document.createElement("DIV");
        let Itemimg = document.createElement("IMG");
        let info = document.querySelector('#tarjeta');
        let cos = document.querySelector('#cosmetic');
        let name = document.createElement("p");
        let description = document.createElement("p");
        let pieza = document.createElement("p");
        let id = document.createElement("p");
        
        div.appendChild(Itemimg);
        info.appendChild(name);
        info.appendChild(id);
        info.appendChild(description);
        info.appendChild(pieza);

        Itemimg.src = datos.images.icon;
        let nameText = document.createTextNode(datos.name);
        let idText = document.createTextNode(datos.id);
        let descriptionText = document.createTextNode(datos.description);
        let piezaText = document.createTextNode(datos.set.text);

        name.appendChild(nameText);
        id.appendChild(idText);
        description.appendChild(descriptionText);
        pieza.appendChild(piezaText);

        Itemimg.className = "item-img"
        div.className = "cosmetic"
        name.className = "item-title"
        description.className = "item-body"
        pieza.className = "item-body-2"
        id.className = "id"

        switch(datos.rarity.displayValue){
          case "Common":
            div.className = "rarity-common"
            break;
          case "Poco común":
            div.className = "rarity-uncommon"
            break;
          case "Raro":
            div.className = "rarity-rare"
            break;
          case "Épico":
            div.className = "rarity-epic"
            break;
          case "Legendario":
            div.className = "rarity-legendary"
            break;
          case "Serie de ídolos":
            div.className = "rarity-icon"
            break;
          case "Shadow":
            div.className = "rarity-shadow"
            break;
          case "SERIE DE MARVEL":
            div.className = "rarity-marvel"
            break;
          case "Serie de leyendas del juego":
            div.className = "rarity-gaminglegends"
            break;
          case "Serie de Lava":
            div.className = "rarity-lava"
            break;
          case "Saga Star Wars":
            div.className = "rarity-starwars"
            break;
          case "Serie congelada":
            div.className = "rarity-congelada"
            break;
          case "SERIE DE DC":
            div.className = "rarity-dc"
          break;
          case "Serie pegajosa":
            div.className = "rarity-slurp"
          break;

          default:
            div.className = "rarity-common"
        }

        // for (let a in datos.variants) {
        //   let tipoVariantesDiv = document.createElement("div");
        //   let tipoVariantesName = document.createElement("p");
        //   let tipoVariantesDivGridItems = document.createElement("div");

        //   tipoVariantesDiv.appendChild(tipoVariantesName);

        //   for (let b in datos.variants[a].options){
        //     let tipoVarianteElementImage = document.createElement("img");
        //     tipoVarianteElementImage.src = datos.variants[a].options[b].image;
        //     let variantCard = document.createElement("div");

        //     variantCard.className = `rarity-${datos.rarity.value}`
        //     tipoVariantesDiv.appendChild(tipoVarianteElementImage);
        //     tipoVariantesDiv.appendChild(variantCard);
        //     tipoVariantesDiv.className = "variantes";
        //   }
        //   document.body.appendChild(tipoVariantesDiv);
        // }

        div.setAttribute('id', datos.id)
        div.appendChild(Itemimg)
        cos.appendChild(div)
        document.title = datos.name;
      }
    }