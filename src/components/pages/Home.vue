<template>
  <b-container>
    <b-row>
        <b-col cols="4" md="4" sm="12" class="sameHeight" v-for="resp in resps.slice(0,10)">
          <b-card
          v-bind:img-src="resp.advertisementAssets[0].advertisementThumbnails.inventory_m.url"
          img-alt="Image"
          img-top
          style="max-width: 20rem;"
          class="mb-2"
          >
          <p class="card-title">
            {{ resp.title }}
          </p>
          <p class="card-subtitle">
            {{ resp.realestateSummary.address.postalCode }}
               {{ resp.realestateSummary.address.city }} / {{ resp.realestateSummary.address.street }}
          </p>
          <em slot="footer">
            <div class="div-left">€ {{ resp.advertisementPrice.baseRent }}</div>
            <div class="div-right">{{ resp.realestateSummary.numberOfRooms }} Zimmer | ab {{ resp.realestateSummary.space.toLocaleString('en').slice(0, 2) }} m<sup>2</sup></div>
          </em>
          </b-card>
        </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Api from '../../services/api'
import { EventBus } from '../../event_bus/eventBus'

const api = new Api()

export default {
  data () {
    return {
      resps: []
    }
  },

  mounted () {
    api.getAds().then(resp => {
      this.resps = this.resps.concat(resp.data.data)
      EventBus.$emit('getAdsRequested')
    })
  }
}
</script>

<style>
</style>
