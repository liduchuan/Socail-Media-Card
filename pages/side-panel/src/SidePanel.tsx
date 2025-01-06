import '@src/SidePanel.css';
import { withErrorBoundary, withSuspense } from '@extension/shared';
import { Layout } from './component/layout';
import { useTabPage } from './hook/useTabPage';
import { Twitter } from './component/card/twitter';

const SidePanel = () => {
  const page = useTabPage();

  return (
    <Layout>
      <Twitter page={page} />
    </Layout>
  );
};

export default withErrorBoundary(withSuspense(SidePanel, <div> Loading ... </div>), <div> Error Occur </div>);
