/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

//

var script = {

    name: 'bricks',

    props: {
        items: {
            default: function () {
                return [];
            }
        },

        rowClass: {
            default: 'columns'
        },

        columnClass: {
            default: 'column'
        },

        columnItemClass: {
            default: 'item'
        },

        breakpoints: {
            default: {
                mobile: [768, 1],
                tablet: [769, 2],
                desktop: [1024, 3],
                widescreen: [1216, 4],
                fullhd: [1408, 5]
            }
        },

        initialColumns: {
            default: 4
        },
    },
    
    /**
     * Data
     *
     * @return {Object}
     * @author {glen}
     */
    data: function data()
    {
        return {
            columnLimit: this.initialColumns
        }
    },

    /**
     * Computed
     *
     * @type {Object}
     * @author {glen}
     */
    computed: {
        
        /**
         * Columns
         *
         * @return {Object}
         * @author {glen}
         */
        columns: function columns()
        {
            var this$1 = this;

            var guide = 0;
            var cols = Array.from(Array(this.columnLimit)).map(function (item) { return []; });

            this.items.forEach(function (item, index) {
                cols[guide].push(item);
                guide++;
                if (guide == this$1.columnLimit) {
                    guide = 0;
                }
            });

            return cols;
        },
    },

    /**
     * Created hook
     *
     * @return {void}
     * @author {glen}
     */
    created: function created()
    {
        var this$1 = this;

        this.observer = new ResizeObserver(function (entries) {
            entries.forEach(function (ref) {
                var width = ref.contentRect.width;

                var bp = Object.values(this$1.breakpoints).filter(function (item) {
                    console.log(item);
                    return true;
                });
                console.log(width);
            });
        });
    },

    /**
     * Mounted hook
     *
     * @return {void}
     * @author {glen}
     */
    mounted: function mounted()
    {
        this.observer.observe(this.$el);
    },
};

/* script */
            var __vue_script__ = script;
            
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "bricks" },
    [
      _vm._t("head"),
      _vm._v(" "),
      _c(
        "div",
        { class: _vm.rowClass },
        _vm._l(_vm.columns, function(column, columnIndex) {
          return _c(
            "div",
            { key: columnIndex, class: _vm.columnClass },
            _vm._l(column, function(item, itemIndex) {
              return _c(
                "div",
                { key: itemIndex, class: _vm.columnItemClass },
                [
                  _vm._t(
                    "item",
                    [
                      _vm._v(
                        "\n                    " +
                          _vm._s(item) +
                          "\n                "
                      )
                    ],
                    { item: { item: item, itemIndex: itemIndex } }
                  )
                ],
                2
              )
            })
          )
        })
      ),
      _vm._v(" "),
      _vm._t("foot")
    ],
    2
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = "data-v-2612ea79";
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    {
      component.__file = "/Users/hadefication/JavaScripts/vue-bricks/src/components/Bricks.vue";
    }

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Bricks = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    __vue_create_injector__,
    undefined
  );

var install = function (Vue) {
    Vue.mixin({
        components: {
            Bricks: Bricks
        }
    });
};

var GlobalVue = null;

if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
}

if (GlobalVue) {
    GlobalVue.use({ install: install });
}

var index = {   
    install: install,
    Bricks: Bricks
};

export default index;
