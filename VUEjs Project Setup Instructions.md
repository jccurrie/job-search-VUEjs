# VUEjs Project Setup Instructions

Initialize a vue3 app - npm init vue@3
cd into new project working directory
Execute npm install to download NPM dependencies.

Start the VUEjs server - Execute npm run dev to launch the Vue app in your browser.

"@" is aliased to /src
you can reference anything in src as follows, ie: "@/App.vue"

Components are re-useable pieces of ui related code

### Close server with Ctrl + C

# Tailwind Setup Instructions

npm install --save-dev tailwindcss postcss autoprefixer

postcss(renders tailwind css into regular css for the broswer to run), autoprefixer(ensures all broswers are able to use tailwindcss styling)

npx tailwindcss init -p

Creates the config files for tailwindcss and postcss(-p flag)

### import and use fonts:

"import" original list of tailwind fonts
import { fontFamily } from 'tailwindcss/defaultTheme';

then extend those original settings and add your new preffered font at the top with a spread of the original list as a fall back.

    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fintFamily.sans]
      }
    }

### Component naming

In Template you should use kebab-case to match html
In script you should use PascalCase to match javascript

### Custom Colors in tailwind

adding this code:

    colors: {
      'brand-gray-1': '#dadce0',
    },

tailwind generates new class names: ie: "text-brand-gray-1" or "bg-brand-gray-1"

### Testing

## Unit Testing

describe: description of what we are testing, arrow function
it: what ever IT is doing, arrow function
expect: the function, toBe: what it should return

```js
import { describe, it, expect } from 'vitest';

import { evenOrOdd } from '@/playground';

describe('Basic math', () => {
  it('adds two numbers', () => {
    expect(1 + 1).toBe(2);
  });

  describe('evenOrOdd', () => {
    describe('When the number is even', () => {
      it('Indicates the number is even', () => {
        expect(evenOrOdd(4)).toBe('Even');
      });
    });
    describe('when the number is odd', () => {
      it('indicates the number is odd', () => {
        expect(evenOrOdd(3)).toBe('Odd');
      });
    });
  });
});


Execute test - npm run test:unit
```

### V-Directives

v-bind:template binding template reference to data reference directly by key/keyword
You can shortcut this according to Vue guide by leaving out v-bind -> :href and it does the same thing.

v-for loops over data items in the template
<foo class="" v-for="item in items">
<bar> {{ item }} (you'll get items number of bar)

v-for requires unique keys:
v-for="Item in Items"
v-bind:key="Item"
