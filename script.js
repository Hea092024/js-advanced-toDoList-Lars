const inputField = document.querySelector("#input-field");
const inputForm = document.querySelector("#input-form");
const submitButton = document.querySelector("#submit-button");
const listContainer = document.querySelector("#list-container");
litarr = [];

const initializeList = () => {
    let listArr = localStorage.getItem("listArr"); ? JSON.parse.parse(storedList) : [];
    localStorage.setItem("listArr", JSON.stringify(listArr));
};

const renderTask = () => {
    listArr.forEach((task) => createTaskCard(task)); 
};

const createTaskCard = () => {
    const mainCard = document.createElement("div");

    const container1 = document.createElement("div");

    const isComplete = document.createElement("input");

    const taskText = document.createElement("input");

    const container2 = document.createElement("div");

    const editButton = document.createElement("input");

    const deteButton = document.createElement("input");
}
