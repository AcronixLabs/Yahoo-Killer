// Redirects Yahoo search to Google
// Note: Changing default search engine is not possible via extension API in modern Chrome
chrome.runtime.onInstalled.addListener(() => {
  // Extension installed
});

chrome.runtime.onStartup.addListener(() => {
  // Extension started
});
