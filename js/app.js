const api = new XMLHttpRequest();

api.open('GET', 'https://fortnite-api.com/v2/news/br?language=es-419', true)
api.send()

api.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    let datos = JSON.parse(this.responseText).data.motds;
    const grid = document.querySelector('#grid')

    for(let i in datos){
      let div = document.createElement("DIV");
      let img = document.createElement("IMG");
      let title = document.createElement("H2");
      let body = document.createElement("P");

      div.appendChild(img);
      div.appendChild(title);
      div.appendChild(body);

      titleText = document.createTextNode(datos[i].title);
      bodyText = document.createTextNode(datos[i].body);

      img.src = datos[i].image;
      title.appendChild(titleText);
      body.appendChild(bodyText);

      div.className = "div-noticias"
      
      grid.appendChild(div);
    }
  }
}