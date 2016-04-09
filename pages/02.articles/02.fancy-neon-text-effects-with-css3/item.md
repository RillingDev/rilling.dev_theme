---
title: 'Fancy Neon Text Effects with CSS3'
published: true
taxonomy:
    category:
        - CSS
    tag:
        - CSS
        - Transition
        - Text
content:
    pagination: true
---

Did you ever want to create fancy neon effects? No? Well...to bad I'll explain how to create them anyways. Neon text mostly is achieved by using the CSS3 proporty "text-shadow" on multiple layers and a saturated color, as well as some animations to look more realistic.

[Live Example](http://f-rilling.com/projects/NeonText/)

This is the basic HTML we will use. Nothing fancy to see here.

```html
<html>
	<head>

	</head>
 	<body>

		<div id="container">
		# Neon Text
    	</div>

  	</body>
 </html>
```
Now we're getting to the cool stuff: CSS!

The most important part here is the "text-shadow" - We won't use it for an actual shadow but for the glow effect of the text. Each line in the value represents one of the radiuses of the glow (i.e. The first line creates the glow with a 10px radius). In most cases we want the inner shadows to be a brighter version of the color or even white, while the outter ones have the neon-color.

```css
body{
  background-color:#424242;
}
.neon{
  text-align:center;
  font-size:40px;
  margin:20px 0 20px 0;
  color:#ffffff;
  /*Glow*/
  text-shadow: 0 0 10px #ffffff,
             0 0 20px  #ffffff,
             0 0 30px  #ffffff,
             0 0 40px  #228DFF,
             0 0 70px  #228DFF,
             0 0 80px  #228DFF,
             0 0 100px #228DFF,
             0 0 150px #228DFF;
}
```

If we want, we can also animate this!

We want to use a "animation" attribute here for the glow effect, don't forget the vendor prefixes "-webkit-" and "-moz-"! Right now the animation still needs its keyframes to work

```css
.neon{
  text-align:center;
  font-size:40px;
  margin:20px 0 20px 0;
  color:#ffffff;
  text-shadow: 0 0 10px #ffffff,
             0 0 20px  #ffffff,
             0 0 30px  #ffffff,
             0 0 40px  #228DFF,
             0 0 70px  #228DFF,
             0 0 80px  #228DFF,
             0 0 100px #228DFF,
             0 0 150px #228DFF;
  /*Animation*/
  -webkit-animation: neonAnimation 1.5s ease-in-out infinite alternate;
  -moz-animation: neonAnimation 1.5s ease-in-out infinite alternate;
  animation: neonAnimation 1.5s ease-in-out infinite alternate;   
}
```

For the Keyframes we need to use the vendor prefixes again, like this:

```css
/*Webkit prefix*/
      @-webkit-keyframes neonAnimation {
        from {
          text-shadow: 0 0 10px #ffffff,
                     0 0 20px  #ffffff,
                     0 0 30px  #ffffff,
                     0 0 40px  #228DFF,
                     0 0 70px  #228DFF,
                     0 0 80px  #228DFF,
                     0 0 100px #228DFF,
                     0 0 150px #228DFF;
        }
        to {
          text-shadow: 0 0 5px #ffffff,
                     0 0 10px #ffffff,
                     0 0 15px #ffffff,
                     0 0 20px #228DFF,
                     0 0 35px #228DFF,
                     0 0 40px #228DFF,
                     0 0 50px #228DFF,
                     0 0 75px #228DFF;
        }
      }

      /*Moz prefix*/
      @-moz-keyframes neonAnimation {
        from {
          text-shadow: 0 0 10px #ffffff,
                     0 0 20px  #ffffff,
                     0 0 30px  #ffffff,
                     0 0 40px  #228DFF,
                     0 0 70px  #228DFF,
                     0 0 80px  #228DFF,
                     0 0 100px #228DFF,
                     0 0 150px #228DFF;
        }
        to {
          text-shadow: 0 0 5px #ffffff,
                     0 0 10px #ffffff,
                     0 0 15px #ffffff,
                     0 0 20px #228DFF,
                     0 0 35px #228DFF,
                     0 0 40px #228DFF,
                     0 0 50px #228DFF,
                     0 0 75px #228DFF;
        }
      }

      /*No prefix*/
      @keyframes neonAnimation {
        from {
          text-shadow: 0 0 10px #ffffff,
                     0 0 20px  #ffffff,
                     0 0 30px  #ffffff,
                     0 0 40px  #228DFF,
                     0 0 70px  #228DFF,
                     0 0 80px  #228DFF,
                     0 0 100px #228DFF,
                     0 0 150px #228DFF;
        }
        to {
          text-shadow: 0 0 5px #ffffff,
                0 0 10px #ffffff,
                0 0 15px #ffffff,
                0 0 20px #228DFF,
                0 0 35px #228DFF,
                0 0 40px #228DFF,
                0 0 50px #228DFF,
                0 0 75px #228DFF;
  }
}
```