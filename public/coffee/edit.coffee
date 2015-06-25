oInput = document.getElementById 'text-input'
oPreview = document.getElementById 'preview'
do ->
    Editor = (input, preview) ->
        @update = ->
            preview.innerHTML = markdown.toHTML input.value
        input.editor = this
        @update()

    new Editor oInput, oPreview

do ->
    $save = $ '#save'
    $save.click ->
        value = encodeURIComponent oInput.value
        id = this.dataset.id
        $.post "/admin/add/article/#{id}", {
            content: value
            _id: id
        } 
        .done (result) ->
            console.log result

