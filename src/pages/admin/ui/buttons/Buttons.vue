<template>
  <div class="buttons">
    <div class="row">
      <div class="flex xs12">
        <va-card class="larger-padding">
          <va-card-title>{{$t('app.buttons.types')}}</va-card-title>
          <va-card-content class="row">
            <div class="flex">
              <va-button class="mr-2 mb-2" > {{ $t('app.buttons.default') }}</va-button>
              <va-button class="mr-2 mb-2" disabled> {{ $t('app.buttons.disabled') }}</va-button>
              <va-button class="mr-2 mb-2" outline> {{ $t('app.buttons.outline') }}</va-button>
              <va-button class="mr-2 mb-2" outline disabled> {{ $t('app.buttons.disabled') }}</va-button>
              <va-button class="mr-2 mb-2" flat> {{ $t('app.buttons.flat') }}</va-button>
              <va-button class="mr-2 mb-2" flat disabled> {{ $t('app.buttons.disabled') }}</va-button>
            </div>
          </va-card-content>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card class="larger-padding">
          <va-card-title>{{$t('app.buttons.size')}}</va-card-title>
          <va-card-content class="row">
            <div class="flex">
              <va-button class="mr-2 mb-2" size="small"> {{ $t('app.buttons.small') }}</va-button>
              <va-button class="mr-2 mb-2"> {{ $t('app.buttons.normal') }}</va-button>
              <va-button class="mr-2 mb-2" size="large"> {{ $t('app.buttons.large') }}</va-button>
            </div>
          </va-card-content>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card class="larger-padding">
          <va-card-title>{{$t('app.buttons.tags')}}</va-card-title>
          <va-card-content class="row">
            <div class="flex">
              <va-button class="mr-2 mb-2"> {{ $t('app.buttons.button') }}</va-button>
              <va-button
                class="mr-2 mb-2"
                href="http://epic-spinners.epicmax.co/"
              >
                {{ $t('app.buttons.a-link') }}
              </va-button>
              <va-button
                class="mr-2 mb-2"
                :to="{ name: 'charts' }"
              >
                {{ $t('app.buttons.router-link') }}
              </va-button>
            </div>
          </va-card-content>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card class="larger-padding">
          <va-card-title>{{$t('app.buttons.advanced')}}</va-card-title>
          <va-card-content class="row">
            <div class="flex">
              <va-button class="mr-2 mb-2" icon="ion_md_close"> {{ $t('app.buttons.button') }}</va-button>
              <va-button class="mr-2 mb-2" icon-right="ion_arrow_down"> {{ $t('app.buttons.button') }}</va-button>
              <va-button
                class="mr-2 mb-2"
                icon="ion_md_close"
                icon-right="ion_arrow_down">
                {{ $t('app.buttons.button') }}
              </va-button>
              <va-button class="mr-2 mb-2" icon="ion_md_close"/>
            </div>
          </va-card-content>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card class="larger-padding">
          <va-card-title>{{$t('app.buttons.colors')}}</va-card-title>
          <va-card-content>
            <div class="row">
              <div class="flex">
                <va-button class="mr-2 mb-2" color="danger"> {{ $t('app.buttons.danger') }}</va-button>
                <va-button class="mr-2 mb-2" color="info"> {{ $t('app.buttons.info') }}</va-button>
                <va-button class="mr-2 mb-2" color="dark"> {{ $t('app.buttons.dark') }}</va-button>
                <va-button class="mr-2 mb-2" color="warning"> {{ $t('app.buttons.warning') }}</va-button>
                <va-button class="mr-2 mb-2" color="success"> {{ $t('app.buttons.success') }}</va-button>
                <va-button class="mr-2 mb-2" color="gray"> {{ $t('app.buttons.gray') }}</va-button>
              </div>
            </div>
            <div class="row">
              <div class="flex">
                <va-button class="mr-2 mb-2" outline color="danger"> {{ $t('app.buttons.danger') }}</va-button>
                <va-button class="mr-2 mb-2" outline color="info"> {{ $t('app.buttons.info') }}</va-button>
                <va-button class="mr-2 mb-2" outline color="dark"> {{ $t('app.buttons.dark') }}</va-button>
                <va-button class="mr-2 mb-2" outline color="warning"> {{ $t('app.buttons.warning') }}</va-button>
                <va-button class="mr-2 mb-2" outline color="success"> {{ $t('app.buttons.success') }}</va-button>
                <va-button class="mr-2 mb-2" outline color="gray"> {{ $t('app.buttons.gray') }}</va-button>
              </div>
            </div>
            <div class="row">
              <div class="flex">
                <va-button class="mr-2 mb-2" flat color="danger"> {{ $t('app.buttons.danger') }}</va-button>
                <va-button class="mr-2 mb-2" flat color="info"> {{ $t('app.buttons.info') }}</va-button>
                <va-button class="mr-2 mb-2" flat color="dark"> {{ $t('app.buttons.dark') }}</va-button>
                <va-button class="mr-2 mb-2" flat color="warning"> {{ $t('app.buttons.warning') }}</va-button>
                <va-button class="mr-2 mb-2" flat color="success"> {{ $t('app.buttons.success') }}</va-button>
                <va-button class="mr-2 mb-2" flat color="gray"> {{ $t('app.buttons.gray') }}</va-button>
              </div>
            </div>
          </va-card-content>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card class="larger-padding">
          <va-card-title>{{$t('app.buttons.buttonGroups')}}</va-card-title>
          <va-card-content>
            <div class="row">
              <div class="flex xs12 xl6">
                <va-button-group color="secondary">
                  <va-button size="large"> One</va-button>
                  <va-button size="large"> Two</va-button>
                  <va-button size="large"> Three</va-button>
                </va-button-group>
              </div>
              <div class="flex xs12 xl6">
                <va-button-group outline color="danger">
                  <va-button icon="maki-art-gallery">One</va-button>
                  <va-button>Two</va-button>
                  <va-button>Three</va-button>
                </va-button-group>
              </div>
              <div class="flex xs12 xl6">
                <va-button-group flat color="gray">
                  <va-button icon="ion-ios-mail">One</va-button>
                  <va-button icon="entypo-user">Two</va-button>
                  <va-button icon="ion-ios-alarm">Three</va-button>
                </va-button-group>
              </div>
              <div class="flex xs12 xl6">
                <va-button-group color="dark" gradient>
                  <va-button> One</va-button>
                  <va-button> Two</va-button>
                  <va-button> Three</va-button>
                  <va-button icon="ion-ios-arrow-down"/>
                </va-button-group>
              </div>
              <div class="flex xs12 xl6">
                <va-button-group outline  size="large">
                  <va-button>First</va-button>
                  <va-button icon-right="glyphicon-pencil">Second</va-button>
                  <va-button>Third</va-button>
                </va-button-group>
              </div>
              <div class="flex xs12 xl6">
                <va-button-group flat size="small" color="warning">
                  <va-button icon="glyphicon-envelope"/>
                  <va-button icon="entypo-user"/>
                  <va-button icon-right="ion-ios-alarm"/>
                </va-button-group>
              </div>
            </div>
          </va-card-content>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card class="larger-padding">
          <va-card-title>{{$t('app.buttons.buttonToggles')}}</va-card-title>
          <va-card-content>
            <div class="row">
              <div class="flex xs12 lg6">
                <va-button-toggle
                  v-model="model"
                  :options="options"
                />
              </div>
              <div class="flex xs12 lg6">
                <va-button-toggle
                  outline
                  v-model="model"
                  :options="options"
                  color="danger"
                />
              </div>
              <div class="flex xs12 lg6">
                <va-button-toggle
                  flat
                  v-model="model"
                  :options="options"
                  color="gray"
                />
              </div>
              <div class="flex xs12 lg6">
                <va-button-toggle
                  v-model="model"
                  :options="options"
                  color="dark"
                />
              </div>
              <div class="flex xs12 lg6">
                <va-button-toggle
                  outline
                  v-model="model"
                  :options="options"
                  color="info"
                />
              </div>
              <div class="flex xs12 lg6">
                <va-button-toggle
                  flat
                  v-model="model"
                  :options="options"
                  color="warning"
                />
              </div>
            </div>
          </va-card-content>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card class="larger-padding">
          <va-card-title>{{$t('app.buttons.pagination')}}</va-card-title>
          <va-card-content>
            <div class="row">
              <div class="flex xs12 xl6">
                <va-pagination
                  v-model="activePage"
                  :visible-pages="3"
                  :pages="20"
                />
              </div>
              <div class="flex xs12 xl6">
                <va-pagination
                  v-model="activePage"
                  :visible-pages="4"
                  :pages="15"
                  color="danger"
                />
              </div>
              <div class="flex xs12 xl6">
                <va-pagination
                  v-model="activePage"
                  :pages="5"
                  disabled
                />
              </div>
              <div class="flex xs12 xl6">
                <va-pagination
                  v-model="activePage"
                  :pages="10"
                  :visible-pages="3"
                  :icon="{ boundary: 'bell_slash', direction: 'volume_off' }"
                  :icon-right="{ boundary: 'bell', direction: 'volume_up' }"
                  color="success"/>
              </div>
            </div>
          </va-card-content>
        </va-card>
      </div>
      <div class="flex xs12">
        <va-card class="larger-padding">
          <va-card-title>{{$t('app.buttons.buttonsDropdown')}}</va-card-title>
          <va-card-content>
            <div class="row">
              <div class="flex">
                <va-button-dropdown
                  class="mr-2 mb-2"
                  :label="$t('app.buttons.default')"
                > {{ $t('app.buttons.content') }}</va-button-dropdown>
                <va-button-dropdown
                  class="mr-2 mb-2"
                  split
                  :label="$t('app.buttons.split')"
                > {{ $t('app.buttons.content') }}</va-button-dropdown>
                <va-button-dropdown
                  class="mr-2 mb-2"
                  split
                  split-to="/"
                  :label="$t('app.buttons.splitTo')"
                > {{ $t('app.buttons.content') }}</va-button-dropdown>
                <va-button-dropdown
                  class="mr-2 mb-2"
                  disabled
                  :label="$t('app.buttons.disabled')"
                > {{ $t('app.buttons.content') }}</va-button-dropdown>
                <va-button-dropdown
                  class="mr-2 mb-2"
                  color="warning"
                  :label="$t('app.buttons.warning')"
                > {{ $t('app.buttons.content') }}</va-button-dropdown>
              </div>
            </div>
          </va-card-content>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'buttons',
  data () {
    return {
      options: [
        { label: 'One', value: 'one' },
        { label: 'Two', value: 'two' },
        { label: 'Three', value: 'three' },
      ],
      model: 'three',
      activePage: 4,
    }
  },
}
</script>

<style lang="scss">
  .va-card__content {
    & > .row {
      overflow-x: auto;
    }
  }

  .va-button-dropdown {
    display: inline-block;
  }
</style>
