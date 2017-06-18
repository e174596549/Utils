/*<script type="text/javascript">
//除了本地域名以外，其他域名一律无法将你的网页嵌入框架
try{
　　top.location.hostname;
　　if (top.location.hostname != window.location.hostname) {
　　　　top.location.href =window.location.href;
　　}
}
catch(e){
　　top.location.href = window.location.href;
}
</script>*/

var log = function() {
    console.log.apply(console, arguments)
}

function myTypeOf(a){
    return Object.prototype.toString.call(a)
}

// 随机生成m-n之间的一个数字
function creatRandomNum(m, n) {
    let r = Math.floor(Math.random() * n + m)
    return r
}

var data = function() {
    var myDate = new Date();
    this.Year = myDate.getYear(); // 获取当前年份(2位)
    this.FullYear = myDate.getFullYear(); // 获取完整的年份(4位,1970-????)
    this.Month = myDate.getMonth(); // 获取当前月份(0-11,0代表1月)
    this.Date = myDate.getDate(); // 获取当前日(1-31)
    this.Day = myDate.getDay(); // 获取当前星期X(0-6,0代表星期天)
    this.Time = myDate.getTime(); // 获取当前时间(从1970.1.1开始的毫秒数)
    this.Hours = myDate.getHours(); // 获取当前小时数(0-23)
    this.Minutes = myDate.getMinutes(); // 获取当前分钟数(0-59)
    this.Seconds = myDate.getSeconds(); // 获取当前秒数(0-59)
    this.Milliseconds = myDate.getMilliseconds(); // 获取当前毫秒数(0-999)
    this.LocaleDateString = myDate.toLocaleDateString(); // 获取当前日期
    var mytime = myDate.toLocaleTimeString(); // 获取当前时间
    this.LocaleString = myDate.toLocaleString(); // 获取日期与时间
}

var e = function(selector) {
    return document.querySelector(selector)
}

var eAll = function(selector) {
    return document.querySelectorAll(selector)
}

var appendHtml = function(element, html) {
    element.insertAdjacentHTML('beforeend', html)
}

var bindEvent = function(element, eventName, callback) {
    element.addEventListener(eventName, callback)
}

var bindAll = function(selector, eventName, callback) {
    var elements = document.querySelectorAll(selector)
    for (var i = 0; i < elements.length; i++) {
        var e = elements[i]
        bindEvent(e, eventName, callback)
    }
}

var toggleClass = function(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className)
    } else {
        element.classList.add(className)
    }
}

var removeClassAll = function(className) {
    var selector = '.' + className
    var elements = document.querySelectorAll(selector)
    for (var i = 0; i < elements.length; i++) {
        var e = elements[i]
        e.classList.remove(className)
    }
}

var addClassAll = function(className, addName) {
    var selector = '.' + className
    var elements = document.querySelectorAll(selector)
    for (var i = 0; i < elements.length; i++) {
        var e = elements[i]
        e.classList.add(addName)
    }
}

function removeChildAll(idName) {
    let selector = '#' + className
    let elements = elements.querySelector(selector)
    for (let i = 0; i < elements.childNodes.length; i++) {
        var e = elements.childNodes[i]
        elements.removeChild(e)
    }
}

var removeAll = function(sel) {
    var tags = document.querySelectorAll(sel)
    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i]
        tag.remove()
    }
}
// find 函数可以查找 element 的所有子元素
var find = function(element, selector) {
    return element.querySelector(selector)
}


/*
浏览器窗口的高和宽。使用的时候，有三个地方需要注意：
1）这个函数必须在页面加载完成后才能运行，否则document对象还没生成，浏览器会报错。
2）大多数情况下，都是document.documentElement.clientWidth返回正确值。
但是，在IE6的quirks模式中，document.body.clientWidth返回正确的值，因此函数中加入了对文档模式的判断。
3）clientWidth和clientHeight都是只读属性，不能对它们赋值。
*/
function getViewport() {
    if (document.compatMode == "BackCompat") {　　　　　
        return {　　　　　　　　
            width: document.body.clientWidth,
            height: document.body.clientHeight　　　　　　
        }　　　　
    } else {　　　　　　
        return {　　　　　　　　
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight　　　　　　
        }　　　　
    }　　
}

// 快速排序
var quickSort = function(arr) {　　
    if (arr.length <= 1) {
        return arr
    }　　
    var pivotIndex = Math.floor(arr.length / 2)
    var pivot = arr.splice(pivotIndex, 1)[0]
    var left = []
    var right = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {　　　　　　
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
}


var ckXian = function() {
    var body = document.querySelector('body')
    var style = '<style id="xm" media="screen"> * {outline: 1px red dashed!important} </style>'
    var i = false
    body.addEventListener('keydown', function(event) {
        if (event.keyCode === 77 && event.ctrlKey) {
            if (i) {
                var styletog = document.querySelector('#xm')
                styletog.remove()
                i = false
            } else {
                body.insertAdjacentHTML('afterbegin', style)
                i = true
            }
        }
    })
}() // 加载代码 使用 Ctrl + M 显示参考线

// 定义一个函数， 用于把 数组 写入 localStorage
var save = function(array) {
    var s = JSON.stringify(array)
    localStorage.todos = s
}

// 定义一个函数， 读取 localStorage 中的数据并解析返回
var load = function() {
    var s = localStorage.todos
    return JSON.parse(s)
}

// sleep
function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
}

function shit6(m, n) {
    return (f => f(f))(g => (m, n) => m === 1 ? [n] : g(g)(m - 1, n).concat(n))(m, n)
}
// 显示布局
[...document.querySelectorAll('*')].forEach( element => element.style.outline = `2px #${((Math.random()*0xFFFFFF)>>0).toString(16)} solid` )
[].forEach.call($$("*"),function(a){a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)}) // 
// 自动查找问题
window.onerror = e => window.location = `http://stackoverflow.com/search?q=${e.message}`;
