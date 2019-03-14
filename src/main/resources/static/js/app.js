const Home = { template: `
  <v-card>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
      <v-flex
        v-for="deal in deals"
        :key="deal.title"
        v-bind="{[\`xs\${deal.flex}\`]: true }"
      >
        <v-card>
        <v-card-title>
          <v-icon large left v-if="deal.type === 'VIAGEM'">
            flight
          </v-icon>
          <v-icon large left v-if="deal.type === 'LOCAL'">
            place
          </v-icon>
          <v-icon large left v-if="deal.type === 'PRODUTO'">
            local_offer
          </v-icon>
          <span class="title font-weight-light"> {{ deal.title }}</span>
        </v-card-title>
        <v-card-text class="headline font-weight-bold" v-if="deal.optionsQty > 1">
          A partir de R\${{ deal.lowestPrice }}
        </v-card-text>
        <v-card-text class="headline font-weight-bold" v-else>
          {{ deal.lowestPrice }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon>
          <v-icon>shopping_cart</v-icon>
          </v-btn>
        </v-card-actions>
        </v-card>
      </v-flex>
      </v-layout>
    </v-container>
  </v-card>
  `, 
  data () {
    return {
        deals: [
          { title: 'Diaria no hotel', type: 'VIAGEM', optionsQty: 1, lowestPrice: 1.99, flex: 4 },
          { title: 'Churrascaria boa e barata', type: 'LOCAL', optionsQty: 2, lowestPrice: 40.00, flex: 4 },
          { title: 'Cama Elastica', type: 'PRODUTO', optionsQty: 1, lowestPrice: 4000.00, flex: 4 }
        ]
    }
  },
  methods: {},
  mounted () {}
} 

const AddDeal = { template: `
<form>
  <v-subheader>Dados da oferta</v-subheader>
  <v-container grid-list-xl >
    <v-layout wrap justify-space-between>
      <v-flex xs8 sm8 md8>
        <v-text-field
          v-model="deal.title"
          :counter="150"
          label="Título"
          required>
        </v-text-field>
      </v-flex>
      <v-flex xs4 sm4 md4>
        <v-select
          v-model="deal.type"
          :items="types"
          label="Tipo"
          required>
        </v-select>
      </v-flex>
      <v-flex xs12 sm12 md12>
        <v-text-field
          v-model="deal.url"
          label="URL"
          required>
        </v-text-field>
      </v-flex>
      <v-flex xs6 sm6 md6>
        <v-menu
          v-model="publishDateMenu"
          :close-on-content-click="false"
          :nudge-right="40"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px">
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="deal.publishDate"
              label="Data de Publicação"
              prepend-icon="event"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="deal.publishDate" @input="publishDateMenu = false"></v-date-picker>
        </v-menu>
      </v-flex>
      <v-flex xs6 sm6 md6>
        <v-menu
          v-model="endDateMenu"
          :close-on-content-click="false"
          :nudge-right="40"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px">
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="deal.endDate"
              label="Data de Encerramento"
              prepend-icon="event"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="deal.endDate" @input="endDateMenu = false"></v-date-picker>
        </v-menu>
      </v-flex>
      <v-flex xs12>
        <v-textarea
          v-model="deal.description"
          name="desc"
          label="Descrição"
          value="">
        </v-textarea>
      </v-flex>
    </v-layout>
  </v-container>

  <v-subheader>Dados das opções da oferta</v-subheader>
  <v-container grid-list-xl>
    <v-layout wrap justify-space-between>
      <v-flex xs8 sm8 md8>
        <v-text-field
          v-model="option.title"
          :counter="150"
          label="Título Opção">
        </v-text-field>
      </v-flex>
      <v-flex xs4 sm4 md4>
        <v-text-field
          v-model="option.quantity"
          label="Quantidade"
          type=number>
        </v-text-field>
      </v-flex>
      <v-flex xs4 sm4 md4>
        <v-text-field
          v-model="option.normalPrice"
          label="Preço Normal"
          prefix="R$"
          type=number>
        </v-text-field>
      </v-flex>
      <v-flex xs4 sm4 md4>
        <v-text-field
          v-model="option.sellPrice"
          label="Preço de venda"
          prefix="R$"
          type=number>
        </v-text-field>
      </v-flex>
      <v-flex xs4 sm4 md4>
        <v-text-field
          v-model="option.discount"
          label="Desconto"
          prefix="%">
        </v-text-field>
      </v-flex>
      <v-flex xs6 sm6 md6>
        <v-menu
          v-model="optionStartDateMenu"
          :close-on-content-click="false"
          :nudge-right="40"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px">
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="option.startDate"
              label="Data de Inicio"
              prepend-icon="event"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="option.startDate" @input="optionStartDateMenu = false"></v-date-picker>
        </v-menu>
      </v-flex>
      <v-flex xs6 sm6 md6>
        <v-menu
          v-model="optionEndDateMenu"
          :close-on-content-click="false"
          :nudge-right="40"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px">
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="option.endDate"
              label="Data de Fim"
              prepend-icon="event"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="option.endDate" @input="optionEndDateMenu = false"></v-date-picker>
        </v-menu>
      </v-flex>
      <v-flex xs12 sm12 md12>
        <v-data-table
          :headers="optionHeaders"
          :items="deal.options"
          class="elevation-1">
          <template v-slot:no-data>
            <v-alert :value="true" color="warning" icon="warning">
              Adicione ao menos uma opção de venda! =(
            </v-alert>
          </template>
          <template v-slot:items="data">
            <td>{{ data.item.title }}</td>
            <td class="text-xs-right">{{ data.item.quantity }}</td>
            <td class="text-xs-right">{{ props.item.normalPrice }}</td>
            <td class="text-xs-right">{{ props.item.sellPrice }}</td>
            <td class="text-xs-right">{{ props.item.discount }}</td>
            <td class="text-xs-center">{{ props.item.startDate }}</td>
            <td class="text-xs-center">{{ props.item.endDate }}</td>
          </template>
        </v-data-table>
      </v-flex>
      <v-flex xs12>
        <v-btn @click="save" color="info">Salvar Opção</v-btn>
      </v-flex>
    </v-layout>
  </v-container>

  <v-flex xs12 >
    <v-btn @click="save" color="success">Salvar Oferta</v-btn>
  </v-flex>

</form>
  `, 
  data () {
    return {
      deal: {
        title: '',
        type: '',
        url: '',
        publishDate: '',
        endDate: '',
        description: '',
        options: []
      },
      types: ['VIAGEM', 'LOCAL', 'PRODUTO'],
      publishDateMenu: false,
      endDateMenu: false,
      optionStartDateMenu: false,
      optionEndDateMenu: false,
      option: { 
        title: '',
        quantity: '',
        normalPrice: '',
        sellPrice: '',
        discount: '',
        startDate: '',
        endDate: ''
      },
      optionHeaders: [
        { text: 'Título', value: 'title' },
        { text: 'Quantidade', value: 'quantity' },
        { text: 'Preço Normal (R$)', value: 'normalPrice' },
        { text: 'Preço Venda (R$)', value: 'sellPrice' },
        { text: 'Desconto (%)', value: 'discount' },
        { text: 'Data Inicio', value: 'startDate' },
        { text: 'Data Fim', value: 'endDate'}
      ]
    }
  },
  methods: {
    save: function() {
      var formObj = {'title': this.title, 'url': this.url, 'publishDate': this.publishDate, 'endDate': this.endDate, 'text': this.description, 'type': this.type };
      console.log(formObj);
      axios.post('/api/deal/saveDeal', formObj).then(response => {
        console.log(response);
    })
    }
  },
  mounted () {}
} 

const ViewDeal = { template: `
  <h1>{{ title }}</h1>

  <span>{{ text }}</span>

  <v-list>
    <template v-for="item in deal.options">

      <v-list-tile
        :key="item.title"
        avatar
        @click="">
        <v-list-tile-content>
          <v-list-tile-title v-html="item.title"></v-list-tile-title>
          <v-list-tile-sub-title v-html="item.sellPrice"></v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </template>
  </v-list>
  `,  data () {
    return {
      deal: {
        title: '',
        type: '',
        url: '',
        publishDate: '',
        endDate: '',
        description: '',
        options: []
      }
    }
  },
  methods: {
  },
  mounted () {

  }
}


const routes = [
  { path: '/', component: Home },
  { path: '/add-deal', component: AddDeal},
  { path: '/deal/{url}', component: ViewDeal}
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router,
  el: '#app',
  data () {
      return {
        drawer: false
      }
    },
    methods: {},
    mounted () {}
})