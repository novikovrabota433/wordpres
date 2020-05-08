const btn = document.getElementById('read');
btn.addEventListener('click', function() {
    const input = document.getElementById('file');
    const file = input.files[0];

    if(!file) {
        const pole = document.getElementById('read');
        const pole1 = document.getElementById('error');
            pole.setAttribute("style", "background-color: coral");
            pole1.setAttribute("style", "border: solid rgb(255, 0, 0) 1px");
            const div1 = document.getElementById('results2');
            div1.innerText = '';
            const div = document.getElementById('results');
            div.innerText = '';
    }
    if(file) {
        const pole = document.getElementById('read');
        const pole1 = document.getElementById('error');
            pole.setAttribute("style", "background-color: white");
            pole1.setAttribute("style", "border: none");
            const read = document.getElementById('read');
            read.setAttribute("style", "background-color: green");
    }

    const reader = new FileReader();
     reader.onload = () => {
         const result = reader.result;
         const div = document.getElementById('results');
           div.innerText = `Length: ${result.length}; Words: ${result.split(' ').length}`;
           const div1 = document.getElementById('results2');
            div1.innerText = '';
           var allowed = /\w/i;

// собираем информацию :
var results = Array.prototype.reduce.call(result, function (data, letter) {

    if (allowed.test(letter)) {
    
        //letter = letter.toLowerCase();
    
        if (data[letter] === undefined) {
            data[letter] = 0;
        }
    
        data[letter] += 1;
        
    }
    
    return data;

}, {});


// выводим:
for (var letter in results) {
    div1.insertAdjacentHTML('beforeend', `<div><div>Символ</div> <div>${letter}</div> <div>повторяется</div> <div>${results[letter]}</div> <div>раз</div></p>`);
}


// ПОЧЕМУ ТАК НЕ РАБОТАЕТ НЕ ПОНИМАЮ!!!! // ПОЧЕМУ ТАК НЕ РАБОТАЕТ НЕ ПОНИМАЮ!!!! // ПОЧЕМУ ТАК НЕ РАБОТАЕТ НЕ ПОНИМАЮ!!!!
document.addEventListener('DOMContentLoaded', () => {

let trs = document.querySelectorAll('#results2 div');
 let table = document.getElementById('results2');
 let sorted = [...trs].sort(function(a, b) {
     if (a.children[3].innerHTML >= b.children[3].innerHTML) {
        return 1;
     }else {
        return -1;
     }
 });
 table.innerHTML = '';

 for (let div of sorted) {
     table.appendChild(div)
 }

})

// ПОЧЕМУ ТАК НЕ РАБОТАЕТ НЕ ПОНИМАЮ!!!! // ПОЧЕМУ ТАК НЕ РАБОТАЕТ НЕ ПОНИМАЮ!!!! // ПОЧЕМУ ТАК НЕ РАБОТАЕТ НЕ ПОНИМАЮ!!!!

}
reader.readAsText(file);

});