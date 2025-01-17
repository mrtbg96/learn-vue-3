export default {
    template: `
        <div class="mb-4 flex justify-center items-center gap-2">
            <button 
                @click="$emit('update:modelValue', tag)"
                v-for="tag in allTags"
                class="rounded-lg p-1 text-sm transition-colors duration-300"
                :class="{
                    'bg-gray-100 hover:bg-gray-200 text-gray-800' : tag !== modelValue,
                    'bg-sky-600 hover:bg-sky-500 text-white' : tag === modelValue
                }"
            >
                {{ tag }}
            </button>
        </div>
    `,

    props: {
        tags: Array,
        modelValue: String
    },

    computed: {
        allTags() {
            return ['all', ...new Set(this.tags)]
        },
    }
}