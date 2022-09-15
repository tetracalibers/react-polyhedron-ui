import { ComponentStory } from '@storybook/react'
import { CodeHighlight } from '..'

export default {
  title: 'IT contents/CodeHighlight',
  component: CodeHighlight,
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
  argTypes: {},
}

const CSSeXample: ComponentStory<typeof CodeHighlight> = () => (
  <CodeHighlight lang='css'>
    {`@import url(https://fonts.googleapis.com/css?family=Questrial);
@import url(https://fonts.googleapis.com/css?family=Arvo);

@font-face {
  src: url(https://lea.verou.me/logo.otf);
  font-family: 'LeaVerou';
}

/*
 Shared styles
 */

section h1,
#features li strong,
header h2,
footer p {
  font: 100% Rockwell, Arvo, serif;
}

/*
 Styles
 */

* {
  margin: 0;
  padding: 0;
}

body {
  font: 100%/1.5 Questrial, sans-serif;
  tab-size: 4;
  hyphens: auto;
}

a {
  color: inherit;
}

section h1 {
  font-size: 250%;
}

section section h1 {
  font-size: 150%;
}

section h1 code {
  font-style: normal;
}

section h1 > a,
section h2[id] > a {
  text-decoration: none;
}

section h1 > a:before,
section h2[id] > a:before {
  content: '§';
  position: absolute;
  padding: 0 0.2em;
  margin-left: -1em;
  border-radius: 0.2em;
  color: silver;
  text-shadow: 0 1px white;
}

section h1 > a:hover:before,
section h2[id] > a:hover:before {
  color: black;
  background: #f1ad26;
}

p {
  margin: 1em 0;
}

section h1,
h2,
h3 {
  margin: 1em 0 0.3em;
}

h2,
h3 {
  font-weight: normal;
}

dt {
  margin: 1em 0 0 0;
  font-size: 130%;
}

dt:after {
  content: ':';
}

dd {
  margin-left: 2em;
}

strong {
  font-weight: bold;
}

code,
pre {
  font-family: Consolas, Monaco, 'Andale Mono', 'Lucida Console', monospace;
  hyphens: none;
}

pre {
  max-height: 30em;
  overflow: auto;
}

mark {
  outline: 0.4em solid red;
  outline-offset: 0.4em;
  margin: 0.4em 0;
  background-color: transparent;
  display: inline-block;
}

header,
body > section {
  display: block;
  max-width: 900px;
  margin: auto;
}

header,
footer {
  position: relative;
  padding: 30px -webkit-calc(50% - 450px); /* Workaround for bug */
  padding: 30px calc(50% - 450px);
  color: white;
  text-shadow: 0 -1px 2px black, 0 0 4px black, 0 -1px 0 black, 0 1px 0 black,
    -1px 0 0 black, 1px 0 0 black;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.6)),
    url(img/spectrum.png) fixed;
}

header:before,
footer:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 20px;
  background-size: 20px 40px;
  background-repeat: repeat-x;
  background-image: linear-gradient(
      45deg,
      transparent 34%,
      white 34%,
      white 66%,
      transparent 66%
    ),
    linear-gradient(
      135deg,
      transparent 34%,
      white 34%,
      white 66%,
      transparent 66%
    );
}

header .intro,
html.simple header {
  overflow: hidden;
}

header h1 {
  float: left;
  margin-right: 30px;
  color: #7fab14;
  text-align: center;
  font-size: 140%;
  text-transform: uppercase;
  letter-spacing: 0.25em;
}

header h2 {
  margin-top: 0.5em;
  color: #f1ad26;
}

header h1 a {
  text-decoration: none;
}

header img {
  display: block;
  width: 150px;
  height: 128px;
  margin-bottom: 0.3em;
  border: 0;
}

header h2 {
  font-size: 300%;
}

header .intro p {
  margin: 0;
  font: 150%/1.4 Questrial, sans-serif;
  font-size: 150%;
}

#features {
  margin-top: 1.6em;
}

#features li {
  margin: 0 0 1.6em 0;
  list-style: none;
  display: inline-block;
  width: 49%;
  box-sizing: border-box;
  vertical-align: top;
}

#features li:nth-child(odd) {
  padding-right: 2em;
}
#features li:nth-child(even) {
  padding-left: 2em;
}

#features li:before {
  content: '✓';
  float: left;
  margin-left: -0.8em;
  color: #7fab14;
  font-size: 320%;
  line-height: 1;
}

#features li strong {
  display: block;
  margin-bottom: 0.1em;
  font-size: 160%;
}

header .download-button {
  float: right;
  margin: 0 0 0.5em 0.5em;
}

#theme {
  position: relative;
  z-index: 1;
  float: right;
  margin-right: -9em;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  text-shadow: 0 -1px 2px black;
}

#theme > p {
  position: absolute;
  left: 100%;
  transform: translateX(50%) rotate(90deg);
  transform-origin: top left;
  font-size: 130%;
}

#theme > label {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8.5em;
  height: 8.5em;
  line-height: 1em;
  border-radius: 50%;
  background: hsla(0, 0%, 100%, 0.5);
  cursor: pointer;
  font-size: 90%;
  padding: 0;
}

#theme > label:before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  border-radius: inherit;
  background: url(img/spectrum.png) fixed;
}

#theme > label:nth-of-type(n + 2) {
  margin-top: -2.5em;
}

#theme > input:not(:checked) + label:hover {
  background: hsla(77, 80%, 60%, 0.5);
}

#theme > input {
  position: absolute;
  left: 0;
  clip: rect(0, 0, 0, 0);
}

#theme > input:checked + label {
  background: #7fab14;
}

@media (max-width: 1300px) and (min-width: 1051px) {
  #theme {
    position: relative;
    z-index: 1;
    float: left;
    margin: 1em 0;
    width: 100%;
  }
  #theme + * {
    clear: both;
  }

  #theme > p {
    margin-top: 0.5em;
  }

  #theme > label {
    float: left;
    font-size: 82.6%;
  }

  #theme > label:before {
    display: none;
  }

  #theme > label:nth-of-type(n + 2) {
    margin-top: 0;
  }
}

@media (max-width: 1050px) {
  #theme {
    position: relative;
    z-index: 1;
    float: left;
    margin: 1em 0;
  }
  #theme + * {
    clear: both;
  }

  #theme > p {
    left: inherit;
    right: -1em;
  }

  #theme > label {
    float: left;
  }

  #theme > label:before {
    display: none;
  }

  #theme > label:nth-of-type(n + 2) {
    margin-top: 0;
  }
  #theme > label:nth-of-type(n + 5) {
    margin-top: -2.5em;
  }
  #theme > label:nth-of-type(4n + 1) {
    margin-left: 12.5em;
  }
}

@media (max-width: 800px) {
  #theme > label:nth-of-type(4) {
    margin-right: 4em;
  }
  #theme > label:nth-of-type(4n + 1) {
    margin-left: 4em;
  }
}

footer {
  margin-top: 2em;
  background-position: bottom;
  color: white;
}

footer:before {
  bottom: auto;
  top: 0;
  background-position: bottom;
}

footer p {
  font-size: 150%;
}

footer ul {
  column-count: 3;
}

.download-button {
  display: block;
  padding: 0.2em 0.8em 0.1em;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  background: #39a1cf;
  box-shadow: 0 2px 10px black, inset 0 1px hsla(0, 0%, 100%, 0.3),
    inset 0 0.4em hsla(0, 0%, 100%, 0.2),
    inset 0 10px 20px hsla(0, 0%, 100%, 0.25),
    inset 0 -15px 30px rgba(0, 0, 0, 0.3);
  color: white;
  text-shadow: 0 -1px 2px black;
  text-align: center;
  font-size: 250%;
  line-height: 1.5;
  text-transform: uppercase;
  text-decoration: none;
  hyphens: manual;
}

.download-button:hover {
  background-color: #7fab14;
}

.download-button:active {
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.8);
}

#toc {
  position: fixed;
  bottom: 15px;
  max-width: calc(50% - 450px - 40px);
  font-size: 80%;
  z-index: 999;
  background: white;
  color: rgba(0, 0, 0, 0.5);
  padding: 0 10px 10px;
  border-radius: 0 3px 3px 0;
  box-sizing: border-box;
}

@media (max-width: 1200px) {
  #toc {
    display: none;
  }
}

#toc:hover {
  color: rgba(0, 0, 0, 1);
}

#toc h1 {
  font-size: 180%;
  margin-top: 0.75rem;
}

#toc li {
  list-style: none;
  line-height: 1.2;
  padding: 0.2em 0;
}

#toc li a {
  padding: 0.2em 0;
}

#logo:before {
  content: '☠';
  float: right;
  font: 100px/1.6 LeaVerou;
}

.used-by-logos {
  overflow: hidden;
}
.used-by-logos > a {
  float: left;
  width: 33.33%;
  height: 100px;
  text-align: center;
  background: #f5f2f0;
  box-sizing: border-box;
  border: 5px solid white;
  position: relative;
}
.used-by-logos > a > img {
  max-height: 100%;
  max-width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

label a.owner {
  margin: 0 0.5em;
}

label a.owner:not(:hover) {
  text-decoration: none;
  color: #aaa;
}

#languages-list ul {
  column-count: 3;
}
#languages-list li {
  padding: 0.2em;
}
#languages-list li[data-id='javascript'] {
  border-bottom: 1px solid #aaa;
  padding-bottom: 1em;
  margin-bottom: 1em;
  margin-right: 1em;
}

ul.plugin-list {
  column-count: 2;
}
ul.plugin-list > li {
  break-inside: avoid;
  page-break-inside: avoid;
}
ul.plugin-list > li > a {
  font-size: 110%;
}
ul.plugin-list > li > div {
  margin-bottom: 0.5em;
}
`}
  </CodeHighlight>
)

export const css = CSSeXample.bind({})
css.args = {}