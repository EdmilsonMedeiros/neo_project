<template>
    <div>
        <div
            v-if="$page.props.flash.success && show"
            class="alert alert-success alert-dismissible fade show d-flex align-items-center"
            role="alert"
        >
            <div>
                {{ $page.props.flash.success }}
            </div>
            <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                @click="show = false"
            ></button>
        </div>
        <div
            v-if="
                ($page.props.flash.error ||
                    Object.keys($page.props.errors).length > 0) &&
                show
            "
            class="alert alert-danger alert-dismissible fade show d-flex align-items-center"
            role="alert"
        >
            <div>
                <div v-if="$page.props.flash.error">
                    {{ $page.props.flash.error }}
                </div>
                <div class="p-0 m-0" v-else>
                    <ul class="p-2 m-0">
                        <li
                            v-for="(error, key) in $page.props.errors"
                            :key="key"
                        >
                            {{ error }}
                        </li>
                    </ul>
                </div>
            </div>
            <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                @click="show = false"
            ></button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: true,
        };
    },
    watch: {
        "$page.props.flash": {
            handler() {
                this.show = true;
                this.autoClose();
            },
            deep: true,
        },
    },
    mounted() {
        this.autoClose();
    },
    methods: {
        autoClose() {
            if (this.show) {
                setTimeout(() => {
                    this.show = false;
                }, 8000);
            }
        },
    },
};
</script>
