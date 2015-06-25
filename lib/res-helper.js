module.exports = {
    error: function(code, msg) {
        return {
            ec: code,
            em: msg,
            result: null
        }
    },
    right: function(msg) {
        return {
            ec: 200,
            em: 'ok',
            result: msg
        }
    }
}