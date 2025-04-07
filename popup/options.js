
function optionsSubmit() {
    var btns = document.getElementById("optionsForm").elements.namedItem("btns").value;

    var colorArrow = document.getElementById("optionsForm").elements.namedItem("colorArrow").value;

    var colorBg = document.getElementById("optionsForm").elements.namedItem("colorBg").value;

    var positionBtn = document.getElementById("optionsForm").elements.namedItem("positionBtn").value;

    var sizeBtn = document.getElementById("optionsForm").elements.namedItem("sizeBtn").value;

    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
      chrome.tabs.sendMessage(tabs[0].id, {subject:"submit","btns": btns, "colorArrow": colorArrow, "colorBg": colorBg, "positionBtn": positionBtn, "sizeBtn": sizeBtn});
    });

    let config2t2b = {
      btns: btns,
      colorArrow: colorArrow,
      colorBg: colorBg,
      positionBtn: positionBtn,
      sizeBtn: sizeBtn
    };
    chrome.storage.local.set({config2t2b});
}

document.getElementById("optionsForm").addEventListener("submit", ()=>{
  optionsSubmit();
});
chrome.storage.local.get("config2t2b", function(result){
  if(chrome.runtime.lastError || result.config2t2b == undefined){
    let config2t2b = {
      btns: "0",
      colorArrow: "black",
      colorBg: "white",
      positionBtn: "bottomRight",
      sizeBtn: "48"
    };
    chrome.storage.local.set({config2t2b});
  }
  return;
});

window.addEventListener('DOMContentLoaded', () => {
  chrome.storage.local.get("config2t2b",function(result){
    document.getElementById('btns').value = result.config2t2b.btns;
    document.getElementById('colorArrow').value = result.config2t2b.colorArrow;
    document.getElementById('colorBg').value = result.config2t2b.colorBg;
    document.getElementById('positionBtn').value = result.config2t2b.positionBtn;
    document.getElementById('sizeBtn').value = result.config2t2b.sizeBtn;
  });
});