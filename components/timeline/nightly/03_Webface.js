import { Item } from '../Item.js';
import { faSitemap } from '@fortawesome/free-solid-svg-icons';

export function Webface() {
  return <Item
    side="right"
    date="2011"
    title="Webface CMF"
    icon={faSitemap}
  >
    <p>
      My own Content Management Framework. https://github.com/paulcodiny/WebFace-CMF
    </p>

    <p>
      <strong>Duties:</strong>
      <ul>
        <li>Architecture and development</li>
        <li>Design</li>
      </ul>
    </p>

    <p>
      <strong>Achievements:</strong>
      <ul>
        <li>It was working</li>
      </ul>
    </p>

    <p>
      <strong>Technologies:</strong>
      PHP, JS, HTML, CSS
    </p>

    <p>
      <strong>Location:</strong>
      Tomsk
    </p>
  </Item>;
}
