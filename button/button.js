    /*
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
    }*/
    
    console.log("button.js");
    

    function insertButton() {
        removeExistingButton();
        const button = document.createElement("button");
        let buttonIcon = document.createElement("img");
        buttonIcon.setAttribute("src",chrome.runtime.getURL("assets/icons/arrow-black-48.png"));
        
        button.appendChild(buttonIcon);
        buttonIcon.setAttribute('style','width: 48px; height: 48px;');
        button.className = "2t2b-button";
        button.id = "2t2b-top";
        button.setAttribute('style','box-sizing: border-box;z-index: 999999999; position: fixed; bottom: 70px; right: 30px;width: 50px; height: 50px;border: 1px solid black;border-radius: 0;padding: 0;background-color: white;');
        button.addEventListener("click", function(){
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
          });
        document.body.appendChild(button);


        const button2 = document.createElement("button");
        let buttonIcon2 = document.createElement("img");
        buttonIcon2.setAttribute("src",chrome.runtime.getURL("assets/icons/arrow-black-48.png"));
        buttonIcon2.setAttribute('style','width: 48px; height: 48px;transform: rotate(180deg);');
        button2.appendChild(buttonIcon2);
        button2.className = "2t2b-button";
        button2.id = "2t2b-bottom";
        button2.setAttribute('style','box-sizing: border-box;z-index: 999999999; position: fixed; bottom: 20px; right: 30px;width: 50px; height: 50px;border: 1px solid black;border-radius: 0;padding: 0;background-color: white;');
        button2.addEventListener("click", function(){
          document.body.scrollTop = document.body.scrollHeight;
          document.documentElement.scrollTop = document.documentElement.scrollHeight;
          });
        document.body.appendChild(button2);
        }

    function removeExistingButton() {
        const existingButton = document.getElementsByClassName("2t2b-button");
        
        for (const button of existingButton) {
          button.remove();
        }
    }

    

    

    /*
    browser.runtime.onMessage.addListener((message) => {
        if (message.command === "beastify") {
          insertBeast(message.beastURL);
        } else if (message.command === "reset") {
          removeExistingBeasts();
        }
      });*/

insertButton();


function gotKitten(item) {
  console.log(item.config2t2b.btns);
}

browser.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log("received");
    let config2t2b = {
      btns: request.btns,
      colorArrow: request.colorArrow,
      colorBg: request.colorBg,
      positionBtn: request.positionBtn,
      sizeBtn: request.sizeBtn
    };
    
    browser.storage.local.set({config2t2b});

    let button = browser.storage.local.get("config2t2b");
    //console.log(`${button.item.config2t2b.btns}`);
    
    browser.storage.local.get("config2t2b").then(gotKitten);
    
      if( request.message === "start" ) {
        insertButton();
      }
  }
);