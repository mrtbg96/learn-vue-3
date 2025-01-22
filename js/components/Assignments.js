import AssignmentList from "./AssignmentList.js"
import AddAssignmentForm from "./AddAssignmentForm.js"

export default {
    components: { AssignmentList, AddAssignmentForm },

    template: `
        <AssignmentList :assignments="filters.inProgress" title="In Progress" :needSpacing="true"></AssignmentList>
        <AssignmentList :assignments="filters.completed" title="Completed"></AssignmentList>
        <div class="border border-gray-600 p-4 mt-8 space-y-4">
            <h4 class="font-bold text-center text-lg">
                Add New Assignment
            </h4>
            <AddAssignmentForm @addNewAssignment="addNewAssignment"></AddAssignmentForm>
        </div>
    `,

    data() {
        return {
            tags: [
                'math',
                'english',
                'geography'
            ],

            assignments: [],
        }
    },

    computed: {
        filters () {
            return {
                inProgress: this.assignments.filter(assignment => ! assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete),
            }
        }
    },

    created() {
        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(assignments => {
                this.assignments = assignments
            })
    },

    methods: {
        addNewAssignment(name) {
            this.assignments.push({
                id: this.assignments.length + 1,
                name: name,
                complete: false
            })
        }
    }
}