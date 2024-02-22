const api = new XMLHttpRequest();

api.open('GET', 'https://fortnite-api.com/v2/cosmetics/br/new?lang=es-419', true)
api.send()

api.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    let datos = JSON.parse(this.responseText).data.items;
    const grid = document.querySelector('#grid')

    for(let i in datos){
      if (datos[i].name != "null"){
        let div = document.createElement("DIV");
        let img = document.createElement("IMG");
        let ItemPag = document.createElement("a");

        ItemPag.href = `item.html?itemID=${datos[i].id}`;

        ItemPag.appendChild(img);

        div.appendChild(ItemPag);

        if (datos[i].images.featured){
          img.src = datos[i].images.featured;
        } else{
          img.src = datos[i].images.icon;
        }

        img.className = "item-img"
        div.className = "cosmetics-grid"
        
        img.className = "item-img"

        switch(datos[i].rarity.displayValue){
          case "Common":
            div.className = "rarity-common"
            break;
          case "Uncommon":
            div.className = "rarity-uncommon"
            break;
          case "Rare":
            div.className = "rarity-rare"
            break;
          case "Epic":
            div.className = "rarity-epic"
            break;
          case "Legendary":
            div.className = "rarity-legendary"
            break;
          case "Icon Series":
            div.className = "rarity-icon"
            break;
          case "Shadow":
            div.className = "rarity-shadow"
            break;
          case "MARVEL SERIES":
            div.className = "rarity-marvel"
            break;
          case "Gaminglegends":
            div.className = "rarity-gaminglegends"
            break;
          case "Lava Series":
            div.className = "rarity-lava"
            break;
          case "Star Wars Series":
            div.className = "rarity-starwars"
            break;

          default:
            div.className = "rarity-common"
        }






        // if(datos[i].rarity.displayValue == "Common"){
        //   div.className = "rarity-common"
        // }
        // else if(datos[i].rarity.displayValue == "Uncommon"){
        //   div.className = "rarity-uncommon"
        // }
        // else if(datos[i].rarity.displayValue == "Rare"){
        //   div.className = "rarity-rare"
        // }
        // else if(datos[i].rarity.displayValue == "Epic"){
        //   div.className = "rarity-epic"
        // }
        // else if(datos[i].rarity.displayValue == "Legendary"){
        //   div.className = "rarity-legendary"
        // }
        // else if(datos[i].rarity.displayValue == "Shadow"){
        //   div.className = "rarity-shadow"
        // }
        // else if(datos[i].rarity.displayValue == "MARVEL SERIES"){
        //   div.className = "rarity-marvel"
        // }
        // else if(datos[i].rarity.displayValue == "Icon Series"){
        //   div.className = "rarity-icon"
        // }
        // else if(datos[i].rarity.displayValue == "Gaminglegends"){
        //   div.className = "rarity-gaminglegends"
        // }
        // else if(datos[i].rarity.displayValue == "Lava Series"){
        //   div.className = "rarity-lava"
        // }
        // else{
        //   div.className = "rarity-common"
        // }
        
        div.setAttribute('id', datos[i].id)
        grid.appendChild(div);}
    }
  }
}