import { promptModal } from "./promptModal.js";

export const addPromptButton = () => {
  const addPromptBtn = document.getElementById("add-prompt-button");
  addPromptBtn.addEventListener("click", (event) => {
    promptModal(event);
  });
};
