<template>
    <nav
        class="navbar navbar-expand-lg navbar-dark"
        style="background-color: #8b0000"
    >
        <div class="container-fluid">
            <Link class="navbar-brand fw-bold text-white" href="/">Painel</Link>

            <!-- Botão para abrir o menu -->
            <button
                class="navbar-toggler border-0 shadow-sm"
                type="button"
                @click="toggleSidebar"
                aria-controls="offcanvasNavbar"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Offcanvas Sidebar -->
            <div
                class="offcanvas offcanvas-end text-bg-dark"
                :class="{ show: sidebarVisible }"
                tabindex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
            >
                <div class="offcanvas-header" style="background-color: #b22222">
                    <h5
                        class="offcanvas-title text-white fw-bold"
                        id="offcanvasNavbarLabel"
                    >
                        Menu
                    </h5>
                    <button
                        type="button"
                        class="btn-close btn-close-white"
                        @click="toggleSidebar"
                        aria-label="Fechar"
                    ></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                            <Link class="nav-link text-white" href="/">
                                <i class="bi bi-house-door-fill me-2"></i> Home
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-white" href="/users">
                                <i class="bi bi-people-fill me-2"></i> Usuários
                            </Link>
                        </li>
                        <li class="nav-item">
                            <form @submit.prevent="logOut">
                                <button
                                    type="submit"
                                    class="nav-link text-white"
                                >
                                    <i class="bi bi-box-arrow-right me-2"></i>
                                    Sair
                                </button>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <FlashMessages class="p-2" />
</template>

<script>
import { Link } from "@inertiajs/vue3";
import FlashMessages from "@/Pages/Components/FlashMessages.vue";

export default {
    components: {
        Link,
        FlashMessages,
    },
    data() {
        return {
            sidebarVisible: false,
        };
    },
    methods: {
        toggleSidebar() {
            this.sidebarVisible = !this.sidebarVisible;
        },
        logOut() {
            try {
                const response = this.$inertia.get("/logOut");
                this.$router.push("/login");
            } catch (e) {
                console.log(e);
            }
        },
    },
};
</script>

<style scoped>
/* Adicione aqui estilos adicionais, se necessário */
</style>
