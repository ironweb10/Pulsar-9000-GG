const api = new XMLHttpRequest();

api.open('GET', 'https://fortniteapi.io/v1/loot/fish?lang=es-419', true)
api.setRequestHeader("Authorization", "948e267e-802fca92-e9bb0f32-c68e8729")
api.send()

api.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    let datos = JSON.parse(this.responseText).fish;
    const grid = document.querySelector('#grid')

    for(let i in datos){
      let div = document.createElement("DIV");
      let img = document.createElement("IMG");
      let title = document.createElement("P");
      let description = document.createElement("P");

      div.appendChild(img);
      div.appendChild(title);
      div.appendChild(description);

      titleText = document.createTextNode(datos[i].name);
      descriptionText = document.createTextNode(datos[i].description);
      img.src = datos[i].image;

      title.appendChild(titleText);
      description.appendChild(descriptionText);

      div.className = "div-noticias"
      description.className = "description"
      title.className = "title"
      
      grid.appendChild(div);
    }
  }
}