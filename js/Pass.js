const api = new XMLHttpRequest();

api.open('GET', 'https://fortniteapi.io/v2/battlepass?lang=en&season=current', true)
api.setRequestHeader("Authorization", "948e267e-802fca92-e9bb0f32-c68e8729")
api.send()

api.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    let datos = JSON.parse(this.responseText).rewards;
    const grid = document.querySelector('#grid')

    for(let i in datos){
      let div = document.createElement("DIV");
      let img = document.createElement("IMG");

      div.appendChild(img);

      img.src = datos[i].item.images.icon;
    

      img.className = "item-img"
        div.className = "cosmetics-grid"
        
        img.className = "item-img"

        if(datos[i].item.rarity.id == "Common"){
            div.className = "rarity-common"
          }
          else if(datos[i].item.rarity.id == "Uncommon"){
            div.className = "rarity-uncommon"
          }
          else if(datos[i].item.rarity.id == "Rare"){
            div.className = "rarity-Rare"
          }
          else if(datos[i].item.rarity.id == "Epic"){
            div.className = "rarity-epic"
          }
          else if(datos[i].item.rarity.id == "Legendary"){
            div.className = "rarity-legendary"
          }
          else if(datos[i].item.rarity.id == "shadow"){
            div.className = "rarity-shadow"
          }
          else if(datos[i].item.rarity.id == "marvel"){
            div.className = "rarity-marvel"
          }
          else if(datos[i].item.rarity.id == "icon"){
            div.className = "rarity-icon"
          }
          else if(datos[i].item.rarity.id == "gaminglegends"){
            div.className = "rarity-gaminglegends"
          }
          else if(datos[i].item.rarity.id == "dc"){
            div.className = "rarity-Dc"
          }
          else if(datos[i].item.rarity.id == "starwars"){
            div.className = "rarity-starwars"
          }
          else if(datos[i].item.rarity.id == "dark"){
            div.className = "rarity-Cube"
          }
          else if(datos[i].item.rarity.id == "frozen"){
            div.className = "rarity-frozen"
          }
          else if(datos[i].item.rarity.id == "slurp"){
            div.className = "rarity-slurp"
          }
          else if(datos[i].item.rarity.id == "lava"){
            div.className = "rarity-lava"
          }
          else{
            div.className = "rarity-common"
          }
      
      grid.appendChild(div);
    }
  }
}