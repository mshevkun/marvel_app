import './charContent.scss'
import abyss from '../../resources/img/abyss.jpg'
import thor from '../../resources/img/thor.jpeg'
import Skeleton from '../skeleton/Skeleton'


const CharContent = () => {
  return (
    <div className="char__content">
        <div className="char__list">
          <ul className="char__grid">
            <li className="char__item">
              <img src={abyss} alt="abyss"></img>
              <div className="char__name">Abyss</div>
            </li>
            <li className="char__item char__item_selected">
              <img src={abyss} alt="abyss"></img>
              <div className="char__name">Abyss</div>
            </li>
            <li className="char__item">
              <img src={abyss} alt="abyss"></img>
              <div className="char__name">Abyss</div>
            </li>
            <li className="char__item">
              <img src={abyss} alt="abyss"></img>
              <div className="char__name">Abyss</div>
            </li>
            <li className="char__item">
              <img src={abyss} alt="abyss"></img>
              <div className="char__name">Abyss</div>
            </li>
            <li className="char__item">
              <img src={abyss} alt="abyss"></img>
              <div className="char__name">Abyss</div>
            </li>
            <li className="char__item">
              <img src={abyss} alt="abyss"></img>
              <div className="char__name">Abyss</div>
            </li>
            <li className="char__item">
              <img src={abyss} alt="abyss"></img>
              <div className="char__name">Abyss</div>
            </li>
            <li className="char__item">
              <img src={abyss} alt="abyss"></img>
              <div className="char__name">Abyss</div>
            </li>
          </ul>
          <button className="button button__main button__long">
            <div className="inner">load more</div>
          </button>
        </div>

        <div className="char__info">
          <div className="char__basics">
            <img src={thor} alt="abyss"></img>
            <div>
              <div className="char__info-name">thor</div>
              <div className="char__btns">
                <a href="#" className="button button__main">
                  <div className="inner">homepage</div>
                </a>
                <a href="#" className="button button__secondary">
                  <div className="inner">Wiki</div>
                </a>
              </div>
            </div>
          </div>
          <div className="char__descr">
            In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the
            brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and
            the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion
            Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In
            addition, Loki is referred to as the father of Váli in the Prose Edda.
          </div>
          <div className="char__comics">Comics:</div>
          <ul className="char__comics-list">
            <li className="char__comics-item">
              All-Winners Squad: Band of Heroes (2011) #3
            </li>
            <li className="char__comics-item">
              Alpha Flight (1983) #50
            </li>
            <li className="char__comics-item">
              Amazing Spider-Man (1999) #503
            </li>
            <li className="char__comics-item">
              Amazing Spider-Man (1999) #504
            </li>
            <li className="char__comics-item">
              AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)
            </li>
            <li className="char__comics-item">
              Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)
            </li>
            <li className="char__comics-item">
              Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)
            </li>
            <li className="char__comics-item">
              Vengeance (2011) #4
            </li>
            <li className="char__comics-item">
              Avengers (1963) #1
            </li>
            <li className="char__comics-item">
              Avengers (1996) #1
            </li>
          </ul>
          <p className="char__select">Please select a character to see information</p>
          <Skeleton></Skeleton>
        </div>
      </div>
  )
}

export default CharContent;