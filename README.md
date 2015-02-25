# ancestor_selector
jQuery plugin for selecting ancestors
# example
```html
<div id='d1' class='a b'><div class='x'></div></div>
<div id='d2' class='a c'><div class='x'></div></div>
<div id='d3' class='a b'><div class='y'></div></div>
<div id='d4' class='a b'><div class='x'></div></div
```
selector 
```$('body').ancestors('.a > .x < .b')``` returns the DIVs ```#d1``` and ```#d4``` as jQuery element.

