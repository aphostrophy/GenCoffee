export function limitString(str: string, limit: number) {
  return str.length <= limit ? str : str.substring(0, Math.max(0, limit - 3)) + '...';
}
export function formatRupiah(num: number) {
  return `Rp ${num}`;
}
