interface TwitterProps {
  page: Page;
}

export const Twitter = ({ page }: TwitterProps) => {
  return <div>{JSON.stringify(page, null, 2)}</div>;
};
