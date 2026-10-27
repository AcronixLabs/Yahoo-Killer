# Yahoo-Killer

A Chrome extension (Manifest V3) that redirects all `search.yahoo.com` traffic to Google Search and attempts to set Google as the default search engine on Chrome startup.

## Features

- Redirects Yahoo search queries to Google Search (preserves search terms from `p=` parameter when possible)
- Attempts to set Google as the default search engine on extension install and Chrome startup
- Works in normal and incognito windows

## Installation

1. Clone this repository or download it
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" (toggle in top-right)
4. Click "Load unpacked" and select the extension directory
5. Yahoo searches will be redirected to Google automatically

## Permissions

- `declarativeNetRequest` / `declarativeNetRequestWithHostAccess` - For redirecting Yahoo search requests
- `storage` - For extension state
- `searchEngines` - For attempting to set Google as default search engine

## License

BSD-3-Clause - see [LICENSE](LICENSE)

## Repository

[github.com/AcronixLabs/Yahoo-Killer](https://github.com/AcronixLabs/Yahoo-Killer)
