import { tv } from 'tailwind-variants';

interface TwitterProps {
  page: Page;
}

const styles = tv({
  slots: {
    container: 'border border-[#cfd9de] rounded-[16px] w-full overflow-hidden cursor-pointer relative',
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
  if (!page || !page.twitterCard || !page.site) {
    return null;
  }

  const url = new URL(page.site);
  const domain = url.hostname;

  const summaryLarge = page.twitterCard === 'summary_large_image';

  const style: React.CSSProperties = {};
  if (summaryLarge) {
    style.background = `url(${page.imageUrl}) no-repeat center center / cover`;
  }

  const summaryContent = summaryLarge ? null : (
    <div className="size-full flex">
      <div style={{ background: `url(${page.imageUrl}) no-repeat center center / cover` }} className="w-[26.96%]"></div>
      <div className="w-[73.04%]">
        <div className="flex size-full flex-col p-[12px] justify-center leading-[20px]">
          <span className="line-clamp-1 text-[#536471] text-[15px]">{domain}</span>
          <span className="line-clamp-1 text-[#0f1419]">{page.title}</span>
          <span className="line-clamp-1 text-[#536471]">{page.description}</span>
        </div>
      </div>
    </div>
  );

  const largeContent = summaryLarge ? (
    <div className="bg-[#000000c4] px-[8px] leading-[20px] text-white absolute left-[10px] bottom-[10px] rounded-[4px] line-clamp-1 max-w-[calc(100%-20px)]">
      {page.title}
    </div>
  ) : null;

  return (
    <div
      className={styles.container({ twitterCard: page.twitterCard })}
      style={style}
      onClick={() => {
        window.open(page.site, '_blank');
      }}>
      {summaryContent}
      {largeContent}
    </div>
  );
};
