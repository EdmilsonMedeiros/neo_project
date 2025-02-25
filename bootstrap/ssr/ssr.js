import { Link, createInertiaApp } from "@inertiajs/vue3";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderClass } from "vue/server-renderer";
import { useSSRContext, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, createSSRApp, h } from "vue";
import axios from "axios";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$9 = {
  data() {
    return {
      show: true
    };
  },
  watch: {
    "$page.props.flash": {
      handler() {
        this.show = true;
        this.autoClose();
      },
      deep: true
    }
  },
  mounted() {
    this.autoClose();
  },
  methods: {
    autoClose() {
      if (this.show) {
        setTimeout(() => {
          this.show = false;
        }, 8e3);
      }
    }
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  if (_ctx.$page.props.flash.success && $data.show) {
    _push(`<div class="alert alert-success alert-dismissible fade show d-flex align-items-center" role="alert"><div>${ssrInterpolate(_ctx.$page.props.flash.success)}</div><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`);
  } else {
    _push(`<!---->`);
  }
  if ((_ctx.$page.props.flash.error || Object.keys(_ctx.$page.props.errors).length > 0) && $data.show) {
    _push(`<div class="alert alert-danger alert-dismissible fade show d-flex align-items-center" role="alert"><div>`);
    if (_ctx.$page.props.flash.error) {
      _push(`<div>${ssrInterpolate(_ctx.$page.props.flash.error)}</div>`);
    } else {
      _push(`<div class="p-0 m-0"><ul class="p-2 m-0"><!--[-->`);
      ssrRenderList(_ctx.$page.props.errors, (error, key) => {
        _push(`<li>${ssrInterpolate(error)}</li>`);
      });
      _push(`<!--]--></ul></div>`);
    }
    _push(`</div><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Components/FlashMessages.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const FlashMessages = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9]]);
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: FlashMessages
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$8 = {
  components: {
    Link,
    FlashMessages
  },
  data() {
    return {
      form: {
        email: "johndoe@example.com",
        password: "12345678"
      }
    };
  },
  methods: {
    async handleSubmit() {
      this.$inertia.post("/login", this.form);
    }
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FlashMessages = resolveComponent("FlashMessages");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container d-flex align-items-center justify-content-center min-vh-100" }, _attrs))}><div class="row w-100 justify-content-center"><div class="col-md-6 col-lg-5">`);
  _push(ssrRenderComponent(_component_FlashMessages, null, null, _parent));
  _push(`<div class="card shadow-lg border-0 rounded-4 overflow-hidden"><div class="card-header text-white text-center py-4 position-relative" style="${ssrRenderStyle({ "background": "linear-gradient(\n                                135deg,\n                                #ff416c,\n                                #ff4b2b\n                            )", "border-bottom": "5px solid #b71c1c" })}"><h3 class="mb-0 fw-bold"><i class="bi bi-person-circle me-2 fs-4"></i> Bem-vindo de volta </h3><p class="mt-2 mb-0 text-white-50"> Entre para continuar </p><div class="position-absolute top-0 start-50 translate-middle"><i class="bi bi-shield-lock-fill fs-1 text-white opacity-25"></i></div></div><div class="card-body p-5 bg-white"><form class="needs-validation"><div class="mb-4"><label for="email" class="form-label fw-bold text-dark">Email</label><div class="input-group input-group-lg"><span class="input-group-text bg-light border-end-0"><i class="bi bi-envelope text-danger"></i></span><input${ssrRenderAttr("value", $data.form.email)} type="email" class="form-control border-start-0 shadow-sm" id="email" required autofocus placeholder="Digite seu email"></div></div><div class="mb-4"><label for="password" class="form-label fw-bold text-dark">Senha</label><div class="input-group input-group-lg"><span class="input-group-text bg-light border-end-0"><i class="bi bi-key text-danger"></i></span><input${ssrRenderAttr("value", $data.form.password)} type="password" class="form-control border-start-0 shadow-sm" id="password" required placeholder="Digite sua senha"></div></div><button type="submit" class="btn btn-danger w-100 py-3 fw-bold text-uppercase btn-lg shadow-lg"><i class="bi bi-box-arrow-in-right me-2"></i>Entrar </button></form></div></div></div></div></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Login = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Login
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = {
  components: {
    Link,
    FlashMessages
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      }
    };
  },
  methods: {
    async register() {
      this.$inertia.post("/register", this.form);
    }
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FlashMessages = resolveComponent("FlashMessages");
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container d-flex align-items-center justify-content-center min-vh-100" }, _attrs))}><div class="row w-100 justify-content-center"><div class="col-md-6 col-lg-5">`);
  _push(ssrRenderComponent(_component_FlashMessages, null, null, _parent));
  _push(`<div class="card shadow-lg border-0 rounded-4 overflow-hidden"><div class="card-header text-white text-center py-4 position-relative" style="${ssrRenderStyle({ "background": "linear-gradient(\n                                135deg,\n                                #ff416c,\n                                #ff4b2b\n                            )", "border-bottom": "5px solid #b71c1c" })}"><h3 class="mb-0 fw-bold"><i class="bi bi-person-plus me-2 fs-4"></i> Criar uma nova conta </h3><p class="mt-2 mb-0 text-white-50"> Preencha os campos para se cadastrar </p><div class="position-absolute top-0 start-50 translate-middle"><i class="bi bi-person-fill-add fs-1 text-white opacity-25"></i></div></div><div class="card-body p-5 bg-white"><form class="needs-validation"><div class="mb-4"><label for="name" class="form-label fw-bold text-dark">Nome Completo</label><div class="input-group input-group-lg"><span class="input-group-text bg-light border-end-0"><i class="bi bi-person text-danger"></i></span><input${ssrRenderAttr("value", $data.form.name)} type="text" class="form-control border-start-0 shadow-sm" id="name" required autofocus placeholder="Digite seu nome"></div></div><div class="mb-4"><label for="email" class="form-label fw-bold text-dark">Email</label><div class="input-group input-group-lg"><span class="input-group-text bg-light border-end-0"><i class="bi bi-envelope text-danger"></i></span><input${ssrRenderAttr("value", $data.form.email)} type="email" class="form-control border-start-0 shadow-sm" id="email" required placeholder="Digite seu email"></div></div><div class="mb-4"><label for="password" class="form-label fw-bold text-dark">Senha</label><div class="input-group input-group-lg"><span class="input-group-text bg-light border-end-0"><i class="bi bi-key text-danger"></i></span><input${ssrRenderAttr("value", $data.form.password)} type="password" class="form-control border-start-0 shadow-sm" id="password" required placeholder="Digite sua senha"></div></div><div class="mb-4"><label for="password_confirmation" class="form-label fw-bold text-dark">Confirmar Senha</label><div class="input-group input-group-lg"><span class="input-group-text bg-light border-end-0"><i class="bi bi-key text-danger"></i></span><input${ssrRenderAttr("value", $data.form.password_confirmation)} type="password" class="form-control border-start-0 shadow-sm" id="password_confirmation" required placeholder="Confirme sua senha"></div></div><button type="submit" class="btn btn-danger w-100 py-3 fw-bold text-uppercase btn-lg shadow-lg"><i class="bi bi-person-plus me-2"></i>Cadastrar </button></form></div><div class="card-footer text-center py-4 bg-light border-0"><div class="text-muted"> Já tem uma conta? `);
  _push(ssrRenderComponent(_component_Link, {
    href: "/login",
    class: "text-danger fw-bold text-decoration-none"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Faça login aqui `);
      } else {
        return [
          createTextVNode(" Faça login aqui ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Register.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Register = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Register
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = {
  components: {
    Link
  },
  props: {
    title: String,
    description: String,
    url: String
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(ssrRenderComponent(_component_Link, mergeProps({
    href: $props.url,
    class: "card shadow-sm border-0 rounded-3 card-os",
    style: { "max-width": "400px" }
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="card-body d-flex align-items-center"${_scopeId}><i class="bi bi-clipboard-check fs-1 text-danger me-3"${_scopeId}></i><div${_scopeId}><h5 class="card-title fw-bold mb-0"${_scopeId}>${ssrInterpolate($props.title)}</h5><p class="card-text text-muted"${_scopeId}>${ssrInterpolate($props.description)}</p></div></div>`);
      } else {
        return [
          createVNode("div", { class: "card-body d-flex align-items-center" }, [
            createVNode("i", { class: "bi bi-clipboard-check fs-1 text-danger me-3" }),
            createVNode("div", null, [
              createVNode("h5", { class: "card-title fw-bold mb-0" }, toDisplayString($props.title), 1),
              createVNode("p", { class: "card-text text-muted" }, toDisplayString($props.description), 1)
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Components/LinkCard.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const LinkCard = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: LinkCard
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {
  props: {
    selectedUser: Object,
    allPermissions: Array
  },
  data() {
    return {
      user: null,
      permissions: [],
      selectedPermissions: []
    };
  },
  watch: {
    selectedUser: {
      immediate: true,
      handler(newUser) {
        this.user = newUser;
        this.updateSelectedPermissions();
      }
    },
    allPermissions: {
      immediate: true,
      handler(newPermissions) {
        this.permissions = newPermissions;
      }
    }
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
          onError: () => {
          }
        }
      );
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($data.user) {
    _push(`<div${ssrRenderAttrs(mergeProps({
      class: "modal fade",
      id: "setPermissionModal",
      tabindex: "-1",
      "aria-labelledby": "bookModalLabel",
      "aria-hidden": "true",
      "data-bs-backdrop": "static"
    }, _attrs))}><div class="modal-dialog modal-dialog-centered"><div class="modal-content p-3"><div class="modal-header"><h5 class="modal-title" id="setPermissionModalLabel"> Gerenciar Permissões - ${ssrInterpolate($data.user.name)} <i class="bi bi-shield-lock"></i></h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div><div class="modal-body"><div class="mb-3"><label class="fw-bold mb-2">Permissões Disponíveis:</label><!--[-->`);
    ssrRenderList($data.permissions, (permission) => {
      _push(`<div class="form-check"><input name="permission" class="form-check-input" type="checkbox"${ssrRenderAttr("id", "permission_" + permission.id)}${ssrRenderAttr("value", permission.name)}${ssrIncludeBooleanAttr(Array.isArray($data.selectedPermissions) ? ssrLooseContain($data.selectedPermissions, permission.name) : $data.selectedPermissions) ? " checked" : ""}><label class="form-check-label"${ssrRenderAttr("for", "permission_" + permission.id)}>${ssrInterpolate(permission.name)}</label></div>`);
    });
    _push(`<!--]--></div></div><div class="modal-footer"><button type="button" class="btn btn-primary"> Salvar Permissões </button></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Components/ModalSetUserPermission.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const ModalSetUserPermission = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ModalSetUserPermission
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {
  name: "PaginationComponent",
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    totalItems: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      default: 10
    }
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
    }
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
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<nav${ssrRenderAttrs(mergeProps({ "aria-label": "Page navigation" }, _attrs))}><ul class="pagination"><li class="${ssrRenderClass([{ disabled: $props.currentPage === 1 }, "page-item"])}"><a class="page-link" href="#">Primeira</a></li><li class="${ssrRenderClass([{ disabled: $props.currentPage === 1 }, "page-item"])}"><a class="page-link" href="#">Anterior</a></li><!--[-->`);
  ssrRenderList($options.pages, (page) => {
    _push(`<li class="${ssrRenderClass([{ active: page === $props.currentPage }, "page-item"])}"><a class="page-link" href="#">${ssrInterpolate(page)}</a></li>`);
  });
  _push(`<!--]--><li class="${ssrRenderClass([{ disabled: $props.currentPage === $options.totalPages }, "page-item"])}"><a class="page-link" href="#">Próxima</a></li><li class="${ssrRenderClass([{ disabled: $props.currentPage === $options.totalPages }, "page-item"])}"><a class="page-link" href="#">Última</a></li></ul></nav>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Components/Paginator.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Paginator = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Paginator
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {
  components: {
    Paginator,
    Link
  },
  emits: [
    "destroyRegisterEmit",
    "destroySelectedRegistersEmit",
    "showRegisterEmit",
    "page-change",
    "onShowRegister",
    "editRegister",
    "editPermission"
  ],
  props: {
    requestUrl: String,
    // UR de busca dos registros
    collumnNames: Object,
    // Nomes de cada coluna da tabela
    collumnKeys: Object,
    // chaves de cada registro, sendo uma para cada collumnName
    buttons: Object,
    // Botões de ação: delete, edit e show
    perPage: Number,
    // Quantidade de ítens por página
    searchTitle: String,
    // Placeholder do campo de busca
    checkBoxes: Boolean,
    // Caixas de seleção na tabela
    deleteAllButton: Boolean,
    // Ao selecionar, exibir botão de deletar todos?
    withImage: String
    // Imagem na primeira coluna
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
      selectedCheckboxes: []
    };
  },
  methods: {
    async getRegisters() {
      try {
        let registers = await axios.post(this.requestUrl, {
          page: this.actualPage,
          searchedValue: this.searchedValue,
          perPage: this.selectedPerPage
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
      this.reloadTableValue = !this.reloadTableValue;
      setTimeout(() => {
        this.reloadTableValue = !this.reloadTableValue;
      }, 1);
      setTimeout(() => {
        this.checkBoxesOnReload();
      }, 2);
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
    }
  },
  mounted() {
    this.getRegisters();
  },
  watch: {}
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Paginator = resolveComponent("Paginator");
  _push(`<!--[-->`);
  if ($props.deleteAllButton && $data.selectedCheckboxes.length !== 0) {
    _push(`<div class="row p-0 m-0 justify-start"><div class="p-0 mb-1"><button type="button" class="btn btn-danger bi bi-trash">${ssrInterpolate($data.selectedCheckboxes.length)} Selecionados </button></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="${ssrRenderClass("row p-0 m-0 mb-2 d-flex justify-content-between")}"><div class="col-6 p-0 row"><div class="col-6 col-sm-6 col-md-2"><select name="" id="" class="form-control"><option value="5"${ssrIncludeBooleanAttr($props.perPage == 5) ? " selected" : ""}>5</option><option value="10"${ssrIncludeBooleanAttr($props.perPage == 10) ? " selected" : ""}>10</option><option value="20"${ssrIncludeBooleanAttr($props.perPage == 20) ? " selected" : ""}>15</option><option value="50"${ssrIncludeBooleanAttr($props.perPage == 50) ? " selected" : ""}>50</option></select></div><div class="col-6 col-sm-6 col-md-3"><label for="" class="mt-1">por página </label></div></div><div class="col-6 col-sm-6 col-md-3 p-0"><input class="form-control" type="text"${ssrRenderAttr("placeholder", $props.searchTitle ?? "Buscar registros")}${ssrRenderAttr("value", $data.searchedValue)}></div></div>`);
  if ($data.reloadTableValue) {
    _push(`<table class="table table-stripped table-hover"><thead><tr class="bg-primary">`);
    if ($props.checkBoxes) {
      _push(`<th><label for="" id="" class="${ssrRenderClass([
        "labelCheckbox",
        $data.checkedAllBoxes ? "checkboxChecked" : ""
      ])}"><input class="${ssrRenderClass(["checkbox", "rounded"])}" type="checkbox" name="checkbox" id="checkboxId"${ssrIncludeBooleanAttr($data.checkedAllBoxes) ? " checked" : ""} style="${ssrRenderStyle({ "width": "16px", "height": "16px", "border-radius": "1em" })}"></label></th>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<!--[-->`);
    ssrRenderList($props.collumnNames, (collumnName, index) => {
      _push(`<th>${ssrInterpolate(collumnName)}</th>`);
    });
    _push(`<!--]-->`);
    if ($props.buttons) {
      _push(`<th>Ações</th>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</tr></thead>`);
    if ($data.registers.length > 0) {
      _push(`<tbody><!--[-->`);
      ssrRenderList($data.registers, (register, index) => {
        _push(`<tr>`);
        if ($props.checkBoxes) {
          _push(`<td><label for="" id="" class="mb-3"><input class="checkbox labelCheckbox select-rows-checkbox" type="checkbox" name="checkbox"${ssrRenderAttr("id", `checkboxId${register.id}`)} style="${ssrRenderStyle({ "width": "16px", "height": "16px", "border-radius": "1em", "color": "blue" })}"></label></td>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        ssrRenderList($props.collumnKeys, (collumnKey, index2) => {
          _push(`<td>`);
          if ($props.withImage && index2 === 0) {
            _push(`<img${ssrRenderAttr("width", 30)}${ssrRenderAttr("src", register[$props.withImage])} alt="Capa do livro" srcset="">`);
          } else {
            _push(`<!---->`);
          }
          _push(` ${ssrInterpolate(register[collumnKey])}</td>`);
        });
        _push(`<!--]-->`);
        if ($props.buttons) {
          _push(`<td>`);
          if ($props.buttons.includes("permission")) {
            _push(`<a href="#" class="ml-1 btn btn-outline-warning btn-sm bi bi-key m-1"></a>`);
          } else {
            _push(`<!---->`);
          }
          if ($props.buttons.includes("delete")) {
            _push(`<a href="#" class="ml-1 btn btn-outline-danger btn-sm bi bi-trash m-1"></a>`);
          } else {
            _push(`<!---->`);
          }
          if ($props.buttons.includes("edit")) {
            _push(`<a href="#" class="ml-1 btn btn-outline-warning btn-sm bi bi-pencil m-1"></a>`);
          } else {
            _push(`<!---->`);
          }
          if ($props.buttons.includes("show")) {
            _push(`<a href="#" class="ml-1 btn btn-outline-primary btn-sm bi bi-eye m-1"></a>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</td>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</tr>`);
      });
      _push(`<!--]--></tbody>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</table>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.registers.length === 0) {
    _push(`<div class="p-0 m-0"><h1 class="text-secondary fs-5 text-center border-none mt-1 ml-0 p-0"> Nenhum registro encontrado </h1><hr></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="d-flex justify-content-between"><div>${ssrInterpolate($data.totalRegisters ?? 0)} registros</div><div>`);
  _push(ssrRenderComponent(_component_Paginator, {
    onPageChange: $options.onPageChange,
    currentPage: $data.actualPage,
    totalItems: $data.totalRegisters,
    perPage: $data.selectedPerPage
  }, null, _parent));
  _push(`</div></div><!--]-->`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Components/Table.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Table = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Table
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
  components: {
    Link,
    FlashMessages
  },
  data() {
    return {
      sidebarVisible: false
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
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_FlashMessages = resolveComponent("FlashMessages");
  _push(`<!--[--><nav class="navbar navbar-expand-lg navbar-dark" style="${ssrRenderStyle({ "background-color": "#8b0000" })}" data-v-bcc8023e><div class="container-fluid" data-v-bcc8023e>`);
  _push(ssrRenderComponent(_component_Link, {
    class: "navbar-brand fw-bold text-white",
    href: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Painel`);
      } else {
        return [
          createTextVNode("Painel")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<button class="navbar-toggler border-0 shadow-sm" type="button" aria-controls="offcanvasNavbar" data-v-bcc8023e><span class="navbar-toggler-icon" data-v-bcc8023e></span></button><div class="${ssrRenderClass([{ show: $data.sidebarVisible }, "offcanvas offcanvas-end text-bg-dark"])}" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" data-v-bcc8023e><div class="offcanvas-header" style="${ssrRenderStyle({ "background-color": "#b22222" })}" data-v-bcc8023e><h5 class="offcanvas-title text-white fw-bold" id="offcanvasNavbarLabel" data-v-bcc8023e> Menu </h5><button type="button" class="btn-close btn-close-white" aria-label="Fechar" data-v-bcc8023e></button></div><div class="offcanvas-body" data-v-bcc8023e><ul class="navbar-nav justify-content-end flex-grow-1 pe-3" data-v-bcc8023e><li class="nav-item" data-v-bcc8023e>`);
  _push(ssrRenderComponent(_component_Link, {
    class: "nav-link text-white",
    href: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="bi bi-house-door-fill me-2" data-v-bcc8023e${_scopeId}></i> Home `);
      } else {
        return [
          createVNode("i", { class: "bi bi-house-door-fill me-2" }),
          createTextVNode(" Home ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item" data-v-bcc8023e>`);
  _push(ssrRenderComponent(_component_Link, {
    class: "nav-link text-white",
    href: "/users"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="bi bi-people-fill me-2" data-v-bcc8023e${_scopeId}></i> Usuários `);
      } else {
        return [
          createVNode("i", { class: "bi bi-people-fill me-2" }),
          createTextVNode(" Usuários ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item" data-v-bcc8023e><form data-v-bcc8023e><button type="submit" class="nav-link text-white" data-v-bcc8023e><i class="bi bi-box-arrow-right me-2" data-v-bcc8023e></i> Sair </button></form></li></ul></div></div></div></nav>`);
  _push(ssrRenderComponent(_component_FlashMessages, { class: "p-2" }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Layout/Layout.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-bcc8023e"]]);
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Layout
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {
  components: {
    Layout,
    Link,
    LinkCard
  },
  props: {
    user: Object
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");
  const _component_LinkCard = resolveComponent("LinkCard");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Layout, null, null, _parent));
  _push(`<div class="container-fluid" data-v-4fae4ac9>`);
  _push(ssrRenderComponent(_component_LinkCard, {
    title: "Minhas OS's",
    description: "Gerencie aqui suas OS's.",
    url: "/"
  }, null, _parent));
  _push(`</div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Index$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-4fae4ac9"]]);
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  components: {
    Layout,
    Table,
    ModalSetUserPermission
  },
  props: {
    user: Object,
    permissions: Object
  },
  data() {
    return {
      selectedUser: null
    };
  },
  methods: {
    onEditPermission(__user) {
      this.selectedUser = __user;
      this.$nextTick(() => {
        $("#setPermissionModal").modal("show");
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");
  const _component_Table = resolveComponent("Table");
  const _component_ModalSetUserPermission = resolveComponent("ModalSetUserPermission");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Layout, null, null, _parent));
  _push(`<div class="container-fluid mt-2"><div class="row mb-2"><div class="col-md-12 d-flex justify-content-between align-items-center"><div><h2 class="fw-bold text-danger mb-0">Lista de Usuários</h2><p class="text-muted small"> Gerencie a pemissão dos usuários </p></div></div></div></div><div class="container-fluid">`);
  _push(ssrRenderComponent(_component_Table, {
    requestUrl: "/users/getUsers",
    collumnNames: ["Nome", "Email"],
    collumnKeys: ["name", "email"],
    checkBoxes: false,
    deleteAllButton: false,
    perPage: 10,
    searchTitle: "Buscar usuários",
    buttons: ["permission"],
    onEditPermission: $options.onEditPermission
  }, null, _parent));
  if ($data.selectedUser) {
    _push(ssrRenderComponent(_component_ModalSetUserPermission, {
      selectedUser: $data.selectedUser,
      allPermissions: $props.permissions
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Auth/Login.vue": __vite_glob_0_0, "./Pages/Auth/Register.vue": __vite_glob_0_1, "./Pages/Components/FlashMessages.vue": __vite_glob_0_2, "./Pages/Components/LinkCard.vue": __vite_glob_0_3, "./Pages/Components/ModalSetUserPermission.vue": __vite_glob_0_4, "./Pages/Components/Paginator.vue": __vite_glob_0_5, "./Pages/Components/Table.vue": __vite_glob_0_6, "./Pages/Dashboard/Index.vue": __vite_glob_0_7, "./Pages/Layout/Layout.vue": __vite_glob_0_8, "./Pages/Users/Index.vue": __vite_glob_0_9 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin);
    }
  })
);
