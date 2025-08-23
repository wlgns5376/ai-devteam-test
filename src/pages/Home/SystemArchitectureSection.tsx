import { HOME_PAGE_CONTENT } from '../constants';

function SystemArchitectureSection() {
  return (
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
  );
}

export default SystemArchitectureSection;
