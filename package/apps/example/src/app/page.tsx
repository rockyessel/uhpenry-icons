import {
  AstroIcon,
  ReactJsIcon,
  APIIcon,
  getIcon,
  library,
} from 'uhpenry-icons';

const Home = async () => {
  const Actix = getIcon('Actix');
  const API = library['Echo'];

  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <APIIcon size={20} className='animate-spin' />
      <ReactJsIcon className='animate-spin' />
      <AstroIcon className='animate-spin' />
      <Actix className='animate-spin' />
      <API className='animate-spin' />
      {Object.entries(library).map(([name, Icon], index) => (
        <Icon key={index} />
      ))}
    </div>
  );
};

export default Home;
