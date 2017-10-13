Used to reproduce react-jss bug with dynamic styles under media queries.

Exported from WebpackBin as it does not support IE11 at all.

The rendered component has a button that changes state to "toggled" when clicked. When it is toggled it should have a red background
color when the window size is larger than 500 px. This does not occur in IE11.

# WebpackBin project

## Start

`npm install`

`npm start`

Go to `localhost:3000`
