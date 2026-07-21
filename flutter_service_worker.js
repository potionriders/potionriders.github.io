'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "76dd28f12fd03f9a2c0bbe62e58a6c60",
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
".git/index": "acb6985f81a17789b0ba4c71a7d8ddc5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b13416c0a75f9c6b8b5e4c2de51d8a0a",
".git/logs/refs/heads/master": "b13416c0a75f9c6b8b5e4c2de51d8a0a",
".git/logs/refs/remotes/origin/HEAD": "99112d3f1780582395d29cc0650e79db",
".git/logs/refs/remotes/origin/master": "4aa89c6d6c2e308eba13035ea04dff0e",
".git/objects/00/466cb995b26d68ecd3dd9886d315190b31cc2a": "81688b026c45df74854bbd673b8ee8af",
".git/objects/01/3eb77dad9e736d35e803ba6a738f6c983037e4": "5c272cbce2c05f15958890fb59629649",
".git/objects/01/4bca4b6ec4146a7f67838ad5676904152f5ebf": "cc4f32d924a9e33fe465037efef86833",
".git/objects/02/d5aba1a8f262bd354b4ecbd98e7dfbcc533219": "5fa40b2b8033f3937167fd540ec0f83a",
".git/objects/04/1526d69894015005249f0e79aa4302831bd6fd": "e5a4fe315068eb752ad853890e8e1f6d",
".git/objects/04/de73f857efe9549ffceebf42fda4d0428429dc": "d99eefd5995d12c477a0c449203c147f",
".git/objects/05/95120e33f792aa8f10b6a578cfe94f130164a1": "f57d904c79c53858616607469602e636",
".git/objects/06/364f6841efb1e86a69489a5c6b8c62c82ac74e": "1fbfa2b4c6e4592ab3bb5dffe15aa7fd",
".git/objects/09/ade19a1b1f5f3350b25b228e8be77554ef3630": "731f255ace1b2f00ceb7b5765846864e",
".git/objects/0b/575dd9b11ec2209e719c855e131389a2a490cc": "de522373237c163feb66e018159140c6",
".git/objects/0e/92be2cb1d628e6d772ed224780d494c506b8b6": "34d2e20e908a22fc6264d8471b6ad6a3",
".git/objects/0e/f2442e815215c8cfdf1e83012fff2b55b4600e": "5066fc06e71c88956bd9e4540e9bef4b",
".git/objects/0f/e28564906c7d9eff08821b53f48cd87830ebf5": "28ed17920fe130c7c6480eb151c79ecd",
".git/objects/11/8677341b2bf8b8584b0cd73f2bc2c5ebd59728": "d5f20d79042d5a13ef46c5a4f88174ab",
".git/objects/11/e1bf2429bed52dc769ed520e6a6e050d50760d": "1709677264cf3ad1268023f50cdeb7a5",
".git/objects/14/c1fe053d9bd7a91552a7c4dae366683d78938c": "62b997770a4725d8a9f0eed3d5908142",
".git/objects/15/588942205d35f52167ef3b9252a1ca131bb602": "441c0a1efeeeadd29bb938a36452c5b3",
".git/objects/15/64d8a7a940f7295abde8f6fc02d799981b8f90": "f8b4403897fab9ae73023d9f8d6d385f",
".git/objects/18/6d896aca341aec700bf89a9f72704544cea13f": "404e06fc78edf6b00167b9854e0fe7b9",
".git/objects/19/674d6dff4e7da2e6e87e87aa0b7c660e3dccf2": "8acf130add054eba7e0df89f814063a4",
".git/objects/19/ce7422f164a5536a01ce9aac49a09efb623f80": "3104f9cf4328eb430c94c90d41b14240",
".git/objects/1a/bb42c9c08c119cbda88875af083b67b456c767": "77f79f6b1d1caa4f3ad609f45a3eb598",
".git/objects/1a/cb93a08d80d340ff2ddfc79924e4f57faf03ea": "d07f28e548846001385c5e52490b9ab2",
".git/objects/1d/3dcd331918115194658549d2374dc587ca22ce": "2918182ed6d4f069593d758e9d2f60ea",
".git/objects/1f/574c8259e9a3868c46395af707220f8160c793": "c92352b35fad323517ea89e045823522",
".git/objects/1f/6e0bbd3703458f3959154ecf103684ee4429d9": "a60a1d4c2750d7d1020eefca8fde340a",
".git/objects/20/8e986a00413302ebda568e80386ab5ca774bf9": "e9caee57960b33c443e2c12815562de8",
".git/objects/21/3d76848e6feb625a16657f088d400d193366de": "73f11b578cb2adf8453239d557872b81",
".git/objects/21/774a00aabb96f7ba23eaaa3b53ce636a45d0aa": "2be49d18992877b3abb3d3192b372936",
".git/objects/22/3315df8c4f65afd5e2b254a406f94d672d5deb": "7a0cdd2bc45f4c9aa1c8b1a4dcacf302",
".git/objects/22/5f933b863fa1f7ea0441922177de9b1d5f3119": "b4560bb2a6ec1f477f4403cc89521ee9",
".git/objects/23/e38d15d7534a5bb7527308cc719505f07e7f94": "b80348197e69eeb08dc8254cf9e31e48",
".git/objects/25/081b2cf95192c0ec476b0a36cb913334b8f2f2": "e72085d904b6b5974a2d3f6d28cb2ad5",
".git/objects/25/405e5d42a0baf1f204b7735769cd4dc73c28a8": "b2310492be11681e9761896a49062d87",
".git/objects/26/a959d7d64a20872f406315f1a6d2035a039f06": "bfe7665e4eb246d6b5d6e99cd1f99bea",
".git/objects/27/79ef8aaaf6d9dd0f146f9e914b4f4354ecd0b0": "1eceaf11a58ab373d83e7f1c6dc3a678",
".git/objects/28/6a419b9e21da6d532ca64ba3182e91b3896f09": "2586e0c31a2099512955396cb8bdc2bf",
".git/objects/29/503aae697ca496f2e14be31162bd63c1764d02": "60a17f2c090933c32f5226d23e7c8439",
".git/objects/2d/6c144ea391472fcc3732d8758ce5f2355c79b6": "3651c044572ec1ad53fd1113327a7db2",
".git/objects/2d/ad1eebef1117b754bb7d1929ca6cda43264842": "76d1a53b9c57459a42ed88a27f23c73d",
".git/objects/2e/a84da4a22e671f0b0084d3d116423770aba46c": "3c7f887f9af7f1d29114556b5fb3a348",
".git/objects/2e/cbc230412cdbd6371bf2f96ca30389b13eef2d": "d70118a3a6f1d131b2b9bcdffd598dc5",
".git/objects/2f/2ce6b40e5db70eb72e299e00c347f9fd923cac": "ca229845434cbba3f2fe947b33dda538",
".git/objects/32/18613e6a73e58d4bea70a637d2f53c2fa8cd13": "dde681e116a11b3bd2f7531b091a3ae4",
".git/objects/32/a53902cfad15549e7f2a09a671fe7671175638": "19cf779a8b0f456a2ff50c47b27e17d8",
".git/objects/33/4663f63d67b510eab65abc21c25ebcd9d6a913": "890613d40603a306b650c583f42b6ee8",
".git/objects/35/5b7328d242297b6ffb1547e76c0493979c9b88": "d744d0747da3024bdfa6f4eece14cf51",
".git/objects/35/ecdad2da0665ad7d8af8865f23d37e394d383a": "4fed3b79f75ae06e87b8b7c384ee981c",
".git/objects/37/21c333953405b788b058ff35e19cb0f6c23671": "89ccceda670a7edbbc6b9dcd3fe10ebb",
".git/objects/37/a89c681c7b4f61397784e045a9cd06ae14380a": "34b60de840e92a5028c3f1bc8a967fbe",
".git/objects/37/f2980953ae4ca848f686f1abd923664f32462d": "515590abe9ef48651e93bf2414e6131a",
".git/objects/38/9344209e1ae1e08ad38df2bc1bd519454e0050": "8867f1f4f1472d27f7a424ccf5918dfb",
".git/objects/38/b25eb393e593775e3a0592008aa5a5b9175d5d": "d1b12fe81701dae6d7dae4e93e080d56",
".git/objects/39/01262d132664ad8013f28e672d7fcbeae40bf4": "1dd1e98c5c1f2406a4838309e461d980",
".git/objects/39/7cb7a077fd9f1e6247fb37e117ceff1850f6db": "943dfcdd98eb533a926f602a199480a9",
".git/objects/39/be0761bf014748a8158aed85622d7b4bb03eda": "0ecfc9c838cbe0770a3491922ecb0011",
".git/objects/39/ee6f58e993060202033ce4030c77fd7caba3f1": "45355f2607997b426024de4680e661d5",
".git/objects/3a/9424dc72a5b8e2c0aaf3cb5e957a30d9e3710c": "8828b24605dbfeeabd842a4fad677485",
".git/objects/3c/ca6f98cc1193453e13f946701996a2155964f4": "ca5bf52feb3a2f3b72ddfa8c55172e00",
".git/objects/3d/02195c621702055a18ef252e1fea94a8c7f3a7": "1999c8c8c5e70c2caf18eb07a1370418",
".git/objects/3d/ab660612a4df657a74809fa3797bcd3e8d6d56": "1db09c0dec511ca518dd1975d6e359cd",
".git/objects/3e/1eb8fc1015c45f95ff97c34b658c6374404057": "71fc6fc808e281d7956f22bf7be054aa",
".git/objects/41/89d63d067482bdc2700fc5657edf5d5ff03adc": "b4b5b162fdcbae3c2062b1e025fb622d",
".git/objects/41/ea787c0d12b0d752f76e0815ff04fa4166d167": "4b00cace4ab76dd6d81e8b903c4b3252",
".git/objects/44/0385dcb11ce45842a2bd97d8a750998d08892a": "58da5b041bb9482fc9971920c8ce58cb",
".git/objects/45/0909eb893bd93cdb88445b6a7393af4e741a4d": "4327b034a1a52c6aaae420c23c7b61e0",
".git/objects/45/90a98d022325ae45df6c75ce2261a7ac36fede": "80f58b7b5215fee42e94936cf209d992",
".git/objects/45/c30dfa58271739bf3c32ad7dfe41051a4c3669": "947d755e1a50a84f11647ea6dc1f18ba",
".git/objects/46/334c963ffea0ebbf63f95acb2f9fb82a8fe408": "0587214239de55e8ac4bcc4f52f5abc0",
".git/objects/47/2bb111bfc81aab7820b609756d3f2fee16a390": "1cdda73af30264a440943db579b2ac15",
".git/objects/47/7a8db2b25935dd4ab7c7ad580149999e69f4c9": "12c490dd0f0d08b450120742dcc17885",
".git/objects/48/80983ab7a10a10340571b7e17cc7b51e8e17d7": "b67c9521a84ad117628ea1f54d873a8e",
".git/objects/49/23884043acb551c09aa6f484d06011cbc5d59b": "b1ff05cc28c97e112511736c9255a927",
".git/objects/49/6ae2fdb8b890ac48a98c128c7adf4fd034113a": "e277970ea457f4e6865e8c8f879e5ee0",
".git/objects/4b/0422d389cb5b02b1416cdd671710c4f4276dbf": "a281aaefb0996ec258a92df298c411d0",
".git/objects/4d/c5742166f3596df9d5a29a76dba9e1f53dec39": "a2a8182d4585fa7a5418242d6af7761e",
".git/objects/4e/0720a95e1777aa18acf2f7e28d6b87665e578c": "318bcd166e59d59b9f9f3ebb77c298e4",
".git/objects/51/7afc2f88643c48e9c09572538f869c5681b5f6": "33beacd611df0a10bd7e2d22c8f6eb31",
".git/objects/51/c6ff5ffd93433d9783646e8ffdd5ff1a503250": "d6716e218c8f70ac8e156812488e1cd9",
".git/objects/52/ad7bd2c6f614ae073e3e64e5e09f3060c0c20d": "e87b248465b0b60fc4192d0364e2618d",
".git/objects/52/e958d8d10cb8a9d51f5d7fa122d5555d40ecb9": "5c2af8c54344e1bb656e0d547ac43a6c",
".git/objects/53/e47b19b86baf81858d9da77ca84dfd44c5e5ca": "940ab460f6a692bde276cc2c22b0c924",
".git/objects/55/b5311b30e78b982310228fe000c9f4f60fdb86": "9fdee8686ea80cafbaa9ebafbc7c76ad",
".git/objects/57/702cd77bf30bb6620f3dbefb031df1a1d24536": "0650021f36e81f0418b82d4204d0fed1",
".git/objects/59/53ccee3a3638f99f8a366b59d54ad1eef80a1a": "0d6c407643a6a6017405b3c712cdbdf9",
".git/objects/59/6c4deeb8a43f73a0415e1977e3ca4e0ffa1568": "ff245d035c556b6ec03d294139a9880d",
".git/objects/59/81ae72928b13f89340852ec76f6085476eb834": "f3948f06eff7ca54a115f826be797c73",
".git/objects/59/f86af8b162ed256b44116d4f38bd089a65ff68": "ac4341c104cb00369369b537d6038d57",
".git/objects/5a/4f2d043020234d1023b94cf4327e81f94c5efe": "6fed276127c809439e476ea1cecd0c23",
".git/objects/5b/2c0f431931ff872ffd2d4b431a624647ee6d87": "d4b7cf428a7d8a7c745a15a29a3d064a",
".git/objects/5e/1b2e04c124481a4b2b2e131de1ca7f0ea53a5f": "d7a6d2f82012fb829ea4685abd224587",
".git/objects/5e/42c07e30619476dad090232d2501bfd8119165": "95115120c79cfc4ce576356fba7381a9",
".git/objects/5e/6d450957dcb78c84ea7b813b0a0bfa5e45f716": "161a0ccc078bd26cec6d3007b7b0fdef",
".git/objects/5f/5426b8688405731397200124a889c9b1b5a47e": "985d3d421d87bc109e448f3dfc008334",
".git/objects/5f/b5d134d1993dc14656579d29c2e1d3e033860d": "0103aac708c92ab83e93d511478ac4ff",
".git/objects/5f/e58b5da2f1671f09b61dd5c8ada42d369ffbcc": "52258cd5e309cf7ae59501501ee9e510",
".git/objects/63/74b11b929a96190f4fc00c18800464e8ae37e6": "28477d8b100d7f495c6f1edaae7956ac",
".git/objects/64/8ea84a280cac57f47d3c4bf9f60eef7429686a": "aa3e89ec177dae8fb9dae1d387f51338",
".git/objects/65/49cd3b71097225c385f7c77e567c050437a3b3": "8e90e2d1739b00233b42aff779a48625",
".git/objects/65/9cf83ea20f150ec524c7fde68495535906e9e3": "39c42cc9bf9ea204715ea7de0de15a54",
".git/objects/67/65d39615328f8c59fe41dcd90a79498ce3e77a": "655b6943794e129f44459d49b710a4c2",
".git/objects/68/1388e6bf6ba0fb3aa40d8918b4e49798963b4e": "56b627b7bb5eed46fd27219ff9a65201",
".git/objects/6d/2c6d6c945c51c2c5dd5c7f658339179547ffb3": "b02ba5b4fccc4dd54cd431be02221631",
".git/objects/6d/56e30230ac01079d9a693dac73438e9f97201d": "105c79942c0f5259552976c0bf6dc028",
".git/objects/6d/72035a758b1e64801208c84db7e6981003817e": "6c24ee505294ac4c028a977636b8aae7",
".git/objects/6f/9d5657e143902781951547873b039488c7e208": "2d9b862d4b826dc141568b18621d15ad",
".git/objects/70/cf1bb454fd9756a3a3490e003921a126aca67a": "854079f7ae07e7713fccd8f1220865c9",
".git/objects/72/72d4398510e6a89310d89680c012cad55fc300": "2987a7f078ee179f6ad824e4d76cd0d5",
".git/objects/72/e4f9e2be109bd1261f6f2da6baab510f873c95": "1471410acda68feafc6a5fca47248bf8",
".git/objects/75/a18359920202c2582770ffc6fbd267245a6c6a": "b0f384a2eb101fc8551c4ced90b84da7",
".git/objects/75/b5d90d7bee7c22a113d435c6bdd06e760b49a5": "d2922cba09b96ea3cfe4aaffc09333e9",
".git/objects/76/0a8a7e0c404c12434c593e4cead6425e6a91fe": "e432e1a412777207a0e91e7a9be3f428",
".git/objects/76/69ff70704d0703f46cd4c1503569c3a53d5c1b": "fd6d7ac93826d7120e80122a198e7720",
".git/objects/79/0cca7287ecdf612237dc4a57ea2719a0ee6901": "b4c8032fdd4923fcd10a5aaba6004630",
".git/objects/7d/a47a21d5eb533453c9df404825bdc4231ab36d": "a00f3dc2bf886467cb9495d8c6b16150",
".git/objects/7e/530409abbbcd52f00cadc781435526884f49f2": "4ece89368155e5b811bd46fc63264fa0",
".git/objects/7f/fcd53d77f89c488badba82c06ec85f536c7bed": "0a6c85e7eab373dcc127f08d6df569ea",
".git/objects/80/3550d52af7195aa910288e3f0a9349014ca7bb": "8357aeac6d2af608bfcffa7cccec1b4f",
".git/objects/80/72960c66bc1953f34e5076f20ef19f80be37a0": "f971d758eae2ecf65790bab2ce78fcda",
".git/objects/81/6844fee1e319a02081d4fd7749906c10137ad9": "caef4b48c346fd21948be565b6119d31",
".git/objects/81/68e599e0b03f21cddb7eddd045670be16a1aec": "54404dbea84db2e2ff6792ac5256b6cb",
".git/objects/81/e0f210d0976f03f3559663d933faff59fd0e33": "673e9d48b16cebc83890303351f8feb3",
".git/objects/83/5e1352129eb745e3d6abbe1f1d1960e228ba5b": "3eecd91fffd273c4d6ff82e1fb109a23",
".git/objects/83/9be24512c2e28ab7885b763ff016befe25afc5": "58711b10e912efdd89f7ead6a4cb89d1",
".git/objects/83/bb183d3246e148ae030709b4267a87750cde38": "a9517bf6d47b3d235f21f5d8a17837cb",
".git/objects/84/42df52d548e8c7f2805e55d4eca792b6d0077a": "e671de9fe41f7926add21f32bf860354",
".git/objects/84/5a01c0e69b5eb8464d6756ed2e3a1c0b396f7e": "ce264ab6eb10555c1ec66dc5c6d397af",
".git/objects/86/ff146cc7d838ce8fc56bbbfc6f66d242bbde8f": "212b4dda035542023b5da8d86943f938",
".git/objects/87/efb1c8beeb61f043b1ca1d8a7aed152b084055": "e172533997b535fd44756a64ff6c166e",
".git/objects/88/cdedf4769bc6d34f517d8ff3d17debcc48df9a": "fb6ea3bffcfcbe5e266a9217dd1cde8c",
".git/objects/89/47592c6374314e577a56fcf5dfc858d39c9609": "34172193c2c8edb8bb58f5d33b47cceb",
".git/objects/89/aade0b7b50b580045428ceec1e1b1fe44ba797": "33fe79691d6dfce433b9efe93179630e",
".git/objects/8a/4c2fccebe3a31a658ba13dc238b59736053b71": "f4ec5aef2f813de9fec2c8a685f1556a",
".git/objects/8a/d2d89cd031cbd2590634ca09d6aa838b959350": "8f0262c499a5f384684fd6cc66757d30",
".git/objects/8c/624ff1e1a4001cd664eb902932021f9c2b103c": "780829a5e2ba66a9c3485b9aec8c200a",
".git/objects/8d/46c8ff707c8cc5ccee4ddeb32b60b0affa60d7": "88a5a86aabf95ebc43d656034aa9d904",
".git/objects/8d/e278d326d04f0fad8f68906e2ca370dcdf8130": "d580788fdd59495487b8b7e6a6e97a25",
".git/objects/8e/e46bb5642f03820447c3e5b9badc51826cf289": "dda3d8185591c908ffa26cbe582e5f5e",
".git/objects/8f/e81a3d5831a05fbab5dd583297a0a9f1db52d0": "5fd06a69c90e5910f80208446173cf11",
".git/objects/90/1abea0c87a87ad78f7fcddaaf80bec805b8bdd": "b6c7797359dc6e4908e492fd08fd6cd5",
".git/objects/91/cdb09419477547314bde0095d1f1f985ff0e9a": "81fdd827a81f0bc0320a1e691de7927b",
".git/objects/91/e2ea235b3b376397c5617ea4867532129e1d83": "70a37265e5f0cb32d4391fdfbf17cc48",
".git/objects/92/0a2918d92d4b3ef7d562b9bd713678a84a5ec7": "0e4ae00f7dcd12e815181e380e55cf5c",
".git/objects/92/88aba1e106695a19b60da2a848960927a866ee": "d2adfaa0494a88edb6d6c416409ecd3e",
".git/objects/93/619787401b070372c0277196214d4845c87cb3": "2182ee52aefc02933500dadbff88814c",
".git/objects/93/644d8ff92a8c2b8e0a2126f8889e9f14a73196": "df8977d874676da7ff96079bb40a1215",
".git/objects/93/d61124b4d88650dbd19eaebbb17c48f3e4ee68": "2462e2195ac14da557bc6d1745cc99c0",
".git/objects/94/04948ba7457b72a1e55e3f31a0b991f0966649": "d271691ebb708977059d9983a6573528",
".git/objects/95/898d9f0749e5a36c603d038970fb43dfa97012": "daad8ed674cdf64f1d6029e4c851c8c8",
".git/objects/97/939664991f21a64960cd7fcca8503ad992a204": "4f13b290feab24af9f9c9105a350ba20",
".git/objects/98/34015fdea59197584aace781df72e124d6edd0": "90e5a23d7e414e0e6ce54dc48adc5783",
".git/objects/9a/3051fe6478efd3e57b85c4db7723d3c5f34399": "b77febbacaa590e22363662042276477",
".git/objects/9a/ac2d45239ec04a204b0a7a542fed2e4296f0c0": "ab2335df5fc513f263420c87c3a789d9",
".git/objects/9d/7856b0e5d53a2ddfa0cb69d45e68513b97c623": "cc3b10e125b4af6693a857b3c5ea4e56",
".git/objects/9f/8cace2908be957ae3f0209d0f52aadebcdead3": "43f692c6084bc555b4447beebba53e95",
".git/objects/9f/af690083f476dc6ff5f650c3c2473d2de02e3b": "80d62d6a35d36fb651136dc1ecc233ea",
".git/objects/9f/e3a2c3787b4be7fbc45f580b152c6f300d4658": "b53371e7efad7ccb3787cc0defa756b7",
".git/objects/a1/3080263d2b8b157df0d990a13417e60c1decbf": "0acf87b833e1dbc1a568aaaece9e4633",
".git/objects/a3/5e7654d92bcd76268662a80d7929e19ded770c": "d05d06f0be30be55840f03646936024a",
".git/objects/a4/5feb08996a89890d669caface0a9f852af54c7": "aba00044b7b1bac7febbedef9bae8301",
".git/objects/a5/946487713ce1f7282fd7b8f28682fa0a92687b": "865d500953560f940c19d819fd71da9f",
".git/objects/a8/2f5cfc65c773fa213885c9e138434d8451991a": "9adb6744b694196407d723d96761b9eb",
".git/objects/a9/d91cf920c3b68419fef2c297c5b6054fe4e94a": "e2d50d824cbe13708b39b70f36cf4584",
".git/objects/ad/1826a2184d5ec71f54e127746389138a026408": "019135cef15164e8025fc858caae5b8c",
".git/objects/ae/0e31728a5d4ef0b0b50426ef7cd40d1664a8e8": "c2533c5dfc7204ab7a413229b57b2e3c",
".git/objects/b0/a9fa4378ccc52fd5dee1748085cba6c89d3b31": "b7f1d4e0a83e3187880fd57a26a72bd5",
".git/objects/b2/14b5483c1c8a9bf2cb946ceab7da7c8082a409": "845bdf495e71dfa7f7a5fb641ccebc93",
".git/objects/b2/cbfe3b28e1cee0404aa724ecff657c9b4e4024": "5d2b2cb13ac93c248db70839fe92173b",
".git/objects/b2/cd0df9d2b019f461091fcc0fd2c5bd1494f402": "c0f2372890e3e147ccc3390486014686",
".git/objects/b3/ba96b4cbf50acda969ba0efdbbeb06b423b8ef": "7200e7406a654f87d7c023fe09d1f619",
".git/objects/b4/ffbd8510983bee28e77ab0eb3de908d3a9beb5": "cb7faf86d1487cab219db0f1c46c7a25",
".git/objects/b5/afcf93dc0f9bf8ad4ebb4155722faf52a110d2": "abe71ce6f25c6d1042b1b37054e937d8",
".git/objects/b6/106ed3d55dbd73d86105d078a1ac4bbdf1471c": "5c3de87b636a718b063b746a2067ecb2",
".git/objects/b6/700f5b4a343eb8fd800f5eaeef69ba70767c03": "f0bea559e065390b5bffce74abfebd1a",
".git/objects/b7/748feeb0fcd38b1f3aad3d5b5c881ff4bcf34f": "5a8f4131ddb6ab125979c31359378588",
".git/objects/b7/dc919928a84cc390011e5ba2b9d11f166e3976": "3c22ac2cbd11b0bb62be6b6f02ba1af6",
".git/objects/b8/04fa326aff7d45a5906b1bfed8091ef6bbddb4": "0562ec9f86133f0124492d8d3ec4ea71",
".git/objects/b8/7dad48d8d85e5ed454f6368b7a16f17b9bf644": "512589dd9257238c3d90e72fa1905aab",
".git/objects/b8/86aad7dcb34da53bef6f386cb0b1afae476bd5": "ab7b4f176e2788162b197d39a77943a9",
".git/objects/b8/e59a2088861679500bd23c85daf10a74334d45": "29d60e24ab43058ec55ed6334f55c740",
".git/objects/bb/936b529fc66a6ef1abec8029a2c648e05ffae0": "6b836f5798720f50f0442d2fe4fcf377",
".git/objects/bc/7a227fbf77157be1e966b90ed81bb7b5c9de24": "36221a5cfa77c2e71ad430dcf6e6d1b6",
".git/objects/bd/28291150bff704dbba6719362feda54f5a368b": "f8781dccbe20ed72503bb9ead66e1f0b",
".git/objects/bd/a626c8d9c82d5dbb1bc6e16943c58b7bc7951a": "5580586a1f67de83aa585edbcf010f21",
".git/objects/be/1edcf1e6721ef2399183cc8dbd6718404ef2f5": "d1d2408197e243812b958b8080ddb25d",
".git/objects/bf/83ee47093bd50ac2754b7b36a6ff5cb40902a6": "cb8055d80ffcd689d24ad71223c76c6b",
".git/objects/c0/f74e4168c73711de71861943f6b5febe404575": "8d5de06dab8eb88ef5f6e44671fc49de",
".git/objects/c2/16b903dc62d0961d42b2f3885b828752fa66fb": "5e831713461cd31075c5d0b661547b84",
".git/objects/c3/0591a547d451bdea8d16c8260f4b323b7c9fa2": "ade588c6fd2613834b9477257073f7ba",
".git/objects/c3/f35f1960db7c40acf16bc8476a6c28ad1cb01e": "be1d11bfc28bf56115069bb294fc8ffb",
".git/objects/c4/3ce0e5a490371546d3db0bc8238dc3c162a3ab": "bb8581145f480f140e6072ab9ea22448",
".git/objects/c4/69606b72a08ab42e1a43569b7828c54091ae1c": "f42f437de50099e8a92f93ce3954d589",
".git/objects/c4/75bc48fc69de0304c3e67bfd5beb0a7bd0d186": "935cf380dd8a3f4b866f828f45e1dc47",
".git/objects/c6/8d23aa5006f7e04b91927caf0e14158496cdcf": "138bc4bbc9ed4ba0fab0e3750998de3b",
".git/objects/c6/ef3460dc4f8b3af315327d96d2778c6e1fedcf": "de3cc251327bf27cf26e9e6029163af4",
".git/objects/c7/315a1e099c0011e132ec543058a717c6fcc14a": "153f9fb29f814e2e5f0b81510f8febef",
".git/objects/c8/94f2becab6ff453422f8a949bbdabf27f38fb5": "448d4fea25af44a78ed519c52a31b8b5",
".git/objects/cb/4bdd6ed8c20846e07d254277fcc4a23c62da1a": "5c998f26acb4b5c715e39fae952e955c",
".git/objects/cc/edf2146a456ff78614e4107fac339af6a3ead9": "d7dc607784f84891188b0264ce7471e3",
".git/objects/cd/9c10eb6b0f88bad9cbf29891a459cf88165a05": "c65874d72834d8d2ca2b15c8e2972ccb",
".git/objects/d1/48d91f4b8642d6fb1d9a692fac00d5def8a4e5": "c2f1c0e48cf4565cd3b415b0a925c830",
".git/objects/d4/0866e7fed7049150fdfcb5bba5376570911470": "d254aa68a16480050b948fbbf50678f0",
".git/objects/d4/93cf8e66a777834bb45b6ccff0438f7299a882": "f6c6342f6702a2a6a7ae32de36b2d965",
".git/objects/d4/bed3dc5d77f8966dc8df3b8e6ba4382a9e5759": "7e00fec1a9677dbdcfd425648103730a",
".git/objects/d4/fccdeeeedd0d12484338bcaba754689f1ad7d6": "c79a4ec7cddd91f0d17a4718791f2b3c",
".git/objects/d7/5edb15e3d594a55f967587cedc01399f69c0c3": "2c6a2ca53c6ee04a5ce5637ba452f60d",
".git/objects/d9/2b20c53004fc9cdf2aef6ab8c08d5e808a7a96": "4e503632e58bfda5b2266ebac395621e",
".git/objects/d9/315abc0033d479676a590b45e342df0d6c3731": "84a87965ea1b43fb6ff1d95c762ccfc6",
".git/objects/db/c99e6974c93152779ba3e4a458d3d75459b3ab": "0e33991970000b5f635fa65e25137f66",
".git/objects/dc/43ed53acdea8d2b3e4d9e28f66785f93c17135": "04ac8bc488edc2313dd1efe9ae50aef3",
".git/objects/dc/56d9ce9488611d6625575a28f1413eb1a8bc39": "39febc7e150e1f3d4dc3f0ade93e523b",
".git/objects/dc/b18b47b0cad355121ec1437f7370b908903d37": "1f8c45fca1c556c30d0c4a01e3ff315a",
".git/objects/dd/472436aecdbbd44e195c696efc02300f9dc6bc": "44560133bc4b39c3755791e724401a93",
".git/objects/dd/9b844b3a022305efde19490c7df56d6b2bf3bf": "57ae1588c6fc157b07e4f3e0fcc56694",
".git/objects/de/eb2e96d9817963e80bfc6584829322654da82e": "4684d4248ec09aa4dede7f7f7f7f45be",
".git/objects/df/c820184ec8ee7cad2d5d311ea3b685329f343b": "55350f473698932a0ae089df74a8d8c4",
".git/objects/e0/f7034b688f43fb8ee31ecdfea6e37652298145": "7a8302fd8de2af227db87587c06be431",
".git/objects/e5/111c6c6c89e099bbb8035adf9ec83a55429c52": "fd770fa39ce06c0656914ee936a70816",
".git/objects/e7/6b91b181a390dbc58fdec5467c01b8f31f8b8e": "8f26b5ac7f27ce89adb28ed0359e6527",
".git/objects/e7/928d24c24e52c53ad18b67bfddab594f5811a7": "20b98eea4e0c88b30983834825180c38",
".git/objects/e8/6fb7819cc9d6c4b8919028c275bcb16bf700e9": "9bf878f132edc14950b1709c9b416509",
".git/objects/e9/bc83802662bc51a00e6dac8ce0d657a1ae1cde": "e3f0072fe71cf07eb373f2e71f50a9bd",
".git/objects/eb/5ba18255989efad256a29f1948cb2254925c5a": "521189058eceb9fa7af7c7ea56449392",
".git/objects/eb/e822770301eac64ff4139523345b66576e9eed": "8ae8d80ef16ade6d378f45452b10b0f1",
".git/objects/ec/270fb02fff6290b6f04e6f563ff542603cf789": "f8ea52adb15d430069e8d3c29515b0b9",
".git/objects/ed/4877d5ab879a5e0b3960a311f33097a848cbc1": "e13b4a7a2142b5e0d3f819aea8230780",
".git/objects/ee/293add2db641c007873e3b9c0c3adab717bf55": "e61a0b137b9160e5e7c74917326c59f9",
".git/objects/ef/f91fb1e0f335126e084acd7458781b7edaaf4d": "267b2d92bac7a6be8b2038784544d32c",
".git/objects/f0/d2c6ce24ee9640a386c6ef8a99e6216b24300b": "6a525e73fd59bfc83179e9df76788c60",
".git/objects/f1/48c23adc4e1c1ad86b2ae027b6bf2037e6e377": "7269a55bca188d4ec221fe9c29eb8b7c",
".git/objects/f2/52bbf1a2ec11e97574705136e10d577939adba": "c63529cc2c47e9580714cb417fa006f7",
".git/objects/f3/4f7e9423a8a30c6d088f73bbb12e9efcbee554": "b40a0aa36843e87f36bc972cae8406f6",
".git/objects/f3/575041f53425d446cfb71a612ed1f26cf6dfda": "326d60fcfb3d930558efd98a3ead1e9e",
".git/objects/f4/1e2778e47bd99e2ab2c8fda54ae2da55993378": "81d4f42f79ec534aaa844919e63ab743",
".git/objects/f4/be9ac7be64b0647c952c9a4db04a09cba91a7d": "96a978a081bab07e13f2aff6e45d6ed9",
".git/objects/f6/edb8ca172b9d344f699d6528549f4c6ef4c3f0": "0c6d05f0f140e30c422bff904a173ccc",
".git/objects/f7/d2518b1b31f02137c494bf62c4465c26a278a1": "617daca0767d19811e3a3bdc0cec0022",
".git/objects/fa/5812df2e1429cfcdb35517cf2cf68aa436e66a": "60ba3916dec30667f958bb26b361b5b7",
".git/objects/fb/181f8713e188b4824b1699a675b52d107c7043": "66cb8730a92fafa6480f1e3df45ae397",
".git/objects/fb/4211ee21676b28a7974e0562a77588a60ccbf1": "c541e675ae662e41c1148269e4593827",
".git/objects/fb/c58542a6e8174dbd0207dc113bab0f14354950": "be1ded96e0e9e35eb2cc95e58ea3bff7",
".git/objects/fc/b8bf78a04eb011eeae781c58cb9f437aa1cbdd": "7d02d64608923475e8b9bc4d97736942",
".git/objects/fe/6434f24b5effc04f4b0cf22a39c85933f4ceba": "92175bd24019227d9ea8e87c12a3a73a",
".git/objects/pack/pack-b0351ce1453b838c210219636d71a08d08a068a6.idx": "26b434a132fa6932bc30187fd3811c4d",
".git/objects/pack/pack-b0351ce1453b838c210219636d71a08d08a068a6.pack": "6f5da6d5e059f8160d3c7f5497abb379",
".git/objects/pack/pack-b0351ce1453b838c210219636d71a08d08a068a6.rev": "82da479fff2ba2b48b5073a29dfac4af",
".git/packed-refs": "90279bdba2522ccee0ec8e5bd3c4d8e5",
".git/refs/heads/master": "34804b12745a07615f72b41380d76f85",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "34804b12745a07615f72b41380d76f85",
"assets/AssetManifest.bin": "55f158e2bcdd1fe4feafb55ce7ecb00e",
"assets/AssetManifest.bin.json": "588b7c59584b0eb327715b69f59e5e80",
"assets/AssetManifest.json": "593a8a3ae746ae036365a3c9f37439aa",
"assets/assets/fonts/Montserrat-Bold.ttf": "354dc625a35bef1b6ec00a79c6cfc0c8",
"assets/assets/fonts/Montserrat-Regular.ttf": "38712903602f88435ddddec98862f8b8",
"assets/FontManifest.json": "41883a88168d6cc4f3c73dcfe27817b3",
"assets/fonts/MaterialIcons-Regular.otf": "73c3c9fcb56bcfbe5a65bec055035cc6",
"assets/NOTICES": "136009df9cfdaed8fe24aa9f70a79e0b",
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
"flutter_bootstrap.js": "8812c250b87cd5c541ebb8cbf11aad21",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "afba2ad97a0aa34ba09b7a23216e5c68",
"/": "afba2ad97a0aa34ba09b7a23216e5c68",
"main.dart.js": "9239c39dc46bc3ee1a336966f1af444f",
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
