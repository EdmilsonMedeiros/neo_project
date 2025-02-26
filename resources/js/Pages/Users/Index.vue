<template>
    <Layout> </Layout>

    <div class="container-fluid mt-2 d-flex justify-content-between">
        <Header
            backUrl="/"
            title="Lista de Usuários"
            description="Gerencie a pemissão dos usuários"
        />
        <div class="row mb-2">
            <div class="col-md-12 d-flex justify-content-end">
                <div class="">
                    <Link href="/users/create" class="btn btn-danger">
                        <i class="fa fa-plus"></i>
                        Adicionar Usuário
                    </Link>
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
            :buttons="['delete', 'edit']"
            :perPage="10"
            :searchTitle="'Buscar usuários'"
            @editPermission="onEditPermission"
            @destroyRegisterEmit="onDeleteUser"
            @editRegister="onEditUser"
            ref="usersTable"
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
import { Link } from "@inertiajs/vue3";
import Header from "@/Pages/Components/Header.vue";
export default {
    components: {
        Layout,
        Table,
        ModalSetUserPermission,
        Link,
        Header,
    },
    props: {
        user: Object,
        permissions: Object,
    },
    data() {
        return {
            selectedUser: null,
            users: [],
        };
    },
    methods: {
        onEditUser(__user) {
            this.$inertia.get(`/users/${__user.id}/edit`);
        },
        onDeleteUser(__user) {
            if (confirm("Tem certeza que deseja deletar este usuário?")) {
                this.$inertia.delete(`/users/${__user}`);
            }

            this.refreshTable();
        },
        onEditPermission(__user) {
            this.selectedUser = __user;
            this.$nextTick(() => {
                $("#setPermissionModal").modal("show");
            });
        },

        refreshTable() {
            this.$refs.usersTable.reloadTable();
        },
    },
};
</script>
