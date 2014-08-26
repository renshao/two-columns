/*
  Split a panel into two columns with gutter.
  Specify width of columns in 'columns attribute'.
  Example:

  <div id="container" columns="70|25">
    <article> ... </article>
    <aside> ... </aside>
  </div>

  <script>
    $('#container').twoColumns();
  </script>
*/

$.fn.twoColumns = function() {
  var columnWidths = this.attr('columns').split(/\|/);
  var left = parseFloat(columnWidths[0]), right = parseFloat(columnWidths[1]);
  var gutter = 100 - left - right;
    
  this.children().css('float', 'left');
  this.children(':first').css('width', left + '%');
  this.children(':last').css({
    'width': right + '%',
    'margin-left': gutter + '%'
  });

  return this;
};
