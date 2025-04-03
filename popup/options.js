
function optionsSubmit() {
    var btns = document.getElementById("optionsForm").elements.namedItem("btns").value;
    if(browser.storage.local.get("btns") === null){
      btns = 0;
    }
    console.log(btns);

    var colorArrow = document.getElementById("optionsForm").elements.namedItem("colorArrow").value;
    if(browser.storage.local.get("colorArrow") === null){
      colorArrow = "black";
    }
    console.log(colorArrow);

    var colorBg = document.getElementById("optionsForm").elements.namedItem("colorBg").value;
    if(browser.storage.local.get("colorBg") === null){
      colorBg = "white";
    }
    console.log(colorBg);

    var posBtn = document.getElementById("optionsForm").elements.namedItem("positionBtn").value;
    if(browser.storage.local.get("positionBtn") === null){
      posBtn = "bottomRight";
    }
    console.log(posBtn);

    var sizeBtn = document.getElementById("optionsForm").elements.namedItem("sizeBtn").value;
    if(browser.storage.local.get("sizeBtn") === null){
      sizeBtn = "48px";
    }
    console.log(posBtn);

    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {"btns": 0, "colorArrow": colorArrow, "colorBg": colorBg, "positionBtn": posBtn, "sizeBtn": sizeBtn});
      console.log("sent");
  });
}

document.getElementById("optionsForm").addEventListener("submit", ()=>{
  optionsSubmit();
});
