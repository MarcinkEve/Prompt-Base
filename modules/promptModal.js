import { creatingTableRows } from "./creatingTableRows.js";
import { savePrompt } from "./savePrompt.js";

export const promptModal = () => {
  const container = document.getElementById("table-container");

  const createModal = document.createElement("section");
  createModal.className = "prompt-modal";
  createModal.id = "prompt-modal";
  container.appendChild(createModal);

  createModal.innerHTML = `
    <div class="prompt-modal-top">
        <div class="prompt-modal-header">
            <h3 class="prompt-modal-header-title">New Prompt</h3>
            <button id="prompt-modal-close-button" class="prompt-modal-close-button close-modal">⨉</button>
        </div>
    </div>
    <div class="form-floating mt-4 mb-4">
        <textarea class="form-control textarea" id="floatingTextarea2"></textarea>
    </div>
    <div class="prompt-modal-buttons">
        <button id="save" class="save-button btn btn-success">Save</button>
        <button id="cancel-prompt-modal" class="btn btn-secondary cancel-prompt-modal close-modal">Cancel</button>
    </div>
  `;

  const focusingTextarea = document.querySelector(".textarea");
  focusingTextarea.focus();
  // creating background overlay when modal appears
  const overlay = document.createElement("div");
  overlay.classList = "overlay";
  container.appendChild(overlay);

  // close modal after clicking X or "Cancel" button
  const modalCloseButtons = document.querySelectorAll(".close-modal");
  modalCloseButtons.forEach((button) => {
    button.addEventListener("click", () => {
      createModal.remove();
      overlay.remove();
      document.body.style.overflow = "auto";
    });
  });

  const saveInputButton = document.getElementById("save");
  saveInputButton.addEventListener("click", (event) => {
    if (
      (event.type === "keydown" && event.key === 13) ||
      event.type === "click"
    ) {
      savePrompt();

      let tableRows = document.querySelectorAll(".dataRow");
      if (tableRows) {
        tableRows.forEach((tableRow) => {
          tableRow.remove();
        });
      }

      creatingTableRows();
    }
  });
};
