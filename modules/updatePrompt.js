import { creatingTableRows } from "./creatingTableRows.js";
import { infoModal } from "./infoModal.js";
import { promptModal } from "./promptModal.js";
import { pushToLS } from "./pushToLS.js";

export const updatePrompt = (buttonId) => {
  const dataFromLS = JSON.parse(localStorage.getItem("prompts"));

  promptModal();

  const promptIndex = dataFromLS.findIndex((prompt) => prompt.id === buttonId);
  const foundedPrompt = dataFromLS.find((prompt) => prompt.id === buttonId);

  const textarea = document.querySelector(".textarea");
  textarea.value = foundedPrompt.value;

  // remove "save" button instead of it creating new one "update"
  const saveInputButton = document.getElementById("save");
  saveInputButton.remove();

  const promptModalButtons = document.querySelector(".prompt-modal-buttons");
  const cancelPromptModalButton = document.querySelector(
    ".cancel-prompt-modal"
  );
  const updateInputButton = document.createElement("button");
  updateInputButton.className = "update-button btn btn-success";
  updateInputButton.id = "update";
  updateInputButton.innerText = "Update";
  promptModalButtons.insertBefore(updateInputButton, cancelPromptModalButton);

  // updating prompt
  updateInputButton.addEventListener("click", (event) => {
    if (
      (event.type === "keydown" && event.key === 13) ||
      event.type === "click"
    ) {
      const updatedTextareaValue = textarea.value;

      if (updatedTextareaValue.trim().length === 0) {
        infoModal("No data added!", "danger");
        return;
      }

      const updatedPrompt = {
        id: buttonId,
        value: updatedTextareaValue,
      };

      if (foundedPrompt) {
        dataFromLS.splice(promptIndex, 1, updatedPrompt);

        let tableRows = document.querySelectorAll(".dataRow");
        if (tableRows) {
          tableRows.forEach((tableRow) => {
            tableRow.remove();
          });
        }

        pushToLS(dataFromLS);
        creatingTableRows();

        infoModal("Prompt updated succesfully!", "success");

        setTimeout(() => {
          const modal = document.getElementById("prompt-modal");
          const selectOverlay = document.querySelector(".overlay");
          modal.remove();
          selectOverlay.remove();
        }, 1500);
      }
    }
  });
};
