# Tailwind-create-color

Just a package to make adding colors to the Tailwind config file quick and easy.


## Usage
```bash
$> npx tailwind-create-color
Color name: super-cool-color
Color code (no #): ffffff
Step (def=100): 50
```
Will produce
```js
module.exports = {
  ...
  theme: {
    extend: {
      ...
      colors: {
        ...
        "super-cool-color": {
          "0": "#ffffff00",
          "50": "#ffffff0d",
          "100": "#ffffff1a",
          "150": "#ffffff26",
          "200": "#ffffff33",
          "250": "#ffffff40",
          "300": "#ffffff4d",
          "350": "#ffffff59",
          "400": "#ffffff66",
          "450": "#ffffff73",
          "500": "#ffffff80",
          "550": "#ffffff8c",
          "600": "#ffffff99",
          "650": "#ffffffa6",
          "700": "#ffffffb3",
          "750": "#ffffffbf",
          "800": "#ffffffcc",
          "850": "#ffffffd9",
          "900": "#ffffffe6",
          "950": "#fffffff2",
          "DEFAULT": "#ffffffff"
        }
      }
    }
  }

```

## LICENSE
See the [LICENSE](License) file.