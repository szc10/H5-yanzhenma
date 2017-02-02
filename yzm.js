function Yanzhenma(dom,second) {
    var c = second || 60;
    var t;
    var clickFn = new Function();
    var completeFn = new Function();
    var sText = dom.innerHTML;

    function timedCount() {
        dom.innerHTML = "重新获取" + c + "s";
        c = c - 1;
        if (c == -1) {
            complete();
            return;
        }
        t = setTimeout(timedCount, 1000);
    }
    /**为对象增加相应的事件
     * @param ele  dom的指针
     * @param ev    dom的事件
     * @param fn    函数的名字
     */
    function AddEvent(ele, ev, fn) {
        try {
            if (!ele)
                throw "element is null";
            else {
                if (ele.attachEvent != null) {
                    ele.attachEvent('on' + ev, fn);
                } else {
                    ele.addEventListener(ev, fn, false);
                }
            }
        } catch (err) {
            alert(err);
        }
    }

    function start() {
        if (c == second) {
            clickFn();
            timedCount();
        }
    }
    function complete() {
        c = second;
        dom.innerHTML = sText;
        completeFn();
    }

    AddEvent(dom, 'click', function() {
        start();
    });
    return {
        click: function(fn) {
            clickFn = fn;
            return this;
        },
        complete: function(fn) {
            completeFn = fn;
            return this;
        }
    }
}
