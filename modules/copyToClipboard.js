export const copyToClipboard = async (copyText) => {
  try {
    await navigator.clipboard.writeText(copyText.innerText);
    alert("Text copied to clipboard succesfully!");
    console.log("Text copied to clipboard succesfully!");
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
};
