@Phishing = @Phishing || {}
Phishing.main = do ->
    init = ->
        # 滚动条事件
        $('html,body').on 'wheel', (e) ->
            console.log e
    

    return {
        init: init
    }