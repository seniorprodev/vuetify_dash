import Vue from "vue";
import "./components"; //this is where the auto registered components import
import "./plugins";
// Sync router with store
import { sync } from "vuex-router-sync";
// Application imports
import App from "./App";
import i18n from "@/i18n";
import router from "@/router";
import store from "@/store";
import { genericApi } from './plugins/axios'
import vuetify from './plugins/vuetify'
import * as Sentry from '@sentry/vue'
import { Integrations } from '@sentry/tracing'

Sentry.init({
	Vue,
	logErrors: true,
	dsn: 'https://6c05050f794343c286b87c6ea643df31@o920341.ingest.sentry.io/5865924',
	integrations: [new Integrations.BrowserTracing()],

	// Set tracesSampleRate to 1.0 to capture 100%
	// of transactions for performance monitoring.
	// We recommend adjusting this value in production
	tracesSampleRate: 1.0,
})

// makes genericApi common base instance axios the default http handler
Vue.prototype.$http = genericApi;



// Sync store with router
sync(store, router);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	i18n,
	router,
	store,
	vuetify,
	render: (h) => h(App),
}).$mount("#app");
