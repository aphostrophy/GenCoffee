export function limitString(str: string, limit: number) {
  return str.length <= limit ? str : str.substring(0, Math.max(0, limit - 3)) + '...';
}
export function formatRupiah(num: number) {
  return `Rp ${num}`;
}

export function capitalize(text: string) {
  const lower = text.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1, lower.length);
}

export function camelToSentenceCase(text: string) {
  const result = text.replace(/([A-Z]{1,})/g, ' $1');
  return result.charAt(0).toUpperCase() + result.slice(1);
}
