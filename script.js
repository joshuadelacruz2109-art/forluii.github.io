// DOM Elements
const homePage = document.getElementById('homePage');
const songDetailPage = document.getElementById('songDetailPage');
const playerPage = document.getElementById('playerPage');
const songListElement = document.getElementById('songList');

const backToHomeFromDetailBtn = document.getElementById('backToHomeFromDetailBtn');
const backToHomeBtn = document.getElementById('backToHomeBtn'); // Back button from player to home
const bodyElement = document.body;

const backgroundVideoContainer = document.querySelector('.video-background-container');
const backgroundVideo = document.getElementById('backgroundVideo');

// Elements for the Song Detail Page (will not be used immediately when clicking on a song, but will still be loaded)
const detailAlbumArt = document.getElementById('detailAlbumArt');
const detailTrackTitle = document.getElementById('detailTrackTitle');
const detailTrackArtist = document.getElementById('detailTrackArtist');
const detailAlbumName = document.getElementById('detailAlbumName');
const playFromDetailBtn = document.getElementById('playFromDetailBtn'); // Play button on detail page

const audioPlayer = document.getElementById('audioPlayer');
const albumArtPlayer = document.getElementById('albumArt');
const playerTrackTitle = document.getElementById('playerTrackTitle');
const playerTrackArtist = document.getElementById('playerTrackArtist');
const lyricsContainer = document.getElementById('lyricsContainer');

const playerProgressBarContainer = document.getElementById('playerProgressBarContainer');
const playerProgressBar = document.getElementById('playerProgressBar');
const playerCurrentTime = document.getElementById('playerCurrentTime');
const playerTotalDuration = document.getElementById('playerTotalDuration');

const playerPrevBtn = document.getElementById('playerPrevBtn');
const playerPlayPauseBtn = document.getElementById('playerPlayPauseBtn');
const playerNextBtn = document.getElementById('playerNextBtn');
const playerRepeatBtn = document.getElementById('playerRepeatBtn');
const playerShuffleBtn = document.getElementById('playerShuffleBtn');
const playerVolumeSlider = document.getElementById('playerVolumeSlider');
const playerSpeedSlider = document.getElementById('playerSpeedSlider'); // Add this
const currentSpeedDisplay = document.getElementById('currentSpeedDisplay'); // Add this

// App State
let songs = [
    {
        id: 1,
        title: "Fallen",
        artist: "Lola Amour",
        album: "Lola Amour",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273b42607713c1dd129afa9f350",
        audioSrc: "audio/Fallen - Lola Amour.mp3",
        videoBgSrc: "videos/Fallen - Lola Amour.mp4", // Path video background specifically for this song
        // Lyrics with timestamp in seconds
        lyrics: [
            { time: 18, text: "What if I told you that I've fallen?" },
            { time: 22.8, text: "And I like the way you say my name" },
            { time: 27.64, text: "My heart skips a beat when I hear you calling" },
            { time: 33, text: "And I like that it won’t go away" },
            { time: 39, text: "But nevermind, don’t wanna give you any trouble" },
            { time: 44.1, text: "Nevermind, nevermind" },
            { time: 49.08, text: "I’m okay with being by your side for as long as I can hide" },
            { time: 54.9, text: "What if I told you that I’ve fallen?" },
            { time: 76.92, text: "What if I told you that I’ve fallen?" },
            { time: 82, text: "A heart shaped arrow through my chest" },
            { time: 87, text: "I’ll make your breakfast every morning" },
            { time: 91.9, text: "And pick you up when you’re a mess" },
            { time: 99.22, text: "I know that it won’t ever stop" },
            { time: 102.5, text: "You know I’ll be there when you call me whether you like it or not" },
            { time: 107.75, text: "Without a warning, now I’m falling for this picture on my phone" },
            { time: 112.8, text: "But don’t mind me I’m just falling, I’ll get back up on my own" },
            { time: 118, text: "Please don’t say my name" },
            { time: 121.9, text: "Help me put out this flame" },
            { time: 127.3, text: "I’d rather hold onto this feeling that you don’t even believe in" },
            { time: 133.4, text: "What if I told you that I’ve fallen?" },
            { time: 156.3, text: "What if I told you that I’ve fallen? (nevermind, nevermind, nevermind)" },
            { time: 161, text: "What if I told you that I’ve fallen? (nevermind, nevermind, nevermind)" },
            { time: 166, text: "What if I told you that I’ve fallen? (nevermind, nevermind, nevermind)" },
            { time: 171, text: "What if I told you that I’ve fallen? (nevermind, nevermind, nevermind)" },
            { time: 176, text: "What if I told you that I’ve fallen? (Oh nevermind)" },
            { time: 179.9, text: "What if I told you that I’ve fallen? (Oh nevermind)" },
            { time: 184.9, text: "What if I told you that I’ve fallen? (Oh nevermind)" },
            { time: 190.1, text: "What if I told you that I’ve fallen? (Oh nevermind)" },
            { time: 193, text: "I said nevermind (I shouldn’t tell you that I’ve fallen)" },
        ]
    },
    {
        id: 2,
        title: "Naiilang",
        artist: "Le John",
        album: "",
        albumArtUrl: "images/Naiilang.jpg",
        audioSrc: "audio/Le John - Naiilang (Official Lyric Video) - Le John (youtube).mp3",
        videoBgSrc: "videos/Naiilang.mp4", // Path video background specifically for this song
        // Lyrics with timestamp in seconds
        lyrics: [
            { time: 27, text: "Giliw, ikaw talaga ang nasa puso" },
  { time: 37, text: "Nabigla ka ba nito?" },
  { time: 41, text: "Wala na siguro ang tiwala mo sa akin" },
  { time: 51, text: "Pero sandali lang" },
  { time: 54, text: "Alam ko naman kaibigan tayo" },
  { time: 61, text: "Kasalanan ba'ng mahulog sayo?" },
  { time: 67, text: "Tumingin ka sa akin, gusto kong linawin" },
  { time: 75, text: "Naiilang ka ba 'pag tayo lang dal'wa?" },
  { time: 81, text: "Sinasabi ko nga na atin ang mundo" },
  { time: 89, text: "Walang ibang tulad mo, whoa ,whoa-oh-oh" },
  { time: 98, text: "…" },
  { time: 102, text: "Sabihin mo (oh) kung iba ang kuwento natin" },
  { time: 109, text: "Iba rin ba (ah) ang nadarama? (Uh-uh)" },
  { time: 116, text: "'Di ba ako'ng laman sa puso?" },
  { time: 120, text: "Handa na 'kong ibigay ang lahat sa'yo, whoa(whoa)" },
  { time: 127, text: "Kaya huwag kang mangamba" },
  { time: 130, text: "Alam ko naman kaibigan tayo" },
  { time: 136, text: "Kasalanan ba'ng mahulog sayo?" },
  { time: 142, text: "Tumingin ka sa aking, gusto kong linawin" },
  { time: 150, text: "Naiilang ka ba 'pag tayo lang dal'wa?" },
  { time: 157, text: "Sinasabi ko nga na atin ang mundo" },
  { time: 164, text: "Walang ibang tulad mo" },
  { time: 172, text: "(Oh) yeah" },
  { time: 176, text: "(Oh) pasensiya na, 'di ko kayang pigilan ang puso" },
  { time: 186, text: "(Oh) oh, whoa" },
  { time: 189, text: "(Oh) oh" },
  { time: 193, text: "…" },
  { time: 196, text: "Tumingin ka sa aking, gusto kong linawin" },
  { time: 205, text: "Naiilang ka ba 'pag tayo lang dal'wa?" },
  { time: 211, text: "Sinasabi ko nga na atin ang mundo" },
  { time: 219, text: "Walang ibang tulad mo, whoa ,whoa-oh-oh" }
        ]
    },    
    {
        id: 3,
        title: "RomCom",
        artist: "Rob Deniel",
        album: "Wander Boy",
        albumArtUrl: "images/RomCom.jpg",
        audioSrc: "audio/RomCom - Rob Deniel.mp3",
        videoBgSrc: "videos/RomCom.mp4", // Path video background specifically for this song
        // Lyrics with timestamp in seconds
        lyrics: [
            { time: 1, text: "One, two, three, four" },
            { time: 21, text: "Ngayon ko lang natagpuan" },
            { time: 31, text: "Ang tanging kahinaan" },
            { time: 38, text: "At lumilipas ang sandali" },
            { time: 43, text: "At hindi na mapakali" },
            { time: 48, text: "Pero sa 'yo" },
            { time: 50, text: "Labis-labis akong nasasabik" },
            { time: 56, text: "Na makapiling ka na" },
            { time: 60, text: "Labis-labis ang mga halik" },
            { time: 66, text: "Nang matagpuan na kita" },
            { time: 72, text: "Oh, oh, oh" },
            { time: 78, text: "Pag-ibig ang kahulugan" },
            { time: 87, text: "Ako'y mayro'n palaging paraan" },
            { time: 95, text: "Bakit si Marvin at Jolina" },
            { time: 100, text: "Sa palabas lang magkasama?" },
            { time: 104, text: "Pero sa 'yo" },
            { time: 106, text: "Labis-labis akong nasasabik" },
            { time: 113, text: "Na makapiling ka na" },
            { time: 116, text: "Labis-labis ang mga halik" },
            { time: 122, text: "Nang matagpuan na kita" },
            { time: 128, text: "Oh, oh, oh, oh" },
            { time: 153, text: "Minsan na lang ako magkaganito" },
            { time: 158, text: "Minsan na lang ako muling mabuo" },
            { time: 162, text: "Kaya sabihin mo na" },
            { time: 165, text: "Sabihin mo na, giliw ko" },
            { time: 172, text: "At labis-labis akong nasasabik" },
            { time: 179, text: "Na makapiling ka na" },
            { time: 181, text: "Labis-labis akong nasasabik, oh" },
            { time: 191, text: "Labis-labis akong nasasabik" },
            { time: 197, text: "Na makapiling ka na" },
            { time: 200, text: "Labis-labis ang mga halik nang matagpuan na kita" }
          
        ]
    },
    {
        id: 4,
        title: "Sinta",
        artist: "Rob Deniel",
        album: "",
        albumArtUrl: "images/Sinta.jpg",
        audioSrc: "audio/Sinta.mp3",
        videoBgSrc: "videos/Sinta.mp4",
        lyrics: [
            { time: 40, text: "Halik ba talaga" },
  { time: 44, text: "Ang gagana sa iyong tingin hmm" },
  { time: 51, text: "‘Lam mo ba" },
  { time: 53, text: "Naiisip ko pa rin mga gabi na magkatabi" },
  { time: 61, text: "Oh ang tangi kong hiling" },
  { time: 66, text: "Kahit sa panaginip na lang" },
  { time: 70, text: "Oh I’ll take this as a chance" },
  { time: 76, text: "To give you all the time that you need oh" },
  { time: 81, text: "Sinta" },
  { time: 83, text: "Oh kay gandang umibig sa ’yo" },
  { time: 88, text: "Ako’y maghihintay sa ’yong pagdating" },
  { time: 93, text: "At tatanggapin kita" },
  { time: 99, text: "Oh sinta" },
  { time: 103, text: "Oh kay gandang umibig sa ’yo" },
  { time: 108, text: "Ako ay hihimlay sa ’yong tabi" },
  { time: 113, text: "At tatanggapin kita" },
  { time: 120, text: "Are we old enough" },
  { time: 123, text: "To leave the stars tonight" },
  { time: 127, text: "We could kiss it right" },
  { time: 129, text: "Ikaw ang bulaklak na kumukulay sa paligid natin" },
  { time: 139, text: "Oh ang tangi kong hiling" },
  { time: 145, text: "Kahit sa panaginip na lang" },
  { time: 148, text: "Oh I’ll take this as a chance" },
  { time: 154, text: "To give you all the time that you need oh" },
  { time: 159, text: "Sinta" },
  { time: 162, text: "Oh kay gandang umibig sa ’yo" },
  { time: 167, text: "Ako’y maghihintay sa ’yong pagdating" },
  { time: 171, text: "At tatanggapin kita" },
  { time: 177, text: "Oh sinta" },
  { time: 181, text: "Oh kay gandang umibig sa ’yo" },
  { time: 186, text: "Ako ay hihimlay sa ’yong tabi" },
  { time: 191, text: "At tatanggapin kita oh" },
  { time: 198, text: "Sinta oh sinta (‘di mo ba naririnig sinta)" },
  { time: 208, text: "Sana’y manatili ka pa" },
  { time: 211, text: "Manatili ka kahit saglit" },
  { time: 218, text: "Sinta oh sinta (‘di mo ba naririnig sinta)" },
  { time: 227, text: "Sana’y manatili ka pa" },
  { time: 230, text: "Manatili ka kahit saglit" },
  { time: 235, text: "Oh sinta" },
  { time: 240, text: "Oh kay gandang umibig sa ’yo" },
  { time: 245, text: "Ako’y maghihintay sa ’yong pagdating" },
  { time: 250, text: "At tatanggapin kita" },
  { time: 254, text: "Oh" },
  { time: 257, text: "Sinta" },
  { time: 260, text: "Oh kay gandang umibig sa ’yo" },
  { time: 264, text: "Ako ay hihimlay sa ’yong tabi" },
  { time: 269, text: "At tatanggapin kita oh" },
  { time: 275, text: "Oh sinta" },
  { time: 277, text: "Oh kay gandang umibig sa ’yo" },
  { time: 284, text: "Ako’y maghihintay sa ’yong pagdating" },
  { time: 289, text: "At tatanggapin kita" },
  { time: 295, text: "Oh sinta" },
  { time: 300, text: "Oh kay gandang umibig sa ’yo" },
  { time: 304, text: "Ako’y maghihintay sa ’yong pagdating" }
        ]
    },
    {
        id: 5,
        title: "Nahuhulog",
        artist: "Jed Baruelo",
        album: "",
        albumArtUrl: "images/Nahuhulog.jpg",
        audioSrc: "audio/Nahuhulog.mp3",
        videoBgSrc: "videos/Nahuhulog.mp4",
        lyrics: [
            { time: 16, text: "Sa piling mo" },
  { time: 21, text: "Ako'y 'di mapakali" },
  { time: 25, text: "Binibilang ang mga saglit" },
  { time: 28, text: "Ninanamnam ang bawat sandali" },
  { time: 32, text: "‘Di ko hangad" },
  { time: 36, text: "Na agad nang matapos 'to" },
  { time: 40, text: "Kailan ba mauulit 'to?" },
  { time: 43, text: "Ayoko nang kumawala sa 'yo" },
  { time: 46, text: "Nahuhulog sa lupa ang puso ko" },
  { time: 55, text: "Nakatutunaw mga titig mo" },
  { time: 59, text: "At dahan-dahang mga hawak mo" },
  { time: 62, text: "Nabubuo ang buong pagkatao ko" },   // 1:02 → 62
  { time: 70, text: "Kapag ikaw na ang kapiling ko" },    // 1:10 → 70
  { time: 75, text: "Habang-buhay, dito lang sa tabi ko, oh" }, // 1:15 → 75
  { time: 93, text: "Pakinggan mo" },                     // 1:33 → 93
  { time: 98, text: "Ang mga kantang 'sinulat ko" },       // 1:38 → 98
  { time: 101, text: "Lahat 'yan ay para sa iyo" },        // 1:41 → 101
  { time: 105, text: "Oh giliw, 'wag ka nang malilito" },  // 1:45 → 105
  { time: 108, text: "Bakit gan'to kababaw ang palaisipan ko?" }, // 1:48 → 108
  { time: 113, text: "Kahit na umaapaw ang pag-ibig ko" }, // 1:53 → 113
  { time: 117, text: "Ano ba'ng mayro'n sa 'yong ngiti?" }, // 1:57 → 117
  { time: 120, text: "Ba't parang kinang ng mga bituin?" }, // 2:00 → 120
  { time: 124, text: "Nahuhulog sa lupa ang puso ko" },    // 2:04 → 124
  { time: 132, text: "Nakatutunaw mga titig mo" },         // 2:12 → 132
  { time: 135, text: "At dahan-dahang mga hawak mo" },     // 2:15 → 135
  { time: 139, text: "Nabubuo ang buong pagkatao ko" },    // 2:19 → 139
  { time: 147, text: "Kapag ikaw na ang kapiling ko" },    // 2:27 → 147
  { time: 152, text: "Habang-buhay, dito lang sa tabi ko, oh" }, // 2:32 → 152
  { time: 185, text: "Nahuhulog sa lupa ang puso ko" },    // 3:05 → 185
  { time: 193, text: "Nakatutunaw mga titig mo" },         // 3:13 → 193
  { time: 197, text: "At dahan-dahang mga hawak mo" },     // 3:17 → 197
  { time: 201, text: "Nabubuo ang buong pagkatao ko" },    // 3:21 → 201
  { time: 209, text: "Kapag ikaw na ang kapiling ko" },    // 3:29 → 209
  { time: 213, text: "Habang-buhay, dito lang sa tabi ko, oh" } // 3:33 → 213
        ]
    },
    {
        id: 6,
        title: "Kursunada",
        artist: "Adie", 
        album: "",
        albumArtUrl: "images/Kursunada.jpg", 
        audioSrc: "audio/Kursunada.mp3",
        videoBgSrc: "videos/Kursunada.mp4",
        lyrics: [
            { time: 7, text: "Wag mo na sanang pabitinin pa" },
            { time: 14, text: "Kung patungo lang din tayo" },
            { time: 18, text: "Sa inaasam na hangganan (hmm)" },
            { time: 29, text: "Oh-oh-oh 'wag ka nang magpakipot pa" },
            { time: 35, text: "Kitang-kita ang lapot sa mga matang" },
            { time: 40, text: "Mapanlinlang (mapanlinlang)" },
            { time: 43, text: "Tila hiwatig ay kaaya-aya" },
            { time: 50, text: "Talaga ba o nagpapahalata lang" },
            { time: 52, text: "Para ba ika'y sundan nang sundan (oh)" },
            { time: 61, text: "Hiling ko'y whoa-oh-oh" },          // 1:01 → 61
            { time: 66, text: "Kung mapagbibigyan" },                // 1:06 → 66
            { time: 69, text: "Di hahayaang masayang (oh)" },        // 1:09 → 69
            { time: 74, text: "Di na ako magpapaligoy-ligoy pa ('kaw ang kursunada)" }, // 1:14 → 74
            { time: 82, text: "Basta ikaw lang sapat na hmm-mmm" },  // 1:22 → 82
            { time: 95, text: "Pinapanalangin ka palaging mapasa'kin" }, // 1:35 → 95
            { time: 99, text: "Hihintayin ang mga pangitaing" },     // 1:39 → 99
            { time: 104, text: "Hinahanap-hanap mo na ang paglingap ko" }, // 1:44 → 104
            { time: 106, text: "Na tila hindi matutumbasan ng iba" }, // 1:46 → 106
            { time: 109, text: "Pagkat alam mong isang tawag mo lamang" }, // 1:49 → 109
            { time: 113, text: "Agad akong patungo sa 'yo sa 'yo" },  // 1:53 → 113
            { time: 118, text: "Makiramdam ka naman" },              // 1:58 → 118
            { time: 120, text: "Hiling ko'y oh" },                   // 2:00 → 120
            { time: 125, text: "Kung mapagbibigyan" },               // 2:05 → 125
            { time: 129, text: "Di hahayaang masayang (oh)" },       // 2:09 → 129
            { time: 133, text: "Di na ako magpapaligoy-ligoy pa" },  // 2:13 → 133
            { time: 143, text: "Di matutulad sa mga naunang" },      // 2:23 → 143
            { time: 148, text: "Sinubukan oh mong pagbigyan" },      // 2:28 → 148
            { time: 152, text: "Susuyurin bawat daan ('kaw ang kursunada 'kaw ang aking kursunada)" }, // 2:32 → 152
            { time: 159, text: "Mapasaakin ka lang" }                // 2:39 → 159
        ]
    },
    {
        id: 7,
        title: "Paninindigan Kita",
        artist: "Ben&Ben",
        album: "",
        albumArtUrl: "images/Paninindigan.jpg",
        audioSrc: "audio/Paninindigan.mp3",
        videoBgSrc: "videos/Paninindigan.mp4",
        lyrics: [
            { time: 16, text: "Kakainis na ayaw mong" },
            { time: 22, text: "Maniwalang mahal kita" },
            { time: 25, text: "Ano pa bang kailangan kong" },
            { time: 30, text: "Patunayan sa'yo sinta" },
            { time: 34, text: "Pero naiintindihan ko naman" },
            { time: 39, text: "Iniiwasan mo lang masaktan" },
            { time: 43, text: "Di ka madedehado kung sasagutin mo lang ako" },
            { time: 50, text: "Paninindigan kita oo" },
            { time: 54, text: "Mamahalin kitang buong buo" },
            { time: 60, text: "Kahit sa pagtanda ako'y sa'yo" },   // 1:00 → 60
            { time: 67, text: "Paninindigan kita oo" },               // 1:07 → 67
            { time: 71, text: "Anumang sabihin ng magulong mundo" },  // 1:11 → 71
            { time: 77, text: "Kahit ayaw nilang ako'y sayo" },       // 1:17 → 77
            { time: 83, text: "Ika'y iingatan ko" },                  // 1:23 → 83
            { time: 93, text: "Kakakilig ka sa tuwing" },             // 1:33 → 93
            { time: 98, text: "Lumalapit ka na sinta" },              // 1:38 → 98
            { time: 101, text: "Nawawala ang angas ko" },             // 1:41 → 101
            { time: 106, text: "Pilit man na itago pa" },             // 1:46 → 106
            { time: 109, text: "Mm grabe kasi kung pano mo 'ko itahan" }, // 1:49 → 109
            { time: 115, text: "Kapag napupuno na'ko" },              // 1:55 → 115
            { time: 118, text: "Sa ingay ng paligid ikaw ang aking" }, // 1:58 → 118
            { time: 124, text: "Katahimikan" },                       // 2:04 → 124
            { time: 127, text: "Paninindigan kita oo" },              // 2:07 → 127
            { time: 131, text: "Mamahalin kitang buong buo" },        // 2:11 → 131
            { time: 137, text: "Kahit sa pagtanda ako'y sa'yo" },     // 2:17 → 137
            { time: 144, text: "Paninindigan kita oo" },              // 2:24 → 144
            { time: 148, text: "Anumang sabihin ng magulong mundo" }, // 2:28 → 148
            { time: 154, text: "Kahit ayaw nilang ako'y sayo" },      // 2:34 → 154
            { time: 160, text: "Ika'y iingatan ko" },                 // 2:40 → 160
            { time: 169, text: "Paninindigan kita" },                 // 2:49 → 169
            { time: 179, text: "Sasamahan ka kahit na" },             // 2:59 → 179
            { time: 183, text: "Napapalibutan ng mga problema" },     // 3:03 → 183
            { time: 188, text: "Sa hirap at ginhawa" },               // 3:08 → 188
            { time: 191, text: "Dadamayan kita sinta" },              // 3:11 → 191
            { time: 195, text: "Paninindigan kita oo" },              // 3:15 → 195
            { time: 200, text: "Kahit alam kong tayo'y magbabago" },  // 3:20 → 200
            { time: 205, text: "Magmula umpisa hanggang dulo" },      // 3:25 → 205
            { time: 212, text: "Paninindigan kita" },                 // 3:32 → 212
            { time: 216, text: "Paninindigan kita" },                 // 3:36 → 216
            { time: 221, text: "'Wag kang mag alala ako'y" },         // 3:41 → 221
            { time: 224, text: "Ako'y siguradong sigurado" },         // 3:44 → 224
            { time: 229, text: "Paninindigan kita oo" },              // 3:49 → 229
            { time: 233, text: "Mamahalin kitang buong buo" },        // 3:53 → 233
            { time: 239, text: "Kahit sa pagtanda ako'y sa'yo" },     // 3:59 → 239
            { time: 246, text: "Paninindigan kita oo" },              // 4:06 → 246
            { time: 250, text: "Anumang sabihin ng magulong mundo" }, // 4:10 → 250
            { time: 256, text: "Kahit ayaw nilang ako'y sayo" },      // 4:16 → 256
            { time: 263, text: "Ika'y iingatan ko" },                 // 4:23 → 263
            { time: 268, text: "Paninindigan kita" },                 // 4:28 → 268
            { time: 272, text: "Paninindigan kita" },                 // 4:32 → 272
            { time: 276, text: "Paninindigan kita" },                 // 4:36 → 276
            { time: 280, text: "Ika'y iingatan ko (paninindigan kita)" }, // 4:40 → 280
            { time: 284, text: "At aalagaan ko (paninindigan kita)" }, // 4:44 → 284
            { time: 288, text: "Kung andito na rin tayo (paninindigan kita)" }, // 4:48 → 288
            { time: 292, text: "Panindigan na natin 'to" }            // 4:52 → 292
        ]
    },
    
];

let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0: no repeat, 1: repeat one, 2: repeat all

// --- Page Navigation ---
function showHomePage() {
    playerPage.classList.remove('active');
    songDetailPage.classList.remove('active'); // Make sure the page details are hidden
    homePage.classList.add('active');

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.remove('detail-active-bg');
    backgroundVideoContainer.classList.remove('active'); // Hide background video
    backgroundVideo.pause(); // Pause background video
    backgroundVideo.src = ""; // Empty video src
    backgroundVideo.load();
    pauseTrack(); // Pause music when returning home
}

// Function to display the song detail page (still maintained, but not called from song list click)
function showSongDetailPage(song) {
    homePage.classList.remove('active');
    playerPage.classList.remove('active');
    songDetailPage.classList.add('active');

    detailAlbumArt.src = song.albumArtUrl;
    detailTrackTitle.textContent = song.title;
    detailTrackArtist.textContent = song.artist;
    detailAlbumName.textContent = song.album || "Unknown Album";

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.add('detail-active-bg');
    backgroundVideoContainer.classList.remove('active');
    backgroundVideo.pause(); // Pause background video
    backgroundVideo.src = ""; // Empty video src
    backgroundVideo.load();
}

function showPlayerPage() {
    homePage.classList.remove('active');
    songDetailPage.classList.remove('active');
    playerPage.classList.add('active');

    bodyElement.classList.remove('detail-active-bg');
    bodyElement.classList.add('player-active-bg');
    backgroundVideoContainer.classList.add('active'); // Show background video

    const currentSong = songs[currentSongIndex];
    if (currentSong && currentSong.videoBgSrc) {
        backgroundVideo.src = currentSong.videoBgSrc;
        backgroundVideo.load();
        backgroundVideo.play().catch(e => console.error("Error playing video background:", e));
    } else {
        backgroundVideo.src = "";
        backgroundVideo.load(); // Empty src if there is no custom video
    }
}

// --- Home Page Logic ---
function renderSongList() {
    songListElement.innerHTML = '';
    if (songs.length === 0) {
        songListElement.innerHTML = '<li class="loading-songs">Tidak ada lagu tersedia.</li>';
        return;
    }
    songs.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-id', song.id);
        listItem.innerHTML = `
            <img src="${song.albumArtUrl}" alt="${song.title}" class="song-art-list">
            <div class="song-info-list">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
        `;
        // --- Important Changes here ---
        // When a song item is clicked, immediately load & play the song then display the player page
        listItem.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(songs[currentSongIndex]);
            playTrack();
            showPlayerPage(); // Jump to the music player page
        });

        // Event listener for hover
        listItem.addEventListener('mouseenter', () => {
            // Only enable background video if we are on the home page
            if (homePage.classList.contains('active') && song.videoBgSrc) {
                backgroundVideo.src = song.videoBgSrc;
                backgroundVideo.load();
                backgroundVideoContainer.classList.add('active');
                backgroundVideo.play().catch(e => console.error("Error playing video on hover:", e));
                bodyElement.classList.add('player-active-bg'); // Add class for body background color
            }
        });
        listItem.addEventListener('mouseleave', () => {
            // Hide background video only if we are on home page
            if (homePage.classList.contains('active')) {
                backgroundVideoContainer.classList.remove('active');
                backgroundVideo.pause(); // Pause video when mouse leaves
                backgroundVideo.src = ""; // Empty src to prevent playing in the background
                backgroundVideo.load();
                bodyElement.classList.remove('player-active-bg'); // Remove body background color class
            }
        });

        songListElement.appendChild(listItem);
    });
}

// --- Player Logic ---
function loadSong(song) {
    if (!song) {
        console.error("Song not found!");
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Error";
        playerTrackTitle.textContent = "Song Not Available";
        playerTrackArtist.textContent = "-";
        lyricsContainer.innerHTML = "<p>Lyrics are not available.</p>"; // Replace text Content with inner HTML
        audioPlayer.src = "";
        playerCurrentTime.textContent = "0:00";
        playerTotalDuration.textContent = "0:00";
        playerProgressBar.style.width = "0%";
        return;
    }
    albumArtPlayer.src = song.albumArtUrl;
    playerTrackTitle.textContent = song.title;
    playerTrackArtist.textContent = song.artist;
    
    renderLyrics(song.lyrics); // Call the render Lyrics function
    
    audioPlayer.src = song.audioSrc;

    audioPlayer.onloadedmetadata = () => {
        playerTotalDuration.textContent = formatTime(audioPlayer.duration);
    };
    audioPlayer.load();
    updatePlayPauseIcon();
}

// New function to render lyrics
function renderLyrics(lyrics) {
    lyricsContainer.innerHTML = ''; // Clean the lyrics container
    if (!lyrics || lyrics.length === 0) {
        lyricsContainer.innerHTML = "<p>Lyrics are not available for this song.</p>";
        return;
    }

    lyrics.forEach(line => {
        const span = document.createElement('span');
        span.textContent = line.text;
        span.setAttribute('data-time', line.time); // Store timestamp in data-attribute
        span.classList.add('lyric-line'); // Add class for styling
        lyricsContainer.appendChild(span);
        // Remove the added <br> manually, using CSS display:block or flexbox
        // lyrics Container.appendChild(document.createElement('br'));
    });
}


function playTrack() {
    if (!audioPlayer.src || audioPlayer.src === window.location.href) {
        if (songs.length > 0) {
            loadSong(songs[currentSongIndex]);
        } else {
            console.log("There are no songs to play.");
            return;
        }
    }
    isPlaying = true;
    audioPlayer.play().catch(error => console.error("Error while playing:", error));
    updatePlayPauseIcon();
}

function pauseTrack() {
    isPlaying = false;
    audioPlayer.pause();
    updatePlayPauseIcon();
}

function updatePlayPauseIcon() {
    if (isPlaying) {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function prevTrack() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Update background video
}

function nextTrackLogic() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Update background video
}

function nextTrack() {
    if (songs.length === 0) return;

    if (repeatMode === 1 && audioPlayer.ended) {
        // Handled by audio.loop = true
    } else if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            if (repeatMode === 2) {
                currentSongIndex = 0;
            } else {
                currentSongIndex = songs.length - 1;
                loadSong(songs[currentSongIndex]);
                pauseTrack();
                audioPlayer.currentTime = audioPlayer.duration;
                return;
            }
        }
        loadSong(songs[currentSongIndex]);
        playTrack();
    }
    showPlayerPage(); // Update background video
}

function playRandomTrack() {
    if (songs.length <= 1) {
        currentSongIndex = 0;
    } else {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * songs.length);
        } while (randomIndex === currentSongIndex);
        currentSongIndex = randomIndex;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Update background video
}


audioPlayer.addEventListener('timeupdate', () => {
    if (audioPlayer.duration) {
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        playerProgressBar.style.width = `${progressPercent}%`;
        playerCurrentTime.textContent = formatTime(audioPlayer.currentTime);
        
       // --- Logic highlight lyrics ---
        const currentTime = audioPlayer.currentTime;
        const lyricLines = lyricsContainer.querySelectorAll('.lyric-line');
        let highlightedLine = null;

        lyricLines.forEach((line, index) => {
            const lineTime = parseFloat(line.getAttribute('data-time'));
            // Determine when this line of lyrics ends. If this is the last line, assume it ends at the end of the song.
            // Or, better, assume it ends just before the next line starts.
            let nextLineTime = Infinity; 
            if (index + 1 < lyricLines.length) {
                nextLineTime = parseFloat(lyricLines[index + 1].getAttribute('data-time'));
            }

            if (currentTime >= lineTime && currentTime < nextLineTime) {
                line.classList.add('highlight');
                highlightedLine = line;
            } else {
                line.classList.remove('highlight');
            }
        });

        // --- Auto-scroll lyrics only if highlighted line is not visible ---
        if (highlightedLine) {
            const containerRect = lyricsContainer.getBoundingClientRect();
            const lineRect = highlightedLine.getBoundingClientRect();

            // Check if the row is outside the container viewport
            const isOutsideTop = lineRect.top < containerRect.top;
            const isOutsideBottom = lineRect.bottom > containerRect.bottom;

            if (isOutsideTop || isOutsideBottom) {
                // Scroll so that the nearest row appears in the viewport, with a smooth animation
                highlightedLine.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
    }
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

playerProgressBarContainer.addEventListener('click', (e) => {
    if (!audioPlayer.duration || songs.length === 0) return;
    const width = playerProgressBarContainer.clientWidth;
    const clickX = e.offsetX;
    audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
});

playerVolumeSlider.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value;
});

// Event Listener for speed slider
playerSpeedSlider.addEventListener('input', (e) => {
    audioPlayer.playbackRate = parseFloat(e.target.value);
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
});


playerShuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    playerShuffleBtn.classList.toggle('active-feature', isShuffle);
    console.log("Shuffle: " + isShuffle);
});

playerRepeatBtn.addEventListener('click', () => {
    repeatMode = (repeatMode + 1) % 3;
    updateRepeatButtonUI();
    console.log("Repeat Mode: " + repeatMode);
});

function updateRepeatButtonUI() {
    playerRepeatBtn.classList.remove('active-feature');
    audioPlayer.loop = false;

    if (repeatMode === 0) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
    } else if (repeatMode === 1) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat-1"></i>';
        playerRepeatBtn.classList.add('active-feature');
        audioPlayer.loop = true;
    } else {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
        playerRepeatBtn.classList.add('active-feature');
    }
}

playerPlayPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
});
playerPrevBtn.addEventListener('click', prevTrack);
playerNextBtn.addEventListener('click', nextTrackLogic);

audioPlayer.addEventListener('ended', () => {
    if (repeatMode === 1) {
        // Handled by audio.loop = true
    } else {
        nextTrack();
    }
});

// Event Listeners for navigation buttons
backToHomeFromDetailBtn.addEventListener('click', showHomePage); // From detail page to home
backToHomeBtn.addEventListener('click', showHomePage); // From the landing page to the home page

// Event Listener for the play button from the details page (if you want to use it)
playFromDetailBtn.addEventListener('click', () => {
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
});

// --- Initialization ---
function init() {
    console.log("Initializing..."); // Add log for initialization
    console.log("Songs array length:", songs.length); // Check the number of songs
    console.log("songListElement:", songListElement); // Check if song List Element is found

    renderSongList(); // This is what renders the track list
    
    if (songs.length > 0) {
        loadSong(songs[currentSongIndex]);
    } else {
        // This will be displayed if the songs array is empty
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Musik";
        playerTrackTitle.textContent = "No Songs";
        playerTrackArtist.textContent = "Add songs";
        lyricsContainer.innerHTML = "<p>Please add songs from the list.</p>";
    }
    audioPlayer.volume = playerVolumeSlider.value;
    audioPlayer.playbackRate = playerSpeedSlider.value; // Set the initial speed
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`; // Update speed display
    updatePlayPauseIcon();
    updateRepeatButtonUI();
    showHomePage(); // Start from the playlist page
    console.log("Initialization complete."); // Log completed initialization
}

init();
