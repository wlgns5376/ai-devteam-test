import { HOME_PAGE_CONTENT } from './constants';

function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        {HOME_PAGE_CONTENT.TITLE}
      </h1>
      <p className="text-gray-700 mt-4">
        {HOME_PAGE_CONTENT.SERVICE_DESCRIPTION}
      </p>
    </div>
  );
}

export default Home;
