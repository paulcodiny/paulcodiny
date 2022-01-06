import { Item } from '../Item.js';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

export function Growity() {
  return <Item
    side="right"
    date="2016 - 2018"
    title="Full-time CEO at Growity"
    icon={faChartLine}
  >
    <p>
      My first personal project where I was CEO and not a developer.
      This is a conversion rate optimization tool for Escape Rooms.
      We created a embeddable widget to run the experiments on the clients websites and track the converstion.
      Something like Google Optimize with a stress on developers, native integration with Google Analytics and
      unlimmited number of experiments per page and per site.
      https://growity.me
    </p>

    <p>
      <strong>Duties:</strong>
      <ul>
        <li>Work with analytics team (two persons) to understand users behavior</li>
        <li>Hire the team</li>
        <li>Product vision and roadmap</li>
        <li>Together with sales team (one person) looking for new clients</li>
        <li>Development management (one person)</li>
      </ul>
    </p>

    <p>
      <strong>Achievements:</strong>
      <ul>
        <li>Working product (a couple of times pivoted)</li>
        <li>We had clients in the Netherlands, Spain, Czech republic, UK, USA and Argentina</li>
      </ul>
    </p>

    <p>
      <strong>Technologies:</strong>
      React, Graph.cool, Gitlab, Google App Engine
    </p>

    <p>
      <strong>Location:</strong>
      Amsterdam
    </p>
  </Item>;
}
