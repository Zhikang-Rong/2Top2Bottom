
function optionsSubmit() {
    var btns = document.getElementById("optionsForm").elements.namedItem("btns").value;
    if(browser.storage.local.get("btns") === null){
      browser.storage.local.set({"btns":0});
    }else{
      browser.storage.local.set({"btns":btns});
    }
    console.log(btns);

    var colorArrow = document.getElementById("optionsForm").elements.namedItem("colorArrow").value;
    if(browser.storage.local.get("colorArrow") === null){
      browser.storage.local.set({"colorArrow":"black"});
    }else{
      browser.storage.local.set({"colorArrow":colorArrow});
    }
    console.log(colorArrow);

    var colorBg = document.getElementById("optionsForm").elements.namedItem("colorBg").value;
    if(browser.storage.local.get("colorBg") === null){
      browser.storage.local.set({"colorBg":"white"});
    }else{
      browser.storage.local.set({"colorBg":colorBg});
    }
    console.log(colorBg);

    var posBtn = document.getElementById("optionsForm").elements.namedItem("positionBtn").value;
    if(browser.storage.local.get("positionBtn") === null){
      browser.storage.local.set({"positionBn":"bottomRight"});
    }else{
      browser.storage.local.set({"positionBn":posBtn});
    }
    console.log(posBtn);
}

document.getElementById("optionsForm").addEventListener("submit", ()=>{
  optionsSubmit();
});