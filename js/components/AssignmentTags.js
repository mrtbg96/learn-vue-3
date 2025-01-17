export default {
    template: `
        <div class="mb-4 flex justify-center items-center gap-2">
            <button 
                @click="$emit('filterByTag', tag)"
                v-for="tag in allTags"
                class="rounded-lg p-1 text-sm transition-colors duration-300"
                :class="{
                    'bg-gray-100 hover:bg-gray-200 text-gray-800' : tag !== currentTag,
                    'bg-sky-600 hover:bg-sky-500 text-white' : tag === currentTag
                }"
            >
                {{ tag }}
            </button>
        </div>
    `,

    props: {
        tags: Array,
        currentTag: String
    },

    computed: {
        allTags() {
            return ['all', ...new Set(this.tags)]
        },
    }
}