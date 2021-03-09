<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title>{{$t("text.siteTitle")}}</q-toolbar-title>

        <q-space ></q-space>
          <q-select
            v-model="lang"
            :options="langOptions"
            label="Language"
          
            borderless
            transition-show="scale"
            transition-hide="scale"
            emit-value
            map-options
            outlined label-color="white"
            color="white"
            style="min-width: 150px"
          >
            <template v-slot:append>
              <q-icon name="language" color="white"/>
            </template>
          </q-select>

      </q-toolbar>
      <div class="q-px-lg">
        <div class="text-subtitle1">{{$t("text.subTitle")}}</div>
      </div>
    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="200"
        :breakpoint="600"
      >
        <q-scroll-area style="height: calc(100% - 192px); margin-top: 192px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item
            to="/"
            clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="list" />
              </q-item-section>

              <q-item-section>
                {{$t('text.tests')}}
              </q-item-section>
            </q-item>

            <q-item to="/heatmap" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="list" />
              </q-item-section>

              <q-item-section>
                {{$t('text.heatmap')}}
              </q-item-section>
            </q-item>

            <q-item to="/rvalues" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="list" />
              </q-item-section>

              <q-item-section>
                {{$t('text.rvalues')}}
              </q-item-section>
            </q-item>

            <q-item to="/mortality" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="list" />
              </q-item-section>

              <q-item-section>
                {{$t('text.mortality')}}
              </q-item-section>
            </q-item>
            <q-item to="/sickness" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="list" />
              </q-item-section>

              <q-item-section>
                {{$t('text.sickness')}}
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 192px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">Yongkie Wiyogo</div>
            <div>github.com/ywiyogo</div>
          </div>
        </q-img>
      </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Github',
    caption: 'github.com/ywiyogo',
    icon: 'code',
    link: 'https://github.com/ywiyogo'
  },

];

export default {
  name: 'MainLayout',
  // components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
      lang: this.$i18n.locale,
      langOptions: [
        { value: 'en-us', label: 'English' },
        { value: 'de', label: 'German' }
      ]
    }
  },
  watch: {
  lang(lang) {
    this.$i18n.locale = lang
  }
}
}
</script>
