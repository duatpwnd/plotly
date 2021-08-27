import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import ApiUrl from "@/assets/apiurl";
import GlobalPlugin from "@/plugin/global_plugin";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
Vue.use(VueMaterial);
Vue.use(GlobalPlugin);
Vue.prototype.$axios = axios;
Vue.prototype.$EventBus = new Vue();
Vue.prototype.$ApiUrl = ApiUrl;
Vue.config.productionTip = false;
axios.defaults.baseURL = process.env.VUE_APP_API_URL;
const requireComponent = require.context(
  // 컴포넌트들이 있는 폴더
  "./components/common",
  // 하위 폴더까지 포함할 지 여부
  true,
  // 기본 컴포넌트를 찾는데 사용할 정규표현식
  /\.vue$/i
);
requireComponent.keys().forEach((fileName) => {
  // 컴포넌트 설정 가져오기
  const componentConfig = requireComponent(fileName);
  // 컴포넌트의 파스칼표기법 이름 가져오기
  const componentName = upperFirst(
    camelCase(
      // 폴더 위치와 무관하게 파일이름 추출
      fileName
        .split("/")
        .pop()
        ?.replace(/\.\w+$/, "")
    )
  );
  // 컴포넌트를 전역적으로 등록
  Vue.component(
    componentName,
    // `export default`를 이용한 컴포넌트는 `.default`로 컴포넌트
    // 옵션을 추출하고 그렇지 않은 컴포넌트는 모듈의 루트를 호출
    componentConfig.default || componentConfig
  );
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
