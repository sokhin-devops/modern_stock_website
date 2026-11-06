import { HelpArticle } from '../help-types';

/** Stock and branches, products. */
export const STOCK_AND_PRODUCTS: HelpArticle[] = [
  // ---------------------------------------------------------------- stock and branches
  {
    slug: 'see-stock',
    topic: 'stock',
    roles: ['OWNER', 'MANAGER', 'STOCK_KEEPER'],
    title: { en: 'See your stock', km: 'មើលស្តុករបស់អ្នក' },
    summary: {
      en: 'How much of each product you have, in which branch and warehouse, which batches, and every movement.',
      km: 'ចំនួនផលិតផលនីមួយៗដែលអ្នកមាន នៅសាខា និងឃ្លាំងណា ឡូណាខ្លះ និងចលនាទាំងអស់។',
    },
    where: { en: 'Inventory › Stock', km: 'ស្តុក › ស្តុកទំនិញ' },
    app: 'inventory/stock',
    steps: [
      {
        title: { en: 'The stock list', km: 'បញ្ជីស្តុក' },
        text: {
          en: 'Each product with what is on hand in the branch picked at the top. With "All branches", see every branch side by side.',
          km: 'ផលិតផលនីមួយៗជាមួយចំនួនដែលមាននៅសាខាដែលបានជ្រើសរើសនៅខាងលើ។ ជាមួយ "គ្រប់សាខា" មើលគ្រប់សាខាទន្ទឹមគ្នា។',
        },
      },
      {
        title: { en: 'Free and set aside', km: 'ទំនេរ និងទុកមួយឡែក' },
        text: {
          en: '"For orders" is stock set aside for open sales orders; "free" is what you can still sell or move.',
          km: '"សម្រាប់ការកុម្ម៉ង់" គឺស្តុកដែលទុកមួយឡែកសម្រាប់ការកុម្ម៉ង់លក់ដែលនៅបើក "ទំនេរ" គឺអ្វីដែលអ្នកនៅអាចលក់ ឬផ្លាស់ទីបាន។',
        },
      },
      {
        title: { en: 'Open a product', km: 'បើកផលិតផល' },
        text: {
          en: 'See each warehouse and batch with its expiry date, and the stock card: every sale, purchase, transfer and adjustment, with the balance after each one.',
          km: 'មើលឃ្លាំង និងឡូនីមួយៗជាមួយថ្ងៃផុតកំណត់ និងកាតស្តុក៖ ការលក់ ការទិញ ការផ្ទេរ និងការកែតម្រូវទាំងអស់ ជាមួយសមតុល្យក្រោយពីនីមួយៗ។',
        },
      },
    ],
    tips: [
      {
        en: 'Stock only changes through documents (sales, receipts, transfers, adjustments, counts), so the stock card always explains a number.',
        km: 'ស្តុកប្រែប្រួលតែតាមរយៈឯកសារ (ការលក់ ការទទួល ការផ្ទេរ ការកែតម្រូវ ការរាប់) ដូច្នេះកាតស្តុកតែងតែពន្យល់ពីចំនួននីមួយៗ។',
      },
    ],
    related: ['adjustments', 'transfers', 'stock-count', 'expiry-and-batches'],
    keywords: { en: 'stock level on hand warehouse stock card movements batch', km: 'ស្តុក ឃ្លាំង កាតស្តុក ឡូ' },
  },
  {
    slug: 'adjustments',
    topic: 'stock',
    roles: ['STOCK_KEEPER', 'MANAGER', 'OWNER'],
    title: { en: 'Adjust stock: damaged, lost or found', km: 'កែតម្រូវស្តុក៖ ខូច បាត់ ឬរកឃើញ' },
    summary: {
      en: 'Write off broken or expired goods, or add what you found, with a reason. Staff can ask, managers approve.',
      km: 'កាត់ចោលទំនិញខូច ឬផុតកំណត់ ឬបន្ថែមអ្វីដែលអ្នករកឃើញ ជាមួយមូលហេតុ។ បុគ្គលិកអាចស្នើ អ្នកគ្រប់គ្រងអនុម័ត។',
    },
    where: { en: 'Inventory › Adjustments', km: 'ស្តុក › ការកែតម្រូវ' },
    app: 'inventory/adjustments',
    flow: [
      { label: { en: 'Asked', km: 'បានស្នើ' }, note: { en: 'if your role needs approval', km: 'បើតួនាទីរបស់អ្នកត្រូវការការអនុម័ត' } },
      { label: { en: 'Posted', km: 'បានកត់ត្រា' }, note: { en: 'stock changes', km: 'ស្តុកប្រែប្រួល' } },
      { label: { en: 'Voided', km: 'បានលុបចោល' }, note: { en: 'if it was a mistake', km: 'បើវាជាកំហុស' }, side: true },
    ],
    steps: [
      {
        title: { en: 'New adjustment', km: 'ការកែតម្រូវថ្មី' },
        text: {
          en: 'Choose the warehouse and the reason: damaged, expired, lost, own use, found, correction or other. Add the products with a minus (out) or plus (in) quantity.',
          km: 'ជ្រើសរើសឃ្លាំង និងមូលហេតុ៖ ខូច ផុតកំណត់ បាត់ ប្រើផ្ទាល់ខ្លួន រកឃើញ កែកំហុស ឬផ្សេងៗ។ បន្ថែមផលិតផលជាមួយចំនួនដក (ចេញ) ឬបូក (ចូល)។',
        },
      },
      {
        title: { en: 'Posted, or waiting for approval', km: 'បានកត់ត្រា ឬរង់ចាំការអនុម័ត' },
        text: {
          en: 'Owners and Managers post it at once. A stock keeper\'s adjustment waits until a manager approves or rejects it.',
          km: 'ម្ចាស់ និងអ្នកគ្រប់គ្រងកត់ត្រាវាភ្លាមៗ។ ការកែតម្រូវរបស់អ្នកគ្រប់គ្រងឃ្លាំងរង់ចាំរហូតដល់អ្នកគ្រប់គ្រងអនុម័ត ឬបដិសេធវា។',
        },
      },
      {
        title: { en: 'Undo a mistake', km: 'កែកំហុសវិញ' },
        text: {
          en: 'Open a posted adjustment and press "Void adjustment": the opposite movements go back into the same batches.',
          km: 'បើកការកែតម្រូវដែលបានកត់ត្រា ហើយចុច "លុបចោលការកែតម្រូវ"៖ ចលនាផ្ទុយត្រឡប់ចូលឡូដដែលវិញ។',
        },
      },
    ],
    warning: {
      en: 'A void is refused when the stock it added has already been sold or moved. Make a new adjustment instead.',
      km: 'ការលុបចោលត្រូវបានបដិសេធ នៅពេលស្តុកដែលវាបានបន្ថែមត្រូវបានលក់ ឬផ្លាស់ទីរួចហើយ។ សូមធ្វើការកែតម្រូវថ្មីជំនួសវិញ។',
    },
    related: ['stock-count', 'see-stock', 'reports'],
    keywords: { en: 'adjustment damaged expired lost found write off void approve', km: 'កែតម្រូវ ខូច ផុតកំណត់ បាត់ រកឃើញ' },
  },
  {
    slug: 'transfers',
    topic: 'stock',
    roles: ['STOCK_KEEPER', 'MANAGER', 'OWNER'],
    title: { en: 'Move stock between branches', km: 'ផ្ទេរស្តុករវាងសាខា' },
    summary: {
      en: 'Send goods to another branch; it confirms what arrived. Anything missing is recorded as lost in transit.',
      km: 'ផ្ញើទំនិញទៅសាខាផ្សេង សាខានោះបញ្ជាក់អ្វីដែលបានមកដល់។ អ្វីដែលបាត់ត្រូវបានកត់ត្រាថាបាត់ពេលដឹក។',
    },
    where: { en: 'Inventory › Transfers', km: 'ស្តុក › ការផ្ទេរ' },
    app: 'inventory/transfers',
    flow: [
      { label: { en: 'Draft', km: 'សេចក្ដីព្រាង' } },
      { label: { en: 'In transit', km: 'កំពុងដឹក' }, note: { en: 'left the sender', km: 'ចេញពីអ្នកផ្ញើ' } },
      { label: { en: 'Received', km: 'បានទទួល' }, note: { en: 'shortfall = lost in transit', km: 'ខ្វះ = បាត់ពេលដឹក' } },
      { label: { en: 'Returned to sender', km: 'ប្រគល់ទៅអ្នកផ្ញើវិញ' }, side: true },
      { label: { en: 'Voided', km: 'បានលុបចោល' }, side: true },
    ],
    steps: [
      {
        title: { en: 'Make the transfer', km: 'បង្កើតការផ្ទេរ' },
        text: {
          en: 'Choose the warehouse it leaves from, the branch it goes to, and the products. Between two warehouses of the same branch it moves at once.',
          km: 'ជ្រើសរើសឃ្លាំងដែលវាចេញ សាខាដែលវាទៅ និងផលិតផល។ រវាងឃ្លាំងពីរនៃសាខាតែមួយ វាផ្លាស់ទីភ្លាមៗ។',
        },
      },
      {
        title: { en: 'Send', km: 'ផ្ញើ' },
        text: {
          en: 'The goods leave the sender and are "in transit", in no warehouse, until the other branch receives them.',
          km: 'ទំនិញចេញពីអ្នកផ្ញើ ហើយ "កំពុងដឹក" មិននៅក្នុងឃ្លាំងណាទេ រហូតដល់សាខាផ្សេងទទួលវា។',
        },
      },
      {
        title: { en: 'Receive', km: 'ទទួល' },
        text: {
          en: 'The receiving branch counts what arrived and enters it. If less arrived, the difference is written off as "lost in transit" automatically.',
          km: 'សាខាទទួលរាប់អ្វីដែលបានមកដល់ ហើយបញ្ចូលវា។ បើមកដល់តិចជាង ភាពខុសគ្នាត្រូវបានកាត់ចោលជា "បាត់ពេលដឹក" ដោយស្វ័យប្រវត្តិ។',
        },
      },
      {
        title: { en: 'Something went wrong?', km: 'មានបញ្ហា?' },
        text: {
          en: 'While in transit, "Return to sender" brings everything back. After it arrived, "Void transfer" sends the goods back while the branch still has them.',
          km: 'ពេលកំពុងដឹក "ប្រគល់ទៅអ្នកផ្ញើវិញ" នាំអ្វីៗទាំងអស់ត្រឡប់មកវិញ។ ក្រោយពីវាបានមកដល់ "លុបចោលការផ្ទេរ" បញ្ជូនទំនិញត្រឡប់វិញ ពេលដែលសាខានៅមានវានៅឡើយ។',
        },
      },
    ],
    tips: [
      {
        en: 'Transfers in transit for more than 3 days show in the alerts and the Telegram summary.',
        km: 'ការផ្ទេរដែលកំពុងដឹកលើសពី 3 ថ្ងៃ បង្ហាញក្នុងការជូនដំណឹង និងសង្ខេប Telegram។',
      },
      {
        en: 'Stock set aside for sales orders cannot be transferred.',
        km: 'ស្តុកដែលទុកមួយឡែកសម្រាប់ការកុម្ម៉ង់លក់ មិនអាចផ្ទេរបានទេ។',
      },
    ],
    related: ['transfer-requests', 'see-stock', 'adjustments'],
    keywords: { en: 'transfer branch send receive in transit lost return void move warehouse', km: 'ផ្ទេរ សាខា ផ្ញើ ទទួល កំពុងដឹក បាត់' },
  },
  {
    slug: 'transfer-requests',
    topic: 'stock',
    roles: ['MANAGER', 'STOCK_KEEPER', 'OWNER'],
    title: { en: 'Ask another branch for stock', km: 'ស្នើសុំស្តុកពីសាខាផ្សេង' },
    summary: {
      en: 'A branch running low asks; the branch that has it turns the request into a transfer in one click.',
      km: 'សាខាដែលស្តុកជិតអស់ស្នើសុំ សាខាដែលមានវាប្ដូរសំណើទៅជាការផ្ទេរក្នុងមួយចុច។',
    },
    where: { en: 'Inventory › Transfers › Requests', km: 'ស្តុក › ការផ្ទេរ › សំណើ' },
    app: 'inventory/transfers',
    flow: [
      { label: { en: 'Requested', km: 'បានស្នើ' } },
      { label: { en: 'Transfer made', km: 'បានផ្ទេរ' }, note: { en: 'check it and send', km: 'ពិនិត្យ ហើយផ្ញើ' } },
      { label: { en: 'Declined', km: 'បានបដិសេធ' }, side: true },
      { label: { en: 'Cancelled', km: 'បានបោះបង់' }, side: true },
    ],
    steps: [
      {
        title: { en: 'Ask', km: 'ស្នើ' },
        text: {
          en: 'In your branch, choose the branch to ask and the products and quantities you need.',
          km: 'នៅក្នុងសាខារបស់អ្នក ជ្រើសរើសសាខាដែលត្រូវស្នើ និងផលិតផល និងចំនួនដែលអ្នកត្រូវការ។',
        },
      },
      {
        title: { en: 'The other branch answers', km: 'សាខាផ្សេងឆ្លើយតប' },
        text: {
          en: 'They press "Make the transfer" to get a draft transfer with your request, check it and send. Or they decline and say why.',
          km: 'ពួកគេចុច "ធ្វើការផ្ទេរ" ដើម្បីទទួលបានការផ្ទេរព្រាងជាមួយសំណើរបស់អ្នក ពិនិត្យវា ហើយផ្ញើ។ ឬពួកគេបដិសេធ ហើយប្រាប់មូលហេតុ។',
        },
      },
    ],
    related: ['transfers'],
    keywords: { en: 'request stock branch ask', km: 'ស្នើសុំ ស្តុក សាខា' },
  },
  {
    slug: 'stock-count',
    topic: 'stock',
    roles: ['STOCK_KEEPER', 'MANAGER', 'OWNER'],
    title: { en: 'Count your stock', km: 'រាប់ស្តុករបស់អ្នក' },
    summary: {
      en: 'Count a shelf, a warehouse or a whole branch. Only the differences are posted, after a manager approves.',
      km: 'រាប់ធ្នើមួយ ឃ្លាំងមួយ ឬសាខាទាំងមូល។ មានតែភាពខុសគ្នាប៉ុណ្ណោះដែលត្រូវកត់ត្រា ក្រោយពីអ្នកគ្រប់គ្រងអនុម័ត។',
    },
    where: { en: 'Inventory › Stock counts', km: 'ស្តុក › ការរាប់ស្តុក' },
    app: 'inventory/stock-counts',
    flow: [
      { label: { en: 'Started', km: 'បានចាប់ផ្ដើម' }, note: { en: 'quantities noted', km: 'ចំនួនត្រូវបានកត់ទុក' } },
      { label: { en: 'Counted', km: 'បានរាប់' } },
      { label: { en: 'Submitted', km: 'បានដាក់ស្នើ' } },
      { label: { en: 'Posted', km: 'បានកត់ត្រា' }, note: { en: 'differences only', km: 'តែភាពខុសគ្នា' } },
    ],
    steps: [
      {
        title: { en: 'Start a count', km: 'ចាប់ផ្ដើមការរាប់' },
        text: {
          en: 'Choose one warehouse or the whole branch, and all products, one category or chosen products. Tick "Blind count" so counters do not see what the system expects.',
          km: 'ជ្រើសរើសឃ្លាំងមួយ ឬសាខាទាំងមូល និងផលិតផលទាំងអស់ ប្រភេទមួយ ឬផលិតផលដែលបានជ្រើសរើស។ ធីក "រាប់មិនបង្ហាញចំនួន" ដើម្បីកុំឱ្យអ្នករាប់ឃើញចំនួនដែលប្រព័ន្ធរំពឹង។',
        },
      },
      {
        title: { en: 'Count and save', km: 'រាប់ ហើយរក្សាទុក' },
        text: {
          en: 'Type what is on the shelf, line by line or by scanning; save as you go. Several people can count different shelves.',
          km: 'វាយអ្វីដែលមាននៅលើធ្នើ មួយបន្ទាត់ម្ដងៗ ឬដោយស្កេន ហើយរក្សាទុកពេលកំពុងធ្វើ។ មនុស្សច្រើននាក់អាចរាប់ធ្នើផ្សេងៗគ្នា។',
        },
      },
      {
        title: { en: 'Submit, then approve', km: 'ដាក់ស្នើ បន្ទាប់មកអនុម័ត' },
        text: {
          en: 'Submit the count. A manager checks the differences and their value, and approves: only the lines that differ change the stock.',
          km: 'ដាក់ស្នើការរាប់។ អ្នកគ្រប់គ្រងពិនិត្យភាពខុសគ្នា និងតម្លៃរបស់វា ហើយអនុម័ត៖ មានតែបន្ទាត់ដែលខុសគ្នាប៉ុណ្ណោះដែលប្ដូរស្តុក។',
        },
      },
    ],
    tips: [
      {
        en: 'If something is sold while you count, that line is flagged "Count again", so a sale in the middle never spoils the count.',
        km: 'បើមានអ្វីមួយត្រូវបានលក់ពេលអ្នករាប់ បន្ទាត់នោះត្រូវបានសម្គាល់ "រាប់ម្តងទៀត" ដូច្នេះការលក់នៅចំកណ្ដាលមិនធ្វើឱ្យការរាប់ខូចទេ។',
      },
    ],
    related: ['adjustments', 'see-stock', 'reports'],
    keywords: { en: 'stocktake count inventory audit blind', km: 'រាប់ស្តុក សវនកម្ម' },
  },
  {
    slug: 'expiry-and-batches',
    topic: 'stock',
    roles: ['STOCK_KEEPER', 'MANAGER', 'OWNER'],
    title: { en: 'Batches and expiry dates', km: 'ឡូ និងថ្ងៃផុតកំណត់' },
    summary: {
      en: 'For medicines and food: keep each batch with its expiry date; the oldest is sold first and you are warned in time.',
      km: 'សម្រាប់ថ្នាំ និងអាហារ៖ រក្សាទុកឡូនីមួយៗជាមួយថ្ងៃផុតកំណត់ ឡូចាស់ជាងគេត្រូវលក់មុន ហើយអ្នកទទួលការព្រមានទាន់ពេល។',
    },
    where: { en: 'Products › (product) › Track expiry', km: 'ផលិតផល › (ផលិតផល) › តាមដានថ្ងៃផុតកំណត់' },
    app: 'products',
    steps: [
      {
        title: { en: 'Turn on expiry for the product', km: 'បើកការតាមដានថ្ងៃផុតកំណត់សម្រាប់ផលិតផល' },
        text: {
          en: 'Then every receipt and opening stock of it asks for a batch number and an expiry date.',
          km: 'បន្ទាប់មក រាល់ការទទួល និងស្តុកដំបូងរបស់វាសួររកលេខឡូ និងថ្ងៃផុតកំណត់។',
        },
      },
      {
        title: { en: 'First to expire, first out', km: 'ផុតកំណត់មុន ចេញមុន' },
        text: {
          en: 'Sales take the batch that expires first. Expired batches are never sold; write them off with an "Expired" adjustment.',
          km: 'ការលក់យកឡូដែលផុតកំណត់មុនគេ។ ឡូដែលផុតកំណត់មិនដែលត្រូវលក់ទេ សូមកាត់ចោលវាជាមួយការកែតម្រូវ "ផុតកំណត់"។',
        },
      },
      {
        title: { en: 'Get warned', km: 'ទទួលការព្រមាន' },
        text: {
          en: 'Reports › Near expiry and expired lists what expires within 30, 60 or 90 days (change the windows in Settings › Sales rules). It is in the alerts and the Telegram summary too.',
          km: 'របាយការណ៍ › ជិតផុតកំណត់ និងផុតកំណត់ រាយអ្វីដែលផុតកំណត់ក្នុងរយៈពេល 30 60 ឬ 90 ថ្ងៃ (ប្ដូររយៈពេលនៅក្នុង ការកំណត់ › គោលការណ៍លក់)។ វាក៏នៅក្នុងការជូនដំណឹង និងសង្ខេប Telegram ដែរ។',
        },
      },
    ],
    related: ['adjustments', 'reports', 'buy-and-receive'],
    keywords: { en: 'expiry batch lot FEFO medicine pharmacy food', km: 'ផុតកំណត់ ឡូ ថ្នាំ ឱសថ' },
  },

  // ---------------------------------------------------------------- products
  {
    slug: 'add-products',
    topic: 'products',
    roles: ['OWNER', 'MANAGER'],
    title: { en: 'Add products, packs and barcodes', km: 'បន្ថែមផលិតផល កញ្ចប់ និងបាកូដ' },
    summary: {
      en: 'A product with its unit, price, barcode and photo; sell it by the piece or by the box.',
      km: 'ផលិតផលជាមួយឯកតា តម្លៃ បាកូដ និងរូបថត លក់វាជាដុំ ឬជាប្រអប់។',
    },
    where: { en: 'Products › Products › New product', km: 'ផលិតផល › ផលិតផល › ផលិតផលថ្មី' },
    app: 'products',
    steps: [
      {
        title: { en: 'The basics', km: 'ព័ត៌មានមូលដ្ឋាន' },
        text: {
          en: 'Name in English and Khmer, category, base unit (piece, bottle, kg...), selling price in dollars, and the barcode: scan it into the field.',
          km: 'ឈ្មោះជាភាសាអង់គ្លេស និងខ្មែរ ប្រភេទ ឯកតាមូលដ្ឋាន (ដុំ ដប គីឡូ...) តម្លៃលក់ជាដុល្លារ និងបាកូដ៖ ស្កេនវាចូលក្នុងប្រអប់។',
        },
      },
      {
        title: { en: 'Packs', km: 'កញ្ចប់' },
        text: {
          en: 'Add a box or a case: how many pieces it holds, its own barcode and its own price. Scanning the box barcode at the POS sells a whole box.',
          km: 'បន្ថែមប្រអប់ ឬកេស៖ ចំនួនដុំដែលវាផ្ទុក បាកូដផ្ទាល់ខ្លួន និងតម្លៃផ្ទាល់ខ្លួន។ ការស្កេនបាកូដប្រអប់នៅ POS លក់មួយប្រអប់ទាំងមូល។',
        },
      },
      {
        title: { en: 'More', km: 'បន្ថែមទៀត' },
        text: {
          en: 'A photo, a different price per branch, a reorder level, track expiry, and "no VAT" for products that are exempt.',
          km: 'រូបថត តម្លៃខុសគ្នាតាមសាខា កម្រិតកុម្ម៉ង់ឡើងវិញ តាមដានថ្ងៃផុតកំណត់ និង "គ្មានពន្ធអាករ" សម្រាប់ផលិតផលដែលត្រូវលើកលែង។',
        },
      },
    ],
    tips: [
      {
        en: 'No barcode on the item? Let the app make one and print labels (see "Print barcode labels").',
        km: 'គ្មានបាកូដលើទំនិញ? ឱ្យកម្មវិធីបង្កើតមួយ ហើយបោះពុម្ពស្លាក (មើល "បោះពុម្ពស្លាកបាកូដ")។',
      },
    ],
    related: ['import-excel', 'barcode-labels', 'reorder', 'expiry-and-batches'],
    keywords: { en: 'product item unit pack box case barcode price photo category', km: 'ផលិតផល ឯកតា ប្រអប់ បាកូដ តម្លៃ' },
  },
  {
    slug: 'import-excel',
    topic: 'products',
    roles: ['OWNER', 'MANAGER'],
    title: { en: 'Import products and stock from Excel', km: 'នាំចូលផលិតផល និងស្តុកពី Excel' },
    summary: {
      en: 'Fill the template, let the app check every row, then import thousands of products and their opening stock.',
      km: 'បំពេញគំរូ ឱ្យកម្មវិធីពិនិត្យរាល់ជួរ បន្ទាប់មកនាំចូលផលិតផលរាប់ពាន់ និងស្តុកដំបូងរបស់វា។',
    },
    where: { en: 'Products › Import from Excel', km: 'ផលិតផល › នាំចូលពី Excel' },
    app: 'products/import',
    flow: [
      { label: { en: 'Download template', km: 'ទាញយកគំរូ' } },
      { label: { en: 'Fill it', km: 'បំពេញវា' } },
      { label: { en: 'Check', km: 'ពិនិត្យ' }, note: { en: 'nothing saved yet', km: 'មិនទាន់រក្សាទុក' } },
      { label: { en: 'Import', km: 'នាំចូល' } },
    ],
    steps: [
      {
        title: { en: 'Products first', km: 'ផលិតផលមុន' },
        text: {
          en: 'Download the products template: name, Khmer name, SKU, barcode, category, unit, price, and an optional pack. Missing categories are made for you.',
          km: 'ទាញយកគំរូផលិតផល៖ ឈ្មោះ ឈ្មោះខ្មែរ SKU បាកូដ ប្រភេទ ឯកតា តម្លៃ និងកញ្ចប់ (មិនចាំបាច់)។ ប្រភេទដែលខ្វះត្រូវបានបង្កើតឱ្យអ្នក។',
        },
      },
      {
        title: { en: 'Check before importing', km: 'ពិនិត្យមុននាំចូល' },
        text: {
          en: 'Upload the file: each row shows its problems (a SKU used twice, a price that is not a number) and what will happen. Fix the file and upload again, or import only the good rows.',
          km: 'ផ្ទុកឯកសារ៖ ជួរនីមួយៗបង្ហាញបញ្ហារបស់វា (SKU ប្រើពីរដង តម្លៃមិនមែនជាលេខ) និងអ្វីដែលនឹងកើតឡើង។ កែឯកសារ ហើយផ្ទុកម្ដងទៀត ឬនាំចូលតែជួរដែលត្រឹមត្រូវ។',
        },
      },
      {
        title: { en: 'Then the opening stock', km: 'បន្ទាប់មកស្តុកដំបូង' },
        text: {
          en: 'The stock template takes the SKU or barcode, quantity, cost, and batch and expiry. It posts one opening stock document per file.',
          km: 'គំរូស្តុកយក SKU ឬបាកូដ ចំនួន ថ្លៃដើម និងឡូ និងថ្ងៃផុតកំណត់។ វាកត់ត្រាឯកសារស្តុកដំបូងមួយក្នុងមួយឯកសារ។',
        },
      },
    ],
    tips: [
      {
        en: 'Up to 2,000 rows per file. A shop with 10,000 products imports them in five files.',
        km: 'រហូតដល់ 2,000 ជួរក្នុងមួយឯកសារ។ ហាងដែលមានផលិតផល 10,000 នាំចូលវាជាប្រាំឯកសារ។',
      },
    ],
    related: ['add-products', 'first-day'],
    keywords: { en: 'import excel xlsx template bulk upload opening stock', km: 'នាំចូល Excel គំរូ ស្តុកដំបូង' },
  },
  {
    slug: 'barcode-labels',
    topic: 'products',
    roles: ['OWNER', 'MANAGER', 'STOCK_KEEPER'],
    title: { en: 'Print barcode labels', km: 'បោះពុម្ពស្លាកបាកូដ' },
    summary: {
      en: 'Give products without a barcode one of your own, and print sticker labels with name and price.',
      km: 'ផ្ដល់បាកូដផ្ទាល់ខ្លួនដល់ផលិតផលដែលគ្មានបាកូដ ហើយបោះពុម្ពស្លាកស្អិតជាមួយឈ្មោះ និងតម្លៃ។',
    },
    where: { en: 'Products › Products › Barcode labels', km: 'ផលិតផល › ផលិតផល › ស្លាកបាកូដ' },
    app: 'products',
    steps: [
      {
        title: { en: 'Choose the products', km: 'ជ្រើសរើសផលិតផល' },
        text: {
          en: 'Open Barcode labels and add products by name or scan. Those without a barcode get a shop barcode (EAN-13) when you print.',
          km: 'បើកស្លាកបាកូដ ហើយបន្ថែមផលិតផលតាមឈ្មោះ ឬការស្កេន។ ផលិតផលដែលគ្មានបាកូដ ទទួលបានបាកូដហាង (EAN-13) នៅពេលអ្នកបោះពុម្ព។',
        },
      },
      {
        title: { en: 'Print', km: 'បោះពុម្ព' },
        text: {
          en: 'Choose how many of each and print on a label printer or A4 sticker sheets.',
          km: 'ជ្រើសរើសចំនួននីមួយៗ ហើយបោះពុម្ពលើម៉ាស៊ីនបោះពុម្ពស្លាក ឬសន្លឹកស្លាកស្អិត A4។',
        },
      },
    ],
    related: ['add-products', 'pos-sale'],
    keywords: { en: 'label sticker barcode print EAN', km: 'ស្លាក បាកូដ បោះពុម្ព' },
  },
  {
    slug: 'reorder',
    topic: 'products',
    roles: ['OWNER', 'MANAGER', 'STOCK_KEEPER'],
    title: { en: 'Know what to reorder', km: 'ដឹងថាត្រូវកុម្ម៉ង់អ្វីឡើងវិញ' },
    summary: {
      en: 'Set a reorder level per product and branch; the app suggests how much to order and makes the purchase order.',
      km: 'កំណត់កម្រិតកុម្ម៉ង់ឡើងវិញតាមផលិតផល និងសាខា កម្មវិធីណែនាំចំនួនដែលត្រូវបញ្ជាទិញ ហើយបង្កើតការបញ្ជាទិញ។',
    },
    where: { en: 'Reports › Low stock and reorder', km: 'របាយការណ៍ › ស្តុកទាប និងការកុម្ម៉ង់' },
    app: 'reports?r=reorder',
    steps: [
      {
        title: { en: 'Set reorder levels', km: 'កំណត់កម្រិតកុម្ម៉ង់ឡើងវិញ' },
        text: {
          en: 'On each product, the level at which you want to reorder, for each branch if they sell differently, and how many days the supplier takes to deliver.',
          km: 'លើផលិតផលនីមួយៗ កម្រិតដែលអ្នកចង់កុម្ម៉ង់ឡើងវិញ សម្រាប់សាខានីមួយៗ បើពួកវាលក់ខុសគ្នា និងចំនួនថ្ងៃដែលអ្នកផ្គត់ផ្គង់ត្រូវការដើម្បីដឹកជញ្ជូន។',
        },
      },
      {
        title: { en: 'Read the suggestions', km: 'អានការណែនាំ' },
        text: {
          en: 'The report lists what is at or below its level, with a suggested order: enough for the delivery days plus two weeks of sales.',
          km: 'របាយការណ៍រាយអ្វីដែលនៅ ឬទាបជាងកម្រិតរបស់វា ជាមួយការបញ្ជាទិញដែលបានណែនាំ៖ គ្រប់សម្រាប់ថ្ងៃដឹកជញ្ជូន បូកការលក់ពីរសប្ដាហ៍។',
        },
      },
      {
        title: { en: 'Create purchase order', km: 'បង្កើតការបញ្ជាទិញ' },
        text: {
          en: 'Press "Create purchase order": a purchase order opens with every suggested line. Choose the supplier, remove what you do not need, and save.',
          km: 'ចុច "បង្កើតការបញ្ជាទិញ"៖ ការបញ្ជាទិញមួយបើកជាមួយរាល់បន្ទាត់ដែលបានណែនាំ។ ជ្រើសរើសអ្នកផ្គត់ផ្គង់ ដកអ្វីដែលអ្នកមិនត្រូវការចេញ ហើយរក្សាទុក។',
        },
      },
    ],
    tips: [
      {
        en: 'Reports › Economic order quantity shows the order size that keeps ordering plus holding costs lowest, for products you sell all year.',
        km: 'របាយការណ៍ › បរិមាណបញ្ជាទិញសន្សំសំចៃ (EOQ) បង្ហាញទំហំការបញ្ជាទិញដែលធ្វើឱ្យថ្លៃបញ្ជាទិញ និងថ្លៃរក្សាទុកទាបបំផុត សម្រាប់ផលិតផលដែលអ្នកលក់ពេញមួយឆ្នាំ។',
      },
    ],
    related: ['buy-and-receive', 'reports', 'see-stock'],
    keywords: { en: 'reorder low stock minimum suggestion EOQ purchase order', km: 'កុម្ម៉ង់ឡើងវិញ ស្តុកទាប EOQ' },
  },
];
