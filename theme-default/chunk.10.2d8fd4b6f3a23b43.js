"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?2153402fe5add2d3bdd3c42ecdda83b2") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?2153402fe5add2d3bdd3c42ecdda83b2#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?2153402fe5add2d3bdd3c42ecdda83b2") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?2153402fe5add2d3bdd3c42ecdda83b2#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?2153402fe5add2d3bdd3c42ecdda83b2") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?2153402fe5add2d3bdd3c42ecdda83b2#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?2153402fe5add2d3bdd3c42ecdda83b2") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?2153402fe5add2d3bdd3c42ecdda83b2#vusion-icon-font") format("svg");\n}'},webpackJsonp([10],{512:function(s,a,t){var n="ICON-FONT-FILE-STYLE";function l(s){return(s||window.ICON_FONT_STYLE).styleContent||""}function r(s){var a=document.createElement("style"),t=document.getElementsByTagName("head")[0];a.innerHTML=l(s),a.id=n,a.type="text/css",t?t.appendChild(a):window.addEventListener("load",function(){t.appendChild(a)})}s.exports=function(){window.HAS_CREATE_FONT_STYLE||(r(),window.HAS_CREATE_FONT_STYLE=!0)}},553:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={data:function(){return{data:[{text:"苹果",value:"A"},{text:"香蕉",value:"B",disabled:!0},{text:"蛋糕",value:"C"}],value:"A"}},watch:{value:function(s){console.log(s)}}},l={render:function(){var s=this,a=s.$createElement;return(s._self._c||a)("u-suggest",{attrs:{data:s.data,value:s.value},on:{"update:value":function(a){s.value=a}}})},staticRenderFns:[]},r={data:function(){return{data:[{text:"absd",value:"A"},{text:"hjk",value:"B"},{text:"nmmb",value:"C"}],value:"A"}},watch:{value:function(s){console.log(s)}}},v={render:function(){var s=this,a=s.$createElement;return(s._self._c||a)("u-suggest",{attrs:{data:s.data,match:"",value:s.value},on:{"update:value":function(a){s.value=a}}})},staticRenderFns:[]},e={data:function(){return{data:[],value:"",list:["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New hampshire","New jersey","New mexico","New york","North carolina","North dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode island","South carolina","South dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West virginia","Wisconsin","Wyoming"],loading:!1}},watch:{value:function(s){console.log(s)}},methods:{filterMethod:function(s){var a=this;""!==s&&(this.loading=!0,setTimeout(function(){var t=a.list.map(function(s){return{value:s,text:s}});a.data=t.filter(function(a){return a.text.toLowerCase().indexOf(s.toLowerCase())>-1}),a.loading=!1},200))}}},_={render:function(){var s=this,a=s.$createElement;return(s._self._c||a)("u-suggest",{attrs:{data:s.data,remote:"",loading:s.loading,value:s.value,"filter-method":s.filterMethod},on:{"update:value":function(a){s.value=a}}})},staticRenderFns:[]},c={components:{C98e1e8:t(0)(n,l,!1,null,null,null).exports,Ca08d18:t(0)(r,v,!1,null,null,null).exports,C848b35:t(0)(e,_,!1,null,null,null).exports}},i={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("u-article",[t("h1",[s._v("选择框 Suggest")]),t("h2",[s._v("示例")]),t("h3",[s._v("基本形式")]),t("div",{staticClass:"u-example"},[t("C98e1e8")],1),t("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-suggest")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"data"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":value.sync")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-suggest")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": [\n                { "),t("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'苹果'")]),s._v(", "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'A'")]),s._v(" },\n                { "),t("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'香蕉'")]),s._v(", "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'B'")]),s._v(", "),t("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(" },\n                { "),t("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'蛋糕'")]),s._v(", "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'C'")]),s._v(" },\n            ],\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'A'")]),s._v(",\n        };\n    },\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("watch")]),s._v(": {\n        value(newValue) {\n            "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(newValue)\n        }\n    }\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])]),t("h4",[s._v("区分大小写")]),t("div",{staticClass:"u-example"},[t("Ca08d18")],1),t("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-suggest")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"data"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("match")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":value.sync")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-suggest")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": [\n                { "),t("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'absd'")]),s._v(", "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'A'")]),s._v(" },\n                { "),t("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'hjk'")]),s._v(", "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'B'")]),s._v(", },\n                { "),t("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'nmmb'")]),s._v(", "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'C'")]),s._v(" },\n            ],\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'A'")]),s._v(",\n        };\n    },\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("watch")]),s._v(": {\n        value(newValue) {\n            "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(newValue)\n        }\n    }\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])]),t("h4",[s._v("执行异步更新操作")]),t("div",{staticClass:"u-example"},[t("C848b35")],1),t("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-suggest")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"data"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("remote")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":loading")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"loading"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":value.sync")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":filter-method")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"filterMethod"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-suggest")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": [],\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("''")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("list")]),s._v(": ["),t("span",{attrs:{class:"hljs-string"}},[s._v("'Alabama'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Alaska'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Arizona'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Arkansas'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'California'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Colorado'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Connecticut'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Delaware'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Florida'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Georgia'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Hawaii'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Idaho'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Illinois'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Indiana'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Iowa'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Kansas'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Kentucky'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Louisiana'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Maine'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Maryland'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Massachusetts'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Michigan'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Minnesota'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Mississippi'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Missouri'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Montana'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Nebraska'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Nevada'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'New hampshire'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'New jersey'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'New mexico'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'New york'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'North carolina'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'North dakota'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Ohio'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Oklahoma'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Oregon'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Pennsylvania'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Rhode island'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'South carolina'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'South dakota'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Tennessee'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Texas'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Utah'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Vermont'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Virginia'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Washington'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'West virginia'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Wisconsin'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Wyoming'")]),s._v("],\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("loading")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n        };\n    },\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("watch")]),s._v(": {\n        value(newValue) {\n            "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(newValue)\n        }\n    },\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n        filterMethod(query) {\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (query !== "),t("span",{attrs:{class:"hljs-string"}},[s._v("''")]),s._v(") {\n                "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".loading = "),t("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(";\n                setTimeout("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n                    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" list = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".list.map("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("item")]),s._v(" =>")]),s._v(" {\n                        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n                            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": item,\n                            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": item\n                        };\n                    });\n                    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".data = list.filter("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("item")]),s._v(" =>")]),s._v(" item.text.toLowerCase().indexOf(query.toLowerCase()) > "),t("span",{attrs:{class:"hljs-number"}},[s._v("-1")]),s._v(");\n                    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".loading = "),t("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(";\n                }, "),t("span",{attrs:{class:"hljs-number"}},[s._v("200")]),s._v(");\n            }\n        }\n    }\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])]),t("h2",[s._v("Suggest API")]),t("h3",[s._v("Attrs/Props")]),t("table",[t("thead",[t("tr",[t("th",[s._v("Attr/Prop")]),t("th",[s._v("Type")]),t("th",[s._v("Default")]),t("th",[s._v("Description")])])]),t("tbody",[t("tr",[t("td",[s._v("data")]),t("td",[s._v("Array<{ text, value }>")]),t("td"),t("td",[s._v("Data书写方式中的数据列表")])]),t("tr",[t("td",[s._v("value.sync, v-model")]),t("td",[s._v("Any")]),t("td"),t("td",[s._v("当前选择的值")])]),t("tr",[t("td",[s._v("field")]),t("td",[s._v("String")]),t("td",[t("code",{pre:!0},[s._v("'text'")])]),t("td",[s._v("显示文本字段")])]),t("tr",[t("td",[s._v("readonly")]),t("td",[s._v("Boolean")]),t("td",[t("code",{pre:!0},[s._v("false")])]),t("td",[s._v("是否只读")])]),t("tr",[t("td",[s._v("disabled")]),t("td",[s._v("Boolean")]),t("td",[t("code",{pre:!0},[s._v("false")])]),t("td",[s._v("是否禁用")])]),t("tr",[t("td",[s._v("match")]),t("td",[s._v("Boolean")]),t("td",[t("code",{pre:!0},[s._v("false")])]),t("td",[s._v("是否区分大小写，默认不区分大小写")])]),t("tr",[t("td",[s._v("loading")]),t("td",[s._v("Boolean")]),t("td",[t("code",{pre:!0},[s._v("false")])]),t("td",[s._v("配合异步获取显示加载中的样式")])]),t("tr",[t("td",[s._v("loadText")]),t("td",[s._v("String")]),t("td",[t("code",{pre:!0},[s._v("加载中")])]),t("td",[s._v("loading状态显示的文本")])]),t("tr",[t("td",[s._v("remote")]),t("td",[s._v("Boolean")]),t("td",[t("code",{pre:!0},[s._v("false")])]),t("td",[s._v("是否异步获取数据，适用于数据从服务端获取")])]),t("tr",[t("td",[s._v("filterMethod")]),t("td",[s._v("Funtion")]),t("td"),t("td",[s._v("自定义过滤数据的方法或者异步获取模式中通过此函数获取异步数据改变data")])])])])])},staticRenderFns:[]},o=t(0)(c,i,!1,null,null,null);a.default=o.exports}});