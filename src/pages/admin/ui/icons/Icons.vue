<template>
  <div class="icons">
      <va-icon name="material-icons 3d_rotation"/>

    <br>
    <router-view :sets="sets"></router-view>
  </div>
</template>

<script>
import vuestic from './sets/vuestic'
import brandico from './sets/brandico'
import entypo from './sets/entypo'
import fontAwesome from './sets/font-awesome'
import fontelico from './sets/fontelico'
import glyphicons from './sets/glyphicons'
import iconicStroke from './sets/iconic-stroke'
import ionicons from './sets/ionicons'
import maki from './sets/maki'
import openweb from './sets/openweb'
import materialIcons from './sets/material-icons'

const iconTypes = [
  vuestic,
  brandico,
  entypo,
  fontAwesome,
  fontelico,
  glyphicons,
  iconicStroke,
  ionicons,
  maki,
  openweb,
  materialIcons
]

export default {
  name: 'icons',
  computed: {
    sets () {
      // const sets = []
      iconTypes.forEach(iconType => {
        // There is no require using Vite
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        // const set = require('./sets/' + iconType + '.json')
        this.addFilteredListsTo(iconType)
        // sets.push(iconType)
      })
      return iconTypes
    },
  },
  methods: {
    addFilteredListsTo (set) {
      // This allows us to add icons to icon set.
      const list = set.lists[0].icons
      const filteredLists = []
      filteredLists.push(list.slice(0, 6))
      filteredLists.push(list.slice(6, 8))
      filteredLists.push(list.slice(8, 14))
      set.filteredLists = filteredLists
    },
  },
  data () {
    return {
      setsPath: './sets/',
    }
  },
}
</script>
