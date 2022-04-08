<template>
  <va-card :title="$t('app.tables.emptyTable')">
    <va-data-table
      :fields="fields"
      :data="data"
      :no-data-label="$t('app.tables.noReport')"
      no-pagination
    />
  </va-card>
</template>

<script>
export default {
  data () {
    return {
      data: [],
    }
  },
  computed: {
    fields () {
      return [{
        name: 'fullName',
        title: this.$t('app.tables.headings.name'),
      }, {
        name: 'email',
        title: this.$t('app.tables.headings.email'),
      }, {
        name: 'country',
        title: this.$t('app.tables.headings.country'),
      }]
    },
  },
}
</script>

<style lang="scss">
</style>
