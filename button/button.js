
function setPosition(btns, positionBtn, sizeBtn){
  let style;
    if(btns == "0" || btns == "1"){
      switch(positionBtn){
        case "topLeft":
          style = 'left: 30px; top:20px;';
          break;
        case "topCenter":
          style = 'left: 50%; top:20px; transform: translate(-50%,0);';
          break;
        case "topRight":
          style = 'right: 30px; top:20px;';
          break;

        case "centerLeft":
          style = 'left: 30px; top:50%; transform: translate(0,-50%);';
          break;
        case "center":
          style = 'left: 50%; top:50%; transform: translate(-50%,-50%);';
          break;
        case "centerRight":
          style = 'right: 30px; top:50% ; transform: translate(0,-50%);';
          break;

        case "bottomLeft":
          style = 'left: 30px; bottom:20px;';
          break;
        case "bottomCenter":
          style = 'left: 50%; bottom:20px; transform: translate(-50%,0);';
          break;
        case "bottomRight":
          style = 'right: 30px; bottom:20px;';
          break;
      }
      return style;
    }else{
      let style2;
      switch(positionBtn){
        case "topLeft":
          style = 'left: 30px; top:20px;';
          style2 = 'left: 30px; top:'+(20+parseInt(sizeBtn))+'px;';
          break;
        case "topCenter":
          style = 'left: 50%; top:20px; transform: translate(-50%,0);';
          style2 = 'left: 50%; top:'+(20+parseInt(sizeBtn))+'px; transform: translate(-50%,0);';
          break;
        case "topRight":
          style = 'right: 30px; top:20px;';
          style2 = 'right: 30px; top:'+(20+parseInt(sizeBtn))+'px;';
          break;
            
        case "centerLeft":
          style = 'left: 30px; bottom:50%;';
          style2 = 'left: 30px; top:50%;';
          break;
        case "center":
          style = 'left: 50%; bottom:50%; transform: translate(-50%,0);';
          style2 = 'left: 50%; top:50%; transform: translate(-50%,0);';
          break;
        case "centerRight":
          style = 'right: 30px; bottom:50% ;';
          style2 = 'right: 30px; top:50%;';
          break;

        case "bottomLeft":
          style = 'left: 30px; bottom:'+(20+parseInt(sizeBtn))+'px;';
          style2 = 'left: 30px; bottom:20px;';
          break;
        case "bottomCenter":
          style = 'left: 50%; bottom:'+(20+parseInt(sizeBtn))+'px; transform: translate(-50%,0);';
          style2 = 'left: 50%; bottom:20px; transform: translate(-50%,0);';
          break;
        case "bottomRight":
          style = 'right: 30px; bottom:'+(20+parseInt(sizeBtn))+'px;';
          style2 = 'right: 30px; bottom:20px;';
          break;
      }
      return [style,style2];
    }
}

function setImage(sizeBtn,colorArrow){
  if(colorArrow == "black"){
    switch(sizeBtn){
      case "64":
        return "assets/icons/arrow-black-64.png";
      case "32":
        return "assets/icons/arrow-black-32.png";
      default:
        return "assets/icons/arrow-black-48.png";
    }
  }else{
    switch(sizeBtn){
      case "64":
        return "assets/icons/arrow-white-64.png";
      case "32":
        return "assets/icons/arrow-white-32.png";
      default:
        return "assets/icons/arrow-white-48.png";
    }
  }
}

function insertButton(result) {
  console.log("inserting");
  
  removeExistingButton();
  //set variables
  let btns = result.config2t2b.btns;
  let colorArrow = result.config2t2b.colorArrow;
  let colorBg = result.config2t2b.colorBg;
  let positionBtn = result.config2t2b.positionBtn;
  let sizeBtn = result.config2t2b.sizeBtn;      
  
  //default data
  const button = document.createElement("button");
  let buttonIcon = document.createElement("img");
  let style = 'box-sizing: border-box;z-index: 999999999; position: fixed !important;padding: 0 !important;border: 0 !important;border-radius: 0 !important;';
  const button2 = document.createElement("button");
  let style2 = 'box-sizing: border-box;z-index: 999999999; position: fixed !important;padding: 0 !important;border: 0 !important;border-radius 0 !important;';
  let buttonIcon2 = document.createElement("img");

  //Set button position
  if(btns == "0"){
    style += setPosition(btns,positionBtn,sizeBtn);
  }else if(btns == "1"){
    style2 += setPosition(btns,positionBtn,sizeBtn);
  }else{
    let positions = setPosition(btns,positionBtn,sizeBtn);
    style += positions[0];
    style2 += positions[1];
  }

  //Set button size
  switch(sizeBtn){
      case "32":
        style += 'width: 32px; height: 32px;';
        style2 += 'width: 32px; height: 32px;';
        break;
      case "64":
        style += 'width: 64px; height: 64px;';
        style2 += 'width: 64px; height: 64px;';
        break;
      default:
        style += 'width: 48px; height: 48px;';
        style2 += 'width: 48px; height: 48px;';
  }

  //Set arrow color
  buttonIcon.setAttribute("src",chrome.runtime.getURL(setImage(sizeBtn,colorArrow)));
  buttonIcon2.setAttribute("src",chrome.runtime.getURL(setImage(sizeBtn,colorArrow)));

  //Set button color
  switch(colorBg){
      case "white":
        style += "background-color: white;";
        style2 += "background-color: white;";
        break;
      case "black":
        style += "background-color: black;";
        style2 += "background-color: black;";
        break;
      case "blue":
        style += "background-color: blue;";
        style2 += "background-color: blue;";
        break;
      case "red":
        style += "background-color: red;";
        style2 += "background-color: red;";
        break;
      case "green":
        style += "background-color: green;";
        style2 += "background-color: green;";
        break;
  }
  
  //set image size
  buttonIcon.setAttribute('style','width: '+parseInt(sizeBtn)+'px; height: '+parseInt(sizeBtn)+'px;');
  buttonIcon2.setAttribute('style','width: '+parseInt(sizeBtn)+'px; height: '+parseInt(sizeBtn)+'px;transform: rotate(180deg);');
  
  //Appending buttons
  if(btns == "0" || btns == "2"){
    button.appendChild(buttonIcon);
    button.className = "2t2b-button";
    button.id = "2t2b-top";
    button.setAttribute('style',style);
    button.addEventListener("click", function(){
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
    document.body.appendChild(button);
  }
  if(btns == "1"|| btns == "2"){
    button2.appendChild(buttonIcon2);
    button2.className = "2t2b-button";
    button2.id = "2t2b-bottom";
    button2.setAttribute('style',style2);
    button2.addEventListener("click", function(){
      document.body.scrollTop = document.body.scrollHeight;
      document.documentElement.scrollTop = document.body.scrollHeight;
    });
    document.body.appendChild(button2);
  }
}

function removeExistingButton() {
  let element = document.getElementById("2t2b-top");
  if(element != null)
    element.remove();
  element = document.getElementById("2t2b-bottom");
  if(element != null)
    element.remove();
            
}

//starting
start2t2b();


//code for updating button (after config change) in tabs that aren't currently active without reloading page
document.addEventListener("visibilitychange", () => {
  start2t2b();
});

//function to start
function start2t2b() {
  chrome.storage.local.get("config2t2b", function(result){
    if(chrome.runtime.lastError || result.config2t2b == undefined){
      console.log("start 1");
      
      let config2t2b = {
        btns: "0",
        colorArrow: "black",
        colorBg: "white",
        positionBtn: "bottomRight",
        sizeBtn: "48"
      };
      chrome.storage.local.set({config2t2b});
            
      chrome.storage.local.get("config2t2b",(result) => {insertButton(result)});
    }else{
      console.log("start 2");
      
      insertButton(result);
    }
    return true;
  });
}


//Message receiver
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    //set config
    if(request.subject == "submit"){
      let config2t2b = {
        btns: request.btns,
        colorArrow: request.colorArrow,
        colorBg: request.colorBg,
        positionBtn: request.positionBtn,
        sizeBtn: request.sizeBtn
      };
      
      chrome.storage.local.set({config2t2b});
      
      chrome.storage.local.get("config2t2b", function(result){
        insertButton(result);
        return;
      });
    }
    //send data
    if(request.subject == "config"){
      chrome.storage.local.get("config2t2b", function(result){
          sendResponse(result.config2t2b);
      });
      return true;
    }
  }
);