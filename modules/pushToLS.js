export const pushToLS = (promptArray) => {
  localStorage.setItem("prompts", JSON.stringify(promptArray));
};
