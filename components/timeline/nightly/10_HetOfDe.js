import { Item } from '../Item.js';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

export function HetOfDe() {
  return <Item
    side="right"
    date="2020 - 2021"
    title="Creator of telegram bot to study Dutch"
    icon={faLanguage}
  >
    <p>
      Done together with Natalia Oskolkova (https://www.facebook.com/NataliaOskolkova).
      After a year of development we decided to leave paid-only version from 2022.
      I was the only developer. Natalia was responsible for adding new exercises to the database and to promote the bot in the social networks.

      Link https://t.me/HetOfDeBot.
    </p>

    <p>
      <strong>Duties:</strong>
      <ul>
        <li>The only developer</li>
      </ul>
    </p>

    <p>
      <strong>Achievements:</strong>
      <ul>
        <li>Total number of users installed bot was more than 1 000</li>
        <li>Personal record of payments number (more than 100)</li>
        <li>
          Product-wise: landing + Stripe (later Pay.nl) payments;
          bot (based on NodeJS) with invitations, daily jobs, exercises (per rule or general), free/paid separation, user settings, support group, Google Analytics;
          admin panel (based on React with Evergreen components library, Express API) with user-friendly management of everything, analytics
        </li>
      </ul>
    </p>

    <p>
      <strong>Technologies:</strong>
      NodeJS (Heroku), PostgreSQL (Firestore in the beginning), React for landing/admin panel,
      https://cron-job.org/en/, Stripe (in the beginning, later switched to Pay.nl)
    </p>

    <p>
      <strong>Location:</strong>
      Amsterdam
    </p>
  </Item>;
}
