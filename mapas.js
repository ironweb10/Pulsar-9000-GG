const api2 = new XMLHttpRequest();

api2.open('GET', 'https://fortniteapi.io/v1/maps/list', true)
api2.setRequestHeader("Authorization", "948e267e-802fca92-e9bb0f32-c68e8729")
api2.send()

api2.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    let datos = JSON.parse(this.responseText).maps;
    const grid = document.querySelector('#mapa')

    for(let i in datos){
      let div = document.createElement("DIV");
      let div2 = document.createElement("DIV");
      let divT = document.createElement("DIV");
      let img = document.createElement("IMG");
      // let patchVersion = document.createElement("P");

      div.appendChild(img);
      divT.appendChild(div2);
      divT.appendChild(div2);
      // div2.appendChild(patchVersion);

      // patchVersionText = document.createTextNode(datos[i].patchVersion);
      img.src = datos[i].url;

      // patchVersion.appendChild(patchVersionText);

      div.className = "div-map"
      div2.className = "div-map2"
      divT.className = "div-t"
      img.className = "img-map"
      // patchVersion.className = "title-map"
    
      divT.appendChild(div2);
      grid.appendChild(div);
      div.appendChild(divT);
    }
  }
}