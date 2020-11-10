<template>
    <div>
        <li>
            <div>{{data.name}}exp</div>
            <ul v-if="data.isParent">
                <TreeGroup v-for="child in data.childGroup" :key="child.id" :data="child"/>
            </ul>
        </li>
    </div>
</template>
<script>
export default {
    name:"TreeGroup",
    props:['data']
}
</script>
<style scoped>

</style>