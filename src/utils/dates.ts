export function timestampToISOString(value: number): string {
  // `value` is in seconds from Stripe
  // We convert it to milliseconds
  return new Date(value * 1000).toISOString();
}
