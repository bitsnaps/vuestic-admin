<template>
  <div class="timelines">
    <div class="row">
      <div class="flex xs12">
        <va-card
          no-padding-h
          style="overflow-x: auto;"
        >
          <va-card-title>{{ $t('app.timelines.horizontalSimple') }}</va-card-title>
          <va-card-content>
            <va-timeline style="min-width: 400px;">
              <va-timeline-item active>
                <template v-slot:before>
                  <div
                    class="title text--center"
                    :style="{color: theme.primary}"
                  >
                    {{ $t('app.timelines.firstDate') }}
                  </div>
                  <div class="va-timeline-item__description">
                    {{ $t('app.timelines.horizontalActionFirst') }}
                  </div>
                </template>
              </va-timeline-item>
              <va-timeline-item active>
                <template v-slot:before>
                  <div
                    class="title text--center"
                    :style="{color: theme.primary}"
                  >
                    {{ $t('app.timelines.secondDate') }}
                  </div>
                  <div class="va-timeline-item__description">
                    {{ $t('app.timelines.horizontalActionSecond') }}
                  </div>
                </template>
              </va-timeline-item>
              <va-timeline-item>
                <template v-slot:before>
                  <div class="title title--gray text--center">
                    {{ $t('app.timelines.thirdDate') }}
                  </div>
                  <div class="va-timeline-item__description">
                    {{ $t('app.timelines.horizontalActionThird') }}
                  </div>
                </template>
              </va-timeline-item>
            </va-timeline>
          </va-card-content>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card
          no-padding-h
          style="overflow-x: auto;"
          class="timelines__horizontal-long"
        >
          <va-card-title>{{ $t('app.timelines.horizontalCards') }}</va-card-title>
          <va-card-content>
            <va-timeline align-top style="min-width: 600px;" class="timelines__horizontal-long__timeline">
              <va-timeline-item active>
                <template #before>
                  <div
                    class="title text--center"
                    :style="{color: theme.primary}"
                  >
                    {{ $t('app.timelines.firstDate') }}
                  </div>
                </template>
                <template #after>
                  <va-card
                    stripe
                    stripe-color="warning"
                    class="mb-0"
                  >
                    <va-card-title>{{ $t('app.timelines.titleDateFirst') }}</va-card-title>
                    <va-card-content>{{ $t('app.timelines.contentFirst') }}</va-card-content>
                  </va-card>
                </template>
              </va-timeline-item>
              <va-timeline-item active>
                <template v-slot:before>
                  <div
                    class="title text--center"
                    :style="{color: theme.primary}"
                  >
                    {{ $t('app.timelines.secondDate') }}
                  </div>
                </template>
                <template #after>
                  <va-card
                    stripe
                    stripe-color="info"
                    class="mb-0"
                  >
                    <va-card-title>{{ $t('app.timelines.titleDateSecond') }}</va-card-title>
                    <va-card-content>{{ $t('app.timelines.contentSecond') }}</va-card-content>
                  </va-card>
                </template>
              </va-timeline-item>
              <va-timeline-item>
                <template v-slot:before>
                  <div class="title title--gray text--center">
                    {{ $t('app.timelines.thirdDate') }}
                  </div>
                </template>
                <template #after>
                  <va-card
                    stripe
                    stripe-color="info"
                    class="mb-0"
                  >
                    <va-card-title>{{ $t('app.timelines.titleDateThird') }}</va-card-title>
                    <va-card-content>{{ $t('app.timelines.contentThird') }}</va-card-content>
                  </va-card>
                </template>
              </va-timeline-item>
            </va-timeline>
          </va-card-content>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card no-padding-v>
          <va-card-title>{{ $t('app.timelines.verticalLabel') }}</va-card-title>
          <va-card-content>
            <va-timeline vertical>
              <va-timeline-item active>
                <template #before>
                  <span
                    class="title va-timeline-item__text"
                    :style="{color: theme.primary}"
                  >
                    {{ $t('app.timelines.firstDate') }}
                  </span>
                </template>
                <template #after>
                  <va-card
                    stripe
                    stripe-color="success"
                    class="mb-0"
                  >
                    <va-card-title>{{ $t('app.timelines.titleFirst') }}</va-card-title>
                    <va-card-content>{{ $t('app.timelines.contentFirst') }}</va-card-content>
                  </va-card>
                </template>

              </va-timeline-item>
              <va-timeline-item active>
                <template #before>
                  <span
                    class="title va-timeline-item__text"
                    :style="{color: theme.primary}"
                  >
                    {{ $t('app.timelines.secondDate') }}
                  </span>
                </template>
                <template #after>
                  <va-card
                    stripe
                    stripe-color="success"
                    class="mb-0"
                  >
                    <va-card-title>{{ $t('app.timelines.titleSecond') }}</va-card-title>
                    <va-card-content>{{ $t('app.timelines.contentSecond') }}</va-card-content>
                  </va-card>
                </template>
              </va-timeline-item>
              <va-timeline-item>
                <template #before>
                  <span class="title title--gray va-timeline-item__text">
                    {{ $t('app.timelines.thirdDate') }}
                  </span>
                </template>
                <template #after>
                  <va-card
                    stripe
                    stripe-color="success"
                  >
                    <va-card-title>{{ $t('app.timelines.titleThird') }}</va-card-title>
                    <va-card-content>{{ $t('app.timelines.contentThird') }}</va-card-content>
                  </va-card>
                </template>
              </va-timeline-item>
            </va-timeline>
          </va-card-content>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card no-padding-v>
          <va-card-title>{{ $t('app.timelines.verticalCentered') }}</va-card-title>
          <va-card-content>
            <va-timeline vertical centered style="min-width: 300px;">
              <va-timeline-item color="danger" active>
                <template #before>
                  <span
                    class="title title--danger va-timeline-item__text"
                    :style="{color: theme.danger}"
                  >
                    {{ $t('app.timelines.firstDate') }}
                  </span>
                </template>
                <template class="after">
                  <va-card
                    stripe
                    stripe-color="danger"
                    class="mb-0"
                  >
                    <va-card-title>{{ $t('app.timelines.titleFirst') }}</va-card-title>
                    <va-card-content>{{ $t('app.timelines.contentFirst') }}</va-card-content>
                  </va-card>
                </template>
              </va-timeline-item>
              <va-timeline-item color="danger" active>
                <template #before>
                  <span
                    class="title title--danger va-timeline-item__text"
                    :style="{color: theme.danger}"
                  >
                    {{ $t('app.timelines.secondDate') }}
                  </span>
                </template>
                <template #after>
                  <va-card
                    stripe
                    stripe-color="danger"
                  >
                    <va-card-title>{{ $t('app.timelines.titleSecond') }}</va-card-title>
                    <va-card-content>{{ $t('app.timelines.contentSecond') }}</va-card-content>
                  </va-card>
                </template>
              </va-timeline-item>
              <va-timeline-item color="danger" active>
                <template #before>
                  <span
                    class="title title--danger va-timeline-item__text"
                    :style="{color: theme.danger}"
                  >
                    {{ $t('app.timelines.thirdDate') }}
                  </span>
                </template>
                <template #after>
                  <va-card
                    stripe
                    stripe-color="danger"
                    class="mb-0"
                  >
                    <va-card-title>{{ $t('app.timelines.titleThird') }}</va-card-title>
                    <va-card-content>{{ $t('app.timelines.contentThird') }}</va-card-content>
                  </va-card>
                </template>
              </va-timeline-item>
            </va-timeline>
          </va-card-content>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
import { useGlobalConfig } from 'vuestic-ui'

export default {
  name: 'timelines',
  data () {
    return {}
  },
  computed: {
    theme() {
      return useGlobalConfig().getGlobalConfig().colors
    }
  }
}
</script>
