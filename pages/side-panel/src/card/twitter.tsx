import { tv } from 'tailwind-variants';

interface TwitterProps {
  page: Page;
}

const styles = tv({
  slots: {
    container: 'border border-[#cfd9de] rounded-[16px] w-full overflow-hidden',
  },
  variants: {
    twitterCard: {
      summary: {
        container: 'aspect-[408/110]',
      },
      summary_large_image: {
        container: 'aspect-[408/212]',
      },
    },
  },
})();

export const Twitter = ({ page }: TwitterProps) => {
  if (!page || !page.twitterCard) {
    return null;
  }

  const summaryLarge = page.twitterCard === 'summary_large_image';

  const style: React.CSSProperties = {};
  if (summaryLarge) {
    style.background = `url(${page.imageUrl}) no-repeat center center / cover`;
  }

  const summaryContent = summaryLarge ? null : (
    <div className="size-full flex">
      <div
        style={{ background: `url(${page.imageUrl}) no-repeat center center / cover` }}
        className="size-full flex-[calc(110/408)]"></div>
      <div className="flex-[calc(200/408)] flex flex-col gap-2">
        <h2>{page.title}</h2>
        <p>{page.description}</p>
      </div>
    </div>
  );

  return (
    <div className={styles.container({ twitterCard: page.twitterCard })} style={style}>
      {summaryContent}
    </div>
  );
};
