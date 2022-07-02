import AppHeader from '../appHeader/AppHeader';
import RandomChar from '../randomChar/RandomChar';
import CharContent from '../charContent/CharContent';
import AppBanner from '../appBanner/AppBanner';
import ComicsList from '../comicsList/ComicsList';
import SingleComic from '../singleComic/SingleComic';


import vision from '../../resources/img/vision.png';

function App() {
  return (
    <div className='app'>
      <AppHeader></AppHeader>
      <main>
        <RandomChar></RandomChar>
        <CharContent></CharContent>
        <img className="bg-decoration" src={vision} alt="vision"></img>
      </main>
      <main>
        <AppBanner></AppBanner>
        <ComicsList></ComicsList>
      </main>
      <main>
        <AppBanner></AppBanner>
        <SingleComic></SingleComic>
      </main>
    </div>
  );
}

export default App;
