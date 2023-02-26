Vue.component("input-form", {
  data: function () {
    return {
      pedido: {
        name: "",
        qtd: undefined,
      },
    };
  },

  methods: {
    addPedido() {
      this.$emit("add-pedido", this.pedido);
      this.pedido = {};
    },
  },

  template: ` <div id="input">
                <span>Digite o nome: </span>
                <input type="text" v-model.trim="this.pedido.name"></input>
                <span><br>Digite a quantidade: </span>
                <input type="number" v-model="pedido.qtd"></input> 
                <br>
                <button id="add-btn" v-if="!digitando" @click="addPedido()">ADICIONAR</button>
                <span v-if="digitando"> {{state}}</span>
              </div>`,
});

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
      } else {
        alert("PEDIDO DEVE TER NOME. \n TENTE DE NOVO!");
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
