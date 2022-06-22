## Components documentation

https://leonimurilo.github.io/test-publish-ui-lib

## Testing locally on another app

- npm install -g yalc
- yalc push
- Go to your app repository and run the following command (can be added as npm script):
- yalc add leoni-test-publish-ui-lib && yalc link leoni-test-publish-ui-lib && npm install

Yalc differs a little bit from npm link. It creates a copy of the lib inside the target app root directory, in a folder called .yalc. The npm package is updated locally to point to that copy.
Every time we do yalc push in the library, that copy will be updated to be used in the app.
Since the .yalc dir inside the app dir is also shared with the container, we don't need to worry about symlink downsides
