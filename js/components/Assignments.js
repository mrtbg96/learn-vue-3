import AssignmentList from "./AssignmentList.js"

export default {
    components: { AssignmentList },

    template: `
        <AssignmentList :assignments="filters.inProgress" title="In Progress" :needSpacing="true"></AssignmentList>
        <AssignmentList :assignments="filters.completed" title="Completed"></AssignmentList>
    `,

    data() {
        return {
            assignments: [
                { id:1, name: 'Read from page 24 to page 28', complete: false},
                { id:2, name: 'Finish Math quiz', complete: false },
                { id:3, name: 'Write a little story about yourself in English', complete: false },
                { id: 4, name: 'Prepare a presentation for the Geography class', complete: true },
            ]
        }
    },

    computed: {
        filters () {
            return {
                inProgress: this.assignments.filter(assignment => ! assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete),
            }
        }
    }
}