import Head from 'next/head'

const Item = ({ date, title, children, side = 'left' }) => (
  <div className={`item ${side}`}>
    <div className="date">{date}</div>
    <i className="icon fa fa-home" />
    <div className="content">
      <h2>{title}</h2>
      {children}
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Pavlik paulcodiny Kiselev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="timeline">
          <Item
            date="2005"
            title="Introduction to programming"
          />

          <Item
            date="2006 - 2007"
            title="Part-time freelance job"
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
                <li>I finished several projects after the previous developer (small PHP/JS fixes), made several websites from scratch (PHP, JS, HTML, CSS)</li>
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
            text={`Python, JS, CSS, HTML (Tomsk, no idea)`}
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
              PHP, JS, CSS, HTML
            </p>

            <p>
              <strong>Location:</strong>
              Tomsk
            </p>
          </Item>

          <Item
            date="2008 - 2010"
            title="Part-time(later full-time) at Zoom Group"
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
            text={`PHP, JS, CSS, HTML (Saint-Petersburg, )`}
          >
            <p>
              ...
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
          >
            <p>
              ...
            </p>

            <p>
              <strong>Duties:</strong>
              <ul>
                <li>Front-end development for the whole project in the beginning (including emails sometimes), later on cross-sell products only</li>
                <li>As a scrum-master facilitating refinement sessions, follow a scrum process, try to develop team maturity</li>
              </ul>
            </p>

            <p>
              <strong>Achievements:</strong>
              <ul>
                <li>Finished a new cross-sell product before the deadline as part of a team</li>
                <li>Finished hackathon project (not winner) as part of the new 7-people team (nice trip inspiration app for less than 24 hours)</li>
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
                <li>Won hackathon (together with Joav Melkman) with TypeScript/Angular task tracker with Audio input and Dialog flow</li>
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

          <Item
            side="right"
            date="2008"
            title="Part-time"
            text={`PHP, JS, CSS, HTML (Tomsk, E-Commerce shop of muscle growth supplements)`}
          />

          <Item
            side="right"
            date="2009"
            title="Part-time"
            text={`PHP, JS, CSS, HTML (Tomsk, Lookalike)`}
          />

          <Item
            side="right"
            date="2010"
            title="Part-time"
            text={`PHP, JS, CSS, HTML (Tomsk)`}
          >
            Symfony e-commerce system. I was building a delivery system of products to avoid lines in the stores.
            Sold for around 500 euros
          </Item>

          <Item
            side="right"
            date="2011"
            title="Lookalike (part-time)"
            text={``}
          >
            We were invited as a participants of TV-show about startups. Real users
            Technologies: Ruby, JS, CSS, HTML
            Location: Saint-Petersburg
          </Item>

          <Item
            side="right"
            date="2013"
            title="Part-time"
            text={`Pure HTML (Saint-Petersburg, 3D-printing upechka)`}
          >
            Selling products created with 3D-printing and raised awareness about this technology
            Together with Yury Popov (https://www.linkedin.com/in/yury-popov-978a4a67/)
            Role: co-founder
          </Item>

          <Item
            side="right"
            date="2015 - 2017"
            title="Full-time"
            text={`JS, React, CSS, HTML (Amsterdam, Growity.me)`}
          >
            Conversion rate optimization tool for Escape Rooms.
            We created a embeddable widget to run the experiments on the clients websites.
            https://growity.me
            We had clients on all continents.
            Technologies: React, Graph.cool, Gitlab, Google App Engine
          </Item>

          <Item
            side="right"
            date="2018"
            title="Part-time"
            text={`JS Planet`}
          >
            Giving courses to developers: for Russian developer English courses, for Western developers of JavaScript.
            Together with Alex Korzhikov (https://www.linkedin.com/in/alex-korzhikov-8614011a/) and Mikhail Kuznetcov (https://www.linkedin.com/in/michailkuznetcov/)
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
            Three developers, together with Tomislav Dalic (https://www.linkedin.com/in/tdalic/) and Tanja Sanders (https://www.linkedin.com/in/tanjasanders/).
            The service reached the state of pre-alpha
            Technologies: React, Graph.cool, Gitlab, Google App Engine
          </Item>

          <Item
            side="right"
            date="2020 - 2021"
            title="Part-time"
            text={`Telegram bot to study Dutch`}
          >
            Record of payments number. Done together with Natalia Oskolkova (https://www.facebook.com/NataliaOskolkova).
            After a year of development we decided to leave paid-only version from 2022.
            Link https://t.me/HetOfDeBot.
            Technologies: NodeJS (Heroku), PostgreSQL (Firestore in the beginning), React for landing/admin panel, https://cron-job.org/en/, Stripe (in the beginning, later switched to Pay.nl)
          </Item>

          <Item
            side="right"
            date="2020 - "
            title="Part-time"
            text={`Development agency`}
          >
            <p>After multiple attempts to make a useful product (Lookalik, Growity, GrowthHub) I decided to try helping others with the development process</p>
            <p>The idea is pretty simple - there are a lot of people that don&apos;t speak English in Russia but are really good in development</p>
            <p>With my experience I can assemble a good team of quality developers for the half of the price of Dutch developer</p>
          </Item>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        
        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: #ffffff;
        }
        
        .timeline {
          position: relative;
          width: 100%;
          max-width: 1140px;
          margin: 0 auto;
          padding: 15px 0;
        }
        
        .timeline::after {
          content: '';
          position: absolute;
          width: 2px;
          background: #006E51;
          top: 0;
          bottom: 0;
          left: 50%;
          margin-left: -1px;
        }
        
        .item {
          padding: 15px 30px;
          position: relative;
          background: inherit;
          width: 50%;
        }
        
        .item.left {
          left: 0;
        }
        
        .item.right {
          left: 50%;
        }
        
        .item::after {
          content: '';
          position: absolute;
          width: 16px;
          height: 16px;
          top: calc(50% - 8px);
          right: -8px;
          background: #ffffff;
          border: 2px solid #006E51;
          border-radius: 16px;
          z-index: 1;
        }
        
        .item.right::after {
          left: -8px;
        }
        
        .item::before {
          content: '';
          position: absolute;
          width: 50px;
          height: 2px;
          top: calc(50% - 1px);
          right: 8px;
          background: #006E51;
          z-index: 1;
        }
        
        .item.right::before {
          left: 8px;
        }
        
        .item .date {
          position: absolute;
          display: inline-block;
          top: calc(50% - 8px);
          font-size: 14px;
          font-weight: bold;
          color: #006E51;
          text-transform: uppercase;
          letter-spacing: 1px;
          width: 110px;
          z-index: 1;
        }
        
        .item.left .date {
          right: -125px;
          text-align: left;
        }
        
        .item.right .date {
          left: -125px;
          text-align: right;
        }
        
        .item .icon {
          position: absolute;
          display: inline-block;
          width: 40px;
          height: 40px;
          padding: 9px 0;
          top: calc(50% - 20px);
          background: #F6D155;
          border: 2px solid #006E51;
          border-radius: 40px;
          text-align: center;
          font-size: 18px;
          color: #006E51;
          z-index: 1;
        }
        
        .item.left .icon {
          right: 56px;
        }
        
        .item.right .icon {
          left: 56px;
        }
        
        .item .content {
          padding: 30px 90px 30px 30px;
          background: #F6D155;
          position: relative;
          border-radius: 0 500px 500px 0;
        }
        
        .item.right .content {
          padding: 30px 30px 30px 90px;
          border-radius: 500px 0 0 500px;
        }
        
        .item .content h2 {
          margin: 0 0 10px 0;
          font-size: 18px;
          font-weight: normal;
          color: #006E51;
        }
        
        .item .content p {
          margin: 0;
          font-size: 16px;
          line-height: 22px;
          color: #000000;
        }
        
        @media (max-width: 767.98px) {
          .timeline::after {
            left: 90px;
          }
        
          .item {
            width: 100%;
            padding-left: 120px;
            padding-right: 30px;
          }
        
          .item.right {
            left: 0%;
          }
        
          .item.left::after, 
          .item.right::after {
            left: 82px;
          }
        
          .item.left::before,
          .item.right::before {
            left: 100px;
            border-color: transparent #006E51 transparent transparent;
          }
        
          .item.left .date,
          .item.right .date {
            right: auto;
            left: 15px;
          }
        
          .item.left .icon,
          .item.right .icon {
            right: auto;
            left: 146px;
          }
        
          .item.left .content,
          .item.right .content {
            padding: 30px 30px 30px 90px;
            border-radius: 500px 0 0 500px;
          }
        }
      `}</style>
    </div>
  )
}
