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
            <ul class="border border-gray-600 divide-y divide-gray-600">
                <AssignmentListItem 
                    v-if="assignments.length"
                    v-for="assignment in assignments"
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
    }
}