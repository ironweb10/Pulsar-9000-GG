const api = new XMLHttpRequest();

api.open('GET', 'https://fortniteapi.io/v2/crew?lang=es-419', true)
api.setRequestHeader("Authorization", "948e267e-802fca92-e9bb0f32-c68e8729")
api.send()

api.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    let datos = JSON.parse(this.responseText).currentCrew.rewards;
    const grid = document.querySelector('#grid')

    for(let i in datos){
      let div = document.createElement("DIV");
      let img = document.createElement("IMG");
      let ItemPag = document.createElement("a");

      ItemPag.href = `item.html?itemID=${datos[i].item.id}`;

      ItemPag.appendChild(img);

      div.appendChild(ItemPag);

      img.src = datos[i].item.images.icon;

      img.className = "item-img"
      div.className = "div-crew"
      
      if(datos[i].item.rarity.id == "Common"){
        div.className = "rarity-common"
      }
      else if(datos[i].item.rarity.id == "Uncommon"){
        div.className = "rarity-uncommon"
      }
      else if(datos[i].item.rarity.id == "Rare"){
        div.className = "rarity-rare"
      }
      else if(datos[i].item.rarity.id == "Epic"){
        div.className = "rarity-epic"
      }
      else if(datos[i].item.rarity.id == "Legendary"){
        div.className = "rarity-legendary"
      }
      else if(datos[i].item.rarity.id == "Shadow"){
        div.className = "rarity-shadow"
      }
      else if(datos[i].item.rarity.id == "Marvel"){
        div.className = "rarity-marvel"
      }
      else if(datos[i].item.rarity.id == "icon"){
        div.className = "rarity-icon"
      }
      else if(datos[i].item.rarity.id == "gaminglegends"){
        div.className = "rarity-gaminglegends"
      }
      else{
        div.className = "rarity-common"
      }
      
      div.setAttribute('id', i)
      grid.appendChild(div);}
    }
}