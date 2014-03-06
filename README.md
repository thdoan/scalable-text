Scalable Text
==============

A light-weight responsive text jQuery plugin inspired by [FlowType](http://simplefocus.com/flowtype/). Use it to "liquify" text on your website so that it scales relative to the width of the parent element or, optionally, any element you specify (see Options below).


Options
-------

Property    | Description
----------- | -------------
`reference` | Selector to the reference element (text will scale relative to this element's width). If this option is not provided, then the default reference element will be the parent element.


Usage
-----

```html
<body>
<h1>Responsive Heading</h1>
<p>
  <button>Responsive Button Label</button>
</p>
...
<script>
$(document).ready(function() {
  // Default options
  $('h1').scaleText();
  // Scale relative to <body> instead of <p>
  $('button').scaleText({
    reference: 'body'
  });
}
</script>
</body>
```

[__See a demo &raquo;__](http://thdoan.github.io/scalable-text/demo.html)
