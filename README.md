# Jquery-Time-Line-Scroll
A quick, jquery time line scroller with a small JS footprint (2kb)

![alt text](https://github.com/clayhenry/Jquery-Time-Line-Scroll/blob/master/slider_img.jpg "Jquery time scroll")


## Setup
Requires Jquery 1.2 +

HTML structure:

```html

<div id="TimeLineNavigation" class="scrolNav">
    <div id="scrolNav">
        <ul>
            <li>1998</li>
            <li>2001</li>
            <li>2003</li>
            <li>2006</li>
            <li>2009</li>
        </ul>
    </div>
    <div id="scrolNavPlaceholder"></div>
        <ul id="scrolNavContent">
           <li>Content for 1998</li>
           <li>Content for 2001</li>
           <li>Content for 2003</li>
           <li>Content for 2006</li>
           <li>Content for 2009</li>
        </ul>
     </div>

```

Call this function after your content: 
```javascript
timeLineNavigation({
    "duration" : 100,
    "fade" : 200
})
```

Currently, there are 2 parameters: **duration** (time in ms for slide effect) and **fade** (time in ms for content block fade in/out)

##Demo

[Full example on JSfiddle](https://jsfiddle.net/68b0fzrv/)


