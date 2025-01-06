import '@src/SidePanel.css';
import { withErrorBoundary, withSuspense } from '@extension/shared';
import { Layout } from './layout';
import { useTabPage } from './hook/useTabPage';
import { Twitter } from './card/twitter';

const SidePanel = () => {
  const page = useTabPage();

  return (
    <div className="p-4">
      <h2>Twitter</h2>
      <Twitter page={page} />
    </div>
  );
};

export default withErrorBoundary(withSuspense(SidePanel, <div> Loading ... </div>), <div> Error Occur </div>);
