/*
* Scalable Text v1.0 - A responsive text jQuery plugin
* Copyright 2014, Tom Doan http://www.tohodo.com/
*
* Responsive Text by Tom Doan (http://www.tohodo.com/)
* is licensed under the MIT License. Read a copy of the
* license in the LICENSE.txt file or at
* http://choosealicense.com/licenses/mit
*
* Inspired by FlowType.JS (http://simplefocus.com/)
*/

(function($) {
  $.fn.scaleText = function(oOptions) {
    var oSettings = $.extend({
        reference: null  /* Font size will be set relative to this element */
      }, oOptions),
      $ref = $(oSettings.reference),
      setFontSize = function(o, e) {
        var $o = $(o),
          /* Text font size */
          nFontSize = parseFloat($o.css('font-size')),
          /* Reference width (set to parent width by default) */
          nRefWidth = ($ref.length > 0) ? $ref.width() : $o.parent().width(),
          /* Font ratio */
          nRatio = (e) ? parseFloat(o.getAttribute('data-fontratio')) : (nFontSize / screen.width) * ($(window).width() / nRefWidth);
        // Set data-fontratio attribute only on first load
        if (!e) o.setAttribute('data-fontratio', nRatio);
        if (nRatio) $o.css('font-size', (nRefWidth * nRatio) + 'px');
      };
    return this.each(function() {
      // This scope required for resize handler
      var o = this;
      // Update font size upon resize
      $(window).resize(function(e) {
        setFontSize(o, e);
      });
      // Set font size on load
      setFontSize(o);
    });
  };
}(jQuery));
