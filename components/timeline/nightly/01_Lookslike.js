import { Item } from '../Item.js';
import { faSmileWink } from '@fortawesome/free-solid-svg-icons';

export function Lookslike() {
  return <Item
    side="right"
    date="2009"
    title="Lookalike (attempt 1)"
    icon={faSmileWink}
  >
    <p>
      This is a service (App) on top of VK platform. It allows to find a similar person on uploaded photo. The
      group for the app is https://vk.com/lookslike_me.
      The idea of the project belongs to Vitaliy Sokovikov (https://www.linkedin.com/in/vitaliy-s-4222a896/)
    </p>

    <p>
      <strong>Duties:</strong>
      <ul>
        <li>VK app creation based on PHP (Symfony 1)</li>
        <li>Actual program to compare pictures was created by a friend of mine from Facebook</li>
      </ul>
    </p>

    <p>
      <strong>Achievements:</strong>
      <ul>
        <li>VK app creation</li>
        <li>Actual program to compare pictures was created by a friend of mine from Facebook</li>
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
