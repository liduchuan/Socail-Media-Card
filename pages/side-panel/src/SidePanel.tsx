import '@src/SidePanel.css';
import { withErrorBoundary, withSuspense } from '@extension/shared';
import { Layout } from './component/layout';
import { useTabUrl } from './hook/useTabUrl';

const SidePanel = () => {
  const { url } = useTabUrl();

  return <Layout>{url}</Layout>;
};

export default withErrorBoundary(withSuspense(SidePanel, <div> Loading ... </div>), <div> Error Occur </div>);
