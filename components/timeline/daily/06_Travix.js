import { Item } from '../Item.js';
import { faPlane } from '@fortawesome/free-solid-svg-icons';

export const Travix = () => {
  return <Item
    date="2016 - 2017"
    title="Full-time frontend developer at Travix"
    icon={faPlane}
  >
    <p>
      This is my first job in Amsterdam. Young, a bit wild, russian programmer came to Amsterdam. As part of the
      team I was working on website https://cheaptickets.nl
    </p>

    <p>
      <strong>Duties:</strong>
      <ul>
        <li>Front-end development for the whole project in the beginning (including emails sometimes), later on
          cross-sell products only
        </li>
        <li>As a scrum-master facilitating refinement sessions, follow a scrum process, try to develop team
          maturity
        </li>
      </ul>
    </p>

    <p>
      <strong>Achievements:</strong>
      <ul>
        <li>Finished a new cross-sell product before the deadline as part of a team</li>
        <li>Finished hackathon project (not winner) as part of the new 7-people team (nice trip inspiration app
          for less than 24 hours)
        </li>
        <li>Finished improvement of an interface to import translations l10ns</li>
        <li>Chrome browser extension for internal purposes (simplify testing and developing)</li>
      </ul>
    </p>

    <p>
      <strong>Technologies:</strong>
      React, Redux, Mocha, Chai, Javascript (ES2016), ESLint, Stylelint, Gulp, Nightwatch, Git, SCSS
    </p>

    <p>
      <strong>Location:</strong>
      Amsterdam
    </p>
  </Item>;
};

