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
    name: 'Categorie',
    url: '/categorie',
    icon: 'icon-basket-loaded'
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
    icon: 'icon-cursor'
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
    name: 'Information du site',
    url: '/beeblo-info',
    icon: 'icon-info'
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
