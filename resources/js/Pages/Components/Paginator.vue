<template>
    <nav aria-label="Page navigation">
        <ul class="pagination">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <a class="page-link" href="#" @click.prevent="goToPage(1)"
                    >Primeira</a
                >
            </li>
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <a class="page-link" href="#" @click.prevent="goToPreviousPage"
                    ><i class="bi bi-arrow-left"></i
                ></a>
            </li>
            <li
                v-for="page in pages"
                :key="page"
                class="page-item"
                :class="{ active: page === currentPage }"
            >
                <a class="page-link" href="#" @click.prevent="goToPage(page)">{{
                    page
                }}</a>
            </li>
            <li
                class="page-item"
                :class="{ disabled: currentPage === totalPages }"
            >
                <a class="page-link" href="#" @click.prevent="goToNextPage"
                    ><i class="bi bi-arrow-right"></i
                ></a>
            </li>
            <li
                class="page-item"
                :class="{ disabled: currentPage === totalPages }"
            >
                <a
                    class="page-link"
                    href="#"
                    @click.prevent="goToPage(totalPages)"
                    >Última</a
                >
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    name: "PaginationComponent",
    props: {
        currentPage: {
            type: Number,
            default: 1,
        },
        totalItems: {
            type: Number,
            required: true,
        },
        perPage: {
            type: Number,
            default: 10,
        },
    },
    computed: {
        totalPages() {
            return Math.ceil(this.totalItems / this.perPage);
        },
        pages() {
            let startPage, endPage;
            if (this.totalPages <= 5) {
                startPage = 1;
                endPage = this.totalPages;
            } else {
                if (this.currentPage <= 3) {
                    startPage = 1;
                    endPage = 5;
                } else if (this.currentPage + 2 >= this.totalPages) {
                    startPage = this.totalPages - 4;
                    endPage = this.totalPages;
                } else {
                    startPage = this.currentPage - 2;
                    endPage = this.currentPage + 2;
                }
            }
            return Array.from(
                { length: endPage - startPage + 1 },
                (_, i) => startPage + i
            );
        },
    },
    methods: {
        goToPage(page) {
            if (page > 0 && page <= this.totalPages) {
                this.$emit("page-change", page);
            }
        },
        goToPreviousPage() {
            if (this.currentPage > 1) {
                this.goToPage(this.currentPage - 1);
            }
        },
        goToNextPage() {
            if (this.currentPage < this.totalPages) {
                this.goToPage(this.currentPage + 1);
            }
        },
    },
};
</script>
