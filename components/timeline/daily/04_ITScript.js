import { Item } from '../Item.js';
import { faBath } from '@fortawesome/free-solid-svg-icons';

export const ITScript = () => {
  return <Item
    date="2010 - 2011"
    title="Full-time Perl developer at ITScript"
    icon={faBath}
  >
    <p>
      <strong>Duties:</strong>
      <ul>
        <li>I was working on one of the biggest UK retailer https://www.bathrooms.com/.</li>
      </ul>
    </p>

    <p>
      <strong>Technologies:</strong>
      Perl, JS, CSS, HTML
    </p>

    <p>
      <strong>Location:</strong>
      Tomsk
    </p>
  </Item>;
};
