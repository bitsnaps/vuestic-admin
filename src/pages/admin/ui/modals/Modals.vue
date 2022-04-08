<template>
  <div class="modals">
    <div class="row">
      <div class="flex md12">
        <va-card class="modals-list larger-padding">
          <va-card-title>{{ $t('app.modal.title') }}</va-card-title>
          <va-card-content>
            <va-button class="mr-2 mb-2" color="danger" @click="showSmallModal = true">
              {{ $t('app.modal.small') }}
            </va-button>
            <va-button class="mr-2 mb-2" color="info" @click="showMediumModal = true">
              {{ $t('app.modal.medium') }}
            </va-button>
            <va-button class="mr-2 mb-2" color="warning" @click="showLargeModal = true">
              {{ $t('app.modal.large') }}
            </va-button>
            <va-button class="mr-2 mb-2" color="success" @click="showStaticModal = true">
              {{ $t('app.modal.static') }}
            </va-button>
          </va-card-content>
        </va-card>
      </div>
    </div>
    <div class="row">
      <div class="flex md12">
        <va-card class="modals-list larger-padding">
          <va-card-title>{{ $t('app.modal.titlePosition') }}</va-card-title>
          <va-card-content>
            <va-button class="mb-2 mr-2" color="danger" @click="showTopModal = true">
              {{ $t('app.modal.top') }}
            </va-button>
            <va-button class="mb-2 mr-2" color="info" @click="showRightModal = true">
              {{ $t('app.modal.right') }}
            </va-button>
            <va-button class="mb-2 mr-2" color="warning" @click="showBottomModal = true">
              {{ $t('app.modal.bottom') }}
            </va-button>
            <va-button class="mb-2 mr-2" color="success" @click="showLeftModal = true">
              {{ $t('app.modal.left') }}
            </va-button>
          </va-card-content>
        </va-card>
      </div>
    </div>

    <!--//Modals-->
    <va-modal
      v-model="showSmallModal"
      size="small"
      :title="$t('app.modal.smallTitle')"
      :message="$t('app.modal.message') "
      :okText="$t('app.modal.confirm') "
      :cancelText="$t('app.modal.cancel') "
    />
    <va-modal
      v-model="showMediumModal"
      :title="$t('app.modal.mediumTitle') "
      :okText="$t('app.modal.confirm') "
      :cancelText="$t('app.modal.cancel') "
      :message="$t('app.modal.message') "
    />
    <va-modal
      v-model="showLargeModal"
      size="large"
      :title="$t('app.modal.largeTitle') "
      :message="$t('app.modal.message') "
      :okText="$t('app.modal.confirm') "
      :cancelText="$t('app.modal.cancel') "
    />
    <va-modal
      v-model="showTopModal"
      position="top"
      :title="$t('app.modal.top')"
      :message="$t('app.modal.message') "
      :okText="$t('app.modal.confirm') "
      :cancelText="$t('app.modal.cancel') "
    />
    <va-modal
      v-model="showRightModal"
      position="right"
      :title="$t('app.modal.right') "
      :okText="$t('app.modal.confirm') "
      :cancelText="$t('app.modal.cancel') "
      :message="$t('app.modal.message') "
    />
    <va-modal
      v-model="showBottomModal"
      position="bottom"
      :title="$t('app.modal.bottom') "
      :message="$t('app.modal.message') "
      :okText="$t('app.modal.confirm') "
      :cancelText="$t('app.modal.cancel') "
    />
    <va-modal
      v-model="showLeftModal"
      position="left"
      :title="$t('app.modal.left') "
      cancelClass="none"
      :okText="$t('app.modal.close') "
      :message="$t('app.modal.staticMessage') "
    />
    <va-modal
      v-model="showStaticModal"
      :title="$t('app.modal.staticTitle') "
      cancelClass="none"
      :okText="$t('app.modal.close') "
      :message="$t('app.modal.staticMessage') "
      noOutsideDismiss
      noEscDismiss
    />
  </div>
</template>

<script>
export default {
  name: 'modals',
  data () {
    return {
      show: true,
      showSmallModal: false,
      showMediumModal: false,
      showLargeModal: false,
      showTopModal: false,
      showRightModal: false,
      showBottomModal: false,
      showLeftModal: false,
      showStaticModal: false,
    }
  },
}
</script>
