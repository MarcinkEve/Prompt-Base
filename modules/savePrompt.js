import { checkingLS } from "./checkingLS.js";
import { infoModal } from "./infoModal.js";
import { pushToLS } from "./pushToLS.js";

export const savePrompt = () => {
  const promptsArray = checkingLS();

  const textarea = document.querySelector(".textarea");
  const textareaValue = textarea.value;

  const uniqueID = new Date().getTime();
  const prompt = { id: uniqueID, value: textareaValue };

  if (textareaValue.trim().length === 0) {
    infoModal("No data entered!", "danger");
    return;
  } else {
    promptsArray.push(prompt);
    pushToLS(promptsArray);
    infoModal("Prompt saved succesfully!", "success");

    setTimeout(() => {
      const modal = document.getElementById("prompt-modal");
      const selectOverlay = document.querySelector(".overlay");
      modal.remove();
      selectOverlay.remove();
    }, 1500);
  }
};
