"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?2153402fe5add2d3bdd3c42ecdda83b2") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?2153402fe5add2d3bdd3c42ecdda83b2#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?2153402fe5add2d3bdd3c42ecdda83b2") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?2153402fe5add2d3bdd3c42ecdda83b2#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?2153402fe5add2d3bdd3c42ecdda83b2") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?2153402fe5add2d3bdd3c42ecdda83b2#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?2153402fe5add2d3bdd3c42ecdda83b2") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?2153402fe5add2d3bdd3c42ecdda83b2#vusion-icon-font") format("svg");\n}'},webpackJsonp([34],{512:function(t,s,a){var e="ICON-FONT-FILE-STYLE";function n(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function l(t){var s=document.createElement("style"),a=document.getElementsByTagName("head")[0];s.innerHTML=n(t),s.id=e,s.type="text/css",a?a.appendChild(s):window.addEventListener("load",function(){a.appendChild(s)})}t.exports=function(){window.HAS_CREATE_FONT_STYLE||(l(),window.HAS_CREATE_FONT_STYLE=!0)}},566:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={data:function(){return{date:"2014-12-01"}},methods:{change:function(t){console.log(t)},select:function(t){console.log(t)},toggle:function(t){console.log(t.open)}},watch:{date:function(t){console.log(t)}}},n={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("u-date-picker",{attrs:{time:"morning","year-diff":"1","year-add":"5",date:t.date},on:{"update:date":function(s){t.date=s},change:t.change,select:t.select,toggle:function(s){t.toggle(s)}}},[t._v("Modal")])},staticRenderFns:[]},l={components:{Ce0f756:a(0)(e,n,!1,null,null,null).exports}},r={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("u-article",[a("h1",[t._v("日期选择 DatePicker")]),a("h2",[t._v("示例")]),a("h3",[t._v("基本形式")]),a("h4",[t._v("声明式")]),a("h3",[t._v("基本")]),a("div",{staticClass:"u-example"},[a("div",[a("u-date-picker",{attrs:{date:"2018-08-08",alignment:"right"}})],1)]),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-date-picker")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("date")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"2018-08-08"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("alignment")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"right"')]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-date-picker")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n")])]),a("h3",[t._v("基本")]),a("div",{staticClass:"u-example"},[a("u-date-picker")],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-date-picker")]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-date-picker")]),t._v(">")]),t._v("\n")])]),a("h3",[t._v("最大值maxDate 最小值minDate")]),a("div",{staticClass:"u-example"},[a("u-date-picker",{attrs:{date:"2018-08-08","min-date":"2018-08-06","max-date":"2018-08-18"}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-date-picker")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("date")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"2018-08-08"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("min-date")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"2018-08-06"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("max-date")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"2018-08-18"')]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-date-picker")]),t._v(">")]),t._v("\n")])]),a("h3",[t._v("禁用")]),a("div",{staticClass:"u-example"},[a("u-date-picker",{attrs:{disabled:"",date:"2018-08-08","min-date":"2017-08-08","max-date":"2019-08-08"}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-date-picker")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("disabled")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("date")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"2018-08-08"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("min-date")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"2017-08-08"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("max-date")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"2019-08-08"')]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-date-picker")]),t._v(">")]),t._v("\n")])]),a("h3",[t._v("获取改变值方法 change select")]),a("div",{staticClass:"u-example"},[a("Ce0f756")],1),a("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-date-picker")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("time")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"morning"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("year-diff")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"1"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("year-add")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"5"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":date.sync")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"date"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("@change")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"change"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("@select")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"select"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("@toggle")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"toggle($event)"')]),t._v(">")]),t._v("Modal"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-date-picker")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{attrs:{class:"javascript"}},[t._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n\tdata(){\n\t\t"),a("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n\t\t\t"),a("span",{attrs:{class:"hljs-attr"}},[t._v("date")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'2014-12-01'")]),t._v(",\n\t\t}\n\t},\n    "),a("span",{attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n        change(newVal) {\n            "),a("span",{attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(newVal);\n        },\n        select(newVal) {\n        \t"),a("span",{attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(newVal);\n        },\n        toggle(event) {\n        \t"),a("span",{attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(event.open);\n        }\n    },\n    "),a("span",{attrs:{class:"hljs-attr"}},[t._v("watch")]),t._v(": {\n        date(newValue) {\n            "),a("span",{attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(newValue);\n        },\n    },\n};\n")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])]),a("h2",[t._v("DatePicker API")]),a("h3",[t._v("Attrs/Props")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Attr/Prop")]),a("th",[t._v("Type")]),a("th",[t._v("Default")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("date")]),a("td",[t._v("String,Number,Date")]),a("td"),a("td",[t._v("初始日期值")])]),a("tr",[a("td",[t._v("minDate")]),a("td",[t._v("String,Number,Date")]),a("td"),a("td",[t._v("最小日期")])]),a("tr",[a("td",[t._v("maxDate")]),a("td",[t._v("String,Number,Date")]),a("td"),a("td",[t._v("最大日期")])]),a("tr",[a("td",[t._v("readonly")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("是否只读")])]),a("tr",[a("td",[t._v("disabled")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("是否禁用")])]),a("tr",[a("td",[t._v("autofocus")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("文本框默认处于focus")])]),a("tr",[a("td",[t._v("placeholder")]),a("td",[t._v("String")]),a("td",[a("code",{pre:!0},[t._v("请输入")])]),a("td",[t._v("文本框默认提示")])]),a("tr",[a("td",[t._v("alignment")]),a("td",[t._v("String")]),a("td",[a("code",{pre:!0},[t._v("left")])]),a("td",[t._v("日历弹窗对其方式，可选值：left, right")])]),a("tr",[a("td",[t._v("time")]),a("td",[t._v("String, Number")]),a("td",[a("code",{pre:!0},[t._v("start")])]),a("td",[t._v("设置返回的日期的时分秒值，可选值为start,表示时分秒是0:00:00,morning:时分秒为8:00:00,end:表示时分秒为: 23:59:59, 输入整数表示对应的整数时刻，例如输入9代表时分秒为9:00:00,自定义时分秒请输入对应格式的字符串即可")])]),a("tr",[a("td",[t._v("yeadDiff")]),a("td",[t._v("String, Number")]),a("td",[t._v("3")]),a("td",[t._v("当前年份前几年")])]),a("tr",[a("td",[t._v("yearAdd")]),a("td",[t._v("String, Number")]),a("td",[t._v("1")]),a("td",[t._v("当前年份后几年")])])])])])},staticRenderFns:[]},d=a(0)(l,r,!1,null,null,null);s.default=d.exports}});