import { HOME_PAGE_CONTENT } from '../constants';

function KeyFeaturesSection() {
  return (
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
  );
}

export default KeyFeaturesSection;
