export default {
    template: `
        <button class="bg-sky-600 hover:bg-sky-700 border rounded px-4 py-2 text-white transition-colors duration-300 disabled:cursor-not-allowed" :disabled="processing" @click="toggle">
            <slot />
        </button>`,

    data() {
        return {
            processing: false
        }
    },

    methods: {
        toggle () {
            this.processing = ! this.processing
        }
    }
}