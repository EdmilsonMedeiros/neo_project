<template>
    <div
        v-if="user"
        class="modal fade"
        id="setPermissionModal"
        tabindex="-1"
        aria-labelledby="bookModalLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
    >
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content p-3">
                <div class="modal-header">
                    <h5 class="modal-title" id="setPermissionModalLabel">
                        Gerenciar Permissões - {{ user.name }}
                        <i class="bi bi-shield-lock"></i>
                    </h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                    ></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label class="fw-bold mb-2"
                            >Permissões Disponíveis:</label
                        >
                        <div
                            v-for="permission in permissions"
                            :key="permission.id"
                            class="form-check"
                        >
                            <input
                                name="permission"
                                class="form-check-input"
                                type="checkbox"
                                :id="'permission_' + permission.id"
                                :value="permission.name"
                                v-model="selectedPermissions"
                            />
                            <label
                                class="form-check-label"
                                :for="'permission_' + permission.id"
                            >
                                {{ permission.name }}
                            </label>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-primary"
                        @click="savePermissions"
                    >
                        Salvar Permissões
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        selectedUser: Object,
        allPermissions: Array,
    },
    data() {
        return {
            user: null,
            permissions: [],
            selectedPermissions: [],
        };
    },
    watch: {
        selectedUser: {
            immediate: true,
            handler(newUser) {
                this.user = newUser;
                this.updateSelectedPermissions();
            },
        },
        allPermissions: {
            immediate: true,
            handler(newPermissions) {
                this.permissions = newPermissions;
            },
        },
    },
    methods: {
        updateSelectedPermissions() {
            if (this.user && this.user.permissions) {
                this.selectedPermissions = this.user.permissions.map(
                    (p) => p.name
                );
            } else {
                this.selectedPermissions = [];
            }
        },
        savePermissions() {
            this.$inertia.put(
                `/users/permissions/sync/${this.user.id}`,
                this.selectedPermissions,
                {
                    onSuccess: () => {
                        $("#setPermissionModal").modal("hide");
                    },
                    onError: () => {},
                }
            );
        },
    },
};
</script>
