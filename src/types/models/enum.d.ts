export enum ICE_CHOICES {
  BIASA = 'BIASA',
  KURANGI = 'KURANGI',
  BANYAK = 'BANYAK',
}

export enum SUGAR_CHOICES {
  BIASA = 'BIASA',
  KURANGI = 'KURANGI',
  BANYAK = 'BANYAK',
}

export enum ORDER_STATUS {
  PENDING = 'PENDING', // Belum dibayar
  ONGOING = 'ONGOING', // Paid and confirmed by shop
  COMPLETED = 'COMPLETED', // Delivered
  FAILED = 'FAILED', // Something went wrong
}

export enum ROLES {
  ADMIN = 'ADMIN',
  CUSTOMER = 'CUSTOMER',
}
