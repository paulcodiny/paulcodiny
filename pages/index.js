import Head from 'next/head.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Timeline } from '../components/timeline/Timeline.js';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pavlik paulcodiny Kiselev</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <header id="header">
        <div className="inner">
          <a href="#" className="image avatar"><img src="../public/images/avatar.jpg" alt=""/></a>
          <h1><strong>Hi 👋, I&apos;m Pavlik.</strong><br/>
            Frontend developer by day,<br/>
            small development agency owner by night.</h1>
        </div>

        <footer id="footer">
          <div className="inner">
            <ul className="icons">
              <li>
                <a href="https://www.linkedin.com/in/%F0%9F%92%BB-pavlik-kiselev-06993347/" className="icon brands">
                  <FontAwesomeIcon icon={faLinkedin}/>
                  <span className="label">LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/paulcodiny" className="icon brands fa-github">
                  <FontAwesomeIcon icon={faGithub}/>
                  <span className="label">Github</span>
                </a>
              </li>
              <li>
                <a href="mailto:paulcodiny at Google" className="icon solid fa-envelope">
                  <FontAwesomeIcon icon={faEnvelope}/>
                  <span className="label">paulcodiny at Google&apos;s mail</span>
                </a>
              </li>
            </ul>
            <ul className="copyright">
              <li>&copy; Pavlik @paulcodiny Kiselev</li>
              <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
            </ul>
          </div>
        </footer>
      </header>

      <main id="main">
        <Timeline/>
      </main>


      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
          Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
          sans-serif;
          
          background-image: linear-gradient(to right, rgb(84, 74, 125), rgb(255, 212, 82));
        }

        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        /* Header */

        #header {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: space-between;
          color: rgba(255, 255, 255, 0.5);
          height: 100%;
          left: 0;
          padding: 8em 4em;
          position: fixed;
          text-align: right;
          top: 0;
          width: 35%;
        }

        #header > * {
          flex-shrink: 0;
          width: 100%;
        }

        #header > .inner {
          flex-grow: 1;
          margin: 0 0 2em 0;
        }

        #header strong, #header b {
          color: #ffffff;
        }

        #header h2, #header h3, #header h4, #header h5, #header h6 {
          color: #ffffff;
        }

        #header h1 {
          color: rgba(255, 255, 255, 0.5);
          font-size: 1.35em;
          line-height: 1.75em;
          margin: 0;
        }

        #header .image.avatar {
          margin: 0 0 1em 0;
          width: 6.25em;
        }

        /* Footer */

        #footer .icons {
          margin: 1em 0 0 0;
        }

        #footer .icons a {
          color: rgba(255, 255, 255, 0.4);
        }

        #footer .copyright {
          color: rgba(255, 255, 255, 0.4);
          font-size: 0.8em;
          list-style: none;
          margin: 1em 0 0 0;
          padding: 0;
        }

        #footer .copyright li {
          border-left: solid 1px rgba(255, 255, 255, 0.25);
          display: inline-block;
          line-height: 1em;
          margin-left: 0.75em;
          padding-left: 0.75em;
        }

        #footer .copyright li:first-child {
          border-left: 0;
          margin-left: 0;
          padding-left: 0;
        }

        #footer .copyright li a {
          color: inherit;
        }

        #main {
          margin-left: 35%;
          width: calc(100% - 35%);
        }

        /* Icon */

        .icon {
          text-decoration: none;
          border-bottom: none;
          position: relative;
        }

        .icon > .label {
          display: none;
        }

        .icon:before {
          line-height: inherit;
        }

        .icon.solid:before {
          font-weight: 900;
        }

        /* Image */

        .image {
          border-radius: 0.35em;
          border: 0;
          display: inline-block;
          position: relative;
        }

        .image:before {
          -moz-transition: opacity 0.2s ease-in-out;
          -webkit-transition: opacity 0.2s ease-in-out;
          -ms-transition: opacity 0.2s ease-in-out;
          transition: opacity 0.2s ease-in-out;
          background: url("images/overlay.png");
          border-radius: 0.35em;
          content: '';
          display: block;
          height: 100%;
          left: 0;
          opacity: 0.5;
          position: absolute;
          top: 0;
          width: 100%;
        }

        .image.thumb {
          text-align: center;
        }

        .image.thumb:after {
          -moz-transition: opacity 0.2s ease-in-out;
          -webkit-transition: opacity 0.2s ease-in-out;
          -ms-transition: opacity 0.2s ease-in-out;
          transition: opacity 0.2s ease-in-out;
          border-radius: 0.35em;
          border: solid 3px rgba(255, 255, 255, 0.5);
          color: #fff;
          content: 'View';
          display: inline-block;
          font-size: 0.8em;
          font-weight: 400;
          left: 50%;
          line-height: 2.25em;
          margin: -1.25em 0 0 -3em;
          opacity: 0;
          padding: 0 1.5em;
          position: absolute;
          text-align: center;
          text-decoration: none;
          top: 50%;
          white-space: nowrap;
        }

        .image.thumb:hover:after {
          opacity: 1.0;
        }

        .image.thumb:hover:before {
          background: url("images/overlay.png"), url("images/overlay.png");
          opacity: 1.0;
        }

        .image img {
          border-radius: 0.35em;
          display: block;
        }

        .image.left {
          float: left;
          margin: 0 1.5em 1em 0;
          top: 0.25em;
        }

        .image.right {
          float: right;
          margin: 0 0 1em 1.5em;
          top: 0.25em;
        }

        .image.left, .image.right {
          max-width: 40%;
        }

        .image.left img, .image.right img {
          width: 100%;
        }

        .image.fit {
          display: block;
          margin: 0 0 2em 0;
          width: 100%;
        }

        .image.fit img {
          width: 100%;
        }

        .image.avatar {
          border-radius: 100%;
        }

        .image.avatar:before {
          display: none;
        }

        .image.avatar img {
          border-radius: 100%;
          width: 100%;
        }

        /* List */

        ol {
          list-style: decimal;
          margin: 0 0 2em 0;
          padding-left: 1.25em;
        }

        ol li {
          padding-left: 0.25em;
        }

        ul {
          list-style: disc;
          margin: 0 0 2em 0;
          padding-left: 1em;
        }

        ul li {
          padding-left: 0.5em;
        }

        ul.alt {
          list-style: none;
          padding-left: 0;
        }

        ul.alt li {
          border-top: solid 2px #efefef;
          padding: 0.5em 0;
        }

        ul.alt li:first-child {
          border-top: 0;
          padding-top: 0;
        }

        dl {
          margin: 0 0 2em 0;
        }

        /* Icons */

        ul.icons {
          cursor: default;
          list-style: none;
          padding-left: 0;
        }

        ul.icons li {
          display: inline-block;
          padding: 0 1em 0 0;
        }

        ul.icons li:last-child {
          padding-right: 0;
        }

        ul.icons li .icon:before {
          font-size: 1.5em;
        }

        /* Labeled Icons */

        ul.labeled-icons {
          list-style: none;
          padding: 0;
        }

        ul.labeled-icons li {
          line-height: 1.75em;
          margin: 1.5em 0 0 0;
          padding-left: 2.25em;
          position: relative;
        }

        ul.labeled-icons li:first-child {
          margin-top: 0;
        }

        ul.labeled-icons li a {
          color: inherit;
        }

        ul.labeled-icons li h3 {
          color: #b2b2b2;
          left: 0;
          position: absolute;
          text-align: center;
          top: 0;
          width: 1em;
        }

        /* XLarge */

        @media screen and (max-width: 1800px) {

          /* Basic */
          body, input, select, textarea {
            font-size: 12pt;
          }

        }

        /* Large */

        @media screen and (max-width: 1280px) {

          /* Header */
          #header {
            padding: 6em 3em 3em 3em;
            width: 30%;
          }

          #header h1 {
            font-size: 1.25em;
          }

          #header h1 br {
            display: none;
          }

          #header > .inner {
            margin-bottom: 0;
          }

          /* Footer */
          #footer .copyright li {
            border-left-width: 0;
            display: block;
            line-height: 2.25em;
            margin-left: 0;
            padding-left: 0;
          }

          /* Main */
          #main {
            margin-left: 30%;
            max-width: none;
            padding: 6em 3em 3em 3em;
            width: calc(100% - 30%);
          }

        }

        /* Medium */

        @media screen and (max-width: 980px) {

          /* Basic */
          h1 br, h2 br, h3 br, h4 br, h5 br, h6 br {
            display: none;
          }

          /* List */
          ul.icons li .icon {
            font-size: 1.25em;
          }

          /* Header */
          #header {
            background-attachment: scroll;
            background-position: top left, center center;
            background-size: auto, cover;
            left: auto;
            padding: 6em 4em;
            position: relative;
            text-align: center;
            top: auto;
            width: 100%;
            display: block;
          }

          #header h1 {
            font-size: 1.75em;
          }

          #header h1 br {
            display: inline;
          }

          /* Footer */
          #footer {
            background-attachment: scroll;
            background-color: #1f1815;
            background-image: url("images/overlay.png"), url("../../images/bg.jpg");
            background-position: top left, bottom center;
            background-repeat: repeat, no-repeat;
            background-size: auto, cover;
            bottom: auto;
            left: auto;
            padding: 4em 4em 6em 4em;
            position: relative;
            text-align: center;
            width: 100%;
          }

          #footer .icons {
            margin: 0 0 1em 0;
          }

          #footer .copyright {
            margin: 0 0 1em 0;
          }

          #footer .copyright li {
            border-left-width: 1px;
            display: inline-block;
            line-height: 1em;
            margin-left: 0.75em;
            padding-left: 0.75em;
          }

          /* Main */
          #main {
            margin: 0;
            padding: 6em 4em;
            width: 100%;
          }

        }

        /* Small */

        @media screen and (max-width: 736px) {

          /* Basic */
          h1 {
            font-size: 1.5em;
          }

          h2 {
            font-size: 1.2em;
          }

          h3 {
            font-size: 1em;
          }

          /* Section/Article */
          section.special, article.special {
            text-align: center;
          }

          header.major h2 {
            font-size: 1.35em;
          }

          /* List */
          ul.labeled-icons li {
            padding-left: 2em;
          }

          ul.labeled-icons li h3 {
            line-height: 1.75em;
          }

          /* Header */
          #header {
            padding: 2.25em 1.5em;
          }

          #header h1 {
            font-size: 1.35em;
          }

          /* Footer */
          #footer {
            padding: 2.25em 1.5em;
          }

          /* Main */
          #main {
            padding: 2.25em 1.5em 0.25em 1.5em;
          }

          #main > section {
            margin: 2.25em 0 0 0;
            padding: 2.25em 0 0 0;
          }

          /* Poptrox */
          .poptrox-popup {
            border-radius: 0;
          }

          .poptrox-popup .nav-next:before,
          .poptrox-popup .nav-previous:before {
            margin-top: -1em;
          }

        }

        /* XSmall */

        @media screen and (max-width: 480px) {

          /* Header */
          #header {
            padding: 4.5em 1.5em;
          }

          #header h1 br {
            display: none;
          }

          /* Footer */
          #footer .copyright li {
            border-left-width: 0;
            display: block;
            line-height: 2.25em;
            margin-left: 0;
            padding-left: 0;
          }
        }
      `}</style>
    </>
  );
}
