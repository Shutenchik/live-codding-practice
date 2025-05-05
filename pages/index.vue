<script setup lang="ts">
import countries from "@/algoritms/trie/constants";

const country = ref("");
const { autoComplete, clearFieldIsEnd } = useTree(countries, country);

const sortedCountry = computed(() =>
  country.value === "" ? countries : autoComplete(country.value)
);

const handleClick = (item: string) => {
  country.value = item;
};
</script>

<template>
  <div class="field">
    <label for="countries">Countries</label>
    <input
      v-model="country"
      placeholder="Enter country name"
      name="countries"
      @focus="clearFieldIsEnd(country)"
    />
  </div>

  <div class="countries">
    <div v-for="item in sortedCountry" :key="item" class="country" @click="handleClick(item)">
      {{ item }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.countries {
  padding: rem(10);
  display: flex;
  gap: rem(8);
  flex-wrap: wrap;
}
.country {
  padding: rem(8);
  background: #b580d1;
}

.field {
  display: flex;
  flex-direction: column;
  padding: rem(10);
  width: 300px;

  input {
    border-radius: rem(4);
    outline: none;
    border: 1px solid #777070;
    padding: rem(8) rem(12);
  }
}
</style>
