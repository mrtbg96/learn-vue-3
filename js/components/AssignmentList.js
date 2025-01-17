import AssignmentListItem from "./AssignmentListItem.js"
import AssignmentTags from "./AssignmentTags.js"

export default {
    components: { AssignmentListItem, AssignmentTags },

    template: `
        <div :class="{ 'mb-10' : needSpacing }">
            <h2 class="font-bold text-center mb-4">
                {{ title }} 
                <span class="text-sm">
                    ({{ currentTag === 'all' ? assignments.length : filteredAssignments.length }})
                </span>
            </h2>

            <AssignmentTags 
                v-model="currentTag"
                :tags="assignments.map(a => a.tag)"
            />

            <ul class="border border-gray-600 divide-y divide-gray-600">
                <AssignmentListItem 
                    v-if="filteredAssignments.length"
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
        filteredAssignments() {
            return this.currentTag === 'all' ? this.assignments : this.assignments.filter(a => a.tag === this.currentTag)
        }
    }
}