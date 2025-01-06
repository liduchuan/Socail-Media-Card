import { useEffect, useState } from 'react';

export const useTabUrl = () => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      setUrl(tabs[0].url ?? '');
    });

    chrome.tabs.onUpdated.addListener(async (tabId, _, tab) => {
      if (!tab.url) return;
      setUrl(tab.url ?? '');
    });

    chrome.tabs.onActivated.addListener(async activeInfo => {
      const { tabId } = activeInfo;
      const tab = await chrome.tabs.get(tabId);
      setUrl(tab.url ?? '');
    });
  }, []);

  return { url };
};
