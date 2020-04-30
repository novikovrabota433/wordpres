const btn = document.getElementById('start');
btn.addEventListener('click', function() {
    const input = document.getElementById('name').value;
    const input1 = document.getElementById('city').value;
        
const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://jobs.github.com/positions.json?description=${input}&location=${input1}`, true);
    xhr.send(null);
    xhr.onload = () => {
        const data = JSON.parse(xhr.responseText);
        console.log(data);
        renderList(data);
    }

    function renderList(SetList) {
        const ul = document.getElementById('results');
        ul.innerHTML = "";
        SetList.forEach(Set => {
            const h1 = document.createElement('div');
            h1.setAttribute("id", "main");
            h1.insertAdjacentHTML('beforeend', `
            <div>
                <h1>${Set.company}</h1>
            </div>
            <div id='all'>
                <div id='main1'>
                    <p>${Set.description}</p>
                    <p>${Set.how_to_apply}</p>
                </div>
                <div id='main2'>
                    <p>${Set.created_at}</p>
                    <img src="${Set.company_logo}">
                    <p>${Set.type}</p>
                    <p>${Set.company_url}</p>
                    <p>${Set.location}</p>
                    <p>${Set.id}</p>
                    <p>${Set.url}</p>
                </div>
            </div>
                <br>
                <br>
                <hr>
            `);
    
            ul.appendChild(h1);
    
        })
    }

})