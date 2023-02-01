// ref: https://cloud.google.com/nodejs/docs/reference/firestore/latest

import ChordType from '@/types/ChordType';

import {Firestore} from '@google-cloud/firestore';

const firestore = new Firestore();

class Chord {
  id: string;
  singerNames: string[];
  songName: string;
  path: string;
  
  constructor(chord: ChordType) {
    this.id = chord.id;
    this.singerNames = chord.singerNames;
    this.songName = chord.songName;
    this.path = chord.path;
  }
  
  static async migrateExistingData() {
    const chordsData = [
      {
        "id": "XMs2cH",
        "singerNames": [
          "AKB48"
        ],
        "songName": "365日の紙飛行機",
        "path": "365日の紙飛行機-AKB48-Capo0-KeyG.pdf"
      },
      {
        "id": "jMWZ7G",
        "singerNames": [
          "By2"
        ],
        "songName": "不哭了",
        "path": "不哭了-By2-Capo5-KeyC.pdf"
      },
      {
        "id": "HCWkEX",
        "singerNames": [
          "Dear Jane"
        ],
        "songName": "不許你注定一人",
        "path": "不許你注定一人-Dear Jane-Capo1-KeyG.pdf"
      },
      {
        "id": "feFUJm",
        "singerNames": [
          "Dear Jane"
        ],
        "songName": "到此為止",
        "path": "http://polygonguitar.blogspot.com/2013/01/dear-jane-chord.html"
      },
      {
        "id": "bLQJjL",
        "singerNames": [
          "Dear Jane"
        ],
        "songName": "到底發生過什麼事",
        "path": "https://zh-hk.guitarians.com/chord/213216/Dear-Jane-%E5%88%B0%E5%BA%95%E7%99%BC%E7%94%9F%E9%81%8E%E4%BB%80%E9%BA%BC%E4%BA%8B%EF%BC%9F?targetCapo=4"
      },
      {
        "id": "lHY6XS",
        "singerNames": [
          "許志安"
        ],
        "songName": "假如讓我說下去",
        "path": "http://polygonguitar.blogspot.com/2012/04/chord_5698.html"
      },
      {
        "id": "ANCMyA",
        "singerNames": [
          "許志安"
        ],
        "songName": "唯獨你是不可取替",
        "path": "http://polygonguitar.blogspot.com/2012/05/chord_9518.html"
      },
      {
        "id": "v1DNsK",
        "singerNames": [
          "許志安"
        ],
        "songName": "Remember Me",
        "path": "https://www.polygon.guitars/score/4017/Remember%20Me"
      },
      {
        "id": "lUL1Gu",
        "singerNames": [
          "張智霖"
        ],
        "songName": "祝君好",
        "path": "https://zh-hk.guitarians.com/chord/19013/張智霖-祝君好"
      },
      {
        "id": "pL4m2i",
        "singerNames": [
          "方力申",
          "鄧麗欣"
        ],
        "songName": "好好戀愛",
        "path": "http://polygonguitar.blogspot.com/2012/10/chord_24.html"
      },
      {
        "id": "oeSrDQ",
        "singerNames": [
          "鄧麗欣"
        ],
        "songName": "他不准我哭",
        "path": "http://polygonguitar.blogspot.com/2012/10/chord_3481.html"
      },
      {
        "id": "DPpZMD",
        "singerNames": [
          "王菲"
        ],
        "songName": "容易受傷的女人",
        "path": "http://polygonguitar.blogspot.com/2012/10/chord_5575.html"
      },
      {
        "id": "I75xr0",
        "singerNames": [
          "王菲"
        ],
        "songName": "約定",
        "path": "約定-王菲-Capo4-KeyC.pdf"
      },
      {
        "id": "LiCcvw",
        "singerNames": [
          "鄭中基"
        ],
        "songName": "無賴",
        "path": "http://polygonguitar.blogspot.com/2012/12/chord_7669.html"
      },
      {
        "id": "tP2dCV",
        "singerNames": [
          "王光良"
        ],
        "songName": "童話",
        "path": "http://polygonguitar.blogspot.com/2012/11/chord_8743.html"
      },
      {
        "id": "0hMLDv",
        "singerNames": [
          "Le Couple"
        ],
        "songName": "ひだまりの詩",
        "path": "https://ja.chordwiki.org/wiki/ひだまりの詩"
      },
      {
        "id": "DInBEK",
        "singerNames": [
          "Kiroro"
        ],
        "songName": "忘れないで",
        "path": "https://music.j-total.net/data/007ki/006_kiroro/013.html"
      },
      {
        "id": "OcbfxY",
        "singerNames": [
          "Kiroro"
        ],
        "songName": "未来へ",
        "path": "https://gakufu.gakki.me/m/?p=DT13049&k=m5"
      },
      {
        "id": "ybsQIY",
        "singerNames": [
          "Iñigo Pascual"
        ],
        "songName": "Remember Me",
        "path": "Remember Me-Iñigo Pascual-Capo0-KeyG.pdf"
      },
      {
        "id": "GFXH90",
        "singerNames": [
          "John Denver"
        ],
        "songName": "Perhaps Love",
        "path": "Perhaps Love-John Denver-Capo0-KeyA.pdf"
      },
      {
        "id": "LPknPx",
        "singerNames": [
          "いきものがかり"
        ],
        "songName": "SAKURA",
        "path": "http://gakufu.gakki.me/m/?p=DT2138&k=m1"
      },
      {
        "id": "DY2Jgf",
        "singerNames": [
          "いきものがかり"
        ],
        "songName": "帰りたくなったよ",
        "path": "http://gakufu.gakki.me/m/?p=DT2424&k=m3"
      },
      {
        "id": "6PnpLk",
        "singerNames": [
          "いきものがかり"
        ],
        "songName": "笑顔",
        "path": "https://gakufu.gakki.me/m/index.php?p=N02178&k=m2#rp"
      },
      {
        "id": "kauncw",
        "singerNames": [
          "いきものがかり"
        ],
        "songName": "ラストシーン",
        "path": "https://gakufu.gakki.me/m/index2.php?p=N06711&k=m2#rp"
      },
      {
        "id": "gQFkTX",
        "singerNames": [
          "いきものがかり"
        ],
        "songName": "ありがとう",
        "path": "https://gakufu.gakki.me/m/data/N00293.html"
      },
      {
        "id": "oaIpyz",
        "singerNames": [
          "張棟樑"
        ],
        "songName": "當你孤單你會想起誰",
        "path": "http://chords-haven.blogspot.com/2007/01/blog-post_3829.html?m=1"
      },
      {
        "id": "m6p0Q0",
        "singerNames": [
          "林夏薇"
        ],
        "songName": "很想討厭你",
        "path": "http://polygonguitar.blogspot.com/2014/02/intro-chord.html"
      },
      {
        "id": "EWbCca",
        "singerNames": [
          "許廷鏗"
        ],
        "songName": "記住忘記我",
        "path": "http://daydayguitar.blogspot.com/2015/12/9VI8pbRHHM4.html"
      },
      {
        "id": "3g5jAS",
        "singerNames": [
          "許廷鏗"
        ],
        "songName": "青春頌",
        "path": "青春頌-許廷鏗-Capo5-KeyG.pdf"
      },
      {
        "id": "sHVWoF",
        "singerNames": [
          "許廷鏗"
        ],
        "songName": "我們與愛的距離",
        "path": "我們與愛的距離-許廷鏗-Capo4-KeyG.pdf"
      },
      {
        "id": "XO1E8k",
        "singerNames": [
          "Supper Moment"
        ],
        "songName": "最後晚餐",
        "path": "最後晚餐-Supper Moment-Capo1-KeyG.pdf"
      },
      {
        "id": "iNRlhb",
        "singerNames": [
          "Supper Moment"
        ],
        "songName": "幸福之歌",
        "path": "幸福之歌-Supper Moment-Capo0-KeyCToCS.pdf"
      },
      {
        "id": "HXtH7F",
        "singerNames": [
          "Supper Moment"
        ],
        "songName": "小伙子",
        "path": "http://polygonguitar.blogspot.com/2012/04/supper-moment-chord_14.html"
      },
      {
        "id": "3Oqll7",
        "singerNames": [
          "Mr."
        ],
        "songName": "森林",
        "path": "http://polygonguitar.blogspot.com/2012/04/mr-chord.html"
      },
      {
        "id": "OwHFFS",
        "singerNames": [
          "Kolor"
        ],
        "songName": "候鳥",
        "path": "http://polygonguitar.blogspot.com/2013/05/kolor-chord.html"
      },
      {
        "id": "7QtE1Q",
        "singerNames": [
          "Kolor"
        ],
        "songName": "圍城",
        "path": "http://polygonguitar.blogspot.com/2012/04/kolor-chord_09.html"
      },
      {
        "id": "wnS24e",
        "singerNames": [
          "The Platters"
        ],
        "songName": "Only You",
        "path": "Only You-The Platters-Capo3-KeyC.pdf"
      },
      {
        "id": "d3G54W",
        "singerNames": [
          "廖碧兒"
        ],
        "songName": "夢",
        "path": "http://polygonguitar.blogspot.com/2013/03/tvb-achord.html"
      },
      {
        "id": "kKdzjc",
        "singerNames": [
          "Whiteberry"
        ],
        "songName": "夏祭り",
        "path": "http://gakufu.gakki.me/m/?p=DT08547&k=m1"
      },
      {
        "id": "ASYEWd",
        "singerNames": [
          "松本梨香"
        ],
        "songName": "めざせポケモンマスター",
        "path": "http://gakufu.gakki.me/m/data/RQ03857.html"
      },
      {
        "id": "yKrOWP",
        "singerNames": [
          "蘇打綠"
        ],
        "songName": "小情歌",
        "path": "小情歌-蘇打綠-Capo2-KeyC.pdf"
      },
      {
        "id": "cDH8Fg",
        "singerNames": [
          "植村花菜"
        ],
        "songName": "世界一ごはん",
        "path": "http://gakufu.gakki.me/m/?p=N00516&k=m3"
      },
      {
        "id": "UMAFu4",
        "singerNames": [
          "秦基博"
        ],
        "songName": "ひまわりの約束",
        "path": "http://gakufu.gakki.me/m/?p=N03251&k=m1"
      },
      {
        "id": "J97dS9",
        "singerNames": [
          "鍾嘉欣"
        ],
        "songName": "最幸福的事",
        "path": "最幸福的事-鍾嘉欣-Capo1-KeyD.pdf"
      },
      {
        "id": "HI8yqp",
        "singerNames": [
          "奥井亜紀"
        ],
        "songName": "勇気の鐘～晴れてハレルヤⅡ～",
        "path": "https://ja.chordwiki.org/wiki.cgi?c=view&t=勇気の鐘&key=-5&symbol="
      },
      {
        "id": "oDVqpl",
        "singerNames": [
          "Vanessa Williams"
        ],
        "songName": "Colors of the Wind",
        "path": "Colors of the Wind-Vanessa Williams-Capo1-KeyC.pdf"
      },
      {
        "id": "g8gbuD",
        "singerNames": [
          "ZONE"
        ],
        "songName": "secret base〜君がくれたもの〜",
        "path": "secret base〜君がくれたもの〜-ZONE-Capo1-KeyC.pdf"
      },
      {
        "id": "URWqnh",
        "singerNames": [
          "五月天"
        ],
        "songName": "T1213121",
        "path": "T1213121-五月天-Capo0-KeyC.pdf"
      },
      {
        "id": "qzJxiz",
        "singerNames": [
          "五月天"
        ],
        "songName": "終於結束的起點",
        "path": "終於結束的起點-五月天-Capo0-KeyC.pdf"
      },
      {
        "id": "Xtg7xG",
        "singerNames": [
          "五月天"
        ],
        "songName": "突然好想你",
        "path": "http://polygonguitar.blogspot.com/2012/01/chord-mv.html"
      },
      {
        "id": "ehAlvC",
        "singerNames": [
          "五月天"
        ],
        "songName": "傷心的人別聽慢歌",
        "path": "傷心的人別聽慢歌-五月天-Capo0-KeyAm.pdf"
      },
      {
        "id": "b8tWq1",
        "singerNames": [
          "五月天"
        ],
        "songName": "有些事現在不做一輩子都不會做了",
        "path": "有些事現在不做一輩子都不會做了-五月天-Capo2-KeyC.pdf"
      },
      {
        "id": "WhWxmr",
        "singerNames": [
          "五月天"
        ],
        "songName": "我不願讓你一個人",
        "path": "https://www.91pu.com.tw/song/2016/0705/3952.html"
      },
      {
        "id": "YS2k3U",
        "singerNames": [
          "五月天"
        ],
        "songName": "星空",
        "path": "星空-五月天-Capo5-KeyC.pdf"
      },
      {
        "id": "d8LSwy",
        "singerNames": [
          "MAHO堂"
        ],
        "songName": "おジャ魔女カーニバル!!",
        "path": "https://ja.chordwiki.org/wiki/おジャ魔女カーニバル!!+おジャ魔女どれみ"
      },
      {
        "id": "VdfDnX",
        "singerNames": [
          "ZARD"
        ],
        "songName": "心を開いて",
        "path": "http://gakufu.gakki.me/m/data/DT10777.html"
      },
      {
        "id": "Jv3M6S",
        "singerNames": [
          "梅艷芳"
        ],
        "songName": "夕陽之歌",
        "path": "http://polygonguitar.blogspot.com/2015/04/chord_84.html"
      },
      {
        "id": "K3rTjd",
        "singerNames": [
          "梅艷芳"
        ],
        "songName": "似水流年",
        "path": "https://www.polygon.guitars/score/1028/似水流年"
      },
      {
        "id": "dChe2e",
        "singerNames": [
          "梁靜茹"
        ],
        "songName": "暖暖",
        "path": "http://polygonguitar.blogspot.com/2012/12/chord_3767.html"
      },
      {
        "id": "0AGQQz",
        "singerNames": [
          "米津玄師"
        ],
        "songName": "Lemon",
        "path": "https://gakufu.gakki.me/m/?p=OCD2258&k=m4"
      },
      {
        "id": "Dq0q6E",
        "singerNames": [
          "米津玄師"
        ],
        "songName": "馬と鹿",
        "path": "https://gakufu.gakki.me/m/data/SP19627.html"
      },
      {
        "id": "0oO8ou",
        "singerNames": [
          "テレサ・テン"
        ],
        "songName": "時の流れに身をまかせ",
        "path": "https://gakufu.gakki.me/m/?p=DT2475&k=m5"
      },
      {
        "id": "ZBmqEW",
        "singerNames": [
          "近藤真彦"
        ],
        "songName": "夕焼けの歌",
        "path": "http://gakufu.gakki.me/m/?p=DT13485&k=m2"
      },
      {
        "id": "VmgDK3",
        "singerNames": [
          "任劍輝",
          "白雪仙"
        ],
        "songName": "帝女花之香夭",
        "path": "帝女花之香夭-任劍輝+白雪仙-Capo1-KeyEm.pdf"
      },
      {
        "id": "TeVx3S",
        "singerNames": [
          "宇多田ヒカル"
        ],
        "songName": "First Love",
        "path": "First Love-宇多田ヒカル-Capo0.pdf"
      },
      {
        "id": "MlJer7",
        "singerNames": [
          "岡崎律子"
        ],
        "songName": "いつでも微笑みを (Capo 0)",
        "path": "いつでも微笑みを-岡崎律子-Capo0-KeyD.pdf"
      },
      {
        "id": "3yTetm",
        "singerNames": [
          "岡崎律子"
        ],
        "songName": "いつでも微笑みを (Capo 2)",
        "path": "いつでも微笑みを-岡崎律子-Capo2-KeyC.pdf"
      },
      {
        "id": "DSewJL",
        "singerNames": [
          "岡崎律子"
        ],
        "songName": "I'm always close to you",
        "path": "I'm always close to you-岡崎律子-Capo0-KeyD.pdf"
      },
      {
        "id": "XdMy7t",
        "singerNames": [
          "方皓玟"
        ],
        "songName": "分手總約在雨天",
        "path": "分手總約在雨天-方皓玟-Capo2-KeyC.pdf"
      },
      {
        "id": "8wEkdb",
        "singerNames": [
          "李聖傑",
          "林隆璇"
        ],
        "songName": "你那麼愛她",
        "path": "你那麼愛她-李聖傑+林隆璇-Capo3-KeyG.pdf"
      },
      {
        "id": "uo436z",
        "singerNames": [
          "淺葉",
          "花音",
          "雪霏嵐嵐"
        ],
        "songName": "你贈給我的回憶",
        "path": "你贈給我的回憶-淺葉+花音+雪霏嵐嵐-Capo-1-KeyC.pdf"
      },
      {
        "id": "S1WNhU",
        "singerNames": [
          "葉文輝"
        ],
        "songName": "I Believe",
        "path": "I Believe-葉文輝-Capo0-KeyG.pdf"
      },
      {
        "id": "SeEEsK",
        "singerNames": [
          "Raidas"
        ],
        "songName": "傾心",
        "path": "http://polygonguitar.blogspot.com/2012/12/raidas-chord.html"
      },
      {
        "id": "ejLE71",
        "singerNames": [
          "Raidas"
        ],
        "songName": "傾心 (Capo 2)",
        "path": "傾心-Raidas-Capo2-KeyC.pdf"
      },
      {
        "id": "gAEpY7",
        "singerNames": [
          "葉蘊儀"
        ],
        "songName": "哪兒",
        "path": "哪兒-葉蘊儀-Capo1-KeyC.pdf"
      },
      {
        "id": "tyaA4B",
        "singerNames": [
          "葉蘊儀",
          "專家Dickson"
        ],
        "songName": "中女羅生門 (Capo 0)",
        "path": "中女羅生門-葉蘊儀+專家Dickson-Capo0-KeyF.pdf"
      },
      {
        "id": "HBulRO",
        "singerNames": [
          "葉蘊儀",
          "專家Dickson"
        ],
        "songName": "中女羅生門 (Capo 5)",
        "path": "中女羅生門-葉蘊儀+專家Dickson-Capo5-KeyC.pdf"
      },
      {
        "id": "SgLcv7",
        "singerNames": [
          "蔣嘉瑩"
        ],
        "songName": "假如真的再有約會",
        "path": "假如真的再有約會-蔣嘉瑩-Capo0-KeyG.pdf"
      },
      {
        "id": "5K3dtS",
        "singerNames": [
          "譚嘉儀"
        ],
        "songName": "印記",
        "path": "印記-譚嘉儀-Capo2-KeyC.pdf"
      },
      {
        "id": "9LBfx2",
        "singerNames": [
          "黃淑蔓",
          "英仁合唱團"
        ],
        "songName": "差一點我們會飛",
        "path": "差一點我們會飛-黃淑蔓&英仁合唱團-Capo3-KeyG.pdf"
      },
      {
        "id": "jPOl4B",
        "singerNames": [
          "やなぎなぎ"
        ],
        "songName": "恋文",
        "path": "恋文-やなぎなぎ-Capo1-KeyC.pdf"
      },
      {
        "id": "3b62Qi",
        "singerNames": [
          "許思行"
        ],
        "songName": "月亮下禱告",
        "path": "月亮下禱告-許思行-Capo0-KeyC.pdf"
      },
      {
        "id": "ue4vcu",
        "singerNames": [
          "黃菀之"
        ],
        "songName": "月亮說",
        "path": "月亮說-黃菀之-Capo0-KeyC.pdf"
      },
      {
        "id": "hwDp6R",
        "singerNames": [
          "Andrew Lloyd Webber"
        ],
        "songName": "All I Ask Of You",
        "path": "https://www.e-chords.com/chords/phantom-of-the-opera/all-i-ask-of-you"
      },
      {
        "id": "py5sb5",
        "singerNames": [
          "赤い鳥"
        ],
        "songName": "翼をください",
        "path": "https://ja.chordwiki.org/wiki/翼をください"
      },
      {
        "id": "xEmvAB",
        "singerNames": [
          "放課後ティータイム"
        ],
        "songName": "Don't say \"lazy\"",
        "path": "https://ja.chordwiki.org/wiki/Dont+Say+lazy"
      },
      {
        "id": "cFEQ9M",
        "singerNames": [
          "放課後ティータイム"
        ],
        "songName": "U&I",
        "path": "https://ja.chordwiki.org/wiki/U＆I"
      },
      {
        "id": "QFBmd0",
        "singerNames": [
          "放課後ティータイム"
        ],
        "songName": "翼をください",
        "path": "https://ja.chordwiki.org/wiki/翼をください+(桜高軽音部)"
      },
      {
        "id": "5eI9hZ",
        "singerNames": [
          "林明日香"
        ],
        "songName": "小さきもの",
        "path": "https://ja.chordwiki.org/wiki.cgi?c=view&t=小さきもの&key=-1&symbol="
      },
      {
        "id": "ApxIjV",
        "singerNames": [
          "本名陽子"
        ],
        "songName": "カントリーロード",
        "path": "https://ja.chordwiki.org/wiki/カントリーロード(簡易アレンジver)"
      },
      {
        "id": "cWxYA8",
        "singerNames": [
          "吳雨霏"
        ],
        "songName": "二十世紀少年",
        "path": "http://polygonguitar.blogspot.com/2012/04/chord_4784.html"
      },
      {
        "id": "iVxNXQ",
        "singerNames": [
          "陳奕迅"
        ],
        "songName": "月球上的人 (Simplified)",
        "path": "月球上的人-陳奕迅-Capo0-KeyE-simplified.pdf"
      },
      {
        "id": "szbIXC",
        "singerNames": [
          "陳奕迅"
        ],
        "songName": "月球上的人",
        "path": "月球上的人-陳奕迅-Capo0-KeyE.pdf"
      },
      {
        "id": "KG2SCV",
        "singerNames": [
          "陳奕迅"
        ],
        "songName": "陀飛輪",
        "path": "陀飛輪-陳奕迅-Capo0-KeyC.pdf"
      },
      {
        "id": "VuYBMD",
        "singerNames": [
          "陳奕迅"
        ],
        "songName": "傾城",
        "path": "http://polygonguitar.blogspot.com/2012/11/chord_1.html"
      },
      {
        "id": "TZfi3d",
        "singerNames": [
          "陳奕迅"
        ],
        "songName": "今天等我來",
        "path": "http://polygonguitar.blogspot.com/2013/01/chord_1150.html"
      },
      {
        "id": "L8j8m2",
        "singerNames": [
          "陳奕迅"
        ],
        "songName": "孤兒仔",
        "path": "http://polygonguitar.blogspot.com/2013/02/chord_11.html"
      },
      {
        "id": "g88SYL",
        "singerNames": [
          "陳奕迅"
        ],
        "songName": "一絲不掛",
        "path": "http://polygonguitar.blogspot.com/2012/12/chord_11.html"
      },
      {
        "id": "nsh6CB",
        "singerNames": [
          "陳奕迅"
        ],
        "songName": "想聽",
        "path": "https://blog.xuite.net/anthelion/blog/464216023-陳奕迅+-《想聽》Chord譜+和弦譜"
      },
      {
        "id": "oggFYs",
        "singerNames": [
          "平井堅"
        ],
        "songName": "Gaining Through Losing",
        "path": "http://gakufu.gakki.me/m/?p=DT01179&k=m4"
      },
      {
        "id": "QXTLRR",
        "singerNames": [
          "平井堅"
        ],
        "songName": "#302",
        "path": "https://gakufu.gakki.me/m/data/OCD3284.html"
      },
      {
        "id": "6JxTby",
        "singerNames": [
          "平井堅"
        ],
        "songName": "僕は君を恋をする",
        "path": "https://gakufu.gakki.me/m/index.php?p=DT12943&k=#rp"
      },
      {
        "id": "XtFlyk",
        "singerNames": [
          "二階堂和美"
        ],
        "songName": "いのちの記憶",
        "path": "http://gakufu.gakki.me/m/?p=OCD0930&k=m3"
      },
      {
        "id": "PRIIIj",
        "singerNames": [
          "王力宏"
        ],
        "songName": "Kiss goodbye",
        "path": "http://chords-haven.blogspot.com/2006/07/kiss-goodbye.html"
      },
      {
        "id": "QGDO4F",
        "singerNames": [
          "夏川りみ"
        ],
        "songName": "愛よ愛よ",
        "path": "http://gakufu.gakki.me/m/data/TM1634.html"
      },
      {
        "id": "aJR2Oh",
        "singerNames": [
          "夏川りみ"
        ],
        "songName": "木蘭の涙",
        "path": "https://gakufu.gakki.me/m/data/DT13313.html"
      },
      {
        "id": "Cfy7fv",
        "singerNames": [
          "夏川りみ"
        ],
        "songName": "島唄",
        "path": "https://gakufu.gakki.me/m/index2.php?p=DT12043&k=m1#rp"
      },
      {
        "id": "s3wXnB",
        "singerNames": [
          "鄭伊健"
        ],
        "songName": "自動勝利 Let's Fight",
        "path": "http://polygonguitar.blogspot.com/2012/06/lets-fight01-chord.html"
      },
      {
        "id": "9EaJfb",
        "singerNames": [
          "陳綺貞"
        ],
        "songName": "旅行的意義",
        "path": "https://www.91pu.com.tw/song/2015/1115/1563.html"
      },
      {
        "id": "uGHUYR",
        "singerNames": [
          "陳綺貞"
        ],
        "songName": "魚",
        "path": "https://www.91pu.com.tw/song/2015/0717/239.html"
      },
      {
        "id": "mBkzqb",
        "singerNames": [
          "Westlife"
        ],
        "songName": "My Love",
        "path": "https://en.guitarians.com/chord/3090/Westlife-My-Love"
      },
      {
        "id": "Mokhz7",
        "singerNames": [
          "李幸倪"
        ],
        "songName": "月球下的人",
        "path": "月球下的人-李幸倪-Capo0-KeyC.pdf"
      },
      {
        "id": "jAUkEl",
        "singerNames": [
          "林奕匡"
        ],
        "songName": "有人共嗚 (Capo 0)",
        "path": "有人共嗚-林奕匡-Capo0-KeyD.pdf"
      },
      {
        "id": "KNQNAq",
        "singerNames": [
          "林奕匡"
        ],
        "songName": "有人共嗚 (Capo 2)",
        "path": "有人共嗚-林奕匡-Capo2-KeyC.pdf"
      },
      {
        "id": "4oViZ6",
        "singerNames": [
          "林奕匡"
        ],
        "songName": "高山低谷",
        "path": "高山低谷-林奕匡-Capo0-KeyC.pdf"
      },
      {
        "id": "aUzgmg",
        "singerNames": [
          "林奕匡"
        ],
        "songName": "一雙手",
        "path": "http://polygonguitar.blogspot.com/2016/03/phil-lam-chord.html"
      },
      {
        "id": "8ESiSF",
        "singerNames": [
          "張韻涵"
        ],
        "songName": "隱形的翅膀",
        "path": "http://polygonguitar.blogspot.com/2016/03/chord_22.html"
      },
      {
        "id": "UxZzNn",
        "singerNames": [
          "コブクロ"
        ],
        "songName": "未来",
        "path": "未来-コブクロ-Capo3-KeyC.pdf"
      },
      {
        "id": "J318bD",
        "singerNames": [
          "コブクロ"
        ],
        "songName": "何故、旅をするのだろう",
        "path": "http://gakufu.gakki.me/m/?p=N06299&k=m4"
      },
      {
        "id": "f9wIbX",
        "singerNames": [
          "コブクロ"
        ],
        "songName": "蕾",
        "path": "http://gakufu.gakki.me/m/?p=DT14058&k=m2"
      },
      {
        "id": "ySLXIU",
        "singerNames": [
          "コブクロ"
        ],
        "songName": "ここにしか咲かない花",
        "path": "http://gakufu.gakki.me/m/?p=DT04893&k=m6"
      },
      {
        "id": "Va7jZT",
        "singerNames": [
          "コブクロ"
        ],
        "songName": "永遠にともに",
        "path": "https://gakufu.gakki.me/m/index.php?p=DT08264&k=m2#rp"
      },
      {
        "id": "NMvUJs",
        "singerNames": [
          "奥華子"
        ],
        "songName": "花火 -君に恋した夏の日-",
        "path": "http://gakufu.gakki.me/m/data/DT08649.html"
      },
      {
        "id": "SN7Fsh",
        "singerNames": [
          "吳國敬"
        ],
        "songName": "我説過要你快樂",
        "path": "https://zh-hk.guitarians.com/chord/4612/吳國敬-我説過要你快樂?targetCapo=5"
      },
      {
        "id": "YCWSoY",
        "singerNames": [
          "back number"
        ],
        "songName": "花束",
        "path": "http://gakufu.gakki.me/m/?p=RQ00059&k=m2"
      },
      {
        "id": "UshNi4",
        "singerNames": [
          "back number"
        ],
        "songName": "瞬き",
        "path": "http://gakufu.gakki.me/m/?p=OCD2043&k=m1"
      },
      {
        "id": "sIifzf",
        "singerNames": [
          "back number"
        ],
        "songName": "僕は君の事が好きだけど君は僕を別に好きじゃないみたい",
        "path": "https://gakufu.gakki.me/m/?p=N05361&k=m1"
      },
      {
        "id": "Nuskr2",
        "singerNames": [
          "back number"
        ],
        "songName": "ハッピーエンド ",
        "path": "https://gakufu.gakki.me/m/?p=N07132&k=m2"
      },
      {
        "id": "J5Enuk",
        "singerNames": [
          "back number"
        ],
        "songName": "高嶺の花子さん",
        "path": "https://gakufu.gakki.me/m/index.php?p=N02110&k=m2#rp"
      },
      {
        "id": "PjpvpU",
        "singerNames": [
          "back number"
        ],
        "songName": "思い出せなくなるその日まで",
        "path": "https://gakufu.gakki.me/m/index.php?p=N00685&k=#rp"
      },
      {
        "id": "AoopYg",
        "singerNames": [
          "WANDS"
        ],
        "songName": "世界が終るまでは",
        "path": "https://gakufu.gakki.me/m/data/DT11010.html"
      },
      {
        "id": "LZNYkP",
        "singerNames": [
          "miwa"
        ],
        "songName": "君と100回目の恋",
        "path": "君と100回目の恋-miwa-Capo3-KeyG.pdf"
      },
      {
        "id": "fYM5FI",
        "singerNames": [
          "miwa"
        ],
        "songName": "アイオクリ",
        "path": "https://www.ufret.jp/song.php?data=36167"
      },
      {
        "id": "GKry20",
        "singerNames": [
          "miwa"
        ],
        "songName": "片想い",
        "path": "https://gakufu.gakki.me/m/data/N00929.html"
      },
      {
        "id": "U9KBg5",
        "singerNames": [
          "miwa"
        ],
        "songName": "夜空。feat. ハジ→",
        "path": "https://gakufu.gakki.me/m/?p=N04791&k=m3"
      },
      {
        "id": "0FxdGC",
        "singerNames": [
          "X JAPAN"
        ],
        "songName": "Forever Love",
        "path": "https://gakufu.gakki.me/m/?p=DT01124&k=m3"
      },
      {
        "id": "4ABCJP",
        "singerNames": [
          "X JAPAN"
        ],
        "songName": "Endless Rain",
        "path": "https://zh-hk.guitarians.com/chord/9076/X-japan-Endless-rain"
      },
      {
        "id": "zOyYs6",
        "singerNames": [
          "犬山イヌコ"
        ],
        "songName": "ニャースのうた",
        "path": "https://gakufu.gakki.me/m/?p=TM3019&k=m2"
      },
      {
        "id": "Z7h6HW",
        "singerNames": [
          "半崎美子"
        ],
        "songName": "明日へ向かう人",
        "path": "http://gakufu.gakki.me/m/data/RQ06514.html"
      },
      {
        "id": "xJBBWt",
        "singerNames": [
          "RAM WIRE"
        ],
        "songName": "僕らの手には何もないけど、",
        "path": "http://gakufu.gakki.me/m/?p=N04311&k=m2"
      },
      {
        "id": "btTJ4W",
        "singerNames": [
          "葉德嫻"
        ],
        "songName": "千個太陽",
        "path": "https://zh-hk.guitarians.com/chord/3504/葉德嫻-千個太陽"
      },
      {
        "id": "6fmNRP",
        "singerNames": [
          "古巨基"
        ],
        "songName": "歡樂今宵",
        "path": "歡樂今宵-古巨基-Capo4-KeyC.pdf"
      },
      {
        "id": "Ll3Qfr",
        "singerNames": [
          "古巨基"
        ],
        "songName": "任天堂流淚",
        "path": "http://polygonguitar.blogspot.com/2012/02/chord_09.html"
      },
      {
        "id": "OqBUyk",
        "singerNames": [
          "胡夏"
        ],
        "songName": "那些年",
        "path": "http://polygonguitar.blogspot.com/2011/11/chords.html"
      },
      {
        "id": "vqMpxp",
        "singerNames": [
          "衛蘭"
        ],
        "songName": "心亂如麻",
        "path": "http://polygonguitar.blogspot.com/2012/07/chord_2800.html"
      },
      {
        "id": "6u18lu",
        "singerNames": [
          "劉若英"
        ],
        "songName": "後來",
        "path": "http://polygonguitar.blogspot.com/2012/07/blog-post_15.html"
      },
      {
        "id": "rtkpln",
        "singerNames": [
          "劉若英"
        ],
        "songName": "很愛很愛你",
        "path": "http://www.91pu.com.tw/song/2017/0529/6826.html"
      },
      {
        "id": "zn90TB",
        "singerNames": [
          "劉若英"
        ],
        "songName": "一輩子的孤單",
        "path": "http://www.91pu.com.tw/song/2017/0310/6136.html"
      },
      {
        "id": "1dnW4N",
        "singerNames": [
          "吳若希"
        ],
        "songName": "泣血薔薇",
        "path": "泣血薔薇-吳若希-Capo4-KeyEm.pdf"
      },
      {
        "id": "Y8VSqc",
        "singerNames": [
          "7!!"
        ],
        "songName": "オレンジ",
        "path": "https://gakufu.gakki.me/m/index.php?p=N03831&k=#rp"
      },
      {
        "id": "c1TiXa",
        "singerNames": [
          "荒木毬菜"
        ],
        "songName": "流星",
        "path": "流星-荒木毬菜-Capo5-KeyC.pdf"
      },
      {
        "id": "NlGxI0",
        "singerNames": [
          "F4"
        ],
        "songName": "流星雨",
        "path": "流星雨-F4-Capo4-KeyC.pdf"
      },
      {
        "id": "cDI5Cs",
        "singerNames": [
          "容祖兒"
        ],
        "songName": "痛愛",
        "path": "痛愛-容祖兒-Capo0-KeyG.pdf"
      },
      {
        "id": "MoG567",
        "singerNames": [
          "藤谷美和子"
        ],
        "songName": "私たちになりたくて",
        "path": "私たちになりたくて-藤谷美和子-Capo0-KeyC.pdf"
      },
      {
        "id": "k4sGNa",
        "singerNames": [
          "麥浚龍",
          "謝安琪"
        ],
        "songName": "羅生門 (Capo 0)",
        "path": "羅生門-麥浚龍+謝安琪-Capo0-KeyF.pdf"
      },
      {
        "id": "4YbDB4",
        "singerNames": [
          "麥浚龍",
          "謝安琪"
        ],
        "songName": "羅生門 (Capo 5)",
        "path": "羅生門-麥浚龍+謝安琪-Capo5-KeyC.pdf"
      },
      {
        "id": "ZFgicE",
        "singerNames": [
          "張惠妹"
        ],
        "songName": "聽海",
        "path": "聽海-張惠妹-Capo0-KeyC.pdf"
      },
      {
        "id": "bQWXoU",
        "singerNames": [
          "黃子華"
        ],
        "songName": "藍天",
        "path": "http://polygonguitar.blogspot.com/2012/05/chord_31.html"
      },
      {
        "id": "lPXVIE",
        "singerNames": [
          "川嶋あい"
        ],
        "songName": "525ページ",
        "path": "http://gakufu.gakki.me/m/?p=DT00204&k=m4"
      },
      {
        "id": "t5Tz1Z",
        "singerNames": [
          "川嶋あい"
        ],
        "songName": "旅立ちの日に・・・",
        "path": "https://gakufu.gakki.me/m/?p=KS0901&k=m2"
      },
      {
        "id": "KyBOhD",
        "singerNames": [
          "川嶋あい"
        ],
        "songName": "12個の季節～4度目の春～",
        "path": "https://gakufu.gakki.me/m/?p=DT00060&k=m2"
      },
      {
        "id": "NVDFmE",
        "singerNames": [
          "川嶋あい"
        ],
        "songName": "マーメイド",
        "path": "https://gakufu.gakki.me/m/?p=KS0895&k=m2"
      },
      {
        "id": "18orzz",
        "singerNames": [
          "川嶋あい"
        ],
        "songName": "『さよなら』『ありがとう』～たった一つの場所～",
        "path": "https://gakufu.gakki.me/m/?p=DT00020&k=m2"
      },
      {
        "id": "RjUbhY",
        "singerNames": [
          "川嶋あい"
        ],
        "songName": "Compass",
        "path": "https://gakufu.gakki.me/m/?p=KS0894&k=m1"
      },
      {
        "id": "upTzuA",
        "singerNames": [
          "川嶋あい"
        ],
        "songName": "大丈夫だよ",
        "path": "https://gakufu.gakki.me/m/data/KS0899.html"
      },
      {
        "id": "cYkr57",
        "singerNames": [
          "The Brothers Four"
        ],
        "songName": "Try to Remember",
        "path": "http://www.theguitarguy.com/trytorem.htm"
      },
      {
        "id": "kjE9n8",
        "singerNames": [
          "DAOKO×米津玄師"
        ],
        "songName": "打上花火",
        "path": "https://gakufu.gakki.me/m/?p=N08503&k=m4"
      },
      {
        "id": "B1EYeH",
        "singerNames": [
          "王馨平"
        ],
        "songName": "別問我是誰",
        "path": "http://polygonguitar.blogspot.com/2013/05/chord_3.html"
      },
      {
        "id": "lhrWlB",
        "singerNames": [
          "大塚愛"
        ],
        "songName": "プラネタリウム",
        "path": "http://gakufu.gakki.me/m/?p=DT06780&k=m5"
      },
      {
        "id": "XnpWzn",
        "singerNames": [
          "大塚愛"
        ],
        "songName": "さくらんぼ",
        "path": "http://gakufu.gakki.me/m/data/DT05065.html"
      },
      {
        "id": "2ZYOsD",
        "singerNames": [
          "大塚愛"
        ],
        "songName": "ポケット",
        "path": "http://gakufu.gakki.me/m/data/DT2339.html"
      },
      {
        "id": "V4K9Xf",
        "singerNames": [
          "譚詠麟"
        ],
        "songName": "誰可改變",
        "path": "誰可改變-譚詠麟-Capo0-KeyF.pdf"
      },
      {
        "id": "QKp5Xx",
        "singerNames": [
          "譚詠麟"
        ],
        "songName": "愛的替身",
        "path": "https://zh-hk.guitarians.com/chord/3285/譚詠麟--愛的替身?targetCapo=3"
      },
      {
        "id": "HnHeh6",
        "singerNames": [
          "葉蒨文"
        ],
        "songName": "傷逝",
        "path": "https://blog.xuite.net/anthelion/blog/230173434-葉蒨文+Sally+Yip+-+%3C%3C傷逝%3E%3E+Chord譜+和弦譜"
      },
      {
        "id": "rN4H16",
        "singerNames": [
          "SiS 樂印姊妹"
        ],
        "songName": "謝謝你",
        "path": "謝謝你-SiS 樂印姊妹-Capo0-KeyC.pdf"
      },
      {
        "id": "kE1U9y",
        "singerNames": [
          "SiS 樂印姊妹"
        ],
        "songName": "晚安歌",
        "path": "https://daydayguitar.blogspot.com/2014/09/ylzbZzejm9I.html"
      },
      {
        "id": "Exai2I",
        "singerNames": [
          "新垣結衣"
        ],
        "songName": "赤い糸",
        "path": "赤い糸-新垣結衣-Capo2-KeyC.pdf"
      },
      {
        "id": "J4UsLo",
        "singerNames": [
          "Twins"
        ],
        "songName": "跅跅步哈姆太郎",
        "path": "跅跅步哈姆太郎-Twins-Capo2-KeyC.pdf"
      },
      {
        "id": "JuGMk1",
        "singerNames": [
          "Twins"
        ],
        "songName": "下一站天后",
        "path": "http://polygonguitar.blogspot.com/2012/11/twins.html"
      },
      {
        "id": "G9ommf",
        "singerNames": [
          "王祖藍"
        ],
        "songName": "跌落凡間的天使 (Capo 0)",
        "path": "跌落凡間的天使-王祖藍-Capo0-KeyD.pdf"
      },
      {
        "id": "ob3Cqh",
        "singerNames": [
          "王祖藍"
        ],
        "songName": "跌落凡間的天使 (Capo 5)",
        "path": "跌落凡間的天使-王祖藍-Capo5-KeyA.pdf"
      },
      {
        "id": "S6FDPj",
        "singerNames": [
          "張學友"
        ],
        "songName": "遙遠的她",
        "path": "遙遠的她-張學友-Capo0-KeyC.pdf"
      },
      {
        "id": "YCJvMg",
        "singerNames": [
          "張預東"
        ],
        "songName": "十二隻恐龍",
        "path": "http://polygonguitar.blogspot.com/2012/10/chord_9.html"
      },
      {
        "id": "KFDMMN",
        "singerNames": [
          "陳百強"
        ],
        "songName": "一生何求",
        "path": "http://polygonguitar.blogspot.com/2012/10/chord_2430.html"
      },
      {
        "id": "M0hCID",
        "singerNames": [
          "タイナカサチ"
        ],
        "songName": "愛しい人へ",
        "path": "https://gakufu.gakki.me/m/?p=RQ04082&k=m1"
      },
      {
        "id": "zCgewg",
        "singerNames": [
          "桐谷健太"
        ],
        "songName": "海の声",
        "path": "https://gakufu.gakki.me/m/?p=N05013&k=m4"
      },
      {
        "id": "kMuf1T",
        "singerNames": [
          "doa"
        ],
        "songName": "英雄",
        "path": "https://gakufu.gakki.me/m/?p=KS1016&k=m1"
      },
      {
        "id": "tBsCiR",
        "singerNames": [
          "かりゆし58"
        ],
        "songName": "希望の唄",
        "path": "https://gakufu.gakki.me/m/?p=TM2383"
      },
      {
        "id": "8zdnBj",
        "singerNames": [
          "ToNick"
        ],
        "songName": "長相廝守",
        "path": "長相廝守-ToNick-Capo0-KeyF.pdf"
      },
      {
        "id": "3KyqjP",
        "singerNames": [
          "糖兄妹"
        ],
        "songName": "閃著淚光慢慢的決定 (Capo 0)",
        "path": "閃著淚光慢慢的決定-糖兄妹-Capo0-KeyFToGToA.pdf"
      },
      {
        "id": "MnxpKh",
        "singerNames": [
          "糖兄妹"
        ],
        "songName": "閃著淚光慢慢的決定 (Capo 5)",
        "path": "閃著淚光慢慢的決定-糖兄妹-Capo5-KeyCToDToE.pdf"
      },
      {
        "id": "p5dJrQ",
        "singerNames": [
          "張敬軒"
        ],
        "songName": "青春常駐",
        "path": "青春常駐-張敬軒-Capo6-KeyC.pdf"
      },
      {
        "id": "V2Wi3y",
        "singerNames": [
          "滕麗明"
        ],
        "songName": "魔法咕嚕咕嚕",
        "path": "魔法咕嚕咕嚕-滕麗明-Capo2-KeyC.pdf"
      },
      {
        "id": "It14oP",
        "singerNames": [
          "滕麗明"
        ],
        "songName": "齊來動腦筋 (Capo 0)",
        "path": "齊來動腦筋-滕麗名-Capo0-KeyC.pdf"
      },
      {
        "id": "Fa7CJS",
        "singerNames": [
          "滕麗明"
        ],
        "songName": "齊來動腦筋 (Capo 3)",
        "path": "齊來動腦筋-滕麗名-Capo3-KeyG.pdf"
      },
      {
        "id": "u7PafA",
        "singerNames": [
          "連詩雅"
        ],
        "songName": "到此為止",
        "path": "http://polygonguitar.blogspot.com/2012/04/chord_5438.html"
      },
      {
        "id": "H43bgy",
        "singerNames": [
          "連詩雅"
        ],
        "songName": "舊街角",
        "path": "舊街角-連詩雅-Capo1-KeyD.pdf"
      },
      {
        "id": "8hTIGy",
        "singerNames": [
          "何韻詩"
        ],
        "songName": "木紋",
        "path": "http://polygonguitar.blogspot.com/2012/03/chord_8836.html"
      },
      {
        "id": "C1jYW8",
        "singerNames": [
          "何韻詩"
        ],
        "songName": "化蝶",
        "path": "http://polygonguitar.blogspot.com/2013/01/chord_641.html"
      },
      {
        "id": "3y1wMY",
        "singerNames": [
          "田馥甄"
        ],
        "songName": "小幸運",
        "path": "http://polygonguitar.blogspot.com/2015/09/chord_41.html"
      },
      {
        "id": "gJMGUO",
        "singerNames": [
          "楊千嬅"
        ],
        "songName": "煉金術",
        "path": "http://polygonguitar.blogspot.com/2012/10/chord_25.html"
      },
      {
        "id": "jW9dJT",
        "singerNames": [
          "楊千嬅"
        ],
        "songName": "可惜我是水瓶座",
        "path": "http://polygonguitar.blogspot.com/2012/12/chord_6439.html"
      },
      {
        "id": "GrF02J",
        "singerNames": [
          "楊千嬅"
        ],
        "songName": "野孩子",
        "path": "http://polygonguitar.blogspot.com/2012/03/chord_9017.html"
      },
      {
        "id": "P1LS5L",
        "singerNames": [
          "鄭秀文"
        ],
        "songName": "不要驚動愛情",
        "path": "http://polygonguitar.blogspot.com/2012/09/chord_4.html"
      },
      {
        "id": "MIt3m6",
        "singerNames": [
          "鄭秀文"
        ],
        "songName": "我們都是這樣長大的",
        "path": "我們都是這樣長大的-鄭秀文-Capo5-KeyC.pdf"
      },
      {
        "id": "lMBDHX",
        "singerNames": [
          "陳慧嫻"
        ],
        "songName": "千千闕歌",
        "path": "http://polygonguitar.blogspot.com/2012/10/chord_26.html"
      },
      {
        "id": "oOa2sn",
        "singerNames": [
          "梁漢文"
        ],
        "songName": "七友",
        "path": "http://polygonguitar.blogspot.com/2013/11/chord_24.html"
      },
      {
        "id": "ji1OmO",
        "singerNames": [
          "梁漢文"
        ],
        "songName": "艦隊",
        "path": "http://polygonguitar.blogspot.com/2012/12/chord_6380.html"
      },
      {
        "id": "10c4Jy",
        "singerNames": [
          "任賢齊"
        ],
        "songName": "浪花一朵朵",
        "path": "http://polygonguitar.blogspot.com/2012/06/chord_14.html"
      },
      {
        "id": "LtxFKt",
        "singerNames": [
          "張國榮"
        ],
        "songName": "追",
        "path": "http://polygonguitar.blogspot.com/2012/06/chord_2668.html"
      },
      {
        "id": "ILimga",
        "singerNames": [
          "張國榮"
        ],
        "songName": "有心人",
        "path": "http://polygonguitar.blogspot.com/2012/12/chord_6253.html"
      },
      {
        "id": "1Nss4C",
        "singerNames": [
          "モンゴル800"
        ],
        "songName": "小さな恋のうた",
        "path": "https://ja.chordwiki.org/wiki.cgi?c=view&t=小さな恋の歌&key=-4&symbol="
      },
      {
        "id": "HR4x4R",
        "singerNames": [
          "RADWIMPS"
        ],
        "songName": "なんでもないや",
        "path": "http://gakufu.gakki.me/m/?p=KS0058&k=m4"
      },
      {
        "id": "SoX8IH",
        "singerNames": [
          "RADWIMPS"
        ],
        "songName": "前前前世",
        "path": "http://gakufu.gakki.me/m/?p=N06772&k=m2"
      },
      {
        "id": "nkKQF0",
        "singerNames": [
          "GReeeeN"
        ],
        "songName": "キセキ",
        "path": "https://gakufu.gakki.me/m/?p=M00016"
      },
      {
        "id": "4BI7Hk",
        "singerNames": [
          "GReeeeN"
        ],
        "songName": "愛唄",
        "path": "http://gakufu.gakki.me/m/?p=M00149&k=m1"
      },
      {
        "id": "fKSQD4",
        "singerNames": [
          "GReeeeN"
        ],
        "songName": "始まりの唄",
        "path": "https://gakufu.gakki.me/m/index.php?p=N05936&k=m2#rp"
      },
      {
        "id": "y43B1s",
        "singerNames": [
          "Unknown"
        ],
        "songName": "陀飛輪 (考試版)",
        "path": "陀飛輪(考試版)-Capo0-KeyC.pdf"
      },
      {
        "id": "82lPMu",
        "singerNames": [
          "Unknown"
        ],
        "songName": "流星雨 (泰文版)",
        "path": "流星雨(泰文版)-Capo3-KeyC.pdf"
      },
      {
        "id": "jKSgMD",
        "singerNames": [
          "MISIA"
        ],
        "songName": "逢いたくていま",
        "path": "https://gakufu.gakki.me/m/index2.php?p=RQ00744&k=m6#rp"
      },
      {
        "id": "oYo6KP",
        "singerNames": [
          "K"
        ],
        "songName": "Only Human",
        "path": "https://gakufu.gakki.me/m/?p=DT02419&k=m4"
      },
      {
        "id": "mTOrF6",
        "singerNames": [
          "Elton John"
        ],
        "songName": "Can You Feel The Love Tonight",
        "path": "Can You Feel The Love Tonight-Elton John-Capo3-KeyC.pdf"
      },
      {
        "id": "pY5gFl",
        "singerNames": [
          "陳妍希"
        ],
        "songName": "孩子氣",
        "path": "http://chord4.com/tabs/11729"
      },
      {
        "id": "19bjoO",
        "singerNames": [
          "陳柏宇"
        ],
        "songName": "斷絕來往",
        "path": "https://zh-hk.guitarians.com/chord/2123/陳柏宇-斷絕來往"
      },
      {
        "id": "wKrS2j",
        "singerNames": [
          "山口百恵"
        ],
        "songName": "さよならの向こう側",
        "path": "https://gakufu.gakki.me/m/?p=DT05152"
      },
      {
        "id": "oIq18Z",
        "singerNames": [
          "張學友",
          "梅艷芳"
        ],
        "songName": "相愛很難",
        "path": "https://zh-hk.guitarians.com/chord/2340/張學友-相愛很難"
      },
      {
        "id": "ogazlo",
        "singerNames": [
          "杉山加奈"
        ],
        "songName": "ありのままに",
        "path": "https://ja.chordwiki.org/wiki.cgi?c=view&t=ありのままに&key=-3&symbol="
      },
      {
        "id": "mk2jkS",
        "singerNames": [
          "IU"
        ],
        "songName": "長夜",
        "path": "http://daydayguitar.blogspot.com/2017/11/L9wtKDrhqYI.html"
      },
      {
        "id": "6BS5rt",
        "singerNames": [
          "手嶌葵"
        ],
        "songName": "明日への手紙",
        "path": "https://www.ufret.jp/song.php?data=29042"
      },
      {
        "id": "r1Xoki",
        "singerNames": [
          "黃明志",
          "二宮芽生"
        ],
        "songName": "Makudonarudo",
        "path": "http://www.91pu.com.tw/song/2018/0104/8639.html"
      },
      {
        "id": "RyaAYK",
        "singerNames": [
          "黃明志",
          "李佳薇"
        ],
        "songName": "一起飆高音",
        "path": "https://daydayguitar.blogspot.com/2018/01/YJN6zIRYWD4.html"
      },
      {
        "id": "N5XBPb",
        "singerNames": [
          "蘇永康"
        ],
        "songName": "不想獨自快樂",
        "path": "https://zh-hk.guitarians.com/chord/3007/蘇永康-不想獨自快樂?targetCapo=3"
      },
      {
        "id": "ALrwGG",
        "singerNames": [
          "符家浚"
        ],
        "songName": "自動棄權",
        "path": "自動棄權-放手版-符家浚-Capo3-KeyG.pdf"
      },
      {
        "id": "duDhg6",
        "singerNames": [
          "那英"
        ],
        "songName": "夢一場",
        "path": "https://www.polygon.guitars/score/2808/夢一場"
      },
      {
        "id": "AKEgSJ",
        "singerNames": [
          "小泉今日子"
        ],
        "songName": "潮騒のメモリー",
        "path": "https://gakufu.gakki.me/m/?p=JTRQ0002&k=m3"
      },
      {
        "id": "4WUIS3",
        "singerNames": [
          "Sarah Brightman+Paul Stanley"
        ],
        "songName": "I Will Be With You",
        "path": "https://www.cifraclub.com.br/sarah-brightman/i-will-be-with-you/"
      },
      {
        "id": "ynDMWX",
        "singerNames": [
          "Simon & Garfunkel"
        ],
        "songName": "The Sound Of Silence",
        "path": "The Sound of Silence-Simon & Garfunkel-Capo6-KeyAm.pdf"
      },
      {
        "id": "Mg6nA0",
        "singerNames": [
          "達明一派"
        ],
        "songName": "十個救火的少年",
        "path": "https://chord4.com/tabs/22054"
      },
      {
        "id": "e4OkOS",
        "singerNames": [
          "達明一派"
        ],
        "songName": "每日一禁果",
        "path": "https://chord4.com/tabs/4999"
      },
      {
        "id": "t1U5xU",
        "singerNames": [
          "HANA 菊梓喬"
        ],
        "songName": "沒有你開始",
        "path": "浩賢/沒有你開始-菊梓喬-Capo5-KeyAm.pdf"
      },
      {
        "id": "LVXzpb",
        "singerNames": [
          "陳展鵬",
          "蕭正楠"
        ],
        "songName": "巨輪",
        "path": "巨輪-陳展鵬+蕭正楠-Capo3-KeyC.pdf"
      },
      {
        "id": "yZZuTg",
        "singerNames": [
          "スキマスイッチ"
        ],
        "songName": "奏 (かなで)",
        "path": "https://gakufu.gakki.me/m/?p=DT11475&k=m3"
      },
      {
        "id": "d3qIED",
        "singerNames": [
          "レミオロメン"
        ],
        "songName": "粉雪",
        "path": "https://gakufu.gakki.me/m/?p=DT12741"
      },
      {
        "id": "qi0ZbH",
        "singerNames": [
          "Ed Sheeran"
        ],
        "songName": "Photograph",
        "path": "Photograph-Ed Sheeran-Capo2-KeyD.pdf"
      },
      {
        "id": "erAdEB",
        "singerNames": [
          "馬良"
        ],
        "songName": "醒著醉",
        "path": "醒著醉-馬良-Capo5-KeyC.pdf"
      },
      {
        "id": "kUYJlt",
        "singerNames": [
          "品冠"
        ],
        "songName": "我以為",
        "path": "https://zh-hk.guitarians.com/chord/1126/品冠-我以為"
      },
      {
        "id": "t0jFTs",
        "singerNames": [
          "JoeyThye x EdwinHo"
        ],
        "songName": "我與我的最愛同屋七年好好戀愛 十分愛但願好心好報 (Capo 3)",
        "path": "我與我的最愛同屋七年好好戀愛 十分愛但願好心好報-JoeyThye x EdwinHo-Capo3-KeyE.pdf"
      },
      {
        "id": "r364gW",
        "singerNames": [
          "JoeyThye x EdwinHo"
        ],
        "songName": "我與我的最愛同屋七年好好戀愛 十分愛但願好心好報 (Capo 0)",
        "path": "我與我的最愛同屋七年好好戀愛 十分愛但願好心好報-JoeyThye x EdwinHo-Capo0-KeyG.pdf"
      },
      {
        "id": "lQhj3J",
        "singerNames": [
          "盧冠廷"
        ],
        "songName": "陪著你走",
        "path": "http://polygonguitar.blogspot.com/2016/02/chord_95.html"
      },
      {
        "id": "RFLMFx",
        "singerNames": [
          "新青年理髮廳"
        ],
        "songName": "如果一生只有三十歲",
        "path": "https://www.polygon.guitars/score/1627/如果一生只有三十歲"
      },
      {
        "id": "zh20J6",
        "singerNames": [
          "周興哲"
        ],
        "songName": "你好不好",
        "path": "https://www.polygon.guitars/score/1670/你好不好%20%28遺憾拼圖片尾曲%29"
      },
      {
        "id": "4alPl1",
        "singerNames": [
          "周杰倫"
        ],
        "songName": "說好不哭",
        "path": "https://www.polygon.guitars/score/4414/說好不哭"
      },
      {
        "id": "gf6a3P",
        "singerNames": [
          "周杰倫"
        ],
        "songName": "蒲公英的約定",
        "path": "https://www.polygon.guitars/score/297/蒲公英的約定"
      },
      {
        "id": "0lXHde",
        "singerNames": [
          "周杰倫"
        ],
        "songName": "晴天",
        "path": "晴天-周杰倫-Capo0-KeyG.pdf"
      },
      {
        "id": "xQT9g1",
        "singerNames": [
          "周杰倫"
        ],
        "songName": "不能說的秘密",
        "path": "不能說的秘密-周杰倫-Capo0-KeyG.pdf"
      },
      {
        "id": "63knrW",
        "singerNames": [
          "林欣彤"
        ],
        "songName": "忍",
        "path": "https://zh-hk.guitarians.com/chord/24967/林欣彤-忍?targetCapo=6"
      },
      {
        "id": "p1Genu",
        "singerNames": [
          "傅珮嘉"
        ],
        "songName": "絕",
        "path": "http://polygonguitar.blogspot.com/2012/03/chord_9129.html?m=1"
      },
      {
        "id": "CoTo3p",
        "singerNames": [
          "Idina Menzel",
          "Kristen Bell",
          "Josh Gad",
          "Jonathan Groff"
        ],
        "songName": "Some Things Never Change",
        "path": "Some Things Never Change-Josh Gad+Kristen Bell+Idina Menzel+Jonathan Groff-Capo5-KeyC.pdf"
      },
      {
        "id": "XXFncj",
        "singerNames": [
          "Idina Menzel"
        ],
        "songName": "Into The Unknown",
        "path": "Into The Unknown-Idina Menzel-Capo1-KeyD#m.pdf"
      },
      {
        "id": "kcyWhZ",
        "singerNames": [
          "Idina Menzel"
        ],
        "songName": "Let It Go",
        "path": "Let It Go-Idina Menzel-Capo1-KeyG.pdf"
      },
      {
        "id": "TIYOT9",
        "singerNames": [
          "陳雪燃"
        ],
        "songName": "無名之輩",
        "path": "無名之輩-陳雪燃-Capo1-KeyC.pdf"
      },
      {
        "id": "DdEaL0",
        "singerNames": [
          "JULEPS"
        ],
        "songName": "旅立つ日～完全版",
        "path": "https://gakufu.gakki.me/m/data/DT2622.html"
      },
      {
        "id": "Z5Vln6",
        "singerNames": [
          "許志安",
          "陳慧珊"
        ],
        "songName": "苦口良藥",
        "path": "苦口良藥-許志安+陳慧珊-Capo0-KeyG.pdf"
      },
      {
        "id": "P6ZkCf",
        "singerNames": [
          "milktub"
        ],
        "songName": "有頂天人生",
        "path": "https://ja.chordwiki.org/wiki.cgi?c=view&t=有頂天人生&key=-4&symbol="
      },
      {
        "id": "o0wYMC",
        "singerNames": [
          "milktub"
        ],
        "songName": "成るがまま騒ぐまま",
        "path": "https://ja.chordwiki.org/wiki.cgi?c=view&t=成るがまま騒ぐまま&key=-4&symbol="
      },
      {
        "id": "jh73eq",
        "singerNames": [
          "あいみょん"
        ],
        "songName": "裸の心",
        "path": "https://gakufu.gakki.me/m/data/N13240.html"
      },
      {
        "id": "I60Kpl",
        "singerNames": [
          "あいみょん"
        ],
        "songName": "マリーゴルド",
        "path": "https://gakufu.gakki.me/m/index.php?p=RQ09009&k=m2#rp"
      },
      {
        "id": "zgvlQi",
        "singerNames": [
          "宋冬野"
        ],
        "songName": "董小姐",
        "path": "董小姐-宋冬野-Capo4-KeyC.pdf"
      },
      {
        "id": "Hp38p0",
        "singerNames": [
          "Nacho Martin"
        ],
        "songName": "Raiders",
        "path": "Raiders-Nacho Martin-Capo1-KeyC.pdf"
      },
      {
        "id": "K5TLby",
        "singerNames": [
          "黃貫中"
        ],
        "songName": "天與地",
        "path": "天與地-黃貫中-Capo0-KeyBm.pdf"
      },
      {
        "id": "9Rp2Av",
        "singerNames": [
          "Lukas Graham"
        ],
        "songName": "7 Years",
        "path": "7 Years-Lukas Graham-Capo3-KeyGm.pdf"
      },
      {
        "id": "dtYbnJ",
        "singerNames": [
          "Boy'z"
        ],
        "songName": "死性不改",
        "path": "死性不改-Boy'z-Capo2-KeyC.pdf"
      },
      {
        "id": "tHGFJO",
        "singerNames": [
          "劉祖德",
          "朴妍臻",
          "香港童聲合唱團"
        ],
        "songName": "你的扣肉",
        "path": "你的扣肉-劉祖德+朴妍臻+香港童聲合唱團-Capo5-KeyC"
      },
      {
        "id": "ICeH6R",
        "singerNames": [
          "菅田将暉"
        ],
        "songName": "さよならエレジー",
        "path": "https://gakufu.gakki.me/m/index.php?p=N09393&k=m1#rp"
      },
      {
        "id": "vIFzYb",
        "singerNames": [
          "桑田佳祐"
        ],
        "songName": "明日晴れるかな",
        "path": "https://gakufu.gakki.me/m/index.php?p=DT13283&k=m5#rp"
      },
      {
        "id": "XQ08o0",
        "singerNames": [
          "中島みゆき"
        ],
        "songName": "糸",
        "path": "https://www.ufret.jp/song.php?data=23650"
      },
      {
        "id": "xQ7Dtw",
        "singerNames": [
          "井上陽水"
        ],
        "songName": "少年時代",
        "path": "https://gakufu.gakki.me/m/index2.php?p=DT10646&k=m2#rp"
      },
      {
        "id": "ZsELH0",
        "singerNames": [
          "LiSA"
        ],
        "songName": "炎",
        "path": "炎-LiS-Capo2-KeyAm.pdf"
      },
      {
        "id": "lEJiGJ",
        "singerNames": [
          "張衛健"
        ],
        "songName": "你愛我像誰",
        "path": "https://www.91pu.com.tw/song/2016/0516/3454.html"
      },
      {
        "id": "bIIDwI",
        "singerNames": [
          "張衛健"
        ],
        "songName": "身體健康",
        "path": "https://zh-hk.guitarians.com/chord/2800/張衛健--身體健康?targetCapo=2"
      },
      {
        "id": "fvhRcg",
        "singerNames": [
          "姜濤"
        ],
        "songName": "蒙著嘴說愛你",
        "path": "蒙著嘴說愛你-姜濤-Capo1-KeyCToD.pdf"
      },
      {
        "id": "bR6rmJ",
        "singerNames": [
          "姜濤"
        ],
        "songName": "亞特蘭提斯",
        "path": "亞特蘭提斯-姜濤-Capo4-KeyC.pdf"
      },
      {
        "id": "BUxS9U",
        "singerNames": [
          "路家敏"
        ],
        "songName": "小時候",
        "path": "小時候-路家敏-Capo0-KeyC.pdf"
      },
      {
        "id": "1GvLnw",
        "singerNames": [
          "serrini"
        ],
        "songName": "蘇菲亞的波霸珍珠奶茶",
        "path": "蘇菲亞的波霸珍珠奶茶-serrini-Capo0-KeyC.pdf"
      },
      {
        "id": "Dh8geD",
        "singerNames": [
          "白珍寶"
        ],
        "songName": "冰心鎖",
        "path": "冰心鎖-白珍寶-Capo1-KeyG.pdf"
      },
      {
        "id": "b186pk",
        "singerNames": [
          "韋禮安"
        ],
        "songName": "赤い糸",
        "path": "赤い糸-韋禮安-Capo3-KeyC.pdf"
      },
      {
        "id": "WMeuvd",
        "singerNames": [
          "韋禮安"
        ],
        "songName": "如果可以 (Capo 3)",
        "path": "如果可以-韋禮安-Capo3-KeyC.pdf"
      },
      {
        "id": "EIU3jd",
        "singerNames": [
          "韋禮安"
        ],
        "songName": "如果可以 (Capo 8)",
        "path": "如果可以-韋禮安-Capo8-KeyG.pdf"
      },
      {
        "id": "a7fVEh",
        "singerNames": [
          "GUMI"
        ],
        "songName": "さよならのかわりに",
        "path": "さよならのかわりに-GUMI-Capo2-KeyCToD.pdf"
      },
      {
        "id": "dvK1e3",
        "singerNames": [
          "宮脇詩音"
        ],
        "songName": "また君に会える日",
        "path": "https://gakufu.gakki.me/m/index.php?p=RQ06294&k=#rp"
      },
      {
        "id": "b9d0u5",
        "singerNames": [
          "宮脇詩音"
        ],
        "songName": "月光",
        "path": "https://gakufu.gakki.me/m/index.php?p=RQ07564&k=m5#rp"
      },
      {
        "id": "v0TvG6",
        "singerNames": [
          "暗殺教室3年E組"
        ],
        "songName": "旅立ちのうた",
        "path": "https://www.91pu.com.tw/song/2016/0929/4746.html"
      },
      {
        "id": "TbyPOx",
        "singerNames": [
          "YOASOBI"
        ],
        "songName": "夜に駆ける",
        "path": "https://gakufu.gakki.me/m/index.php?p=N13307&k=m3#rp"
      },
      {
        "id": "DlUkG0",
        "singerNames": [
          "中川あゆみ"
        ],
        "songName": "事実〜12歳で私が決めたコト〜",
        "path": "https://www.ufret.jp/song.php?data=21021"
      },
      {
        "id": "yZnBuS",
        "singerNames": [
          "wacci"
        ],
        "songName": "あのこ",
        "path": "https://www.ufret.jp/song.php?data=114727"
      },
      {
        "id": "EzBwOA",
        "singerNames": [
          "wacci"
        ],
        "songName": "恋だろ",
        "path": "https://gakufu.gakki.me/m/index.php?p=N15850&k=m4#rp"
      },
      {
        "id": "UT9j9e",
        "singerNames": [
          "wacci"
        ],
        "songName": "別の人の彼女になったよ",
        "path": "https://gakufu.gakki.me/m/index.php?p=N10797&k=m2#rp"
      }
    ];

    const collectionRef = firestore.collection('chords');
    let promises = [];
    for (let i=0, count=chordsData.length; i<count; i++) {
      console.log('Processing ' + i);
      const chordData = chordsData[i];
      promises.push(collectionRef.doc().set({
        singerNames: chordData.singerNames,
        songName: chordData.songName,
        path: chordData.path,
      }));
      if (promises.length >= 10) {
        await Promise.all(promises);
        promises = [];
      }
    }
    await Promise.all(promises);
    promises = [];
  }

  static async findAll(): Promise<ChordType[]> {
    const chordsSnapshot = await firestore.collection('chords').get();
    const chords: ChordType[] = chordsSnapshot.docs.map((doc) => {
      const chord = doc.data();
      return {
        id: doc.id,
        singerNames: chord.singerNames,
        songName: chord.songName,
        path: chord.path, // TODO: if not start with http, then prefix it with cloud storage bucket's prefix (eg. /bucket/chords/{chord.path})
      };
    });
    return chords;
  }
  
  static async update(id: string, data: ChordType): Promise<ChordType | null> {
    const chordDoc = firestore.collection('chords').doc(id);
    const exists = (await chordDoc.get()).exists;
    if (!exists) { return null; }

    await chordDoc.update(data);

    return data;
  }
}

export default Chord;
