module.exports = {
    saveArticle: function *(next) {
        this.body = {
            result: this.body.value
        }
    }
}