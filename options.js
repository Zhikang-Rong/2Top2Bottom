document.getElementById("optionsForm").addEventListener("submit", optionsSubmit);

function optionsSubmit() {
    var btns = document.getElementById("optionsForm").elements.namedItem("btns").value;
    console.log(btns);
    var colorArrow = document.getElementById("optionsForm").elements.namedItem("colorArrow").value;
    console.log(colorArrow);
    var colorBg = document.getElementById("optionsForm").elements.namedItem("colorBg").value;
    console.log(colorBg);
    var posBtn = document.getElementById("optionsForm").elements.namedItem("positionBtn").value;
    console.log(posBtn);
}