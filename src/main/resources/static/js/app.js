const Home = { template: `
  <v-card>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
      <v-flex
        xs4
        v-for="item in dealItems"
        :key="item.deal.id"
      >
        <v-card>
        <v-card-title>
          <v-icon large left v-if="item.deal.type === 'VIAGEM'">
            flight
          </v-icon>
          <v-icon large left v-if="item.deal.type === 'LOCAL'">
            place
          </v-icon>
          <v-icon large left v-if="item.deal.type === 'PRODUTO'">
            local_offer
          </v-icon>
          <span class="title font-weight-light"> {{ item.deal.title }}</span>
        </v-card-title>
        <v-card-text class="headline font-weight-bold">
          A partir de R\${{ item.lowestPrice }}
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
        dealItems: []
    }
  },
  methods: {
    getAllDeals: function() {
      axios.get('/api/deal/getAllDeals').then(response => {
        this.dealItems = response.data;
      });
    }
  },
  mounted () {
    this.getAllDeals()
  }
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
          v-on:keyup="slugify"
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
          v-model="deal.text"
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
          v-model="option.quantityCupom"
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
          v-model="option.salePrice"
          label="Preço de venda"
          prefix="R$"
          type=number>
        </v-text-field>
      </v-flex>
      <v-flex xs4 sm4 md4>
        <v-text-field
          v-model="option.perncetageDiscount"
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
          :items="deal.dealOptions"
          class="elevation-1">
          <template v-slot:no-data>
            <v-alert :value="true" color="warning" icon="warning">
              Adicione ao menos uma opção de venda! =(
            </v-alert>
          </template>
          <template v-slot:items="data">
            <td>{{ data.item.title }}</td>
            <td class="text-xs-right">{{ data.item.quantityCupom }}</td>
            <td class="text-xs-right">{{ data.item.normalPrice }}</td>
            <td class="text-xs-right">{{ data.item.salePrice }}</td>
            <td class="text-xs-right">{{ data.item.perncetageDiscount }}</td>
            <td class="text-xs-center">{{ data.item.startDate }}</td>
            <td class="text-xs-center">{{ data.item.endDate }}</td>
          </template>
        </v-data-table>
      </v-flex>
      <v-flex xs12>
        <v-btn @click="addOption" color="info">Adicionar Opção</v-btn>
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
        text: '',
        dealOptions: []
      },
      types: ['VIAGEM', 'LOCAL', 'PRODUTO'],
      publishDateMenu: false,
      endDateMenu: false,
      optionStartDateMenu: false,
      optionEndDateMenu: false,
      option: { 
        title: '',
        quantityCupom: '',
        normalPrice: '',
        salePrice: '',
        perncetageDiscount: '',
        startDate: '',
        endDate: ''
      },
      optionHeaders: [
        { text: 'Título', value: 'title' },
        { text: 'Quantidade', value: 'quantityCupom' },
        { text: 'Preço Normal (R$)', value: 'normalPrice' },
        { text: 'Preço Venda (R$)', value: 'salePrice' },
        { text: 'Desconto (%)', value: 'perncetageDiscount' },
        { text: 'Data Inicio', value: 'startDate' },
        { text: 'Data Fim', value: 'endDate'}
      ]
    }
  },
  methods: {
    save: function() {
      axios.post('/api/deal/saveDeal', this.deal).then(response => {
        console.log(response);
      })
    },
    sanitizeTitle: function(title) {
      var slug = "";
      // Change to lower case
      var titleLower = title.toLowerCase();
      // Letter "e"
      slug = titleLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, 'e');
      // Letter "a"
      slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, 'a');
      // Letter "o"
      slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, 'o');
      // Letter "u"
      slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, 'u');
      // Letter "d"
      slug = slug.replace(/đ/gi, 'd');
      // Trim the last whitespace
      slug = slug.replace(/\s*$/g, '');
      // Change whitespace to "-"
      slug = slug.replace(/\s+/g, '-');

      return slug;
    },
    slugify: function() {
      this.deal.url = this.sanitizeTitle(this.deal.title);
    },
    addOption: function() {
      this.deal.dealOptions.push(Object.assign({}, this.option));
      this.option.title = '';
      this.option.quantityCupom = '';
      this.option.normalPrice = '';
      this.option.salePrice = '';
      this.option.perncetageDiscount = '';
      this.option.startDate = '';
      this.option.endDate = '';
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
          <v-list-tile-sub-title v-html="item.salePrice"></v-list-tile-sub-title>
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
        text: '',
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