"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?7da36a14f64e6bd713d7423d087716cc") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?7da36a14f64e6bd713d7423d087716cc#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?7da36a14f64e6bd713d7423d087716cc") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?7da36a14f64e6bd713d7423d087716cc#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?7da36a14f64e6bd713d7423d087716cc") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?7da36a14f64e6bd713d7423d087716cc#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?7da36a14f64e6bd713d7423d087716cc") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?7da36a14f64e6bd713d7423d087716cc#vusion-icon-font") format("svg");\n}'},webpackJsonp([52],{528:function(t,s,i){function e(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function v(t){var s=document.createElement("style"),i=document.getElementsByTagName("head")[0];s.innerHTML=e(t),s.id=h,s.type="text/css",i?i.appendChild(s):window.addEventListener("load",function(){i.appendChild(s)})}var h="ICON-FONT-FILE-STYLE";t.exports=function(){window.HAS_CREATE_FONT_STYLE||(v(),window.HAS_CREATE_FONT_STYLE=!0)}},591:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("u-draggable",{attrs:{value:"primary"}},[i("u-block",{attrs:{size:"normal",color:"primary",inline:""}},[t._v("拖我")])],1),i("u-draggable",{attrs:{value:"success"}},[i("u-block",{attrs:{size:"normal",color:"success",inline:""}},[t._v("拖我")])],1),i("u-draggable",{attrs:{value:"error"}},[i("u-block",{attrs:{size:"normal",color:"error",inline:""}},[t._v("拖我")])],1),i("p"),i("u-droppable",{on:{drop:function(s){t.color=s.value}}},[i("u-block",{attrs:{size:"normal",color:t.color}},[t._v("放到这里")])],1)],1)},staticRenderFns:[]},v={components:{C687e22:i(1)({data:function(){return{color:""}}},e,!1,null,null,null).exports}},h={render:function(){var t=this.$createElement,s=this._self._c||t;return s("u-article",[s("h1",[this._v("放置 Draggable")]),s("h2",[this._v("示例")]),s("h3",[this._v("基本形式")]),s("div",{staticClass:"u-example"},[s("C687e22")],1),s("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-draggable")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"primary"')]),this._v(">")]),this._v("\n        "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("size")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"normal"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("color")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"primary"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("inline")]),this._v(">")]),this._v("拖我"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-draggable")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-draggable")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"success"')]),this._v(">")]),this._v("\n        "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("size")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"normal"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("color")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"success"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("inline")]),this._v(">")]),this._v("拖我"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-draggable")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-draggable")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"error"')]),this._v(">")]),this._v("\n        "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("size")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"normal"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("color")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"error"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("inline")]),this._v(">")]),this._v("拖我"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-draggable")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("p")]),this._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("p")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-droppable")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("@drop")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"color = $event.value"')]),this._v(">")]),this._v("\n        "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("size")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"normal"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v(":color")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"color"')]),this._v(">")]),this._v("放到这里"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-block")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-droppable")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),s("span",{attrs:{class:"javascript"}},[this._v("\n"),s("span",{attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),s("span",{attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n    data() {\n        "),s("span",{attrs:{class:"hljs-keyword"}},[this._v("return")]),this._v(" {\n            "),s("span",{attrs:{class:"hljs-attr"}},[this._v("color")]),this._v(": "),s("span",{attrs:{class:"hljs-string"}},[this._v("''")]),this._v(",\n        };\n    },\n};\n")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n")])]),s("h2",[this._v("API")]),s("h3",[this._v("Props/Attrs")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Prop/Attr")]),s("th",[this._v("Type")]),s("th",[this._v("Default")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("disabled")]),s("td",[this._v("Boolean")]),s("td",[s("code",{pre:!0},[this._v("false")])]),s("td",[this._v("是否禁用")])])])]),s("h3",[this._v("Slots")]),s("h4",[this._v("(default)")]),s("p",[this._v("插入可以放置的元素，仅一个。")]),s("h4",[this._v("transfer")]),s("p",[this._v("自定义的移动元素。")]),s("h4",[this._v("@dragenter")]),s("p",[this._v("拖拽进入该元素时触发")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Param")]),s("th",[this._v("Type")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("$event.originVM")]),s("td",[this._v("VueComponent")]),s("td",[this._v("拖拽源，为当前的"),s("code",{pre:!0},[this._v("<u-draggable>")])])]),s("tr",[s("td",[this._v("$event.sourceEl")]),s("td",[this._v("Element")]),s("td",[this._v("拖拽起始元素")])]),s("tr",[s("td",[this._v("$event.transferEl")]),s("td",[this._v("Element")]),s("td",[this._v("拖拽移动元素")])]),s("tr",[s("td",[this._v("$event.targetEl")]),s("td",[this._v("Element")]),s("td",[this._v("放置目标元素")])]),s("tr",[s("td",[this._v("$event.value")]),s("td",[this._v("Any")]),s("td",[this._v("需要传递的值")])]),s("tr",[s("td",[this._v("$event.screenX")]),s("td",[this._v("Number")]),s("td",[this._v("鼠标指针相对于屏幕的水平坐标")])]),s("tr",[s("td",[this._v("$event.screenY")]),s("td",[this._v("Number")]),s("td",[this._v("鼠标指针相对于屏幕的垂直坐标")])]),s("tr",[s("td",[this._v("$event.clientX")]),s("td",[this._v("Number")]),s("td",[this._v("鼠标指针相对于浏览器的水平坐标")])]),s("tr",[s("td",[this._v("$event.clientY")]),s("td",[this._v("Number")]),s("td",[this._v("鼠标指针相对于浏览器的垂直坐标")])]),s("tr",[s("td",[this._v("$event.pageX")]),s("td",[this._v("Number")]),s("td",[this._v("鼠标指针相对于页面的水平坐标")])]),s("tr",[s("td",[this._v("$event.pageY")]),s("td",[this._v("Number")]),s("td",[this._v("鼠标指针相对于页面的垂直坐标")])]),s("tr",[s("td",[this._v("$event.startX")]),s("td",[this._v("Number")]),s("td",[this._v("拖拽开始时鼠标指针的水平坐标")])]),s("tr",[s("td",[this._v("$event.startY")]),s("td",[this._v("Number")]),s("td",[this._v("拖拽开始时鼠标指针的垂直坐标")])]),s("tr",[s("td",[this._v("$event.dragX")]),s("td",[this._v("Number")]),s("td",[this._v("拖拽时鼠标指针相对于起始坐标的水平位移")])]),s("tr",[s("td",[this._v("$event.dragY")]),s("td",[this._v("Number")]),s("td",[this._v("拖拽时鼠标指针相对于起始坐标的垂直位移")])]),s("tr",[s("td",[this._v("$event.startLeft")]),s("td",[this._v("Number")]),s("td",[this._v("拖拽开始时代理元素的left值")])]),s("tr",[s("td",[this._v("$event.startTop")]),s("td",[this._v("Number")]),s("td",[this._v("拖拽开始时代理元素的top值")])]),s("tr",[s("td",[this._v("$event.left")]),s("td",[this._v("Number")]),s("td",[this._v("拖拽时代理元素的left值")])]),s("tr",[s("td",[this._v("$event.top")]),s("td",[this._v("Number")]),s("td",[this._v("拖拽时代理元素的top值")])]),s("tr",[s("td",[this._v("$event.preventDefault")]),s("td",[this._v("Function")]),s("td",[this._v("阻止拖拽流程")])])])]),s("h4",[this._v("@dragleave")]),s("p",[this._v("拖拽离开该元素时触发")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Param")]),s("th",[this._v("Type")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("$event.originVM")]),s("td",[this._v("VueComponent")]),s("td",[this._v("拖拽源，为当前的"),s("code",{pre:!0},[this._v("<u-draggable>")])])]),s("tr",[s("td",[this._v("$event.sourceEl")]),s("td",[this._v("Element")]),s("td",[this._v("拖拽起始元素")])]),s("tr",[s("td",[this._v("$event.transferEl")]),s("td",[this._v("Element")]),s("td",[this._v("拖拽移动元素")])]),s("tr",[s("td",[this._v("$event.targetEl")]),s("td",[this._v("Element")]),s("td",[this._v("放置目标元素")])]),s("tr",[s("td",[this._v("$event.value")]),s("td",[this._v("Any")]),s("td",[this._v("需要传递的值")])]),s("tr",[s("td",[this._v("$event.screenX")]),s("td",[this._v("Number")]),s("td",[this._v("鼠标指针相对于屏幕的水平坐标")])]),s("tr",[s("td",[this._v("$event.screenY")]),s("td",[this._v("Number")]),s("td",[this._v("鼠标指针相对于屏幕的垂直坐标")])]),s("tr",[s("td",[this._v("$event.clientX")]),s("td",[this._v("Number")]),s("td",[this._v("鼠标指针相对于浏览器的水平坐标")])]),s("tr",[s("td",[this._v("$event.clientY")]),s("td",[this._v("Number")]),s("td",[this._v("鼠标指针相对于浏览器的垂直坐标")])]),s("tr",[s("td",[this._v("$event.pageX")]),s("td",[this._v("Number")]),s("td",[this._v("鼠标指针相对于页面的水平坐标")])]),s("tr",[s("td",[this._v("$event.pageY")]),s("td",[this._v("Number")]),s("td",[this._v("鼠标指针相对于页面的垂直坐标")])]),s("tr",[s("td",[this._v("$event.startX")]),s("td",[this._v("Number")]),s("td",[this._v("拖拽开始时鼠标指针的水平坐标")])]),s("tr",[s("td",[this._v("$event.startY")]),s("td",[this._v("Number")]),s("td",[this._v("拖拽开始时鼠标指针的垂直坐标")])]),s("tr",[s("td",[this._v("$event.dragX")]),s("td",[this._v("Number")]),s("td",[this._v("拖拽时鼠标指针相对于起始坐标的水平位移")])]),s("tr",[s("td",[this._v("$event.dragY")]),s("td",[this._v("Number")]),s("td",[this._v("拖拽时鼠标指针相对于起始坐标的垂直位移")])]),s("tr",[s("td",[this._v("$event.startLeft")]),s("td",[this._v("Number")]),s("td",[this._v("拖拽开始时代理元素的left值")])]),s("tr",[s("td",[this._v("$event.startTop")]),s("td",[this._v("Number")]),s("td",[this._v("拖拽开始时代理元素的top值")])]),s("tr",[s("td",[this._v("$event.left")]),s("td",[this._v("Number")]),s("td",[this._v("拖拽时代理元素的left值")])]),s("tr",[s("td",[this._v("$event.top")]),s("td",[this._v("Number")]),s("td",[this._v("拖拽时代理元素的top值")])]),s("tr",[s("td",[this._v("$event.preventDefault")]),s("td",[this._v("Function")]),s("td",[this._v("阻止拖拽流程")])])])]),s("h4",[this._v("@dragover")]),s("p",[this._v("拖拽在该元素上方时触发")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Param")]),s("th",[this._v("Type")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("$event.originVM")]),s("td",[this._v("VueComponent")]),s("td",[this._v("拖拽源，为当前的"),s("code",{pre:!0},[this._v("<u-draggable>")])])]),s("tr",[s("td",[this._v("$event.sourceEl")]),s("td",[this._v("Element")]),s("td",[this._v("拖拽起始元素")])]),s("tr",[s("td",[this._v("$event.transferEl")]),s("td",[this._v("Element")]),s("td",[this._v("拖拽移动元素")])]),s("tr",[s("td",[this._v("$event.targetEl")]),s("td",[this._v("Element")]),s("td",[this._v("放置目标元素")])]),s("tr",[s("td",[this._v("$event.value")]),s("td",[this._v("Any")]),s("td",[this._v("需要传递的值")])]),s("tr",[s("td",[this._v("$event.ratioX")]),s("td",[this._v("Number")]),s("td",[this._v("鼠标指针相对于接收元素所占的长度比")])]),s("tr",[s("td",[this._v("$event.ratioY")]),s("td",[this._v("Number")]),s("td",[this._v("鼠标指针相对于接收元素所占的高度比")])]),s("tr",[s("td",[this._v("$event.screenX")]),s("td",[this._v("Number")]),s("td",[this._v("鼠标指针相对于屏幕的水平坐标")])]),s("tr",[s("td",[this._v("$event.screenY")]),s("td",[this._v("Number")]),s("td",[this._v("鼠标指针相对于屏幕的垂直坐标")])]),s("tr",[s("td",[this._v("$event.clientX")]),s("td",[this._v("Number")]),s("td",[this._v("鼠标指针相对于浏览器的水平坐标")])]),s("tr",[s("td",[this._v("$event.clientY")]),s("td",[this._v("Number")]),s("td",[this._v("鼠标指针相对于浏览器的垂直坐标")])]),s("tr",[s("td",[this._v("$event.pageX")]),s("td",[this._v("Number")]),s("td",[this._v("鼠标指针相对于页面的水平坐标")])]),s("tr",[s("td",[this._v("$event.pageY")]),s("td",[this._v("Number")]),s("td",[this._v("鼠标指针相对于页面的垂直坐标")])]),s("tr",[s("td",[this._v("$event.startX")]),s("td",[this._v("Number")]),s("td",[this._v("拖拽开始时鼠标指针的水平坐标")])]),s("tr",[s("td",[this._v("$event.startY")]),s("td",[this._v("Number")]),s("td",[this._v("拖拽开始时鼠标指针的垂直坐标")])]),s("tr",[s("td",[this._v("$event.dragX")]),s("td",[this._v("Number")]),s("td",[this._v("拖拽时鼠标指针相对于起始坐标的水平位移")])]),s("tr",[s("td",[this._v("$event.dragY")]),s("td",[this._v("Number")]),s("td",[this._v("拖拽时鼠标指针相对于起始坐标的垂直位移")])]),s("tr",[s("td",[this._v("$event.startLeft")]),s("td",[this._v("Number")]),s("td",[this._v("拖拽开始时代理元素的left值")])]),s("tr",[s("td",[this._v("$event.startTop")]),s("td",[this._v("Number")]),s("td",[this._v("拖拽开始时代理元素的top值")])]),s("tr",[s("td",[this._v("$event.left")]),s("td",[this._v("Number")]),s("td",[this._v("拖拽时代理元素的left值")])]),s("tr",[s("td",[this._v("$event.top")]),s("td",[this._v("Number")]),s("td",[this._v("拖拽时代理元素的top值")])]),s("tr",[s("td",[this._v("$event.preventDefault")]),s("td",[this._v("Function")]),s("td",[this._v("阻止拖拽流程")])])])]),s("h4",[this._v("@drop")]),s("p",[this._v("拖拽放置时触发")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Param")]),s("th",[this._v("Type")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("$event.originVM")]),s("td",[this._v("VueComponent")]),s("td",[this._v("拖拽源，为当前的"),s("code",{pre:!0},[this._v("<u-draggable>")])])]),s("tr",[s("td",[this._v("$event.sourceEl")]),s("td",[this._v("Element")]),s("td",[this._v("拖拽起始元素")])]),s("tr",[s("td",[this._v("$event.transferEl")]),s("td",[this._v("Element")]),s("td",[this._v("拖拽移动元素")])]),s("tr",[s("td",[this._v("$event.targetEl")]),s("td",[this._v("Element")]),s("td",[this._v("放置目标元素")])]),s("tr",[s("td",[this._v("$event.value")]),s("td",[this._v("Any")]),s("td",[this._v("需要传递的值")])]),s("tr",[s("td",[this._v("$event.ratioX")]),s("td",[this._v("Number")]),s("td",[this._v("鼠标指针相对于接收元素所占的长度比")])]),s("tr",[s("td",[this._v("$event.ratioY")]),s("td",[this._v("Number")]),s("td",[this._v("鼠标指针相对于接收元素所占的高度比")])]),s("tr",[s("td",[this._v("$event.screenX")]),s("td",[this._v("Number")]),s("td",[this._v("鼠标指针相对于屏幕的水平坐标")])]),s("tr",[s("td",[this._v("$event.screenY")]),s("td",[this._v("Number")]),s("td",[this._v("鼠标指针相对于屏幕的垂直坐标")])]),s("tr",[s("td",[this._v("$event.clientX")]),s("td",[this._v("Number")]),s("td",[this._v("鼠标指针相对于浏览器的水平坐标")])]),s("tr",[s("td",[this._v("$event.clientY")]),s("td",[this._v("Number")]),s("td",[this._v("鼠标指针相对于浏览器的垂直坐标")])]),s("tr",[s("td",[this._v("$event.pageX")]),s("td",[this._v("Number")]),s("td",[this._v("鼠标指针相对于页面的水平坐标")])]),s("tr",[s("td",[this._v("$event.pageY")]),s("td",[this._v("Number")]),s("td",[this._v("鼠标指针相对于页面的垂直坐标")])]),s("tr",[s("td",[this._v("$event.startX")]),s("td",[this._v("Number")]),s("td",[this._v("拖拽开始时鼠标指针的水平坐标")])]),s("tr",[s("td",[this._v("$event.startY")]),s("td",[this._v("Number")]),s("td",[this._v("拖拽开始时鼠标指针的垂直坐标")])]),s("tr",[s("td",[this._v("$event.dragX")]),s("td",[this._v("Number")]),s("td",[this._v("拖拽时鼠标指针相对于起始坐标的水平位移")])]),s("tr",[s("td",[this._v("$event.dragY")]),s("td",[this._v("Number")]),s("td",[this._v("拖拽时鼠标指针相对于起始坐标的垂直位移")])]),s("tr",[s("td",[this._v("$event.startLeft")]),s("td",[this._v("Number")]),s("td",[this._v("拖拽开始时代理元素的left值")])]),s("tr",[s("td",[this._v("$event.startTop")]),s("td",[this._v("Number")]),s("td",[this._v("拖拽开始时代理元素的top值")])]),s("tr",[s("td",[this._v("$event.left")]),s("td",[this._v("Number")]),s("td",[this._v("拖拽时代理元素的left值")])]),s("tr",[s("td",[this._v("$event.top")]),s("td",[this._v("Number")]),s("td",[this._v("拖拽时代理元素的top值")])]),s("tr",[s("td",[this._v("$event.preventDefault")]),s("td",[this._v("Function")]),s("td",[this._v("阻止拖拽流程")])])])]),s("h3",[this._v("Methods")]),s("h4",[this._v("cancel()")]),s("p",[this._v("取消拖拽。")])])},staticRenderFns:[]},a=i(1)(v,h,!1,null,null,null);s.default=a.exports}});