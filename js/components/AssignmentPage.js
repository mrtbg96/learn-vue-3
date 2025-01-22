import Card from "./Card.js"
import Assignments from "./Assignments.js"

export default {
    components: { Card, Assignments },

    template: `
        <div class="grid gap-6">
            <Assignments></Assignments>

            <Card>
                Card 1 Content
            </Card>

            <Card>
                <template #header>
                    Card 2 Header
                </template>

                Card 2 Content
            </Card>

            <Card>
                <template #header>
                    Card 3 Header
                </template>
                
                Card 3 Content

                <template #footer>
                    Card 3 Footer
                </template>
            </Card>
        </div>
    `,
}