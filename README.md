Scalable Text
==============

A light-weight responsive text jQuery plugin inspired by [FlowType](http://simplefocus.com/flowtype/). Use it to "liquify" text on your website so that it scales relative to the width of the parent element or, optionally, any element you specify (see Options below).


Options
-------

Property    | Description
----------- | -------------
`reference` | Selector to the reference element (text will scale relative to this element's width). If this option is not provided, then the default reference element will be the parent element.
`styles`    | Array of additional styles to scale in addition to font-size.


Usage
-----

```html
<body>
<h1>Scalable Heading</h1>
<div>
  <strong>Scalable Text</strong>
<div>
<p>
  <button>Scalable Button</button>
</p>
...
<script>
$(document).ready(function() {
  // Default options
  $('h1').scaleText();
  // Scale relative to <h1> instead of <div>
  $('strong').scaleText({
    reference: 'h1'
  });
  // You can scale an entire button by doing this:
  $('button').scaleText({
    styles: ['border-radius', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left']
  });
}
</script>
</body>
```

[__See a demo &raquo;__](http://thdoan.github.io/scalable-text/demo.html)
