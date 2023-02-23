let app = new Vue({
  el: "#app",
  data: {
    pedido: {
      name: "",
      qtd: undefined,
    },
    pedidos: [],
    digitando: false,
    state: "Digitando...",
    vazia: true,
    editBox: false,
    currentIndex: null,
  },

  methods: {
    showEditBox(index) {
      this.editBox = !this.editBox;
      this.currentIndex = index;
    },

    closeEditBox() {
      this.editBox = !this.editBox;
    },
    // async editListItem(index) {
    //   let newName = await document.getElementById("newName").value;

    //   this.$set(this.pedidos, index, { name: newName });
    //   document.getElementById("newName").value = "";
    //   this.showEditBox();
    // },

    deleteOne(index) {
      this.pedidos.splice(index, 1);
      if (this.pedidos.length === 0) {
        this.vazia = true;
      }
    },
    addPedido() {
      if (this.pedido.name.length > 0) {
        this.pedido.name = this.pedido.name.toUpperCase();
        if (this.pedido.qtd === undefined || this.pedido.qtd > 0) {
          this.pedidos.push(this.pedido);
          this.pedido = {};
          this.vazia = false;
        } else {
          alert("PEDIDO DEVE TER QUANTIDADE MAIOR QUE ZERO. \n TENTE DE NOVO!");
        }
      }
    },

    deletePedido() {
      if (!this.pedidos.isEmpty) {
        if (this.pedidos.length === 1) {
          this.vazia = true;
        }
        this.pedidos.shift();
      } else {
        this.vazia = true;
      }
    },
  },

  computed: {
    listaItemString: function () {},
  },

  watch: {
    pedido() {
      if (this.pedido.name.length > 0) {
        this.digitando = true;
      }
      setTimeout(() => {
        this.digitando = false;
      }, 1500);
    },
  },
});
