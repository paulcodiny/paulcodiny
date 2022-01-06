import { Item } from '../Item.js';
import { faCube } from '@fortawesome/free-solid-svg-icons';

export function Upechka() {
  return <Item
    side="right"
    date="2013"
    title="Part-time"
    icon={faCube}
  >
    <p>
      Selling products created with 3D-printing and raised awareness about this technology
      Together with Yury Popov (https://www.linkedin.com/in/yury-popov-978a4a67/)
      Role: co-founder
    </p>

    <p>
      <strong>Duties:</strong>
      <ul>
        <li>Web development</li>
        <li>Communication with clients (together)</li>
      </ul>
    </p>

    <p>
      <strong>Achievements:</strong>
      <ul>
        <li>Sold multiple items</li>
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
