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


//IP转成整型
function _ip2int(ip) {
    var num = 0;
    ip = ip.split(".");
    num = Number(ip[0]) * 256 * 256 * 256 + Number(ip[1]) * 256 * 256 + Number(ip[2]) * 256 + Number(ip[3]);
    num = num >>> 0;
    return num;
}
//整型解析为IP地址
function _int2iP(num) {
    var str;
    var tt = new Array();
    tt[0] = (num >>> 24) >>> 0;
    tt[1] = ((num << 8) >>> 24) >>> 0;
    tt[2] = (num << 16) >>> 24;
    tt[3] = (num << 24) >>> 24;
    str = String(tt[0]) + "." + String(tt[1]) + "." + String(tt[2]) + "." + String(tt[3]);
    return str;
}

// 从 0 - count 随机生成 maxSize 个不重复的偶数
const _random = function(count, maxSize) {
    count >>= 1;
    const mySet = new Set();
    if (count < maxSize) {
        maxSize = count;
    }
    while (mySet.size < maxSize) {
        const num = Math.floor((Math.random() * 10) % count);
        mySet.add(num << 1);
    }
    return Array.from(mySet);
};

// 设置私有属性
class Shape {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }
  get area() {
    return this._width * this._height;
  }
}

const handler = {
  get: function(target, key) {
    if (key[0] === '_') {
      throw new Error('Attempt to access private property');
    }
    return target[key];
  },
  set: function(target, key, value) {
    if (key[0] === '_') {
      throw new Error('Attempt to access private property');
    }
    target[key] = value;
  }
}

const square = new Proxy(new Shape(10, 10), handler);
console.log(square.area);             // 100
console.log(square instanceof Shape); // true
square._width = 200;  
https://juejin.im/post/5a8e9b6d5188257a5f1ed826


class NextTickQueue {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(v) {
        const entry = { data: v, next: null }
        if (this.length > 0) this.tail.next = entry
        else this.head = entry
        this.tail = entry
        ++this.length
    }

    shift() {
        if (this.length === 0) return
        const ret = this.head.data
        if (this.length === 1) this.head = this.tail = null
        else this.head = this.head.next
        --this.length
        return ret
    }

    clear() {
        this.head = null
        this.tail = null
        this.length = 0
    }
}
//-----------------------------------------------------------------------------
// base64 decoder
// see http://sourceforge.net/projects/libb64/
//-----------------------------------------------------------------------------
var libb64 = {};
libb64.decodeB64 = function(str) {
  var c, decoded, fragment, i, op, n, table_length, v, il;
  var table = [
    62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1,
    -1, -1, -2, -1, -1, -1,  0,  1,  2,  3,  4,  5,  6,  7,  8,  9,
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
    -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
    36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51
  ];
  table_length = table.length;
  decoded = new Array((((table_length + 2) / 3) | 0) * 4);
  c = n = op = 0;

  for (i = 0, il = str.length; i < il; ++i) {
    v = (str.charCodeAt(i) & 0xff) - 43;
    if (v < 0 || v >= table_length) {
      continue;
    }
    fragment = table[v];
    if (fragment < 0) {
      continue;
    }
    switch (n) {
      case 0:
        c = (fragment & 0x03f) << 2;
        ++n;
        break;
      case 1:
        c |= (fragment & 0x030) >> 4;
        decoded[op++] = c;
        c = (fragment & 0x00f) << 4;
        ++n;
        break;
      case 2:
        c |= (fragment & 0x03c) >> 2;
        decoded[op++] = c;
        c = (fragment & 0x003) << 6;
        ++n;
        break;
      case 3:
        c |= fragment & 0x03f;
        decoded[op++] = c;
        n = 0;
    }
  }
  decoded.length = op;

  return decoded;
}
libb64.encodeBase64 = function(arr)
{
    var map="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"; //Base64从0到63的对应编码字符集
    var buffer=0,result="";

    for(var i=0;i<arr.length;i++)
    {
        buffer=(buffer<<8)+arr[i];
        if(i%3==2) //每3个字节处理1次
        {
            result+=map.charAt(buffer>>18)+map.charAt(buffer>>12&0x3f)+map.charAt(buffer>>6&0x3f)+map.charAt(buffer&0x3f);
            buffer=0;
        }
    } //3的整数倍的字节已处理完成，剩余的字节仍存放于buffer中
    if(arr.length%3==1) //剩余1个字节
        result+=map.charAt(buffer>>2)+map.charAt(buffer<<4&0x3f)+"==";
    else if(arr.length%3==2) //剩余2个字节
        result+=map.charAt(buffer>>10)+map.charAt(buffer>>4&0x3f)+map.charAt(buffer<<2&0x3f)+"=";
    return result;
}


var utf8 = {}

utf8.toByteArray = function(str) {
    var byteArray = [];
    for (var i = 0; i < str.length; i++)
        if (str.charCodeAt(i) <= 0x7F)
            byteArray.push(str.charCodeAt(i));
        else {
            var h = encodeURIComponent(str.charAt(i)).substr(1).split('%');
            for (var j = 0; j < h.length; j++)
                byteArray.push(parseInt(h[j], 16));
        }
    return byteArray;
};

utf8.unserializeByteArray = function(arr) {
    var str = '';
    for (var i = 0; i < arr.length; i++) {
        var value = arr[i];
        if (value <= 0x7F) {
           str += String.fromCharCode(value);
        }  else {
            var hex = value.toString(16);
            str += '%'+hex;
        }
    }
    return decodeURIComponent(str);
}

utf8.parse = function(byteArray) {
    var str = '';
    for (var i = 0; i < byteArray.length; i++)
        str +=  byteArray[i] <= 0x7F?
            byteArray[i] === 0x25 ? "%25" : // %
                String.fromCharCode(byteArray[i]) :
            "%" + byteArray[i].toString(16).toUpperCase();
    return decodeURIComponent(str);
};
/**
 * Created by star on 2014/7/25.
 */
// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
Date.prototype.Format = function(fmt) { //author: meizz
    var o = {
        "M+" : this.getMonth()+1,                 //月份
        "d+" : this.getDate(),                    //日
        "h+" : this.getHours(),                   //小时
        "m+" : this.getMinutes(),                 //分
        "s+" : this.getSeconds(),                 //秒
        "q+" : Math.floor((this.getMonth()+3)/3), //季度
        "S"  : this.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(fmt))
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    for(var k in o)
        if(new RegExp("("+ k +")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    return fmt;
};

/*
 *  方法:Array.remove(dx)
 *  功能:根据元素值删除数组元素.
 *  参数:元素值
 *  返回:在原数组上修改数组
 *	作者：pxp
 */
Array.prototype.indexOf = function (val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) {
            return i;
        }
    }
    return -1;
};
Array.prototype.removevalue = function (val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};


/*
 *  方法:Array.remove(dx)
 *  功能:根据元素位置值删除数组元素.
 *  参数:元素值
 *  返回:在原数组上修改数组
 *	作者：pxp
 */
Array.prototype.remove = function (dx) {
    if (isNaN(dx) || dx > this.length) {
        return false;
    }
    for (var i = 0, n = 0; i < this.length; i++) {
        if (this[i] != this[dx]) {
            this[n++] = this[i];
        }
    }
    this.length -= 1;
};

/**
 * 用于实现页面 Map 对象，Key只能是String，对象随意
 * @constructor
 */
function Map(){
    this._entrys = new Array();

    this.put = function(key, value){
        if (key == null || key == undefined) {
            return;
        }
        var index = this._getIndex(key);
        if (index == -1) {
            var entry = new Object();
            entry.key = key;
            entry.value = value;
            this._entrys[this._entrys.length] = entry;
        }else{
            this._entrys[index].value = value;
        }
    };
    this.get = function(key){
        var index = this._getIndex(key);
        return (index != -1) ? this._entrys[index].value : null;
    };
    this.remove = function(key){
        var index = this._getIndex(key);
        if (index != -1) {
            this._entrys.splice(index, 1);
        }
    };
    this.clear = function(){
        this._entrys = [];
    };
    this.contains = function(key){
        var index = this._getIndex(key);
        return (index != -1) ? true : false;
    };
    this.getCount = function(){
        return this._entrys.length;
    };
    this.getEntrys =  function(){
        return this._entrys;
    };
    this._getIndex = function(key){
        if (key == null || key == undefined) {
            return -1;
        }
        var _length = this._entrys.length;
        for (var i = 0; i < _length; i++) {
            var entry = this._entrys[i];
            if (entry == null || entry == undefined) {
                continue;
            }
            if (entry.key === key) {//equal
                return i;
            }
        }
        return -1;
    };
}
