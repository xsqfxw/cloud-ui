<template>
<div :class="$style.root">
    <slot></slot>
</div>
</template>

<script>
export default { name: 'u-avatar' };
</script>

<style module>
.root {
    display: inline-block;
    background: #c1c7d0 url('./assets/avatar.png');
    background-size: 100%;
    width: var(--avatar-size);
    height: var(--avatar-size);
    border-radius: 50%;
    overflow: hidden;
    vertical-align: middle;
    margin-bottom: 2px;
}

.root > img {
    max-width: 100%;
}

.root[shape="circle"] { /* By default */ }

.root[shape="square"] {
    border-radius: 0;
}

.root[size="mini"] {
    width: var(--avatar-size-mini);
    height: var(--avatar-size-mini);
}

.root[size="small"] {
    width: var(--avatar-size-small);
    height: var(--avatar-size-small);
}

.root[size="normal"] { /* By default */ }

.root[size="large"] {
    width: var(--avatar-size-large);
    height: var(--avatar-size-large);
}

.root[size="huge"] {
    width: var(--avatar-size-huge);
    height: var(--avatar-size-huge);
}

.root[type="1"] {
    background-image: url('./assets/avatar-1.png');
}

.root[type="2"] {
    background-image: url('./assets/avatar-2.png');
}

.root[type="3"] {
    background-image: url('./assets/avatar-3.png');
}

.root[type="4"] {
    background-image: url('./assets/avatar-4.png');
}

.root[type="5"] {
    background-image: url('./assets/avatar-5.png');
}

.root[type="6"] {
    background-image: url('./assets/avatar-6.png');
}
</style>
