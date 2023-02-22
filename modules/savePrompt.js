import { checkingLS } from "./checkingLS.js";
import { pushToLS } from "./pushToLS.js";

export const savePrompt = () => {
  const promptsArray = checkingLS();

  const textarea = document.querySelector(".textarea");
  const textareaValue = textarea.value;

  const uniqueID = new Date().getTime();
  const prompt = { id: uniqueID, value: textareaValue };

  if (textareaValue.trim().length === 0) {
    alert("No data entered");
    return;
  } else {
    // alert("Data saved succesfully");
    promptsArray.push(prompt);
    pushToLS(promptsArray);

    const modal = document.getElementById("prompt-modal");
    const selectOverlay = document.querySelector(".overlay");
    modal.remove();
    selectOverlay.remove();
  }
};
