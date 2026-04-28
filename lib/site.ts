export const navItems = [
  { href: '/', key: 'home' },
  { href: '/services', key: 'services' },
  { href: '/how-it-works', key: 'howItWorks' },
  { href: '/about', key: 'about' },
  { href: '/contact', key: 'contact' },
] as const;

export const services = {
  en: [
    {
      title: 'Supplier Discovery',
      summary:
        'Verified sourcing across Turkey and Africa with practical checks, negotiation support, and trade-fit matching.',
      points: ['Supplier vetting', 'Price comparison', 'Sample coordination'],
    },
    {
      title: 'Import & Export Management',
      summary:
        'Structured process handling for documents, coordination, and shipment readiness with fewer delays and fewer surprises.',
      points: ['Documentation', 'Compliance support', 'Process coordination'],
    },
    {
      title: 'Logistics Coordination',
      summary:
        'Remote and on-ground oversight for shipping, consolidation, and delivery planning across borders.',
      points: ['Freight coordination', 'Container planning', 'Status updates'],
    },
    {
      title: 'On-Ground Representation',
      summary:
        'Local presence for meetings, supplier visits, inspections, and operational follow-through when trust matters most.',
      points: ['Factory visits', 'Inspection support', 'Meeting attendance'],
    },
  ],
  tr: [
    {
      title: 'Tedarikçi Keşfi',
      summary:
        'Türkiye ve Afrika genelinde pratik kontroller, müzakere desteği ve ticari uygunluk eşleştirmesi ile doğrulanmış tedarik.',
      points: ['Tedarikçi incelemesi', 'Fiyat karşılaştırması', 'Numune koordinasyonu'],
    },
    {
      title: 'İthalat ve İhracat Yönetimi',
      summary:
        'Belgeler, koordinasyon ve sevkiyat hazırlığı için daha az gecikme ve daha az sürprizle yapılandırılmış süreç yönetimi.',
      points: ['Dokümantasyon', 'Uyumluluk desteği', 'Süreç koordinasyonu'],
    },
    {
      title: 'Lojistik Koordinasyonu',
      summary:
        'Sınır ötesi nakliye, konsolidasyon ve teslimat planlaması için uzaktan ve yerinde denetim.',
      points: ['Navlun koordinasyonu', 'Konteyner planlaması', 'Durum güncellemeleri'],
    },
    {
      title: 'Saha Temsilciliği',
      summary:
        'Güvenin en önemli olduğu anlarda toplantılar, tedarikçi ziyaretleri, denetimler ve operasyonel takip için yerel varlık.',
      points: ['Fabrika ziyaretleri', 'Denetim desteği', 'Toplantı katılımı'],
    },
  ],
};

export const processSteps = {
  en: [
    {
      number: '01',
      title: 'Discovery Call',
      text: 'We understand your target market, product needs, budget, and risk tolerance before any action starts.',
    },
    {
      number: '02',
      title: 'Source & Verify',
      text: 'We identify suppliers, validate credibility, and shortlist options that fit your trade goals.',
    },
    {
      number: '03',
      title: 'Manage Execution',
      text: 'We coordinate communication, documentation, logistics, and shipment progress step by step.',
    },
    {
      number: '04',
      title: 'Deliver with Clarity',
      text: 'You receive clear updates, practical support, and a smoother route from inquiry to delivery.',
    },
  ],
  tr: [
    {
      number: '01',
      title: 'Keşif Görüşmesi',
      text: 'Herhangi bir işlem başlamadan önce hedef pazarınızı, ürün ihtiyaçlarınızı, bütçenizi ve risk toleransınızı anlıyoruz.',
    },
    {
      number: '02',
      title: 'Kaynak ve Doğrulama',
      text: 'Tedarikçileri belirliyor, güvenilirliği onaylıyor ve ticaret hedeflerinize uygun seçenekleri listeliyoruz.',
    },
    {
      number: '03',
      title: 'Uygulamayı Yönetme',
      text: 'İletişimi, dokümantasyonu, lojistiği ve sevkiyat ilerlemesini adım adım koordine ediyoruz.',
    },
    {
      number: '04',
      title: 'Netlikle Teslimat',
      text: 'Sorgulamadan teslimata kadar net güncellemeler, pratik destek ve daha sorunsuz bir yol alırsınız.',
    },
  ],
};

export const trustPoints = {
  en: [
    'Cross-border focus between Turkey and Africa',
    'Designed for businesses that need reliable coordination',
    'Practical support both remotely and on-ground',
    'Built to reduce friction, confusion, and delays',
  ],
  tr: [
    'Türkiye ve Afrika arasında sınır ötesi odak',
    'Güvenilir koordinasyona ihtiyaç duyan işletmeler için tasarlandı',
    'Hem uzaktan hem de sahada pratik destek',
    'Sürtünmeyi, kafa karışıklığını ve gecikmeleri azaltmak için inşa edildi',
  ],
};

export const faqs = {
  en: [
    {
      q: 'Who is GTRUST for?',
      a: 'Businesses that want dependable trade support between Turkey and African markets, especially Ghana.',
    },
    {
      q: 'Do you work remotely?',
      a: 'Yes. GTRUST combines remote coordination with on-ground support where needed.',
    },
    {
      q: 'Can you help before a supplier is chosen?',
      a: 'Yes. Discovery and supplier verification are core parts of the service.',
    },
  ],
  tr: [
    {
      q: 'GTRUST kimler içindir?',
      a: 'Türkiye ve Afrika pazarları, özellikle Gana arasında güvenilir ticaret desteği isteyen işletmeler.',
    },
    {
      q: 'Uzaktan mı çalışıyorsunuz?',
      a: 'Evet. GTRUST, uzaktan koordinasyonu gerektiğinde saha desteğiyle birleştirir.',
    },
    {
      q: 'Tedarikçi seçilmeden önce yardımcı olabilir misiniz?',
      a: 'Evet. Keşif ve tedarikçi doğrulaması hizmetin temel parçalarıdır.',
    },
  ],
};
