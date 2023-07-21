# svg render issues on ios and expo-image

minimal repro case that renders all heroicons and ionicons in `expo-image`.

## setup

```
$ npm install
$ npm run ios
```

## to "generate" icons

the repo ships with all the icons but if you want to generate them again you can
do it by running:

```
$ npm run generate
```

## notes

some rendering issues can be fixed with running `svgo` on them. this is not
included in the repo tho so you need to set it up your self. you can start with
`npm install svgo` and going from there.
