'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "fbce67726b3dad2effb8df8b0acd3a8a",
".git/config": "a16a62acc17bb6a51d246c9a2def0f98",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "13ce18f29df1385ab8ec6c94629fcd2f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e4bade0801572ad4fc44804a24f3c017",
".git/logs/refs/heads/master": "e4bade0801572ad4fc44804a24f3c017",
".git/logs/refs/remotes/origin/master": "1890b1387042f0e7ccaf3d455c8889c8",
".git/objects/02/ff6fff07885b50373c35a6f59819b68e3ca8f3": "5da2ce61fd26311760edfa680b6dd662",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/05/1803d8da0f4d6bcc4eaa6577b7a0213cffe0ca": "d0407b606bd0fb1dc661902405a5aec3",
".git/objects/06/e571a3e43830b00016622339d25d6d1bb4c336": "60880f7b529f24788f6a2d41176d21dd",
".git/objects/0d/261d4cd6706dadae730450b70db30db51bb800": "fd457da63726d4d67850aa5d415a31e0",
".git/objects/0e/42418fc3f117744462ac9da538094ca24b3a0d": "dc9ee60a96ec27383f62858f553f212f",
".git/objects/0e/c4de13e5ec2a8dcc53cbcab6b34b33d65ffdf3": "bdc215d06edea4b38e54eea761eefef2",
".git/objects/16/20898d2803e8f14360db340eaab032ab57de36": "1cb78e7bb0373374693d99b683458382",
".git/objects/1a/c3e6c397bad1c906159e92a3033f61449091ff": "aec2154e0b6c046356d83480cea6a977",
".git/objects/1a/f3b8cd69b329867828916c87d0d0e3ad7b5a9c": "ca9bb0f7198cfdfe9fde035f59d48090",
".git/objects/25/5bd69b3c4842d909aa6cd7384ef499f72b3980": "8c02a8f702ace15a2d101aaa96b633fe",
".git/objects/2c/cb4bb55fd75063084805d45fdf0c24f83f7995": "75f73038906dc6d99fc94a212626e23f",
".git/objects/30/aeb5d8f2a736f904a52205b1caff430ac8e738": "13e1bf1d14254fac0b69b8db7b7753e3",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/46/9723d9972428c0dc22ee6931dee6d391bff0ac": "8ce48509c3a68fec34aa0be31d373cb3",
".git/objects/48/ba65ed33dff18e74c62b0f08d8165db64a3085": "9aa3a7fdcbc6e5a4b96701d6dc3f541c",
".git/objects/4c/fc3ecf71244ec8f54a6bd66dca55197d7bea01": "b04d2c3650ef76b46239fe895e148a33",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/52/b0dd32f571d2f23e926ed22759b1dcd7dcec21": "00cada2d914f8279195e47b22f243e71",
".git/objects/55/af72b4715c6fac41dbe17ae16bc2debca6c1b4": "800b11248b10e30dffbe03db19ed86c6",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/59/312a80e7d9122c1f116500b0870f80681d12df": "c19ab63246afd3c232512bff3e6d3a39",
".git/objects/5d/8dc999d25e1a6b6e74262fc3c2f486bdc1567f": "cbfaba942277b4cbbd118710bf583099",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/61/6638013ebdf8bf54031098eaab49aca8c546fc": "d9b39f8b744eff5c54df00e0597cfef9",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a9beae13cb28cf11c28db10fe137af316fbfdc": "0a1d4b650907a89b15e2016fcf899e2a",
".git/objects/7f/138e37f1b2f57cf5b2d522944aaddfa4792b60": "f0d9c36bdf7277d28eb9d2378f08252e",
".git/objects/7f/fb45deecf943873a12f4039534cdeba976db0f": "23923d76da3035dcefb4c172bac63f35",
".git/objects/85/dfd73c1d0582e61e3161034e63b52c6b70f8bb": "0ad3957631257311d88f9119b724a001",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/11769c9a5514bc43ecc2f1db688651703e189e": "6ee9d222f6be48e18c55e24876120695",
".git/objects/8a/472dc6ddbece38dc6c03fc7906a18cb2256864": "830a2ee58addacf3a99efbfe3cfe7ecd",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/787ad743367018b6e6f2216aae45929747d3ee": "ed743f335988943218b2e91804a04356",
".git/objects/90/5156c706d82308136bf605364d03f98833439c": "45d00130c4f57221539744c255f51d83",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/92/a4bb4bcfd60db8ea0b17157c913236d7d4c315": "100340ae89cdb74b186bb45543a1d1d8",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/95/a9a64547890ea9e9d876bc5b248b19524713f4": "392e3b37d172f673fa6bee55df7f8980",
".git/objects/98/7831a3b541b9dd33914a4c48e7f2e8aeb8de64": "5793508e6e65e3c6340210d3a696a77f",
".git/objects/a3/afb65125bc6061d1daccf7023949e810596d7b": "fe6a63f3ff021b80a322e3a3968345d1",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/ab/f2a3a42e1f035a8c69e17a774e5237c7f6fbde": "4df9663fc2c821e9faff409fda1b0c25",
".git/objects/ad/115213296eaabc0ff563d6437b69094014f8af": "a54d887040004d49ff8683d6e0ba09db",
".git/objects/b2/c54705000df5b02a8312fb7b5dea4a32229c65": "d105e78b05686de890639fb1ef311461",
".git/objects/b2/f1acfb349317978d90b2e1084eff8ebbb531fa": "8754b9437bbb39909f9a04f725e9b3c7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/fb321021646d711ea869386bf30ac86de6c7cc": "9b03850a60e843f45438af2831985b41",
".git/objects/bc/46772d6d45a672737a702442a58a50a254660b": "d17b53b4dc255f69e66d8151cf0b722d",
".git/objects/bd/36178a8e523b13953f8e3e1ae429ba6f98e59e": "23e1eb3fcf47abe4d06c2880e8166377",
".git/objects/be/57239d0204e9ff71e56fd41b7f14623864cbc4": "03ea7311e1db22de79f8e782d6aa8313",
".git/objects/bf/4fb434569ceeeb0c986cb09bec2a5bee454e7c": "bf4f2f6625c0d7559ff0e06629279901",
".git/objects/cf/484fa7ffde882a14a0dbb28ff7184b66e195cb": "378085df0db195fe98bba0dc54e48674",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/e85e3e0c3b6a087752e27c5c37ee9508af7463": "68faccea4dcfc7ba99022d75daefbfe4",
".git/objects/d6/3bd0ff9d462c2164a651c54c69db250d4fb630": "692c352eeae8077beec7d9d85ee4f98c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/df/1ce66d0ff461576211a85ce4ce5c3d28234c7d": "59f625ab324102c4efdcf7593a14722b",
".git/objects/df/ac62a103b9003011b199d73afbc6b25f0838ce": "9be84e9dc64adc8fe3b87b6f8ac9a407",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f1/750c6bf4c875b5afafb5e33e00b369b5e50015": "6c235a555071aa9a577289a71a64de4e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fb/801b086f95dc75304537f7401534e98c43f1c3": "3b050f4199e65584fa0c1aa1a9ce5e2c",
".git/objects/fd/5605c85116eeadf68c557bbb185a19240eae11": "93e96611dbdc5fd710740ba25a63b571",
".git/refs/heads/master": "1bb76e04214f6bc2a7bb2c275ae0a144",
".git/refs/remotes/origin/master": "1bb76e04214f6bc2a7bb2c275ae0a144",
"assets/AssetManifest.bin": "55f158e2bcdd1fe4feafb55ce7ecb00e",
"assets/AssetManifest.bin.json": "588b7c59584b0eb327715b69f59e5e80",
"assets/AssetManifest.json": "593a8a3ae746ae036365a3c9f37439aa",
"assets/assets/fonts/Montserrat-Bold.ttf": "354dc625a35bef1b6ec00a79c6cfc0c8",
"assets/assets/fonts/Montserrat-Regular.ttf": "38712903602f88435ddddec98862f8b8",
"assets/FontManifest.json": "41883a88168d6cc4f3c73dcfe27817b3",
"assets/fonts/MaterialIcons-Regular.otf": "b608753183b917c950ff2d02ea40c429",
"assets/NOTICES": "14a393b6027aeaa52f20d063866289e8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "d31642fb88665d9cdf8ad0d264ed6a01",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4f0dc82c2a6a2d780e2ee89f69e245cc",
"/": "4f0dc82c2a6a2d780e2ee89f69e245cc",
"main.dart.js": "22c6b0c2ef06250784ae92bfc0418585",
"manifest.json": "409ae794b0454d8a04dd2c52ff38fa9a",
"version.json": "674be822fa043c8d312d7b3dbfd10af8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
