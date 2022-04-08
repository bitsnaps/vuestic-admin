<template>
  <div class="notifications">
    <div class="row">
      <div class="flex xs12">
        <va-card>
          <va-card-title>{{ $t('app.notificationsPage.notifications.title') }}</va-card-title>
          <va-card-content>
            <div class="mb-3">
              <va-alert closeable>
                <template #icon>
                  <va-badge :text="$t('app.notificationsPage.notifications.success')" />
                </template>
                {{ $t('app.notificationsPage.notifications.successMessage') }}
              </va-alert>
            </div>
            <div class="mb-3">
              <va-alert color="info" closeable>
                <template #icon>
                  <va-badge color="info" :text="$t('app.notificationsPage.notifications.info')" />
                </template>
                {{ $t('app.notificationsPage.notifications.infoMessage') }}
              </va-alert>
            </div>
            <div class="mb-3">
              <va-alert color="warning" closeable>
                <template #icon>
                  <va-badge color="warning" :text="$t('app.notificationsPage.notifications.warning')" />
                </template>
                {{ $t('app.notificationsPage.notifications.warningMessage') }}
              </va-alert>
            </div>
            <div class="mb-3">
              <va-alert color="danger" closeable>
                <template #icon>
                  <va-badge color="danger" :text="$t('app.notificationsPage.notifications.danger')" />
                </template>
                {{ $t('app.notificationsPage.notifications.dangerMessage') }}
              </va-alert>
            </div>
            <div class="mb-3">
              <va-alert color="gray" closeable>
                <template #icon>
                  <va-badge color="gray" :text="$t('app.notificationsPage.notifications.gray')" />
                </template>
                {{ $t('app.notificationsPage.notifications.warningMessage') }}
              </va-alert>
            </div>
            <div class="mb-3">
              <va-alert color="dark" closeable>
                <template #icon>
                  <va-badge color="dark" :text="$t('app.notificationsPage.notifications.dark')" />
                </template>
                {{ $t('app.notificationsPage.notifications.dangerMessage') }}
              </va-alert>
            </div>
          </va-card-content>
        </va-card>
      </div>
    </div>

    <div class="row">
      <div class="flex xs12">
        <va-card>
          <va-card-title>{{ $t('app.notificationsPage.toasts.title') }}</va-card-title>
          <va-card-content class="row">
            <div class="flex xs12 md6">
              <va-input
                v-model="toastText"
                :label="$t('app.notificationsPage.toasts.textLabel')"
                class="control-input mb-3"
                required
              />
              <va-input
                v-model="toastDuration"
                type="number"
                :label="$t('app.notificationsPage.toasts.durationLabel')"
                class="control-input mb-3"
                required
              />
              <!-- <va-input
                v-model="toastIcon"
                :label="$t('app.notificationsPage.toasts.iconLabel')"
                class="control-input mb-0"
                required
              /> -->
            </div>
            <div class="flex xs12 md6">
              <div class="row">
                <div class="flex xs12">
                  <toast-position-picker v-model="toastPosition"/>
                </div>
                <!-- <div class="flex xs12">
                  <va-checkbox
                    :label="$t('app.notificationsPage.toasts.fullWidthLabel')"
                    :id="'toast-fullwidth'"
                    v-model="isToastFullWidth"
                  />
                </div> -->
              </div>
            </div>
            <div class="flex xs12">
              <!-- There was slot="trigger" -->
              <va-button class="ma-0" color="primary" @click="launchToast">
                {{ $t('app.notificationsPage.toasts.launchToast') }}
              </va-button>
            </div>
          </va-card-content>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
import ToastPositionPicker from './ToastPositionPicker.vue'

export default {
  name: 'notifications',
  components: { ToastPositionPicker },
  data () {
    return {
      toastText: 'This toast is awesome!',
      toastDuration: 2500,
      toastIcon: 'fa-star-o',
      toastPosition: 'bottom-right',
      isToastFullWidth: false,
    }
  },
  computed: {
    isToastContentPresent () {
      return !!(this.toastText || this.toastIcon)
    },
  },
  methods: {
    launchToast () {
      this.$vaToast.init({
        message: this.toastText,
        iconClass: this.toastIcon,
        position: this.toastPosition,
        duration: Number(this.toastDuration),
        fullWidth: this.isToastFullWidth,
      })
    },
  },
}
</script>
