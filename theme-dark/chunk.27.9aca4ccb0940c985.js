"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-dark/vusion-icon-font.ttf?3f136971cb3a302815ffc013a7ecf8f4") format("truetype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.eot?3f136971cb3a302815ffc013a7ecf8f4#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.woff?3f136971cb3a302815ffc013a7ecf8f4") format("woff"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.svg?3f136971cb3a302815ffc013a7ecf8f4#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-dark/vusion-icon-font.ttf?3f136971cb3a302815ffc013a7ecf8f4") format("truetype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.eot?3f136971cb3a302815ffc013a7ecf8f4#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.woff?3f136971cb3a302815ffc013a7ecf8f4") format("woff"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.svg?3f136971cb3a302815ffc013a7ecf8f4#vusion-icon-font") format("svg");\n}'},webpackJsonp([27],{469:function(t,s,a){var n="ICON-FONT-FILE-STYLE";function l(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function e(t){var s=document.createElement("style"),a=document.getElementsByTagName("head")[0];s.innerHTML=l(t),s.id=n,s.type="text/css",a?a.appendChild(s):window.addEventListener("load",function(){a.appendChild(s)})}t.exports=function(){window.HAS_CREATE_FONT_STYLE||(e(),window.HAS_CREATE_FONT_STYLE=!0)}},522:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("u-lightbox",{attrs:{visible:t.visible,closeButton:!0},on:{"update:visible":function(s){t.visible=s}}},[a("u-lightbox-item",{attrs:{title:"图片预览"}},[a("img",{attrs:{src:"/cloud-ui/images/1.jpg"}})])],1),a("u-linear-layout",[a("u-button",{on:{click:function(s){t.visible=!0}}},[t._v("Open Lightbox")])],1)],1)},staticRenderFns:[]},l={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("u-lightbox",{attrs:{visible:t.visible,value:t.showItem,animation:"fade"},on:{"update:visible":function(s){t.visible=s}}},t._l(t.images,function(t,s){return a("u-lightbox-item",{attrs:{value:s,title:t.title}},[a("img",{attrs:{src:t.src}})])})),a("u-linear-layout",t._l(t.images,function(s,n){return a("img",{staticStyle:{width:"300px"},attrs:{src:s.src},on:{click:function(s){t.showLightbox(n)}}})}))],1)},staticRenderFns:[]},e={components:{C7b0894:a(0)({data:function(){return{visible:!1}}},n,!1,null,null,null).exports,Cfada5e:a(0)({data:function(){return{visible:!1,images:[{src:"/cloud-ui/images/1.jpg",title:"图片1"},{src:"/cloud-ui/images/2.jpg",title:"图片2"}],showItem:0}},methods:{showLightbox:function(t){this.visible=!0,this.showItem=t}}},l,!1,null,null,null).exports}},v={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("u-article",[a("h1",[t._v("灯箱 Lightbox")]),a("h2",[t._v("示例")]),a("h3",[t._v("基本形式")]),a("h4",[t._v("灯箱包含单个元素")]),a("div",{staticClass:"u-example"},[a("C7b0894")],1),a("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-lightbox")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":visible.sync")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"visible"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":closeButton")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"true"')]),t._v(">")]),t._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-lightbox-item")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("title")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"图片预览"')]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("img")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("src")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"/cloud-ui/images/1.jpg"')]),t._v(" />")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-lightbox-item")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-lightbox")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(">")]),t._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-button")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"visible = true"')]),t._v(">")]),t._v("Open Lightbox"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-button")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{attrs:{class:"javascript"}},[t._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n            "),a("span",{attrs:{class:"hljs-attr"}},[t._v("visible")]),t._v(": "),a("span",{attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(",\n        };\n    },\n};\n")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])]),a("h4",[t._v("灯箱包含多个元素")]),a("div",{staticClass:"u-example"},[a("Cfada5e")],1),a("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-lightbox")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":visible.sync")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"visible"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":value")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"showItem"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("animation")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"fade"')]),t._v(">")]),t._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-lightbox-item")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("v-for")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"(image, index) in images"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":value")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"index"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":title")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"image.title"')]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("img")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":src")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"image.src"')]),t._v(" />")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-lightbox-item")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-lightbox")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(">")]),t._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("img")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("style")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"width: 300px;"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("v-for")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"(image, index) in images"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":src")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"image.src"')]),t._v("  "),a("span",{attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"showLightbox(index)"')]),t._v("/>")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{attrs:{class:"javascript"}},[t._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n            "),a("span",{attrs:{class:"hljs-attr"}},[t._v("visible")]),t._v(": "),a("span",{attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(",\n            "),a("span",{attrs:{class:"hljs-attr"}},[t._v("images")]),t._v(": [{"),a("span",{attrs:{class:"hljs-attr"}},[t._v("src")]),t._v(":"),a("span",{attrs:{class:"hljs-string"}},[t._v("'/cloud-ui/images/1.jpg'")]),t._v(", "),a("span",{attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(":"),a("span",{attrs:{class:"hljs-string"}},[t._v("'图片1'")]),t._v("}, {"),a("span",{attrs:{class:"hljs-attr"}},[t._v("src")]),t._v(":"),a("span",{attrs:{class:"hljs-string"}},[t._v("'/cloud-ui/images/2.jpg'")]),t._v(", "),a("span",{attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'图片2'")]),t._v("}],\n            "),a("span",{attrs:{class:"hljs-attr"}},[t._v("showItem")]),t._v(": "),a("span",{attrs:{class:"hljs-number"}},[t._v("0")]),t._v(",\n        };\n    },\n    "),a("span",{attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n        showLightbox(index) {\n            "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".visible = "),a("span",{attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(";\n            "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".showItem = index;\n        },\n    },\n};\n")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])]),a("h2",[t._v("API")]),a("h3",[t._v("Attrs/Props")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Prop")]),a("th",[t._v("Type")]),a("th",[t._v("Default")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("visible.sync")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("是否显示")])]),a("tr",[a("td",[t._v("maskClose")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("true")])]),a("td",[t._v("点击遮罩层关闭灯箱")])]),a("tr",[a("td",[t._v("closeButton")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("是否显示关闭按钮")])]),a("tr",[a("td",[t._v("loop")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("是否可循环播放灯箱内容")])]),a("tr",[a("td",[t._v("animation")]),a("td",[t._v("String")]),a("td"),a("td",[t._v("动画（可选fade/zoom-out）")])]),a("tr",[a("td",[t._v("value.sync, v-model")]),a("td",[a("code",{pre:!0},[t._v("Any")])]),a("td"),a("td",[t._v("当前选择的值")])]),a("tr",[a("td",[t._v("zoomable")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("true")])]),a("td",[t._v("灯箱是否开启缩放功能（只有当灯箱内容为图片时有效）")])]),a("tr",[a("td",[t._v("zoomButton")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("true")])]),a("td",[t._v("是否显示缩放按钮（只有当zoomable为true时有效）")])]),a("tr",[a("td",[t._v("zoomWheel")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("true")])]),a("td",[t._v("是否允许滚动鼠标缩放（只有当zoomable为true时有效）")])]),a("tr",[a("td",[t._v("zoomMax")]),a("td",[t._v("Integer/String")]),a("td",[a("code",{pre:!0},[t._v("5")])]),a("td",[t._v("设置最大放大宽度：类型为Integer时，表示灯箱最多放大次数。类型为String时，可以设置单位为px或者%。")])]),a("tr",[a("td",[t._v("zoomMin")]),a("td",[t._v("Integer/String")]),a("td",[a("code",{pre:!0},[t._v("-5")])]),a("td",[t._v("设置最小宽度：同上")])]),a("tr",[a("td",[t._v("zoomRadio")]),a("td",[t._v("Number")]),a("td",[a("code",{pre:!0},[t._v("0.1")])]),a("td",[t._v("每次放大缩小的比例")])])])]),a("h3",[t._v("Slots")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Slot")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("(default)")]),a("td",[t._v("灯箱内容")])])])]),a("h3",[t._v("Events")]),a("h4",[t._v("@open")]),a("p",[t._v("打开时触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody")]),a("h4",[t._v("@before-close")]),a("p",[t._v("关闭前触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event.preventDefault")]),a("td",[t._v("Function")]),a("td",[t._v("阻止关闭流程")])])])]),a("h4",[t._v("@close")]),a("p",[t._v("关闭时触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody")]),a("h4",[t._v("@rotate")]),a("p",[t._v("旋转时触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("direction")]),a("td",[t._v("String")]),a("td",[a("code",{pre:!0},[t._v("left")]),t._v("或"),a("code",{pre:!0},[t._v("right")])])])])]),a("h4",[t._v("@zoom")]),a("p",[t._v("缩放时触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("direction")]),a("td",[t._v("String")]),a("td",[a("code",{pre:!0},[t._v("in")]),t._v("放大或"),a("code",{pre:!0},[t._v("out")]),t._v("缩小")])])])])])},staticRenderFns:[]},r=a(0)(e,v,!1,null,null,null);s.default=r.exports}});