import { infoModal } from "./infoModal.js";
import { pushToLS } from "./pushToLS.js";

export const deletePrompt = (buttonId) => {
  const dataFromLS = JSON.parse(localStorage.getItem("prompts"));

  const promptIndex = dataFromLS.findIndex((prompt) => prompt.id === buttonId);
  const foundedPrompt = dataFromLS.find((prompt) => prompt.id === buttonId);

  if (foundedPrompt) {
    dataFromLS.splice(promptIndex, 1);
    const deleteRow = document.getElementById(`dataRow-${buttonId}`);
    if (deleteRow) {
      deleteRow.remove();
    }

    pushToLS(dataFromLS);
    infoModal("Prompt deleted successfully!", "success");
  }
};
