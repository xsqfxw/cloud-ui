<script>
import UButton from '../u-button.vue';

export default { name: 'u-form-table-add-button', extends: UButton };
</script>

<style module>
.root {
    font-size: 14px;
    width: 100%;
    padding: 0 30px;
    margin: 0;
    overflow: visible;
    text-transform: none;
    text-decoration: none;
    cursor: var(--cursor-pointer);
    box-sizing: border-box;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background: #fbfcfc;
    border: 1px solid var(--border-color-base);
    color: #5494db;
    outline: none;
}

.root::before {
    /* font-size: var(--form-table-button-font-size); */
    content: '+ ';
}

.root:hover {
    color: #67aaf5;
    text-decoration: none;
    border: 1px solid var(--border-color-base);
    box-shadow: 0 0 8px rgba(13, 4, 8, 0.1);
}

.root[disabled] {
    background: white;
    color: #ccc;
    border: 1px solid #ddd;
    cursor: var(--cursor-not-allowed);
    color: var(--brand-disabled);
}

.root[disabled]:hover {
    box-shadow: 0 0 0 transparent;
    cursor: var(--cursor-not-allowed);
}
</style>
