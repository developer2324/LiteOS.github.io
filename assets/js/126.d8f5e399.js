(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{511:function(t,s,a){t.exports=a.p+"assets/img/result03.2d35bf1b.png"},567:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"范例03（优先级抢占实验）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#范例03（优先级抢占实验）","aria-hidden":"true"}},[this._v("#")]),this._v(" 范例03（优先级抢占实验）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"功能说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#功能说明","aria-hidden":"true"}},[this._v("#")]),this._v(" 功能说明")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{attrs:{class:"token macro property"}},[t._v("#"),a("span",{attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" TASK_PRIO_HI        4")]),t._v("\n"),a("span",{attrs:{class:"token macro property"}},[t._v("#"),a("span",{attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" TASK_PRIO_LO        5")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("注意")]),this._v(" "),s("p",[this._v("Huawei LiteOS 任务优先级最高为 0，最低为 31。这个与 FreeRTOS 正好相反。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"代码讲解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码讲解","aria-hidden":"true"}},[this._v("#")]),this._v(" 代码讲解")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_1-使用-los-taskcreate-创建两个任务，任务优先级分别为-4-和-5；"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用-los-taskcreate-创建两个任务，任务优先级分别为-4-和-5；","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. 使用 "),s("code",[this._v("LOS_TaskCreate")]),this._v(" 创建两个任务，任务优先级分别为 4 和 5；")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-c extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("UINT32 "),a("span",{attrs:{class:"token function"}},[t._v("Example03_Entry")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VOID"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    UINT32 uwRet "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" LOS_OK"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    TSK_INIT_PARAM_S stInitParam "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),a("span",{attrs:{class:"token function"}},[t._v("printf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Example03_Entry\\r\\n"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    stInitParam"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pfnTaskEntry "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Example_TaskHi"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stInitParam"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("usTaskPrio "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" TASK_PRIO_HI"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stInitParam"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pcName "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"TaskHi"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stInitParam"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uwStackSize "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" TASK_STK_SIZE"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stInitParam"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uwArg "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UINT32"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("pcTextForTaskHi"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    uwRet "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("LOS_TaskCreate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("s_uwTskHiID"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("stInitParam"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uwRet "),a("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" LOS_OK"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("printf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Example_TaskHi create Failed!\\r\\n"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" LOS_NOK"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    stInitParam"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pfnTaskEntry "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Example_TaskLo"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stInitParam"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("usTaskPrio "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" TASK_PRIO_LO"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stInitParam"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pcName "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"TaskLo"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    \n    stInitParam"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uwStackSize "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" TASK_STK_SIZE"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stInitParam"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uwArg "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UINT32"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("pcTextForTaskLo"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    uwRet "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("LOS_TaskCreate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("s_uwTskLoID"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("stInitParam"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uwRet "),a("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" LOS_OK"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("printf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Example_TaskLo create Failed!\\r\\n"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" LOS_NOK"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" uwRet"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2-task1-和-task2-周期性打印字符串"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-task1-和-task2-周期性打印字符串","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. "),s("code",[this._v("Task1")]),this._v(" 和 "),s("code",[this._v("Task2")]),this._v(" 周期性打印字符串")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" VOID "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Example_TaskHi")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UINT32 uwArg"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    UINT32 i"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("printf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"%s\\r\\n"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" CHAR "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("uwArg"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" TASK_LOOP_COUNT"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{attrs:{class:"token operator"}},[t._v("++")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("// 占用CPU耗时运行")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" VOID "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Example_TaskLo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UINT32 uwArg"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("volatile")]),t._v(" UINT32 i"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("printf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"%s\\r\\n"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" CHAR "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("uwArg"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" TASK_LOOP_COUNT"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{attrs:{class:"token operator"}},[t._v("++")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("// 占用CPU耗时运行")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"效果演示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#效果演示","aria-hidden":"true"}},[this._v("#")]),this._v(" 效果演示")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:a(511),alt:""}})])}],r=a(0),o=Object(r.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("嵌入式实时操作系统最大特点就是任务优先级管理，高优先级任务被中断触发后，可以打断正在运行中的低优先级任务，在第一时间类完成“最紧急”的任务。")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("我们在"),a("router-link",{attrs:{to:"./example02.html"}},[t._v("范例02")]),t._v("基础上，调整任务优先级，可以观察到高优先级任务会一直抢占 cpu，导致低优先级任务无法执行。")],1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10)])},n,!1,null,null,null);o.options.__file="example03.md";s.default=o.exports}}]);