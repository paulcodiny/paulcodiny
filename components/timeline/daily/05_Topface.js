import { Item } from '../Item.js';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export const Topface = () => {
  return <Item
    date="2011 - 2016"
    title="Full-time fullstack developer (later product owner) at Topface"
    icon={faHeart}
  >
    <p>
      Another one of the best companies I&apos;ve ever worked. We are still in contact with ex-coworkers and some
      of
      them are truly my friends.
      Topface was one of the biggest Dating apps in Russia. It was working in Social Networks like Facebook, VK,
      Odnoklassniki, Moi Mir (https://my.mail.ru/) and standalone app https://topface.com/
      It was a highload project with more than a million daily users. I learned there a lot about scalability
      (both horizontal and vertical), caching, queueing and many more technical features.
      From the functional level I learned alot about A/B testing, advertising, business monitoring and product
      development.
    </p>

    <p>
      <strong>Duties:</strong>
      <ul>
        <li>Coding (commercials department first, then product, then experiments, then product again)</li>
        <li>Backend developer -&gt; Frontend developer -&gt; Senior frontend developer -&gt; Product manager</li>
      </ul>
    </p>

    <p>
      <strong>Achievements:</strong>
      <ul>
        <li>Introduced task tracker Redmine instead of Google Sheets</li>
        <li>Introduced developer toolbar (highly inspired by Symfony Web Debug Toolbar)</li>
        <li>Introduced the first version of User Targeting system</li>
        <li>Won the hackathon with the time tracking system (ruby-based redmine plugin)</li>
      </ul>
    </p>

    <p>
      <strong>Technologies:</strong>
      PHP, JS, CSS, HTML
    </p>

    <p>
      <strong>Location:</strong>
      Saint-Petersburg
    </p>
  </Item>;
};

