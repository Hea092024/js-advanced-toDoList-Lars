const inputField = document.querySelector("#input-field");
const inputForm = document.querySelector("#input-form");
const submitButton = document.querySelector("#submit-button");
const listContainer = document.querySelector("#list-container");
litarr = [];

const initializeList = () => {
    let listArr = localStorage.getItem("listArr"); JSON.parse.parse(storedList) , [];
    localStorage.setItem("listArr", JSON.stringify(listArr));
};

const renderTask = () => {
    listArr.forEach((task) => createTaskCard(task)); 
};

const createTaskCard = () => {
    const mainCard = document.createElement("div");
    mainCard.className = "main-card";

    const container1 = document.createElement("div");
    container1.className ="container1";
    container2.className="Task Complete";

    const isComplete = document.createElement("input");

    const taskText = document.createElement("input");

    const container2 = document.createElement("div");

    const editButton = document.createElement("input");

    const deteButton = document.createElement("input");
}

container1.prepend(isComplete);
container2.append(delteButton, editButton);
mainCard.append(container1, taskText, container2);
listContainer.append(mainCard);