import { withErrorBoundary, withSuspense } from '@extension/shared';
import '@src/SidePanel.css';
import { Twitter } from './card/twitter';
import { useTabPage } from './hook/useTabPage';

const SidePanel = () => {
  const page = useTabPage();

  return (
    <div className="p-4 max-w-[600px] mx-auto">
      <h2>𝕏</h2>
      <Twitter page={page} />
    </div>
  );
};

export default withErrorBoundary(withSuspense(SidePanel, <div> Loading ... </div>), <div> Error Occur </div>);
