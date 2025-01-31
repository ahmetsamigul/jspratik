const cardBody = document.querySelectorAll(".card-body")[1];

const newTitle = document.createElement("h2");
newTitle.className = "card-title";
newTitle.innerHTML = "Todo Listesi - Yeni Başlık"


cardBody.replaceChild(newTitle, cardBody.childNodes[1]);

console.log(todos);



