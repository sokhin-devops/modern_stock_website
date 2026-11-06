import { HelpArticle } from '../help-types';

/** Customers and debts, suppliers and buying. */
export const CUSTOMERS_AND_BUYING: HelpArticle[] = [
  // ---------------------------------------------------------------- customers and debts
  {
    slug: 'sell-on-credit',
    topic: 'customers',
    roles: ['CASHIER', 'MANAGER', 'OWNER'],
    title: { en: 'Sell on credit', km: 'លក់ជំពាក់' },
    summary: {
      en: 'Let a regular customer pay later, up to the credit limit you set for them.',
      km: 'អនុញ្ញាតឱ្យអតិថិជនប្រចាំបង់ពេលក្រោយ រហូតដល់កម្រិតឥណទានដែលអ្នកកំណត់ឱ្យពួកគេ។',
    },
    where: { en: 'POS › Walk-in customer › choose a customer › Later', km: 'POS › អតិថិជនទូទៅ › ជ្រើសរើសអតិថិជន › ពេលក្រោយ' },
    app: 'pos',
    flow: [
      { label: { en: 'Choose the customer', km: 'ជ្រើសរើសអតិថិជន' } },
      { label: { en: 'Later (or part now)', km: 'ពេលក្រោយ (ឬបង់ខ្លះឥឡូវ)' } },
      { label: { en: 'Invoice', km: 'វិក្កយបត្រ' } },
      { label: { en: 'Payment received', km: 'ទទួលការទូទាត់' } },
    ],
    steps: [
      {
        title: { en: 'Choose the customer', km: 'ជ្រើសរើសអតិថិជន' },
        text: {
          en: 'In the cart, replace "Walk-in customer" with the customer. New ones can be added right there with a name and phone number.',
          km: 'នៅក្នុងកន្ត្រក ប្ដូរ "អតិថិជនទូទៅ" ទៅជាអតិថិជន។ អ្នកថ្មីអាចបន្ថែមនៅទីនោះផ្ទាល់ ដោយមានឈ្មោះ និងលេខទូរស័ព្ទ។',
        },
      },
      {
        title: { en: 'Press Later, or pay part now', km: 'ចុច ពេលក្រោយ ឬបង់មួយផ្នែកឥឡូវ' },
        text: {
          en: 'Later puts the whole sale on their account. To take a deposit, press Pay and enter what they give now; the rest becomes their debt.',
          km: 'ពេលក្រោយ ដាក់ការលក់ទាំងមូលលើគណនីរបស់ពួកគេ។ ដើម្បីទទួលប្រាក់កក់ ចុច បង់ប្រាក់ ហើយបញ្ចូលអ្វីដែលពួកគេឱ្យឥឡូវ ហើយនៅសល់ក្លាយជាបំណុលរបស់ពួកគេ។',
        },
      },
      {
        title: { en: 'An invoice is made', km: 'វិក្កយបត្រត្រូវបានបង្កើត' },
        text: {
          en: 'The goods leave stock with a delivery, and an invoice shows what they owe in Customers › Transactions › Invoices.',
          km: 'ទំនិញចេញពីស្តុកជាមួយការដឹកជញ្ជូន ហើយវិក្កយបត្របង្ហាញអ្វីដែលពួកគេជំពាក់នៅក្នុង អតិថិជន › ប្រតិបត្តិការ › វិក្កយបត្រ។',
        },
      },
    ],
    warning: {
      en: 'Selling on credit needs a named customer with a phone number. A sale over their credit limit is refused.',
      km: 'ការលក់ជំពាក់ត្រូវការអតិថិជនដែលមានឈ្មោះ និងលេខទូរស័ព្ទ។ ការលក់ដែលលើសកម្រិតឥណទានរបស់ពួកគេនឹងត្រូវបដិសេធ។',
    },
    related: ['receive-payment', 'customers', 'orders-and-invoices'],
    keywords: { en: 'credit debt pay later deposit owe', km: 'ជំពាក់ បំណុល ប្រាក់កក់' },
  },
  {
    slug: 'customers',
    topic: 'customers',
    roles: ['MANAGER', 'OWNER', 'CASHIER'],
    title: { en: 'Customers and credit limits', km: 'អតិថិជន និងកម្រិតឥណទាន' },
    summary: {
      en: 'Keep your regular customers, how much each may owe, and see their balance at a glance.',
      km: 'រក្សាទុកអតិថិជនប្រចាំ ចំនួនដែលម្នាក់ៗអាចជំពាក់ និងមើលសមតុល្យរបស់ពួកគេភ្លាមៗ។',
    },
    where: { en: 'Customers › Customer list', km: 'អតិថិជន › បញ្ជីអតិថិជន' },
    app: 'customers',
    steps: [
      {
        title: { en: 'Add a customer', km: 'បន្ថែមអតិថិជន' },
        text: {
          en: 'Name, phone, and if you sell on credit, a credit limit in dollars. Cashiers can add customers from the POS when their role allows it.',
          km: 'ឈ្មោះ ទូរស័ព្ទ ហើយបើអ្នកលក់ជំពាក់ កម្រិតឥណទានជាដុល្លារ។ អ្នកគិតលុយអាចបន្ថែមអតិថិជនពី POS នៅពេលតួនាទីរបស់ពួកគេអនុញ្ញាត។',
        },
      },
      {
        title: { en: 'See what they owe', km: 'មើលអ្វីដែលពួកគេជំពាក់' },
        text: {
          en: 'The list shows each balance. Open a customer for their invoices and payments, or print a statement from Reports › Customer statement.',
          km: 'បញ្ជីបង្ហាញសមតុល្យនីមួយៗ។ បើកអតិថិជនដើម្បីមើលវិក្កយបត្រ និងការទូទាត់ ឬបោះពុម្ពរបាយការណ៍គណនីពី របាយការណ៍ › របាយការណ៍គណនីអតិថិជន។',
        },
      },
    ],
    related: ['sell-on-credit', 'receive-payment', 'reports'],
    keywords: { en: 'customer balance statement credit limit', km: 'អតិថិជន សមតុល្យ' },
  },
  {
    slug: 'orders-and-invoices',
    topic: 'customers',
    roles: ['MANAGER', 'OWNER'],
    title: { en: 'Quotations, sales orders and invoices', km: 'សម្រង់តម្លៃ ការកុម្ម៉ង់លក់ និងវិក្កយបត្រ' },
    summary: {
      en: 'For bigger customers: quote a price, take the order, deliver, and invoice.',
      km: 'សម្រាប់អតិថិជនធំៗ៖ ផ្ដល់សម្រង់តម្លៃ ទទួលការកុម្ម៉ង់ ដឹកជញ្ជូន និងចេញវិក្កយបត្រ។',
    },
    where: { en: 'Customers › Transactions', km: 'អតិថិជន › ប្រតិបត្តិការ' },
    app: 'customers/transactions',
    flow: [
      { label: { en: 'Quotation', km: 'សម្រង់តម្លៃ' } },
      { label: { en: 'Sales order', km: 'ការកុម្ម៉ង់លក់' }, note: { en: 'stock is set aside', km: 'ស្តុកត្រូវបានទុកមួយឡែក' } },
      { label: { en: 'Delivery', km: 'ការដឹកជញ្ជូន' } },
      { label: { en: 'Invoice', km: 'វិក្កយបត្រ' } },
      { label: { en: 'Payment', km: 'ការទូទាត់' } },
    ],
    steps: [
      {
        title: { en: 'Quotation', km: 'សម្រង់តម្លៃ' },
        text: {
          en: 'Write the products and prices and print or send it. It changes nothing in stock.',
          km: 'សរសេរផលិតផល និងតម្លៃ ហើយបោះពុម្ព ឬផ្ញើវា។ វាមិនប្ដូរអ្វីក្នុងស្តុកទេ។',
        },
      },
      {
        title: { en: 'Sales order', km: 'ការកុម្ម៉ង់លក់' },
        text: {
          en: 'When the customer agrees, turn it into an order. The goods are set aside for them: the stock page shows them "for orders", other orders and the POS are warned, and they cannot be transferred.',
          km: 'នៅពេលអតិថិជនយល់ព្រម ប្ដូរវាទៅជាការកុម្ម៉ង់។ ទំនិញត្រូវបានទុកមួយឡែកសម្រាប់ពួកគេ៖ ទំព័រស្តុកបង្ហាញវាថា "សម្រាប់ការកុម្ម៉ង់" ការកុម្ម៉ង់ផ្សេង និង POS ទទួលការព្រមាន ហើយវាមិនអាចផ្ទេរបានទេ។',
        },
      },
      {
        title: { en: 'Deliver and invoice', km: 'ដឹកជញ្ជូន និងចេញវិក្កយបត្រ' },
        text: {
          en: 'Deliver all at once or in parts. Each delivery takes the goods out of stock and adds to the invoice.',
          km: 'ដឹកជញ្ជូនម្ដងទាំងអស់ ឬជាផ្នែកៗ។ ការដឹកជញ្ជូននីមួយៗយកទំនិញចេញពីស្តុក ហើយបន្ថែមទៅវិក្កយបត្រ។',
        },
      },
    ],
    tips: [
      {
        en: 'With VAT turned on, invoices print as tax invoices with your VAT TIN.',
        km: 'នៅពេលបើកពន្ធអាករ វិក្កយបត្របោះពុម្ពជាវិក្កយបត្រអាករ ដោយមានលេខអត្តសញ្ញាណកម្មអាករ (VAT TIN) របស់អ្នក។',
      },
    ],
    related: ['receive-payment', 'sell-on-credit', 'see-stock'],
    keywords: { en: 'quote quotation order delivery invoice wholesale', km: 'សម្រង់ កុម្ម៉ង់ ដឹកជញ្ជូន វិក្កយបត្រ' },
  },
  {
    slug: 'receive-payment',
    topic: 'customers',
    roles: ['CASHIER', 'MANAGER', 'OWNER'],
    title: { en: 'Receive a payment from a customer', km: 'ទទួលការទូទាត់ពីអតិថិជន' },
    summary: {
      en: 'Record money a customer brings for what they owe; it pays their oldest invoices first, or the ones you choose.',
      km: 'កត់ត្រាប្រាក់ដែលអតិថិជននាំមកសងបំណុល វាទូទាត់វិក្កយបត្រចាស់ជាងគេមុន ឬវិក្កយបត្រដែលអ្នកជ្រើសរើស។',
    },
    where: { en: 'Customers › Transactions › Receive payment', km: 'អតិថិជន › ប្រតិបត្តិការ › ទទួលប្រាក់' },
    app: 'customers/transactions',
    steps: [
      {
        title: { en: 'Receive payment', km: 'ទទួលប្រាក់' },
        text: {
          en: 'Choose the customer and enter the amount, in dollars or riel, cash, KHQR or bank.',
          km: 'ជ្រើសរើសអតិថិជន ហើយបញ្ចូលចំនួនប្រាក់ ជាដុល្លារ ឬរៀល សាច់ប្រាក់ KHQR ឬធនាគារ។',
        },
      },
      {
        title: { en: 'Which invoices?', km: 'វិក្កយបត្រណាខ្លះ?' },
        text: {
          en: 'By default the oldest invoices are paid first. To pay particular ones, choose them and how much goes to each.',
          km: 'តាមលំនាំដើម វិក្កយបត្រចាស់ជាងគេត្រូវបានទូទាត់មុន។ ដើម្បីទូទាត់វិក្កយបត្រជាក់លាក់ សូមជ្រើសរើសវា និងចំនួនដែលត្រូវទៅវិក្កយបត្រនីមួយៗ។',
        },
      },
    ],
    tips: [
      {
        en: 'Money paid before there is an invoice is kept as a deposit and pays their next invoice first.',
        km: 'ប្រាក់ដែលបានបង់មុនពេលមានវិក្កយបត្រ ត្រូវបានរក្សាទុកជាប្រាក់កក់ ហើយទូទាត់វិក្កយបត្របន្ទាប់របស់ពួកគេមុនគេ។',
      },
    ],
    related: ['sell-on-credit', 'customers', 'telegram'],
    keywords: { en: 'payment debt collect deposit pay back', km: 'ទូទាត់ សងបំណុល ប្រាក់កក់' },
  },
  {
    slug: 'returns-and-credit-notes',
    topic: 'customers',
    roles: ['CASHIER', 'MANAGER', 'OWNER'],
    title: { en: 'Customer returns and credit notes', km: 'ការប្រគល់ទំនិញពីអតិថិជន និងឥណទានសម្គាល់' },
    summary: {
      en: 'A customer brings goods back: the cashier asks, a Manager or Owner approves, and stock and money are put right.',
      km: 'អតិថិជននាំទំនិញមកប្រគល់វិញ៖ អ្នកគិតលុយស្នើ អ្នកគ្រប់គ្រង ឬម្ចាស់អនុម័ត ហើយស្តុក និងប្រាក់ត្រូវបានកែតម្រូវ។',
    },
    where: { en: 'Customers › Transactions › Returns', km: 'អតិថិជន › ប្រតិបត្តិការ › ការប្រគល់' },
    app: 'customers/transactions',
    flow: [
      { label: { en: 'Return asked', km: 'ស្នើប្រគល់' }, note: { en: 'cashier', km: 'អ្នកគិតលុយ' } },
      { label: { en: 'Approved', km: 'បានអនុម័ត' }, note: { en: 'Manager or Owner', km: 'អ្នកគ្រប់គ្រង ឬម្ចាស់' } },
      { label: { en: 'Back in stock', km: 'ចូលស្តុកវិញ' } },
      { label: { en: 'Refund or credit note', km: 'សងប្រាក់ ឬឥណទានសម្គាល់' } },
      { label: { en: 'Rejected', km: 'បានបដិសេធ' }, side: true },
    ],
    steps: [
      {
        title: { en: 'Start from the sale', km: 'ចាប់ផ្ដើមពីការលក់' },
        text: {
          en: 'Open the receipt or invoice and press Return. Choose the items and quantities that came back, and say why.',
          km: 'បើកបង្កាន់ដៃ ឬវិក្កយបត្រ ហើយចុច ប្រគល់។ ជ្រើសរើសទំនិញ និងចំនួនដែលបានត្រឡប់មកវិញ ហើយប្រាប់មូលហេតុ។',
        },
      },
      {
        title: { en: 'Approval', km: 'ការអនុម័ត' },
        text: {
          en: 'A return asked by a cashier waits on the dashboard, and on Telegram if you connected it. Whoever may void sales approves or rejects it.',
          km: 'ការប្រគល់ដែលអ្នកគិតលុយស្នើ រង់ចាំនៅលើផ្ទាំងគ្រប់គ្រង និងនៅលើ Telegram បើអ្នកបានភ្ជាប់វា។ អ្នកដែលអាចលុបចោលការលក់បាន អនុម័ត ឬបដិសេធវា។',
        },
      },
      {
        title: { en: 'Money back', km: 'សងប្រាក់វិញ' },
        text: {
          en: 'Paid sales: refund the cash, or keep it as a credit for their next purchase. Unpaid invoices: a credit note lowers what they owe.',
          km: 'ការលក់ដែលបានបង់៖ សងសាច់ប្រាក់វិញ ឬរក្សាទុកជាឥណទានសម្រាប់ការទិញបន្ទាប់។ វិក្កយបត្រមិនទាន់បង់៖ ឥណទានសម្គាល់កាត់បន្ថយអ្វីដែលពួកគេជំពាក់។',
        },
      },
    ],
    related: ['void-sale', 'debit-notes', 'roles'],
    keywords: { en: 'return refund credit note exchange damaged', km: 'ប្រគល់ សងប្រាក់ ឥណទានសម្គាល់' },
  },
  {
    slug: 'debit-notes',
    topic: 'customers',
    roles: ['MANAGER', 'OWNER'],
    title: { en: 'Debit notes', km: 'ឥណពន្ធសម្គាល់' },
    summary: {
      en: 'Charge a customer more after the invoice: a price that was too low, delivery, or a fee.',
      km: 'គិតថ្លៃអតិថិជនបន្ថែមក្រោយចេញវិក្កយបត្រ៖ តម្លៃដែលទាបពេក ថ្លៃដឹកជញ្ជូន ឬថ្លៃសេវា។',
    },
    where: { en: 'Customers › Transactions › Invoices › New debit note', km: 'អតិថិជន › ប្រតិបត្តិការ › វិក្កយបត្រ › ឥណពន្ធសម្គាល់ថ្មី' },
    app: 'customers/transactions',
    steps: [
      {
        title: { en: 'Create it', km: 'បង្កើតវា' },
        text: {
          en: 'From an invoice, press "Debit note", or start a new one for a customer. Write what it is for and the amount, with VAT if you charge it.',
          km: 'ពីវិក្កយបត្រ ចុច "ឥណពន្ធសម្គាល់" ឬចាប់ផ្ដើមមួយថ្មីសម្រាប់អតិថិជន។ សរសេរវាសម្រាប់អ្វី និងចំនួនប្រាក់ ជាមួយពន្ធអាករបើអ្នកគិតវា។',
        },
      },
      {
        title: { en: 'It is paid like an invoice', km: 'វាត្រូវបានទូទាត់ដូចវិក្កយបត្រ' },
        text: {
          en: 'It adds to what the customer owes and counts in your sales and profit. While unpaid it can be voided.',
          km: 'វាបន្ថែមទៅលើអ្វីដែលអតិថិជនជំពាក់ ហើយរាប់ក្នុងការលក់ និងប្រាក់ចំណេញរបស់អ្នក។ ពេលមិនទាន់បង់ វាអាចលុបចោលបាន។',
        },
      },
    ],
    related: ['returns-and-credit-notes', 'receive-payment'],
    keywords: { en: 'debit note extra charge fee', km: 'ឥណពន្ធ ថ្លៃបន្ថែម' },
  },

  // ---------------------------------------------------------------- suppliers and buying
  {
    slug: 'buy-and-receive',
    topic: 'buying',
    roles: ['MANAGER', 'OWNER', 'STOCK_KEEPER'],
    title: { en: 'Order from a supplier and receive the goods', km: 'បញ្ជាទិញពីអ្នកផ្គត់ផ្គង់ ហើយទទួលទំនិញ' },
    summary: {
      en: 'Order, receive what arrived (all or part), and the bill is made for you.',
      km: 'បញ្ជាទិញ ទទួលអ្វីដែលបានមកដល់ (ទាំងអស់ ឬមួយផ្នែក) ហើយវិក្កយបត្រទិញត្រូវបានបង្កើតឱ្យអ្នក។',
    },
    where: { en: 'Suppliers › Transactions › Purchase orders', km: 'អ្នកផ្គត់ផ្គង់ › ប្រតិបត្តិការ › ការបញ្ជាទិញ' },
    app: 'suppliers/transactions',
    flow: [
      { label: { en: 'Purchase order', km: 'ការបញ្ជាទិញ' } },
      { label: { en: 'Goods received', km: 'ទទួលទំនិញ' }, note: { en: 'all or part', km: 'ទាំងអស់ ឬមួយផ្នែក' } },
      { label: { en: 'Bill', km: 'វិក្កយបត្រទិញ' } },
      { label: { en: 'Payment', km: 'ការបង់ប្រាក់' } },
    ],
    steps: [
      {
        title: { en: 'Make the order', km: 'បង្កើតការបញ្ជាទិញ' },
        text: {
          en: 'Choose the supplier, the products, quantities and prices. Print it or send it to them.',
          km: 'ជ្រើសរើសអ្នកផ្គត់ផ្គង់ ផលិតផល ចំនួន និងតម្លៃ។ បោះពុម្ពវា ឬផ្ញើទៅពួកគេ។',
        },
      },
      {
        title: { en: 'Receive the goods', km: 'ទទួលទំនិញ' },
        text: {
          en: 'When the delivery comes, open the order and press Receive. Enter what actually arrived, the price on their invoice, and the batch and expiry when the product has one. You are warned when it differs from the order.',
          km: 'នៅពេលទំនិញមកដល់ បើកការបញ្ជាទិញ ហើយចុច ទទួល។ បញ្ចូលអ្វីដែលបានមកដល់ពិតប្រាកដ តម្លៃលើវិក្កយបត្ររបស់ពួកគេ និងលេខឡូ និងថ្ងៃផុតកំណត់ នៅពេលផលិតផលមានវា។ អ្នកនឹងទទួលការព្រមាននៅពេលវាខុសពីការបញ្ជាទិញ។',
        },
      },
      {
        title: { en: 'The bill', km: 'វិក្កយបត្រទិញ' },
        text: {
          en: 'Each receipt makes a bill for what you owe the supplier. Keep a photo of their paper invoice on the bill.',
          km: 'ការទទួលនីមួយៗបង្កើតវិក្កយបត្រទិញសម្រាប់អ្វីដែលអ្នកជំពាក់អ្នកផ្គត់ផ្គង់។ រក្សាទុករូបថតវិក្កយបត្រក្រដាសរបស់ពួកគេលើវិក្កយបត្រទិញ។',
        },
      },
    ],
    tips: [
      {
        en: 'Bought at the market? Use the quick purchase: save, receive the goods and pay in one step.',
        km: 'ទិញនៅផ្សារ? ប្រើការទិញរហ័ស៖ រក្សាទុក ទទួលទំនិញ និងបង់ប្រាក់ក្នុងមួយជំហាន។',
      },
      {
        en: 'Receiving updates the average cost of each product, so your profit stays right when prices change.',
        km: 'ការទទួលធ្វើបច្ចុប្បន្នភាពថ្លៃដើមមធ្យមនៃផលិតផលនីមួយៗ ដូច្នេះប្រាក់ចំណេញរបស់អ្នកនៅតែត្រឹមត្រូវ នៅពេលតម្លៃប្រែប្រួល។',
      },
    ],
    related: ['pay-suppliers', 'purchase-returns', 'reorder'],
    keywords: { en: 'purchase order PO receive goods bill supplier invoice buy', km: 'បញ្ជាទិញ ទទួលទំនិញ វិក្កយបត្រទិញ' },
  },
  {
    slug: 'pay-suppliers',
    topic: 'buying',
    roles: ['MANAGER', 'OWNER'],
    title: { en: 'Pay your suppliers', km: 'បង់ប្រាក់ឱ្យអ្នកផ្គត់ផ្គង់' },
    summary: {
      en: 'Record what you pay; it settles the oldest bills first or the ones you choose. Credits and advances are used too.',
      km: 'កត់ត្រាអ្វីដែលអ្នកបង់ វាទូទាត់វិក្កយបត្រទិញចាស់ជាងគេមុន ឬវិក្កយបត្រដែលអ្នកជ្រើសរើស។ ឥណទាន និងប្រាក់បង់មុនក៏ត្រូវបានប្រើដែរ។',
    },
    where: { en: 'Suppliers › Transactions › Payments', km: 'អ្នកផ្គត់ផ្គង់ › ប្រតិបត្តិការ › ការបង់ប្រាក់' },
    app: 'suppliers/transactions',
    steps: [
      {
        title: { en: 'Pay', km: 'បង់ប្រាក់' },
        text: {
          en: 'Choose the supplier, the amount in dollars or riel, and how you paid. The oldest bills are paid first, or choose bills yourself.',
          km: 'ជ្រើសរើសអ្នកផ្គត់ផ្គង់ ចំនួនប្រាក់ជាដុល្លារ ឬរៀល និងរបៀបដែលអ្នកបានបង់។ វិក្កយបត្រទិញចាស់ជាងគេត្រូវបានទូទាត់មុន ឬជ្រើសរើសវិក្កយបត្រដោយខ្លួនឯង។',
        },
      },
      {
        title: { en: 'Advances and credits', km: 'ប្រាក់បង់មុន និងឥណទាន' },
        text: {
          en: 'Money paid before a bill is an advance; goods you returned give a supplier credit. Both are used against their next bills.',
          km: 'ប្រាក់ដែលបានបង់មុនមានវិក្កយបត្រ គឺជាប្រាក់បង់មុន ទំនិញដែលអ្នកបានប្រគល់ផ្ដល់ឥណទានអ្នកផ្គត់ផ្គង់។ ទាំងពីរត្រូវបានប្រើទូទាត់វិក្កយបត្របន្ទាប់របស់ពួកគេ។',
        },
      },
    ],
    tips: [
      {
        en: 'Reports › Supplier debt shows what you owe each supplier; Supplier statement shows every bill and payment.',
        km: 'របាយការណ៍ › បំណុលអ្នកផ្គត់ផ្គង់ បង្ហាញអ្វីដែលអ្នកជំពាក់អ្នកផ្គត់ផ្គង់នីមួយៗ ហើយរបាយការណ៍គណនីអ្នកផ្គត់ផ្គង់បង្ហាញវិក្កយបត្រ និងការបង់ប្រាក់ទាំងអស់។',
      },
    ],
    related: ['buy-and-receive', 'purchase-returns', 'reports'],
    keywords: { en: 'supplier payment bill debt advance credit', km: 'បង់អ្នកផ្គត់ផ្គង់ បំណុល' },
  },
  {
    slug: 'purchase-returns',
    topic: 'buying',
    roles: ['STOCK_KEEPER', 'MANAGER', 'OWNER'],
    title: { en: 'Return goods to a supplier', km: 'ប្រគល់ទំនិញទៅអ្នកផ្គត់ផ្គង់' },
    summary: {
      en: 'Damaged or wrong goods go back: a stock keeper prepares the return, an Owner or Manager posts it.',
      km: 'ទំនិញខូច ឬខុសត្រូវប្រគល់វិញ៖ អ្នកគ្រប់គ្រងឃ្លាំងរៀបចំការប្រគល់ ម្ចាស់ ឬអ្នកគ្រប់គ្រងកត់ត្រាវា។',
    },
    where: { en: 'Suppliers › Transactions › Returns', km: 'អ្នកផ្គត់ផ្គង់ › ប្រតិបត្តិការ › ការប្រគល់' },
    app: 'suppliers/transactions',
    flow: [
      { label: { en: 'Prepared', km: 'បានរៀបចំ' }, note: { en: 'stock keeper', km: 'អ្នកគ្រប់គ្រងឃ្លាំង' } },
      { label: { en: 'Posted', km: 'បានកត់ត្រា' }, note: { en: 'Manager or Owner', km: 'អ្នកគ្រប់គ្រង ឬម្ចាស់' } },
      { label: { en: 'Out of stock', km: 'ចេញពីស្តុក' } },
      { label: { en: 'Supplier credit', km: 'ឥណទានអ្នកផ្គត់ផ្គង់' } },
      { label: { en: 'Rejected', km: 'បានបដិសេធ' }, side: true },
    ],
    steps: [
      {
        title: { en: 'Prepare it', km: 'រៀបចំវា' },
        text: {
          en: 'Choose the supplier and the received goods going back, from the batch they came in.',
          km: 'ជ្រើសរើសអ្នកផ្គត់ផ្គង់ និងទំនិញដែលបានទទួលដែលត្រូវប្រគល់វិញ ពីឡូដែលវាបានមក។',
        },
      },
      {
        title: { en: 'Post it', km: 'កត់ត្រាវា' },
        text: {
          en: 'Whoever manages bills posts it: the goods leave stock, and the supplier owes you a credit (or the bill gets smaller).',
          km: 'អ្នកដែលគ្រប់គ្រងវិក្កយបត្រទិញកត់ត្រាវា៖ ទំនិញចេញពីស្តុក ហើយអ្នកផ្គត់ផ្គង់ជំពាក់ឥណទានអ្នក (ឬវិក្កយបត្រទិញតូចជាងមុន)។',
        },
      },
    ],
    related: ['buy-and-receive', 'pay-suppliers'],
    keywords: { en: 'return to supplier damaged wrong goods credit', km: 'ប្រគល់ អ្នកផ្គត់ផ្គង់ ខូច' },
  },
  {
    slug: 'expenses',
    topic: 'buying',
    roles: ['MANAGER', 'OWNER'],
    title: { en: 'Record expenses', km: 'កត់ត្រាចំណាយ' },
    summary: {
      en: 'Rent, electricity, salaries, transport: record them so the profit report shows what you really earn.',
      km: 'ថ្លៃជួល អគ្គិសនី ប្រាក់ខែ ការដឹកជញ្ជូន៖ កត់ត្រាវា ដើម្បីឱ្យរបាយការណ៍ប្រាក់ចំណេញបង្ហាញអ្វីដែលអ្នករកបានពិតប្រាកដ។',
    },
    where: { en: 'Suppliers › Expenses', km: 'អ្នកផ្គត់ផ្គង់ › ចំណាយ' },
    app: 'suppliers/expenses',
    steps: [
      {
        title: { en: 'Add an expense', km: 'បន្ថែមចំណាយ' },
        text: {
          en: 'Choose a category, the amount in dollars or riel, the date and how it was paid. Add a photo of the receipt.',
          km: 'ជ្រើសរើសប្រភេទ ចំនួនប្រាក់ជាដុល្លារ ឬរៀល កាលបរិច្ឆេទ និងរបៀបបង់។ បន្ថែមរូបថតបង្កាន់ដៃ។',
        },
      },
      {
        title: { en: 'Your own categories', km: 'ប្រភេទផ្ទាល់ខ្លួន' },
        text: {
          en: 'The usual ones are ready; add yours in Settings › Expense categories.',
          km: 'ប្រភេទធម្មតារួចរាល់ហើយ បន្ថែមប្រភេទរបស់អ្នកនៅក្នុង ការកំណត់ › ប្រភេទចំណាយ។',
        },
      },
    ],
    tips: [
      {
        en: 'A wrong expense is voided, not deleted, so the history stays complete.',
        km: 'ចំណាយដែលខុសត្រូវលុបចោល មិនមែនលុបចេញទេ ដូច្នេះប្រវត្តិនៅតែពេញលេញ។',
      },
    ],
    related: ['reports', 'business-settings'],
    keywords: { en: 'expense rent salary electricity cost profit', km: 'ចំណាយ ថ្លៃជួល ប្រាក់ខែ' },
  },
];
