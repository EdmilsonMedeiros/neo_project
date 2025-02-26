<template>
    <div
        v-if="deleteAllButton && selectedCheckboxes.length !== 0"
        class="row p-0 m-0 justify-start"
    >
        <div class="p-0 mb-1">
            <button
                type="button"
                class="btn btn-danger bi bi-trash"
                @click="destroySelectedRegisters"
            >
                {{ selectedCheckboxes.length }} Selecionados
            </button>
        </div>
    </div>
    <div :class="'row p-0 m-0 mb-2 d-flex justify-content-between'">
        <div class="col-6 p-0 row">
            <div class="col-6 col-sm-6 col-md-2">
                <select
                    name=""
                    id=""
                    class="form-control"
                    @change="alterItemsPerPage($event.target.value)"
                >
                    <option value="5" :selected="perPage == 5">5</option>
                    <option value="10" :selected="perPage == 10">10</option>
                    <option value="20" :selected="perPage == 20">15</option>
                    <option value="50" :selected="perPage == 50">50</option>
                </select>
            </div>
            <div class="col-6 col-sm-6 col-md-3">
                <label for="" class="mt-1">por página </label>
            </div>
        </div>

        <div class="col-6 col-sm-6 col-md-3 p-0">
            <input
                class="form-control"
                type="text"
                :placeholder="searchTitle ?? 'Buscar registros'"
                v-model="searchedValue"
                @input="onSearchValue"
            />
        </div>
    </div>

    <table v-if="reloadTableValue" class="table table-stripped table-hover">
        <thead>
            <tr class="bg-primary">
                <th v-if="checkBoxes">
                    <label
                        for=""
                        id=""
                        :class="[
                            'labelCheckbox',
                            checkedAllBoxes ? 'checkboxChecked' : '',
                        ]"
                        @click="onCheckedAllBoxes"
                    >
                        <input
                            :class="['checkbox', 'rounded']"
                            type="checkbox"
                            name="checkbox"
                            id="checkboxId"
                            :checked="checkedAllBoxes"
                            style="
                                width: 16px;
                                height: 16px;
                                border-radius: 1em;
                            "
                        />
                    </label>
                </th>
                <th v-for="(collumnName, index) in collumnNames">
                    {{ collumnName }}
                </th>
                <th v-if="buttons">Ações</th>
            </tr>
        </thead>
        <tbody v-if="registers.length > 0">
            <tr v-for="(register, index) in registers">
                <td v-if="checkBoxes">
                    <label for="" id="" class="mb-3">
                        <input
                            class="checkbox labelCheckbox select-rows-checkbox"
                            type="checkbox"
                            name="checkbox"
                            :id="`checkboxId${register.id}`"
                            style="
                                width: 16px;
                                height: 16px;
                                border-radius: 1em;
                                color: blue;
                            "
                            @click="seleectCheckbox(`checkboxId${register.id}`)"
                        />
                    </label>
                </td>

                <td v-for="(collumnKey, index) in collumnKeys">
                    <img
                        v-if="withImage && index === 0"
                        :width="30"
                        :src="register[withImage]"
                        alt="Capa do livro"
                        srcset=""
                    />
                    {{ register[collumnKey] }}
                </td>

                <td v-if="buttons">
                    <a
                        @click="editPermission(register)"
                        href="#"
                        v-if="buttons.includes('permission')"
                        class="ml-1 btn btn-outline-warning btn-sm bi bi-key m-1"
                    ></a>
                    <a
                        @click="destroyRegister(register.id)"
                        href="#"
                        v-if="buttons.includes('delete')"
                        class="ml-1 btn btn-outline-danger btn-sm bi bi-trash m-1"
                    ></a>
                    <a
                        @click="editRegister(register)"
                        href="#"
                        v-if="buttons.includes('edit')"
                        class="ml-1 btn btn-outline-warning btn-sm bi bi-pencil m-1"
                    ></a>
                    <a
                        @click="showRegister(register)"
                        href="#"
                        v-if="buttons.includes('show')"
                        class="ml-1 btn btn-outline-primary btn-sm bi bi-eye m-1"
                    ></a>
                </td>
            </tr>
        </tbody>
    </table>

    <div v-if="registers.length === 0" class="p-0 m-0">
        <h1 class="text-secondary fs-5 text-center border-none mt-1 ml-0 p-0">
            Nenhum registro encontrado
        </h1>
        <hr />
    </div>

    <div class="d-flex justify-content-between">
        <div>{{ totalRegisters ?? 0 }} registros</div>

        <div>
            <Paginator
                @page-change="onPageChange"
                :currentPage="actualPage"
                :totalItems="totalRegisters"
                :perPage="selectedPerPage"
            />
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Paginator from "./Paginator.vue";
import { Link } from "@inertiajs/vue3";

export default {
    components: {
        Paginator,
        Link,
    },
    emits: [
        "destroyRegisterEmit",
        "destroySelectedRegistersEmit",
        "showRegisterEmit",
        "page-change",
        "onShowRegister",
        "editRegister",
        "editPermission",
    ],
    props: {
        requestUrl: String, // UR de busca dos registros
        collumnNames: Object, // Nomes de cada coluna da tabela
        collumnKeys: Object, // chaves de cada registro, sendo uma para cada collumnName
        buttons: Object, // Botões de ação: delete, edit e show
        perPage: Number, // Quantidade de ítens por página
        searchTitle: String, // Placeholder do campo de busca

        checkBoxes: Boolean, // Caixas de seleção na tabela
        deleteAllButton: Boolean, // Ao selecionar, exibir botão de deletar todos?
        withImage: String, // Imagem na primeira coluna
    },
    data() {
        return {
            reloadTableValue: true,

            registers: [],
            searchedValue: "",
            selectedPerPage: this.perPage,
            totalRegisters: 0,
            totalPages: 0,
            actualPage: 1,

            checkedAllBoxes: false,
            selectedCheckboxes: [],
        };
    },
    methods: {
        async getRegisters() {
            try {
                let registers = await axios.post(this.requestUrl, {
                    page: this.actualPage,
                    searchedValue: this.searchedValue,
                    perPage: this.selectedPerPage,
                });

                this.totalRegisters = registers.data.total;
                this.totalPages = Math.ceil(
                    this.totalRegisters / this.selectedPerPage
                );
                this.selectedPerPage = registers.data.per_page;
                this.registers = registers.data.data;
                this.actualPage = registers.data.current_page;
            } catch (e) {
                console.log("Erro to reload data: ", e);
            }
        },

        async reloadTable() {
            this.reloadTableValue = false;
            await this.getRegisters(); // Busca os dados atualizados
            this.reloadTableValue = true;

            // Atualiza os checkboxes se necessário
            if (this.checkBoxes) {
                setTimeout(() => {
                    this.checkBoxesOnReload();
                }, 10);
            }
        },

        async checkBoxesOnReload() {
            let allCheckBoxes = document.querySelectorAll(
                ".select-rows-checkbox"
            );
            let countCheckedBoxes = 0;
            allCheckBoxes.forEach((element) => {
                if (this.selectedCheckboxes.includes(element.id)) {
                    element.checked = true;
                    countCheckedBoxes++;
                } else {
                    element.checked = false;
                }
            });

            if (countCheckedBoxes == this.selectedPerPage) {
                this.checkedAllBoxes = true;
            } else {
                this.checkedAllBoxes = false;
            }
        },

        async alterItemsPerPage(value) {
            this.selectedPerPage = value;
            await this.getRegisters();
            this.reloadTable();
        },

        onSearchValue() {
            this.getRegisters();
        },

        async onPageChange(page) {
            this.actualPage = page;
            await this.getRegisters();
            this.reloadTable();
        },

        onCheckedAllBoxes() {
            this.checkedAllBoxes = !this.checkedAllBoxes;
            let allCheckBoxes = document.querySelectorAll(
                ".select-rows-checkbox"
            );
            allCheckBoxes.forEach((element) => {
                element.checked = this.checkedAllBoxes;
                if (this.checkedAllBoxes) {
                    if (!this.selectedCheckboxes.includes(element.id)) {
                        this.selectedCheckboxes.push(element.id);
                    }
                } else {
                    let index = this.selectedCheckboxes.indexOf(element.id);
                    if (index != -1) {
                        this.selectedCheckboxes.splice(index, 1);
                    }
                }
            });
        },

        destroySelectedRegisters() {
            const registersIds = [];
            this.selectedCheckboxes.forEach((id) => {
                let cleanedId = id.replace("checkboxId", "");
                registersIds.push(cleanedId.trim());
            });

            this.$emit("destroySelectedRegistersEmit", registersIds);
        },

        destroyRegister(register) {
            this.$emit("destroyRegisterEmit", register);
        },

        showRegister(register) {
            this.$emit("showRegisterEmit", register);
        },
        editRegister(register) {
            this.$emit("editRegister", register);
        },
        editPermission(register) {
            this.$emit("editPermission", register);
        },
    },
    mounted() {
        this.getRegisters();
    },
    watch: {},
};
</script>
