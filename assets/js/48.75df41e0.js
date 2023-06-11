(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{281:function(t,e,r){},315:function(t,e,r){"use strict";r(281)},464:function(t,e,r){"use strict";r.r(e);r(315);var _=r(1),v=Object(_.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"filter-hooks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#filter-hooks"}},[t._v("#")]),t._v(" Filter Hooks")]),t._v(" "),e("p",[t._v("The follow table is a list of available filter hooks within Redux that developers may use in their own code.  Please\nnote, a solid understand of "),e("a",{attrs:{href:"https://secure.php.net/docs.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("PHP"),e("OutboundLink")],1),t._v(" and "),e("a",{attrs:{href:"https://codex.wordpress.org/Function_Reference/add_filter",target:"_blank",rel:"noopener noreferrer"}},[t._v("WordPress filter hooks"),e("OutboundLink")],1),t._v("\nare required.")]),t._v(" "),e("p",[t._v("As always, please be sure to replace "),e("code",[t._v("{opt_name}")]),t._v(" with the opt_name string of your Redux instance.")]),t._v(" "),e("p",[t._v("Thanks to "),e("a",{attrs:{href:"https://github.com/paulthecoder",target:"_blank",rel:"noopener noreferrer"}},[t._v("@paulthecoder"),e("OutboundLink")],1),t._v(" for compiling this list.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Tag")]),t._v(" "),e("th",[t._v("Value")]),t._v(" "),e("th",[t._v("Extra Args")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("redux/textdomain/{opt_name}")]),t._v(" "),e("td",[e("strong",[t._v("$locale")]),e("br"),t._v("(string) The locale of the blog or from the ‘locale’ hook.")]),t._v(" "),e("td",[e("strong",[t._v("$text_domain")]),e("br"),t._v("(string) ‘redux-framework’ text domain.")]),t._v(" "),e("td",[t._v("Locale for text domain.")])]),t._v(" "),e("tr",[e("td",[t._v("redux/font-icons")]),t._v(" "),e("td",[e("strong",[t._v("$font_icons")]),e("br"),t._v("(array) Array of elusive icon classes.")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("redux/page/{opt_name}/enqueue/jquery-ui-css")]),t._v(" "),e("td",[e("strong",[t._v("$url")]),e("br"),t._v("(string) The url to enqueue jQuery UI CSS.")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("redux/{opt_name}/field/class/{field.type}")]),t._v(" "),e("td",[e("strong",[t._v("$class")]),e("br"),t._v("(string) Field class file path.")]),t._v(" "),e("td",[e("strong",[t._v("$field")]),e("br"),t._v("(array) Field config data.")]),t._v(" "),e("td",[t._v("Change the path of a specific field.")])]),t._v(" "),e("tr",[e("td",[t._v("redux/{opt_name}/localize/save_pending")]),t._v(" "),e("td",[e("strong",[t._v("$text")]),e("br"),t._v("(string) Save pending text.")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("redux/{opt_name}/localize/reset")]),t._v(" "),e("td",[e("strong",[t._v("$text")]),e("br"),t._v("(string) Reset all string.")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("redux/{opt_name}/localize/reset_section")]),t._v(" "),e("td",[e("strong",[t._v("$text")]),e("br"),t._v("(string) Reset section string.")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("redux/{opt_name}/localize/preset")]),t._v(" "),e("td",[e("strong",[t._v("$text")]),e("br"),t._v("(string) Preset confirm string.")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("redux/{opt_name}/panel/templates_path")]),t._v(" "),e("td",[e("strong",[t._v("$path")]),e("br"),t._v("(string) The panel templates path.")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("redux/{opt_name}/panel/template/{file_name}")]),t._v(" "),e("td",[e("strong",[t._v("$path")]),e("br"),t._v("(string) Path to the template file.")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("redux/{opt_name}/field/font/icons")]),t._v(" "),e("td",[e("strong",[t._v("$font_icons")]),e("br"),t._v("(array) Array of elusive icon classes")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("edux/{opt_name}/field/class/{field.type}")]),t._v(" "),e("td",[e("strong",[t._v("$file_path")]),e("br"),t._v("(string) Field class file.")]),t._v(" "),e("td",[e("strong",[t._v("$field")]),e("br"),t._v("(array) Field config data.")]),t._v(" "),e("td",[t._v("Field class file.")])]),t._v(" "),e("tr",[e("td",[t._v("redux-imported-text-{opt_name}")]),t._v(" "),e("td",[e("strong",[t._v("$text")]),e("br"),t._v("(string) Translated “settings imported” text.")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("redux-defaults-text-{opt_name}")]),t._v(" "),e("td",[e("strong",[t._v("$text")]),e("br"),t._v("(string) Translated all “defaults restored” text.")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("redux-defaults-section-text-{opt_name}")]),t._v(" "),e("td",[e("strong",[t._v("$text")]),e("br"),t._v("(string) Translated section “defaults restored” text.")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("redux-saved-text-{opt_name}")]),t._v(" "),e("td",[e("strong",[t._v("$text")]),e("br"),t._v("(string) Translated “settings saved” text.")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("redux-changed-text-{opt_name}")]),t._v(" "),e("td",[e("strong",[t._v("$text")]),e("br"),t._v("(string) Translated “settings have changed” text.")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("redux/args/{opt_name}")]),t._v(" "),e("td",[e("strong",[t._v("$args")]),e("br"),t._v("(array) ReduxFramework configuration.")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("redux/options/{opt_name}/args")]),t._v(" "),e("td",[e("strong",[t._v("$args")]),e("br"),t._v("(array) ReduxFramework configuration.")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("redux/options/{opt_name}/sections")]),t._v(" "),e("td",[e("strong",[t._v("$sections")]),e("br"),t._v("(array) Field option sections.")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("redux/options/{opt_name}/global_variable")]),t._v(" "),e("td",[e("strong",[t._v("$value")]),e("br"),t._v("(array) Option value to set global_variable with.")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("redux/options/{opt_name}/data/{type}")]),t._v(" "),e("td",[e("strong",[t._v("$data")]),e("br"),t._v("(string) WordPress specific data.")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("redux/options/{opt_name}/defaults")]),t._v(" "),e("td",[e("strong",[t._v("$defaults")]),e("br"),t._v("(array) Option default values.")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("redux/options/{opt_name}/section/{section.id}")]),t._v(" "),e("td",[e("strong",[t._v("$section")]),e("br"),t._v("(array) Section configuration.")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("redux/options/{opt_name}/field/{field.id}/register")]),t._v(" "),e("td",[e("strong",[t._v("$field")]),e("br"),t._v("(array) Field config data.")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("redux/options/{opt_name}/field/{field.id}")]),t._v(" "),e("td",[e("strong",[t._v("$field")]),e("br"),t._v("(array) Field config data.")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("redux/field/{opt_name}/output_css")]),t._v(" "),e("td",[e("strong",[t._v("$field")]),e("br"),t._v("(array) Field config data.")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("redux/field/{opt_name}/{field.type}/render/after")]),t._v(" "),e("td",[e("strong",[t._v("$text")]),e("br"),t._v("(string) Rendered field markup.")]),t._v(" "),e("td",[e("strong",[t._v("$field")]),e("br"),t._v("(array) Field data.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("redux/field/{opt_name}/render/after")]),t._v(" "),e("td",[e("strong",[t._v("$text")]),e("br"),t._v("(string) Rendered field markup.")]),t._v(" "),e("td",[e("strong",[t._v("$field")]),e("br"),t._v("(array) Field data.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("redux/field/{opt_name}/_can_output_css")]),t._v(" "),e("td",[e("strong",[t._v("$field")]),e("br"),t._v("(array) Field data.")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Check if a field meets its requirements before outputting to CSS.")])]),t._v(" "),e("tr",[e("td",[t._v("redux/extension/{opt_name}/{folder}")]),t._v(" "),e("td",[e("strong",[t._v("$file_path")]),e("br"),t._v("(string) Extension class file path.")]),t._v(" "),e("td",[e("strong",[t._v("$extension_class")]),e("br"),t._v("(string) Extension class name.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("redux/validate/{opt_name}/defaults")]),t._v(" "),e("td",[e("strong",[t._v("$defaults")]),e("br"),t._v("(array) Option default values.")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("When all options have been reset to defaults.")])]),t._v(" "),e("tr",[e("td",[t._v("redux/validate/{opt_name}/defaults_section")]),t._v(" "),e("td",[e("strong",[t._v("$plugin_options")]),e("br"),t._v("(array) Option default values.")]),t._v(" "),e("td",[t._v("When a section’s options have been reset to defaults.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("redux/validate/{opt_name}/before_validation")]),t._v(" "),e("td",[e("strong",[t._v("$plugin_options")]),e("br"),t._v("(array) The options array before validation.")]),t._v(" "),e("td",[e("strong",[t._v("$redux_options")]),e("br"),t._v("(array) Redux Framework options array.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("redux/validate/{opt_name}/class/{field.validate}")]),t._v(" "),e("td",[e("strong",[t._v("$file_path")]),e("br"),t._v("(string) Validation class file path.")]),t._v(" "),e("td",[e("strong",[t._v("$class_file")]),e("br"),t._v("(string) Validation class file path.")]),t._v(" "),e("td")])])])])}),[],!1,null,null,null);e.default=v.exports}}]);