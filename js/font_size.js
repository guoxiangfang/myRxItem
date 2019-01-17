/**
 * Created by keke on 2016/11/14.
 */
!function(win, option) {
    var count = 0,
        designWidth = option.designWidth,
        designHeight = option.designHeight || 0,
        designFontSize = option.designFontSize || 20,
        callback = option.callback || null,
        root = document.documentElement,
        body = document.body,
        rootWidth, newSize, t, self;
    root.style.width = "100%";
    //����rootԪ�����������
    function _getNewFontSize() {
        var scale = designHeight !== 0 ? Math.min(win.innerWidth / designWidth, win.innerHeight / designHeight) : win.innerWidth / designWidth;
        return parseInt( scale * 10000 * designFontSize ) / 10000;
    }
    !function () {
        rootWidth = root.getBoundingClientRect().width;
        self = self ? self : arguments.callee;
        //�����ʱ��Ļ���Ȳ�׼ȷ���ͳ����ٴλ�ȡ�ֱ��ʣ�ֻ����20�Σ�����ʹ��win.innerWidth����
        if( rootWidth !== win.innerWidth &&  count < 20 ) {
            win.setTimeout(function () {
                count++;
                self();
            }, 0);
        } else {
            newSize = _getNewFontSize();
            //���css�Ѿ����ݵ�ǰ�ֱ��ʾͲ�����
            if( newSize + 'px' !== getComputedStyle(root)['font-size'] ) {
                root.style.fontSize = newSize + "px";
                return callback && callback(newSize);
            };
        };
    }();
    //�������л���ʱ��ı�fontSize��������Ҫѡ��ʹ��
    win.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
        clearTimeout(t);
        t = setTimeout(function () {
            self();
        }, 300);
    }, false);
}(window, {
    designWidth: 750,
    /*designHeight: 1136,*/
    designFontSize: 20,
    callback: function (argument) {
        console.timeEnd("test")
    }
});