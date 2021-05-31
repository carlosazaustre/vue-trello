# vue-trello

> Trello clone with Vue and Vuex

## YouTube video tutorial (Spanish speaking)

▶️ [https://www.youtube.com/watch?v=Wd9dOIlTWCc](https://www.youtube.com/watch?v=Wd9dOIlTWCc)
[![thumb copy 83](https://user-images.githubusercontent.com/650752/120224800-67cd3b00-c244-11eb-99ff-a1e9928c9a4d.png)](https://www.youtube.com/watch?v=Wd9dOIlTWCc)

## Screenshots

![Home View](./docs/screenshot_a.png)
![Board View](./docs/screenshot_b.png)

## Features
* Vue.js v2
* Vuex v2
* Handle state with actions and mutations (Vuex)
* Getters to manage partial state in Components
* Scoped styles with Sass/SCSS
* User can create multiple boards, lists and tasks
* Vue-Router to show different boards
* Persistence with Firebase

## Next steps

* User authentication
* Create Vuex modules when the app grow with new features
* Lazy loading modules in Vuex and Route based components

## Configure

Create a new project on [Firebase Console](https://console.firebase.google.com)
and then create a web app and copy the configuration object.

Rename `src/firebase/settings.js.sample` to `src/firebase/settings.js` and paste it the firebase configuration project.

Open `.firebaserc` file and change the value of default project for your just created firebase project.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
