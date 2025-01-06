import { tv } from 'tailwind-variants';

interface TwitterProps {
  page: Page;
}

const styles = tv({
  slots: {
    container: 'border border-[#cfd9de] rounded-[16px]',
  },
  variants: {
    twitterCard: {
      summary: {
        container: '',
      },
      summary_large_image: {
        container: '',
      },
    },
  },
})();

export const Twitter = ({ page }: TwitterProps) => {
  if (!page.twitterCard) {
    return null;
  }

  return <div className={styles.container({ twitterCard: page.twitterCard })}> {JSON.stringify(page, null, 2)}</div>;
};
