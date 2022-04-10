import { defineComponent, h } from 'vue'
import { Line } from 'vue-chartjs'
// import chartMixin from './chartMixin.js'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default defineComponent({
  name: 'LineChart',
  components: { Line },
  // mixins: [
  //   Line,
  //   // chartMixin
  // ],

  setup(props) {

    const chartOptions = {}
    return () => h(Line, {
      chartOptions,
    })
  }
  }
)
