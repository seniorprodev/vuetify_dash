import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import "@mdi/font/css/materialdesignicons.css"; 
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify);



export default new Vuetify({
	icons: {
		iconfont: "mdi",
	},
	theme: {
		dark: false,
		themes: {
			light: {
				primary: "#00bcd4",
				secondary: "#607d8b",
				tertiary: "#ffc107",
				accent: "#ffc107",
				error: "#f44336",
				warning: "#ff5722",
				danger: "#CE93D8",
				info: "#ff9800",
				success: "#8bc34a",
				general: "#2196F3",
				anchor: "#ffc107",
				background: "#78909C",
			},
			dark: {
				primary: "#FF6D00",
				secondary: "#757575",
				tertiary: "#E0E0E0",
				accent: "#82B1FF",
				error: "#f55a4e",
				info: "#00d3ee",
				success: "#5cb860",
				warning: "#ffa21a",
				danger: "#CE93D8",
				general: "#2196F3",
				anchor: "#ffc107",
				background: "#757575",
			},
		},
	},
});