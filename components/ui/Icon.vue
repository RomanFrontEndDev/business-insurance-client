<script lang="ts" setup>
import { ref } from '#imports';

const props = defineProps<{
    name: string;
}>();

const icon = ref({});

const iconsImport = import.meta.glob('/assets/icons/**/**.svg', {
    query:  'raw',
    eager:  false,
    import: 'default'
});
const rawIcon = await iconsImport[`/assets/icons/${props.name}.svg`]();

icon.value = rawIcon;

if (!rawIcon) {
    console.error(`Icon '${props.name}' doesn't exist in 'assets/icons'`);
}
</script>

<template>
    <span
        class="icon"
        v-html="rawIcon"
    />
</template>

<style lang="scss">
.icon {
    display: flex;
    fill: currentcolor !important;
}
</style>
