<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'appQuote'">Quote</button>
                <button @click="selectedComponent = 'appNew'">New</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <p>{{ selectedComponent }}</p>
                <keep-alive>
                    <component :is="selectedComponent">
                        <p>Default Content</p>
                    </component>    
                </keep-alive>
                
               <!-- <app-quote>
                   <h2 slot="title">{{quoteTitle}}</h2>
                   <p slot="content">Very good quote</p>
               </app-quote> -->
            </div>
        </div>
    </div>
</template>

<script>
	import Quote from './components/Quote.vue'
    import Author from './components/Author.vue'
    import New from './components/New.vue'

    export default {
        data: function () {
            return {
                quoteTitle: 'A different quote',
                selectedComponent: 'appQuote'
            }
        },
        components: {
        	appQuote: Quote,
            appAuthor: Author,
            appNew: New,
        }
    }
</script>

<style scoped>

</style>
