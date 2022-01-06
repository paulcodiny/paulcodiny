import { Item } from '../Item.js';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export function ZoomGroup() {
  return <Item
    date="2008 - 2010"
    title="Part-time (later full-time) at Zoom Group"
    icon={faHome}
  >
    <p>
      One of the first work place where I learned that you can make friends for life there.
      We still meet with my ex-coworkers when I&apos;m in Tomsk.
    </p>

    <p>
      <strong>Duties:</strong>
      <ul>
        <li>I was working on variety of different websites based on PHP (Symfony, Zend), MySQL, JS, HTML, CSS</li>
      </ul>
    </p>

    <p>
      <strong>Achievements:</strong>
      <ul>
        <li>introduced new framework PHP Symfony instead of Zend</li>
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
