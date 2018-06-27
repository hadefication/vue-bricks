<template>
    <div class="bricks">
        <slot name="head"></slot>
        <div :class="rowClass">
            <div 
                v-for="(column, columnIndex) in columns" 
                :key="columnIndex"
                :class="columnClass">
                <div 
                    v-for="(item, itemIndex) in column"
                    :key="itemIndex"
                    :class="columnItemClass">
                    <slot name="item" :item="{item, itemIndex}">
                        {{  item }}
                    </slot>
                </div>
            </div>
        </div>
        <slot name="foot"></slot>
    </div>
</template>

<script>
    import chunk from 'lodash.chunk';
    
    export default {
        props: {
            items: {
                default: () => {
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

            initialBreakpoint: {
                default: 'widescreen'
            },
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
            columns()
            {
                let limit = this.breakpoints[this.initialBreakpoint][1];
                let cols = Array.from(Array(limit)).map(item => []);
                let guide = 0;

                this.items.forEach((item, index) => {
                    cols[guide].push(item);
                    guide++;
                    if (guide == limit) {
                        guide = 0;
                    }
                })

                return cols;
            },
        }
    }
</script>
