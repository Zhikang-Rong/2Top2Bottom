globalThis.browser ??= globalThis.chrome;
function optionsSubmit() {
    var btns = document.getElementById("optionsForm").elements.namedItem("btns").value;

    var colorArrow = document.getElementById("optionsForm").elements.namedItem("colorArrow").value;

    var colorBg = document.getElementById("optionsForm").elements.namedItem("colorBg").value;

    var positionBtn = document.getElementById("optionsForm").elements.namedItem("positionBtn").value;

    var sizeBtn = document.getElementById("optionsForm").elements.namedItem("sizeBtn").value;

    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
      chrome.tabs.sendMessage(tabs[0].id, {subject:"submit","btns": btns, "colorArrow": colorArrow, "colorBg": colorBg, "positionBtn": positionBtn, "sizeBtn": sizeBtn});
    });
}

document.getElementById("optionsForm").addEventListener("submit", ()=>{
  optionsSubmit();
});

window.addEventListener('DOMContentLoaded', () => {
  chrome.storage.local.get("config2t2b",function(result){
    
  });
});

window.addEventListener('DOMContentLoaded', () => {
  chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    chrome.tabs.sendMessage(tabs[0].id, {subject:"config"},function(response){
      document.getElementById('btns').value = response.btns;
      document.getElementById('colorArrow').value = response.colorArrow;
      document.getElementById('colorBg').value = response.colorBg;
      document.getElementById('positionBtn').value = response.positionBtn;
      document.getElementById('sizeBtn').value = response.sizeBtn;
    });
  });
});