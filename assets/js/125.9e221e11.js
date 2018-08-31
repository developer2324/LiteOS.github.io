(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{510:function(t,s,a){t.exports=a.p+"assets/img/result02.d86c6934.png"},568:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"范例02（任务参数实验）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#范例02（任务参数实验）","aria-hidden":"true"}},[this._v("#")]),this._v(" 范例02（任务参数实验）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("警告")]),this._v(" "),s("p",[this._v("切记任务参数默认是 U32 类型，如果需要传递复杂类型，可以将首地址传递进去。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-c extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" tagTskInitParam\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   TSK_ENTRY_FUNC       pfnTaskEntry"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("/**< Task entrance function */")]),t._v("\n   UINT16               usTaskPrio"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{attrs:{class:"token comment"}},[t._v("/**< Task priority */")]),t._v("\n   UINT32               uwArg"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        "),a("span",{attrs:{class:"token comment"}},[t._v("/**< Task parameters */")]),t._v("\n   UINT32               uwStackSize"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("/**< Task stack size */")]),t._v("\n   CHAR                 "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("pcName"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),a("span",{attrs:{class:"token comment"}},[t._v("/**< Task name */")]),t._v("\n   UINT32               uwResved"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),a("span",{attrs:{class:"token comment"}},[t._v("/**< Reserved */")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" TSK_INIT_PARAM_S"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"功能说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#功能说明","aria-hidden":"true"}},[this._v("#")]),this._v(" 功能说明")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"代码讲解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码讲解","aria-hidden":"true"}},[this._v("#")]),this._v(" 代码讲解")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_1-使用-los-taskcreate-创建两个任务，uwarg-设置为字符串常量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用-los-taskcreate-创建两个任务，uwarg-设置为字符串常量","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. 使用 "),s("code",[this._v("LOS_TaskCreate")]),this._v(" 创建两个任务，"),s("code",[this._v("uwArg")]),this._v(" 设置为字符串常量")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-c extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("UINT32 "),a("span",{attrs:{class:"token function"}},[t._v("Example02_Entry")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VOID"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    UINT32 uwRet "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" LOS_OK"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    TSK_INIT_PARAM_S stInitParam "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),a("span",{attrs:{class:"token function"}},[t._v("printf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Example02_Entry\\r\\n"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    stInitParam"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pfnTaskEntry "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Example_Task"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stInitParam"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("usTaskPrio "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" TASK_DEFAULT_PRIO"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stInitParam"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pcName "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Task1"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stInitParam"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uwStackSize "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" TASK_STK_SIZE"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stInitParam"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uwArg "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UINT32"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("pcTextForTask1"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    uwRet "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("LOS_TaskCreate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("s_uwTskID1"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("stInitParam"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uwRet "),a("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" LOS_OK"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("printf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Example_Task1 create Failed!\\r\\n"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" LOS_NOK"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    stInitParam"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pfnTaskEntry "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Example_Task"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stInitParam"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("usTaskPrio "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" TASK_DEFAULT_PRIO"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stInitParam"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pcName "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Task2"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stInitParam"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uwStackSize "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" TASK_STK_SIZE"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stInitParam"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uwArg "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UINT32"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("pcTextForTask2"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    uwRet "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("LOS_TaskCreate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("s_uwTskID2"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("stInitParam"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uwRet "),a("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" LOS_OK"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("printf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Example_Task2 create Failed!\\r\\n"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" LOS_NOK"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" uwRet"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"2"}},[s("li",[this._v("两个任务复用同一个执行函数，同时将入参 "),s("code",[this._v("uwArg")]),this._v(" 字符串打印出来")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" VOID "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Example_Task")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UINT32 uwArg"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    UINT32 i"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("printf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"%s\\r\\n"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" CHAR "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("uwArg"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" TASK_LOOP_COUNT"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{attrs:{class:"token operator"}},[t._v("++")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("// 占用CPU耗时运行")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"效果演示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#效果演示","aria-hidden":"true"}},[this._v("#")]),this._v(" 效果演示")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:a(510),alt:""}})])}],r=a(0),e=Object(r.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("很多时候不同任务的处理流程是基本相同的，那么可以复用一套函数模板来进行业务处理。这时候任务参数就能够让调用者区分是何种任务了。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),a("p",[t._v("基本同"),a("router-link",{attrs:{to:"./example01.html"}},[t._v("范例01")]),t._v("，两个任务复用同一个入口函数。")],1),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10)])},n,!1,null,null,null);e.options.__file="example02.md";s.default=e.exports}}]);