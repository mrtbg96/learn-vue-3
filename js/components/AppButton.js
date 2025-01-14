export default {
    template: `
        <button
            :class="{
                'border rounded px-4 py-2 text-white transition-colors duration-300' : true,
                'bg-sky-600 hover:bg-sky-500' : type === 'primary',
                'bg-orange-600 hover:bg-orange-500' : type === 'secondary',
                'bg-green-600 hover:bg-green-500' : type === 'success',
                'bg-yellow-500 hover:bg-yellow-400' : type === 'warning',
                'bg-red-600 hover:bg-red-500' : type === 'error',
                'bg-gray-500 hover:bg-gray-400' : type === 'muted',
                'cursor-wait' : processing
            }" 
            :disabled="processing" 
            @click="toggle">
            <slot />
        </button>`,

    props: {
        type: {
            type: String,
            default: 'primary'
        },
        processing: {
            type: Boolean,
            default: false
        }
    },

    methods: {
        toggle () {
            this.processing = ! this.processing
        }
    }
}