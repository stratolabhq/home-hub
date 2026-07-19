/**
 * Single source of truth for the "popular starter device" signal.
 * Phase 1 reads products.is_popular; swap the implementation here to point
 * at a different signal (bestseller rank, click data, etc.) without
 * touching any call sites.
 */

interface PopularFilterable<T> {
  eq(column: string, value: unknown): T;
}

export function applyPopularFilter<T extends PopularFilterable<T>>(query: T, popularOnly: boolean): T {
  return popularOnly ? query.eq('is_popular', true) : query;
}
