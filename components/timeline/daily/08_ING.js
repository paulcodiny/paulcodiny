import { Item } from '../Item.js';
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons';

export const ING = () => {
  return <Item
    date="2021"
    title="Full-time frontend developer at ING"
    icon={faPiggyBank}
  >
    <p>
      Another one of the best companies. As a team of frontend developers in Fraud prevention and investigation domain, we are responsible for authentication means for the Netherlands, the main login page at ing.nl and a variety different flows and components.
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
        <li>Issue with disappearing SVG in IE11 due to width/height/viewBox. Fixed by moving the coordinates to 0/0 and rescaling</li>
        <li>Studying internals of Polymer to understand how it can be optimized https://medium.com/js-planet/why-your-polymer-app-is-slow-in-non-chromium-browsers-and-how-to-make-it-fast-c1d3d6f1cd40</li>
        <li>Built the fastest page (for 9 months) at ING. For this created native custom elements without Shadow DOM based on HyperApp. That allowed us to reuse the components from other team while still being the fastest page</li>
        <li>Integration of Polymer components into AngularJS application. For this I built another public page to use it as CDN to avoid failing of unmaintained pipeline</li>
        <li>Initial version of developers toolbar</li>
        <li>Monorepo for all our components</li>
        <li>jscodeshift's list of transforms to migrate Polymer components to lion-web (https://medium.com/ing-blog/codemod-idea-to-make-your-codebase-evergreen-part-1-2-theory-f5b44e7824a2)</li>
        <li>Security Champion</li>
        <li>Storybook development plugins</li>
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
  </Item>;
};
