import { useEffect, useState } from 'react';
import { useTabUrl } from './useTabUrl';

export const useTabPage = () => {
  const [page, setPage] = useState<Page>({ title: '', description: '', imageUrl: '', twitterCard: 'summary' });
  const { url, tabId } = useTabUrl();

  useEffect(() => {
    tabId > 0 &&
      chrome.scripting
        .executeScript({
          target: { tabId },
          func: () => {
            const metas = Array.from(document.getElementsByTagName('meta'));

            const meta = metas.find(meta => meta.getAttribute('property') === 'og:title');
            const title = meta ? meta.getAttribute('content') : document.title;
            const image = metas.find(meta => meta.getAttribute('property') === 'og:image');
            const imageUrl = image ? image.getAttribute('content') : '';
            const metaTwitterCard = metas.find(meta => meta.getAttribute('name') === 'twitter:card');
            const twitterCard = metaTwitterCard ? metaTwitterCard.getAttribute('content') : 'summary';

            return {
              title,
              url: window.location.href,
              imageUrl,
              twitterCard,
            };
          },
        })
        .then(results => {
          if (results.length > 0) {
            if (results.length === 1) {
              const data = results[0].result as unknown as Page;
              setPage(data);
            } else {
              console.warn('More than one result');
            }
          } else {
            console.warn('No result');
          }
        });
  }, [tabId, url]);

  return page;
};
