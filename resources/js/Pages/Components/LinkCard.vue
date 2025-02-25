<template>
    <Link
        :href="url"
        class="card shadow-sm border-0 rounded-3 card-os"
        style="max-width: 400px"
    >
        <div class="card-body d-flex align-items-center">
            <i class="bi bi-clipboard-check fs-1 text-danger me-3"></i>
            <div>
                <h5 class="card-title fw-bold mb-0">{{ title }}</h5>
                <p class="card-text text-muted">
                    {{ description }}
                </p>
            </div>
        </div>
    </Link>
</template>

<script>
import { Link } from "@inertiajs/vue3";

export default {
    components: {
        Link,
    },
    props: {
        title: String,
        description: String,
        url: String,
    },
};
</script>
