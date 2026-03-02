---
aside: false
outline: false
title: API Operation
editLink: false
---

<script setup lang="ts">
import { useRoute } from 'vitepress'
import spec from '../../.vitepress/data/openapi.json'

const route = useRoute()
const operationId = route.data.params?.operationId || ''
</script>

<ClientOnly>
  <template v-if="operationId">
    <OAOperation
      :spec="spec"
      :operationId="operationId"
      :hideBranding="true"
    />
  </template>

  <template v-else>
    <p>Operation not found.</p>
  </template>
</ClientOnly>