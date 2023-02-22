export const checkingLS = () => {
  let dataFromLS = localStorage.getItem("prompts");
  return dataFromLS === null ? [] : JSON.parse(dataFromLS);
};
