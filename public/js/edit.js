(function() {
  var oInput, oPreview, oTitle;

  oInput = document.getElementById('text-input');

  oPreview = document.getElementById('preview');

  oTitle = document.getElementById('title');

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
      var id, preview, title, value;
      value = encodeURIComponent(oInput.value);
      id = this.dataset.id;
      title = oTitle.value || '暂未命名';
      preview = $(oPreview).text();
      return $.post("/admin/add/article/" + id, {
        content: value,
        _id: id,
        title: title,
        preview: preview
      }).done(function(result) {
        return console.log(result);
      });
    });
  })();

}).call(this);
