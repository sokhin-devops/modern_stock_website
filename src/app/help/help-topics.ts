import { HelpTopic } from './help-types';

/** The Help Center's topics, in the order they are shown. */
export const HELP_TOPICS: HelpTopic[] = [
  {
    slug: 'start',
    icon: 'flag',
    title: { en: 'Getting started', km: 'ចាប់ផ្ដើម' },
    summary: {
      en: 'Your account, your business and your first sale.',
      km: 'គណនីរបស់អ្នក អាជីវកម្មរបស់អ្នក និងការលក់ដំបូង។',
    },
  },
  {
    slug: 'selling',
    icon: 'shopping-cart',
    title: { en: 'POS and selling', km: 'POS និងការលក់' },
    summary: {
      en: 'Selling at the counter, dollars and riel, cash shifts and voids.',
      km: 'លក់នៅតុគិតលុយ ដុល្លារ និងរៀល វេនគិតលុយ និងការលុបចោល។',
    },
  },
  {
    slug: 'customers',
    icon: 'users',
    title: { en: 'Customers and debts', km: 'អតិថិជន និងបំណុល' },
    summary: {
      en: 'Selling on credit, orders, invoices, payments and returns.',
      km: 'លក់ជំពាក់ ការកុម្ម៉ង់ វិក្កយបត្រ ការទូទាត់ និងការប្រគល់ត្រឡប់។',
    },
  },
  {
    slug: 'buying',
    icon: 'truck',
    title: { en: 'Suppliers and buying', km: 'អ្នកផ្គត់ផ្គង់ និងការទិញ' },
    summary: {
      en: 'Purchase orders, receiving goods, bills, payments and expenses.',
      km: 'ការបញ្ជាទិញ ការទទួលទំនិញ វិក្កយបត្រទិញ ការបង់ប្រាក់ និងចំណាយ។',
    },
  },
  {
    slug: 'stock',
    icon: 'box',
    title: { en: 'Stock and branches', km: 'ស្តុក និងសាខា' },
    summary: {
      en: 'Stock levels, adjustments, transfers between branches and stock counts.',
      km: 'ចំនួនស្តុក ការកែតម្រូវ ការផ្ទេររវាងសាខា និងការរាប់ស្តុក។',
    },
  },
  {
    slug: 'products',
    icon: 'tags',
    title: { en: 'Products', km: 'ផលិតផល' },
    summary: {
      en: 'Products, packs and barcodes, Excel import, labels and reordering.',
      km: 'ផលិតផល កញ្ចប់ និងបាកូដ ការនាំចូលពី Excel ស្លាក និងការកុម្ម៉ង់ឡើងវិញ។',
    },
  },
  {
    slug: 'reports',
    icon: 'chart-bar',
    title: { en: 'Reports and alerts', km: 'របាយការណ៍ និងការជូនដំណឹង' },
    summary: {
      en: 'The dashboard, the reports, Telegram and exporting your data.',
      km: 'ផ្ទាំងគ្រប់គ្រង របាយការណ៍ Telegram និងការនាំចេញទិន្នន័យ។',
    },
  },
  {
    slug: 'team',
    icon: 'id-card',
    title: { en: 'Team and roles', km: 'ក្រុមការងារ និងតួនាទី' },
    summary: {
      en: 'Inviting staff, what each role can do, and the activity log.',
      km: 'ការអញ្ជើញបុគ្គលិក អ្វីដែលតួនាទីនីមួយៗអាចធ្វើបាន និងកំណត់ហេតុសកម្មភាព។',
    },
  },
  {
    slug: 'settings',
    icon: 'cog',
    title: { en: 'Settings and plans', km: 'ការកំណត់ និងគម្រោង' },
    summary: {
      en: 'Branches, exchange rate, tax and receipts, sales rules and your plan.',
      km: 'សាខា អត្រាប្តូរប្រាក់ ពន្ធ និងបង្កាន់ដៃ គោលការណ៍លក់ និងគម្រោងរបស់អ្នក។',
    },
  },
  {
    slug: 'account',
    icon: 'shield',
    title: { en: 'Account and security', km: 'គណនី និងសុវត្ថិភាព' },
    summary: {
      en: 'Password, POS PIN, signing out everywhere, and solving common problems.',
      km: 'ពាក្យសម្ងាត់ PIN សម្រាប់ POS ការចាកចេញពីគ្រប់ទីកន្លែង និងការដោះស្រាយបញ្ហាទូទៅ។',
    },
  },
];
