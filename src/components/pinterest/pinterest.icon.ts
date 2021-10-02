import Vue from "vue";

const COLOR = [
    "default",
    "red-light",
    "red",
    "red-dark",
    "yellow",
    "yellow-light",
    "orange",
    "orange-light",
	"green-light",
	"green",
	"green-dark",
	"blue",
	"blue-light",
    "purple",
    "purple-dark",
    "purple-light",
];

export default /*#__PURE__*/ Vue.extend({
	name: "colored-pinterest",
	components: {},
	props: {
		color: {
			type: String,
			default: 'red',
			validator(value) {
				const isValid = COLOR.includes(value) || value == null;
				if (!isValid) {
					console.warn(`allowed colours are ${COLOR}`);
				}
				return isValid;
			},
		},
	},
	data() {
		return {};
	},
	computed: {},
	methods: {}
});