<template>
    <div class="row mb-2">
        <div
            class="col-md-12 d-flex justify-content-between align-items-center"
        >
            <div>
                <h2 class="fw-bold text-danger mb-0">
                    <Link :href="backUrl">
                        <i class="bi bi-arrow-left"></i>
                    </Link>
                    {{ title }}
                </h2>
                <p class="text-muted small">{{ description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { Link } from "@inertiajs/vue3";
export default {
    components: { Link },
    props: {
        title: String,
        description: String,
        backUrl: String,
    },
};
</script>
