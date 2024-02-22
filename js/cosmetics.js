const api = new XMLHttpRequest();

api.open('GET', 'https://fortnite-api.com/v2/cosmetics/br', true)
api.send()

api.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    let datos = JSON.parse(this.responseText).data;
    const grid = document.querySelector('#grid')

    for(let i in datos){
      if (datos[i].name != "null"){
        let div = document.createElement("DIV");
        let img = document.createElement("IMG");
        let ItemPag = document.createElement("a");

        ItemPag.href = `item.html?itemID=${datos[i].id}`;

        ItemPag.appendChild(img);

        div.appendChild(ItemPag);

        img.src = datos[i].images.smallIcon;


        img.className = "item-img"
        div.className = "cosmetics-grid"
        
        img.className = "item-img"

        if(datos[i].rarity.value == "common"){
            div.className = "rarity-common"
          }
          else if(datos[i].rarity.value == "uncommon"){
            div.className = "rarity-uncommon"
          }
          else if(datos[i].rarity.value == "rare"){
            div.className = "rarity-rare"
          }
          else if(datos[i].rarity.value == "epic"){
            div.className = "rarity-epic"
          }
          else if(datos[i].rarity.value == "legendary"){
            div.className = "rarity-legendary"
          }
          else if(datos[i].rarity.value == "shadow"){
            div.className = "rarity-shadow"
          }
          else if(datos[i].rarity.value == "marvel"){
            div.className = "rarity-marvel"
          }
          else if(datos[i].rarity.value == "icon"){
            div.className = "rarity-icon"
          }
          else if(datos[i].rarity.value == "gaminglegends"){
            div.className = "rarity-gaminglegends"
          }
          else if(datos[i].rarity.value == "dc"){
            div.className = "rarity-Dc"
          }
          else if(datos[i].rarity.value == "starwars"){
            div.className = "rarity-starwars"
          }
          else if(datos[i].rarity.value == "dark"){
            div.className = "rarity-Cube"
          }
          else if(datos[i].rarity.value == "frozen"){
            div.className = "rarity-frozen"
          }
          else if(datos[i].rarity.value == "slurp"){
            div.className = "rarity-slurp"
          }
          else if(datos[i].rarity.value == "lava"){
            div.className = "rarity-lava"
          }
          else{
            div.className = "rarity-common"
          }
          
          div.setAttribute('id', datos[i].id)
          grid.appendChild(div);}
      }
    }
  }