$(function() {
    var c = new Coder("style-text");
    c.load("<p><div class='bef_comment writecode'>/**</div>");
    c.load("<div class='bef_comment writecode'>&nbsp;*</div>");
    c.load("<div class='bef_comment writecode'>&nbsp;*我是韩陈昊,一名iOS程序员</div>");
    c.load("<div class='bef_comment writecode'>&nbsp;*我的主要工作是做一些简单的APP</div>", 2000);
    c.load("<div class='bef_comment writecode'>&nbsp;*/</div></p>");
    c.load("<p><div class='bef_comment writecode'>/**</div>");
    c.load("<div class='bef_comment writecode'>&nbsp;*先来写点代码?</div>");
    c.load("<div class='bef_comment writecode'>&nbsp;*/</div></p>");
    c.load("<p><div class='code writecode'><span class='bef_selector'>*</span> {</div>");
    c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>-webkit-transition</span>: <span class='bef_value'> all 1s</span>;</div>");
    c.load("<div class='code writecode'>}</div></p>");
    c.load("<p><div class='bef_comment writecode'>/**</div>");
    c.load("<div class='bef_comment writecode'>&nbsp;*看起来没什么变化?不要着急</div>");
    c.load("<div class='bef_comment writecode'>&nbsp;*你是不是和我一样厌倦了白底黑字</div>");
    c.load("<div class='bef_comment writecode'>&nbsp;*/</div></p>");
    c.load("<p><div class='code writecode'><span class='bef_selector'>html</span> {</div>");
    c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>background</span>: <span class='bef_value'>rgb(63, 82, 99)</span>;</div>");
    c.setClass("html", [{
        "name": "background",
        "val": "rgb(63, 82, 99)"
    }]);
    c.load("<div class='code writecode'>}</div></p>");
    c.load("<p><div class='bef_comment writecode'>/**</div>");
    c.load("<div class='bef_comment writecode'>&nbsp;*稍等，再加一点颜色</div>");
    c.load("<div class='bef_comment writecode'>&nbsp;*/</div></p>");
    c.load("<p><div class='code writecode'><span class='bef_selector'>pre,a</span> {</div>");
    c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>color</span>: <span class='bef_value'>white</span>;</div>");
    c.setClass("pre,a", [{
        "name": "color",
        "val": "white"
    }]);
    c.load("<div class='code writecode'>}</div></p>");
    c.load("<p><div class='bef_comment writecode'>/**</div>");
    c.load("<div class='bef_comment writecode'>&nbsp;*现在看起来好多了</div>");
    c.load("<div class='bef_comment writecode'>&nbsp;*再创建一个区域来更好的显示代码</div>");
    c.load("<div class='bef_comment writecode'>&nbsp;*/</div></p>");
    c.load("<p><div class='code writecode'><span class='bef_selector'>pre</span><span class='bef_key'>:not(:empty)</span> {</div>");
    c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>overflow</span>: <span class='bef_value'>hidden</span>;</div>");
    c.setClass("pre:not(:empty)", [{
        "name": "overflow",
        "val": "hidden"
    }]);
    c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>background</span>: <span class='bef_value'>rgb(48, 48, 48)</span>;</div>");
    c.setClass("pre:not(:empty)", [{
        "name": "background",
        "val": "rgb(48, 48, 48)"
    }]);
    c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>border</span>: <span class='bef_value'>1px solid #ccc</span>;</div>");
    c.setClass("pre:not(:empty)", [{
        "name": "border",
        "val": "1px solid #ccc"
    }]);
    c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>max-height</span>: <span class='bef_value'>44.6%</span>;</div>");
    c.setClass("pre:not(:empty)", [{
        "name": "max-height",
        "val": "44.6%"
    }]);
    c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>width</span>: <span class='bef_value'>49%</span>;</div>");
    c.setClass("pre:not(:empty)", [{
        "name": "width",
        "val": "49%"
    }]);
    $('#pre:not(:empty)').addClass("toarea");
    c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>font-size</span>: <span class='bef_value'>14<span class='bef_px'>px</span></span>;</div>");
    c.setClass("pre:not(:empty)", [{
        "name": "font-size",
        "val": "14px"
    }]);
    c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>font-family</span>: <span class='bef_value'>monospace</span>;</div>");
    c.setClass("pre:not(:empty)", [{
        "name": "font-family",
        "val": "monospace"
    }]);
    c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>padding</span>: <span class='bef_value'>10<span class='bef_px'>px</span> 10<span class='bef_px'>px</span> 20<span class='bef_px'>px</span></span>;</div>");
    c.setClass("pre:not(:empty)", [{
        "name": "padding",
        "val": "10px 10px 20px"
    }]);
    c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>box-shadow</span>: <span class='bef_value'>-4<span class='bef_px'>px</span> 4<span class='bef_px'>px</span> 2<span class='bef_px'>px</span> 0 rgba(0,0,0,0.3)</span>;</div>");
    c.setClass("pre:not(:empty)", [{
        "name": "box-shadow",
        "val": "-4px 4px 2px 0 rgba(0,0,0,0.3)"
    }]);
    c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>white-space</span>: <span class='bef_value'>pre-wrap</span>;</div>");
    c.setClass("pre:not(:empty)", [{
        "name": "white-space",
        "val": "pre-wrap"
    }]);
    c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>outline</span>: <span class='bef_value'>0</span>;</div>");
    c.setClass("pre:not(:empty)", [{
        "name": "outline",
        "val": "0"
    }]);
    c.load("<div class='code writecode'>}</div></p>");
    c.load("<p><div class='bef_comment writecode'>/**</div>");
    c.load("<div class='bef_comment writecode'>&nbsp;*换个位置</div>");
    c.load("<div class='bef_comment writecode'>&nbsp;*/</div></p>");
    c.load("<p><div class='code writecode'><span class='bef_selector'>#style-text</span> {</div>");
    c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>-webkit-transform</span>: <span class='bef_value'>translateX(95%)</span>;</div>");
    c.setClass("#style-text", [{
        "name": "-webkit-transform",
        "val": "translateX(95%)"
    }]);
    c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>position</span>: <span class='bef_value'>absolute</span>;</div>");
    c.setClass("#style-text", [{
        "name": "position",
        "val": "absolute"
    }]);
    c.load("<div class='code writecode'>}</div></p>");
    c.load("<p><div class='bef_comment writecode'>/**</div>");
    c.load("<div class='bef_comment writecode'>&nbsp;*现在看起来好多了</div>");
    c.load("<div class='bef_comment writecode'>&nbsp;*不过,我喜欢代码高亮</div>");
    c.load("<div class='bef_comment writecode'>&nbsp;*/</div></p>");
    c.load("<p><div class='code writecode'><span class='bef_selector'>.comment</span>&nbsp;{ <span class='bef_key'>color</span>: <span class='bef_value'>#857F6B</span>; <span class='bef_key'>font-style</span>: <span class='bef_value'>italic</span>; }</div>");
    c.addClass(".bef_comment", "comment");
    c.load("<div class='code writecode'><span class='bef_selector'>.selector</span>&nbsp;{ <span class='bef_key'>color</span>: <span class='bef_value'>#E69F0F</span>; }</div>");
    c.addClass(".bef_selector", "selector");
    c.load("<div class='code writecode'><span class='selector'>.selector .key</span>&nbsp;{ <span class='bef_key'>color</span>: <span class='bef_value'>#64D5EA</span>; }</div>");
    c.addClass(".bef_key", "key");
    c.load("<div class='code writecode'><span class='selector'>.key</span>&nbsp;{ <span class='key'>color</span>: <span class='bef_value'>#64D5EA</span>; }</div>");
    c.load("<div class='code writecode'><span class='selector'>.value</span>&nbsp;{ <span class='key'>color</span>: <span class='bef_value'>#BE84F2</span>; }</div>");
    c.addClass(".bef_value", "value");
    c.load("<div class='code writecode'><span class='selector'>.value.px</span>&nbsp;{ <span class='key'>color</span>: <span class='value'>#F92772</span>; }</div></p>");
    c.addClass(".value .bef_px", "px");
    c.load("<p><div class='comment writecode'>/**</div>");
    c.load("<div class='comment writecode'>&nbsp;*再完善一下</div>");
    c.load("<div class='comment writecode'>&nbsp;*/</div></p>");
    c.load("<p><div class='code writecode'><span class='selector'>#content</span> {</div>");
    c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-perspective</span>: <span class='value'>1000<span class='px'>px</span></span>;</div>");
    c.setClass("#content", [{
        "name": "-webkit-perspective",
        "val": "1000px"
    }]);
    c.load("<div class='code writecode'>}</div></p>");
    c.load("<p><div class='code writecode'><span class='selector'>#style-text</span> {</div>");
    c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform</span>: <span class='value'>translateX(98.5%) rotateY(-10deg)</span>;</div>");
    c.setClass("#style-text", [{
        "name": "-webkit-transform",
        "val": "translateX(98.5%) rotateY(-10deg)"
    }]);
    c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform-origin</span>: <span class='value'>right</span>;</div>");
    c.setClass("#style-text", [{
        "name": "-webkit-transform-origin",
        "val": "right"
    }]);
    c.load("<div class='code writecode'>&nbsp;<span class='key'>max-height</span>: <span class='value'>94.5%</span>;</div>");
    c.setClass("#style-text", [{
        "name": "max-height",
        "val": "94.5%"
    }]);
    c.load("<div class='code writecode'>}</div></p>");
    c.load("<p><div class='comment writecode'>/**</div>");
    c.load("<div class='comment writecode'>&nbsp;*现在我们差不多可以开始写东西了</div>");
    c.load("<div class='comment writecode'>&nbsp;*相信你来这不只是为了看这些</div>");
    c.load("<div class='comment writecode'>&nbsp;*我最近状态很糟糕</div>");
    c.load("<div class='comment writecode'>&nbsp;*想做点有趣的东西</div>");
    c.load("<div class='comment writecode'>&nbsp;*你想让我加入你,或者和我一起玩么?</div>");
    c.load("<div class='comment writecode'>&nbsp;*你肯定会说,我有什么资格?</div>");
    c.load("<div class='comment writecode'>&nbsp;*下面看看我的经历</div>");

    c.load("<div class='comment writecode'>&nbsp;*/</div></p>");
    c.addClass("#work-text", "pre_work-text");
    c.load("<p><div class='code writecode'><span class='selector'>pre</span><span class='key'>:not(#style-text)</span> { </div>");
    c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform</span>: <span class='value'>rotateY(10deg)</span>;</div>");
    c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform-origin</span>: <span class='value'>left</span>;</div>");
    c.load("<div class='code writecode'>}</div></p>");
    var r = new Coder("work-text");
    r.load("<div id='md'></div>");
    var w = new Coder("md");
    w.load("<h1 class='writecode'>☺</h1>");
    w.load("<p><div class='writecode'>韩陈昊</div>");
    w.load("<div class='writecode'>iOS软件工程师</div></p>");
    w.load("<h1 class='writecode'>工作经历</h1>");
    w.load("<ul>");
    w.load("<li class='writecode'>上海易贷网金融信息服务有限公司</li>");
    w.load("<li class='writecode'>华为成都研究院</li>");
    w.load("</ul>");
    w.load("<h1 class='writecode'>关于我</h1>");
    w.load("<ul>");
    w.load("<li class='writecode'>比较熟练掌握:iOS Native及Hybrid开发技术</li>");
    w.load("<li class='writecode'>熟悉一点Node.js技术</li>");
    w.load("<li class='writecode'>熟悉一些Web前端开发框架,比如现在比较火的Vue和微信小程序</li>");
    w.load("<li class='writecode'>有过几年企业级以及百万用户APP的开发经验</li>");
    w.load("<li class='writecode'>最近比较喜欢写swift</li>");
    w.load("<li class='writecode'>我想做一些react-native 或者 vue-native(weex)的东西</li>");
    w.load("<li class='writecode'>要不要一起玩?</li>");
    w.load("</ul>");

    w.load("<h1 class='writecode'>如果你感兴趣 ,请联系我</h1>");
    w.load("<ul>");
    w.load("<li class='writecode'>电话:18512842888</li>");
    w.load("<li class='writecode'>邮箱:hanchenhao@vip.qq.com</li>");
    w.load("<li class='writecode'>微信:masonhanchenhao</li>");
    w.load("<li class='writecode'>博客:<a href='http://www.hanchenhao.com' target='_blank'>www.hanchenhao.com</a></li>");
    w.load("</ul>");

    c.load("<p><div class='comment writecode'>/**</div>");
    c.load("<div class='comment writecode'>&nbsp;*看起来不是太令人满意</div>");
    c.load("<div class='comment writecode'>&nbsp;*/</div></p>");
    c.load("<p><div class='code writecode'><span class='selector'>#work-text</span> { </div>");
    c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform</span>: <span class='value'>rotateX(0deg) rotateY(190deg) rotateZ(180deg)</span>;</div>");
    c.load("<div class='code writecode'>}</div></p>");
    c.load("<p><div class='code writecode'><span class='selector'>#work-text #md</span> { </div>");
    c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform</span>: <span class='value'>rotateY(190deg) rotateZ(180deg)</span>;</div>");
    c.load("<div class='code writecode'>}</div></p>");
    c.load("<p><div class='comment writecode'>/**</div>");
    c.load("<div class='comment writecode'>&nbsp;*好了，让我们准备</div>");
    c.load("<div class='comment writecode'>&nbsp;*</div>");
    c.load("<div class='comment writecode'>&nbsp;*3....</div>");
    c.load("<div class='comment writecode'>&nbsp;*2....</div>");
    c.load("<div class='comment writecode'>&nbsp;*1....</div>");
    c.load("<div class='comment writecode'>&nbsp;*</div>");
    c.load("<div class='comment writecode'>&nbsp;*来了...</div>");
    c.load("<div class='comment writecode'>&nbsp;*/</div></p>");
    c.setClass("#work-text", [{
        "name": "-webkit-transform",
        "val": "rotateX(0deg) rotateY(190deg) rotateZ(180deg)"
    }]);
    c.setClass("#work-text #md", [{
        "name": "-webkit-transform",
        "val": "rotateY(190deg) rotateZ(180deg)"
    }]);
    c.load("<p><div class='comment writecode'>/**</div>");
    c.load("<div class='comment writecode'>&nbsp;*再做一点微调</div>");
    c.load("<div class='comment writecode'>&nbsp;*/</div></p>");
    c.load("<p><div class='code writecode'><span class='selector'>#md</span> { </div>");
    c.load("<div class='code writecode'>&nbsp;<span class='key'>font-family</span>: <span class='value'>'Helvetica Neue', Helvetica, sans-serif</span>;</div>");
    c.setClass("#md", [{
        "name": "font-family",
        "val": "'Helvetica Neue', Helvetica, sans-serif"
    }]);
    c.load("<div class='code writecode'>}</div></p>");
    c.load("<p><div class='code writecode'><span class='selector'>#md h1</span> { </div>");
    c.load("<div class='code writecode'>&nbsp;<span class='key'>border-bottom</span>: <span class='value'>1px solid #ccc</span>;</div>");
    c.setClass("#md h1", [{
        "name": "border-bottom",
        "val": "1px solid #ccc"
    }]);
    c.load("<div class='code writecode'>&nbsp;<span class='key'>padding-bottom</span>: <span class='value'>5px</span>;</div>");
    c.setClass("#md h1", [{
        "name": "padding-bottom",
        "val": "5px"
    }]);
    c.load("<div class='code writecode'>}</div></p>");
    c.load("<p><div class='code writecode'><span class='selector'>#md li</span> { </div>");
    c.load("<div class='code writecode'>&nbsp;<span class='key'>margin</span>: <span class='value'>5<span class='px'>px</span> 0</span>;</div>");
    c.setClass("#md li", [{
        "name": "margin",
        "val": "5px 0"
    }]);
    c.load("<div class='code writecode'>}</div></p>");
    c.load("<p><div class='code writecode'><span class='selector'>#md h1,#md ul</span> { </div>");
    c.load("<div class='code writecode'>&nbsp;<span class='key'>margin</span>: <span class='value'>0</span>;</div>");
    c.setClass("#md h1,#md ul", [{
        "name": "margin",
        "val": "0"
    }]);
    c.load("<div class='code writecode'>}</div></p>");
    c.load("<p><div class='comment writecode'>/**</div>");
    c.load("<div class='comment writecode'>&nbsp;*最后</div>");
    c.load("<div class='comment writecode'>&nbsp;*");
    c.load("<div class='comment writecode'>&nbsp;*非常感谢看完这些可能没什么意义的东西</div>");
    c.load("<div class='comment writecode'>&nbsp;*/</div></p>");

});

var m = 0;

var Coder = function(dom) {
    this._dom = dom;
};

Coder.prototype = {
    constructor: Coder,
    load: function(code, second) {
        var dom = this._dom;
        var o = this;
        var _second = second ? second : 1000;
        _second = m + _second;
        setTimeout(function() {
            $('#' + dom).scrollTop($('#' + dom)[0].scrollHeight);
            $("#" + dom).append(code);
        }, _second);
        m = _second;
    },
    setClass: function(dom, styles, second) {
        var _second = second ? second : 0;
        _second = m + _second;
        for (var i in styles) {
            setTimeout(function() {
                $(dom).css(styles[0].name, styles[0].val);
            }, _second);
        }
        m = _second;
    },
    addClass: function(dom, className) {
        var second = m;
        setTimeout(function() {
            $(dom).addClass(className);
        }, second);
    }
}