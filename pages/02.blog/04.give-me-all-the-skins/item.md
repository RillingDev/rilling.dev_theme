---
title: 'Give me ALL the skins!'
published: true
taxonomy:
    category:
        - Javascript
    tag:
        - Javascript
        - jQuery
        - API
        - Riot
content:
    pagination: true
---

If you used the [Riot Games API](https://developer.riotgames.com/api/methods "Riot Games API") for creating a [League of Legends](http://euw.leagueoflegends.com/ "League of Legends") app before, you may have noticed that its not really possible to directly get the JSON information for all the available skins. When I created my [Mystery Gift Opening Simulator](http://f-rilling.com/projects/MysteryGiftOpener/ "Mystery Gift Opening Simulator") for [League of Legends](http://euw.leagueoflegends.com/ "League of Legends"), I ran into the same problem - and wrote some JavaScript/jQuery that allows to get JSON with information about all the available skins.

[Live Example](http://f-rilling.com/projects/MysteryGiftOpener/ "Mystery Gift Opening Simulator")

### The Code

The function requires you API key as attribute, and returns a JSON object with all skins, which champion it belongs to and the splash art. I made both a classic Javascript as well as a jQuery version of it.  
You MUST supply your API key. **The result gets stored in the skinJSON variable.**

Classic JavaScript version:

```javascript
var skinJSON=[];

function getSkinData(API_key) {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("load", finishedLoading, false);
  xhr.open("get", "https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion?champData=skins&api_key=" + API_key, true);
  xhr.send();

  function finishedLoading() {
    var data = (JSON.parse(this.responseText)).data;

    for (var index in data) {

      for (var i = 0; i < data[index].skins.length; i++) {

        var tempSkin = {
        "name": data[index].skins[i].name,
        "champ": data[index].key,
        "num": data[index].skins[i].num
        };

        if (name === "default") {
         tempSkin.img = "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + tempSkin.champ + "_0.jpg";
        } else {
         tempSkin.img = "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + tempSkin.champ + "_" + tempSkin.num + ".jpg";
        }

        skinJSON.push(tempSkin);
      }

    }
  }

}
```

jQuery version:

```javascript
var skinJSON=[];

function getSkinData(API_key) {

  $.get("https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion?champData=skins&api_key=" + API_key,
    function(json) {
      $.each(json.data, function(index, value) {
      for (var i = 0; i < value.skins.length; i++) {

        var tempSkin = {
         "name": value.skins[i].name,
         "champ": value.key,
         "num": value.skins[i].num
        }

        if (name === "default") {
       tempSkin.img = "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + tempSkin.champ + "_0.jpg";
        } else {
       tempSkin.img = "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + tempSkin.champ + "_" + tempSkin.num + ".jpg";
        }

        skins.push(skinJSON);
      }

    });
  });
}
```