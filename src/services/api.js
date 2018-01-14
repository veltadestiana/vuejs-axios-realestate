import { HTTP } from '../components/http/index'
import { EventBus } from '../event_bus/eventBus'

export default class Api {
  getAds () {
    const requestUrl = ''
    EventBus.$emit('getAdsRequested')
    return HTTP.get(requestUrl)

  }
}
