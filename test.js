function Yanzhenma(dom,second) {


    function timedCount() {
         //主要的计时器函数
    }

    function AddEvent(ele, ev, fn) {
         //事件绑定器,兼容IE,webkit
    }

    function start() {
         //开始打开计数器的执行函数,并且执行相关click时的回调函数,通过一个标志位来判断是否执行相关的计数工作,如果已经在执行计数工作,不执行
    }
    function complete() {
         // 完成计数时的执行函数,并且执行完成后UI复原的动作
    }

    AddEvent(dom, 'click', function() {
        start();
    });
    return {
        click: function(fn) {
             //通过链式传入点击事的回调动作
        },
        complete: function(fn) {
             //通过链式传入完成时的回调动作
        }
    }
}
