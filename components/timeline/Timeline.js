import { useEffect, useLayoutEffect } from 'react';
import { Item } from './Item.js';
import {
  faBaby, faBath,
  faBuilding,
  faCampground, faChartLine, faCode, faCube,
  faDumbbell, faGrinWink, faHeart,
  faHome, faLanguage, faPiggyBank,
  faPlane, faSitemap, faSmileWink, faStore, faTools, faTruck,
  faWarehouse
} from '@fortawesome/free-solid-svg-icons';
import { faJs, faSymfony } from '@fortawesome/free-brands-svg-icons';

const useIsomorphicLayoutEffect = typeof window !== 'undefined'
  ? useLayoutEffect
  : useEffect;

export const Timeline = () => {
  useIsomorphicLayoutEffect(() => {
    const distances = { left: 0, right: 0 };
    const $items = document.querySelectorAll('.item');
    [...$items].forEach(($item) => {
      if ($item.classList.contains('right')) {
        $item.style.top = `${distances.right}px`;
        distances.right += $item.offsetHeight;
      } else {
        $item.style.top = `${distances.left}px`;
        distances.left += $item.offsetHeight;
      }
    });

    document.querySelector('.timeline').style.height = `${Math.max(distances.left, distances.right)}px`;
  }, []);

  return (
    <>
      <div className="timeline">
        <Item
          date="2005"
          title="Introduction to programming"
          icon={faBaby}
        />

        <Item
          date="2006 - 2007"
          title="Part-time freelance job"
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
        </Item>

        <Item
          date="2007 - 2008"
          title="Part-time freelance job"
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
        </Item>

        <Item
          date="2008 - 2010"
          title="Part-time(later full-time) at Zoom Group"
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
        </Item>

        <Item
          date="2010 - 2011"
          title="Full-time job at ITScript"
          icon={faBath}
        >
          <p>
            <strong>Duties:</strong>
            <ul>
              <li>I was working on one of the biggest UK retailer https://www.bathrooms.com/.</li>
            </ul>
          </p>

          <p>
            <strong>Technologies:</strong>
            Perl, JS, CSS, HTML
          </p>

          <p>
            <strong>Location:</strong>
            Tomsk
          </p>
        </Item>

        <Item
          date="2011 - 2016"
          title="Topface"
          icon={faHeart}
        >
          <p>
            Another one of the best companies I&apos;ve ever worked. We are still in contact with ex-coworkers and some of
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
        </Item>

        <Item
          date="2016 - 2017"
          title="Full-time frontend developer at Travix"
          icon={faPlane}
        >
          <p>
            ...
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
        </Item>

        <Item
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
        </Item>

        <Item
          date="2021"
          title="Full-time frontend develop at ING"
          icon={faPiggyBank}
        >
          <p>
            ...
          </p>

          <p>
            <strong>Duties:</strong>
            <ul>
              <li>Frontend development</li>
            </ul>
          </p>

          <p>
            <strong>Achievements:</strong>
            <ul>
              <li></li>
              <li></li>
            </ul>
          </p>

          <p>
            <strong>Technologies:</strong>
            JavaScript, CSS, HTML, Web Components, Lit, NodeJS, Monorepo, WebdriverIO
          </p>

          <p>
            <strong>Location:</strong>
            Amsterdam
          </p>
        </Item>


        {/* Personal */}
        <Item
          side="right"
          date="2008"
          title="Supplements e-commerce shop"
          icon={faDumbbell}
        >
          <p>
            With a couple of friends we made an e-commerce shop of muscle growth supplements.
            From their side was financial investments and advertising, from my web development and technical support.
          </p>

          <p>
            <strong>Duties:</strong>
            <ul>
              <li>Web development</li>
            </ul>
          </p>

          <p>
            <strong>Achievements:</strong>
            <ul>
              <li>Domain registration</li>
              <li>Server configuration for own hosting</li>
              <li>Website development</li>
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
        </Item>

        <Item
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
        </Item>

        <Item
          side="right"
          date="2010"
          title="Part-time"
          icon={faTruck}
        >
          <p>
            E-commerce system. I was building a delivery system of products to avoid lines in the stores.
          </p>

          <p>
            <strong>Duties:</strong>
            <ul>
              <li>Design in photoshop (around 13 pages)</li>
              <li>Web development</li>
            </ul>
          </p>

          <p>
            <strong>Achievements:</strong>
            <ul>
              <li>Started negotiations with shops</li>
              <li>Sold for around 500 euros due to relocation to Saint-Petersburg</li>
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
        </Item>

        <Item
          side="right"
          date="2011"
          title="Webface CMF"
          icon={faSitemap}
        >
          <p>
            My own Content Management Framework. https://github.com/paulcodiny/WebFace-CMF
          </p>

          <p>
            <strong>Duties:</strong>
            <ul>
              <li>Architecture and development</li>
              <li>Design</li>
            </ul>
          </p>

          <p>
            <strong>Achievements:</strong>
            <ul>
              <li>It was working</li>
            </ul>
          </p>

          <p>
            <strong>Technologies:</strong>
            PHP, JS, HTML, CSS
          </p>

          <p>
            <strong>Location:</strong>
            Tomsk
          </p>
        </Item>

        <Item
          side="right"
          date="2011 - 2013"
          title="Lookalike (attempt 2)"
          icon={faGrinWink}
        >
          <p>
            E-commerce system. I was building a delivery system of products to avoid lines in the stores.
          </p>

          <p>
            <strong>Duties:</strong>
            <ul>
              <li>Design in photoshop (around 13 pages)</li>
              <li>Web development</li>
            </ul>
          </p>

          <p>
            <strong>Achievements:</strong>
            <ul>
              <li>We were invited as a participants of TV-show about startups</li>
              <li>Real users</li>
              <li>Own pictures comparison program switched to https://www.faceplusplus.com/face-comparing/</li>
            </ul>
          </p>

          <p>
            <strong>Technologies:</strong>
            Ruby (Ruby on Rails), WebSockets, Sidekiq(redis), CoffeeScript (Joosy framework
            https://github.com/joosy/joosy), SASS, HAML
          </p>

          <p>
            <strong>Location:</strong>
            Saint-Petersburg
          </p>
        </Item>

        <Item
          side="right"
          date="2013"
          title="Webface Silex Extension"
          icon={faSymfony}
        >
          <p>
            Extension for Silex https://github.com/silexphp/Silex to easily build admin panel
          </p>

          <p>
            <strong>Duties:</strong>
            <ul>
              <li>Architecture and development</li>
            </ul>
          </p>

          <p>
            <strong>Achievements:</strong>
            <ul>
              <li>It was working</li>
            </ul>
          </p>

          <p>
            <strong>Technologies:</strong>
            PHP, JS, HTML, CSS
          </p>

          <p>
            <strong>Location:</strong>
            Saint-Petersburg
          </p>
        </Item>

        <Item
          side="right"
          date="2013"
          title="Part-time"
          icon={faCube}
        >
          <p>
            Selling products created with 3D-printing and raised awareness about this technology
            Together with Yury Popov (https://www.linkedin.com/in/yury-popov-978a4a67/)
            Role: co-founder
          </p>

          <p>
            <strong>Duties:</strong>
            <ul>
              <li>Web development</li>
              <li>Communication with clients (together)</li>
            </ul>
          </p>

          <p>
            <strong>Achievements:</strong>
            <ul>
              <li>Sold multiple items</li>
            </ul>
          </p>

          <p>
            <strong>Technologies:</strong>
            PHP, JS, HTML, CSS
          </p>

          <p>
            <strong>Location:</strong>
            Saint-Petersburg
          </p>
        </Item>

        <Item
          side="right"
          date="2016 - 2018"
          title="Full-time"
          text={`JS, React, CSS, HTML (Amsterdam, Growity.me)`}
          icon={faChartLine}
        >
          Conversion rate optimization tool for Escape Rooms.
          We created a embeddable widget to run the experiments on the clients websites.
          https://growity.me
          We had clients on all continents.
          Technologies: React, Graph.cool, Gitlab, Google App Engine
        </Item>

        <Item
          side="right"
          date="2018 - 2019"
          title="JS Planet"
          icon={faJs}
        >
          Giving courses to developers: for Russian developer English courses, for Western developers of JavaScript.
          Together with Alex Korzhikov (https://www.linkedin.com/in/alex-korzhikov-8614011a/) and Mikhail Kuznetcov
          (https://www.linkedin.com/in/michailkuznetcov/)
          https://medium.com/js-planet
          Role: co-founder
        </Item>

        <Item
          side="right"
          date="2019"
          title="Part-time"
          text={`GrowthHub`}
        >
          A task/experiment tracker that is based on Growth Hacking Cycle.
          Three developers, together with Tomislav Dalic (https://www.linkedin.com/in/tdalic/) and Tanja Sanders
          (https://www.linkedin.com/in/tanjasanders/).
          The service reached the state of pre-alpha
          Technologies: React, Graph.cool, Gitlab, Google App Engine
        </Item>

        <Item
          side="right"
          date="2020 - 2021"
          title="Part-time"
          text={`Telegram bot to study Dutch`}
          icon={faLanguage}
        >
          Record of payments number. Done together with Natalia Oskolkova (https://www.facebook.com/NataliaOskolkova).
          After a year of development we decided to leave paid-only version from 2022.
          Link https://t.me/HetOfDeBot.
          Technologies: NodeJS (Heroku), PostgreSQL (Firestore in the beginning), React for landing/admin panel,
          https://cron-job.org/en/, Stripe (in the beginning, later switched to Pay.nl)
        </Item>

        <Item
          side="right"
          date="2020 - "
          title="Part-time"
          text={`Development agency`}
          icon={faCode}
        >
          <p>After multiple attempts to make a useful product (Lookalik, Growity, GrowthHub) I decided to try helping
            others with the development process</p>
          <p>The idea is pretty simple - there are a lot of people that don&apos;t speak English in Russia but are
            really good in development</p>
          <p>With my experience I can assemble a good team of quality developers for the half of the price of Dutch
            developer</p>
        </Item>
      </div>

      <style jsx>{`
        .timeline {
          position: relative;
          width: 100%;
          margin: 0 auto;
          padding: 15px 0;
        }
        
        .timeline::after {
          content: '';
          position: absolute;
          width: 2px;
          background: rgb(84, 74, 125);
          top: 0;
          bottom: 0;
          left: 50%;
          margin-left: -1px;
        }
        
        ul {
          margin-left: 4px;
          margin-top: 8px;
          margin-bottom: 0;
        }
        
        ul li {
          padding-left: 0;
        }
      `}</style>
    </>
  );
}
