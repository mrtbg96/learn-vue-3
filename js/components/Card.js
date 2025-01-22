export default {
    template: `
        <div class="bg-gray-700 border border-gray-700 rounded-lg p-4">
            <header v-if="$slots.header">
                <h2 class="font-bold mb-4">
                    <slot name="header" />
                </h2>
            </header>

            <slot />

            <footer v-if="$slots.footer" class="border-t border-gray-400 mt-4 pt-2">
                <p class="text-sm italic">
                    <slot name="footer" />
                </p>
            </footer>
        </div>
    `
}