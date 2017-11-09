import vue from 'vue';
import vuex from 'vuex';
import stocks from './modules/stocks';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		stocks
	}
});