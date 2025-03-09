(()=>{
    if(browser.storage.local.get("btns") === null){
        browser.storage.local.set({"btns":0});
    }
    if(browser.storage.local.get("colorArrow") === null){
        browser.storage.local.set({"colorArrow":"black"});
    }
    if(browser.storage.local.get("colorBg") === null){
        browser.storage.local.set({"colorBg":"white"});
    }
    if(browser.storage.local.get("positionBtn") === null){
        browser.storage.local.set({"positionBn":"bottomRight"});
    }
    
    console.log("button.js");


    function insertButton(beastURL) {
        removeExistingButton();
        const button = document.createElement("button");
        let buttonIcon = document.createElement("img");
        buttonIcon.setAttribute("src","assets/icons/logo.png");
        buttonIcon.style.width = "50px";
        buttonIcon.style.height = "50px";
        button.appendChild(buttonIcon);
        button.className = "2t2b-button";
        button.style.position = "fixed";
        button.style.bottom = "20px";
        button.style.right = "30px";
        button.style.zIndex = 999999999;
        document.body.appendChild(button);
      }

    function removeExistingButton() {
        const existingButton = document.querySelectorAll(".2t2b-button");
        for (const button of existingButton) {
          button.remove();
        }
    }


    browser.runtime.onMessage.addListener((message) => {
        if (message.command === "beastify") {
          insertBeast(message.beastURL);
        } else if (message.command === "reset") {
          removeExistingBeasts();
        }
      });
})();
