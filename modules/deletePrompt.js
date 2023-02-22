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

    localStorage.setItem("prompts", JSON.stringify(dataFromLS));
  }
};
