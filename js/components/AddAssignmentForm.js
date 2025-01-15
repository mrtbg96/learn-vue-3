export default {
    template: `
        <form 
            @submit.prevent="addNewAssignment" 
            class="flex flex-col space-y-2"
        >
            <input 
                v-model="newAssignment" 
                placeholder="New assignment..." 
                class="bg-gray-600 outline-none border-2 border-gray-600 focus:border-green-600 p-2 rounded-lg"
                @focus="removeValidationError" 
            />
            <small 
                v-if="validationTriggered"
                class="font-bold text-xs text-red-400"
            >Assignment is required!
            </small>
            <button 
                type="submit" 
                class="bg-green-700 hover:bg-green-600 py-2 px-4 font-bold rounded-lg transition-colors duration-300"
            >Add
            </button>
        </form>
    `,

    data() {
        return {
            newAssignment: '',
            validationTriggered: false
        }
    },

    methods: {
        addNewAssignment() {
            this.validationTriggered = false
            if (this.newAssignment == '') {
                this.validationTriggered = true
            }

            if (this.validationTriggered == false) {
                this.$emit('addNewAssignment', this.newAssignment);

                this.newAssignment = ''
            }
        },

        removeValidationError() {
            this.validationTriggered = false
        }
    }
}