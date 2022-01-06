import { Item } from '../Item.js';
import { faCampground } from '@fortawesome/free-solid-svg-icons';

export const FirstJob = () => {
  return <Item
    date="2006 - 2007"
    title="Part-time web developer"
    icon={faCampground}
  >
    <p>
      My first commercial job.
    </p>

    <p>
      <strong>Duties:</strong>
      <ul>
        <li>I was working as a freelancer for one client for almost a year.</li>
      </ul>
    </p>

    <p>
      <strong>Achievements:</strong>
      <ul>
        <li>I finished several projects after the previous developer (small PHP/JS fixes), made several websites
          from scratch (PHP, JS, HTML, CSS)
        </li>
        <li>The biggest project was for chain of supermarkets Bystronom</li>
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
};
