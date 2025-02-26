<template>
    <Layout> </Layout>
    <div class="container-fluid">
        <LinkCard
            title="Usuários"
            description="Gerencie os usuários aqui."
            url="/users"
        />
    </div>
</template>
<script>
import Layout from "@/Pages/Layout/Layout.vue";
import { Link } from "@inertiajs/vue3";
import LinkCard from "../Components/LinkCard.vue";

export default {
    components: {
        Layout,
        Link,
        LinkCard,
    },
};
</script>

<style scoped>
.card-os {
    text-decoration: none;
}
</style>
