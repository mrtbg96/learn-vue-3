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

            assignments: [
                { id: 1, name: 'Read from page 24 to page 28', complete: false, tag: 'english' },
                { id: 2, name: 'Finish Math quiz', complete: false, tag: 'math' },
                { id: 3, name: 'Find a project idea', complete: true, tag: 'physics' },
                { id: 4, name: 'Write a little story about yourself in English', complete: false, tag: 'english' },
                { id: 5, name: 'Prepare a presentation for the Geography class', complete: true, tag: 'geography' },
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