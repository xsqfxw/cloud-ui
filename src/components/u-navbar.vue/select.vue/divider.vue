<script>
import { USelectDivider } from '../../u-select.vue';

export default {
    name: 'u-navbar-select-divider',
    parentName: 'u-navbar-select',
    extends: USelectDivider,
};
</script>

<style module>
.root {
    margin: var(--list-view-divider-margin);
    height: 1px;
    background: var(--navbar-select-divider-background);
}
</style>