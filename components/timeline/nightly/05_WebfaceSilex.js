import { Item } from '../Item.js';
import { faSymfony } from '@fortawesome/free-brands-svg-icons';

export function WebfaceSilex() {
  return <Item
    side="right"
    date="2013"
    title="Webface Silex Extension"
    icon={faSymfony}
  >
    <p>
      Extension for Silex https://github.com/silexphp/Silex to easily build admin panel
    </p>

    <p>
      <strong>Duties:</strong>
      <ul>
        <li>Architecture and development</li>
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
      Saint-Petersburg
    </p>
  </Item>;
}
