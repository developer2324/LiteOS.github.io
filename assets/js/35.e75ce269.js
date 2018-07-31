(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{458:function(t,_,v){"use strict";v.r(_);var d=v(0),e=Object(d.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("div",{staticClass:"content"},[v("h1",{attrs:{id:"信号量错误码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#信号量错误码","aria-hidden":"true"}},[t._v("#")]),t._v(" 信号量错误码")]),v("p",[t._v("对可能导致信号量操作失败的情况，包括创建信号量、申请信号量、释放信号量、删除信号量等，均需要返回对应的错误码，以便快速定位错误原因。")]),v("table",[v("thead",[v("tr",[v("th",[t._v("序号")]),v("th",[t._v("定义")]),v("th",[t._v("实际数值")]),v("th",[t._v("描述")]),v("th",[t._v("参考解决方案")])])]),v("tbody",[v("tr",[v("td",[t._v("1")]),v("td",[v("code",[t._v("LOS_ERRNO_SEM_NO_MEMORY")])]),v("td",[t._v("0x02000700")]),v("td",[t._v("内存空间不足")]),v("td",[t._v("分配更大的内存分区")])]),v("tr",[v("td",[t._v("2")]),v("td",[v("code",[t._v("LOS_ERRNO_SEM_INVALID")])]),v("td",[t._v("0x02000701")]),v("td",[t._v("非法传参")]),v("td",[t._v("改变传数为合法值")])]),v("tr",[v("td",[t._v("3")]),v("td",[v("code",[t._v("LOS_ERRNO_SEM_PTR_NULL")])]),v("td",[t._v("0x02000702")]),v("td",[t._v("传入空指针")]),v("td",[t._v("传入合法指针")])]),v("tr",[v("td",[t._v("4")]),v("td",[v("code",[t._v("LOS_ERRNO_SEM_ALL_BUSY")])]),v("td",[t._v("0x02000703")]),v("td",[t._v("信号量控制块不可用")]),v("td",[t._v("释放资源信号量资源")])]),v("tr",[v("td",[t._v("5")]),v("td",[v("code",[t._v("LOS_ERRNO_SEM_UNAVAILABLE")])]),v("td",[t._v("0x02000704")]),v("td",[t._v("定时时间非法")]),v("td",[t._v("传入正确的定时时间")])]),v("tr",[v("td",[t._v("6")]),v("td",[v("code",[t._v("LOS_ERRNO_SEM_PEND_INTERR")])]),v("td",[t._v("0x02000705")]),v("td",[t._v("中断期间非法调用LOS_SemPend")]),v("td",[t._v("中断期间禁止调用LOS_SemPend")])]),v("tr",[v("td",[t._v("7")]),v("td",[v("code",[t._v("LOS_ERRNO_SEM_PEND_IN_LOCK")])]),v("td",[t._v("0x02000706")]),v("td",[t._v("任务被锁，无法获得信号量")]),v("td",[t._v("在任务被锁时，不能调用LOS_SemPend")])]),v("tr",[v("td",[t._v("8")]),v("td",[v("code",[t._v("LOS_ERRNO_SEM_TIMEOUT")])]),v("td",[t._v("0x02000707")]),v("td",[t._v("获取信号量时间超时")]),v("td",[t._v("将时间设置在合理范围内")])]),v("tr",[v("td",[t._v("9")]),v("td",[v("code",[t._v("LOS_ERRNO_SEM_OVERFLOW")])]),v("td",[t._v("0x02000708")]),v("td",[t._v("信号量允许pend次数超过最大值")]),v("td",[t._v("传入合法的值")])]),v("tr",[v("td",[t._v("10")]),v("td",[v("code",[t._v("LOS_ERRNO_SEM_PENDED")])]),v("td",[t._v("0x02000709")]),v("td",[t._v("等待信号量的任务队列不为空")]),v("td",[t._v("唤醒所有等待该型号量的任务后删除该信号量")])])])]),v("p",[v("strong",[t._v("错误码定义：")]),t._v(" 错误码是一个32位的存储单元，31~24位表示错误等级，23~16位表示错误码标志，15~8位代表错误码所属模块，7~0位表示错误码序号，如下")]),v("div",{staticClass:"language-c extra-class"},[v("pre",{pre:!0,attrs:{class:"language-c"}},[v("code",[v("span",{attrs:{class:"token macro property"}},[t._v("#"),v("span",{attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" LOS_ERRNO_OS_NORMAL(MID,ERRNO)  \\\n(LOS_ERRTYPE_NORMAL | LOS_ERRNO_OS_ID | ((UINT32)(MID) << 8) | (ERRNO))")]),t._v("\n")])])]),v("div",{staticClass:"tip custom-block"},[v("p",{staticClass:"custom-block-title"},[t._v("说明")]),v("ul",[v("li",[v("code",[t._v("LOS_ERRTYPE_NORMAL")]),t._v(" ：Define the error level as critical")]),v("li",[v("code",[t._v("LOS_ERRNO_OS_ID")]),t._v(" ：OS error code flag.")]),v("li",[v("code",[t._v("MID")]),t._v(" ：OS_MOUDLE_ID")]),v("li",[v("code",[t._v("ERRNO")]),t._v(" ：error ID number")])]),v("div",{staticClass:"language-c extra-class"},[v("pre",{pre:!0,attrs:{class:"language-c"}},[v("code",[t._v("LOS_ERRNO_SEM_NO_MEMORY        "),v("span",{attrs:{class:"token function"}},[t._v("LOS_ERRNO_OS_ERROR")]),v("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LOS_MOD_SEM"),v("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),v("span",{attrs:{class:"token number"}},[t._v("0x00")]),v("span",{attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n")])])])])])}],!1,null,null,null);_.default=e.exports}}]);