(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{518:function(t,s,a){t.exports=a.p+"assets/img/result10.86517032.png"},560:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"范例10（定时器基本应用实验）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#范例10（定时器基本应用实验）","aria-hidden":"true"}},[t._v("#")]),t._v(" 范例10（定时器基本应用实验）")]),t._v(" "),n("p",[t._v("定时器应用，创建两种类型定时器，一个是一次性的，一个是周期性的。")]),t._v(" "),n("h2",{attrs:{id:"功能说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#功能说明","aria-hidden":"true"}},[t._v("#")]),t._v(" 功能说明")]),t._v(" "),n("h2",{attrs:{id:"代码讲解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码讲解","aria-hidden":"true"}},[t._v("#")]),t._v(" 代码讲解")]),t._v(" "),n("h3",{attrs:{id:"_1-创建两个软定时器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建两个软定时器","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 创建两个软定时器")]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[t._v("UINT32 "),n("span",{attrs:{class:"token function"}},[t._v("Example10_Entry")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VOID"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    UINT32 uwRet "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" LOS_OK"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),n("span",{attrs:{class:"token function"}},[t._v("printf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"Example10_Entry\\r\\n"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    uwRet "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("LOS_SwtmrCreate")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                ONLYONCE_TIMER_VALUE"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                LOS_SWTMR_MODE_ONCE"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                Timer1_Callback"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("s_usSwTmrID1"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UINT32"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("pcTextForTimer1\n"),n("span",{attrs:{class:"token macro property"}},[t._v("#"),n("span",{attrs:{class:"token directive keyword"}},[t._v("if")]),t._v(" (LOSCFG_BASE_CORE_SWTMR_ALIGN == YES)")]),t._v("\n                "),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" OS_SWTMR_ROUSES_ALLOW"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                OS_SWTMR_ALIGN_SENSITIVE \n"),n("span",{attrs:{class:"token macro property"}},[t._v("#"),n("span",{attrs:{class:"token directive keyword"}},[t._v("endif")])]),t._v("\n                "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LOS_OK "),n("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" uwRet"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token function"}},[t._v("printf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"create Timer1 failed.\\r\\n"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" LOS_NOK"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    uwRet "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("LOS_SwtmrCreate")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                PERIODIC_TIMER_VALUE"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                LOS_SWTMR_MODE_PERIOD"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                Timer2_Callback"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("s_usSwTmrID2"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UINT32"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("pcTextForTimer2\n"),n("span",{attrs:{class:"token macro property"}},[t._v("#"),n("span",{attrs:{class:"token directive keyword"}},[t._v("if")]),t._v(" (LOSCFG_BASE_CORE_SWTMR_ALIGN == YES)")]),t._v("\n                "),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" OS_SWTMR_ROUSES_ALLOW"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                OS_SWTMR_ALIGN_SENSITIVE \n"),n("span",{attrs:{class:"token macro property"}},[t._v("#"),n("span",{attrs:{class:"token directive keyword"}},[t._v("endif")])]),t._v("\n                "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LOS_OK "),n("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" uwRet"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token function"}},[t._v("printf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"create Timer1 failed.\\r\\n"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" LOS_NOK"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    uwRet "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("LOS_SwtmrStart")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s_usSwTmrID1"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LOS_OK "),n("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" uwRet"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token function"}},[t._v("printf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"Start Timer1 failed.\\r\\n"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" LOS_NOK"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    uwRet "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("LOS_SwtmrStart")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s_usSwTmrID2"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LOS_OK "),n("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" uwRet"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token function"}},[t._v("printf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"Start Timer2 failed.\\r\\n"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" LOS_NOK"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" uwRet"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"_2-定时器超时回调函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-定时器超时回调函数","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 定时器超时回调函数")]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("Timer1_Callback")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UINT32 uwArg"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    UINT32 tick_last"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("printf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"%s\\r\\n"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" CHAR "),n("span",{attrs:{class:"token operator"}},[t._v("*")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("uwArg"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    tick_last "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UINT32"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token function"}},[t._v("LOS_TickCountGet")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("printf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"tick_last1=%lu.\\r\\n"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("tick_last"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("Timer2_Callback")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UINT32 uwArg"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    UINT32 tick_last"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" UINT32 count"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("printf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"%s\\r\\n"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" CHAR "),n("span",{attrs:{class:"token operator"}},[t._v("*")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("uwArg"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    tick_last "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UINT32"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token function"}},[t._v("LOS_TickCountGet")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("printf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"tick_last2=%lu.\\r\\n"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("tick_last"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{attrs:{class:"token function"}},[t._v("printf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"%d\\r\\n"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" count"),n("span",{attrs:{class:"token operator"}},[t._v("++")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"效果演示"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#效果演示","aria-hidden":"true"}},[t._v("#")]),t._v(" 效果演示")]),t._v(" "),n("p",[n("img",{attrs:{src:a(518),alt:""}})])])}],o=a(0),_=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);_.options.__file="example10.md";s.default=_.exports}}]);