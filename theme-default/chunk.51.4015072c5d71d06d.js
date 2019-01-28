webpackJsonp([51],{"L+L3":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var v={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("u-article",[a("h1",[t._v("文件上传")]),a("h2",[t._v("示例")]),a("h3",[t._v("基本形式")]),a("u-example",[a("div",[a("u-uploader",{attrs:{url:"/api/upload"}},[a("u-button",[t._v("upload")])],1)],1),a("div",{attrs:{slot:"code"},slot:"code"},[a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-uploader")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("url")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"/api/upload"')]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-button")]),t._v(">")]),t._v("upload"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-button")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-uploader")]),t._v(">")]),t._v("\n")])])])]),a("blockquote",[a("p",[t._v("注意：在IE中实现上传功能时，需要将响应头的"),a("code",{pre:!0},[t._v("Content-Type")]),t._v("设置为"),a("code",{pre:!0},[t._v("text/plain")]),t._v("或"),a("code",{pre:!0},[t._v("text/html")]),t._v("，而不能是"),a("code",{pre:!0},[t._v("application/json")]),t._v("，否则IE会提示用户下载返回的数据。")])]),a("h3",[t._v("文件类型限制")]),a("u-example",[a("div",[a("u-uploader",{attrs:{url:"/api/upload",extensions:"jpg,gif,png"}},[a("u-button",[t._v("upload")])],1)],1),a("div",{attrs:{slot:"code"},slot:"code"},[a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-uploader")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("url")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"/api/upload"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("extensions")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"jpg,gif,png"')]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-button")]),t._v(">")]),t._v("upload"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-button")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-uploader")]),t._v(">")]),t._v("\n")])])])]),a("h3",[t._v("文件大小限制")]),a("u-example",[a("div",[a("u-uploader",{attrs:{url:"/api/upload","max-size":"10kB"}},[a("u-button",[t._v("upload")])],1)],1),a("div",{attrs:{slot:"code"},slot:"code"},[a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-uploader")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("url")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"/api/upload"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("max-size")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"10kB"')]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-button")]),t._v(">")]),t._v("upload"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-button")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-uploader")]),t._v(">")]),t._v("\n")])])])]),a("h3",[t._v("禁用")]),a("u-example",[a("div",[a("u-uploader",{attrs:{url:"/api/upload",disabled:""}},[a("u-button",{attrs:{disabled:""}},[t._v("upload")])],1)],1),a("div",{attrs:{slot:"code"},slot:"code"},[a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-uploader")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("url")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"/api/upload"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("disabled")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-button")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("disabled")]),t._v(">")]),t._v("upload"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-button")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-uploader")]),t._v(">")]),t._v("\n")])])])]),a("h2",[t._v("API")]),a("h3",[t._v("Props/Attrs")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Prop/Attr")]),a("th",[t._v("Type")]),a("th",[t._v("Default")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("url")]),a("td",[t._v("String")]),a("td"),a("td",[t._v("上传文件路径")])]),a("tr",[a("td",[t._v("data-type")]),a("td",[t._v("String")]),a("td",[a("code",{pre:!0},[t._v("'json'")])]),a("td",[t._v("接收数据类型。可选值："),a("code",{pre:!0},[t._v("text")]),t._v("、"),a("code",{pre:!0},[t._v("xml")]),t._v("、"),a("code",{pre:!0},[t._v("json")])])]),a("tr",[a("td",[t._v("data")]),a("td",[t._v("Object")]),a("td",[a("code",{pre:!0},[t._v("{}")])]),a("td",[t._v("附加数据")])]),a("tr",[a("td",[t._v("name")]),a("td",[t._v("String")]),a("td",[a("code",{pre:!0},[t._v("'file'")])]),a("td",[t._v("上传文件的名称，后端一般需要这个字段")])]),a("tr",[a("td",[t._v("extensions")]),a("td",[t._v("String, Array")]),a("td",[a("code",{pre:!0},[t._v("''")])]),a("td",[t._v("可上传的扩展名。默认为空，表示可上传任意文件类型的文件。可以为字符串，多个扩展名用"),a("code",{pre:!0},[t._v(",")]),t._v("隔开，如："),a("code",{pre:!0},[t._v("'png,jpg,gif'")]),t._v("；也可以为数组，如："),a("code",{pre:!0},[t._v("['png', 'jpg', 'gif']")])])]),a("tr",[a("td",[t._v("max-size")]),a("td",[t._v("String, Number")]),a("td",[a("code",{pre:!0},[t._v("Infinity")])]),a("td",[t._v("可上传的最大文件大小。默认为空，表示可上传任意大小的文件；如果为数字，则表示单位为字节；如果为字符串，可以添加以下单位："),a("code",{pre:!0},[t._v("kB")]),t._v("、"),a("code",{pre:!0},[t._v("MB")]),t._v("、"),a("code",{pre:!0},[t._v("GB")])])]),a("tr",[a("td",[t._v("disabled")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("是否禁用")])])])]),a("h3",[t._v("Slots")]),a("h4",[t._v("(default)")]),a("p",[t._v("插入文本或HTML。")]),a("h3",[t._v("Events")]),a("h4",[t._v("@before-send")]),a("p",[t._v("发送前触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event.data")]),a("td",[t._v("Object")]),a("td",[t._v("进度相关信息")])]),a("tr",[a("td",[t._v("$event.xhr")]),a("td",[t._v("XMLHttpRequest")]),a("td",[t._v("发送前的 XMLHttpRequest 对象")])]),a("tr",[a("td",[t._v("$event.formData")]),a("td",[t._v("FormData")]),a("td",[t._v("用于发送的数据对象")])]),a("tr",[a("td",[t._v("$event.preventDefault")]),a("td",[t._v("Function")]),a("td",[t._v("阻止上传流程")])]),a("tr",[a("td",[t._v("senderVM")]),a("td",[t._v("Object")]),a("td",[t._v("发送事件对象")])])])]),a("h4",[t._v("@send")]),a("p",[t._v("刚发送时触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event.data")]),a("td",[t._v("Object")]),a("td",[t._v("进度相关信息")])]),a("tr",[a("td",[t._v("$event.preventDefault")]),a("td",[t._v("Function")]),a("td",[t._v("阻止上传流程")])]),a("tr",[a("td",[t._v("senderVM")]),a("td",[t._v("Object")]),a("td",[t._v("发送事件对象")])])])]),a("h4",[t._v("@progress")]),a("p",[t._v("发送进度改变时触发，在上传进度条时使用")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event.data")]),a("td",[t._v("Object")]),a("td",[t._v("进度相关信息")])]),a("tr",[a("td",[t._v("senderVM")]),a("td",[t._v("Object")]),a("td",[t._v("发送事件对象")])])])]),a("h4",[t._v("@complete")]),a("p",[t._v("上传完成时触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event.xml")]),a("td",[t._v("String")]),a("td",[t._v("服务器回传信息")])]),a("tr",[a("td",[t._v("senderVM")]),a("td",[t._v("Object")]),a("td",[t._v("发送事件对象")])])])]),a("h4",[t._v("@success")]),a("p",[t._v("上传成功时触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event.data")]),a("td",[t._v("Object")]),a("td",[t._v("服务器回传信息对象")])]),a("tr",[a("td",[t._v("$event.file")]),a("td",[t._v("Object")]),a("td",[t._v("上传文件信息，不包含文件主体内容")])]),a("tr",[a("td",[t._v("senderVM")]),a("td",[t._v("Object")]),a("td",[t._v("发送事件对象")])])])]),a("h4",[t._v("@error")]),a("p",[t._v("上传报错时触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event.name")]),a("td",[t._v("String")]),a("td",[t._v("错误名")])]),a("tr",[a("td",[t._v("$event.message")]),a("td",[t._v("String")]),a("td",[t._v("错误描述")])]),a("tr",[a("td",[t._v("$event.extensions")]),a("td",[t._v("String")]),a("td",[t._v("限制类型")])]),a("tr",[a("td",[t._v("$event.$event.maxSize")]),a("td",[t._v("Number")]),a("td",[t._v("限制大小")])]),a("tr",[a("td",[t._v("$event.size")]),a("td",[t._v("Number")]),a("td",[t._v("当前大小")])]),a("tr",[a("td",[t._v("senderVM")]),a("td",[t._v("Object")]),a("td",[t._v("发送事件对象")])])])])],1)},staticRenderFns:[]},e=a("EfGu")(null,v,!1,null,null,null);s.default=e.exports}});