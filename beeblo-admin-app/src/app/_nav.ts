import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Accueil',
    url: '/dashboard',
    icon: 'icon-home'
  },
  {
    title: true,
    name: 'Gestion utilisateur'
  },
  {
    name: 'Acheteur',
    url: '/acheteur',
    icon: 'icon-people',
  },
  {
    name: 'Utilisateur',
    url: '/users',
    icon: 'icon-user',
    children: [
      {
        name: 'Gestion utilisateur',
        url: '/users/manage',
        icon: 'icon-user-unfollow'
      },
      {
        name: 'Droit et privilège',
        url: '/users/grant',
        icon: 'icon-shield'
      }
    ]
  },
  {
    title: true,
    name: 'Gestion produit'
  },
  {
    name: 'Produits',
    url: '/produit',
    icon: 'icon-layers'
  },
  {
    name: 'Promotions',
    url: '/promotion',
    icon: 'icon-star',
    children: [
      {
        name: 'Listes',
        url: '/promotion/liste-promo',
        icon: 'icon-list'
      },
      {
        name: 'Consultation',
        url: '/promotion/consultation',
        icon: 'icon-screen-desktop'
      },
      {
        name: 'Promotion produit',
        url: '/promotion/produit',
        icon: 'icon-check'
      }
    ]
  },
  {
    name: 'Categorie',
    url: '/categorie',
    icon: 'icon-puzzle'
  },
  {
    name: 'Etat',
    url: '/etat-produit',
    icon: 'icon-pencil',
    children: [
      {
        name: 'Taille',
        url: '/etat-produit/taille',
        icon: 'icon-chart'
      },
      {
        name: 'Couleur',
        url: '/etat-produit/color',
        icon: 'icon-drop'
      }
    ]
  },
  {
    title: true,
    name: 'Gestion achat'
  },
  {
    name: 'Paniers',
    url: '/panier',
    icon: 'icon-basket-loaded'
  },
  {
    name: 'Commandes',
    url: '/commande',
    icon: 'icon-list'
  },
  {
    name: 'Livraisons',
    url: '/livraison',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Liste',
        url: '/livraison/liste',
        icon: 'icon-list'
      },
      {
        name: 'Livreur',
        url: '/livraison/livreur',
        icon: 'icon-user'
      }
    ]
  },
  {
    name: 'Transactions',
    url: '/transaction',
    icon: 'icon-credit-card'
  },
  {
    title: true,
    name: 'Parametrage'
  },
  {
    name: 'Aide & Faq',
    url: '/beeblo-aide',
    icon: 'icon-note'
  },
  {
    name: 'Information du site',
    url: '/beeblo-info',
    icon: 'icon-info'
  },
  {
    name: 'Configuration site',
    url: '/beeblo-config',
    icon: 'icon-settings',
    children: [
      {
        name: 'Gestion des menus',
        url: '/beeblo-config/menu',
        icon: 'icon-graph'
      },
      {
        name: 'Gestion des filtres',
        url: '/beeblo-config/filtre',
        icon: 'icon-pie-chart'
      }
    ]
  },
  {
    name: 'E-mail du beeblo',
    url: '/beeblo-email',
    icon: 'icon-envelope-open'
  },
  {
    name: 'Reseaux sociaux',
    url: '/beeblo-reseau',
    icon: 'icon-globe'
  },
];
