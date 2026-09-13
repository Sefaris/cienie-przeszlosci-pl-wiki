module.exports = {
  wiki: [
    {type: 'doc', id: 'README', label: 'Strona główna', className: 'menu-home'},
    {type: 'category', label: 'Solucja', collapsible: false, items: [
      'chapters/1',
      {
        type: 'category',
        label: 'Rozdział II',
        link: {type: 'doc', id: 'chapters/2'},
        className: 'menu-chapter',
        collapsible: true,
        collapsed: true,
        items: [
          {type: 'link', label: 'Za Gomeza — zakończenie 1', href: '/solucja/rozdzial-ii/#za-gomeza-zakonczenie-1', className: 'menu-location', customProps: {chapterSection: true}},
          {type: 'link', label: 'Z dala od obozu — zakończenie 2', href: '/solucja/rozdzial-ii/#z-dala-od-obozu-zakonczenie-2', className: 'menu-location', customProps: {chapterSection: true}},
        ],
      },
    ]},
  ],
};
