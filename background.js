// Try to set Google as default search engine if API is available
chrome.runtime.onInstalled.addListener(() => {
  if (chrome.searchEngines && chrome.searchEngines.setDefault) {
    chrome.searchEngines.setDefault({ name: "google", keyword: "google.com" }).catch(() => {});
  }
});

chrome.runtime.onStartup.addListener(() => {
  if (chrome.searchEngines && chrome.searchEngines.setDefault) {
    chrome.searchEngines.setDefault({ name: "google", keyword: "google.com" }).catch(() => {});
  }
});
