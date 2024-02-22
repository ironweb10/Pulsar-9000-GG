const api = new XMLHttpRequest();

const parametros = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

let nameID = parametros.nameID;

api.open('GET', `https://fortnite-api.com/v2/stats/br/v2?name=${nameID}`, true)
api.setRequestHeader("Authorization", "f0ffa8be-d12f-4c9d-a531-31fba40f0312")
api.send()

api.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    let datos = JSON.parse(this.responseText);
    const statsdiv = document.querySelector('#stats')

        let div = document.createElement("DIV");
        let name = document.createElement("H1");
        let levelpass = document.createElement("P");
        let stats = document.createElement("P");
        let statsduo = document.createElement("P");
        
        div.appendChild(name);
        div.appendChild(levelpass);
        div.appendChild(stats);
        div.appendChild(statsduo);

        let nameText = document.createTextNode(datos.data.account.name);
        let levelpassText = document.createTextNode(datos.data.battlePass.level);
        let statsText = document.createTextNode(datos.data.stats.all.solo.wins);
        let statsduoText = document.createTextNode(datos.data.stats.all.duo.wins);

        name.appendChild(nameText);
        levelpass.appendChild(levelpassText);
        stats.appendChild(statsText);
        statsduo.appendChild(statsduoText);

        name.className = "item-title"
        levelpass.className = "item-levelpass"
        stats.className = "item-stats"
        statsduo.className = "item-statsduo"

        div.setAttribute('div', 'player');
        statsdiv.appendChild(div);
  }
}