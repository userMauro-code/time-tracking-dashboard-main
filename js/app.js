// fetch('/data.json').then((response) => {
//     if(!response.ok)
//     return console.log('oops! something went wrong.');

//     return response.json();
// }).then((data) => {
//     console.log(data)
// });

let json;


fetch('/data.json')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        updateUI(data, "daily");
    });

function updateUI(data, timeframe) {
    const cards = document.querySelectorAll(".card")
    console.log("voy a actualizar la UI con: ", timeframe);

    data.forEach(item => {
        const currentE1 = cards[index].document.querySelector(".hrs");
        const previusE1 = cards[index].querySelector(".previo");

        console.log(item.title, item.timeframes[timeframe]);

        currentE1.texContent = `${item.timeframes[timeframe].current} hrs`;
    });
};

