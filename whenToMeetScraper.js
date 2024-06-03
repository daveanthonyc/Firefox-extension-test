chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Check if the message is to change the border color
  if (message.action === "changeBorderColor") {
    // Change the border color to blue
    document.body.style.border = "2px solid blue";
    // Send a response to acknowledge the change
    sendResponse({ message: "Border color changed to blue" });
  }

  if (message.action === "logVariable") {
      const variableValue = window[message.AvailableAtSlot]
      console.log(variableValue);
  }
});
