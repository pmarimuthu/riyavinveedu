/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1f7d11b86741abdbb7802e732c036fbc"
  },
  {
    "url": "about/aboutus.html",
    "revision": "c0b0cf9be97fa764b5c788d1080e1aa4"
  },
  {
    "url": "artandcraft/art1.html",
    "revision": "74e4c3b00d811b3d8f4bfbff7c3a7676"
  },
  {
    "url": "artandcraft/craft1.html",
    "revision": "09e4b995886fd0988cf8c299194e39fd"
  },
  {
    "url": "artandcraft/index.html",
    "revision": "0ff135c66dcacc05d52ce6184d1367ba"
  },
  {
    "url": "assets/css/1.styles.09d91af9.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.61a11bf2.css",
    "revision": "c73a30ac908a012fb1bb9c912df9fc41"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.09d91af9.js",
    "revision": "cff9b72dda86ab63b86d82233d9611db"
  },
  {
    "url": "assets/js/10.c0e3ccd6.js",
    "revision": "be9b1a67fd997f68396ce044017d3d09"
  },
  {
    "url": "assets/js/11.c870375f.js",
    "revision": "5c78a86b27dd35324a4666c6ec968651"
  },
  {
    "url": "assets/js/12.17bed3dd.js",
    "revision": "f08829c6a2ed545ecbda68a67c491305"
  },
  {
    "url": "assets/js/13.6c555260.js",
    "revision": "c5d9467ad0af5bbe459b4dfa57238fb2"
  },
  {
    "url": "assets/js/2.aa060651.js",
    "revision": "e8e1a4cafc70849efe76ae227c7cf84b"
  },
  {
    "url": "assets/js/3.3ff7adbd.js",
    "revision": "1fd50b3b2b530b36b89d1f949b735ae4"
  },
  {
    "url": "assets/js/4.928e3824.js",
    "revision": "4cbc978cef3168276f378162b4adc54d"
  },
  {
    "url": "assets/js/5.c18ff3a1.js",
    "revision": "d504531e543953fb29091ad15d89ffbf"
  },
  {
    "url": "assets/js/6.677b2903.js",
    "revision": "e2151206b2905d8b0d169ea05921032d"
  },
  {
    "url": "assets/js/7.48098fa5.js",
    "revision": "83068de87129a8765fb11e930fcf2270"
  },
  {
    "url": "assets/js/8.b5e76db8.js",
    "revision": "8bb27899935690cb1d752a35df91cc0f"
  },
  {
    "url": "assets/js/9.d8544b05.js",
    "revision": "d2e91c287f01e1733a9a63b722b3643b"
  },
  {
    "url": "assets/js/app.61a11bf2.js",
    "revision": "bc167baf7affdd068adbdbc4d8e42757"
  },
  {
    "url": "cooking/cook1.html",
    "revision": "5de74418ae794b718dff53b5ac04e74d"
  },
  {
    "url": "cooking/cook2.html",
    "revision": "a2779d159c298977dfd2e8710e2d9859"
  },
  {
    "url": "cooking/cook3.html",
    "revision": "6ce0fda5d354653146af5f6c5140090f"
  },
  {
    "url": "cooking/index.html",
    "revision": "033c528294803e2cd53d9d112571fdde"
  },
  {
    "url": "garden/index.html",
    "revision": "665af4d757f020e1a6a2aa6a0a13eb3e"
  },
  {
    "url": "health/index.html",
    "revision": "d858447730a326f1aaaf999630ee4f90"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "bb02eb112c052d4830fb54f2e17f5a6e"
  },
  {
    "url": "index.html",
    "revision": "307e09dea6f584904d2c98a39b58a03f"
  },
  {
    "url": "kids/index.html",
    "revision": "8d8fa8943d57b46fa422ea584ab8557f"
  },
  {
    "url": "riyavinveedu-banner.png",
    "revision": "0e1870a27176b3d5c922163049f4b75a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
