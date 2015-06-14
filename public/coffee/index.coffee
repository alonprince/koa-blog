@Phishing = @Phishing || {}
Phishing.main = do ->
    init = ->
        $header = $ '#header'
        $hShadow = $ '#header .shadow'
        $article = $ '.article-item' 
        oldScroll = 0;

        window.onresize = ->
            $header.height document.documentElement.clientHeight

        # 滚动条事件
        $('body').on 'wheel', (e) ->
            $cuTarget = $ e.currentTarget
            scrollTop = $cuTarget.scrollTop()
            if Math.abs(scrollTop - oldScroll) > 50
                headerHeight = $header.height()
                oldScroll = scrollTop
                # 头部背景
                do ->
                    percent = scrollTop / headerHeight
                    percent = 1 if percent > 1
                    opcity = percent * 0.7 + 0.2
                    $hShadow.css 'background', "rgba(0, 0, 0, #{opcity})"




    return {
        init: init
    }