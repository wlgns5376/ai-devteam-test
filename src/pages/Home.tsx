import { HOME_PAGE_CONTENT } from './constants';
import CheckIcon from '../components/CheckIcon';

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

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            주요 기능
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOME_PAGE_CONTENT.KEY_FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4" aria-hidden="true">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            워크플로우
          </h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <ol className="space-y-4">
              {HOME_PAGE_CONTENT.WORKFLOW_STEPS.map((step, index) => (
                <li key={`${step}-${index}`} className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            시스템 아키텍처
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {HOME_PAGE_CONTENT.ARCHITECTURE_COMPONENTS.map((component) => (
              <div
                key={component.name}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {component.name}
                </h3>
                <p className="text-gray-600">{component.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            시작하기
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                시스템 요구사항
              </h3>
              <ul className="space-y-2">
                {HOME_PAGE_CONTENT.SYSTEM_REQUIREMENTS.map((req, index) => (
                  <li key={`${req}-${index}`} className="flex items-center">
                    <CheckIcon />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                배포 옵션
              </h3>
              <ul className="space-y-2">
                {HOME_PAGE_CONTENT.DEPLOYMENT_OPTIONS.map((option, index) => (
                  <li key={`${option}-${index}`} className="flex items-center">
                    <CheckIcon className="w-5 h-5 text-blue-500 mr-2" />
                    <span className="text-gray-700">{option}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
