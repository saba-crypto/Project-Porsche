# project architecture

- project's pages are split into sections. each section gets their own scss file, no matter if file is big or not.

- project uses modified scss 7 - 1 pattern for styles. you can learn more about it in the official SCSS guideline [click to learn more](https://sass-guidelin.es/#the-7-1-pattern)

- project uses single css file(main.css) for all pages. due to modern browser caching system, browser can access required css without any request call. which makes css load very fast and efficient.

# project features

- project uses "animation-timeline" and "animation-range" properties with view() function, its used for native css scroll-driven animations, without any javascript used. ==note:== those properties are not supported on firefox.

- project also features advanced and modern responsive design patterns. such as using **min(), max() and clamp()** functions. which let's us create responsive font sizes, paddings, margins and images with ease.

- project uses various mixins, components and variables which let's me create thing much faster.
