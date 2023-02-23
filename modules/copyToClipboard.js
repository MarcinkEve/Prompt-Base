import { infoModal } from "./infoModal.js";

export const copyToClipboard = async (copyText) => {
  try {
    await navigator.clipboard.writeText(copyText.innerText);
    infoModal("Text copied to clipboard successfully!", "success");
  } catch (err) {
    infoModal(`Failed to copy text: ${err}`, "danger");
  }
};
