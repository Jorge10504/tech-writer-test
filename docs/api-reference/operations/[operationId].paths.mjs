// @ts-nocheck
import { usePaths } from 'vitepress-openapi'
import spec from '../../.vitepress/data/openapi.json' with { type: 'json' }

export default {
  paths() {
    return usePaths({ spec })
      .getPathsByVerbs()
      .filter(op => op && op.operationId) // guard
      .map(({ operationId, summary }) => ({
        params: {
          operationId,
          pageTitle: `${summary || operationId}`,
        },
      }))
  },
}