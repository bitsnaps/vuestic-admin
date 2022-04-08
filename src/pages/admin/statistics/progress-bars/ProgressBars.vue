<template>
  <div class="progress-bars">
    <div class="row">
      <div class="flex xs12">
        <horizontal-bars/>
      </div>
    </div>
    <div class="row">
      <div class="flex xs12">
        <bars-state/>
      </div>
    </div>
    <div class="row">
      <div class="flex xs12">
        <circle-bars/>
      </div>
    </div>
    <div class="row">
      <div class="flex xs12">
        <colorful-bars/>
      </div>
    </div>
  </div>
</template>

<script>
import HorizontalBars from './Widgets/HorizontalBars.vue'
import CircleBars from './Widgets/CircleBars.vue'
import BarsState from './Widgets/BarsState.vue'
import ColorfulBars from './Widgets/ColorfulBars.vue'

export default {
  name: 'progress-bars',
  components: {
    HorizontalBars, CircleBars, BarsState, ColorfulBars 
  },
}
</script>
