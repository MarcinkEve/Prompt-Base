export const infoModal = (infoMessage, infoModalColor) => {
  const container = document.getElementById("table-container");

  const createModal = document.createElement("section");
  createModal.className = `info-modal ${infoModalColor}`;
  createModal.id = "info-modal";
  container.appendChild(createModal);

  createModal.innerHTML = `
    <div class="info-modal-header">
        <button id="cancel-info-modal" class="cancel-info-modal">⨉</button>
    </div>
    <div class="info-message-container">
        <p class="info-message">${infoMessage}</p>
    </div>
    `;

  const modalCloseButton = document.getElementById("cancel-info-modal");
  modalCloseButton.addEventListener("click", () => {
    createModal.classList.add("fade-out");
    setTimeout(() => {
      createModal.remove();
    }, 1000);
  });

  setTimeout(() => {
    createModal.classList.add("fade-out");
    setTimeout(() => {
      createModal.remove();
    }, 3000);
  }, 3000);
};
