import { Item } from '../Item.js';
import { faStore } from '@fortawesome/free-solid-svg-icons';

export const SecondJob = () => {
  return <Item
    date="2007 - 2008"
    title="Part-time web developer"
    icon={faStore}
  >
    <p>
      My second commercial job.
    </p>

    <p>
      <strong>Duties:</strong>
      <ul>
        <li>I was working with Django framework on Python and also on client-side (JS, CSS, HTML).</li>
      </ul>
    </p>

    <p>
      <strong>Achievements:</strong>
      <ul>
        <li>The biggest project was for one of the biggest Tomsk estate agency &quot;Center&quot;</li>
      </ul>
    </p>

    <p>
      <strong>Technologies:</strong>
      Python, JS, CSS, HTML
    </p>

    <p>
      <strong>Location:</strong>
      Tomsk
    </p>
  </Item>;
};
