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
                        {{ item }}
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

        name: 'bricks',

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
        data()
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
            columns()
            {
                let guide = 0;
                let cols = Array.from(Array(this.columnLimit)).map(item => []);

                this.items.forEach((item, index) => {
                    cols[guide].push(item);
                    guide++;
                    if (guide == this.columnLimit) {
                        guide = 0;
                    }
                })

                return cols;
            },
        },

        /**
         * Created hook
         *
         * @return {void}
         * @author {glen}
         */
        created()
        {
            this.observer = new ResizeObserver(entries => {
                entries.forEach(({ contentRect: { width }}) => {
                    let bp = Object.values(this.breakpoints).filter(item => {
                        console.log(item);
                        return true;
                    })
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
        mounted()
        {
            this.observer.observe(this.$el);
        },
    }
</script>
