import AssignmentListItem from "./AssignmentListItem.js"

export default {
    components: { AssignmentListItem },

    template: `
        <div :class="{ 'mb-10' : needSpacing }">
            <h2 class="font-bold text-center mb-4">
                {{ title }} 
                <span class="text-sm">
                    ({{ assignments.length }})
                </span>
            </h2>

            <div class="mb-4 flex justify-center items-center gap-2">
                <button 
                    @click="currentTag = tag"
                    v-for="tag in tags"
                    class="rounded-lg p-1 text-sm transition-colors duration-300"
                    :class="{
                        'bg-gray-100 hover:bg-gray-200 text-gray-800' : tag !== currentTag,
                        'bg-sky-600 hover:bg-sky-500 text-white' : tag === currentTag
                    }"
                >
                    {{ tag }}
                </button>
            </div>

            <ul class="border border-gray-600 divide-y divide-gray-600">
                <AssignmentListItem 
                    v-if="assignments.length"
                    v-for="assignment in filteredAssignments"
                    :assignment="assignment"
                    :key="assignment.id"
                >
                </AssignmentListItem>
                <li v-else class="p-4">
                    <p class="text-center text-sm text-red-400">
                        No data found!
                    </p>
                </li>
            </ul>
        </div>
    `,

    props: {
        assignments: Array,
        title: String,
        needSpacing: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            currentTag: 'all'
        }
    },

    computed: {
        tags() {
            return ['all', ...new Set(this.assignments.map(a => a.tag))]
        },
        
        filteredAssignments() {
            return this.currentTag === 'all' ? this.assignments : this.assignments.filter(a => a.tag === this.currentTag)
        }
    }
}