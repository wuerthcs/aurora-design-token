# [Aurora Design Tokens](https://aurora-design-tokens.netlify.com/)

> Design tokens for the Aurora Design System maintained by the team over at [ZIP-Software](https://github.com/ZIP-Software)

Aurora is the name for our design system used at ZIP-Software products. This repository contains our design tokens which will be shared to all of our design system libraries.

## Installation

The Aurora Design Tokens can be installed via npm or yarn:

```sh
npm i @zip-software/aurora-tokens --save
```

or

```sh
yarn add @zip-software/aurora-tokens
```

## Usage

The Aurora Design Tokens library gives you access to different files built by the theo transformer. You can find the following files in the dist folder:

- `@zip-software/aurora-tokens/dist/android.xml`
- `@zip-software/aurora-tokens/dist/ios.json`
- `@zip-software/aurora-tokens/dist/web.css` - CSS custom properties
- `@zip-software/aurora-tokens/dist/web.json` - tokens in JSON format
- `@zip-software/aurora-tokens/dist/web.sass` - tokens in SASS format

For example a React application could consume the css properties like this:

```tsx
import "@zip-software/aurora-tokens/dist/web.css";
```

or could consume the json like this:

```tsx
import adt from "@zip-software/aurora-tokens/dist/web.json";

// ...
// ...
// ...

const divStyles = {
  backgroundColor: adt.COLORS_BACKGROUND_PRIMARY,
  borderRadius: adt.BORDER_RADIUS_MEDIUM
};

function MyComponent() {
  return <div styles={divStyles}>Hello world</div>;
}

export default MyComponent;
```

## Contribution

We're open for contributions to changes regarding our design system. If you would like to contribute to Aurora simply fork this repository and send us a pull request.

Keep in mind that we will review every change carefully as we use all of our design system libraries in our own products.

Thanks for checking out Aurora!

## Maintainers

- [bdbch](https://github.com/bdbch)

## Links

- [Code of Conduct](CODE_OF_CONDUCT.md)
