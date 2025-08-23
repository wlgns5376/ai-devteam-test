import { HOME_PAGE_CONTENT } from '../constants';
import CheckIcon from '../../components/CheckIcon';

function GettingStartedSection() {
  return (
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
            {HOME_PAGE_CONTENT.SYSTEM_REQUIREMENTS.map((req) => (
              <li key={req} className="flex items-center">
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
            {HOME_PAGE_CONTENT.DEPLOYMENT_OPTIONS.map((option) => (
              <li key={option} className="flex items-center">
                <CheckIcon className="w-5 h-5 text-blue-500 mr-2" />
                <span className="text-gray-700">{option}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default GettingStartedSection;
