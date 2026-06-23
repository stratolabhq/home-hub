# Project Context

## Beginner On-Ramp Mode (Phase 1)

The site launches in a beginner-focused mode. Advanced power-user surfaces are hidden
from navigation and the homepage but **not deleted**. All routes remain live.

### Feature Flag: `NEXT_PUBLIC_ADVANCED_MODE`

- **File:** `src/lib/feature-flags.ts` exports `ADVANCED_MODE: boolean`
- **Default:** `false` (beginner mode)
- **Enable:** Set `NEXT_PUBLIC_ADVANCED_MODE=true` in `.env.local` and restart the dev server.
  All advanced surfaces reappear with no other code change.

### Gated Surfaces (hidden when `ADVANCED_MODE=false`)

| Surface | Route | Gate location |
|---|---|---|
| Protocol Controllers & Coordinators | `/controllers` | Nav link, homepage section, route guard, footer |
| AI YAML Generator | `/tools/yaml-generator` | Homepage feature card, route guard, footer |
| Network Map | N/A (no standalone route; D3 diagram lives in `/dashboard`) | N/A |

### Beginner Surfaces (always visible)

Homepage: hero, "New to Smart Homes?", 4-step How It Works, Device Category Showcase,
Popular Ecosystems, Amazon Best Sellers, FAQ, CTA.

Navigation: Home, Dashboard, Compatibility, Add Product, My Products, Getting Started,
Request Device.

### Adding new advanced surfaces

Import `ADVANCED_MODE` from `@/lib/feature-flags` and wrap the component/link.
The constant is available in both server and client components (`NEXT_PUBLIC_*`).
