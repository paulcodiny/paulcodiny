import { Item } from '../Item.js';
import { faGrinWink } from '@fortawesome/free-solid-svg-icons';

export function LookslikeSecond() {
  return <Item
    side="right"
    date="2011 - 2013"
    title="Lookalike (attempt 2)"
    icon={faGrinWink}
  >
    <p>
      E-commerce system. I was building a delivery system of products to avoid lines in the stores.
    </p>

    <p>
      <strong>Duties:</strong>
      <ul>
        <li>Design in photoshop (around 13 pages)</li>
        <li>Web development</li>
      </ul>
    </p>

    <p>
      <strong>Achievements:</strong>
      <ul>
        <li>We were invited as a participants of TV-show about startups</li>
        <li>Real users</li>
        <li>Own pictures comparison program switched to https://www.faceplusplus.com/face-comparing/</li>
      </ul>
    </p>

    <p>
      <strong>Technologies:</strong>
      Ruby (Ruby on Rails), WebSockets, Sidekiq(redis), CoffeeScript (Joosy framework
      https://github.com/joosy/joosy), SASS, HAML
    </p>

    <p>
      <strong>Location:</strong>
      Saint-Petersburg
    </p>
  </Item>;
}
