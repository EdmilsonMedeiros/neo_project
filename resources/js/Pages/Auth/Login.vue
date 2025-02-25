<template>
    <div
        class="container d-flex align-items-center justify-content-center min-vh-100"
    >
        <div class="row w-100 justify-content-center">
            <div class="col-md-6 col-lg-5">
                <FlashMessages />
                <div class="card shadow-lg border-0 rounded-4 overflow-hidden">
                    <div
                        class="card-header text-white text-center py-4 position-relative"
                        style="
                            background: linear-gradient(
                                135deg,
                                #ff416c,
                                #ff4b2b
                            );
                            border-bottom: 5px solid #b71c1c;
                        "
                    >
                        <h3 class="mb-0 fw-bold">
                            <i class="bi bi-person-circle me-2 fs-4"></i>
                            Bem-vindo de volta
                        </h3>
                        <p class="mt-2 mb-0 text-white-50">
                            Entre para continuar
                        </p>
                        <div
                            class="position-absolute top-0 start-50 translate-middle"
                        >
                            <i
                                class="bi bi-shield-lock-fill fs-1 text-white opacity-25"
                            ></i>
                        </div>
                    </div>
                    <div class="card-body p-5 bg-white">
                        <form
                            @submit.prevent="handleSubmit"
                            class="needs-validation"
                        >
                            <div class="mb-4">
                                <label
                                    for="email"
                                    class="form-label fw-bold text-dark"
                                    >Email</label
                                >
                                <div class="input-group input-group-lg">
                                    <span
                                        class="input-group-text bg-light border-end-0"
                                    >
                                        <i
                                            class="bi bi-envelope text-danger"
                                        ></i>
                                    </span>
                                    <input
                                        v-model="form.email"
                                        type="email"
                                        class="form-control border-start-0 shadow-sm"
                                        id="email"
                                        required
                                        autofocus
                                        placeholder="Digite seu email"
                                    />
                                </div>
                            </div>
                            <div class="mb-4">
                                <label
                                    for="password"
                                    class="form-label fw-bold text-dark"
                                    >Senha</label
                                >
                                <div class="input-group input-group-lg">
                                    <span
                                        class="input-group-text bg-light border-end-0"
                                    >
                                        <i class="bi bi-key text-danger"></i>
                                    </span>
                                    <input
                                        v-model="form.password"
                                        type="password"
                                        class="form-control border-start-0 shadow-sm"
                                        id="password"
                                        required
                                        placeholder="Digite sua senha"
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                class="btn btn-danger w-100 py-3 fw-bold text-uppercase btn-lg shadow-lg"
                            >
                                <i class="bi bi-box-arrow-in-right me-2"></i
                                >Entrar
                            </button>
                        </form>
                    </div>
                    <div class="card-footer text-center py-4 bg-light border-0">
                        <div class="text-muted">
                            Não tem uma conta?
                            <Link
                                href="/register"
                                class="text-danger fw-bold text-decoration-none"
                            >
                                Cadastre-se aqui
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Link } from "@inertiajs/vue3";
import FlashMessages from "@/Pages/Components/FlashMessages.vue";
import axios from "axios";
export default {
    components: {
        Link,
        FlashMessages,
    },
    data() {
        return {
            form: {
                email: "johndoe@example.com",
                password: "12345678",
            },
        };
    },
    methods: {
        async handleSubmit() {
            this.$inertia.post("/login", this.form);
        },
    },
};
</script>
