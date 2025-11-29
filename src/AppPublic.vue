<template>
  <v-app>
    <v-layout full-height>
      <v-main>
        <v-container
          fluid
          class="pa-0 ma-0 fill-height align-center text-center d-flex flex-column justify-center"
        >
          <Index />
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator'
import Index from "./pages/Index.vue"

@Component({
  name: 'AppPublic',
  components: { Index }
})
class AppPublic extends Vue {
  mounted () {
  }
}
let component = AppPublic;
(function () { component = toNative(component) })()
export default component
</script>

<style>

</style>