document.addEventListener("DOMContentLoaded", function () {

    const rowsContainer = document.getElementById("rows");
    const addRowBtn = document.getElementById("addRow");

    const rates = {
        USD: 1,
        EUR: 0.92,
        GBP: 0.78,
        UZS: 11400,
    };

    initializeRow(rowsContainer.querySelector(".currency-row"));

    function initializeRow(row) {
    const input = row.querySelector("input");
    const select = row.querySelector("select");

    input.addEventListener("input", handleChange);
    select.addEventListener("change", handleChange);
}

function handleChange(event) {
    const currentRow = event.target.closest(".currency-row");
    const input = currentRow.querySelector("input");
    const select = currentRow.querySelector("select");

    const amount = Number(input.value);
    const currency = select.value;

    if (!amount) return;

    const amountInUSD = amount / rates[currency];

    const allRows = rowsContainer.querySelectorAll(".currency-row");

    allRows.forEach(row => {
        if (row === currentRow) return;

        const rowInput = row.querySelector("input");
        const rowSelect = row.querySelector("select");

        const converted = amountInUSD * rates[rowSelect.value];
        rowInput.value = converted.toFixed(2);
    });
}

addRowBtn.addEventListener("click", function () {

    const row = document.createElement("div");
    row.classList.add("currency-row");

    row.innerHTML = `
        <input type="number" placeholder="Enter amount">
        <select>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="UZS">UZS</option>
        </select>
    `;

    rowsContainer.appendChild(row);

    initializeRow(row);
});

});
