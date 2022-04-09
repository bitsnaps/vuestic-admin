import { defineComponent, h /*, PropType*/ } from 'vue'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

// HorizontalBar has been removed
// import { HorizontalBar } from 'vue-chartjs'
// import chartMixin from './chartMixin'


ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

/*
export default {
  mixins: [
    HorizontalBar,
    // chartMixin
  ],
}
*/

// It's not Horizontal yet.
export default defineComponent({
  name: 'HorizontalBar',
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    // styles: {
    //   type: Object as PropType<Partial<CSSStyleDeclaration>>,
    //   default: () => {}
    // },
    // plugins: {
    //   type: Array as PropType<Plugin<'bar'>[]>,
    //   default: () => []
    // }
  },
  setup(props) {
    const chartData = {
      labels: [ 'January', 'February', 'March' ],
      datasets: [ { data: [40, 20, 12] } ]
    }

    const chartOptions = { responsive: true }

    return () =>
      h(Bar, {
        chartData,
        chartOptions,
        chartId: props.chartId,
        width: props.width,
        height: props.height,
        cssClasses: props.cssClasses,
        styles: props.styles,
        plugins: props.plugins
      })
  }
})
