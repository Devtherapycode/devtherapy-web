import { memes } from '@/server/data/memes/memes.data';

const Memes = () => {
  console.log(memes.length);
  return <div>Memes</div>;
};
export default Memes;
