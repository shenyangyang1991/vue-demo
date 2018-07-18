import ApiConfig from './api.config'
import EnvConfig from './env.config'
import ImageConfig from './image.config'

import { disposeSrc, disposeUrl} from '@/util/tools'

const env = 'dev' // 'dev' or 'prod'
const image = disposeSrc(ImageConfig, EnvConfig[env].imageDomain)
const api = disposeUrl(ApiConfig, EnvConfig[env].apiDomain)
export default {
  env,
  api,
  image
}
