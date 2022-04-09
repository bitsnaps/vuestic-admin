<template>
  <va-card :title="$t('app.tables.labelsActions')">
    <va-data-table
      :fields="fields"
      :data="users"
      no-pagination
    >
      <template #marker="props">
        <va-icon name="fa fa-circle" :color="props.rowData.color" size="8px" />
      </template>

      <template #actions="props">
        <va-button flat small color="gray" @click="edit(props.rowData)" class="ma-0">
          {{ $t('app.tables.edit') }}
        </va-button>

        <va-button flat small color="danger" @click="remove(props.rowData)" class="ma-0">
          {{ $t('app.tables.delete') }}
        </va-button>
      </template>
    </va-data-table>
  </va-card>

</template>

<script>
import users from '../data/users.json'

export default {
  data () {
    return {
      users: users.slice(0, 6)
    }
  },
  computed: {
    fields () {
      return [{
        name: '__slot:marker',
        width: '30px',
        dataClass: 'text-center',
      },
      {
        name: 'fullName',
        title: this.$t('app.tables.headings.name'),
      }, {
        name: 'email',
        title: this.$t('app.tables.headings.email'),
      }, {
        name: 'country',
        title: this.$t('app.tables.headings.country'),
      }, {
        name: '__slot:actions',
        dataClass: 'text-right',
      }]
    },
  },
  methods: {
    edit (user) {
      alert('Edit User: ' + JSON.stringify(user))
    },
    remove (user) {
      const idx = this.users.findIndex(u => u.id === user.id)
      this.users.splice(idx, 1)
    },
  },
}
</script>

<style lang="scss">
</style>
