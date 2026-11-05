import { HelpArticle } from '../help-types';

/** Reports and alerts, team and roles, settings and plans, account and security. */
export const MANAGE: HelpArticle[] = [
  // ---------------------------------------------------------------- reports and alerts
  {
    slug: 'dashboard-and-alerts',
    topic: 'reports',
    roles: ['OWNER', 'MANAGER', 'CASHIER', 'STOCK_KEEPER'],
    title: { en: 'The dashboard and alerts', km: 'ផ្ទាំងគ្រប់គ្រង និងការជូនដំណឹង' },
    summary: {
      en: 'Today at a glance, made for your role, and what is waiting for you.',
      km: 'ថ្ងៃនេះក្នុងមួយភ្លែត រៀបចំសម្រាប់តួនាទីរបស់អ្នក និងអ្វីដែលកំពុងរង់ចាំអ្នក។',
    },
    where: { en: 'Dashboard, and the bell at the top', km: 'ផ្ទាំងគ្រប់គ្រង និងកណ្ដឹងនៅខាងលើ' },
    app: 'dashboard',
    steps: [
      {
        title: { en: 'Your dashboard', km: 'ផ្ទាំងគ្រប់គ្រងរបស់អ្នក' },
        text: {
          en: "Owners and Managers see today's sales and profit, debts, and low stock; cashiers see their own sales and shift; stock keepers see what to receive, count and transfer.",
          km: 'ម្ចាស់ និងអ្នកគ្រប់គ្រងឃើញការលក់ និងប្រាក់ចំណេញថ្ងៃនេះ បំណុល និងស្តុកទាប អ្នកគិតលុយឃើញការលក់ និងវេនផ្ទាល់ខ្លួន អ្នកគ្រប់គ្រងឃ្លាំងឃើញអ្វីដែលត្រូវទទួល រាប់ និងផ្ទេរ។',
        },
      },
      {
        title: { en: 'Waiting for approval', km: 'កំពុងរង់ចាំការអនុម័ត' },
        text: {
          en: 'Adjustments, stock counts, customer returns and purchase returns waiting for you are listed with a button to open each one.',
          km: 'ការកែតម្រូវ ការរាប់ស្តុក ការប្រគល់ពីអតិថិជន និងការប្រគល់ទៅអ្នកផ្គត់ផ្គង់ដែលកំពុងរង់ចាំអ្នក ត្រូវបានរាយជាមួយប៊ូតុងដើម្បីបើកនីមួយៗ។',
        },
      },
      {
        title: { en: 'The bell', km: 'កណ្ដឹង' },
        text: {
          en: 'Low stock, out of stock, near expiry and expired batches, and transfers in transit for more than 3 days. Click one to go to it.',
          km: 'ស្តុកទាប អស់ស្តុក ឡូជិតផុតកំណត់ និងផុតកំណត់ និងការផ្ទេរដែលកំពុងដឹកលើសពី 3 ថ្ងៃ។ ចុចមួយដើម្បីទៅកាន់វា។',
        },
      },
    ],
    related: ['reports', 'telegram', 'roles'],
    keywords: { en: 'dashboard home alerts bell notifications approvals', km: 'ផ្ទាំងគ្រប់គ្រង ការជូនដំណឹង អនុម័ត' },
  },
  {
    slug: 'reports',
    topic: 'reports',
    roles: ['OWNER', 'MANAGER'],
    title: { en: 'The reports', km: 'របាយការណ៍' },
    summary: {
      en: 'Sales, profit, debts, stock, expiry, losses and more, for a branch or all of them, printed or in Excel.',
      km: 'ការលក់ ប្រាក់ចំណេញ បំណុល ស្តុក ផុតកំណត់ ការខាត និងច្រើនទៀត សម្រាប់សាខាមួយ ឬទាំងអស់ បោះពុម្ព ឬជា Excel។',
    },
    where: { en: 'Reports', km: 'របាយការណ៍' },
    app: 'reports',
    steps: [
      {
        title: { en: 'Pick a report and a period', km: 'ជ្រើសរើសរបាយការណ៍ និងរយៈពេល' },
        text: {
          en: 'Money: sales summary, gross profit, profit and loss, customer and supplier debt and statements, cash shifts, VAT, purchases. Stock: stock on hand, low stock and reorder, near expiry, count differences, adjustments and losses, slow-moving stock. Analysis: ABC and economic order quantity.',
          km: 'ប្រាក់៖ សង្ខេបការលក់ ប្រាក់ចំណេញដុល ចំណេញ និងខាត បំណុល និងរបាយការណ៍គណនីអតិថិជន និងអ្នកផ្គត់ផ្គង់ វេនគិតលុយ ពន្ធអាករ ការទិញ។ ស្តុក៖ ស្តុកដែលមាន ស្តុកទាប និងការកុម្ម៉ង់ ជិតផុតកំណត់ ភាពខុសគ្នានៃការរាប់ ការកែស្តុក និងការខាត ស្តុកលក់យឺត។ ការវិភាគ៖ ABC និងបរិមាណបញ្ជាទិញសន្សំសំចៃ។',
        },
      },
      {
        title: { en: 'One branch or all', km: 'សាខាមួយ ឬទាំងអស់' },
        text: {
          en: 'Reports follow the branch at the top. Sales can be grouped by day, product, category, branch or cashier.',
          km: 'របាយការណ៍ធ្វើតាមសាខានៅខាងលើ។ ការលក់អាចដាក់ជាក្រុមតាមថ្ងៃ ផលិតផល ប្រភេទ សាខា ឬអ្នកគិតលុយ។',
        },
      },
      {
        title: { en: 'Print or Excel', km: 'បោះពុម្ព ឬ Excel' },
        text: {
          en: 'Every report prints on A4 and downloads as an Excel file, in your language.',
          km: 'របាយការណ៍នីមួយៗបោះពុម្ពលើក្រដាស A4 និងទាញយកជាឯកសារ Excel ជាភាសារបស់អ្នក។',
        },
      },
    ],
    tips: [
      {
        en: 'Costs, profit and margins are shown to Owners and Managers only. Cashiers and stock keepers see the reports of their own work.',
        km: 'ថ្លៃដើម ប្រាក់ចំណេញ និងភាគរយចំណេញ បង្ហាញតែម្ចាស់ និងអ្នកគ្រប់គ្រងប៉ុណ្ណោះ។ អ្នកគិតលុយ និងអ្នកគ្រប់គ្រងឃ្លាំងឃើញរបាយការណ៍នៃការងាររបស់ពួកគេ។',
      },
    ],
    related: ['dashboard-and-alerts', 'export-data', 'reorder'],
    keywords: { en: 'report sales profit loss debt stock excel print VAT ABC', km: 'របាយការណ៍ ការលក់ ចំណេញ ខាត បំណុល' },
  },
  {
    slug: 'telegram',
    topic: 'reports',
    roles: ['OWNER'],
    title: { en: 'Telegram summary and alerts', km: 'សង្ខេប និងការជូនដំណឹងតាម Telegram' },
    summary: {
      en: 'Get yesterday in one message every morning, and an alert the moment something needs you.',
      km: 'ទទួលបានសង្ខេបថ្ងៃម្សិលមិញក្នុងសារតែមួយរៀងរាល់ព្រឹក និងការជូនដំណឹងភ្លាមៗពេលមានអ្វីត្រូវការអ្នក។',
    },
    where: { en: 'Settings › Telegram', km: 'ការកំណត់ › Telegram' },
    app: 'settings/telegram',
    steps: [
      {
        title: { en: 'Connect', km: 'ភ្ជាប់' },
        text: {
          en: 'Press Connect and open the link: our bot opens in Telegram with a one-time code, press Start. To share it with partners, use the group link instead and add the bot to your group.',
          km: 'ចុច ភ្ជាប់ ហើយបើកតំណ៖ bot របស់យើងបើកក្នុង Telegram ជាមួយកូដប្រើម្ដង ចុច Start។ ដើម្បីចែករំលែកជាមួយដៃគូ ប្រើតំណក្រុមជំនួសវិញ ហើយបន្ថែម bot ទៅក្នុងក្រុមរបស់អ្នក។',
        },
      },
      {
        title: { en: 'The daily summary', km: 'សង្ខេបប្រចាំថ្ងៃ' },
        text: {
          en: "At 7:00 every morning (Phnom Penh time), for each branch: yesterday's sales in dollars and riel, gross profit and cash received; then low stock, items expiring soon, overdue customer invoices and supplier bills, bills due soon, and late transfers.",
          km: 'នៅម៉ោង 7:00 រៀងរាល់ព្រឹក (ម៉ោងភ្នំពេញ) សម្រាប់សាខានីមួយៗ៖ ការលក់ថ្ងៃម្សិលមិញជាដុល្លារ និងរៀល ប្រាក់ចំណេញដុល និងសាច់ប្រាក់ទទួលបាន បន្ទាប់មក ស្តុកទាប ទំនិញជិតផុតកំណត់ វិក្កយបត្រអតិថិជន និងវិក្កយបត្រអ្នកផ្គត់ផ្គង់ហួសកំណត់ វិក្កយបត្រត្រូវបង់ឆាប់ៗ និងការផ្ទេរយឺត។',
        },
      },
      {
        title: { en: 'Alerts right away', km: 'ការជូនដំណឹងភ្លាមៗ' },
        text: {
          en: 'Turn on the ones you want: a product sold out, a cash shift closed short, a sale voided, something waiting for your approval.',
          km: 'បើកអ្វីដែលអ្នកចង់បាន៖ ផលិតផលលក់អស់ វេនគិតលុយបិទដោយខ្វះប្រាក់ ការលក់ត្រូវបានលុបចោល អ្វីមួយកំពុងរង់ចាំការអនុម័តរបស់អ្នក។',
        },
      },
    ],
    related: ['dashboard-and-alerts', 'cash-shift', 'void-sale'],
    keywords: { en: 'telegram bot notification daily summary alert', km: 'Telegram សង្ខេប ជូនដំណឹង' },
  },
  {
    slug: 'export-data',
    topic: 'reports',
    roles: ['OWNER'],
    title: { en: 'Export all your data', km: 'នាំចេញទិន្នន័យទាំងអស់របស់អ្នក' },
    summary: {
      en: 'Your data is yours: download everything in one Excel file, one sheet per kind of record.',
      km: 'ទិន្នន័យរបស់អ្នកជារបស់អ្នក៖ ទាញយកអ្វីៗទាំងអស់ក្នុងឯកសារ Excel តែមួយ មួយសន្លឹកសម្រាប់ប្រភេទកំណត់ត្រានីមួយៗ។',
    },
    where: { en: 'Settings › Business profile › Export all data', km: 'ការកំណត់ › ព័ត៌មានអាជីវកម្ម › នាំចេញទិន្នន័យទាំងអស់' },
    app: 'settings/profile',
    steps: [
      {
        title: { en: 'Download', km: 'ទាញយក' },
        text: {
          en: 'Press "Export all data". Products, stock, customers, suppliers, sales, purchases, payments, expenses, transfers and more, in your language.',
          km: 'ចុច "នាំចេញទិន្នន័យទាំងអស់"។ ផលិតផល ស្តុក អតិថិជន អ្នកផ្គត់ផ្គង់ ការលក់ ការទិញ ការទូទាត់ ចំណាយ ការផ្ទេរ និងច្រើនទៀត ជាភាសារបស់អ្នក។',
        },
      },
    ],
    tips: [
      {
        en: 'Only Owners can export, on plans that include it. Keep the file safe: it holds your whole business.',
        km: 'មានតែម្ចាស់ទេដែលអាចនាំចេញ នៅលើគម្រោងដែលរួមបញ្ចូលវា។ រក្សាឯកសារឱ្យមានសុវត្ថិភាព៖ វាផ្ទុកអាជីវកម្មទាំងមូលរបស់អ្នក។',
      },
    ],
    related: ['reports', 'several-businesses'],
    keywords: { en: 'export backup excel download data', km: 'នាំចេញ បម្រុងទុក Excel' },
  },

  // ---------------------------------------------------------------- team and roles
  {
    slug: 'roles',
    topic: 'team',
    roles: ['OWNER'],
    title: { en: 'Roles: who can do what', km: 'តួនាទី៖ អ្នកណាអាចធ្វើអ្វី' },
    summary: {
      en: 'Four ready-made roles, and your own when you need something in between.',
      km: 'តួនាទីដែលរៀបចំរួចចំនួនបួន និងតួនាទីផ្ទាល់ខ្លួនរបស់អ្នក នៅពេលអ្នកត្រូវការអ្វីមួយនៅចន្លោះ។',
    },
    where: { en: 'Settings › Users and roles › Roles', km: 'ការកំណត់ › អ្នកប្រើ និងតួនាទី › តួនាទី' },
    app: 'settings/members',
    steps: [
      {
        title: { en: 'Owner', km: 'ម្ចាស់' },
        text: {
          en: 'Everything, including the business settings, the team, the plan and billing, exporting and archiving. A business always has at least one Owner.',
          km: 'អ្វីៗទាំងអស់ រួមទាំងការកំណត់អាជីវកម្ម ក្រុមការងារ គម្រោង និងការបង់ប្រាក់ ការនាំចេញ និងការរក្សាទុកក្នុងបណ្ណសារ។ អាជីវកម្មតែងតែមានម្ចាស់យ៉ាងតិចម្នាក់។',
        },
      },
      {
        title: { en: 'Manager', km: 'អ្នកគ្រប់គ្រង' },
        text: {
          en: 'Runs the shop: sells and voids, customers and suppliers, buying and bills, products and prices, stock with approvals, transfers, expenses, the exchange rate, every cash shift, and the reports with profit.',
          km: 'ដំណើរការហាង៖ លក់ និងលុបចោល អតិថិជន និងអ្នកផ្គត់ផ្គង់ ការទិញ និងវិក្កយបត្រទិញ ផលិតផល និងតម្លៃ ស្តុកជាមួយការអនុម័ត ការផ្ទេរ ចំណាយ អត្រាប្តូរប្រាក់ វេនគិតលុយទាំងអស់ និងរបាយការណ៍ជាមួយប្រាក់ចំណេញ។',
        },
      },
      {
        title: { en: 'Cashier', km: 'អ្នកគិតលុយ' },
        text: {
          en: 'Sells at the POS with their own cash shift, adds customers from the POS, takes sales orders, and asks for customer returns. Sees products and stock, not costs.',
          km: 'លក់នៅ POS ជាមួយវេនគិតលុយផ្ទាល់ខ្លួន បន្ថែមអតិថិជនពី POS ទទួលការកុម្ម៉ង់លក់ និងស្នើការប្រគល់ពីអតិថិជន។ មើលឃើញផលិតផល និងស្តុក មិនមែនថ្លៃដើមទេ។',
        },
      },
      {
        title: { en: 'Stock keeper', km: 'អ្នកគ្រប់គ្រងឃ្លាំង' },
        text: {
          en: 'Receives goods, counts stock, transfers between branches, delivers orders, asks for adjustments and prepares returns to suppliers.',
          km: 'ទទួលទំនិញ រាប់ស្តុក ផ្ទេររវាងសាខា ដឹកជញ្ជូនការកុម្ម៉ង់ ស្នើការកែតម្រូវ និងរៀបចំការប្រគល់ទៅអ្នកផ្គត់ផ្គង់។',
        },
      },
      {
        title: { en: 'Your own roles', km: 'តួនាទីផ្ទាល់ខ្លួនរបស់អ្នក' },
        text: {
          en: 'Built-in roles cannot be changed: duplicate one, name it (a senior cashier who may void, for example) and tick what it may do.',
          km: 'តួនាទីដើមមិនអាចកែប្រែបានទេ៖ ចម្លងមួយ ដាក់ឈ្មោះ (ឧទាហរណ៍ អ្នកគិតលុយជាន់ខ្ពស់ដែលអាចលុបចោលបាន) ហើយធីកអ្វីដែលវាអាចធ្វើ។',
        },
      },
    ],
    related: ['invite-staff', 'activity-log'],
    keywords: { en: 'role permission owner manager cashier stock keeper access', km: 'តួនាទី សិទ្ធិ ម្ចាស់ អ្នកគ្រប់គ្រង អ្នកគិតលុយ' },
  },
  {
    slug: 'invite-staff',
    topic: 'team',
    roles: ['OWNER'],
    title: { en: 'Invite your staff', km: 'អញ្ជើញបុគ្គលិករបស់អ្នក' },
    summary: {
      en: 'Send a link on Telegram or show a QR code. Staff without email log in with a username.',
      km: 'ផ្ញើតំណតាម Telegram ឬបង្ហាញកូដ QR។ បុគ្គលិកដែលគ្មានអ៊ីមែលចូលដោយប្រើឈ្មោះអ្នកប្រើ។',
    },
    where: { en: 'Settings › Users and roles › Invite someone', km: 'ការកំណត់ › អ្នកប្រើ និងតួនាទី › អញ្ជើញ' },
    app: 'settings/members',
    flow: [
      { label: { en: 'Invite', km: 'អញ្ជើញ' }, note: { en: 'role and branch', km: 'តួនាទី និងសាខា' } },
      { label: { en: 'Link or QR', km: 'តំណ ឬ QR' } },
      { label: { en: 'They join', km: 'ពួកគេចូលរួម' } },
      { label: { en: 'At work', km: 'ចាប់ផ្ដើមធ្វើការ' } },
    ],
    steps: [
      {
        title: { en: 'Create the invitation', km: 'បង្កើតការអញ្ជើញ' },
        text: {
          en: 'Choose the role and where they work: one branch, several, or all. Add their email if they have one.',
          km: 'ជ្រើសរើសតួនាទី និងកន្លែងដែលពួកគេធ្វើការ៖ សាខាមួយ ច្រើន ឬទាំងអស់។ បន្ថែមអ៊ីមែលរបស់ពួកគេបើពួកគេមាន។',
        },
      },
      {
        title: { en: 'Send it', km: 'ផ្ញើវា' },
        text: {
          en: 'Copy the link into Telegram, or let them scan the QR code with their phone.',
          km: 'ចម្លងតំណទៅក្នុង Telegram ឬឱ្យពួកគេស្កេនកូដ QR ដោយទូរស័ព្ទរបស់ពួកគេ។',
        },
      },
      {
        title: { en: 'They join', km: 'ពួកគេចូលរួម' },
        text: {
          en: 'New people choose a username and password; someone with an account just signs in and accepts.',
          km: 'មនុស្សថ្មីជ្រើសរើសឈ្មោះអ្នកប្រើ និងពាក្យសម្ងាត់ អ្នកដែលមានគណនីគ្រាន់តែចូល ហើយទទួលយក។',
        },
      },
    ],
    tips: [
      {
        en: 'A staff member without email forgot their password? Make a "Password reset link" for them on their row and send it.',
        km: 'បុគ្គលិកដែលគ្មានអ៊ីមែលភ្លេចពាក្យសម្ងាត់? បង្កើត "តំណកំណត់ពាក្យសម្ងាត់ឡើងវិញ" ឱ្យពួកគេនៅលើជួររបស់ពួកគេ ហើយផ្ញើវា។',
      },
      {
        en: 'Removing someone takes effect at once, even if they are logged in.',
        km: 'ការដកនរណាម្នាក់ចេញមានប្រសិទ្ធភាពភ្លាមៗ ទោះបីពួកគេកំពុងចូលក៏ដោយ។',
      },
    ],
    related: ['roles', 'pin-switch', 'plans-and-billing'],
    keywords: { en: 'invite staff employee member team QR link username', km: 'អញ្ជើញ បុគ្គលិក សមាជិក QR' },
  },
  {
    slug: 'activity-log',
    topic: 'team',
    roles: ['OWNER', 'MANAGER'],
    title: { en: 'The activity log', km: 'កំណត់ហេតុសកម្មភាព' },
    summary: {
      en: 'Who did what and when: voids, price changes, approvals, settings.',
      km: 'អ្នកណាបានធ្វើអ្វី និងពេលណា៖ ការលុបចោល ការប្ដូរតម្លៃ ការអនុម័ត ការកំណត់។',
    },
    where: { en: 'Settings › Activity log', km: 'ការកំណត់ › កំណត់ហេតុសកម្មភាព' },
    app: 'settings/activity',
    steps: [
      {
        title: { en: 'Look something up', km: 'ស្វែងរកអ្វីមួយ' },
        text: {
          en: 'Filter by person, kind of record and date. Each entry shows what changed, from what to what.',
          km: 'ច្រោះតាមមនុស្ស ប្រភេទកំណត់ត្រា និងកាលបរិច្ឆេទ។ ធាតុនីមួយៗបង្ហាញអ្វីដែលបានប្ដូរ ពីអ្វីទៅអ្វី។',
        },
      },
    ],
    related: ['roles', 'void-sale'],
    keywords: { en: 'audit log history who changed', km: 'កំណត់ហេតុ ប្រវត្តិ' },
  },

  // ---------------------------------------------------------------- settings and plans
  {
    slug: 'business-settings',
    topic: 'settings',
    roles: ['OWNER'],
    title: { en: 'Set up your business the way you work', km: 'កំណត់អាជីវកម្មតាមរបៀបដែលអ្នកធ្វើការ' },
    summary: {
      en: 'Branches and warehouses, the exchange rate, tax and receipts, sales rules, and how the app looks.',
      km: 'សាខា និងឃ្លាំង អត្រាប្តូរប្រាក់ ពន្ធ និងបង្កាន់ដៃ គោលការណ៍លក់ និងរូបរាងកម្មវិធី។',
    },
    where: { en: 'Settings', km: 'ការកំណត់' },
    app: 'settings/profile',
    steps: [
      {
        title: { en: 'Business profile', km: 'ព័ត៌មានអាជីវកម្ម' },
        text: {
          en: 'Name, logo, phone, address and VAT TIN: they print on receipts and invoices.',
          km: 'ឈ្មោះ ឡូហ្គោ ទូរស័ព្ទ អាសយដ្ឋាន និងលេខអត្តសញ្ញាណកម្មអាករ៖ វាបោះពុម្ពលើបង្កាន់ដៃ និងវិក្កយបត្រ។',
        },
      },
      {
        title: { en: 'Branches and warehouses', km: 'សាខា និងឃ្លាំង' },
        text: {
          en: 'Each branch has warehouses: the one the POS sells from, and the one goods are received into. A back store is just another warehouse.',
          km: 'សាខានីមួយៗមានឃ្លាំង៖ ឃ្លាំងដែល POS លក់ចេញ និងឃ្លាំងដែលទំនិញត្រូវបានទទួលចូល។ ឃ្លាំងក្រោយគ្រាន់តែជាឃ្លាំងមួយទៀត។',
        },
      },
      {
        title: { en: 'Exchange rate', km: 'អត្រាប្តូរប្រាក់' },
        text: {
          en: "Today's dollar to riel rate. The POS asks for it when it is missing.",
          km: 'អត្រាដុល្លារទៅរៀលថ្ងៃនេះ។ POS សួររកវានៅពេលវាខ្វះ។',
        },
      },
      {
        title: { en: 'Tax and receipt', km: 'ពន្ធ និងបង្កាន់ដៃ' },
        text: {
          en: 'VAT on or off and its rate, the receipt header and footer, and the paper width: 80 mm or 58 mm.',
          km: 'បើក ឬបិទពន្ធអាករ និងអត្រារបស់វា ក្បាល និងបាតបង្កាន់ដៃ និងទទឹងក្រដាស៖ 80 mm ឬ 58 mm។',
        },
      },
      {
        title: { en: 'Sales rules', km: 'គោលការណ៍លក់' },
        text: {
          en: 'Riel rounding, the largest discount a cashier may give, whether stock may go below zero, payment methods and your KHQR image, the three expiry warning windows, and your own document number prefixes.',
          km: 'ការបង្គត់រៀល ការបញ្ចុះតម្លៃធំបំផុតដែលអ្នកគិតលុយអាចផ្ដល់ ថាតើស្តុកអាចទៅក្រោមសូន្យឬទេ វិធីបង់ប្រាក់ និងរូបភាព KHQR របស់អ្នក រយៈពេលព្រមានផុតកំណត់ទាំងបី និងបុព្វបទលេខឯកសារផ្ទាល់ខ្លួន។',
        },
      },
      {
        title: { en: 'Appearance', km: 'រូបរាង' },
        text: {
          en: "Your business color (we check it stays readable), and each person's light or dark mode and spacing.",
          km: 'ពណ៌អាជីវកម្មរបស់អ្នក (យើងពិនិត្យថាវានៅតែអានបាន) និងរបៀបភ្លឺ ឬងងឹត និងចន្លោះរបស់ម្នាក់ៗ។',
        },
      },
    ],
    related: ['dollars-and-riel', 'expiry-and-batches', 'plans-and-billing'],
    keywords: { en: 'settings branch warehouse VAT receipt rounding discount negative stock prefix logo color', km: 'ការកំណត់ សាខា ឃ្លាំង ពន្ធ បង្កាន់ដៃ' },
  },
  {
    slug: 'plans-and-billing',
    topic: 'settings',
    roles: ['OWNER'],
    title: { en: 'Your plan and paying for it', km: 'គម្រោងរបស់អ្នក និងការបង់ប្រាក់' },
    summary: {
      en: 'Free, Basic or Pro, monthly or yearly. Change any time; nothing is deleted when a plan ends.',
      km: 'ឥតគិតថ្លៃ Basic ឬ Pro ប្រចាំខែ ឬប្រចាំឆ្នាំ។ ប្ដូរបានគ្រប់ពេល គ្មានអ្វីត្រូវលុបនៅពេលគម្រោងចប់ទេ។',
    },
    where: { en: 'Settings › Plan and billing', km: 'ការកំណត់ › គម្រោង និងការបង់ប្រាក់' },
    app: 'settings/billing',
    flow: [
      { label: { en: 'Free trial of Pro', km: 'សាកល្បង Pro ឥតគិតថ្លៃ' } },
      { label: { en: 'Subscribe', km: 'ជាវ' } },
      { label: { en: 'Renews', km: 'បន្តដោយស្វ័យប្រវត្តិ' }, note: { en: 'reminders 7, 3 and 1 days before', km: 'រំលឹក 7 3 និង 1 ថ្ងៃមុន' } },
      { label: { en: 'Free plan', km: 'គម្រោងឥតគិតថ្លៃ' }, note: { en: 'if not renewed', km: 'បើមិនបន្ត' }, side: true },
    ],
    steps: [
      {
        title: { en: 'Subscribe', km: 'ជាវ' },
        text: {
          en: 'Choose the plan and monthly or yearly (a year costs 10 months). Pay online, or by bank transfer with a screenshot that we confirm.',
          km: 'ជ្រើសរើសគម្រោង និងប្រចាំខែ ឬប្រចាំឆ្នាំ (មួយឆ្នាំតម្លៃ 10 ខែ)។ បង់តាមអនឡាញ ឬផ្ទេរប្រាក់តាមធនាគារជាមួយរូបថតអេក្រង់ដែលយើងបញ្ជាក់។',
        },
      },
      {
        title: { en: 'Change plan', km: 'ប្ដូរគម្រោង' },
        text: {
          en: 'Upgrading starts at once and you pay only for the days left. Downgrading happens at the end of the period you paid for.',
          km: 'ការដំឡើងចាប់ផ្ដើមភ្លាមៗ ហើយអ្នកបង់តែសម្រាប់ថ្ងៃដែលនៅសល់។ ការបន្ថយកើតឡើងនៅចុងរយៈពេលដែលអ្នកបានបង់។',
        },
      },
      {
        title: { en: 'Coupon codes', km: 'កូដប័ណ្ណបញ្ចុះតម្លៃ' },
        text: {
          en: 'Have a code from us? Enter it in Plan and billing: the discount is taken off your next invoices.',
          km: 'មានកូដពីយើង? បញ្ចូលវានៅក្នុង គម្រោង និងការបង់ប្រាក់៖ ការបញ្ចុះតម្លៃត្រូវបានកាត់ចេញពីវិក្កយបត្របន្ទាប់របស់អ្នក។',
        },
      },
    ],
    tips: [
      {
        en: 'If you have more branches, people or products than the Free plan allows when a plan ends, the extras are switched off, not deleted: you choose which stay, and they all come back when you subscribe again.',
        km: 'បើអ្នកមានសាខា មនុស្ស ឬផលិតផលច្រើនជាងគម្រោងឥតគិតថ្លៃអនុញ្ញាតនៅពេលគម្រោងចប់ អ្វីដែលលើសត្រូវបានបិទ មិនមែនលុបទេ៖ អ្នកជ្រើសរើសអ្វីដែលនៅ ហើយវាទាំងអស់ត្រឡប់មកវិញនៅពេលអ្នកជាវម្ដងទៀត។',
      },
    ],
    related: ['set-up-business', 'business-settings'],
    keywords: { en: 'plan subscription billing price trial upgrade downgrade coupon invoice pay', km: 'គម្រោង ជាវ តម្លៃ សាកល្បង ប័ណ្ណ' },
  },

  // ---------------------------------------------------------------- account and security
  {
    slug: 'account-security',
    topic: 'account',
    roles: ['OWNER', 'MANAGER', 'CASHIER', 'STOCK_KEEPER'],
    title: { en: 'Keep your account safe', km: 'រក្សាគណនីរបស់អ្នកឱ្យមានសុវត្ថិភាព' },
    summary: {
      en: 'Change your password, sign out of every device, set your POS PIN, or delete your account.',
      km: 'ប្ដូរពាក្យសម្ងាត់ ចាកចេញពីគ្រប់ឧបករណ៍ កំណត់ PIN សម្រាប់ POS ឬលុបគណនីរបស់អ្នក។',
    },
    where: { en: 'My account', km: 'គណនីរបស់ខ្ញុំ' },
    app: 'account',
    steps: [
      {
        title: { en: 'Password', km: 'ពាក្យសម្ងាត់' },
        text: {
          en: 'Change it in My account. Forgot it? Use "Forgot password" on the login page; staff without email ask their Owner for a reset link.',
          km: 'ប្ដូរវានៅក្នុង គណនីរបស់ខ្ញុំ។ ភ្លេចវា? ប្រើ "ភ្លេចពាក្យសម្ងាត់" នៅទំព័រចូល បុគ្គលិកដែលគ្មានអ៊ីមែលសុំតំណកំណត់ឡើងវិញពីម្ចាស់របស់ពួកគេ។',
        },
      },
      {
        title: { en: 'Lost a phone?', km: 'បាត់ទូរស័ព្ទ?' },
        text: {
          en: 'Sign out of all devices from My account, then change your password.',
          km: 'ចាកចេញពីឧបករណ៍ទាំងអស់ពី គណនីរបស់ខ្ញុំ បន្ទាប់មកប្ដូរពាក្យសម្ងាត់របស់អ្នក។',
        },
      },
      {
        title: { en: 'Delete my account', km: 'លុបគណនីរបស់ខ្ញុំ' },
        text: {
          en: 'Your name, email, phone and PIN are removed and you leave every business; the records you entered stay with the business. It is refused while you are the only Owner of a business.',
          km: 'ឈ្មោះ អ៊ីមែល ទូរស័ព្ទ និង PIN របស់អ្នកត្រូវបានលុប ហើយអ្នកចាកចេញពីគ្រប់អាជីវកម្ម កំណត់ត្រាដែលអ្នកបានបញ្ចូលនៅតែជារបស់អាជីវកម្ម។ វាត្រូវបានបដិសេធ ខណៈដែលអ្នកជាម្ចាស់តែម្នាក់គត់នៃអាជីវកម្មមួយ។',
        },
      },
    ],
    warning: {
      en: 'Deleting your account cannot be undone.',
      km: 'ការលុបគណនីរបស់អ្នកមិនអាចត្រឡប់វិញបានទេ។',
    },
    related: ['pin-switch', 'invite-staff', 'troubleshooting'],
    keywords: { en: 'password reset forgot sign out devices delete account security PIN', km: 'ពាក្យសម្ងាត់ ភ្លេច ចាកចេញ លុបគណនី' },
  },
  {
    slug: 'troubleshooting',
    topic: 'account',
    roles: ['OWNER', 'MANAGER', 'CASHIER', 'STOCK_KEEPER'],
    title: { en: 'Common messages and what to do', km: 'សារទូទៅ និងអ្វីដែលត្រូវធ្វើ' },
    summary: {
      en: 'What the app is telling you, and how to get going again.',
      km: 'អ្វីដែលកម្មវិធីកំពុងប្រាប់អ្នក និងរបៀបបន្តការងារវិញ។',
    },
    steps: [
      {
        title: { en: '"Not enough stock of …"', km: '"ស្តុកមិនគ្រប់គ្រាន់ …"' },
        text: {
          en: 'The app thinks the shelf is empty. Receive the goods that arrived, or count the product. If your shop sells before receiving, an Owner can allow stock below zero in Settings › Sales rules.',
          km: 'កម្មវិធីគិតថាធ្នើទទេ។ ទទួលទំនិញដែលបានមកដល់ ឬរាប់ផលិតផល។ បើហាងរបស់អ្នកលក់មុនទទួល ម្ចាស់អាចអនុញ្ញាតឱ្យស្តុកទៅក្រោមសូន្យនៅក្នុង ការកំណត់ › គោលការណ៍លក់។',
        },
      },
      {
        title: { en: '"Pay later needs a named customer"', km: '"ការបង់ពេលក្រោយត្រូវការអតិថិជនដែលមានឈ្មោះ"' },
        text: {
          en: 'The money given is less than the total. Take the full amount, or choose a customer with a phone number to sell on credit.',
          km: 'ប្រាក់ដែលបានឱ្យតិចជាងតម្លៃសរុប។ ទទួលចំនួនពេញ ឬជ្រើសរើសអតិថិជនដែលមានលេខទូរស័ព្ទ ដើម្បីលក់ជំពាក់។',
        },
      },
      {
        title: { en: '"Too many tries. Please wait"', km: '"ព្យាយាមច្រើនដងពេក។ សូមរង់ចាំ"' },
        text: {
          en: 'To protect your account, logins and emails are limited. Wait the minutes shown, then try again carefully.',
          km: 'ដើម្បីការពារគណនីរបស់អ្នក ការចូល និងអ៊ីមែលមានកំណត់។ រង់ចាំនាទីដែលបានបង្ហាញ បន្ទាប់មកព្យាយាមម្ដងទៀតដោយប្រុងប្រយ័ត្ន។',
        },
      },
      {
        title: { en: '"… can\'t be voided"', km: '"… មិនអាចលុបចោលបាន"' },
        text: {
          en: 'What the document brought in has been sold or moved since. Make a new adjustment or transfer instead.',
          km: 'អ្វីដែលឯកសារបាននាំចូលត្រូវបានលក់ ឬផ្លាស់ទីរួចហើយ។ សូមធ្វើការកែតម្រូវ ឬការផ្ទេរថ្មីជំនួសវិញ។',
        },
      },
      {
        title: { en: 'The receipt prints too wide or too small', km: 'បង្កាន់ដៃបោះពុម្ពធំពេក ឬតូចពេក' },
        text: {
          en: 'Choose your paper width (80 mm or 58 mm) in Settings › Tax and receipt, and in the print window set margins to none.',
          km: 'ជ្រើសរើសទទឹងក្រដាស (80 mm ឬ 58 mm) នៅក្នុង ការកំណត់ › ពន្ធ និងបង្កាន់ដៃ ហើយក្នុងផ្ទាំងបោះពុម្ព កំណត់គែមជាគ្មាន។',
        },
      },
      {
        title: { en: 'A page says I have no access', km: 'ទំព័រមួយប្រាប់ថាខ្ញុំគ្មានសិទ្ធិ' },
        text: {
          en: 'Your role does not include it, or you work in another branch. Ask your Owner.',
          km: 'តួនាទីរបស់អ្នកមិនរួមបញ្ចូលវាទេ ឬអ្នកធ្វើការនៅសាខាផ្សេង។ សូមសួរម្ចាស់របស់អ្នក។',
        },
      },
    ],
    related: ['account-security', 'roles', 'pos-sale'],
    keywords: { en: 'error problem help not working message', km: 'កំហុស បញ្ហា ជំនួយ' },
  },
];
