// Background script

console.log("Background running");

// Listener for page action click
browser.pageAction.onClicked.addListener((tab) => {
  // Send a message to the content script to trigger the action
  browser.tabs.sendMessage(tab.id, { action: "zombify" });
});
