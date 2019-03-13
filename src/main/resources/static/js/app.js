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
  <v-container grid-list-xl>
    <v-layout wrap justify-space-between>
      <v-flex xs8 sm8 md8>
        <v-text-field
          v-model="title"
          :counter="150"
          label="Título"
          required>
        </v-text-field>
      </v-flex>
      <v-flex xs4 sm4 md4>
        <v-select
          v-model="type"
          :items="types"
          label="Tipo"
          required>
        </v-select>
      </v-flex>
      <v-flex xs12 sm12 md12>
        <v-text-field
          v-model="url"
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
              v-model="publishDate"
              label="Data de Publicação"
              prepend-icon="event"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="publishDate" @input="publishDateMenu = false"></v-date-picker>
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
              v-model="endDate"
              label="Data de Encerramento"
              prepend-icon="event"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="endDate" @input="endDateMenu = false"></v-date-picker>
        </v-menu>
      </v-flex>
      <v-flex xs12>
        <v-textarea
          v-model="description"
          name="desc"
          label="Descrição"
          value="">
        </v-textarea>
      </v-flex>
      <v-flex xs12>
        <v-btn @click="save">Salvar</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</form>
  `, 
  data () {
    return {
      title: '',
      types: ['VIAGEM', 'LOCAL', 'PRODUTO'],
      type: '',
      url: '',
      publishDate: '',
      endDate: '',
      description: '',
      publishDateMenu: false,
      endDateMenu: false
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

const routes = [
  { path: '/', component: Home },
  { path: '/add-deal', component: AddDeal}
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