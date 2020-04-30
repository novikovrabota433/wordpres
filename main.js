function renderList(SetList) {
    const ul = document.getElementById('continents');
    SetList.forEach(Set => {
        const h1 = document.createElement('div');
        h1.setAttribute("id", "main");
        h1.insertAdjacentHTML('beforeend', `
            <h1>${Set.id}</h1>
            <h1 id = "mainn">${Set.name}</h1>
            <h1>${Set.state}</h1>
            <h1>${Set.descript}</h1>
            <h1>${Set.jsonadress}</h1>
            <br>
            <br>
        `);

        ul.appendChild(h1);

    })
}


function renderList1(SetList) {
    const ul = document.querySelectorAll("#mainn")[0];
    ul.addEventListener("click", function(){
    SetList.forEach(country => {
        const h2 = document.createElement('div');
        h2.setAttribute("id", "sub_1");
        h2.insertAdjacentHTML('beforeend', `
        <li>${country.adress}</li>
        <li>${country.srednee}</li>
        <li>${country.square}</li>
        <li>${country.build}</li>
        <br>
        <br>
        `)

    ul.appendChild(h2);

    const h = document.createElement('div');
    let c = Object.values(SetList).reduce((a,v) => a.square + v.square)
    //let cc = c/ country.srednee.length;
    //let ccc = Object.values(SetList).reduce((a,v) => a.srednee + v.srednee)
    h.insertAdjacentHTML('afterbegin', `
    <li>(${country.id.length})</li>
    <li>(${country.srednee.length})</li>
        <li>(${c})</li>
        `)
    ul.appendChild(h);
        })
    })     
}

function renderList2(SetList) {
    const ul = document.querySelectorAll("#mainn")[1];
    ul.addEventListener("click", function(){
    SetList.forEach(country => {
        const h3 = document.createElement('div');
        h3.setAttribute("id", "sub_2");
        h3.insertAdjacentHTML('beforeend', `
            <li>${country.adress}</li>
            <li>${country.srednee}</li>
            <li>${country.square}</li>
            <li>${country.build}</li>
            <br>
            <br>
        `)

    ul.appendChild(h3);
        })
    })
}


function loadJSON() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'main.json', true);
    xhr.send(null);
    xhr.onload = () => {
        console.log(xhr.responseText);
        const data = JSON.parse(xhr.responseText);
        renderList(data);
    }
}

loadJSON();

function loadJSON1() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'Europt.json', true);
    xhr.send(null);
    xhr.onload = () => {
        console.log(xhr.responseText);
        const data = JSON.parse(xhr.responseText);
        renderList1(data);
    }
}

loadJSON1();

function loadJSON2() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'Rubleskiy.json', true);
    xhr.send(null);
    xhr.onload = () => {
        console.log(xhr.responseText);
        const data = JSON.parse(xhr.responseText);
        renderList2(data);
    }
}

loadJSON2();