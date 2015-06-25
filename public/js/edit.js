(function() {
  var oInput, oPreview;

  oInput = document.getElementById('text-input');

  oPreview = document.getElementById('preview');

  (function() {
    var Editor;
    Editor = function(input, preview) {
      this.update = function() {
        return preview.innerHTML = markdown.toHTML(input.value);
      };
      input.editor = this;
      return this.update();
    };
    return new Editor(oInput, oPreview);
  })();

  (function() {
    var $save;
    $save = $('#save');
    return $save.click(function() {
      var id, value;
      value = encodeURIComponent(oInput.value);
      id = this.dataset.id;
      return $.post("/admin/add/article/" + id, {
        content: value,
        _id: id
      }).done(function(result) {
        return console.log(result);
      });
    });
  })();

}).call(this);
