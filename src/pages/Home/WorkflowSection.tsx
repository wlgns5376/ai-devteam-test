import { HOME_PAGE_CONTENT } from '../constants';

function WorkflowSection() {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        {HOME_PAGE_CONTENT.WORKFLOW_TITLE}
      </h2>
      <div className="bg-white rounded-lg shadow-md p-8">
        <ol className="space-y-4">
          {HOME_PAGE_CONTENT.WORKFLOW_STEPS.map((step, index) => (
            <li key={step} className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                {index + 1}
              </span>
              <span className="text-gray-700">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default WorkflowSection;
