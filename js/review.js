const reviews = [
    {
        id: 1,
        name: "Nancy",
        text: "“My first time trying Outlaw Burger. It won’t be my last! OMG, best burger ever! I actually ate the whole burger! Food was still hot, delicious. Thank you!”",
    },
    {
        id: 2,
        name: "Janelle",
        text: "“Outlaw Burger has some really tasty food, with good portions. The burger was juicy and served on a crisp grilled bun. The ordering and delivery processes were so easy to navigate, too!”",
    },
    {
        id: 3,
        name: "Isaak",
        text: "“The fries were really good and the burger was exceptional... will order from here again!”",
    },
    {
        id: 4,
        name: "Bobbi",
        text: "“First time trying this place and it was by far the best burger my husband and I have ever had!”",
    }
];
    
    
const author = document.querySelector(".review__person");
const info = document.querySelector(".review__text");
const nextBtn = document.querySelector(".review__next-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
    const item = reviews[currentItem];
    author.textContent = item.name;
    info.textContent = item.text;
});

function showPerson(person) {
    const item = reviews[person];
    author.textContent = item.name;
    info.textContent = item.text;
}

if(nextBtn) {
    nextBtn.addEventListener("click", () => {
        currentItem++;
        if (currentItem > reviews.length - 1) {
            currentItem = 0;
        }
        showPerson(currentItem);
    });
}