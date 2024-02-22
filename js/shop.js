const api = new XMLHttpRequest();

api.open('GET', 'https://fortniteapi.io/v2/shop?lang=es-419', true)
api.setRequestHeader("Authorization", "948e267e-802fca92-e9bb0f32-c68e8729")
api.send()

api.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    let datos = JSON.parse(this.responseText).shop;
    const grid = document.querySelector('#grid');

    for(let i in datos){
      let div = document.createElement("DIV");
      let img = document.createElement("IMG");
      let pavo = document.createElement("IMG");
      let name = document.createElement("P");
      let price = document.createElement("P");
      let ItemPag = document.createElement("a");

      ItemPag.href = `item.html?itemID=${datos[i].mainId}`;

      ItemPag.appendChild(img);

      div.appendChild(ItemPag);

      price.appendChild(pavo);
      div.appendChild(name);
      div.appendChild(price);
      
      let priceText = document.createTextNode(datos[i].price.finalPrice);
      let nameText = document.createTextNode(datos[i].displayName);


      img.src = datos[i].displayAssets[0].background;
      pavo.src = "https://fortnite-api.com/images/vbuck.png"

      name.appendChild(nameText);
      price.appendChild(priceText);

      img.className = "item-img"
      div.className = "div-shop"
      name.className = "name-cosmetic"
      pavo.className = "pavos-img"
      
      if(datos[i].rarity.id == "Common"){
        div.className = "rarity-common"
      }
      else if(datos[i].rarity.id == "Uncommon"){
        div.className = "rarity-uncommon"
      }
      else if(datos[i].rarity.id == "Rare"){
        div.className = "rarity-rare"
      }
      else if(datos[i].rarity.id == "Epic"){
        div.className = "rarity-epic"
      }
      else if(datos[i].rarity.id == "Legendary"){
        div.className = "rarity-legendary"
      }
      else if(datos[i].rarity.id == "shadow"){
        div.className = "rarity-shadow"
      }
      else if(datos[i].rarity.id == "marvel"){
        div.className = "rarity-marvel"
      }
      else if(datos[i].rarity.id == "icon"){
        div.className = "rarity-icon"
      }
      else if(datos[i].rarity.id == "gaminglegends"){
        div.className = "rarity-gaminglegends"
      }
      else{
        div.className = "rarity-common"
      }
      
      div.setAttribute('id', i)
      grid.appendChild(div);
    }
  }
}