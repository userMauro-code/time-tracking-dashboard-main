// fetch('/data.json').then((response) => {
//     if(!response.ok)
//     return console.log('oops! something went wrong.');

//     return response.json();
// }).then((data) => {
//     console.log(data)
// });

let json;
const buttons = document.querySelectorAll(".box__botton button"); 

fetch('/data.json')
    .then((response) => response.json())
    .then((data) => {
        // console.log(data);
        json = data;
        updateUI(data, "daily");
    });

function updateUI(data, timeframe) {
    const cards = document.querySelectorAll(".card")
    // console.log("voy a actualizar la UI con: ", timeframe);

    data.forEach((item, index)=> {
        const currentE1 = cards[index].querySelector(".hrs");
        const previusE1 = cards[index].querySelector(".previo");

        // console.log(item.title, item.timeframes[timeframe]);

        currentE1.textContent = `${item.timeframes[timeframe].current} hrs`;
        previusE1.textContent = `Previus - ${item.timeframes[timeframe].previous} hrs`;
    });
};


// captura de boton ---------------------

buttons.forEach(button  => {
    button.addEventListener('click', (event) => {
    //    console.log(`hiciste click en el boton ${button.textContent}`); 
    const timeframe = event.target.dataset.time;
    // console.log("cambiar vista a ", timeframe);

    updateUI(json, timeframe)
    });
    
});
