<template>
  <div class="row">
    <div class="flex xs12">
      <va-card>
        <va-card-title>{{ $t('app.chips.chips.title') }}</va-card-title>
        <va-card-content class="row">
          <div class="flex xs12">
            <div class="row">
              <div class="flex xs12">
                <va-chip class="mb-2 mr-2" color="primary">{{ $t('app.chips.chips.primary') }}</va-chip>
                <va-chip class="mb-2 mr-2" color="secondary">{{ $t('app.chips.chips.secondary') }}</va-chip>
                <va-chip class="mb-2 mr-2" color="success">{{ $t('app.chips.chips.success') }}</va-chip>
                <va-chip class="mb-2 mr-2" color="info">{{ $t('app.chips.chips.info') }}</va-chip>
                <va-chip class="mb-2 mr-2" color="danger">{{ $t('app.chips.chips.danger') }}</va-chip>
                <va-chip class="mb-2 mr-2" color="warning">{{ $t('app.chips.chips.warning') }}</va-chip>
                <va-chip class="mb-2 mr-2" color="gray">{{ $t('app.chips.chips.gray') }}</va-chip>
                <va-chip class="mb-2 mr-2" color="dark">{{ $t('app.chips.chips.dark') }}</va-chip>
              </div>
            </div>
            <div class="row">
              <div class="flex xs12">
                <va-chip outline class="mb-2 mr-2" color="primary">{{ $t('app.chips.chips.primary') }}</va-chip>
                <va-chip outline class="mb-2 mr-2" color="secondary">{{ $t('app.chips.chips.secondary') }}</va-chip>
                <va-chip outline class="mb-2 mr-2" color="success">{{ $t('app.chips.chips.success') }}</va-chip>
                <va-chip outline class="mb-2 mr-2" color="info">{{ $t('app.chips.chips.info') }}</va-chip>
                <va-chip outline class="mb-2 mr-2" color="danger">{{ $t('app.chips.chips.danger') }}</va-chip>
                <va-chip outline class="mb-2 mr-2" color="warning">{{ $t('app.chips.chips.warning') }}</va-chip>
                <va-chip outline class="mb-2 mr-2" color="gray">{{ $t('app.chips.chips.gray') }}</va-chip>
                <va-chip outline class="mb-2 mr-2" color="dark">{{ $t('app.chips.chips.dark') }}</va-chip>
              </div>
            </div>
          </div>
        </va-card-content>
      </va-card>
    </div>

    <div class="flex xs12">
      <va-card>
        <va-card-title>{{ $t('app.chips.badges.title') }}</va-card-title>
        <va-card-content class="row">
          <div class="flex xs12">
            <div class="row">
              <div class="flex xs12">
                <va-badge class="mb-2 mr-2" color="primary" :text="$t('app.chips.badges.primary')" />
                <va-badge class="mb-2 mr-2" color="secondary" :text="$t('app.chips.badges.secondary')" />
                <va-badge class="mb-2 mr-2" color="success" :text="$t('app.chips.badges.success')" />
                <va-badge class="mb-2 mr-2" color="info" :text="$t('app.chips.badges.info')" />
                <va-badge class="mb-2 mr-2" color="danger" :text="$t('app.chips.badges.danger')" />
                <va-badge class="mb-2 mr-2" color="warning" :text="$t('app.chips.badges.warning')" />
                <va-badge class="mb-2 mr-2" color="gray" :text="$t('app.chips.badges.gray')" />
                <va-badge class="mb-2 mr-2" color="dark" :text="$t('app.chips.badges.dark')" />
              </div>
            </div>
            <div class="row">
              <div class="flex xs12">
                <va-badge class="mb-2 mr-2" color="primary" :text="$t('app.chips.badges.primary')" transparent />
                <va-badge class="mb-2 mr-2" color="secondary" :text="$t('app.chips.badges.secondary')" transparent />
                <va-badge class="mb-2 mr-2" color="success" :text="$t('app.chips.badges.success')" transparent />
                <va-badge class="mb-2 mr-2" color="info" :text="$t('app.chips.badges.info')" transparent />
                <va-badge class="mb-2 mr-2" color="danger" :text="$t('app.chips.badges.danger')" transparent />
                <va-badge class="mb-2 mr-2" color="warning" :text="$t('app.chips.badges.warning')" transparent />
                <va-badge class="mb-2 mr-2" color="gray" :text="$t('app.chips.badges.gray')" transparent />
                <va-badge class="mb-2 mr-2" color="dark" :text="$t('app.chips.badges.dark')" transparent />
              </div>
            </div>
          </div>
        </va-card-content>
      </va-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'chips',
}
</script>
