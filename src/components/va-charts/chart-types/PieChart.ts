import { defineComponent, h } from 'vue'
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js'
// import chartMixin from './chartMixin.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default defineComponent({
  name: 'PieChart',
  components: { Pie },
  // mixins: [
  //   Pie,
    // chartMixin
  // ],
  setup(props) {

    return () =>
      h(Pie, {
        // configOptions...
      })
  }
})
