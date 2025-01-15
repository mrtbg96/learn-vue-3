export default {
    template: `
        <li class="p-4 space-x-3">
            <input type="checkbox" v-model="assignment.complete">
            <span>{{ assignment.name }}</span>
        </li>
    `,

    props: {
        assignment: Object,
    }
}