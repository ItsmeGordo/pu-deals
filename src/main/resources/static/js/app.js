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

const routes = [
  { path: '/', component: Home }
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