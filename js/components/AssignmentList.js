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
            <ul>
                <AssignmentListItem 
                    v-if="assignments.length"
                    v-for="assignment in assignments"
                    :assignment="assignment"
                    :key="assignment.id"
                >
                </AssignmentListItem>
                <li v-else>
                    <p class="text-center text-sm text-red-600">
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