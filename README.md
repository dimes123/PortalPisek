# PortalPisek
Skupni repozitorij za delo na Portalu Pisek

## Besedila nalog in testni primeri

Naloge so vsebovane v imenikih nalog: `Slovenia/ime_naloge`. Vsak imenik praviloma vsebuje datoteki **task.js** (**printer_task.js**, **turtle_task.js**) ter **index.html**. V slednji je opis naloge, ki vključuje:
* navodilo in
* slikovna gradiva, ki so prikazana v navodilu.

V datoteki index.html lahko defniramo druge elemente, ki jih dovoljuje HTML (npr.: gumb *Namig*, ki prikaže namig), in pokličemo knjižnice uporabljene v nalogi.

Datoteka **task.js** je portfolio naloge, saj v njej določimo:
* kategorije kock, uporabljene kocke, spremenljivke,
* omejitev števila kock,
* možnost shranjevanja ali nalaganja Blockly programa,
* grafično podobo naloge (razdelek `itemTypes`),
* število stopenj in testne primere
* ter način preverjanja rešitve.

Naloga ima lahko eno ali tri težavnosti. Če je težavnost samo ena, ima `subTask.data` en sam element `easy`, sicer pa tri `easy, medium, hard`. Z ustreznimi imeni težavnosti poimenujemo `class` elementa `<div>` v index.html (npr.: `<div class="easy">`), da določimo za katero težavnostno stopnjo naj se element prikaže. Če `class` ni določen, potem se ustrezni element prikaže na vseh stopnjah.

V nalogah s tabelo testni primer sestavimo z matriko števil (vrednost `num`), ki predstavijo ikone ali druge elemente določene v `itemTypes`. Primer: 


```javascript
itemTypes: {
    green_robot: { img: "green_robot.png", side: 80, nbStates: 9, isObstacle: true, offsetX: -14, category: "robot", team: 0, zOrder: 2 },
    0: { num: 100, side: cellSide, category: "number", value: 0 },
    1: { num: 101, side: cellSide, category: "number", value: 1 },
    marker: { num: 9, img: "marker.png", side: cellSide, isMarker: true, category: "marker", isObstacle: false, hasColor: true, color: "marker", zOrder: 0 }
    }
```
Testni primer:
```javascript
easy: [
         {
            tiles: [
				   [1, 3, 3, 3, 2, 2, 2, 1, 3, 3, 2, 2, 1, 3, 2, 1]
               ],
               /*
               initItems določi začetni položaj junaka, ki ga premikamo po mreži
                */
            initItems: [
                  { row: 0, col: 0, dir: 0, type: "green_robot" }
               ]
         }
]
```

## Knjižnice 

Prevodi opozoril in imen kock so zbrani v `Slovenia/modules`. Vsaka datoteka vsebuje v `localLanguageStrings` element, ki se imenuje `sl`. Za ustrezne tuje prevode so pred slovenskim besedilom zapisani ključi, ki jih poiščete na primer v `en` elementu.

## Grafike

Ikone se nahajajo v imenikih nalog v direktorijih `Slovenia/ime_naloge`.
Uporabljene grafike nalog so zbrane v direktoriju `Grafike`. Ikone junakov (pišek, robotek, ipd.) imajo več zornih kotov.

