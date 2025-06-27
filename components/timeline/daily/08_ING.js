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
        <li>Contributions to open source project <a href={"https://github.com/ing-bank/lion"}>Lion</a></li>
        <li>Ran internal workshops and talks at conferences about monorepo and Developer Experience</li>
        <li>Many internal components that increase velocity of the FE developers in our department like <code>ui-layout</code>, <code>ui-card</code>, <code>ui-row</code> and <code>ui-footer</code></li>
        <li>jscodeshift&apos;s list of transforms to migrate Polymer components to lion-web (<a href={"https://medium.com/ing-blog/codemod-idea-to-make-your-codebase-evergreen-part-1-2-theory-f5b44e7824a2"}>Medium post</a>). Later on this idea was picked up by a platform team to provide migration automation for the future component versions</li>
        <li>Issue with disappearing SVG in IE11 due to width/height/viewBox. Fixed by moving the coordinates to 0/0 and rescaling</li>
        <li>Studying internals of Polymer to understand how it can be optimized (<a href={"https://medium.com/js-planet/why-your-polymer-app-is-slow-in-non-chromium-browsers-and-how-to-make-it-fast-c1d3d6f1cd40"}>Medium post</a>)</li>
        <li>Built the fastest page (for 9 months) at ING. For this created native custom elements without Shadow DOM based on HyperApp. That allowed us to reuse the components from other team while still being the fastest page</li>
        <li>Integration of Polymer components into AngularJS application. For this I built another public page to use it as CDN to avoid failing of unmaintained pipeline</li>
        <li>Initial version of developers toolbar</li>
        <li>Monorepo for all our components (<a href={"https://medium.com/"}>Medium post</a>)</li>

        <li>Security Champion</li>
        <li>A11y Champion</li>
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
