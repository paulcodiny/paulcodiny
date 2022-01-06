import { Item } from '../Item.js';
import { faJs } from '@fortawesome/free-brands-svg-icons';

export function JSPlanet() {
  return <Item
    side="right"
    date="2018 - 2019"
    title="Part-time business develop at JS Planet"
    icon={faJs}
  >
    <p>
      Giving courses to developers: for Russian developer English courses, for Western developers of JavaScript.
      Together with Alex Korzhikov (https://www.linkedin.com/in/alex-korzhikov-8614011a/) and Mikhail Kuznetcov
      (https://www.linkedin.com/in/michailkuznetcov/)
      https://medium.com/js-planet
      Role: co-founder
    </p>

    <p>
      <strong>Duties:</strong>
      <ul>
        <li>Business development</li>
        <li>Sales</li>
      </ul>
    </p>

    <p>
      <strong>Achievements:</strong>
      <ul>
        <li>We interviewed more than 30 russian developers and found three of them as our students</li>
      </ul>
    </p>

    <p>
      <strong>Technologies:</strong>
      Skype, JS, Trello
    </p>

    <p>
      <strong>Location:</strong>
      Amsterdam
    </p>
  </Item>;
}
