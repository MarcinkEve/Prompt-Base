export const promptTable = () => {
  const container = document.getElementById("table-container");

  const table = document.createElement("table");
  table.className = "prompt-table";
  table.id = "prompt-table";
  container.appendChild(table);

  const tableHead = document.createElement("thead");
  table.appendChild(tableHead);

  const tableHeadRow = document.createElement("tr");
  tableHead.appendChild(tableHeadRow);

  const tableHeadings = ["Prompt", "Actions"];
  tableHeadings.map((el) => {
    const tableHeading = document.createElement("th");
    tableHeading.innerText = el;
    tableHeadRow.appendChild(tableHeading);
  });
};
