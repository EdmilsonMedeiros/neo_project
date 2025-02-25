<template>
    <Layout> </Layout>

    <div class="container-fluid mt-2">
        <div class="row mb-2">
            <div
                class="col-md-12 d-flex justify-content-between align-items-center"
            >
                <div>
                    <h2 class="fw-bold text-danger mb-0">Lista de Usuários</h2>
                    <p class="text-muted small">
                        Gerencie a pemissão dos usuários
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid">
        <Table
            :requestUrl="'/users/getUsers'"
            :collumnNames="['Nome', 'Email']"
            :collumnKeys="['name', 'email']"
            :checkBoxes="false"
            :deleteAllButton="false"
            :perPage="10"
            :searchTitle="'Buscar usuários'"
            :buttons="['permission']"
            @editPermission="onEditPermission"
        />
        <ModalSetUserPermission
            v-if="selectedUser"
            :selectedUser="selectedUser"
            :allPermissions="permissions"
        />
    </div>
</template>
<script>
import Layout from "@/Pages/Layout/Layout.vue";
import Table from "@/Pages/Components/Table.vue";
import ModalSetUserPermission from "@/Pages/Components/ModalSetUserPermission.vue";

export default {
    components: {
        Layout,
        Table,
        ModalSetUserPermission,
    },
    props: {
        user: Object,
        permissions: Object,
    },
    data() {
        return {
            selectedUser: null,
        };
    },
    methods: {
        onEditPermission(__user) {
            this.selectedUser = __user;
            this.$nextTick(() => {
                $("#setPermissionModal").modal("show");
            });
        },
    },
};
</script>
