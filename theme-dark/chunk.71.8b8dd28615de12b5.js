webpackJsonp([71],{ImZz:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("u-drawer",{attrs:{visible:s.visible,title:"标题"},on:{"update:visible":function(t){s.visible=t}}},[a("u-sidebar",{attrs:{slot:"drawer"},slot:"drawer"},[a("u-sidebar-item",[s._v("指南")]),a("u-sidebar-item",[s._v("概念")]),a("u-sidebar-item",{attrs:{to:"/proto-ui"}},[s._v("组件")])],1)],1),a("u-linear-layout",[a("u-button",{on:{click:function(t){s.visible=!0}}},[s._v("drawer")])],1)],1)},staticRenderFns:[]},v={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("u-drawer",{attrs:{visible:s.leftVisible,title:"标题"},on:{"update:visible":function(t){s.leftVisible=t}}},[a("u-sidebar",{attrs:{slot:"drawer"},slot:"drawer"},[a("u-sidebar-item",[s._v("指南")]),a("u-sidebar-item",[s._v("概念")]),a("u-sidebar-item",{attrs:{to:"/proto-ui"}},[s._v("组件")])],1)],1),a("u-drawer",{attrs:{placement:"right",visible:s.rightVisible,title:"标题"},on:{"update:visible":function(t){s.rightVisible=t}}},[a("u-sidebar",{attrs:{slot:"drawer"},slot:"drawer"},[a("u-sidebar-item",[s._v("指南")]),a("u-sidebar-item",[s._v("概念")]),a("u-sidebar-item",{attrs:{to:"/proto-ui"}},[s._v("组件")])],1)],1),a("u-linear-layout",[a("u-button",{on:{click:function(t){s.leftVisible=!0}}},[s._v("Left")]),a("u-button",{on:{click:function(t){s.rightVisible=!0}}},[s._v("Right")])],1)],1)},staticRenderFns:[]},r={components:{"c-e14242cc":a("EfGu")({data:function(){return{visible:!1}}},l,!1,null,null,null).exports,"c-1dff961f":a("EfGu")({data:function(){return{leftVisible:!1,rightVisible:!1}}},v,!1,null,null,null).exports}},_={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("u-article",[a("h1",[s._v("抽屉 Drawer")]),a("h2",[s._v("示例")]),a("h3",[s._v("基本形式")]),a("u-example",[a("div",[a("c-e14242cc")],1),a("div",{attrs:{slot:"code"},slot:"code"},[a("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-drawer")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":visible.sync")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"visible"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"标题"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-sidebar")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"drawer"')]),s._v(">")]),s._v("\n            "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-sidebar-item")]),s._v(">")]),s._v("指南"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-sidebar-item")]),s._v(">")]),s._v("\n            "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-sidebar-item")]),s._v(">")]),s._v("概念"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-sidebar-item")]),s._v(">")]),s._v("\n            "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-sidebar-item")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("to")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"/proto-ui"')]),s._v(">")]),s._v("组件"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-sidebar-item")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-sidebar")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-drawer")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(" @"),a("span",{attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"visible = true"')]),s._v(">")]),s._v("drawer"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("visible")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n        };\n    },\n};\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),a("h3",[s._v("位置")]),a("u-example",[a("div",[a("c-1dff961f")],1),a("div",{attrs:{slot:"code"},slot:"code"},[a("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-drawer")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":visible.sync")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"leftVisible"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"标题"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-sidebar")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"drawer"')]),s._v(">")]),s._v("\n            "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-sidebar-item")]),s._v(">")]),s._v("指南"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-sidebar-item")]),s._v(">")]),s._v("\n            "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-sidebar-item")]),s._v(">")]),s._v("概念"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-sidebar-item")]),s._v(">")]),s._v("\n            "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-sidebar-item")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("to")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"/proto-ui"')]),s._v(">")]),s._v("组件"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-sidebar-item")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-sidebar")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-drawer")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-drawer")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("placement")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"right"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":visible.sync")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"rightVisible"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"标题"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-sidebar")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"drawer"')]),s._v(">")]),s._v("\n            "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-sidebar-item")]),s._v(">")]),s._v("指南"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-sidebar-item")]),s._v(">")]),s._v("\n            "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-sidebar-item")]),s._v(">")]),s._v("概念"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-sidebar-item")]),s._v(">")]),s._v("\n            "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-sidebar-item")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("to")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"/proto-ui"')]),s._v(">")]),s._v("组件"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-sidebar-item")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-sidebar")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-drawer")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(" @"),a("span",{attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"leftVisible = true"')]),s._v(">")]),s._v("Left"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(" @"),a("span",{attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"rightVisible = true"')]),s._v(">")]),s._v("Right"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("leftVisible")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("rightVisible")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n        };\n    },\n};\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),a("h2",[s._v("API")]),a("h3",[s._v("Attrs/Props")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Attr/Prop")]),a("th",[s._v("Type")]),a("th",[s._v("Default")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("visible.sync")]),a("td",[s._v("Boolean")]),a("td",[a("code",{pre:!0},[s._v("false")])]),a("td",[s._v("是否显示")])]),a("tr",[a("td",[s._v("title")]),a("td",[s._v("String")]),a("td",[a("code",{pre:!0},[s._v("'提示'")])]),a("td",[s._v("抽屉的标题")])]),a("tr",[a("td",[s._v("okButton")]),a("td",[s._v("String")]),a("td",[a("code",{pre:!0},[s._v("'确定'")])]),a("td",[s._v("确定按钮文本，如果为空则不显示")])]),a("tr",[a("td",[s._v("cancelButton")]),a("td",[s._v("String")]),a("td",[a("code",{pre:!0},[s._v("'取消'")])]),a("td",[s._v("取消按钮文本，如果为空则不显示")])]),a("tr",[a("td",[s._v("size")]),a("td",[s._v("String")]),a("td",[a("code",{pre:!0},[s._v("'normal'")])]),a("td",[s._v("抽屉的尺寸。可选值："),a("code",{pre:!0},[s._v("'small'")]),s._v(", "),a("code",{pre:!0},[s._v("'normal'")]),s._v(", "),a("code",{pre:!0},[s._v("'large'")])])]),a("tr",[a("td",[s._v("static")]),a("td",[s._v("Boolean")]),a("td",[a("code",{pre:!0},[s._v("false")])]),a("td",[s._v("是否嵌入页面显示")])]),a("tr",[a("td",[s._v("maskClosable")]),a("td",[s._v("Boolean")]),a("td",[a("code",{pre:!0},[s._v("false")])]),a("td",[s._v("是否点击遮罩时关闭抽屉")])])])]),a("h3",[s._v("Slots")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Slot")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("title")]),a("td",[s._v("抽屉标题自定义")])]),a("tr",[a("td",[s._v("head")]),a("td",[s._v("抽屉头部自定义")])]),a("tr",[a("td",[s._v("foot")]),a("td",[s._v("抽屉尾部自定义")])]),a("tr",[a("td",[s._v("(default)")]),a("td",[s._v("抽屉内容自定义")])])])]),a("h3",[s._v("Events")]),a("h4",[s._v("@open")]),a("p",[s._v("打开抽屉时触发")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody")]),a("h4",[s._v("@ok")]),a("p",[s._v("确定时触发")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody")]),a("h4",[s._v("@cancel")]),a("p",[s._v("取消时触发")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody")]),a("h4",[s._v("@before-close")]),a("p",[s._v("关闭抽屉前触发")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("ok")]),a("td",[s._v("Boolean")]),a("td",[s._v("是否确定")])]),a("tr",[a("td",[s._v("$event.preventDefault")]),a("td",[s._v("Function")]),a("td",[s._v("阻止关闭流程")])])])]),a("h4",[s._v("@close")]),a("p",[s._v("关闭抽屉时触发")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("ok")]),a("td",[s._v("Boolean")]),a("td",[s._v("是否确定")])])])]),a("h3",[s._v("Static Methods")]),a("h4",[s._v("alert(content, title)")]),a("p",[s._v("打开只有确定按钮的抽屉")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("content")]),a("td",[s._v("String")]),a("td",[s._v("抽屉内容")])]),a("tr",[a("td",[s._v("title")]),a("td",[s._v("String")]),a("td",[s._v("抽屉标题")])])])]),a("h4",[s._v("confirm(content, title)")]),a("p",[s._v("打开有确定和取消按钮的抽屉")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("content")]),a("td",[s._v("String")]),a("td",[s._v("抽屉内容")])]),a("tr",[a("td",[s._v("title")]),a("td",[s._v("String")]),a("td",[s._v("抽屉标题")])])])])],1)},staticRenderFns:[]},n=a("EfGu")(r,_,!1,null,null,null);t.default=n.exports}});