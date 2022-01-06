import { Item } from '../Item.js';
import { faCode } from '@fortawesome/free-solid-svg-icons';

export function GrowityStudio() {
  return <Item
    side="right"
    date="2020 - "
    title="Founder of Development agency Growity"
    icon={faCode}
  >
    <p>After multiple attempts to make a useful product (Lookalik, Growity, GrowthHub) I decided to try helping
      others with the development process</p>
    <p>The idea is pretty simple - there are a lot of people that don&apos;t speak English in Russia but are
      really good in development</p>
    <p>With my experience I can assemble a good team of quality developers for the half of the price of Dutch
      developer</p>

    <p>
      <strong>Duties:</strong>
      <ul>
        <li>Looking for clients</li>
        <li>Hiring of developers</li>
        <li>Building development process</li>
      </ul>
    </p>

    <p>
      <strong>Achievements:</strong>
      <ul>
        <li>WorkPi</li>
        <li>Russian pharmacevtic company</li>
        <li>Vendie</li>
        <li>Another russian</li>
      </ul>
    </p>

    <p>
      <strong>Technologies:</strong>
      Telegram
    </p>

    <p>
      <strong>Location:</strong>
      Amsterdam
    </p>
  </Item>;
}
