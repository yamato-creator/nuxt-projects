// vuexfireMutationsの機能を読み込む
import { vuexfireMutations } from 'vuexfire'

// mutationsの定義
// 🚨store/index.jsに記述する
export const mutations = {
  ...vuexfireMutations
}
