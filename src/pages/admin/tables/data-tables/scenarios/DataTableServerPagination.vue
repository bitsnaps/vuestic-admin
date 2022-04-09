<template>
  <va-card :title="$t('app.tables.serverSidePagination')">
    <va-data-table
      :fields="fields"
      :data="items"
      :loading="loading"
      :totalPages="totalPages"
      @page-selected="readItems"
      api-mode
    >
      <template #avatar="props">
        <img :src="props.rowData.avatar" class="data-table-server-pagination---avatar">
      </template>
    </va-data-table>
  </va-card>
</template>

<script>
import axios from 'axios'

const USERS_API = 'https://reqres.in/api/users'
// use: json-server src/pages/admin/tables/data-tables/data/users-watch.json -p 5000
// const USERS_API = 'http://localhost:5000/users'

export default {
  data () {
    return {
      perPage: 3,
      totalPages: 0,
      items: [],
      loading: false,
    }
  },
  computed: {
    fields () {
      return [{
        name: '__slot:avatar',
        width: '60px',
      }, {
        name: 'first_name',
        title: this.$t('app.tables.headings.firstName'),
        width: '20%',
      }, {
        name: 'last_name',
        title: this.$t('app.tables.headings.lastName'),
        width: '20%',
      }, {
        name: 'email',
        title: this.$t('app.tables.headings.email'),
      }]
    },
  },
  created () {
    this.readItems()
  },
  methods: {
    readItems (page = 0) {
      this.loading = true

      const params = {
        'per_page': this.perPage,
        page: page,
      }

      axios.get(USERS_API, { params })
        .then(response => {
          this.items = response.data//.data
          // this.totalPages = response.data.total_pages
          this.totalPages = response.data.length / this.perPage
          this.loading = false
        })
    },
  },
}
</script>

<style lang="scss">
  .data-table-server-pagination---avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
</style>
