///////////////////////////////////
///// TEXT STRINGS ////////////////
///////////////////////////////////

var textStrings_EN = {
    // Act 1
    "niceHat"              : "ООО, КРУТАЯ ШЛЯПА!"                              ,
    "outtaHere"            : "да вали отсюда"                                  ,
    "getARoom"             : "ЖУТЬ, УЕДИНИЛИСЬ БЫ!"                            ,
    "notCoolAnymore"       : "забей, шляпы — это уже не круто"                 ,
    "tvOnTv"               : "телик… ПО ТЕЛИКУ!"                               ,
    "cricky"               : "МАЛЕНЬКИЙ СВЕРЧОК <3"                            ,
    "tooManyCrickets"      : "Лааадно, тут дофига сверчков!"                ,
    "normalPeep"           : "Просто чувак"                                    ,
    "normalPeeps"          : "Просто людишки"                                  ,
    "wowNothing"           : "УРЯЯЯ, НИЧЕГО НЕТ"                               ,
    
    // Act 2
    "crazySquareAttacks"   : "ДВИНУТЫЙ КВАДРАТ АТАКУЭ"                      ,
    "justMissed"           : "УПС, не успел!"                                 ,
    "somethingInteresting" : "(поймай, их за *интересным* занятием…)" ,
    "whoIsScreaming"       : "(поймай, *кто* кричит на них)"          ,
    "circleFearsSquares"   : "КРУЖОЧЕК БОИТСЯ КВАДРАТОВ"                                  ,
    "whoScaresThem"        : "(поймай, *кого* они испугались)"         ,
    "areTheyScared"        : "(поймай, как они пугаются квадрата) "       , // not used
    "squaresSnubCircles"   : "КВАДРАТЫ УНИЖАЮТ КРУЖОЧКОВ"                                  ,
    "areTheySnubbed"       : "(тебе нужно поймать, как квадраты унижают кружочки)"        , // not used
    "everyoneHates"        : "ВСЕ НЕНАВИДЯТ ДРУГ ДРУГА!!1!"                           ,
    "almostEveryoneHates"  : "ПОЧТИ ВСЕ НЕНАВИДЯТ ДРУГ ДРУГА..."                     ,
    "squaresHateCircles"   : "КВАДРАТЫ НЕНАВИДЯТ КРУЖОЧКОВ"                                  ,
    "circlesHateSquares"   : "КРУЖОЧКИ НЕНАВИДЯТ КВАДРАТОВ"                                  ,
    "areTheyYelling"       : "(ты должен поймать, как они кричат на остальных)"              , // not used
    "nerdsNow"             : "что эти ботаны тут делают..."                        ,
    "schockedPeep"         : "почему чувак в шоке?"                              ,
    "whatever"             : "пофигу"                                              ,
    
    // Act 3
    "ellipsis"             : ". . ."                                                 ,
    "coolNoMore"           : "Шляпы — это не круто, ты еще не слышал?"           ,
    "beScared"             : "БУДЬ НАПУГАННЫМ. БУДЬ ЗЛЫМ."                                  ,
    
    // MANIFESTO
    "manifesto" : [
       //"как будто зрители хотят ХОРОШИХ новостей"       ,
       "кто включает телик, чтобы посмотреть на мирных людей???",
       "мир — скука. насилие — в массы."    ,
       //"мир — скука. конфликты получают лайки." ,
       "в каждой истории должен быть конфликт, так что..."  ,
       //"...ДАЙ ПУБЛИКЕ ТО, ЧТО ОНА ХОЧЕТ."   ,
       "ДАЙ ПУБЛИКЕ КОНФЛИКТ!"
    ] ,
    
    // -- Strings currently in graphics resources --
    
    // (bg_preload.png) Preload screen
    "playingTime"        : "время игры: 5 минут" ,
    "warning"            : "Сцены агрессии, грубости и массовых убийств. Мы вас предупредили" ,
    
    // (cam-instructions.png) Camera Instructions
    "pointAndClick"      : "НАПРАВЬ И КЛИКНИ" ,
    
    // (chyron3.png)
    "chyronNothing"      : "УРЯ, ЭТО *НИЧЕГО*" ,
    
    // (credits0001.png)
    "createdBy"          : "сделано руками" ,
    "NickyCase"          : "Ники Кейс" ,
    
    // (credits0002.png)
    "manyThanks"         : "благодарю тех, кто тестировал игру:" ,
    
    // (credits000[3,4,5,6].png)
    "patreonSupporters"  : "и тех, кто меня поддержал:" ,
    
    // (credits0007.png)
    "lastButNotLeast"    : "и наконец," ,
    
    // (credits0008.png)
    "thankYouForPlaying" : "спасибо ВАМ, что играли!" ,
    
    // (preload_play.png)
    "playButton"         : "ИГРАТЬ" ,
    
    // (end_button.png) Post Credits
    "otherWorkButton"    : "посмотреть мои другие работы" ,
    "buyCoffeeButton"    : "угостить меня кофе" ,
    "replayButton"       : "сыграть еще раз в эту жесть" ,
    
    // (logo.png) Post Credits
    "logoWBWWB"          : "ПОДЕЛИСЬ БОЛЬЮ:" ,
    
    // (end_prototype.png)
    "endOfPrototype"     : "КОНЕЦ" ,
    "toBeContinued"      : "(следите за обновлениями!)" ,
    
    // (quote0002.png)
    "WBWWB"              : "Мы становимся тем,\n что видим" ,
    "WSOTATOTSU"         : "\n\n\nМы формируем инструменты,\n которые в дальнейшем формируют нас." ,
    
    // (quote0003.png)
    "MarshallMcLuhan"    : "\n\nМаршалл Маклюэн" ,
    
    // (quote0004.png)
    "misatrributed"      : "\n\n(на самом деле, нет)" ,
};

// Umlaut codes: Ä = \xC4, Ö = \xD6, Ü = \xDC, ä = \xE4, ö = \xF6, ü = \xFC, ß = \x

var textStrings_DE = {
    // Act 1
    "niceHat"              : "Oh, h\xFCbscher Hut!"                                              ,
    "outtaHere"            : "Ja, besser schnell weg hier."                                      ,
    "getARoom"             : "Widerlich, nehmt euch ein Zimmer!"                                 ,
    "notCoolAnymore"       : "Schon geh\xF6rt? H\xFCte sind out."                                ,
    "tvOnTv"               : "Ein Fernseher! Im Fernsehen!"                                      ,
    "cricky"               : "Ein Grash\xFCpfer!"                                                ,
    "tooManyCrickets"      : "Ok, zu viele Grash\xFCpfer."                                       ,
    "normalPeep"           : "Ein gew\xF6hnlicher Typ."                                          ,
    "normalPeeps"          : "Ein paar gew\xF6hnliche Typen."                                    ,
    "wowNothing"           : "Wow! Nichts! Gar nix!"                                             ,
    
    // Act 2
    "crazySquareAttacks"   : "Verr\xFCcktes Quadrat greift an!"                                  ,
    "justMissed"           : "Ooooh, knapp verpasst."                                            ,
    "somethingInteresting" : "(laaangweilig *g\xE4hn*)"                                          ,
    "whoIsScreaming"       : "(*wer* schreit sie denn an?)"                                      ,
    "circleFearsSquares"   : "KREIS F\xDCRCHTET QUADRATE!"                                       ,
    "whoScaresThem"        : "(*wen* f\xFCrchten sie denn?)"                                     ,
    "areTheyScared"        : "(erwische sie, *wenn* sie fl\xFCchten)"                            ,
    "squaresSnubCircles"   : "QUADRAT: Anschuldigungen von KREISEN l\xE4cherlich."               ,
    "areTheySnubbed"       : "(erwische sie, *w\xE4hrend* sie angreifen)"                        ,
    "everyoneHates"        : "ALLE HASSEN JEDEN!!1!"                                             ,
    "almostEveryoneHates"  : "FAST JEDER HASST ALLE..."                                          ,
    "squaresHateCircles"   : "QUADRATE HASSEN KREISE"                                            ,
    "circlesHateSquares"   : "KREISE HASSEN QUADRATE"                                            ,
    "areTheyYelling"       : "(erwische sie, *w\xE4hrend* sie sich gegenseitig anschreien)"      ,
    "nerdsNow"             : "Was machen diese Nerds jetzt?"                                     ,
    "schockedPeep"         : "Warum ist er geschockt?"                                           ,
    "whatever"             : "Egal..."                                                           ,
    
    // Act 3
    "ellipsis"             : ". . ."                                                             ,
    "coolNoMore"           : "H\xFCte sind out. Hast du's immer noch nicht geh\xF6rt?"           ,
    "beScared"             : "HABT ANGST! SEID W\xDCTEND!"                                        ,
    
    // MANIFESTO
    "manifesto" : [
       //"Als ob ihr an guten Nachrichten interessiert seid."     ,
       "Wer will denn sehen, wie Leute miteinender klarkommen?" ,
       "Frieden ist langweilig. Die Leute wollen Gewalt sehen." ,
       //"Frieden ist langweilig. Konflikt bringt Klicks."        ,
       "Jede gute Story braucht einen Konflikt, also..."        ,
       //"...GIB DEM PUBLIKUM WAS ES WILL!"                       ,
       "GIB DEM PUBLIKUM WAS ES WILL!"
    ] ,
    
    // -- Strings currently in graphics resources --
    
    // (bg_preload.png) Preload screen
    "playingTime"        : "Spielzeit: 5 Minuten" ,
    "warning"            : "Warnung: die folgende Sendung\nenth\xE4lt Darstellungen von Arroganz,\nBeleidigungen & Gewalt.\nund ist nicht f\xFCr Kinder geeignet." ,
    
    // (cam-instructions.png) Camera Instructions
    "pointAndClick"      : "POINT & CLICK" , // I'd leave that in English, even for the German translation. /stefan
    
    // (chyron3.png)
    "chyronNothing"      : "Oh wow, *NICHTS*!" ,
    
    // (credits0001.png)
    "createdBy"          : "created by" , // I'd leave that in English, even for the German translation. /stefan
    "NickyCase"          : "Nicky Case" , // name; just here in case you want to display text instead of graphic. /stefan
    
    // (credits0002.png)
    "manyThanks"         : "Vielen Dank an alle Tester:" ,
    
    // (credits000[3,4,5,6].png)
    "patreonSupporters"  : "und an meine Patreon Unterst\xFCtzer:" ,
    
    // (credits0007.png)
    "lastButNotLeast"    : "und zu guter Letzt," ,
    
    // (credits0008.png)
    "thankYouForPlaying" : "Danke an DICH f\xFCr's spielen!" ,
    
    // (preload_play.png)
    "playButton"         : "START" ,
    
    // (end_button.png) Post Credits
    "otherWorkButton"    : "andere Projekte" ,
    "buyCoffeeButton"    : "kauf mir einen Kaffee" ,
    "replayButton"       : "noch mal spielen" ,
    
    // (logo.png) Post Credits
    "logoWBWWB"          : "TEILE DEINEN SCHMERZ:" ,
    
    // (end_prototype.png)
    "endOfPrototype"     : "ENDE DES PROTOTYPS" ,
    "toBeContinued"      : "(wird fortgesetzt!)" ,
    
    // (quote0002.png)
    "WBWWB"              : "We become what we behold." , // I'd leave that in English, even for the German translation. /stefan
    "WSOTATOTSU"         : "Wir formen unsere Werkzeuge, und dann formen unsere Werkzeuge uns." ,
    
    // (quote0003.png)
    "MarshallMcLuhan"    : "Marshall McLuhan" , // name; just here in case you want to display text instead of graphic. /stefan
    
    // (quote0004.png)
    "misatrributed"      : "(falsch zugeschrieben)" ,
};

var textStrings = textStrings_EN
