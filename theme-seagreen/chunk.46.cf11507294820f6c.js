webpackJsonp([46],{PjSr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("u-linear-layout",{attrs:{direction:"vertical"}},[a("u-cascade-capsules",{attrs:{converter:"join",categories:[{label:"学科门类"},{label:"一级学科"},{label:"二级学科"}],data:[{text:"理学",value:"理学",children:[{text:"物理学",value:"物理学",children:[{text:"理论物理",value:"理论物理"},{text:"凝聚态物理",value:"凝聚态物理"},{text:"材料物理",value:"材料物理"}]},{text:"数学",value:"数学",children:[{text:"基础数学",value:"基础数学"},{text:"计算数学",value:"计算数学"},{text:"应用数学",value:"应用数学"}]},{text:"化学",value:"化学"}]},{text:"工学",value:"工学",children:[{text:"计算机科学与技术",value:"计算机科学与技术",children:[{text:"计算机系统结构",value:"计算机系统结构"},{text:"计算机软件与理论",value:"计算机软件与理论",disabled:!0},{text:"计算机应用技术",value:"计算机应用技术"}]},{text:"软件工程",value:"软件工程",disabled:!0},{text:"机械工程",value:"机械工程",children:[{text:"机械制造及其自动化",value:"机械制造及其自动化"},{text:"机械电子工程",value:"机械电子工程"},{text:"机械设计及理论",value:"机械设计及理论",disabled:!0},{text:"车辆工程",value:"车辆工程",disabled:!0}]}]}]},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),a("div",[t._v("选择的值为："+t._s(t.value))])],1)},staticRenderFns:[]},l={data:function(){return{value:void 0}}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("u-linear-layout",{attrs:{direction:"vertical"}},[a("u-cascade-capsules",{attrs:{value:t.value,converter:"join.number:|",categories:[{label:"CPU",key:"cpu"},{label:"内存",key:"memory"},{label:"系统盘",key:"storage"}],data:[{text:"1核",value:1,children:[{text:"1GB",value:1,children:[{text:"20GB",value:20}]},{text:"2GB",value:2,children:[{text:"20GB",value:20}]}]},{text:"2核",value:2,children:[{text:"2GB",value:2,children:[{text:"20GB",value:20}]},{text:"4GB",value:4,children:[{text:"20GB",value:20}]},{text:"8GB",value:8,children:[{text:"20GB",value:20}]}]},{text:"4核",value:4,children:[{text:"4GB",value:4,children:[{text:"20GB",value:20}]},{text:"8GB",value:8,children:[{text:"20GB",value:20}]},{text:"16GB",value:16,children:[{text:"20GB",value:20}]}]}]},on:{"update:value":function(e){t.value=e}}}),a("div",[t._v("选择的值为："+t._s(t.value))])],1)},staticRenderFns:[]},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("u-linear-layout",{attrs:{direction:"vertical"}},[a("u-cascade-capsules",{attrs:{converter:"last-value",categories:[{label:"学科门类"},{label:"一级学科"},{label:"二级学科"}],data:[{text:"理学",value:"1",children:[{text:"物理学",value:"11",children:[{text:"理论物理",value:"111"},{text:"凝聚态物理",value:"112"},{text:"材料物理",value:"113"}]},{text:"数学",value:"12",children:[{text:"基础数学",value:"121"},{text:"计算数学",value:"122"},{text:"应用数学",value:"123"}]},{text:"化学",value:"13"}]},{text:"工学",value:"2",children:[{text:"计算机科学与技术",value:"21",children:[{text:"计算机系统结构",value:"211"},{text:"计算机软件与理论",value:"212",disabled:!0},{text:"计算机应用技术",value:"213"}]},{text:"软件工程",value:"22",disabled:!0},{text:"机械工程",value:"23",children:[{text:"机械制造及其自动化",value:"231"},{text:"机械电子工程",value:"232"},{text:"机械设计及理论",value:"233",disabled:!0},{text:"车辆工程",value:"234",disabled:!0}]}]}]},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),a("div",[t._v("选择的值为："+t._s(t.value))])],1)},staticRenderFns:[]},r={components:{"c-4c94a633":a("EfGu")({data:function(){return{value:"工学,计算机科学与技术,计算机应用技术"}}},s,!1,null,null,null).exports,"c-f50d57d2":a("EfGu")(l,v,!1,null,null,null).exports,"c-791ec8b7":a("EfGu")({data:function(){return{value:"213"}}},n,!1,null,null,null).exports}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("u-article",[a("h1",[t._v("级联胶囊 CascadeCapsules")]),a("h2",[t._v("示例")]),a("h3",[t._v("基本形式")]),a("u-example",[a("div",[a("u-cascade-capsules",{attrs:{categories:[{label:"学科门类",tip:"请选择正确的分类"},{label:"一级学科"},{label:"二级学科"}],data:[{text:"理学",value:"理学",children:[{text:"物理学",value:"物理学",children:[{text:"理论物理",value:"理论物理"},{text:"凝聚态物理",value:"凝聚态物理"},{text:"材料物理",value:"材料物理"}]},{text:"数学",value:"数学",children:[{text:"基础数学",value:"基础数学"},{text:"计算数学",value:"计算数学"},{text:"应用数学",value:"应用数学"}]},{text:"化学",value:"化学"}]},{text:"工学",value:"工学",children:[{text:"计算机科学与技术",value:"计算机科学与技术",children:[{text:"计算机系统结构",value:"计算机系统结构"},{text:"计算机软件与理论",value:"计算机软件与理论",disabled:!0},{text:"计算机应用技术",value:"计算机应用技术"}]},{text:"软件工程",value:"软件工程",disabled:!0},{text:"机械工程",value:"机械工程",children:[{text:"机械制造及其自动化",value:"机械制造及其自动化"},{text:"机械电子工程",value:"机械电子工程"},{text:"机械设计及理论",value:"机械设计及理论",disabled:!0},{text:"车辆工程",value:"车辆工程",disabled:!0}]}]}]}})],1),a("div",{attrs:{slot:"code"},slot:"code"},[a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-cascade-capsules")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":categories")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v("\"[\n    { label: '学科门类', tip: '请选择正确的分类' },\n    { label: '一级学科' },\n    { label: '二级学科' },\n]\"")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":data")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v("\"[\n    { text: '理学', value: '理学', children: [\n        { text: '物理学', value: '物理学', children: [\n            { text: '理论物理', value: '理论物理' },\n            { text: '凝聚态物理', value: '凝聚态物理' },\n            { text: '材料物理', value: '材料物理' },\n        ]},\n        { text: '数学', value: '数学', children: [\n            { text: '基础数学', value: '基础数学' },\n            { text: '计算数学', value: '计算数学' },\n            { text: '应用数学', value: '应用数学' },\n        ]},\n        { text: '化学', value: '化学' },\n    ]},\n    { text: '工学', value: '工学', children: [\n        { text: '计算机科学与技术', value: '计算机科学与技术', children: [\n            { text: '计算机系统结构', value: '计算机系统结构' },\n            { text: '计算机软件与理论', value: '计算机软件与理论', disabled: true },\n            { text: '计算机应用技术', value: '计算机应用技术' },\n        ]},\n        { text: '软件工程', value: '软件工程', disabled: true },\n        { text: '机械工程', value: '机械工程', children: [\n            { text: '机械制造及其自动化', value: '机械制造及其自动化' },\n            { text: '机械电子工程', value: '机械电子工程' },\n            { text: '机械设计及理论', value: '机械设计及理论', disabled: true },\n            { text: '车辆工程', value: '车辆工程', disabled: true },\n        ]},\n    ]},\n]\"")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-cascade-capsules")]),t._v(">")]),t._v("\n")])])])]),a("h3",[t._v("值转换器")]),a("p",[t._v("组件的 value 与 各选择器的 value 的转换器。")]),a("h4",[t._v("join")]),a("p",[t._v("默认为"),a("code",{pre:!0},[t._v("'join'")]),t._v("，表示将 values 数组 join 之后变成 value。这种情况下 value 一般不会重复，推荐使用。")]),a("u-example",[a("div",[a("c-4c94a633")],1),a("div",{attrs:{slot:"code"},slot:"code"},[a("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("direction")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"vertical"')]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-cascade-capsules")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("converter")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"join"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"value"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":categories")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v("\"[\n        { label: '学科门类' },\n        { label: '一级学科' },\n        { label: '二级学科' },\n    ]\"")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":data")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v("\"[\n        { text: '理学', value: '理学', children: [\n            { text: '物理学', value: '物理学', children: [\n                { text: '理论物理', value: '理论物理' },\n                { text: '凝聚态物理', value: '凝聚态物理' },\n                { text: '材料物理', value: '材料物理' },\n            ]},\n            { text: '数学', value: '数学', children: [\n                { text: '基础数学', value: '基础数学' },\n                { text: '计算数学', value: '计算数学' },\n                { text: '应用数学', value: '应用数学' },\n            ]},\n            { text: '化学', value: '化学' },\n        ]},\n        { text: '工学', value: '工学', children: [\n            { text: '计算机科学与技术', value: '计算机科学与技术', children: [\n                { text: '计算机系统结构', value: '计算机系统结构' },\n                { text: '计算机软件与理论', value: '计算机软件与理论', disabled: true },\n                { text: '计算机应用技术', value: '计算机应用技术' },\n            ]},\n            { text: '软件工程', value: '软件工程', disabled: true },\n            { text: '机械工程', value: '机械工程', children: [\n                { text: '机械制造及其自动化', value: '机械制造及其自动化' },\n                { text: '机械电子工程', value: '机械电子工程' },\n                { text: '机械设计及理论', value: '机械设计及理论', disabled: true },\n                { text: '车辆工程', value: '车辆工程', disabled: true },\n            ]},\n        ]},\n    ]\"")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-cascade-capsules")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("选择的值为：{{ value }}"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{attrs:{class:"javascript"}},[t._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n            "),a("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'工学,计算机科学与技术,计算机应用技术'")]),t._v(",\n        };\n    },\n};\n")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])])]),a("p",[a("code",{pre:!0},[t._v("'join.number'")]),t._v("与"),a("code",{pre:!0},[t._v("join")]),t._v("类似，只是会考虑它为数字的情况。")]),a("p",[a("code",{pre:!0},[t._v("'join:,'")]),t._v("，还可以用"),a("code",{pre:!0},[t._v(":")]),t._v("修改分隔符，类似 Vue 的指令参数。")]),a("u-example",[a("div",[a("c-f50d57d2")],1),a("div",{attrs:{slot:"code"},slot:"code"},[a("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("direction")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"vertical"')]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-cascade-capsules")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":value.sync")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"value"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("converter")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"join.number:|"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":categories")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v("\"[\n        { label: 'CPU', key: 'cpu' },\n        { label: '内存', key: 'memory' },\n        { label: '系统盘', key: 'storage' },\n    ]\"")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":data")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v("\"[\n        { text: '1核', value: 1, children: [\n            { text: '1GB', value: 1, children: [\n                { text: '20GB', value: 20 },\n            ] },\n            { text: '2GB', value: 2, children: [\n                { text: '20GB', value: 20 },\n            ] },\n        ] },\n        { text: '2核', value: 2, children: [\n            { text: '2GB', value: 2, children: [\n                { text: '20GB', value: 20 },\n            ] },\n            { text: '4GB', value: 4, children: [\n                { text: '20GB', value: 20 },\n            ] },\n            { text: '8GB', value: 8, children: [\n                { text: '20GB', value: 20 },\n            ] },\n        ] },\n        { text: '4核', value: 4, children: [\n            { text: '4GB', value: 4, children: [\n                { text: '20GB', value: 20 },\n            ] },\n            { text: '8GB', value: 8, children: [\n                { text: '20GB', value: 20 },\n            ] },\n            { text: '16GB', value: 16, children: [\n                { text: '20GB', value: 20 },\n            ] },\n        ] },\n    ]\"")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-cascade-capsules")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("选择的值为：{{ value }}"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{attrs:{class:"javascript"}},[t._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n            "),a("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(": "),a("span",{attrs:{class:"hljs-literal"}},[t._v("undefined")]),t._v(",\n        };\n    },\n};\n")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])])]),a("h4",[t._v("last-value")]),a("p",[a("code",{pre:!0},[t._v("'last-value'")]),t._v("表示以最后一项的值作为 value，如果每一项的值是唯一的，可以用这种方法。")]),a("u-example",[a("div",[a("c-791ec8b7")],1),a("div",{attrs:{slot:"code"},slot:"code"},[a("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("direction")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"vertical"')]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-cascade-capsules")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("converter")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"last-value"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"value"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":categories")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v("\"[\n        { label: '学科门类' },\n        { label: '一级学科' },\n        { label: '二级学科' },\n    ]\"")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":data")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v("\"[\n        { text: '理学', value: '1', children: [\n            { text: '物理学', value: '11', children: [\n                { text: '理论物理', value: '111' },\n                { text: '凝聚态物理', value: '112' },\n                { text: '材料物理', value: '113' },\n            ]},\n            { text: '数学', value: '12', children: [\n                { text: '基础数学', value: '121' },\n                { text: '计算数学', value: '122' },\n                { text: '应用数学', value: '123' },\n            ]},\n            { text: '化学', value: '13' },\n        ]},\n        { text: '工学', value: '2', children: [\n            { text: '计算机科学与技术', value: '21', children: [\n                { text: '计算机系统结构', value: '211' },\n                { text: '计算机软件与理论', value: '212', disabled: true },\n                { text: '计算机应用技术', value: '213' },\n            ]},\n            { text: '软件工程', value: '22', disabled: true },\n            { text: '机械工程', value: '23', children: [\n                { text: '机械制造及其自动化', value: '231' },\n                { text: '机械电子工程', value: '232' },\n                { text: '机械设计及理论', value: '233', disabled: true },\n                { text: '车辆工程', value: '234', disabled: true },\n            ]},\n        ]},\n    ]\"")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-cascade-capsules")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("选择的值为：{{ value }}"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{attrs:{class:"javascript"}},[t._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n            "),a("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'213'")]),t._v(",\n        };\n    },\n};\n")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])])]),a("h3",[t._v("自动选择")]),a("p",[t._v("此功能默认开启，父级切换时会跟据当前级别的"),a("code",{pre:!0},[t._v("value")]),t._v("自动选择，如果没有与"),a("code",{pre:!0},[t._v("value")]),t._v("相匹配的项，会自动选择第一个显示且非禁用的项。")]),a("p",[t._v("可以将"),a("code",{pre:!0},[t._v("auto-select")]),t._v("设置为"),a("code",{pre:!0},[t._v("false")]),t._v("，关闭此功能。")]),a("u-example",[a("div",[a("u-cascade-capsules",{attrs:{converter:"join.number","auto-select":!1,categories:[{label:"CPU",key:"cpu"},{label:"内存",key:"memory"},{label:"系统盘",key:"storage"}],data:[{text:"1核",value:1,children:[{text:"1GB",value:1,children:[{text:"20GB",value:20}]},{text:"2GB",value:2,children:[{text:"20GB",value:20}]}]},{text:"2核",value:2,children:[{text:"2GB",value:2,children:[{text:"20GB",value:20}]},{text:"4GB",value:4,children:[{text:"20GB",value:20}]},{text:"8GB",value:8,children:[{text:"20GB",value:20}]}]},{text:"4核",value:4,children:[{text:"4GB",value:4,children:[{text:"20GB",value:20}]},{text:"8GB",value:8,children:[{text:"20GB",value:20}]},{text:"16GB",value:16,children:[{text:"20GB",value:20}]}]}]}})],1),a("div",{attrs:{slot:"code"},slot:"code"},[a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-cascade-capsules")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("converter")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"join.number"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":auto-select")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"false"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":categories")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v("\"[\n    { label: 'CPU', key: 'cpu' },\n    { label: '内存', key: 'memory' },\n    { label: '系统盘', key: 'storage' },\n]\"")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":data")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v("\"[\n    { text: '1核', value: 1, children: [\n        { text: '1GB', value: 1, children: [\n            { text: '20GB', value: 20 },\n        ] },\n        { text: '2GB', value: 2, children: [\n            { text: '20GB', value: 20 },\n        ] },\n    ] },\n    { text: '2核', value: 2, children: [\n        { text: '2GB', value: 2, children: [\n            { text: '20GB', value: 20 },\n        ] },\n        { text: '4GB', value: 4, children: [\n            { text: '20GB', value: 20 },\n        ] },\n        { text: '8GB', value: 8, children: [\n            { text: '20GB', value: 20 },\n        ] },\n    ] },\n    { text: '4核', value: 4, children: [\n        { text: '4GB', value: 4, children: [\n            { text: '20GB', value: 20 },\n        ] },\n        { text: '8GB', value: 8, children: [\n            { text: '20GB', value: 20 },\n        ] },\n        { text: '16GB', value: 16, children: [\n            { text: '20GB', value: 20 },\n        ] },\n    ] },\n]\"")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-cascade-capsules")]),t._v(">")]),t._v("\n")])])])]),a("h3",[t._v("可取消")]),a("u-example",[a("div",[a("u-cascade-capsules",{attrs:{"auto-select":!1,cancelable:"",categories:[{label:"学科门类"},{label:"一级学科"},{label:"二级学科"}],data:[{text:"理学",value:"理学",children:[{text:"物理学",value:"物理学",children:[{text:"理论物理",value:"理论物理"},{text:"凝聚态物理",value:"凝聚态物理"},{text:"材料物理",value:"材料物理"}]},{text:"数学",value:"数学",children:[{text:"基础数学",value:"基础数学"},{text:"计算数学",value:"计算数学"},{text:"应用数学",value:"应用数学"}]},{text:"化学",value:"化学"}]},{text:"工学",value:"工学",children:[{text:"计算机科学与技术",value:"计算机科学与技术",children:[{text:"计算机系统结构",value:"计算机系统结构"},{text:"计算机软件与理论",value:"计算机软件与理论",disabled:!0},{text:"计算机应用技术",value:"计算机应用技术"}]},{text:"软件工程",value:"软件工程",disabled:!0},{text:"机械工程",value:"机械工程",children:[{text:"机械制造及其自动化",value:"机械制造及其自动化"},{text:"机械电子工程",value:"机械电子工程"},{text:"机械设计及理论",value:"机械设计及理论",disabled:!0},{text:"车辆工程",value:"车辆工程",disabled:!0}]}]}]}})],1),a("div",{attrs:{slot:"code"},slot:"code"},[a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-cascade-capsules")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":auto-select")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"false"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("cancelable")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":categories")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v("\"[\n    { label: '学科门类' },\n    { label: '一级学科' },\n    { label: '二级学科' },\n]\"")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":data")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v("\"[\n    { text: '理学', value: '理学', children: [\n        { text: '物理学', value: '物理学', children: [\n            { text: '理论物理', value: '理论物理' },\n            { text: '凝聚态物理', value: '凝聚态物理' },\n            { text: '材料物理', value: '材料物理' },\n        ]},\n        { text: '数学', value: '数学', children: [\n            { text: '基础数学', value: '基础数学' },\n            { text: '计算数学', value: '计算数学' },\n            { text: '应用数学', value: '应用数学' },\n        ]},\n        { text: '化学', value: '化学' },\n    ]},\n    { text: '工学', value: '工学', children: [\n        { text: '计算机科学与技术', value: '计算机科学与技术', children: [\n            { text: '计算机系统结构', value: '计算机系统结构' },\n            { text: '计算机软件与理论', value: '计算机软件与理论', disabled: true },\n            { text: '计算机应用技术', value: '计算机应用技术' },\n        ]},\n        { text: '软件工程', value: '软件工程', disabled: true },\n        { text: '机械工程', value: '机械工程', children: [\n            { text: '机械制造及其自动化', value: '机械制造及其自动化' },\n            { text: '机械电子工程', value: '机械电子工程' },\n            { text: '机械设计及理论', value: '机械设计及理论', disabled: true },\n            { text: '车辆工程', value: '车辆工程', disabled: true },\n        ]},\n    ]},\n]\"")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-cascade-capsules")]),t._v(">")]),t._v("\n")])])])]),a("h2",[t._v("CascadeCapsules API")]),a("h3",[t._v("Props/Attrs")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Prop/Attr")]),a("th",[t._v("Type")]),a("th",[t._v("Default")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("data")]),a("td",[t._v("Array<{ text, value }>")]),a("td"),a("td",[t._v("数据列表")])]),a("tr",[a("td",[t._v("value.sync, v-model")]),a("td",[t._v("Any")]),a("td"),a("td",[t._v("当前选择的值")])]),a("tr",[a("td",[t._v("labelSize")]),a("td",[t._v("String")]),a("td"),a("td",[t._v("label的大小，可选值："),a("code",{pre:!0},[t._v("'small'")]),t._v(", "),a("code",{pre:!0},[t._v("'large'")])])]),a("tr",[a("td",[t._v("categories")]),a("td",[t._v("Array<{ label, key, tip }>")]),a("td"),a("td",[t._v("多级分类，其中"),a("code",{pre:!0},[t._v("label")]),t._v("为标签名，"),a("code",{pre:!0},[t._v("tip")]),t._v("为该标签的提示")])]),a("tr",[a("td",[t._v("autoSelect")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("true")])]),a("td",[t._v("是否可自动选择")])]),a("tr",[a("td",[t._v("converter")]),a("td",[t._v("String, Object")]),a("td",[a("code",{pre:!0},[t._v("'join'")])]),a("td",[t._v("value 与 values 的转换器。可选值："),a("code",{pre:!0},[t._v("'join'")]),t._v("表示将 values 数组 join 之后变成 value，"),a("code",{pre:!0},[t._v("'join.number'")]),t._v("与"),a("code",{pre:!0},[t._v("join")]),t._v("类似，只是会考虑它为数字的情况。也可以用"),a("code",{pre:!0},[t._v(":")]),t._v("修改分隔符，类似 Vue 的指令参数，"),a("code",{pre:!0},[t._v("'last-value'")]),t._v("表示以最后一项的值作为 value。也可以传入一个包含 { get, set } 的一个对象")])]),a("tr",[a("td",[t._v("field")]),a("td",[t._v("String")]),a("td",[a("code",{pre:!0},[t._v("'text'")])]),a("td",[t._v("显示文本字段")])]),a("tr",[a("td",[t._v("cancelable")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("是否可以取消选择")])]),a("tr",[a("td",[t._v("readonly")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("是否只读")])]),a("tr",[a("td",[t._v("disabled")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("是否禁用")])])])]),a("h3",[t._v("Events")]),a("h4",[t._v("@input")]),a("p",[t._v("选择某一项时触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event")]),a("td",[t._v("Any")]),a("td",[t._v("选择项的值")])])])]),a("h4",[t._v("@select")]),a("p",[t._v("选择某一项时触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event.level")]),a("td",[t._v("Number")]),a("td",[t._v("选择的层级")])]),a("tr",[a("td",[t._v("$event.value")]),a("td",[t._v("Any")]),a("td",[t._v("改变后的值")])]),a("tr",[a("td",[t._v("$event.values")]),a("td",[t._v("Array")]),a("td",[t._v("改变后每项值的数组")])]),a("tr",[a("td",[t._v("$event.item")]),a("td",[t._v("Object")]),a("td",[t._v("选择项相关对象")])]),a("tr",[a("td",[t._v("$event.itemVM")]),a("td",[t._v("ListViewItem")]),a("td",[t._v("选择项子组件")])])])]),a("h4",[t._v("@change")]),a("p",[t._v("选择值改变时触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event.value")]),a("td",[t._v("Any")]),a("td",[t._v("改变后的值")])]),a("tr",[a("td",[t._v("$event.oldValue")]),a("td",[t._v("Any")]),a("td",[t._v("旧的值")])]),a("tr",[a("td",[t._v("$event.values")]),a("td",[t._v("Array")]),a("td",[t._v("改变后每项值的数组")])]),a("tr",[a("td",[t._v("$event.oldValues")]),a("td",[t._v("Array")]),a("td",[t._v("旧的每项值的数组")])])])])],1)},staticRenderFns:[]},c=a("EfGu")(r,u,!1,null,null,null);e.default=c.exports}});