chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  if (details.frameId === 0 && details.url.includes('yahoo.com')) {
    if (details.url.includes('/search')) {
      const url = new URL(details.url);
      const q = url.searchParams.get('p') || url.searchParams.get('q');
      if (q) {
        chrome.tabs.update(details.tabId, { url: `https://www.google.com/search?q=${encodeURIComponent(q)}` });
      } else {
        chrome.tabs.update(details.tabId, { url: 'https://www.google.com/search' });
      }
    } else {
      chrome.tabs.update(details.tabId, { url: 'https://www.google.com' });
    }
  }
}, { url: [{ hostContains: 'yahoo.com' }] });
