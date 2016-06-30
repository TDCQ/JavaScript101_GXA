// here is the good Question: http://stackoverflow.com/questions/3437786/get-the-size-of-the-screen-current-web-page-and-browser-window
// 获取各种长与宽(屏幕， 窗口， 页面）
// How can I get windowWidth, windowHeight, pageWidth, pageHeight, screenWidth, 
// screenHeight, pageX, pageY, screenX, screenY which will work in all major browsers?

var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
alert(x + ' × ' + y);
