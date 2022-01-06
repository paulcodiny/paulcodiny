import { Item } from '../Item.js';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

export function MuscleSupplements() {
  return <Item
    side="right"
    date="2008"
    title="Supplements e-commerce shop"
    icon={faDumbbell}
  >
    <p>
      With a couple of friends we made an e-commerce shop of muscle growth supplements.
      From their side was financial investments and advertising, from my web development and technical support.
    </p>

    <p>
      <strong>Duties:</strong>
      <ul>
        <li>Web development</li>
      </ul>
    </p>

    <p>
      <strong>Achievements:</strong>
      <ul>
        <li>Domain registration</li>
        <li>Server configuration for own hosting</li>
        <li>Website development</li>
      </ul>
    </p>

    <p>
      <strong>Technologies:</strong>
      PHP, JS, CSS, HTML
    </p>

    <p>
      <strong>Location:</strong>
      Tomsk
    </p>
  </Item>;
}
