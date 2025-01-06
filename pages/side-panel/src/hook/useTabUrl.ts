import { useEffect, useState } from 'react';

export const useTabUrl = () => {
  const [url, setUrl] = useState('');
  const [tabId, setTabId] = useState(0);

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      setUrl(tabs[0].url ?? '');
      setTabId(tabs[0].id ?? 0);
    });

    chrome.tabs.onUpdated.addListener(async (tabId, _, tab) => {
      if (!tab.url) return;
      setUrl(tab.url ?? '');
    });

    chrome.tabs.onActivated.addListener(async activeInfo => {
      const { tabId } = activeInfo;
      const tab = await chrome.tabs.get(tabId);
      setUrl(tab.url ?? '');
      setTabId(tabId);
    });
  }, []);

  return { url, tabId };
};
