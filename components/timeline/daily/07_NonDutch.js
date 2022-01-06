import { Item } from '../Item.js';
import { faTools } from '@fortawesome/free-solid-svg-icons';

export const NonDutch = () => {
  return <Item
    date="2017 - 2020"
    title="Full-time frontend consultant at NonDutch/Frontmen"
    icon={faTools}
  >
    <p>
      ...
    </p>

    <p>
      <strong>Duties:</strong>
      <ul>
        <li>Frontend development at TMG (3 months)</li>
        <li>Frontend development at ING (3 years 7 months)</li>
      </ul>
    </p>

    <p>
      <strong>Achievements:</strong>
      <ul>
        <li>Won hackathon (together with Joav Melkman) with TypeScript/Angular task tracker with Audio input and
          Dialog flow
        </li>
        <li>Multiple talks about different topics</li>
      </ul>
    </p>

    <p>
      <strong>Technologies:</strong>
      JavaScript, CSS, HTML
    </p>

    <p>
      <strong>Location:</strong>
      Amsterdam
    </p>
  </Item>;
};
