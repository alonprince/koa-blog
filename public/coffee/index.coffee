@Phishing = @Phishing || {}
Phishing.main = do ->
    init = ->
        # 滚动条事件
        $('body').on 'wheel', (e) ->
            $cuTarget = $ e.currentTarget
            scrollTop = $cuTarget.scrollTop()
            headerHeight = $ '#header' 
                            .height()
            percent = scrollTop / headerHeight
            percent = 1 if percent > 1
            opcity = percent * 0.7 + 0.2
            $ '#header .shadow'
                .css 'background', "rgba(0, 0, 0, #{opcity})"

    return {
        init: init
    }