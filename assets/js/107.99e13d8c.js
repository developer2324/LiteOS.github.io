(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{168:function(t,e,s){t.exports=s.p+"assets/img/terabits-uart-nbiot.0d89b476.png"},354:function(t,e,s){t.exports=s.p+"assets/img/terabits-board.8f9c4b61.png"},355:function(t,e,s){t.exports=s.p+"assets/img/terabits-connected.ad18feed.png"},356:function(t,e,s){t.exports=s.p+"assets/img/sim-card-lock.2e5c6213.png"},357:function(t,e,s){t.exports=s.p+"assets/img/sim-card-pop.7a3013c8.png"},358:function(t,e,s){t.exports=s.p+"assets/img/onebutton-status-result.942a5857.png"},359:function(t,e,s){t.exports=s.p+"assets/img/basic-flow.c508b22b.png"},360:function(t,e,s){t.exports=s.p+"assets/img/terabits-uart-mcu.19c522a5.png"},361:function(t,e,s){t.exports=s.p+"assets/img/usb-serial-ch340.e50ca045.png"},362:function(t,e,s){t.exports=s.p+"assets/img/flymcu-using.a7afa0ee.png"},363:function(t,e,s){t.exports=s.p+"assets/img/qcom-at-nrb.539f6c41.png"},685:function(t,e,s){"use strict";s.r(e);var a=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"步骤1：安装传感器，调试器等外设，对-nb-iot-开发板进行自检"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤1：安装传感器，调试器等外设，对-nb-iot-开发板进行自检","aria-hidden":"true"}},[t._v("#")]),t._v(" 步骤1：安装传感器，调试器等外设，对 NB-IoT 开发板进行自检")]),t._v(" "),a("p",[a("img",{attrs:{src:s(354),alt:"钛比 NB-IoT 开发板"}})]),t._v(" "),a("p",[t._v("基于钛比 NB-IoT 开发板开发 NB-IoT 应用，需要以下组件：")]),t._v(" "),a("ol",[a("li",[t._v("ST-Link v2 烧写器 x 1")]),t._v(" "),a("li",[t._v("移远 BC95 NB-IoT 通讯扣板 x 1")]),t._v(" "),a("li",[t._v("OLED 显示屏 x 1")]),t._v(" "),a("li",[t._v("温湿度传感器 DH11 x 1")]),t._v(" "),a("li",[t._v("光敏传感器 x 1")]),t._v(" "),a("li",[t._v("主控板 x 1")])]),t._v(" "),a("p",[t._v("本开发板基于STM32F103系列芯片，该芯片具有高性能、低功耗等特点。其内核为ARM 32位Cortex™-M3 CPU，最高72MHZ的主频率，256KB的闪存，80个高速IO口以及丰富的通讯接口，芯片尺寸仅为16X16mm。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(355),alt:"钛比 NB-IoT 开发板连接图"}})]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),a("p",[t._v("安装 NB-IoT SIM 卡时，需要仔细观察槽内标签开启或方向提示，请务必确保安装到位后，再进行上电操作。常见卡槽有以下两类：")]),t._v(" "),a("p",[t._v("1）卡扣式")]),t._v(" "),a("p",[a("img",{attrs:{src:s(356),alt:"卡扣式"}})]),t._v(" "),a("p",[t._v("2）弹出式")]),t._v(" "),a("p",[a("img",{attrs:{src:s(357),alt:"弹出式"}})])]),t._v(" "),a("p",[t._v("在此教程场景下，我们无需安装外部传感器，只需要使用一个 LED 灯和一个按键 KEY 即可。当你按下标记有 KEY0 按键， LED0 会被点亮。如果你再按一次，LED0 会熄灭。在 IoT 平台上可以看到如下图所示报警状态。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(358),alt:""}})]),t._v(" "),a("p",[t._v("下图则简单展现了消息交互流程，按键触发报警事件，该消息会先到 IoT 平台，然后再通知给北向 Web 应用。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(359),alt:""}})]),t._v(" "),a("p",[t._v("下面，我们开始验证开发板基本功能：")]),t._v(" "),a("h2",{attrs:{id:"开发板自检"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发板自检","aria-hidden":"true"}},[t._v("#")]),t._v(" 开发板自检")]),t._v(" "),a("ol",[a("li",[t._v("下载并安装 CH340 串口转 USB 驱动，连接 Micro-USB 串口线到 "),a("code",[t._v("MCU_USB")]),t._v(" 接口位置，如下图所示。")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(360),alt:""}})]),t._v(" "),a("p",[t._v("如果串口驱动安装无误，可以在"),a("em",[t._v("设备管理器")]),t._v("看到 Windows 识别出该设备。")]),t._v(" "),a("div",{staticClass:"danger custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("重要")]),t._v(" "),a("p",[t._v("请在连接串口线前，关闭电源。连接好后，再重新开启电源。")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(361),alt:""}})]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("然后打开 FlyMcu USB刷机工具，按照下图烧写 "),a("code",[t._v("horse_race_lamp.hex")]),t._v(" 固件")])]),t._v(" "),a("p",[a("a",{attrs:{href:"/horse_race_lamp.hex"}},[t._v("horse_race_lamp.hex")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(362),alt:""}})]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("如果烧写成功，您将看到开发板上4个流水灯循环闪烁。")])]),t._v(" "),a("p",[a("a",{attrs:{href:"/horse_race_lamp.mp4"}},[t._v("视频")])]),t._v(" "),a("h2",{attrs:{id:"验证-nb-iot-网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证-nb-iot-网络","aria-hidden":"true"}},[t._v("#")]),t._v(" 验证 NB-IoT 网络")]),t._v(" "),a("ol",[a("li",[t._v("Change the Jumper Cap J14, and connect UNIT_USB interface.\nW_TX <-> USB_TXD\nW_RX <-> USB_RXD")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(168),alt:""}})]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Using QCOM and AT Commands to check the NB-IoT connectivity.\nOpen QCOM COM Port Tools, and input these params following Figure 0 9, Select valid COM Port, Baudrate equls 9600, other param use default value. Click Open Port, you will connect PC to NB-IoT EVB.\nAnd then, write “AT+NRB” command, Click Send Command Button, you will see NB-IoT module will be rebooting. When you can see Neul, OK. It means device is OK.")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(363),alt:""}})]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Let us check the NB-IoT connectivity.\nStep by step run these AT commands in the table, you can look around <Quectel_BC95_AT_Commands_Manual_V1.9> in details.")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("AT Commands")]),t._v(" "),a("th",[t._v("Result")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("AT+CGSN=1")]),t._v(" "),a("td",[a("code",[t._v("+CGSN:863703030633395")])]),t._v(" "),a("td",[t._v("Request Product Serial Number Check this number matching your IMEI on your NB-IoT")])]),t._v(" "),a("tr",[a("td",[t._v("AT+NBAND?")]),t._v(" "),a("td",[a("code",[t._v("+NBAND:5")])]),t._v(" "),a("td",[t._v("Get Supported Bands Check the NB-IoT bands matching your SIM cards")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("AT+CSQ")]),t._v(" "),a("td",[a("code",[t._v("+CSQ:16,99")])]),t._v(" "),a("td",[t._v("Get Signal Strength IndicatorIf there is no problem above inspecting, you could check the Singal Strength, the first number is not 99, it means OK.")])]),t._v(" "),a("tr",[a("td",[t._v("AT+CGPADDR")]),t._v(" "),a("td",[a("code",[t._v("+CGPADDR:0,10.42.206.127")])]),t._v(" "),a("td",[t._v("Show PDP Addresses If there is IP address return, it means the NB-IoT connectivity is good.")])])])]),t._v(" "),a("h2",{attrs:{id:"课后思考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#课后思考","aria-hidden":"true"}},[t._v("#")]),t._v(" 课后思考")])])}],r=s(0),o=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},a,!1,null,null,null);o.options.__file="01-inspect-terabits-board.md";e.default=o.exports}}]);