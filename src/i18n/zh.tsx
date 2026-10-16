import { ReactNode } from 'react'
import { site } from '../data/site'
import type { Dict } from '.'
import { FORNITORE_MODULO, SEDE_LEGALE } from './it'

const inclusoStandard = ['燃油', '船长', '船上午餐', '饮用水和饮料', '潜水面镜和呼吸管', '遮阳篷', '保险']
const nonInclusoStandard = ['法维尼亚纳岛登岛税', '热那亚人洞穴（Grotta del Genovese）门票']

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const
const email = <a href={`mailto:${site.email}`}>{site.email}</a>

const zh: Dict = {
  meta: {
    home: {
      title: 'Bellavia Egadi Charter — 从特拉帕尼乘橡皮艇游法维尼亚纳岛和莱万佐岛',
      description: '从特拉帕尼出发，乘橡皮艇游览埃加迪群岛。法维尼亚纳岛、莱万佐岛，小团出游和私人包船，由本地船长驾驶。',
    },
    contatti: {
      title: '联系与预订 — Bellavia Egadi Charter',
      description: '预订埃加迪群岛橡皮艇出游：告诉我们日期和人数，我们会在一小时内回复。',
    },
    privacy: {
      title: '隐私与 Cookie 政策 — Bellavia Egadi Charter',
      description: '我们收集哪些个人数据、为何使用以及您享有哪些权利。',
    },
    notFound: { title: '页面未找到 — Bellavia Egadi Charter' },
    jsonLd: '从特拉帕尼出发，乘橡皮艇游览埃加迪群岛（法维尼亚纳岛和莱万佐岛）。',
  },

  nav: { escursioni: '出游项目', flotta: '船队', isole: '岛屿', noi: '关于我们', contatti: '联系我们' },

  header: {
    navPrincipale: '主导航',
    navMobile: '移动端导航',
    apriMenu: '打开菜单',
    chiudiMenu: '关闭菜单',
    lingua: '语言',
    prenotaOra: '立即预订',
  },

  comune: {
    scriviciWa: '通过 WhatsApp 联系我们',
    waInfo: '您好！我想了解出游项目的信息。',
    da: '起价',
    unita: { persona: '每人', gommone: '每艘船' },
    tourPrivato: '私人出游',
    tourCondiviso: '拼团出游',
  },

  hero: {
    titolo: '从特拉帕尼乘橡皮艇游法维尼亚纳岛和莱万佐岛',
    testo: '在埃加迪群岛的海湾间度过海上时光，船长土生土长于此。小团出游，10:00 从萨利纳格兰德出发。',
    alt: '俯瞰碧绿海面，船只和游艇停泊其间',
    vediEscursioni: '查看出游项目',
  },

  fiducia: [
    { titolo: '特拉帕尼本地船长', testo: '我们熟悉地图上找不到的海湾' },
    { titolo: '最多 10 人（含船长）', testo: '船上从不拥挤，下水从不排队' },
    {
      titolo: '船上提供午餐和饮料',
      testo: <>热菜来自 <a href="https://share.google/lfPQkfXaq0rj9qg4s" {...ext}>Messina Nicasio</a>，海鲜来自 <a href="https://share.google/g2ZvxWJKVQcyeblcO" {...ext}>Nereide</a>，并根据您告知的过敏原调整</>,
    },
    { titolo: '在萨利纳格兰德登船', testo: 'Nautica Cordaro 小码头，可在地图中查看位置', href: site.mappaLink },
  ],

  tourGrid: {
    titolo: '我们的海上一日',
    testo: '五种游览埃加迪群岛的方式。所有项目均从萨利纳格兰德（TP）出发，并在日落前返回，日落开胃酒除外。',
  },

  tourCard: {
    alt: (titolo) => `${titolo} — 埃加迪群岛橡皮艇出游`,
    max: (n) => `最多 ${n} 人`,
    richiediPreventivo: '索取报价',
    prenota: '预订',
  },

  chiSiamo: {
    titolo: '生于斯，长于斯',
    paragrafo1: '出游全程由一位热爱家乡的本地船长陪同。欢迎您登船是我们的荣幸：我们用心打理每个细节，为您带来难忘的一天。',
    paragrafo2: '我们在清晨出发，那时海面最平静、最清澈，在埃加迪群岛的海湾间享受放松与探索的一天。还等什么，快来预订吧！',
    firma: 'Marco Bellavia，船长',
    alt: '俯瞰我们的 Breva 橡皮艇在碧绿海面上航行',
    cta: '预订您的出游',
  },

  fleet: {
    titolo: '船队',
    testo: (modello) => `两艘 ${modello} 橡皮艇，型号相同，每个细节都精心保养。`,
    label: (modello) => `${modello} 橡皮艇照片`,
    descrizione: '两艘相同的橡皮艇，即使是大团体也可以分开或一起出行。船头浮筒高，驾驶舱宽敞：停船游泳十分方便，船上还配有卫生间，适合全天出游。',
    specifiche: [
      { valore: '2', label: '艘橡皮艇' },
      { valore: '8.5 米', label: '全长' },
      { valore: '3 米', label: '船宽' },
      { valore: '10', label: '人可乘坐（含船长）' },
      { valore: 'B 类', label: 'CE 认证' },
      { valore: '卫生间', label: '船上配备' },
    ],
    alt: [
      '带遮阳篷的 Breva 800 橡皮艇侧视图',
      '航行中的 Breva 800 橡皮艇',
      '日落时分航行中的 Breva 800 橡皮艇',
      '两艘航行中的 Breva 800 橡皮艇',
      '从船尾甲板进入船上卫生间',
      '带镜子和洗手盆的船上卫生间',
      '船上卫生间的洗手盆',
      '船上卫生间的马桶',
    ],
  },

  slideshow: {
    carosello: '轮播图',
    precedente: '上一张照片',
    successiva: '下一张照片',
    vai: (i, n) => `转到第 ${i} 张照片，共 ${n} 张`,
  },

  isole: {
    titolo: '我们去哪里',
    testo: '两座岛屿距特拉帕尼仅半小时航程，风貌却截然不同。',
    favignana: {
      descrizione: '形似蝴蝶的岛屿，凝灰岩采石场直落海中，六米深的海底清晰可见。',
      alt: '法维尼亚纳港口里拖上岸的白蓝相间渔船',
    },
    levanzo: {
      descrizione: '三十座白色房屋环绕小港，岛上只有一条路，还有保存史前壁画的热那亚人洞穴（Grotta del Genovese）。',
      alt: '莱万佐岛风光',
    },
  },

  passi: {
    titolo: '如何预订',
    testo: '三个步骤。',
    lista: [
      {
        numero: '第 1 步',
        titolo: '选择日期',
        testo: '浏览出游项目并告诉我们日期。如果不确定，请联系我们：我们会根据那几天的天气为您推荐合适的项目。',
      },
      {
        numero: '第 2 步',
        titolo: '通过 WhatsApp 确认',
        testo: '我们会在一小时内回复空位、时间和登船地点。费用在船上支付，可用现金或刷卡。',
      },
      {
        numero: '第 3 步',
        titolo: '登船处见',
        testo: '萨利纳格兰德小码头（Nautica Cordaro）。请提前十五分钟到达：我们准时出发，因为早上的海面更平静。',
      },
    ],
  },

  faq: {
    titolo: '常见问题',
    lista: [
      {
        domanda: '从哪里出发？',
        risposta: <>从萨利纳格兰德（TP）的 Nautica Cordaro 小码头出发，距特拉帕尼车程约 15 分钟，距比尔吉机场约 10 分钟，距马尔萨拉约 25 分钟。停车免费。<a href={site.mappaLink} {...ext}>在 Google 地图中打开位置</a>。</>,
      },
      {
        domanda: '价格包含什么？',
        risposta: '燃油、船长、船上午餐（热菜和海鲜，会根据您告知的过敏原调整）、饮用水和饮料、潜水面镜和呼吸管、遮阳篷和保险。不含法维尼亚纳岛登岛税和热那亚人洞穴门票。',
      },
      {
        domanda: '需要带什么？',
        risposta: '泳衣、毛巾、防晒霜、一顶帽子和一件返程时穿的薄外套。船上需赤脚，鞋子在登船时放进篮子里。',
      },
      {
        domanda: '天气不好怎么办？',
        risposta: '我们会在前一天晚上 20:00 前决定。如果无法出海，可改期或免费取消。海况超过 3 级时我们绝不出海。',
      },
      {
        domanda: '可以带小孩吗？',
        risposta: '可以，我们备有从 0 号起的救生衣。三岁以下的孩子请先联系我们：我们会一起商量日期、海况和路线。',
      },
      {
        domanda: '需要会游泳吗？',
        risposta: '不需要。停船游泳是自愿的，而且在浅水区；船上备有游泳圈和救生衣，方便想下水的人安全入水。',
      },
    ],
  },

  finale: {
    titolo: '选择您的出海日',
    titoloMeteo: {
      perfetto: '预计明天海面平静',
      buono: '明天海况良好，适合出海',
      sconsigliato: '明天风浪较大：以下是最佳日期',
    },
    testo: '通过 WhatsApp 告诉我们日期和人数。我们会在一小时内回复，周日也不例外。',
    alt: '从埃加迪群岛前的海上看日落',
    etichetta: { perfetto: '理想日子', buono: '良好', sconsigliato: '风浪大' },
    meteoTitolo: '未来 7 天海况',
    fonte: <>预报来自 <a href="https://open-meteo.com/" {...ext}>Open-Meteo</a>，每小时更新。显示最大浪高和风速（节）。</>,
    waPrenota: '您好！我想预订一次出游。',
    waGiorno: (giorno) => `您好！我想预订${giorno}的出游。`,
    ariaGiorno: (giorno, etichetta) => `通过 WhatsApp 预订${giorno}，${etichetta}`,
  },

  footer: {
    descrizione: '从特拉帕尼出发的埃加迪群岛橡皮艇出游及带船长租船服务。',
    escursioni: '出游项目',
    informazioni: '信息',
    doveSiamo: '我们的位置',
    orari: '4 月至 10 月，每天 8:00–20:00',
    info: { noi: '关于我们', flotta: '船队', faq: '常见问题', condizioni: '预订条款', privacy: '隐私与 Cookie' },
    crediti: '照片（已缩放和裁剪）来自 Wikimedia Commons：',
  },

  contatti: {
    titolo: '联系我们',
    testo: '告诉我们日期和人数：我们会在一小时内回复。',
    nome: '姓名',
    email: '电子邮箱',
    telefono: '电话',
    data: '期望日期',
    persone: '人数',
    escursione: '感兴趣的项目',
    scegli: '选择出游项目',
    nonSo: '还没决定',
    messaggio: '留言',
    notaMessaggio: '请不要在此填写过敏或不耐受信息：确认预订时我们会询问您。',
    consenso: (link: ReactNode) => <>我已阅读{link}。</>,
    linkPrivacy: '隐私政策',
    erroreConsenso: '请确认您已阅读隐私政策后再发送请求。',
    erroreInvio: '发送失败。请重试或通过 WhatsApp 联系我们。',
    ok: '请求已发送！我们会尽快回复您。',
    invio: '正在发送…',
    invia: '发送请求',
    oggetto: '出游咨询',
    recapiti: '联系方式',
    mappaTitolo: '萨利纳格兰德登船地点地图',
    mostraMappa: '显示地图',
    mappaCookie: '加载地图时，Google 可能会在您的设备上设置 Cookie。',
    dettagli: '详情',
    apriMaps: '在 Google 地图中打开',
  },

  tour: {
    fotoPrincipale: (titolo) => `${titolo}主图`,
    foto: (i, titolo) => `${titolo}第 ${i} 张照片`,
    fotoDi: (titolo) => `${titolo}照片`,
    itinerario: '行程',
    incluso: '包含',
    nonIncluso: '不包含',
    persone: (n) => `最多 ${n} 人（含船长）`,
    partenza: (orario) => `出发时间 ${orario}`,
    aScelta: '自选',
    chiama: '致电',
    altre: '其他出游项目',
    waPrenota: (titolo) => `您好！我想预订：${titolo}。`,
  },

  notFound: {
    titolo: '页面未找到',
    testo: '您打开的地址不存在或已被移动。',
    home: '返回首页',
  },

  tours: {
    'favignana-levanzo-giornata-intera': {
      titolo: '法维尼亚纳岛和莱万佐岛一日游',
      breve: '法维尼亚纳岛和莱万佐岛',
      descrizioneBreve: '经典路线：红湾（Cala Rossa）、海牛洞（Bue Marino）、停靠莱万佐岛，返程途经米诺拉湾（Cala Minnola）。',
      descrizioneLunga: '我们最完整的路线：一天之内畅游两座岛屿的精华。上午出发，从容享受各个海湾，停船游泳时间充足，船上午餐选用本地食材。',
      durata: '8 小时',
      incluso: inclusoStandard,
      nonIncluso: nonInclusoStandard,
      itinerario: [
        '10:00 从萨利纳格兰德出发',
        '法维尼亚纳岛红湾（Cala Rossa）— 停船游泳一小时',
        '海牛洞（Bue Marino）',
        '在莱万佐岛外海船上享用午餐',
        '莱万佐岛米诺拉湾（Cala Minnola）— 停船游泳',
        '18:00 前返回萨利纳格兰德',
      ],
    },
    'favignana-mezza-giornata': {
      titolo: '法维尼亚纳岛半日游',
      breve: '半日游',
      descrizioneBreve: '10:00 出发，午后不久返回。游览岛屿东侧，两次停船游泳。',
      descrizioneLunga: '为只有半天空闲的游客设计：探索法维尼亚纳岛东侧，那里有凝灰岩采石场和最清澈的海水，在两个不同地点停船游泳。',
      durata: '4 小时',
      incluso: inclusoStandard,
      nonIncluso: nonInclusoStandard,
      itinerario: [
        '10:00 从萨利纳格兰德出发',
        '蓝湾（Cala Azzurra）— 停船游泳',
        '布罗内海滩（Lido Burrone）— 停船游泳',
        '14:30 前返回萨利纳格兰德',
      ],
    },
    'aperitivo-al-tramonto': {
      titolo: '日落开胃酒',
      breve: '日落开胃酒',
      descrizioneBreve: "18:00 驶向马尔萨拉附近的圣特奥多罗（San Teodoro），在夕阳落向大岛（Isola Grande）时品一杯格里洛（Grillo）白葡萄酒。",
      descrizioneLunga: "傍晚前往马尔萨拉附近圣特奥多罗的短途航行：海水清澈见底，岸边是圣特奥多罗塔，眼前是斯塔尼奥内潟湖的大岛（Isola Grande）。手持一杯本地白葡萄酒，看夕阳落下。先下水游个泳，然后只有大海、光影和一杯好酒。",
      durata: '2.5 小时',
      incluso: ['燃油', '船长', '一杯本地葡萄酒', '保险'],
      nonIncluso: [],
      itinerario: [
        '18:00 从萨利纳格兰德出发',
        '驶向圣特奥多罗（马尔萨拉）',
        '在圣特奥多罗游泳',
        '日落时在船上享用开胃酒',
        '20:30 前返回萨利纳格兰德',
      ],
    },
    'charter-privato-egadi': {
      titolo: '埃加迪群岛私人包船',
      breve: '私人包船',
      descrizioneBreve: '整艘船专属于您，前一天晚上根据天气一起商定路线。',
      descrizioneLunga: '整艘船连同船员全天由您支配。前一天晚上我们会根据天气和海况与您一起商定路线，带您去任何想去的地方。',
      durata: '8 小时',
      incluso: inclusoStandard,
      nonIncluso: nonInclusoStandard,
      itinerario: [
        '出发时间自选',
        '法维尼亚纳岛与莱万佐岛之间的定制路线',
        '随时随地停船游泳',
        '傍晚返回',
      ],
    },
    'mezza-giornata-privata': {
      titolo: '私人半日游',
      breve: '私人半日游',
      descrizioneBreve: '为家庭和小团体安排的四小时海上时光，出发时间自选。',
      descrizioneLunga: '私人包船的短途版本：四小时海上时光，非常适合带小孩的家庭或只有半天时间的游客，出发时间可一起商定。',
      durata: '4 小时',
      incluso: inclusoStandard,
      nonIncluso: nonInclusoStandard,
      itinerario: [
        '出发时间自选',
        '根据目的地停船游泳一至两次',
        '约四小时后返回',
      ],
    },
  },

  privacy: {
    titolo: '隐私与 Cookie 政策',
    intro: '本页说明您访问本网站、联系我们或预订出游时我们收集哪些个人数据、为何使用这些数据以及您享有哪些权利。本声明依据欧盟第 2016/679 号条例（GDPR）第 13 条和第 14 条以及意大利第 196/2003 号法令（隐私法典）提供。本页为译文：如有歧义，以意大利语版本为准。',
    corpo: (
      <>
        <h2>1. 谁是数据控制者</h2>
        <p>
          {site.ragioneSociale}，{site.partitaIva}，注册地址：{SEDE_LEGALE}。<br />
          电子邮箱：{email} · 电话：<a href={site.telefonoHref}>{site.telefono}</a>
        </p>
        <p>我们未任命数据保护官（DPO），因为我们的业务无此强制要求。</p>

        <h2>2. 我们处理哪些数据以及原因</h2>

        <h3>信息咨询</h3>
        <p>
          您通过联系表单、电子邮件、电话或 WhatsApp 联系我们。我们处理您提供的数据：姓名、
          电子邮箱、电话、日期和人数、感兴趣的出游项目、留言内容。
        </p>
        <ul>
          <li><strong>目的：</strong>回复您的咨询并准备可能的预订。</li>
          <li><strong>法律依据：</strong>应您的要求采取的合同前措施（GDPR 第 6.1.b 条）。</li>
        </ul>

        <h3>预订与出游</h3>
        <p>
          如果您预订，我们会处理组织出游所需的数据：参与者姓名、
          联系方式、日期、所选服务、付款信息。
        </p>
        <ul>
          <li><strong>目的：</strong>提供所预订的服务，在出游前和出游期间与您沟通，处理因天气导致的改期。</li>
          <li><strong>法律依据：</strong>履行合同（GDPR 第 6.1.b 条）。</li>
        </ul>

        <h3>过敏与不耐受</h3>
        <p>
          为准备船上午餐，我们会询问是否有人有食物过敏或不耐受。这些属于健康
          数据，因此仅在获得您明确同意后处理，我们会在
          您确认预订时征求同意（GDPR 第 9.2.a 条）。这些数据仅用于准备合适的餐食。
          您可以选择不提供，或随时撤回同意：在这种情况下，我们无法保证提供合适的菜单。
        </p>
        <p>请不要在联系表单中填写：我们会在确认时收集。</p>

        <h3>法律义务</h3>
        <ul>
          <li><strong>目的：</strong>开具发票、记账及其他法律义务，包括航行安全方面的义务。</li>
          <li><strong>法律依据：</strong>法律义务（GDPR 第 6.1.c 条）。</li>
        </ul>

        <h3>浏览网站</h3>
        <p>
          我们的托管服务商会自动记录访问的部分技术数据，例如
          IP 地址、浏览器和所请求的页面。这些数据仅用于显示网站并防止滥用。
        </p>
        <ul>
          <li><strong>法律依据：</strong>维护网站安全与正常运行的正当利益（GDPR 第 6.1.f 条）。</li>
        </ul>

        <h2>3. 您是否必须向我们提供数据？</h2>
        <p>
          不必。但没有联系方式我们无法回复您，没有预订数据我们也无法
          组织出游。过敏和不耐受数据始终为自愿提供。我们不进行
          自动化决策，也不进行用户画像。
        </p>

        <h2>4. 我们向谁提供数据</h2>
        <p>数据不会被公开或出售。只有数据控制者、船长以及在必要范围内的以下各方知悉：</p>
        <ul>
          <li><strong>Cloudflare, Inc.</strong>：托管本网站。</li>
          <li><strong>Google</strong>：管理我们的电子邮箱（Gmail）。提供 Google 地图，仅在您要求时加载（见 Cookie 部分）。</li>
          <li><strong>{FORNITORE_MODULO}</strong>：接收联系表单的消息并转发给我们。</li>
          <li><strong>WhatsApp（Meta）</strong>：如果您选择通过 WhatsApp 联系我们，Meta 将作为独立控制者，按照其自身政策处理数据。</li>
          <li><strong>午餐供应商</strong>（Messina Nicasio、Nereide）：仅获知餐食数量以及可能的过敏或不耐受信息，不含姓名。</li>
          <li><strong>会计师</strong>：用于履行税务义务。</li>
          <li><strong>公共机关</strong>：仅在法律要求时。</li>
        </ul>
        <p>
          代表我们处理数据的服务商均被指定为数据处理者（GDPR 第 28 条）。
          部分服务商（如 Cloudflare 和 Google）可能会将数据传输到欧盟以外。在这种情况下，
          传输会采取 GDPR 规定的保障措施：加入欧美数据隐私框架（EU-U.S. Data Privacy
          Framework）或采用欧盟委员会批准的标准合同条款。
        </p>

        <h2>5. 我们保存数据多久</h2>
        <ul>
          <li>未转为预订的咨询：自最后一次联系起 12 个月。</li>
          <li>预订和付款数据：10 年，按税务法规要求（意大利民法典第 2220 条）。</li>
          <li>过敏和不耐受信息：出游结束后删除。</li>
          <li>浏览技术数据：仅在严格必要的期限内保存，依据托管服务商的政策。</li>
        </ul>

        <h2>6. 您的权利</h2>
        <p>您可以随时要求我们：</p>
        <ul>
          <li>告知是否处理您的数据并提供副本（访问权，第 15 条）；</li>
          <li>更正数据（更正权，第 16 条）或删除数据（第 17 条）；</li>
          <li>限制数据处理（第 18 条）；</li>
          <li>以机器可读格式获取数据（可携带权，第 20 条）；</li>
          <li>反对基于正当利益的处理（第 21 条）；</li>
          <li>撤回已给予的同意。撤回不影响撤回前处理的合法性。</li>
        </ul>
        <p>
          请写信至 {email}：我们会在一个月内答复。如果您认为数据处理不当，可以
          向意大利个人数据保护局（Garante per la protezione dei dati personali）投诉{' '}
          （<a href="https://www.garanteprivacy.it" {...ext}>garanteprivacy.it</a>）。
        </p>

        <h2 id="cookie">7. Cookie</h2>
        <p>
          本网站不使用用户画像 Cookie、统计或广告工具，也不设置
          自有 Cookie。字体直接从我们的服务器加载，不会
          向外部服务发出请求。
        </p>
        <p>
          唯一的第三方内容是“联系我们”页面上的 Google 地图。它不会
          自动加载：只有在您点击“显示地图”后才会出现。从那时起，Google 可能会按照其{' '}
          <a href="https://policies.google.com/privacy" {...ext}>隐私政策</a>
          设置自己的 Cookie。如果您不希望如此，可以使用“在 Google 地图中打开”链接，或干脆不加载地图。
        </p>
        <p>
          因此，根据意大利个人数据保护局 2021 年 6 月 10 日发布的 Cookie 指南，
          本网站不显示 Cookie 横幅：未经您的操作，不会设置任何非技术性 Cookie。
        </p>
        <p>
          指向 Instagram、TikTok 和 WhatsApp 的链接会打开外部服务，这些服务对
          数据和 Cookie 适用其自身规则。
        </p>

        <h2>8. 未成年人</h2>
        <p>
          预订必须由成年人进行。参加出游的未成年人的数据
          由其监护人提供给我们。
        </p>

        <h2>9. 变更</h2>
        <p>
          如果我们改变数据处理方式，将更新本页面。最后更新：2026 年 10 月 12 日。
        </p>
      </>
    ),
  },
}

export default zh
