<template>
    <div class="mb-12 w-50">
        <h2 class="text-h5 font-weight-light pb-2 text-orange-darken-4">
            System dla HR i księgowości
        </h2>

        <div class="border-b-md border-gray-300 w-25 mx-auto mb-6"></div>

        <h1 class="text-h3 font-weight-bold mb-4 text-blue-grey-darken-2">
            Program do rozliczania delegacji <br />pracowniczych
        </h1>

        <p>
            Program do rozliczania delegacji pracowniczych usprawnia cały proces tworzenia, zatwierdzania i rozliczania wyjazdów służbowych. Automatyzuje kluczowe etapy, eliminuje błędy i porządkuje dokumentację, dzięki czemu oszczędzasz czas, minimalizujesz koszty i masz pełną kontrolę nad delegacjami od początku do końca.
        </p>

        <div class="mt-8">
            <v-btn
                color="orange-darken-4"
                variant="tonal"
                rounded="xl"
                size="large"
                href="/register"
                class="text-white font-weight-bold"
            >
                Załóż darmowe konto
            </v-btn>
        </div>

        <div class="d-flex ga-8 mt-10">
            <div class="d-flex align-center">
                <v-icon
                    color="green"
                    size="32"
                >
                    mdi-check-circle-outline 
                </v-icon>

                <span class="text-subtitle-1 font-weight-medium ml-2">
                    Aplikacja całkowicie za darmo! 
                </span>
            </div>

            <div class="d-flex align-center">
                <v-icon
                    color="green"
                    size="32"
                >
                    mdi-check-circle-outline
                </v-icon>
                
                <span class="text-subtitle-1 font-weight-medium ml-2">
                    Bez zobowiązań i ukrytych opłat!
                </span>
            </div>

            <div class="d-flex align-center">
                <v-icon
                    color="green"
                    size="32"
                >
                    mdi-check-circle-outline
                </v-icon>
                
                <span class="text-subtitle-1 font-weight-medium ml-2">
                    Bez podpinania karty kredytowej!
                </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator'
@Component({
  name: 'Index',
  components: { }
})
class Index extends Vue {

}
let component = Index;
(function () { component = toNative(component) })()
export default component
</script>