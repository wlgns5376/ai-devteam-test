import { HOME_PAGE_CONTENT } from '../constants';
import KeyFeaturesSection from './KeyFeaturesSection';
import WorkflowSection from './WorkflowSection';
import SystemArchitectureSection from './SystemArchitectureSection';
import GettingStartedSection from './GettingStartedSection';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center py-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            {HOME_PAGE_CONTENT.TITLE}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {HOME_PAGE_CONTENT.SERVICE_DESCRIPTION}
          </p>
        </header>

        <KeyFeaturesSection />
        <WorkflowSection />
        <SystemArchitectureSection />
        <GettingStartedSection />
      </div>
    </div>
  );
}

export default Home;
