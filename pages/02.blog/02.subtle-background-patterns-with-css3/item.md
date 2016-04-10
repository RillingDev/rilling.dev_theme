---
title: 'Subtle background patterns with CSS3'
published: true
summary:
    enabled: '1'
    format: long
taxonomy:
    tag:
        - CSS
        - Background
        - Pattern
    category:
        - CSS
content:
    pagination: true
---

Did you ever get bored of those boring single-colored backgrounds and wanted to add some subtle patterns to your site but disliked the idea of using images to do so? Well, fear not! CSS3 introduces the repeating-linear-gradient function which makes it easy to create background patterns without the use of images! How cool is that?

[Live Example](http://f-rilling.com/projects/SubtlePatterns/)

### The repeating-linear-gradient function

The repeating-linear-gradient function is a rather complex one, as it consist of multiple values. Let's take a look at the basic version of it.

```css
body{
  background: repeating-linear-gradient(angle, color1, color2, color3, color4);
}
```

The angle defines if the gradient should be rotated (default is 0deg = horizontal) in degree, while the color values define which colors should appear in the gradient.

### Color Stops

Right now we have soft transitions between our colors. if we want a subtle, flat look we need to adjust the color stops. We also want color1 and color2 as well as color3 and color4 to be identical so that we have a two colored, flat pattern:

```css
body{
  background: repeating-linear-gradient(angle, color1 stop1, color1 stop2, color2 stop3, color2 stop4);
}
```

The stops are provided as percentage. of of the repeated pattern.  
Here is an example of a flat background pattern using this scheme:

![A background pattern with color stops](http://f-rilling.com/img/media/second.png)

```css
body{
  background: repeating-linear-gradient(45deg, #333333 0%, #333333 25%, #444444 0%, #444444 50%);
}
```

The default size of the repeated pattern is too big for our purposes, lets change it to be 15px x 15px by changing it to the following:

```css
body{
  background: repeating-linear-gradient(45deg, #333333 0%, #333333 25%, #444444 0%, #444444 50%) 0 / 15px 15px;
}
```

![A background pattern with color stops and smaller size](http://f-rilling.com/img/media/third.png)

### Layering

We can also layer multiple gradients to achieve an effect like this:

![Two layered gradients](http://f-rilling.com/img/media/fourth.png)

```css
body{
  background:repeating-linear-gradient(90deg, #f0f0f0 0, #f0f0f0 5%, transparent 0, transparent 50%) 0 / 15px 15px ,
  repeating-linear-gradient(180deg, #f0f0f0 0, #f0f0f0 5%, transparent 0, transparent 50%) 0 / 15px 15px;
}
```

We just add another gradient after the first one, seperated by a commata.  
Please note that you need to set one of the colors of the second gradient to transparent in order to be able to see the first one

### Related Links:

*   [Mozilla Developer Network on repeating-linear-gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/repeating-linear-gradient)