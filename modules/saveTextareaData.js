import { promptModal } from "./promptModal.js";

export const saveTextareaData = () => {
  const textarea = document.querySelector(".textarea");
  const textareaValue = textarea.value;

  console.log(textareaValue);

  if (textareaValue.trim().length === 0) {
    alert("No data entered");
  } else {
    alert("Data saved succesfully");
    const modal = document.getElementById("prompt-modal");
    const selectOverlay = document.querySelector(".overlay");
    modal.remove();
    selectOverlay.remove();

    //creating table rows with data and buttons
    const table = document.getElementById("prompt-table");

    const tableBody = document.createElement("tbody");
    table.appendChild(tableBody);

    let tableRow = document.createElement("tr");
    // tableRow.id = `table-row${idFromInput}`;
    tableRow.className = "dataRow";
    tableBody.appendChild(tableRow);

    let tableData = document.createElement("td");
    // tableData.className = `tableData${i}`;
    tableData.innerText = textareaValue;
    tableRow.appendChild(tableData);

    let tableActions = document.createElement("td");
    tableActions.className = "tableActions";
    tableActions.innerHTML = `
    <button id="update" class="update action-button"><i class="bi bi-pencil"></i></button>
    <button id="delete" class="delete action-button"><i class="bi bi-trash3"></i></button>
    <button id="copy" class="copy action-button"><i class="bi bi-clipboard"></i></button>
    `;
    tableRow.appendChild(tableActions);
  }
};
