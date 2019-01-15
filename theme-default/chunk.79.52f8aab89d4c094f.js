webpackJsonp([79],{"2Tmn":function(e,v,_){"use strict";Object.defineProperty(v,"__esModule",{value:!0});var r={render:function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("u-article",[_("h1",[e._v("基础 Base")]),_("h3",[e._v("设计原则")]),_("p",[e._v("Vusion 的组件库与传统的纯 CSS 组件库所不同，它更加重视样式、模板与逻辑三者之间的关系，因此推荐尽可能地将样式封装入基础组件，而不是用一个简单的"),_("code",{pre:!0},[e._v("class")]),e._v("来代替。")]),_("p",[e._v("每个独立的组件是没有默认的"),_("code",{pre:!0},[e._v("margin")]),e._v("的，因为它们在实际场景中的情形是不确定的。组件之间的布局推荐使用"),_("code",{pre:!0},[e._v("<u-linear-layout>")]),e._v("与"),_("code",{pre:!0},[e._v("<u-grid-layout>")]),e._v("来控制。")]),_("h3",[e._v("统一样式")]),_("p",[e._v("原型组件库以 "),_("u-link",{attrs:{href:"http://necolas.github.io/normalize.css"}},[e._v("normalize.css")]),e._v(" 为基础，使初始样式在各个浏览器下保持统一，然后对HTML元素的默认样式作了进一步优化。")],1),_("p",[e._v("类似 "),_("u-link",{attrs:{href:"https://getbootstrap.com"}},[e._v("Bootstrap")]),e._v("，将"),_("code",{pre:!0},[e._v("box-sizing: border-box")]),e._v("应用到所有元素，于是元素的宽高便不会受到"),_("code",{pre:!0},[e._v("padding")]),e._v("的影响。")],1),_("p",[e._v("使用 Vue 的"),_("code",{pre:!0},[e._v("preserveWhitespace: false")]),e._v("，将所有元素之间空格清除，这样在"),_("code",{pre:!0},[e._v("inline-block")]),e._v("的元素之间不会有空隙。")]),_("h3",[e._v("黑名单")]),_("p",[e._v("为了支持语义化，同时又为了满足正交性（组件元素之间互不影响的原则），以下元素被拉入黑名单："),_("code",{pre:!0},[e._v("<a>")]),e._v("、"),_("code",{pre:!0},[e._v("<dl>")]),e._v("、"),_("code",{pre:!0},[e._v("<dt>")]),e._v("、"),_("code",{pre:!0},[e._v("<dd>")]),e._v("、"),_("code",{pre:!0},[e._v("<ul>")]),e._v("、"),_("code",{pre:!0},[e._v("<ol>")]),e._v("、"),_("code",{pre:!0},[e._v("<li>")]),e._v("。它们的样式被清除，并且要求在组件中封装后使用，而不是直接在业务中使用。")]),_("h3",[e._v("样式扩展")]),_("p",[e._v("Proto UI 中组件的颜色只扩展了"),_("code",{pre:!0},[e._v("default")]),e._v(", "),_("code",{pre:!0},[e._v("primary")]),e._v("和"),_("code",{pre:!0},[e._v("error")]),e._v("，推荐按照这些词汇继续进行扩展："),_("code",{pre:!0},[e._v("default")]),e._v(", "),_("code",{pre:!0},[e._v("primary")]),e._v(", "),_("code",{pre:!0},[e._v("info")]),e._v(", "),_("code",{pre:!0},[e._v("success")]),e._v(", "),_("code",{pre:!0},[e._v("warning")]),e._v(", "),_("code",{pre:!0},[e._v("error")]),e._v(", "),_("code",{pre:!0},[e._v("disabled")]),e._v(", ...")]),_("p",[e._v("Proto UI 中组件的尺寸只扩展了"),_("code",{pre:!0},[e._v("small")]),e._v(", "),_("code",{pre:!0},[e._v("base")]),e._v("和"),_("code",{pre:!0},[e._v("large")]),e._v("。推荐按照这些词汇继续进行扩展："),_("code",{pre:!0},[e._v("mini")]),e._v(", "),_("code",{pre:!0},[e._v("small")]),e._v(", "),_("code",{pre:!0},[e._v("base")]),e._v(", "),_("code",{pre:!0},[e._v("large")]),e._v(", "),_("code",{pre:!0},[e._v("huge")]),e._v(", ...")])])},staticRenderFns:[]},o=_("EfGu")(null,r,!1,null,null,null);v.default=o.exports}});