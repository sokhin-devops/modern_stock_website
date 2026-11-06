import { HelpArticle } from '../help-types';

/** Getting started, and selling at the POS. */
export const START_AND_SELLING: HelpArticle[] = [
  // ---------------------------------------------------------------- getting started
  {
    slug: 'create-account',
    topic: 'start',
    roles: ['OWNER'],
    title: { en: 'Create your account', km: 'បង្កើតគណនីរបស់អ្នក' },
    summary: {
      en: 'Sign up with your email, confirm it, and you are ready to set up your business.',
      km: 'ចុះឈ្មោះដោយប្រើអ៊ីមែល បញ្ជាក់វា ហើយអ្នកអាចចាប់ផ្ដើមរៀបចំអាជីវកម្មបាន។',
    },
    where: { en: 'Website › Start free', km: 'គេហទំព័រ › ចាប់ផ្ដើមឥតគិតថ្លៃ' },
    app: 'sign-up',
    steps: [
      {
        title: { en: 'Open the sign-up page', km: 'បើកទំព័រចុះឈ្មោះ' },
        text: {
          en: 'Press "Start free" on this website. Enter your full name, your email and a password of at least 8 characters. A phone number is optional.',
          km: 'ចុច "ចាប់ផ្ដើមឥតគិតថ្លៃ" នៅលើគេហទំព័រនេះ។ បញ្ចូលឈ្មោះពេញ អ៊ីមែល និងពាក្យសម្ងាត់យ៉ាងតិច 8 តួ។ លេខទូរស័ព្ទមិនចាំបាច់ទេ។',
        },
      },
      {
        title: { en: 'Choose your language', km: 'ជ្រើសរើសភាសា' },
        text: {
          en: 'Khmer or English. You can change it later at any time; each person in the team picks their own.',
          km: 'ខ្មែរ ឬអង់គ្លេស។ អ្នកអាចប្ដូរវាពេលក្រោយបានគ្រប់ពេល ហើយម្នាក់ៗក្នុងក្រុមជ្រើសរើសភាសាផ្ទាល់ខ្លួន។',
        },
      },
      {
        title: { en: 'Confirm your email', km: 'បញ្ជាក់អ៊ីមែលរបស់អ្នក' },
        text: {
          en: 'We send you a link. Open it within 24 hours. If it does not arrive, look in the spam folder or ask for a new one on the login page.',
          km: 'យើងផ្ញើតំណមួយទៅអ្នក។ សូមបើកវាក្នុងរយៈពេល 24 ម៉ោង។ បើមិនទទួលបាន សូមមើលក្នុងថត spam ឬស្នើសុំតំណថ្មីនៅទំព័រចូល។',
        },
      },
      {
        title: { en: 'Log in', km: 'ចូលប្រព័ន្ធ' },
        text: {
          en: 'Log in with your email (or a username, for staff without email) and your password. You land on the setup page of your first business.',
          km: 'ចូលដោយប្រើអ៊ីមែល (ឬឈ្មោះអ្នកប្រើ សម្រាប់បុគ្គលិកដែលគ្មានអ៊ីមែល) និងពាក្យសម្ងាត់។ អ្នកនឹងទៅដល់ទំព័ររៀបចំអាជីវកម្មដំបូងរបស់អ្នក។',
        },
      },
    ],
    tips: [
      {
        en: 'Staff do not sign up here. You invite them from the app, and they join with the link (see "Invite your staff").',
        km: 'បុគ្គលិកមិនចុះឈ្មោះនៅទីនេះទេ។ អ្នកអញ្ជើញពួកគេពីកម្មវិធី ហើយពួកគេចូលរួមតាមតំណ (មើល "អញ្ជើញបុគ្គលិក")។',
      },
    ],
    related: ['set-up-business', 'invite-staff', 'account-security'],
    keywords: { en: 'register sign up email verify', km: 'ចុះឈ្មោះ អ៊ីមែល បញ្ជាក់' },
  },
  {
    slug: 'set-up-business',
    topic: 'start',
    roles: ['OWNER'],
    title: { en: 'Set up your business', km: 'រៀបចំអាជីវកម្មរបស់អ្នក' },
    summary: {
      en: 'Name your shop, pick its kind, and answer a few questions. Every new business starts with a free trial of the Pro plan.',
      km: 'ដាក់ឈ្មោះហាង ជ្រើសរើសប្រភេទ ហើយឆ្លើយសំណួរពីរបី។ អាជីវកម្មថ្មីនីមួយៗចាប់ផ្ដើមដោយការសាកល្បងគម្រោង Pro ដោយឥតគិតថ្លៃ។',
    },
    where: { en: 'After the first login, or Businesses › New business', km: 'ក្រោយចូលលើកដំបូង ឬ អាជីវកម្ម › អាជីវកម្មថ្មី' },
    app: 'businesses',
    flow: [
      { label: { en: 'Name and kind', km: 'ឈ្មោះ និងប្រភេទ' } },
      { label: { en: 'Main branch', km: 'សាខាមេ' } },
      { label: { en: 'Rate, VAT, rounding', km: 'អត្រា ពន្ធ ការបង្គត់' } },
      { label: { en: 'Starter set', km: 'ឈុតចាប់ផ្ដើម' } },
      { label: { en: 'Dashboard', km: 'ផ្ទាំងគ្រប់គ្រង' } },
    ],
    steps: [
      {
        title: { en: 'Name and kind of shop', km: 'ឈ្មោះ និងប្រភេទហាង' },
        text: {
          en: 'Give the business a name in English and, if you like, in Khmer. Choose its kind: mini-mart, grocery, pharmacy, cosmetics, hardware, phone shop, wholesale or other.',
          km: 'ដាក់ឈ្មោះអាជីវកម្មជាភាសាអង់គ្លេស ហើយបើចង់ ជាភាសាខ្មែរផង។ ជ្រើសរើសប្រភេទ៖ មីនីម៉ាត ហាងលក់គ្រឿងទេស ឱសថស្ថាន គ្រឿងសំអាង គ្រឿងសំណង់ ហាងទូរស័ព្ទ លក់ដុំ ឬផ្សេងៗ។',
        },
      },
      {
        title: { en: 'Your main branch', km: 'សាខាមេរបស់អ្នក' },
        text: {
          en: 'Name the shop where you sell. It gets a "Main" warehouse; you can add back stores and more branches later.',
          km: 'ដាក់ឈ្មោះហាងដែលអ្នកលក់។ វាមានឃ្លាំង "Main" មួយ ហើយអ្នកអាចបន្ថែមឃ្លាំងក្រោយ និងសាខាផ្សេងទៀតពេលក្រោយ។',
        },
      },
      {
        title: { en: 'Exchange rate, VAT and riel rounding', km: 'អត្រាប្តូរប្រាក់ ពន្ធ និងការបង្គត់រៀល' },
        text: {
          en: "Enter today's rate (for example $1 = ៛4,100), whether you charge VAT, and how riel amounts are rounded: to ៛100, ៛500 or ៛1,000.",
          km: 'បញ្ចូលអត្រាថ្ងៃនេះ (ឧទាហរណ៍ $1 = ៛4,100) ថាតើអ្នកគិតពន្ធអាករឬទេ និងរបៀបបង្គត់ចំនួនរៀល៖ ទៅ ៛100 ៛500 ឬ ៛1,000។',
        },
      },
      {
        title: { en: 'Starter set', km: 'ឈុតចាប់ផ្ដើម' },
        text: {
          en: 'We add the usual units and categories for your kind of shop. Tick "sample products" to try the POS straight away; delete them later.',
          km: 'យើងបន្ថែមឯកតា និងប្រភេទដែលប្រើញឹកញាប់សម្រាប់ប្រភេទហាងរបស់អ្នក។ ធីក "ផលិតផលគំរូ" ដើម្បីសាកល្បង POS ភ្លាមៗ ហើយលុបវាចោលពេលក្រោយ។',
        },
      },
    ],
    tips: [
      {
        en: 'The trial gives you every Pro feature. When it ends, the business moves to the Free plan: nothing is deleted.',
        km: 'ការសាកល្បងផ្ដល់មុខងារ Pro ទាំងអស់។ ពេលវាចប់ អាជីវកម្មប្ដូរទៅគម្រោងឥតគិតថ្លៃ៖ គ្មានអ្វីត្រូវបានលុបទេ។',
      },
    ],
    related: ['first-day', 'business-settings', 'plans-and-billing'],
    keywords: { en: 'onboarding wizard setup trial', km: 'រៀបចំ សាកល្បង' },
  },
  {
    slug: 'first-day',
    topic: 'start',
    roles: ['OWNER', 'MANAGER'],
    title: { en: 'Your first day, step by step', km: 'ថ្ងៃដំបូងរបស់អ្នក មួយជំហានម្ដងៗ' },
    summary: {
      en: 'From an empty business to your first sale and your team at work, in about an hour.',
      km: 'ពីអាជីវកម្មទទេ ដល់ការលក់ដំបូង និងក្រុមការងារចាប់ផ្ដើមធ្វើការ ក្នុងរយៈពេលប្រហែលមួយម៉ោង។',
    },
    flow: [
      { label: { en: 'Products', km: 'ផលិតផល' } },
      { label: { en: 'Opening stock', km: 'ស្តុកដំបូង' } },
      { label: { en: 'Exchange rate', km: 'អត្រាប្តូរប្រាក់' } },
      { label: { en: 'First sale', km: 'ការលក់ដំបូង' } },
      { label: { en: 'Invite the team', km: 'អញ្ជើញក្រុម' } },
    ],
    steps: [
      {
        title: { en: '1. Add your products', km: '1. បន្ថែមផលិតផល' },
        text: {
          en: 'Type them in Products, or fill the Excel template and import hundreds at once. Scan the barcode on each item so the POS finds it.',
          km: 'វាយបញ្ចូលនៅក្នុងផលិតផល ឬបំពេញគំរូ Excel ហើយនាំចូលរាប់រយក្នុងពេលតែមួយ។ ស្កេនបាកូដលើទំនិញនីមួយៗ ដើម្បីឱ្យ POS រកឃើញវា។',
        },
      },
      {
        title: { en: '2. Enter what you have now', km: '2. បញ្ចូលអ្វីដែលអ្នកមានឥឡូវនេះ' },
        text: {
          en: 'Count the shelves and enter it as opening stock, with what each item cost you. Medicines and food: add the batch and expiry date.',
          km: 'រាប់ទំនិញលើធ្នើ ហើយបញ្ចូលជាស្តុកដំបូង ជាមួយថ្លៃដើមនៃទំនិញនីមួយៗ។ ថ្នាំ និងអាហារ៖ បន្ថែមលេខឡូ និងថ្ងៃផុតកំណត់។',
        },
      },
      {
        title: { en: "3. Check today's rate", km: '3. ពិនិត្យអត្រាថ្ងៃនេះ' },
        text: {
          en: 'Settings › Exchange rate. Update it whenever the market rate moves; every sale keeps the rate it used.',
          km: 'ការកំណត់ › អត្រាប្តូរប្រាក់។ ធ្វើបច្ចុប្បន្នភាពវារាល់ពេលអត្រាទីផ្សារប្រែប្រួល ហើយការលក់នីមួយៗរក្សាអត្រាដែលវាបានប្រើ។',
        },
      },
      {
        title: { en: '4. Make a sale', km: '4. លក់ម្ដង' },
        text: {
          en: 'Open the POS, scan an item, press Pay, then "=" for the exact dollars, and Complete sale. The receipt prints in Khmer and English.',
          km: 'បើក POS ស្កេនទំនិញ ចុច បង់ប្រាក់ បន្ទាប់មក "=" សម្រាប់ចំនួនដុល្លារគត់ ហើយ បញ្ចប់ការលក់។ បង្កាន់ដៃបោះពុម្ពជាភាសាខ្មែរ និងអង់គ្លេស។',
        },
      },
      {
        title: { en: '5. Invite your team', km: '5. អញ្ជើញក្រុមការងារ' },
        text: {
          en: 'Settings › Users and roles › Invite someone. Choose their role and branch, then send the link on Telegram or show the QR code.',
          km: 'ការកំណត់ › អ្នកប្រើ និងតួនាទី › អញ្ជើញ។ ជ្រើសរើសតួនាទី និងសាខារបស់ពួកគេ រួចផ្ញើតំណតាម Telegram ឬបង្ហាញកូដ QR។',
        },
      },
    ],
    tips: [
      {
        en: 'Connect Telegram on day one: you get a summary of yesterday every morning at 7:00, even when you are not in the shop.',
        km: 'ភ្ជាប់ Telegram នៅថ្ងៃដំបូង៖ អ្នកនឹងទទួលបានសង្ខេបថ្ងៃម្សិលមិញរៀងរាល់ព្រឹកម៉ោង 7:00 ទោះបីអ្នកមិននៅហាងក៏ដោយ។',
      },
    ],
    related: ['add-products', 'import-excel', 'pos-sale', 'invite-staff', 'telegram'],
    keywords: { en: 'quick start begin checklist', km: 'ចាប់ផ្ដើមរហ័ស' },
  },
  {
    slug: 'find-your-way',
    topic: 'start',
    roles: ['OWNER', 'MANAGER', 'CASHIER', 'STOCK_KEEPER'],
    title: { en: 'Find your way around the app', km: 'ស្គាល់កម្មវិធី' },
    summary: {
      en: 'The side menu, the business and branch at the top, alerts, language and dark mode.',
      km: 'ម៉ឺនុយចំហៀង អាជីវកម្ម និងសាខានៅខាងលើ ការជូនដំណឹង ភាសា និងរបៀបងងឹត។',
    },
    steps: [
      {
        title: { en: 'The side menu', km: 'ម៉ឺនុយចំហៀង' },
        text: {
          en: 'Dashboard, POS, Customers, Suppliers, Inventory, Products, Reports and Settings. You only see what your role allows. On a phone, open it with the ☰ button.',
          km: 'ផ្ទាំងគ្រប់គ្រង POS អតិថិជន អ្នកផ្គត់ផ្គង់ ស្តុក ផលិតផល របាយការណ៍ និងការកំណត់។ អ្នកឃើញតែអ្វីដែលតួនាទីរបស់អ្នកអនុញ្ញាត។ នៅលើទូរស័ព្ទ បើកវាដោយប៊ូតុង ☰។',
        },
      },
      {
        title: { en: 'Business and branch', km: 'អាជីវកម្ម និងសាខា' },
        text: {
          en: 'At the top left: the business you work in, and the branch. Owners and Managers can pick "All branches" to see everything together; selling and receiving always happen in one branch.',
          km: 'នៅខាងលើឆ្វេង៖ អាជីវកម្មដែលអ្នកកំពុងធ្វើការ និងសាខា។ ម្ចាស់ និងអ្នកគ្រប់គ្រងអាចជ្រើសរើស "គ្រប់សាខា" ដើម្បីមើលទាំងអស់រួមគ្នា ប៉ុន្តែការលក់ និងការទទួលទំនិញតែងតែធ្វើក្នុងសាខាតែមួយ។',
        },
      },
      {
        title: { en: 'Alerts', km: 'ការជូនដំណឹង' },
        text: {
          en: 'The bell shows what needs you: low stock, items near expiry, late transfers, and things waiting for your approval.',
          km: 'កណ្ដឹងបង្ហាញអ្វីដែលត្រូវការអ្នក៖ ស្តុកទាប ទំនិញជិតផុតកំណត់ ការផ្ទេរយឺត និងអ្វីៗដែលកំពុងរង់ចាំការអនុម័តរបស់អ្នក។',
        },
      },
      {
        title: { en: 'Your menu', km: 'ម៉ឺនុយរបស់អ្នក' },
        text: {
          en: 'Your initial at the top right: My account, language (ខ្មែរ / English), light or dark mode, the Help Center, and Log out.',
          km: 'អក្សរដំបូងនៃឈ្មោះអ្នកនៅខាងលើស្ដាំ៖ គណនីរបស់ខ្ញុំ ភាសា (ខ្មែរ / English) របៀបភ្លឺ ឬងងឹត មជ្ឈមណ្ឌលជំនួយ និងចាកចេញ។',
        },
      },
    ],
    related: ['several-businesses', 'roles', 'dashboard-and-alerts'],
    keywords: { en: 'menu navigation branch dark mode language', km: 'ម៉ឺនុយ សាខា ភាសា' },
  },
  {
    slug: 'several-businesses',
    topic: 'start',
    roles: ['OWNER'],
    title: { en: 'Run several businesses', km: 'គ្រប់គ្រងអាជីវកម្មច្រើន' },
    summary: {
      en: 'One login for all your shops. Each business has its own data, team and plan; switching takes two clicks.',
      km: 'ការចូលតែមួយសម្រាប់ហាងទាំងអស់របស់អ្នក។ អាជីវកម្មនីមួយៗមានទិន្នន័យ ក្រុមការងារ និងគម្រោងផ្ទាល់ខ្លួន ហើយការប្ដូរត្រូវការតែពីរចុច។',
    },
    where: { en: 'The business name at the top left', km: 'ឈ្មោះអាជីវកម្មនៅខាងលើឆ្វេង' },
    app: 'businesses',
    steps: [
      {
        title: { en: 'Switch business', km: 'ប្ដូរអាជីវកម្ម' },
        text: {
          en: 'Click the business name at the top left and pick another one. Nothing is mixed: products, stock and money stay in their own business.',
          km: 'ចុចឈ្មោះអាជីវកម្មនៅខាងលើឆ្វេង ហើយជ្រើសរើសមួយទៀត។ គ្មានអ្វីលាយឡំគ្នាទេ៖ ផលិតផល ស្តុក និងប្រាក់ នៅក្នុងអាជីវកម្មរៀងៗខ្លួន។',
        },
      },
      {
        title: { en: 'Add a business', km: 'បន្ថែមអាជីវកម្ម' },
        text: {
          en: 'On the Businesses page, press "New business". It gets its own free trial.',
          km: 'នៅទំព័រអាជីវកម្ម ចុច "អាជីវកម្មថ្មី"។ វាទទួលបានការសាកល្បងឥតគិតថ្លៃផ្ទាល់ខ្លួន។',
        },
      },
      {
        title: { en: 'Archive a business you closed', km: 'រក្សាទុកអាជីវកម្មដែលបានបិទក្នុងបណ្ណសារ' },
        text: {
          en: 'Settings › Business profile › Archive business. It disappears from the list and nobody can work in it, but its data stays. Restore it any time from the Businesses page.',
          km: 'ការកំណត់ › ព័ត៌មានអាជីវកម្ម › រក្សាទុកក្នុងបណ្ណសារ។ វាបាត់ពីបញ្ជី ហើយគ្មាននរណាអាចធ្វើការក្នុងវាបានទេ ប៉ុន្តែទិន្នន័យរបស់វានៅដដែល។ ស្ដារវាវិញបានគ្រប់ពេលពីទំព័រអាជីវកម្ម។',
        },
      },
    ],
    related: ['set-up-business', 'export-data', 'plans-and-billing'],
    keywords: { en: 'switch archive restore multiple shops', km: 'ប្ដូរ បណ្ណសារ ស្ដារ' },
  },

  // ---------------------------------------------------------------- POS and selling
  {
    slug: 'pos-sale',
    topic: 'selling',
    roles: ['CASHIER', 'MANAGER', 'OWNER'],
    title: { en: 'Make a sale at the POS', km: 'លក់នៅ POS' },
    summary: {
      en: 'Scan, pay, done. A normal cash sale takes four clicks, or three with a barcode scanner.',
      km: 'ស្កេន បង់ រួចរាល់។ ការលក់ដោយសាច់ប្រាក់ធម្មតាត្រូវការបួនចុច ឬបីចុចជាមួយម៉ាស៊ីនស្កេនបាកូដ។',
    },
    where: { en: 'POS', km: 'POS' },
    app: 'pos',
    flow: [
      { label: { en: 'Scan or tap', km: 'ស្កេន ឬចុច' } },
      { label: { en: 'Pay', km: 'បង់ប្រាក់' } },
      { label: { en: '"=" or cash given', km: '"=" ឬប្រាក់ដែលទទួល' } },
      { label: { en: 'Complete sale', km: 'បញ្ចប់ការលក់' } },
      { label: { en: 'Receipt', km: 'បង្កាន់ដៃ' } },
    ],
    steps: [
      {
        title: { en: 'Put items in the cart', km: 'ដាក់ទំនិញក្នុងកន្ត្រក' },
        text: {
          en: 'Scan the barcode, or type a few letters of the name in "Scan or search" and tap the product. Scan again or use + to sell more than one. A box barcode adds a whole box.',
          km: 'ស្កេនបាកូដ ឬវាយអក្សរពីរបីនៃឈ្មោះក្នុង "ស្កេន ឬស្វែងរក" ហើយចុចលើផលិតផល។ ស្កេនម្ដងទៀត ឬប្រើ + ដើម្បីលក់ច្រើនជាងមួយ។ បាកូដប្រអប់បន្ថែមមួយប្រអប់ទាំងមូល។',
        },
      },
      {
        title: { en: 'Press Pay', km: 'ចុច បង់ប្រាក់' },
        text: {
          en: 'The total shows in dollars and riel. F9 on the keyboard does the same.',
          km: 'តម្លៃសរុបបង្ហាញជាដុល្លារ និងរៀល។ គ្រាប់ចុច F9 ធ្វើដូចគ្នា។',
        },
      },
      {
        title: { en: 'Enter what the customer gives', km: 'បញ្ចូលប្រាក់ដែលអតិថិជនឱ្យ' },
        text: {
          en: 'Press "=" for the exact amount in dollars, or the quick buttons (+1, +5, +10, +20, +៛1,000...) for the notes handed over. The change shows in riel.',
          km: 'ចុច "=" សម្រាប់ចំនួនគត់ជាដុល្លារ ឬប៊ូតុងរហ័ស (+1 +5 +10 +20 +៛1,000...) សម្រាប់ក្រដាសប្រាក់ដែលបានទទួល។ ប្រាក់អាប់បង្ហាញជារៀល។',
        },
      },
      {
        title: { en: 'Complete sale', km: 'បញ្ចប់ការលក់' },
        text: {
          en: 'The receipt appears. Print it, or press New sale to serve the next customer. The search box is ready for the next scan.',
          km: 'បង្កាន់ដៃលេចឡើង។ បោះពុម្ពវា ឬចុច លក់ថ្មី ដើម្បីបម្រើអតិថិជនបន្ទាប់។ ប្រអប់ស្វែងរករួចរាល់សម្រាប់ការស្កេនបន្ទាប់។',
        },
      },
    ],
    tips: [
      {
        en: 'F2 jumps back to the search box. A USB barcode scanner works like a keyboard: no setup needed.',
        km: 'F2 ត្រឡប់ទៅប្រអប់ស្វែងរកវិញ។ ម៉ាស៊ីនស្កេនបាកូដ USB ដំណើរការដូចក្ដារចុច៖ មិនចាំបាច់រៀបចំទេ។',
      },
      {
        en: 'A walk-in customer pays in full. To sell on credit, choose a customer first (see "Sell on credit").',
        km: 'អតិថិជនទូទៅបង់គ្រប់ចំនួន។ ដើម្បីលក់ជំពាក់ សូមជ្រើសរើសអតិថិជនជាមុនសិន (មើល "លក់ជំពាក់")។',
      },
    ],
    related: ['dollars-and-riel', 'khqr-and-bank', 'hold-sale', 'cash-shift'],
    keywords: { en: 'checkout cashier scan barcode receipt sell', km: 'គិតលុយ ស្កេន បាកូដ បង្កាន់ដៃ លក់' },
  },
  {
    slug: 'dollars-and-riel',
    topic: 'selling',
    roles: ['CASHIER', 'MANAGER', 'OWNER'],
    title: { en: 'Dollars, riel and change', km: 'ដុល្លារ រៀល និងប្រាក់អាប់' },
    summary: {
      en: 'Prices are in dollars; customers pay in dollars, riel or both, and get their change in riel.',
      km: 'តម្លៃគិតជាដុល្លារ អតិថិជនបង់ជាដុល្លារ រៀល ឬទាំងពីរ ហើយទទួលប្រាក់អាប់ជារៀល។',
    },
    where: { en: 'POS › Pay', km: 'POS › បង់ប្រាក់' },
    app: 'pos',
    steps: [
      {
        title: { en: 'The riel total is rounded', km: 'តម្លៃសរុបជារៀលត្រូវបានបង្គត់' },
        text: {
          en: "The dollar total is converted at today's rate and rounded to your riel step (Settings › Sales rules), because nobody pays ៛31. $16.09 at ៛4,100 is ៛65,969, shown as ៛66,000.",
          km: 'តម្លៃសរុបជាដុល្លារត្រូវបានប្ដូរតាមអត្រាថ្ងៃនេះ ហើយបង្គត់តាមកម្រិតរៀលរបស់អ្នក (ការកំណត់ › គោលការណ៍លក់) ព្រោះគ្មាននរណាបង់ ៛31 ទេ។ $16.09 តាមអត្រា ៛4,100 គឺ ៛65,969 បង្ហាញជា ៛66,000។',
        },
      },
      {
        title: { en: 'Either total pays in full', km: 'តម្លៃសរុបណាមួយក៏បង់គ្រប់ដែរ' },
        text: {
          en: 'Exactly $16.09 is enough, and so is ៛66,000. Mixed is fine too: $16 and ៛400.',
          km: '$16.09 គត់គឺគ្រប់គ្រាន់ ហើយ ៛66,000 ក៏ដូចគ្នា។ លាយគ្នាក៏បាន៖ $16 និង ៛400។',
        },
      },
      {
        title: { en: 'Change is in riel', km: 'ប្រាក់អាប់ជារៀល' },
        text: {
          en: 'Change is rounded down to the riel step, so it is never more than what is owed back. $20 for $16.09: ៛16,000 change.',
          km: 'ប្រាក់អាប់ត្រូវបានបង្គត់ចុះតាមកម្រិតរៀល ដូច្នេះវាមិនដែលលើសពីអ្វីដែលត្រូវអាប់ទេ។ $20 សម្រាប់ $16.09៖ ប្រាក់អាប់ ៛16,000។',
        },
      },
    ],
    tips: [
      {
        en: 'Each sale keeps the rate it used, so old receipts never change when you update the rate.',
        km: 'ការលក់នីមួយៗរក្សាអត្រាដែលវាបានប្រើ ដូច្នេះបង្កាន់ដៃចាស់មិនដែលប្រែប្រួលទេ នៅពេលអ្នកធ្វើបច្ចុប្បន្នភាពអត្រា។',
      },
    ],
    related: ['pos-sale', 'business-settings', 'cash-shift'],
    keywords: { en: 'exchange rate riel rounding change KHR USD', km: 'អត្រា រៀល ដុល្លារ ប្រាក់អាប់ បង្គត់' },
  },
  {
    slug: 'khqr-and-bank',
    topic: 'selling',
    roles: ['CASHIER', 'MANAGER', 'OWNER'],
    title: { en: 'KHQR and bank payments', km: 'ការបង់ប្រាក់តាម KHQR និងធនាគារ' },
    summary: {
      en: 'Show your shop QR code, let the customer pay with their bank app, and note the reference.',
      km: 'បង្ហាញកូដ QR របស់ហាង ឱ្យអតិថិជនបង់តាមកម្មវិធីធនាគាររបស់ពួកគេ ហើយកត់ត្រាលេខយោង។',
    },
    where: { en: 'POS › Pay › KHQR or Bank', km: 'POS › បង់ប្រាក់ › KHQR ឬ ធនាគារ' },
    app: 'pos',
    steps: [
      {
        title: { en: 'Turn the methods on', km: 'បើកវិធីបង់ប្រាក់' },
        text: {
          en: 'An Owner turns KHQR and Bank on in Settings › Sales rules, and uploads the shop KHQR image from the bank.',
          km: 'ម្ចាស់បើក KHQR និង ធនាគារ នៅក្នុង ការកំណត់ › គោលការណ៍លក់ ហើយផ្ទុករូបភាព KHQR របស់ហាងពីធនាគារ។',
        },
      },
      {
        title: { en: 'Take the payment', km: 'ទទួលការបង់ប្រាក់' },
        text: {
          en: 'In the payment window choose KHQR: the QR code shows for the customer to scan. Check the payment arrived in your bank app, type the reference number, and Complete sale.',
          km: 'នៅក្នុងផ្ទាំងបង់ប្រាក់ ជ្រើសរើស KHQR៖ កូដ QR បង្ហាញឱ្យអតិថិជនស្កេន។ ពិនិត្យថាប្រាក់បានចូលក្នុងកម្មវិធីធនាគាររបស់អ្នក វាយលេខយោង ហើយ បញ្ចប់ការលក់។',
        },
      },
    ],
    warning: {
      en: 'Only cash can be more than the total, because change is given in cash. KHQR and bank payments are for the exact amount.',
      km: 'មានតែសាច់ប្រាក់ទេដែលអាចលើសពីតម្លៃសរុប ព្រោះប្រាក់អាប់ផ្ដល់ជាសាច់ប្រាក់។ ការបង់តាម KHQR និងធនាគារគឺចំនួនគត់។',
    },
    related: ['pos-sale', 'dollars-and-riel', 'business-settings'],
    keywords: { en: 'QR ABA bank transfer card', km: 'QR ធនាគារ ផ្ទេរប្រាក់' },
  },
  {
    slug: 'hold-sale',
    topic: 'selling',
    roles: ['CASHIER', 'MANAGER', 'OWNER'],
    title: { en: 'Put a sale aside', km: 'ផ្អាកការលក់' },
    summary: {
      en: 'A customer forgot something? Hold the cart, serve the next person, and finish the sale later.',
      km: 'អតិថិជនភ្លេចអ្វីមួយ? ផ្អាកកន្ត្រក បម្រើអ្នកបន្ទាប់ ហើយបញ្ចប់ការលក់ពេលក្រោយ។',
    },
    where: { en: 'POS › Hold sale', km: 'POS › ផ្អាកការលក់' },
    app: 'pos',
    steps: [
      {
        title: { en: 'Hold it', km: 'ផ្អាកវា' },
        text: {
          en: 'Press the pause button at the top of the cart. The cart empties and the sale is kept on this device.',
          km: 'ចុចប៊ូតុងផ្អាកនៅខាងលើកន្ត្រក។ កន្ត្រកទទេ ហើយការលក់ត្រូវបានរក្សាទុកលើឧបករណ៍នេះ។',
        },
      },
      {
        title: { en: 'Resume it', km: 'បន្តវា' },
        text: {
          en: 'Press "Held" and pick the sale. If the cart on screen has items, it is held in its place.',
          km: 'ចុច "បានផ្អាក" ហើយជ្រើសរើសការលក់។ បើកន្ត្រកលើអេក្រង់មានទំនិញ វានឹងត្រូវផ្អាកជំនួសវិញ។',
        },
      },
    ],
    tips: [
      {
        en: 'Held sales do not take stock until you complete them, and they stay on the device where they were held.',
        km: 'ការលក់ដែលបានផ្អាកមិនទាន់កាត់ស្តុកទេ រហូតដល់អ្នកបញ្ចប់វា ហើយវានៅលើឧបករណ៍ដែលបានផ្អាក។',
      },
    ],
    related: ['pos-sale'],
    keywords: { en: 'park hold pause cart later', km: 'ផ្អាក កន្ត្រក' },
  },
  {
    slug: 'cash-shift',
    topic: 'selling',
    roles: ['CASHIER', 'MANAGER', 'OWNER'],
    title: { en: 'Open and close a cash shift', km: 'បើក និងបិទវេនគិតលុយ' },
    summary: {
      en: 'Count the drawer at the start and end of the day; the app tells you if cash is missing or over, in dollars and riel.',
      km: 'រាប់ថតប្រាក់នៅដើម និងចុងថ្ងៃ កម្មវិធីប្រាប់អ្នកថាសាច់ប្រាក់ខ្វះ ឬលើស ជាដុល្លារ និងរៀល។',
    },
    where: { en: 'POS › Open shift', km: 'POS › បើកវេន' },
    app: 'pos',
    flow: [
      { label: { en: 'Open shift', km: 'បើកវេន' }, note: { en: 'cash in the drawer', km: 'ប្រាក់ក្នុងថត' } },
      { label: { en: 'Sell', km: 'លក់' } },
      { label: { en: 'Close shift', km: 'បិទវេន' }, note: { en: 'count the drawer', km: 'រាប់ថតប្រាក់' } },
      { label: { en: 'Over or short', km: 'លើស ឬខ្វះ' } },
    ],
    steps: [
      {
        title: { en: 'Open the shift', km: 'បើកវេន' },
        text: {
          en: 'Press "Open shift" in the POS and enter the cash already in the drawer, dollars and riel apart.',
          km: 'ចុច "បើកវេន" នៅក្នុង POS ហើយបញ្ចូលសាច់ប្រាក់ដែលមានក្នុងថតរួចហើយ ដុល្លារ និងរៀលដាច់ដោយឡែក។',
        },
      },
      {
        title: { en: 'Sell as usual', km: 'លក់ដូចធម្មតា' },
        text: {
          en: 'Every cash payment and change given is counted in your shift.',
          km: 'ការបង់ជាសាច់ប្រាក់ និងប្រាក់អាប់ទាំងអស់ត្រូវបានគិតក្នុងវេនរបស់អ្នក។',
        },
      },
      {
        title: { en: 'Close it', km: 'បិទវា' },
        text: {
          en: 'At the end, press "Close shift" and count the drawer. The app compares it with what should be there and shows the difference in each currency.',
          km: 'នៅចុងវេន ចុច "បិទវេន" ហើយរាប់ថតប្រាក់។ កម្មវិធីប្រៀបធៀបវាជាមួយអ្វីដែលគួរមាន ហើយបង្ហាញភាពខុសគ្នាតាមរូបិយប័ណ្ណនីមួយៗ។',
        },
      },
    ],
    tips: [
      {
        en: 'Owners and Managers see every shift in Customers › Cash shifts, and get a Telegram alert when a shift closes short.',
        km: 'ម្ចាស់ និងអ្នកគ្រប់គ្រងឃើញវេនទាំងអស់នៅក្នុង អតិថិជន › វេនគិតលុយ ហើយទទួលការជូនដំណឹងតាម Telegram នៅពេលវេនបិទដោយខ្វះប្រាក់។',
      },
    ],
    related: ['pos-sale', 'pin-switch', 'reports'],
    keywords: { en: 'drawer till shift close open count cash short over', km: 'វេន ថតប្រាក់ រាប់ ខ្វះ លើស' },
  },
  {
    slug: 'pin-switch',
    topic: 'selling',
    roles: ['CASHIER', 'MANAGER', 'OWNER'],
    title: { en: 'Switch cashier with a PIN', km: 'ប្ដូរអ្នកគិតលុយដោយ PIN' },
    summary: {
      en: 'Two cashiers, one tablet: hand over the POS in seconds without logging out.',
      km: 'អ្នកគិតលុយពីរនាក់ ថេប្លេតមួយ៖ ប្រគល់ POS ក្នុងរយៈពេលប៉ុន្មានវិនាទី ដោយមិនចាំបាច់ចាកចេញ។',
    },
    where: { en: 'POS › Switch', km: 'POS › ប្ដូរ' },
    app: 'pos',
    steps: [
      {
        title: { en: 'Each person sets a PIN', km: 'ម្នាក់ៗកំណត់ PIN' },
        text: {
          en: 'In My account › POS PIN, choose 4 to 6 digits. Your password is asked to set it.',
          km: 'នៅក្នុង គណនីរបស់ខ្ញុំ › PIN សម្រាប់ POS ជ្រើសរើស 4 ដល់ 6 ខ្ទង់។ ត្រូវការពាក្យសម្ងាត់របស់អ្នកដើម្បីកំណត់វា។',
        },
      },
      {
        title: { en: 'Switch', km: 'ប្ដូរ' },
        text: {
          en: 'In the POS press the people button, choose who takes over and type their PIN. Their sales and shift are theirs from then on.',
          km: 'នៅក្នុង POS ចុចប៊ូតុងរូបមនុស្ស ជ្រើសរើសអ្នកដែលបន្តវេន ហើយវាយ PIN របស់ពួកគេ។ ការលក់ និងវេនជារបស់ពួកគេចាប់ពីពេលនោះ។',
        },
      },
    ],
    warning: {
      en: 'After 5 wrong PINs, that PIN is locked until its owner logs in with their password.',
      km: 'បន្ទាប់ពីវាយ PIN ខុស 5 ដង PIN នោះត្រូវបានចាក់សោ រហូតដល់ម្ចាស់របស់វាចូលដោយពាក្យសម្ងាត់។',
    },
    related: ['cash-shift', 'account-security'],
    keywords: { en: 'PIN switch user handover shared tablet', km: 'PIN ប្ដូរ អ្នកគិតលុយ' },
  },
  {
    slug: 'void-sale',
    topic: 'selling',
    roles: ['MANAGER', 'OWNER'],
    title: { en: 'Void a sale', km: 'លុបចោលការលក់' },
    summary: {
      en: 'A sale was rung up by mistake: void it, and the stock and money go back.',
      km: 'ការលក់ត្រូវបានធ្វើខុស៖ លុបចោលវា ហើយស្តុក និងប្រាក់ត្រឡប់វិញ។',
    },
    where: { en: 'Customers › Transactions › Sales receipts', km: 'អតិថិជន › ប្រតិបត្តិការ › បង្កាន់ដៃលក់' },
    app: 'customers/transactions',
    steps: [
      {
        title: { en: 'Open the receipt', km: 'បើកបង្កាន់ដៃ' },
        text: {
          en: 'Find it by number, date or customer and open it.',
          km: 'ស្វែងរកវាតាមលេខ កាលបរិច្ឆេទ ឬអតិថិជន ហើយបើកវា។',
        },
      },
      {
        title: { en: 'Void sale', km: 'លុបចោលការលក់' },
        text: {
          en: 'Press "Void sale" and say why. The items go back into stock, the payment leaves the cash shift, and Owners get a Telegram alert.',
          km: 'ចុច "លុបចោលការលក់" ហើយប្រាប់មូលហេតុ។ ទំនិញត្រឡប់ចូលស្តុកវិញ ការបង់ប្រាក់ចេញពីវេនគិតលុយ ហើយម្ចាស់ទទួលការជូនដំណឹងតាម Telegram។',
        },
      },
    ],
    tips: [
      {
        en: 'Cashiers cannot void. When a customer brings something back days later, make a sales return instead.',
        km: 'អ្នកគិតលុយមិនអាចលុបចោលបានទេ។ នៅពេលអតិថិជននាំទំនិញមកប្រគល់វិញក្រោយពីប៉ុន្មានថ្ងៃ សូមធ្វើការប្រគល់ត្រឡប់ជំនួសវិញ។',
      },
    ],
    related: ['returns-and-credit-notes', 'roles', 'telegram'],
    keywords: { en: 'void cancel mistake refund delete sale', km: 'លុបចោល កំហុស' },
  },
];
