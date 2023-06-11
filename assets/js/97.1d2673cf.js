(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{500:function(t,e,o){"use strict";o.r(e);var a=o(1),s=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"core-concepts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#core-concepts"}},[t._v("#")]),t._v(" Core Concepts")]),t._v(" "),e("p",[t._v("Redux is a single API that makes it simple to perform various features within WordPress. We'll go over our basic concepts\nto properly grasp how Redux works.")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("Table of Contents")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#never-modify-core-files"}},[t._v("Never modify core files!")])]),e("li",[e("a",{attrs:{href:"#object-structure"}},[t._v("Object Structure")]),e("ul",[e("li",[e("a",{attrs:{href:"#field"}},[t._v("Field")])]),e("li",[e("a",{attrs:{href:"#section"}},[t._v("Section")])]),e("li",[e("a",{attrs:{href:"#box"}},[t._v("Box")])]),e("li",[e("a",{attrs:{href:"#instance"}},[t._v("Instance")])])])]),e("li",[e("a",{attrs:{href:"#arguments"}},[t._v("Arguments")]),e("ul",[e("li",[e("a",{attrs:{href:"#global-arguments"}},[t._v("Global Arguments")])]),e("li",[e("a",{attrs:{href:"#opt-name-your-unique-instance-key"}},[t._v("opt_name, your unique instance key")])])])])])]),e("p")]),t._v(" "),e("h2",{attrs:{id:"never-modify-core-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#never-modify-core-files"}},[t._v("#")]),t._v(" Never modify core files!")]),t._v(" "),e("p",[t._v("Redux is extremely extensible, which means you can override nearly anything using filters. You will never find a need to modify a core file unless you're helping us to solve a bug. \t"),e("strong",[e("em",[e("strong",[t._v("NEVER")])])]),t._v(" "),e("strong",[t._v("modify anything inside redux-core")]),t._v(". If you want to change how a field works, build an extension instead.  Need to modify a value when it's saved? Use a filter.")]),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("Why is modifying `redux-core` files a bad practice when embedded in my own product?")]),t._v(" "),e("p",[t._v('Redux is built to run with only one version of the framework code. If you modify core files in your version, which you\nembed in a product, there\'s no guarantee your version will be the version loaded should another product be using Redux.\nThis will most likely cause conflicts and headaches for you and your clients. By using filters and extensions, you ensure that your code will always be loaded despite the "core" that is instantiated first.')])]),t._v(" "),e("h2",{attrs:{id:"object-structure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#object-structure"}},[t._v("#")]),t._v(" Object Structure")]),t._v(" "),e("p",[t._v("We need to understand the object structure of Redux in order to understand how it all fits together.")]),t._v(" "),e("h3",{attrs:{id:"field"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#field"}},[t._v("#")]),t._v(" Field")]),t._v(" "),e("p",[t._v("The lowest building block is a "),e("RouterLink",{attrs:{to:"/configuration/objects/field.html"}},[t._v("field")]),t._v(". A "),e("RouterLink",{attrs:{to:"/configuration/objects/field.html"}},[t._v("field")]),t._v(" is what is displayed for a user to input data. It has its own set of characteristics depending on the "),e("a",{attrs:{href:"../../core-fields"}},[t._v("field type")]),t._v(". At this level, whatever args are set to the "),e("RouterLink",{attrs:{to:"/configuration/objects/field.html"}},[t._v("field")]),t._v(" act as an override for all levels above.")],1),t._v(" "),e("h3",{attrs:{id:"section"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#section"}},[t._v("#")]),t._v(" Section")]),t._v(" "),e("p",[t._v("A "),e("RouterLink",{attrs:{to:"/configuration/objects/section.html"}},[t._v("section")]),t._v(" is a grouping of "),e("RouterLink",{attrs:{to:"/configuration/objects/field.html"}},[t._v("fields")]),t._v(". It groups everything together into its own array. It containes a number of arguments that can be passed down to the "),e("RouterLink",{attrs:{to:"/configuration/objects/field.html"}},[t._v("fields")]),t._v(" below, provided the "),e("RouterLink",{attrs:{to:"/configuration/objects/field.html"}},[t._v("fields")]),t._v(" below do not specify those same arguments on their own declaration. Again, the "),e("RouterLink",{attrs:{to:"/configuration/objects/field.html"}},[t._v("fields")]),t._v(" level args override all.")],1),t._v(" "),e("h3",{attrs:{id:"box"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#box"}},[t._v("#")]),t._v(" Box")]),t._v(" "),e("p",[t._v("In some cases, such as is with "),e("RouterLink",{attrs:{to:"/core-extensions/metaboxes-lite.html"}},[t._v("metaboxes")]),t._v(", an extra grouping is required. Hence, a box. A box is simply a container with a bunch of "),e("RouterLink",{attrs:{to:"/configuration/objects/section.html"}},[t._v("sections")]),t._v(" within it. The primary purpose of a box is placement on the screen.")],1),t._v(" "),e("h3",{attrs:{id:"instance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#instance"}},[t._v("#")]),t._v(" Instance")]),t._v(" "),e("p",[t._v("Instance level arguments are known as "),e("RouterLink",{attrs:{to:"/configuration/global_arguments.html"}},[t._v("global arguments")]),t._v(". They impact all areas of\nthe instance. Typically, these are arguments that affect how Redux performs, but they can set an entire instance to display\na control panel in the "),e("RouterLink",{attrs:{to:"/configuration/global_arguments.html#customizer-only"}},[t._v("customizer only")]),t._v(". If you're not sure what's\ngoing on, the problem may be in the "),e("RouterLink",{attrs:{to:"/configuration/global_arguments.html"}},[t._v("global args")]),t._v(".")],1),t._v(" "),e("p",[t._v("Remember, there can be multiple instances of Redux running in a single WordPress install. This means that all products based on Redux, be it plugins or the theme can be running at once without impacting one another.")]),t._v(" "),e("h2",{attrs:{id:"arguments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),e("p",[t._v("Every object has arguments and every level of nested objects can inherit or override those arguments. When looking at an\nargument, make sure you're thinking of how it will impact all the nested items below it (children).")]),t._v(" "),e("h3",{attrs:{id:"global-arguments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#global-arguments"}},[t._v("#")]),t._v(" Global Arguments")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/configuration/global_arguments.html"}},[t._v("Global arguments")]),t._v(" are those arguments which affect every field or how your\ninstance of Redux performs. These arguments can "),e("RouterLink",{attrs:{to:"/configuration/global_arguments.html#customizer-only"}},[t._v("enable/disable the customizer")]),t._v("\nby default, change the "),e("RouterLink",{attrs:{to:"/configuration/global_arguments.html#menu-title"}},[t._v("menu title")]),t._v(", and set\nfields to "),e("RouterLink",{attrs:{to:"/configuration/global_arguments.html#output"}},[t._v("automatically output CSS")]),t._v(" or not. For a more detailed breakdown,\nvisit the "),e("RouterLink",{attrs:{to:"/configuration/global_arguments.html"}},[t._v("Global Arguments")]),t._v(" page as well as the docs related to each field and setting.")],1),t._v(" "),e("h3",{attrs:{id:"opt-name-your-unique-instance-key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#opt-name-your-unique-instance-key"}},[t._v("#")]),t._v(" "),e("code",[t._v("opt_name")]),t._v(", your unique instance key")]),t._v(" "),e("p",[t._v("One of the most important global variables is your "),e("RouterLink",{attrs:{to:"/configuration/global_arguments.html#opt-name"}},[t._v("opt_name")]),t._v(". This is a\nunique key to distinguish your Redux instance from all others. It's also where your data is stored in the database and\nif you're using the global variable, how you access data within your code.")],1),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Choose an uncommon `opt_name` to avoid issues")]),t._v(" "),e("p",[t._v("If two instances of Redux use the same "),e("code",[t._v("opt_name")]),t._v(", they will only override one another's settings in order of occurrence.\nIt is crucial that to pick a unique string for your product.")])])])}),[],!1,null,null,null);e.default=s.exports}}]);