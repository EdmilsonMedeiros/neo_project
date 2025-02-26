<template>
    <Layout></Layout>

    <div class="container-fluid">
        <Header
            backUrl="/users"
            title="Editar Usuário"
            description="Edite as informações do usuário"
        />

        <form action="">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="name">Nome</label>
                        <input
                            type="text"
                            class="form-control"
                            id="name"
                            name="name"
                            v-model="form.name"
                        />
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input
                            type="email"
                            class="form-control"
                            id="email"
                            name="email"
                            v-model="form.email"
                        />
                    </div>
                    <div class="form-group">
                        <label for="password">Senha</label>
                        <input
                            type="password"
                            class="form-control"
                            id="password"
                            name="password"
                            v-model="form.password"
                        />
                    </div>
                    <div class="form-group">
                        <label for="password_confirmation"
                            >Confirmar Senha</label
                        >
                        <input
                            type="password"
                            class="form-control"
                            id="password_confirmation"
                            name="password_confirmation"
                            v-model="form.password_confirmation"
                        />
                    </div>
                    <div class="form-group mt-3">
                        <button class="btn btn-primary" @click="submit">
                            <i class="bi bi-save"></i>
                            Salvar
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import Layout from "@/Pages/Layout/Layout.vue";
import Header from "@/Pages/Components/Header.vue";
import { Link } from "@inertiajs/vue3";

export default {
    components: {
        Layout,
        Header,
        Link,
    },
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            form: {
                name: this.user.name,
                email: this.user.email,
                password: "",
                password_confirmation: "",
            },
        };
    },
    methods: {
        submit() {
            this.$inertia.put(`/users/${this.user.id}/update`, this.form);
        },
    },
};
</script>
