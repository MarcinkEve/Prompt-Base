import { copyToClipboard } from "./copyToClipboard.js";
import { deletePrompt } from "./deletePrompt.js";
import { promptTable } from "./promptTable.js";
import { updatePrompt } from "./updatePrompt.js";

export const creatingTableRows = () => {
  // ****************** Select from LS and render ******************
  const dataFromLS = JSON.parse(localStorage.getItem("prompts"));
  if (dataFromLS === null) {
    // alert("No data found...");
    const table = document.getElementById("prompt-table");
    if (table) {
      table.remove();
    }

    const container = document.getElementById("table-container");

    const message = document.createElement("h5");
    message.innerText = "No data found...";
    message.id = "message";
    container.appendChild(message);
  } else {
    const message = document.getElementById("message");
    if (message) {
      message.remove();
      promptTable();
    }

    //creating table rows with data and buttons
    const table = document.getElementById("prompt-table");

    const tableBody = document.createElement("tbody");
    table.appendChild(tableBody);

    dataFromLS.map(({ id, value }) => {
      let tableRow = document.createElement("tr");
      tableRow.id = `dataRow-${id}`;
      tableRow.className = "dataRow";
      tableBody.appendChild(tableRow);

      let tableData = document.createElement("td");
      tableData.setAttribute("data-id", id);
      tableData.innerText = value;
      tableRow.appendChild(tableData);

      let tableActions = document.createElement("td");
      tableActions.className = "tableActions";
      tableActions.innerHTML = `
        <button id=${id} class="update action-button"><i class="bi bi-pencil"></i></button>
        <button id=${id} class="delete action-button"><i class="bi bi-trash3"></i></button>
        <button id=${id} class="copy action-button"><i class="bi bi-clipboard"></i></button>
    `;
      tableRow.appendChild(tableActions);
    });
  }

  const updateButtons = document.querySelectorAll(".update");
  updateButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonId = parseInt(button.getAttribute("id"));

      updatePrompt(buttonId);
    });
  });

  const deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonId = parseInt(button.getAttribute("id"));

      deletePrompt(buttonId);
    });
  });

  const copyButtons = document.querySelectorAll(".copy");
  copyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonId = button.getAttribute("id");
      const promptField = document.querySelector(`[data-id="${buttonId}"]`);

      copyToClipboard(promptField);
    });
  });
};
