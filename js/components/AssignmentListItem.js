export default {
    template: `
        <li>
            <input type="checkbox" v-model="assignment.complete">
            {{ assignment.name }}
        </li>
    `,

    props: {
        assignment: Object,
    }
}