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
            assignments: [
                { id:1, name: 'Read from page 24 to page 28', complete: false},
                { id:2, name: 'Finish Math quiz', complete: false },
                { id:3, name: 'Write a little story about yourself in English', complete: false },
                { id: 4, name: 'Prepare a presentation for the Geography class', complete: true },
            ],
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