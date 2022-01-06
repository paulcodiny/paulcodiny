import { Item } from '../Item.js';
import { faTruck } from '@fortawesome/free-solid-svg-icons';

export function HomeDelivery() {
  return <Item
    side="right"
    date="2010"
    title="Part-time creator of home delivery"
    icon={faTruck}
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
        <li>Started negotiations with shops</li>
        <li>Sold for around 500 euros due to relocation to Saint-Petersburg</li>
      </ul>
    </p>

    <p>
      <strong>Technologies:</strong>
      PHP (Symfony 1), JS, CSS, HTML
    </p>

    <p>
      <strong>Location:</strong>
      Tomsk
    </p>
  </Item>;
}
