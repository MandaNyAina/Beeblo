-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : sam. 06 fév. 2021 à 16:24
-- Version du serveur :  10.4.11-MariaDB
-- Version de PHP : 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `beeblo`
--

-- --------------------------------------------------------

--
-- Structure de la table `acheteur`
--

CREATE TABLE `acheteur` (
  `id_acheteur` int(11) NOT NULL,
  `nom_acheteur` varchar(255) NOT NULL,
  `prenom_acheteur` varchar(255) DEFAULT NULL,
  `email_acheteur` varchar(255) NOT NULL,
  `mot_de_passe_acheteur` varchar(255) NOT NULL,
  `numero_client_acheteur` varchar(255) NOT NULL,
  `adresse_acheteur` varchar(255) NOT NULL,
  `code_postal` varchar(255) NOT NULL,
  `ville_acheteur` varchar(255) NOT NULL,
  `pays_acheteur` varchar(255) NOT NULL,
  `etat_acheteur` tinyint(1) NOT NULL,
  `date_inscription_acheteur` datetime NOT NULL DEFAULT current_timestamp(),
  `id_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `acheteur`
--

INSERT INTO `acheteur` (`id_acheteur`, `nom_acheteur`, `prenom_acheteur`, `email_acheteur`, `mot_de_passe_acheteur`, `numero_client_acheteur`, `adresse_acheteur`, `code_postal`, `ville_acheteur`, `pays_acheteur`, `etat_acheteur`, `date_inscription_acheteur`, `id_status`) VALUES
(1, 'teste', 'teste', 'teste', 'teste', 'teste', 'teste', 'teste', 'teste', 'teste', 1, '2020-12-31 21:16:15', 2);

-- --------------------------------------------------------

--
-- Structure de la table `administrateur`
--

CREATE TABLE `administrateur` (
  `id_administrateur` int(11) NOT NULL,
  `nom_administrateur` varchar(255) NOT NULL,
  `prenom_administrateur` varchar(255) NOT NULL,
  `id_login` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `administrateur`
--

INSERT INTO `administrateur` (`id_administrateur`, `nom_administrateur`, `prenom_administrateur`, `id_login`) VALUES
(1, 'admin', 'admin', 'O0em6');

-- --------------------------------------------------------

--
-- Structure de la table `admin_menu`
--

CREATE TABLE `admin_menu` (
  `id_admin_menu` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `url` varchar(50) NOT NULL,
  `icon` varchar(50) NOT NULL,
  `submenu` int(11) DEFAULT NULL,
  `main_menu` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `admin_menu`
--

INSERT INTO `admin_menu` (`id_admin_menu`, `name`, `url`, `icon`, `submenu`, `main_menu`) VALUES
(1, 'Accueil', '/dashboard', 'icon-home', NULL, NULL),
(2, 'Acheteur', '/acheteur', 'icon-people', NULL, NULL),
(3, 'Utilisateur', '/users', 'icon-user', NULL, NULL),
(4, 'Gestion utilisateur', '/users/manage', 'icon-user-unfollow', 1, 3),
(5, 'Droit et privilège', '/users/grant', 'icon-shield', 1, 3),
(6, 'Produits', '/produit', 'icon-layers', NULL, NULL),
(7, 'Promotions', '/promotion', 'icon-star', NULL, NULL),
(8, 'Listes', '/promotion/liste-promo', 'icon-list', 1, 7),
(9, 'Consultation', '/promotion/consultation', 'icon-screen-desktop', 1, 7),
(10, 'Promotion produit', '/promotion/produit', 'icon-check', 1, 7),
(11, 'Categorie', '/categorie', 'icon-puzzle', NULL, NULL),
(12, 'Etat', '/etat-produit', 'icon-pencil', NULL, NULL),
(13, 'Taille', '/etat-produit/taille', 'icon-chart', 1, 12),
(14, 'Couleur', '/etat-produit/color', 'icon-drop', 1, 12),
(15, 'Paniers', '/panier', 'icon-basket-loaded', NULL, NULL),
(16, 'Commandes', '/commande', 'icon-list', NULL, NULL),
(17, 'Livraisons', '/livraison', 'icon-cursor', NULL, NULL),
(18, 'Transactions', '/transaction', 'icon-credit-card', NULL, NULL),
(19, 'Aide & Faq', '/beeblo-aid', 'icon-note', NULL, NULL),
(20, 'Information du site', '/beeblo-info', 'icon-info', NULL, NULL),
(21, 'Configuration site', '/beeblo-config', 'icon-settings', NULL, NULL),
(22, 'Gestion des menus', '/beeblo-config/menu', 'icon-graph', 1, 21),
(23, 'Gestion des filtres', '/beeblo-config/filtre', 'icon-pie-chart', 1, 21),
(24, 'E-mail du beeblo', '/beeblo-email', 'icon-envelope-open\'', NULL, NULL),
(25, 'Reseaux sociaux', '/beeblo-reseau', 'icon-globe', NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `aide`
--

CREATE TABLE `aide` (
  `id_aide` int(11) NOT NULL,
  `titre_aide` varchar(255) NOT NULL,
  `contenue_aide` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `beeblo`
--

CREATE TABLE `beeblo` (
  `id_beeblo` int(11) NOT NULL,
  `raison_social_beeblo` varchar(255) DEFAULT NULL,
  `contact_phone_beeblo` varchar(255) DEFAULT NULL,
  `contact_email_beeblo` varchar(255) DEFAULT NULL,
  `apropos_beeblo1` text DEFAULT NULL,
  `apropos_beeblo2` text DEFAULT NULL,
  `mention_legale_beeblo` text DEFAULT NULL,
  `condition_utilisation_beeblo1` text DEFAULT NULL,
  `condition_utilisation_beeblo2` text DEFAULT NULL,
  `condition_utilisation_beeblo3` text DEFAULT NULL,
  `condition_vente` text DEFAULT NULL,
  `home_beeblo1` text DEFAULT NULL,
  `home_beeblo2` text DEFAULT NULL,
  `home_beeblo3` text DEFAULT NULL,
  `home_title` text DEFAULT NULL,
  `siege_beeblo` varchar(255) DEFAULT NULL,
  `site_beeblo` varchar(255) DEFAULT NULL,
  `link_facebook` varchar(255) DEFAULT NULL,
  `link_tumblr` varchar(255) DEFAULT NULL,
  `link_tweet` varchar(255) DEFAULT NULL,
  `link_pinterest` varchar(255) DEFAULT NULL,
  `link_instagram` varchar(255) DEFAULT NULL,
  `smtp_host` varchar(50) DEFAULT NULL,
  `smtp_email` varchar(255) DEFAULT NULL,
  `smtp_password` varchar(255) DEFAULT NULL,
  `smtp_port` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `beeblo`
--

INSERT INTO `beeblo` (`id_beeblo`, `raison_social_beeblo`, `contact_phone_beeblo`, `contact_email_beeblo`, `apropos_beeblo1`, `apropos_beeblo2`, `mention_legale_beeblo`, `condition_utilisation_beeblo1`, `condition_utilisation_beeblo2`, `condition_utilisation_beeblo3`, `condition_vente`, `home_beeblo1`, `home_beeblo2`, `home_beeblo3`, `home_title`, `siege_beeblo`, `site_beeblo`, `link_facebook`, `link_tumblr`, `link_tweet`, `link_pinterest`, `link_instagram`, `smtp_host`, `smtp_email`, `smtp_password`, `smtp_port`) VALUES
(1, 'Beeblo', '0340908400', 'mandrianaivo@ingenosya.mg', '<p>teste</p>', '', '', '', '', NULL, '<p><strong><em>Bonjour</em></strong></p>', '<p>Acc block 1</p>', '', '', 'Lorem teste', 'teste', 'www.beeblo.fr', 'https://web.facebook.com/?_rdc=1&_rdr', '', '', 'https://web.pinterest.com/?_rdc=1&_rdr', '', 'smpt.gmail.com', 'andrianaivomanda00@gmail.com', 'manda', 485);

-- --------------------------------------------------------

--
-- Structure de la table `categorie`
--

CREATE TABLE `categorie` (
  `id_categorie` int(11) NOT NULL,
  `nom_categorie` varchar(255) NOT NULL,
  `id_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `categorie`
--

INSERT INTO `categorie` (`id_categorie`, `nom_categorie`, `id_status`) VALUES
(1, 'polo', 24),
(2, 't-shirt', 24);

-- --------------------------------------------------------

--
-- Structure de la table `commande`
--

CREATE TABLE `commande` (
  `id_commande` int(11) NOT NULL,
  `numero_commande` varchar(255) NOT NULL,
  `date_commande` datetime NOT NULL DEFAULT current_timestamp(),
  `id_panier` int(11) NOT NULL,
  `id_status` int(11) NOT NULL,
  `id_moyen_paiement` int(11) NOT NULL,
  `id_livraison` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `commande`
--

INSERT INTO `commande` (`id_commande`, `numero_commande`, `date_commande`, `id_panier`, `id_status`, `id_moyen_paiement`, `id_livraison`) VALUES
(1, 'tste', '2020-12-21 22:02:47', 1, 14, 1, 1);

--
-- Déclencheurs `commande`
--
DELIMITER $$
CREATE TRIGGER `after_add_commande` AFTER INSERT ON `commande` FOR EACH ROW BEGIN
	UPDATE panier SET termine = 1 WHERE id_panier = NEW.id_panier;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `after_update_commande` AFTER UPDATE ON `commande` FOR EACH ROW BEGIN
    DECLARE prix_commande FLOAT;
    DECLARE id_acheteur  varchar(255);
    DECLARE prix_tva FLOAT;
    DECLARE prix_ht FLOAT;
    DECLARE exist_facture INT;
    SET exist_facture = (SELECT COUNT(facture.id_commande) FROM facture WHERE facture.id_commande = NEW.id_commande);
    SET prix_commande = (SELECT wc.prix_commande FROM view_commande AS wc WHERE wc.id_commande = NEW.id_commande);
    SET id_acheteur = (SELECT wc.id_acheteur FROM view_commande AS wc WHERE wc.id_commande = NEW.id_commande);
    SET prix_tva = ((prix_commande * 20) / 100);
    SET prix_ht = (prix_commande - prix_tva);
	IF (NEW.id_status = 15 AND exist_facture = 0) THEN
        INSERT INTO facture SET
        facture.numero_facture = (SELECT CONCAT((SELECT UPPER(LEFT(MD5(RAND()), 5))) , (SELECT UNIX_TIMESTAMP(CURRENT_TIMESTAMP)))),
        facture.prix_ht = prix_ht,
        facture.prix_tva = prix_tva,
        facture.prix_ttc = prix_commande,
        facture.id_acheteur = id_acheteur,
        facture.id_commande = NEW.id_commande;
  ELSEIF NEW.id_status = 14 THEN
    	UPDATE livraison SET livraison.id_status = 11;
	END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Structure de la table `facture`
--

CREATE TABLE `facture` (
  `id_facture` int(11) NOT NULL,
  `numero_facture` varchar(255) NOT NULL,
  `prix_ht` float NOT NULL,
  `prix_tva` float NOT NULL,
  `prix_ttc` float NOT NULL,
  `date_creation` datetime NOT NULL DEFAULT current_timestamp(),
  `id_acheteur` int(11) NOT NULL,
  `id_commande` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `facture`
--

INSERT INTO `facture` (`id_facture`, `numero_facture`, `prix_ht`, `prix_tva`, `prix_ttc`, `date_creation`, `id_acheteur`, `id_commande`) VALUES
(2, '7E04D1608668674', 1200, 300, 1500, '2020-12-22 23:24:34', 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `filtre`
--

CREATE TABLE `filtre` (
  `id_filtre` int(11) NOT NULL,
  `nom_filtre` varchar(255) NOT NULL,
  `valeur_filtre` varchar(255) NOT NULL,
  `proprietaire_filtre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `groupe`
--

CREATE TABLE `groupe` (
  `id_groupe` int(11) NOT NULL,
  `nom_groupe` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `groupe`
--

INSERT INTO `groupe` (`id_groupe`, `nom_groupe`) VALUES
(1, 'ADMINISTRATEUR'),
(2, 'OPERATEUR');

-- --------------------------------------------------------

--
-- Structure de la table `groupe_user_grant_menu`
--

CREATE TABLE `groupe_user_grant_menu` (
  `id_groupe` int(11) NOT NULL,
  `id_menu_admin` int(11) NOT NULL,
  `update_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `groupe_user_grant_menu`
--

INSERT INTO `groupe_user_grant_menu` (`id_groupe`, `id_menu_admin`, `update_date`) VALUES
(1, 2, '2020-12-27 16:51:33'),
(1, 3, '2020-12-27 19:50:46');

-- --------------------------------------------------------

--
-- Structure de la table `liste_moyen_paiement`
--

CREATE TABLE `liste_moyen_paiement` (
  `id_moyen_paiement` int(11) NOT NULL,
  `id_acheteur` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `livraison`
--

CREATE TABLE `livraison` (
  `id_livraison` int(11) NOT NULL,
  `numero_livraison` varchar(255) NOT NULL,
  `observation_livraison` varchar(1000) NOT NULL,
  `id_acheteur` int(11) NOT NULL,
  `id_type_livraison` int(11) NOT NULL,
  `id_livreur` int(11) NOT NULL,
  `id_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `livraison`
--

INSERT INTO `livraison` (`id_livraison`, `numero_livraison`, `observation_livraison`, `id_acheteur`, `id_type_livraison`, `id_livreur`, `id_status`) VALUES
(1, 'asas', 'asa', 1, 1, 1, 11);

-- --------------------------------------------------------

--
-- Structure de la table `livraison_type`
--

CREATE TABLE `livraison_type` (
  `id_type_livraison` int(11) NOT NULL,
  `type_livraison` varchar(255) NOT NULL,
  `caracteristique_livraison` varchar(255) NOT NULL,
  `id_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `livraison_type`
--

INSERT INTO `livraison_type` (`id_type_livraison`, `type_livraison`, `caracteristique_livraison`, `id_status`) VALUES
(1, 'rapide', 'rapide comme une fleche', 22);

-- --------------------------------------------------------

--
-- Structure de la table `livreur`
--

CREATE TABLE `livreur` (
  `id_livreur` int(11) NOT NULL,
  `nom_livreur` varchar(255) NOT NULL,
  `description_livreur` varchar(255) DEFAULT NULL,
  `telephone_livreur` varchar(15) DEFAULT NULL,
  `email_livreur` varchar(255) DEFAULT NULL,
  `id_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `livreur`
--

INSERT INTO `livreur` (`id_livreur`, `nom_livreur`, `description_livreur`, `telephone_livreur`, `email_livreur`, `id_status`) VALUES
(1, 'Teste livreur', 'teste teste', NULL, NULL, 19);

-- --------------------------------------------------------

--
-- Structure de la table `menu`
--

CREATE TABLE `menu` (
  `id_menu` int(11) NOT NULL,
  `nom_menu` varchar(255) NOT NULL,
  `lien_menu` varchar(255) NOT NULL,
  `in_sidebar` int(11) NOT NULL,
  `id_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `menu`
--

INSERT INTO `menu` (`id_menu`, `nom_menu`, `lien_menu`, `in_sidebar`, `id_status`) VALUES
(1, 'Acceuil', '/home', 1, 16);

-- --------------------------------------------------------

--
-- Structure de la table `moyen_paiement`
--

CREATE TABLE `moyen_paiement` (
  `id_moyen_paiement` int(11) NOT NULL,
  `nom_moyen_paiement` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `moyen_paiement`
--

INSERT INTO `moyen_paiement` (`id_moyen_paiement`, `nom_moyen_paiement`) VALUES
(1, 'carte');

-- --------------------------------------------------------

--
-- Structure de la table `newsletter`
--

CREATE TABLE `newsletter` (
  `id_newsletter` int(11) NOT NULL,
  `email_newsletter` varchar(255) NOT NULL,
  `active_newsletter` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `panier`
--

CREATE TABLE `panier` (
  `id_panier` int(11) NOT NULL,
  `prix_total_panier` float NOT NULL,
  `id_acheteur` int(11) NOT NULL,
  `termine` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `panier`
--

INSERT INTO `panier` (`id_panier`, `prix_total_panier`, `id_acheteur`, `termine`) VALUES
(1, 1500, 1, 0);

-- --------------------------------------------------------

--
-- Structure de la table `panier_produit`
--

CREATE TABLE `panier_produit` (
  `id_panier` int(11) NOT NULL,
  `id_produit` int(11) NOT NULL,
  `quantite` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `panier_produit`
--

INSERT INTO `panier_produit` (`id_panier`, `id_produit`, `quantite`) VALUES
(1, 1, 5);

--
-- Déclencheurs `panier_produit`
--
DELIMITER $$
CREATE TRIGGER `after_add_panier` AFTER INSERT ON `panier_produit` FOR EACH ROW BEGIN
	DECLARE somme_prix FLOAT;
	DECLARE promotion FLOAT;
    SET somme_prix = (SELECT SUM(
        	(SELECT p.prix_produit FROM produit WHERE id_produit = p.id_produit) * (pd.quantite))
    	FROM panier_produit AS pd JOIN produit AS p ON p.id_produit = pd.id_produit 
    	WHERE pd.id_panier = NEW.id_panier
    );
    SET promotion = (SELECT SUM(
    	(SELECT p.prix_produit FROM produit WHERE id_produit = p.id_produit) * (pd.quantite) * (pr.reduction_promotion /100))
    	FROM panier_produit AS pd 
    	JOIN produit AS p ON p.id_produit = pd.id_produit
    	JOIN promotion_produit AS pp ON pp.id_produit = p.id_produit 
    	JOIN promotion AS pr ON pr.id_promotion = pp.id_promotion 
    	WHERE pr.date_expiration_promotion > NOW() AND pp.est_active > 0 AND pd.id_panier = NEW.id_panier);
    IF promotion > 0 THEN
    	SET somme_prix = somme_prix - promotion;
    END IF;
	UPDATE panier SET prix_total_panier = somme_prix WHERE id_panier = NEW.id_panier;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `after_delete_panier` AFTER DELETE ON `panier_produit` FOR EACH ROW BEGIN
	DECLARE somme_prix FLOAT;
	DECLARE promotion FLOAT;
    SET somme_prix = (SELECT SUM(
        	(SELECT p.prix_produit FROM produit WHERE id_produit = p.id_produit) * (pd.quantite))
    	FROM panier_produit AS pd JOIN produit AS p ON p.id_produit = pd.id_produit 
    	WHERE pd.id_panier = OLD.id_panier
    );
    SET promotion = (SELECT SUM(
    	(SELECT p.prix_produit FROM produit WHERE id_produit = p.id_produit) * (pd.quantite) * (pr.reduction_promotion /100))
    	FROM panier_produit AS pd 
    	JOIN produit AS p ON p.id_produit = pd.id_produit
    	JOIN promotion_produit AS pp ON pp.id_produit = p.id_produit 
    	JOIN promotion AS pr ON pr.id_promotion = pp.id_promotion 
    	WHERE pr.date_expiration_promotion > NOW() AND pp.est_active > 0 AND pd.id_panier = OLD.id_panier);
    IF promotion > 0 THEN
    	SET somme_prix = somme_prix - promotion;
    END IF;
	UPDATE panier SET prix_total_panier = somme_prix WHERE id_panier = OLD.id_panier;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `after_update_panier` AFTER UPDATE ON `panier_produit` FOR EACH ROW BEGIN
	DECLARE somme_prix FLOAT;
	DECLARE promotion FLOAT;
    SET somme_prix = (SELECT SUM(
        	(SELECT p.prix_produit FROM produit WHERE id_produit = p.id_produit) * (pd.quantite))
    	FROM panier_produit AS pd JOIN produit AS p ON p.id_produit = pd.id_produit 
    	WHERE pd.id_panier = NEW.id_panier
    );
    SET promotion = (SELECT SUM(
    	(SELECT p.prix_produit FROM produit WHERE id_produit = p.id_produit) * (pd.quantite) * (pr.reduction_promotion /100))
    	FROM panier_produit AS pd 
    	JOIN produit AS p ON p.id_produit = pd.id_produit
    	JOIN promotion_produit AS pp ON pp.id_produit = p.id_produit 
    	JOIN promotion AS pr ON pr.id_promotion = pp.id_promotion 
    	WHERE pr.date_expiration_promotion > NOW() AND pp.est_active > 0 AND pd.id_panier = NEW.id_panier);
    IF promotion > 0 THEN
    	SET somme_prix = somme_prix - promotion;
    END IF;
	UPDATE panier SET prix_total_panier = somme_prix WHERE id_panier = NEW.id_panier;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Structure de la table `produit`
--

CREATE TABLE `produit` (
  `id_produit` int(11) NOT NULL,
  `nom_produit` varchar(255) NOT NULL,
  `prix_produit` float NOT NULL,
  `taille` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `numero_produit` varchar(50) NOT NULL,
  `stock_produit` int(11) NOT NULL,
  `image_produit` varchar(255) NOT NULL,
  `description_produit` varchar(1000) NOT NULL,
  `date_creation_produit` datetime NOT NULL DEFAULT current_timestamp(),
  `id_status` int(11) NOT NULL,
  `id_categorie` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `produit`
--

INSERT INTO `produit` (`id_produit`, `nom_produit`, `prix_produit`, `taille`, `color`, `numero_produit`, `stock_produit`, `image_produit`, `description_produit`, `date_creation_produit`, `id_status`, `id_categorie`) VALUES
(1, 'produit 1', 400, '', '', 'a01a01', 10, 'teste', 'teste', '2020-12-19 21:14:49', 5, 1);

-- --------------------------------------------------------

--
-- Structure de la table `produit_commentaire`
--

CREATE TABLE `produit_commentaire` (
  `id_acheteur` int(11) NOT NULL,
  `id_produit` int(11) NOT NULL,
  `date_commentaire` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `promotion`
--

CREATE TABLE `promotion` (
  `id_promotion` int(11) NOT NULL,
  `reduction_promotion` float NOT NULL,
  `date_expiration_promotion` datetime NOT NULL,
  `type_promotion` varchar(50) NOT NULL,
  `code_promotion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `promotion`
--

INSERT INTO `promotion` (`id_promotion`, `reduction_promotion`, `date_expiration_promotion`, `type_promotion`, `code_promotion`) VALUES
(1, 25, '2020-12-22 19:11:41', 'produit', NULL),
(3, 20, '2020-12-22 23:19:13', 'produit', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `promotion_commande`
--

CREATE TABLE `promotion_commande` (
  `id_commande` int(11) NOT NULL,
  `id_promotion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `promotion_produit`
--

CREATE TABLE `promotion_produit` (
  `id_produit` int(11) NOT NULL,
  `id_promotion` int(11) NOT NULL,
  `est_active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `promotion_produit`
--

INSERT INTO `promotion_produit` (`id_produit`, `id_promotion`, `est_active`) VALUES
(1, 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `reclamation`
--

CREATE TABLE `reclamation` (
  `id_reclamation` int(11) NOT NULL,
  `contenue_reclamation` varchar(255) NOT NULL,
  `date_reclamation` date NOT NULL DEFAULT current_timestamp(),
  `id_acheteur` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `reclamation_commande`
--

CREATE TABLE `reclamation_commande` (
  `id_reclamation` int(11) NOT NULL,
  `id_commande` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `status`
--

CREATE TABLE `status` (
  `id_status` int(11) NOT NULL,
  `designation_status` varchar(255) NOT NULL,
  `proprietaire_status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `status`
--

INSERT INTO `status` (`id_status`, `designation_status`, `proprietaire_status`) VALUES
(1, 'Compte inactif', 'utilisateur'),
(2, 'Compte actif', 'utilisateur'),
(3, 'Compte suspendu', 'utilisateur'),
(4, 'Compte bloque', 'utilisateur'),
(5, 'En stock', 'produit'),
(6, 'En rupture de stock', 'produit'),
(7, 'Indisponible', 'produit'),
(8, 'Produit suspendu', 'produit'),
(9, 'En cours de livraison', 'livraison'),
(10, 'Livraison terminée', 'livraison'),
(11, 'Livraison annulée', 'livraison'),
(12, 'Livraison bloquée', 'livraison'),
(13, 'Commande en cours', 'commande'),
(14, 'Commande annulée', 'commande'),
(15, 'Commande payée', 'commande'),
(16, 'Menu activé', 'Menu'),
(17, 'Menu désactivé', 'Menu'),
(18, 'Menu en maintenance', 'Menu'),
(19, 'Livreur disponible', 'Livraison'),
(20, 'Livreur indisponible', 'Livraison'),
(21, 'Livreur désactivé ', 'Livraison'),
(22, 'Type de livraison activé', 'Livraison'),
(23, 'Type de livraison désactivé', 'Livraison'),
(24, 'Catégorie activée', 'Catégorie'),
(25, 'Catégorie desactivée', 'Catégorie');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `id_user` varchar(5) NOT NULL,
  `nom_utilisateur` varchar(255) NOT NULL,
  `mot_de_passe` varchar(255) NOT NULL,
  `created_date` datetime NOT NULL DEFAULT current_timestamp(),
  `id_status` int(11) NOT NULL,
  `id_groupe` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`id_user`, `nom_utilisateur`, `mot_de_passe`, `created_date`, `id_status`, `id_groupe`) VALUES
('O0em6', 'admin', '$2b$10$hzGAMVdebxwTHm77u8dQ3enRLEPi2QZwxHAhCTPvfmH/9mZLZaw3G', '2021-01-31 11:38:35', 2, 1);

-- --------------------------------------------------------

--
-- Doublure de structure pour la vue `view_acheteur`
-- (Voir ci-dessous la vue réelle)
--
CREATE TABLE `view_acheteur` (
`id_acheteur` int(11)
,`nom_acheteur` varchar(255)
,`prenom_acheteur` varchar(255)
,`email_acheteur` varchar(255)
,`numero_client_acheteur` varchar(255)
,`adresse_acheteur` varchar(255)
,`code_postal` varchar(255)
,`ville_acheteur` varchar(255)
,`pays_acheteur` varchar(255)
,`etat_acheteur` tinyint(1)
,`date_inscription_acheteur` datetime
,`id_status` int(11)
);

-- --------------------------------------------------------

--
-- Doublure de structure pour la vue `view_admin`
-- (Voir ci-dessous la vue réelle)
--
CREATE TABLE `view_admin` (
`id_administrateur` int(11)
,`nom_administrateur` varchar(255)
,`prenom_administrateur` varchar(255)
,`id_login` varchar(5)
,`nom_utilisateur` varchar(255)
,`designation_status` varchar(255)
,`id_groupe` int(11)
,`nom_groupe` varchar(255)
);

-- --------------------------------------------------------

--
-- Doublure de structure pour la vue `view_categorie`
-- (Voir ci-dessous la vue réelle)
--
CREATE TABLE `view_categorie` (
`id_categorie` int(11)
,`nom_categorie` varchar(255)
,`can_delete` int(1)
);

-- --------------------------------------------------------

--
-- Doublure de structure pour la vue `view_commande`
-- (Voir ci-dessous la vue réelle)
--
CREATE TABLE `view_commande` (
`id_commande` int(11)
,`numero_commande` varchar(255)
,`date_commande` datetime
,`id_panier` int(11)
,`id_acheteur` int(11)
,`id_status` int(11)
,`status` varchar(255)
,`moyen_paiement` varchar(255)
,`prix_commande` double
,`has_promo` int(1)
,`reduction_promotion` float
,`code_promotion` varchar(255)
);

-- --------------------------------------------------------

--
-- Doublure de structure pour la vue `view_commande_produit`
-- (Voir ci-dessous la vue réelle)
--
CREATE TABLE `view_commande_produit` (
`id_commande` int(11)
,`numero_commande` varchar(255)
,`prix_commande` double
,`id_produit` int(11)
,`nom_produit` varchar(255)
,`numero_produit` varchar(50)
,`prix_produit` float
,`quantite` int(11)
,`stock_produit` int(11)
,`categorie` varchar(255)
,`has_promo` int(1)
,`code_promotion` varchar(255)
);

-- --------------------------------------------------------

--
-- Doublure de structure pour la vue `view_dashboard`
-- (Voir ci-dessous la vue réelle)
--
CREATE TABLE `view_dashboard` (
`nombre_acheteur` bigint(21)
,`nombre_produit` bigint(21)
,`nombre_commande` bigint(21)
,`nombre_livraison` bigint(21)
);

-- --------------------------------------------------------

--
-- Doublure de structure pour la vue `view_facture`
-- (Voir ci-dessous la vue réelle)
--
CREATE TABLE `view_facture` (
`numero_facture` varchar(255)
,`prix_ht` float
,`prix_tva` float
,`prix_ttc` float
,`numero_client_acheteur` varchar(255)
,`id_acheteur` int(11)
,`nom_acheteur` varchar(255)
,`prenom_acheteur` varchar(255)
,`email_acheteur` varchar(255)
,`adresse_acheteur` varchar(255)
,`code_postal` varchar(255)
,`pays_acheteur` varchar(255)
,`id_commande` int(11)
,`numero_commande` varchar(255)
,`prix_commande` double
,`promotion_commande` int(1)
,`code_promotion` varchar(255)
,`id_produit` int(11)
,`nom_produit` varchar(255)
,`categorie` varchar(255)
,`prix_produit` float
,`quantite` int(11)
,`promotion_produit` float
);

-- --------------------------------------------------------

--
-- Doublure de structure pour la vue `view_groupe_grant`
-- (Voir ci-dessous la vue réelle)
--
CREATE TABLE `view_groupe_grant` (
`id_groupe` int(11)
,`id_menu_admin` int(11)
,`update_date` datetime
,`name` varchar(60)
,`url` varchar(50)
,`icon` varchar(50)
,`submenu` int(11)
,`main_menu` int(11)
);

-- --------------------------------------------------------

--
-- Doublure de structure pour la vue `view_livraison`
-- (Voir ci-dessous la vue réelle)
--
CREATE TABLE `view_livraison` (
`id_livraison` int(11)
,`numero_livraison` varchar(255)
,`observation_livraison` varchar(1000)
,`id_acheteur` int(11)
,`id_type_livraison` int(11)
,`id_livreur` int(11)
,`id_status` int(11)
,`type_livraison` varchar(255)
,`nom_livreur` varchar(255)
,`telephone_livreur` varchar(15)
,`email_livreur` varchar(255)
,`nom_acheteur` varchar(255)
,`prenom_acheteur` varchar(255)
,`numero_client_acheteur` varchar(255)
,`adresse_acheteur` varchar(255)
,`code_postal` varchar(255)
,`ville_acheteur` varchar(255)
,`pays_acheteur` varchar(255)
);

-- --------------------------------------------------------

--
-- Doublure de structure pour la vue `view_livraison_commande`
-- (Voir ci-dessous la vue réelle)
--
CREATE TABLE `view_livraison_commande` (
`id_livraison` int(11)
,`numero_livraison` varchar(255)
,`observation_livraison` varchar(1000)
,`id_acheteur` int(11)
,`id_type_livraison` int(11)
,`id_livreur` int(11)
,`id_status` int(11)
,`type_livraison` varchar(255)
,`nom_livreur` varchar(255)
,`telephone_livreur` varchar(15)
,`email_livreur` varchar(255)
,`nom_acheteur` varchar(255)
,`prenom_acheteur` varchar(255)
,`numero_client_acheteur` varchar(255)
,`adresse_acheteur` varchar(255)
,`code_postal` varchar(255)
,`ville_acheteur` varchar(255)
,`pays_acheteur` varchar(255)
,`numero_commande` varchar(255)
,`date_commande` datetime
,`status` varchar(255)
,`prix_commande` double
);

-- --------------------------------------------------------

--
-- Doublure de structure pour la vue `view_livreur`
-- (Voir ci-dessous la vue réelle)
--
CREATE TABLE `view_livreur` (
`id_livreur` int(11)
,`nom_livreur` varchar(255)
,`description_livreur` varchar(255)
,`telephone_livreur` varchar(15)
,`email_livreur` varchar(255)
,`id_status` int(11)
,`can_delete` int(1)
);

-- --------------------------------------------------------

--
-- Doublure de structure pour la vue `view_panier`
-- (Voir ci-dessous la vue réelle)
--
CREATE TABLE `view_panier` (
`id_panier` int(11)
,`prix_total_panier` float
,`id_acheteur` int(11)
,`termine` int(11)
,`id_produit` int(11)
,`nom_produit` varchar(255)
,`prix_produit` float
,`numero_produit` varchar(50)
,`stock_produit` int(11)
,`image_produit` varchar(255)
,`description_produit` varchar(1000)
,`date_creation_produit` datetime
,`id_status` int(11)
,`id_categorie` int(11)
);

-- --------------------------------------------------------

--
-- Doublure de structure pour la vue `view_produit`
-- (Voir ci-dessous la vue réelle)
--
CREATE TABLE `view_produit` (
`id_produit` int(11)
,`nom_produit` varchar(255)
,`prix_produit` float
,`numero_produit` varchar(50)
,`stock_produit` int(11)
,`image_produit` varchar(255)
,`description_produit` varchar(1000)
,`date_creation_produit` datetime
,`id_status` int(11)
,`id_categorie` int(11)
,`status` varchar(255)
,`categorie` varchar(255)
,`id_promotion` int(11)
,`reduction_promotion` float
,`prix_reduction` double
);

-- --------------------------------------------------------

--
-- Doublure de structure pour la vue `view_promotion`
-- (Voir ci-dessous la vue réelle)
--
CREATE TABLE `view_promotion` (
`id_promotion` int(11)
,`reduction_promotion` float
,`date_expiration_promotion` datetime
,`type_promotion` varchar(50)
,`code_promotion` varchar(255)
,`promo_for_produit` int(1)
,`promo_for_commande` int(1)
,`used` int(1)
);

-- --------------------------------------------------------

--
-- Doublure de structure pour la vue `view_promotion_produit`
-- (Voir ci-dessous la vue réelle)
--
CREATE TABLE `view_promotion_produit` (
`id_promotion` int(11)
,`reduction_promotion` float
,`date_expiration_promotion` datetime
,`type_promotion` varchar(50)
,`code_promotion` varchar(255)
,`id_produit` int(11)
,`nom_produit` varchar(255)
,`prix_produit` float
,`numero_produit` varchar(50)
,`stock_produit` int(11)
,`image_produit` varchar(255)
,`description_produit` varchar(1000)
,`date_creation_produit` datetime
,`id_status` int(11)
,`id_categorie` int(11)
,`est_active` tinyint(1)
);

-- --------------------------------------------------------

--
-- Doublure de structure pour la vue `view_type_livraison`
-- (Voir ci-dessous la vue réelle)
--
CREATE TABLE `view_type_livraison` (
`id_type_livraison` int(11)
,`type_livraison` varchar(255)
,`caracteristique_livraison` varchar(255)
,`id_status` int(11)
,`can_delete` int(1)
);

-- --------------------------------------------------------

--
-- Structure de la vue `view_acheteur`
--
DROP TABLE IF EXISTS `view_acheteur`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_acheteur`  AS  select `acheteur`.`id_acheteur` AS `id_acheteur`,`acheteur`.`nom_acheteur` AS `nom_acheteur`,`acheteur`.`prenom_acheteur` AS `prenom_acheteur`,`acheteur`.`email_acheteur` AS `email_acheteur`,`acheteur`.`numero_client_acheteur` AS `numero_client_acheteur`,`acheteur`.`adresse_acheteur` AS `adresse_acheteur`,`acheteur`.`code_postal` AS `code_postal`,`acheteur`.`ville_acheteur` AS `ville_acheteur`,`acheteur`.`pays_acheteur` AS `pays_acheteur`,`acheteur`.`etat_acheteur` AS `etat_acheteur`,`acheteur`.`date_inscription_acheteur` AS `date_inscription_acheteur`,`acheteur`.`id_status` AS `id_status` from `acheteur` ;

-- --------------------------------------------------------

--
-- Structure de la vue `view_admin`
--
DROP TABLE IF EXISTS `view_admin`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_admin`  AS  select `admin`.`id_administrateur` AS `id_administrateur`,`admin`.`nom_administrateur` AS `nom_administrateur`,`admin`.`prenom_administrateur` AS `prenom_administrateur`,`admin`.`id_login` AS `id_login`,`login`.`nom_utilisateur` AS `nom_utilisateur`,`status`.`designation_status` AS `designation_status`,`login`.`id_groupe` AS `id_groupe`,`groupe`.`nom_groupe` AS `nom_groupe` from (((`administrateur` `admin` join `utilisateur` `login` on(`login`.`id_user` = `admin`.`id_login`)) join `groupe` on(`groupe`.`id_groupe` = `login`.`id_groupe`)) join `status` on(`status`.`id_status` = `login`.`id_status`)) ;

-- --------------------------------------------------------

--
-- Structure de la vue `view_categorie`
--
DROP TABLE IF EXISTS `view_categorie`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_categorie`  AS  select `c`.`id_categorie` AS `id_categorie`,`c`.`nom_categorie` AS `nom_categorie`,case when (select count(0) from `produit` where `produit`.`id_categorie` = `c`.`id_categorie`) <> 0 then 0 else 1 end AS `can_delete` from `categorie` `c` ;

-- --------------------------------------------------------

--
-- Structure de la vue `view_commande`
--
DROP TABLE IF EXISTS `view_commande`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_commande`  AS  select `c`.`id_commande` AS `id_commande`,`c`.`numero_commande` AS `numero_commande`,`c`.`date_commande` AS `date_commande`,`p`.`id_panier` AS `id_panier`,`p`.`id_acheteur` AS `id_acheteur`,`c`.`id_status` AS `id_status`,`s`.`designation_status` AS `status`,`mp`.`nom_moyen_paiement` AS `moyen_paiement`,`p`.`prix_total_panier` - `p`.`prix_total_panier` * (case when `pr`.`id_promotion` is null then 0 else `pr`.`reduction_promotion` / 100 end) AS `prix_commande`,case when `pr`.`id_promotion` is null then 0 else 1 end AS `has_promo`,`pr`.`reduction_promotion` AS `reduction_promotion`,`pr`.`code_promotion` AS `code_promotion` from (((((`commande` `c` left join `promotion_commande` `pc` on(`pc`.`id_commande` = `c`.`id_commande`)) left join `promotion` `pr` on(`pr`.`id_promotion` = `pc`.`id_promotion`)) left join `panier` `p` on(`p`.`id_panier` = `c`.`id_panier`)) left join `status` `s` on(`s`.`id_status` = `c`.`id_status`)) left join `moyen_paiement` `mp` on(`mp`.`id_moyen_paiement` = `c`.`id_moyen_paiement`)) ;

-- --------------------------------------------------------

--
-- Structure de la vue `view_commande_produit`
--
DROP TABLE IF EXISTS `view_commande_produit`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_commande_produit`  AS  select `vc`.`id_commande` AS `id_commande`,`vc`.`numero_commande` AS `numero_commande`,`vc`.`prix_commande` AS `prix_commande`,`vp`.`id_produit` AS `id_produit`,`vp`.`nom_produit` AS `nom_produit`,`vp`.`numero_produit` AS `numero_produit`,`vp`.`prix_produit` AS `prix_produit`,`pp`.`quantite` AS `quantite`,`vp`.`stock_produit` AS `stock_produit`,`vp`.`categorie` AS `categorie`,`vc`.`has_promo` AS `has_promo`,`vc`.`code_promotion` AS `code_promotion` from ((`view_commande` `vc` left join `panier_produit` `pp` on(`pp`.`id_panier` = `vc`.`id_panier`)) left join `view_produit` `vp` on(`vp`.`id_produit` = `pp`.`id_produit`)) ;

-- --------------------------------------------------------

--
-- Structure de la vue `view_dashboard`
--
DROP TABLE IF EXISTS `view_dashboard`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_dashboard`  AS  select count(0) AS `nombre_acheteur`,(select count(0) from `produit`) AS `nombre_produit`,(select count(0) from `commande` `cmd` where `cmd`.`id_status` = 13) AS `nombre_commande`,(select count(0) from `livraison` `lv` where `lv`.`id_status` = 9) AS `nombre_livraison` from `acheteur` ;

-- --------------------------------------------------------

--
-- Structure de la vue `view_facture`
--
DROP TABLE IF EXISTS `view_facture`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_facture`  AS  select `f`.`numero_facture` AS `numero_facture`,`f`.`prix_ht` AS `prix_ht`,`f`.`prix_tva` AS `prix_tva`,`f`.`prix_ttc` AS `prix_ttc`,`ac`.`numero_client_acheteur` AS `numero_client_acheteur`,`ac`.`id_acheteur` AS `id_acheteur`,`ac`.`nom_acheteur` AS `nom_acheteur`,`ac`.`prenom_acheteur` AS `prenom_acheteur`,`ac`.`email_acheteur` AS `email_acheteur`,`ac`.`adresse_acheteur` AS `adresse_acheteur`,`ac`.`code_postal` AS `code_postal`,`ac`.`pays_acheteur` AS `pays_acheteur`,`vcp`.`id_commande` AS `id_commande`,`vcp`.`numero_commande` AS `numero_commande`,`vcp`.`prix_commande` AS `prix_commande`,`vcp`.`has_promo` AS `promotion_commande`,`vcp`.`code_promotion` AS `code_promotion`,`vcp`.`id_produit` AS `id_produit`,`vcp`.`nom_produit` AS `nom_produit`,`vcp`.`categorie` AS `categorie`,`vcp`.`prix_produit` AS `prix_produit`,`vcp`.`quantite` AS `quantite`,`wp`.`reduction_promotion` AS `promotion_produit` from (((`facture` `f` left join `acheteur` `ac` on(`ac`.`id_acheteur` = `f`.`id_acheteur`)) left join `view_commande_produit` `vcp` on(`vcp`.`id_commande` = `f`.`id_commande`)) left join `view_produit` `wp` on(`wp`.`id_produit` = `vcp`.`id_produit`)) ;

-- --------------------------------------------------------

--
-- Structure de la vue `view_groupe_grant`
--
DROP TABLE IF EXISTS `view_groupe_grant`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_groupe_grant`  AS  select `guig`.`id_groupe` AS `id_groupe`,`guig`.`id_menu_admin` AS `id_menu_admin`,`guig`.`update_date` AS `update_date`,`am`.`name` AS `name`,`am`.`url` AS `url`,`am`.`icon` AS `icon`,`am`.`submenu` AS `submenu`,`am`.`main_menu` AS `main_menu` from (`groupe_user_grant_menu` `guig` join `admin_menu` `am` on(`am`.`id_admin_menu` = `guig`.`id_menu_admin`)) ;

-- --------------------------------------------------------

--
-- Structure de la vue `view_livraison`
--
DROP TABLE IF EXISTS `view_livraison`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_livraison`  AS  select `l`.`id_livraison` AS `id_livraison`,`l`.`numero_livraison` AS `numero_livraison`,`l`.`observation_livraison` AS `observation_livraison`,`l`.`id_acheteur` AS `id_acheteur`,`l`.`id_type_livraison` AS `id_type_livraison`,`l`.`id_livreur` AS `id_livreur`,`l`.`id_status` AS `id_status`,`lt`.`type_livraison` AS `type_livraison`,`lv`.`nom_livreur` AS `nom_livreur`,`lv`.`telephone_livreur` AS `telephone_livreur`,`lv`.`email_livreur` AS `email_livreur`,`a`.`nom_acheteur` AS `nom_acheteur`,`a`.`prenom_acheteur` AS `prenom_acheteur`,`a`.`numero_client_acheteur` AS `numero_client_acheteur`,`a`.`adresse_acheteur` AS `adresse_acheteur`,`a`.`code_postal` AS `code_postal`,`a`.`ville_acheteur` AS `ville_acheteur`,`a`.`pays_acheteur` AS `pays_acheteur` from ((((`livraison` `l` join `acheteur` `a` on(`a`.`id_acheteur` = `l`.`id_acheteur`)) join `livraison_type` `lt` on(`lt`.`id_type_livraison` = `l`.`id_type_livraison`)) join `livreur` `lv` on(`lv`.`id_livreur` = `l`.`id_acheteur`)) join `status` `s` on(`s`.`id_status` = `l`.`id_status`)) ;

-- --------------------------------------------------------

--
-- Structure de la vue `view_livraison_commande`
--
DROP TABLE IF EXISTS `view_livraison_commande`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_livraison_commande`  AS  select `l`.`id_livraison` AS `id_livraison`,`l`.`numero_livraison` AS `numero_livraison`,`l`.`observation_livraison` AS `observation_livraison`,`l`.`id_acheteur` AS `id_acheteur`,`l`.`id_type_livraison` AS `id_type_livraison`,`l`.`id_livreur` AS `id_livreur`,`l`.`id_status` AS `id_status`,`lt`.`type_livraison` AS `type_livraison`,`lv`.`nom_livreur` AS `nom_livreur`,`lv`.`telephone_livreur` AS `telephone_livreur`,`lv`.`email_livreur` AS `email_livreur`,`a`.`nom_acheteur` AS `nom_acheteur`,`a`.`prenom_acheteur` AS `prenom_acheteur`,`a`.`numero_client_acheteur` AS `numero_client_acheteur`,`a`.`adresse_acheteur` AS `adresse_acheteur`,`a`.`code_postal` AS `code_postal`,`a`.`ville_acheteur` AS `ville_acheteur`,`a`.`pays_acheteur` AS `pays_acheteur`,`c`.`numero_commande` AS `numero_commande`,`c`.`date_commande` AS `date_commande`,`vc`.`status` AS `status`,`vc`.`prix_commande` AS `prix_commande` from ((((((`livraison` `l` join `acheteur` `a` on(`a`.`id_acheteur` = `l`.`id_acheteur`)) join `commande` `c` on(`c`.`id_livraison` = `l`.`id_livraison`)) join `view_commande` `vc` on(`vc`.`id_commande` = `c`.`id_commande`)) join `livraison_type` `lt` on(`lt`.`id_type_livraison` = `l`.`id_type_livraison`)) join `livreur` `lv` on(`lv`.`id_livreur` = `l`.`id_acheteur`)) join `status` `s` on(`s`.`id_status` = `l`.`id_status`)) ;

-- --------------------------------------------------------

--
-- Structure de la vue `view_livreur`
--
DROP TABLE IF EXISTS `view_livreur`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_livreur`  AS  select `lv`.`id_livreur` AS `id_livreur`,`lv`.`nom_livreur` AS `nom_livreur`,`lv`.`description_livreur` AS `description_livreur`,`lv`.`telephone_livreur` AS `telephone_livreur`,`lv`.`email_livreur` AS `email_livreur`,`lv`.`id_status` AS `id_status`,case when count(`l`.`id_livraison`) > 0 then 0 else 1 end AS `can_delete` from (`livreur` `lv` left join `livraison` `l` on(`l`.`id_livreur` = `lv`.`id_livreur`)) ;

-- --------------------------------------------------------

--
-- Structure de la vue `view_panier`
--
DROP TABLE IF EXISTS `view_panier`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_panier`  AS  select `p`.`id_panier` AS `id_panier`,`p`.`prix_total_panier` AS `prix_total_panier`,`p`.`id_acheteur` AS `id_acheteur`,`p`.`termine` AS `termine`,`pt`.`id_produit` AS `id_produit`,`pt`.`nom_produit` AS `nom_produit`,`pt`.`prix_produit` AS `prix_produit`,`pt`.`numero_produit` AS `numero_produit`,`pt`.`stock_produit` AS `stock_produit`,`pt`.`image_produit` AS `image_produit`,`pt`.`description_produit` AS `description_produit`,`pt`.`date_creation_produit` AS `date_creation_produit`,`pt`.`id_status` AS `id_status`,`pt`.`id_categorie` AS `id_categorie` from ((`panier` `p` left join `panier_produit` `pd` on(`pd`.`id_panier` = `p`.`id_panier`)) left join `produit` `pt` on(`pt`.`id_produit` = `pd`.`id_produit`)) where `p`.`termine` = 0 ;

-- --------------------------------------------------------

--
-- Structure de la vue `view_produit`
--
DROP TABLE IF EXISTS `view_produit`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_produit`  AS  select `p`.`id_produit` AS `id_produit`,`p`.`nom_produit` AS `nom_produit`,`p`.`prix_produit` AS `prix_produit`,`p`.`numero_produit` AS `numero_produit`,`p`.`stock_produit` AS `stock_produit`,`p`.`image_produit` AS `image_produit`,`p`.`description_produit` AS `description_produit`,`p`.`date_creation_produit` AS `date_creation_produit`,`p`.`id_status` AS `id_status`,`p`.`id_categorie` AS `id_categorie`,`s`.`designation_status` AS `status`,`c`.`nom_categorie` AS `categorie`,`pr`.`id_promotion` AS `id_promotion`,`pr`.`reduction_promotion` AS `reduction_promotion`,`p`.`prix_produit` - `p`.`prix_produit` * (`pr`.`reduction_promotion` / 100) AS `prix_reduction` from ((((`produit` `p` join `status` `s` on(`s`.`id_status` = `p`.`id_status`)) join `categorie` `c` on(`c`.`id_categorie` = `p`.`id_categorie`)) left join `promotion_produit` `pp` on(`pp`.`id_produit` = `p`.`id_produit`)) left join `promotion` `pr` on(`pr`.`id_promotion` = `pp`.`id_promotion` and `pr`.`date_expiration_promotion` > current_timestamp())) ;

-- --------------------------------------------------------

--
-- Structure de la vue `view_promotion`
--
DROP TABLE IF EXISTS `view_promotion`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_promotion`  AS  select `p`.`id_promotion` AS `id_promotion`,`p`.`reduction_promotion` AS `reduction_promotion`,`p`.`date_expiration_promotion` AS `date_expiration_promotion`,`p`.`type_promotion` AS `type_promotion`,`p`.`code_promotion` AS `code_promotion`,case when count(`pp`.`id_produit`) then 1 else 0 end AS `promo_for_produit`,case when count(`pc`.`id_commande`) then 1 else 0 end AS `promo_for_commande`,case when (`pp`.`id_produit` is null and `pc`.`id_commande` is null) then 0 else 1 end AS `used` from ((`promotion` `p` left join `promotion_produit` `pp` on(`pp`.`id_promotion` = `p`.`id_promotion`)) left join `promotion_commande` `pc` on(`pc`.`id_promotion` = `p`.`id_promotion`)) ;

-- --------------------------------------------------------

--
-- Structure de la vue `view_promotion_produit`
--
DROP TABLE IF EXISTS `view_promotion_produit`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_promotion_produit`  AS  select `pr`.`id_promotion` AS `id_promotion`,`pr`.`reduction_promotion` AS `reduction_promotion`,`pr`.`date_expiration_promotion` AS `date_expiration_promotion`,`pr`.`type_promotion` AS `type_promotion`,`pr`.`code_promotion` AS `code_promotion`,`p`.`id_produit` AS `id_produit`,`p`.`nom_produit` AS `nom_produit`,`p`.`prix_produit` AS `prix_produit`,`p`.`numero_produit` AS `numero_produit`,`p`.`stock_produit` AS `stock_produit`,`p`.`image_produit` AS `image_produit`,`p`.`description_produit` AS `description_produit`,`p`.`date_creation_produit` AS `date_creation_produit`,`p`.`id_status` AS `id_status`,`p`.`id_categorie` AS `id_categorie`,`pp`.`est_active` AS `est_active` from ((`promotion` `pr` join `promotion_produit` `pp` on(`pr`.`id_promotion` = `pp`.`id_promotion`)) join `produit` `p` on(`p`.`id_produit` = `pp`.`id_produit`)) ;

-- --------------------------------------------------------

--
-- Structure de la vue `view_type_livraison`
--
DROP TABLE IF EXISTS `view_type_livraison`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_type_livraison`  AS  select `lt`.`id_type_livraison` AS `id_type_livraison`,`lt`.`type_livraison` AS `type_livraison`,`lt`.`caracteristique_livraison` AS `caracteristique_livraison`,`lt`.`id_status` AS `id_status`,case when count(`l`.`id_livraison`) > 0 then 0 else 1 end AS `can_delete` from (`livraison_type` `lt` left join `livraison` `l` on(`l`.`id_type_livraison` = `lt`.`id_type_livraison`)) ;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `acheteur`
--
ALTER TABLE `acheteur`
  ADD PRIMARY KEY (`id_acheteur`),
  ADD KEY `fk_id_status` (`id_status`);

--
-- Index pour la table `administrateur`
--
ALTER TABLE `administrateur`
  ADD PRIMARY KEY (`id_administrateur`),
  ADD KEY `fk_id_login_administrateur` (`id_login`);

--
-- Index pour la table `admin_menu`
--
ALTER TABLE `admin_menu`
  ADD PRIMARY KEY (`id_admin_menu`),
  ADD KEY `dependance_key_main_menu` (`main_menu`);

--
-- Index pour la table `aide`
--
ALTER TABLE `aide`
  ADD PRIMARY KEY (`id_aide`);

--
-- Index pour la table `beeblo`
--
ALTER TABLE `beeblo`
  ADD PRIMARY KEY (`id_beeblo`);

--
-- Index pour la table `categorie`
--
ALTER TABLE `categorie`
  ADD PRIMARY KEY (`id_categorie`),
  ADD KEY `fk_id_status_categorie` (`id_status`);

--
-- Index pour la table `commande`
--
ALTER TABLE `commande`
  ADD PRIMARY KEY (`id_commande`),
  ADD KEY `fk_id_panier_commande` (`id_panier`),
  ADD KEY `fk_id_status_commande` (`id_status`),
  ADD KEY `fk_id_moyen_paiement_commande` (`id_moyen_paiement`),
  ADD KEY `fk_id_livraison_commande` (`id_livraison`);

--
-- Index pour la table `facture`
--
ALTER TABLE `facture`
  ADD PRIMARY KEY (`id_facture`),
  ADD KEY `fk_id_acheteur_facture` (`id_acheteur`),
  ADD KEY `fk_id_commande_facture` (`id_commande`);

--
-- Index pour la table `filtre`
--
ALTER TABLE `filtre`
  ADD PRIMARY KEY (`id_filtre`);

--
-- Index pour la table `groupe`
--
ALTER TABLE `groupe`
  ADD PRIMARY KEY (`id_groupe`);

--
-- Index pour la table `groupe_user_grant_menu`
--
ALTER TABLE `groupe_user_grant_menu`
  ADD UNIQUE KEY `unique_index` (`id_groupe`,`id_menu_admin`),
  ADD KEY `fk_id_menu_admin_granter` (`id_menu_admin`);

--
-- Index pour la table `liste_moyen_paiement`
--
ALTER TABLE `liste_moyen_paiement`
  ADD KEY `fk_id_moyen_paiement` (`id_moyen_paiement`),
  ADD KEY `fk_id_acheteur` (`id_acheteur`);

--
-- Index pour la table `livraison`
--
ALTER TABLE `livraison`
  ADD PRIMARY KEY (`id_livraison`),
  ADD KEY `fk_id_acheteur_livraison` (`id_acheteur`),
  ADD KEY `fk_id_status_livraison` (`id_status`),
  ADD KEY `fk_id_livreur_livraison` (`id_livreur`),
  ADD KEY `fk_id_type_livraison_livraison` (`id_type_livraison`);

--
-- Index pour la table `livraison_type`
--
ALTER TABLE `livraison_type`
  ADD PRIMARY KEY (`id_type_livraison`),
  ADD KEY `fk_id_status_type_livraison` (`id_status`);

--
-- Index pour la table `livreur`
--
ALTER TABLE `livreur`
  ADD PRIMARY KEY (`id_livreur`),
  ADD KEY `fk_id_status_livreur` (`id_status`);

--
-- Index pour la table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id_menu`),
  ADD KEY `fk_id_status_menu` (`id_status`);

--
-- Index pour la table `moyen_paiement`
--
ALTER TABLE `moyen_paiement`
  ADD PRIMARY KEY (`id_moyen_paiement`);

--
-- Index pour la table `newsletter`
--
ALTER TABLE `newsletter`
  ADD PRIMARY KEY (`id_newsletter`);

--
-- Index pour la table `panier`
--
ALTER TABLE `panier`
  ADD PRIMARY KEY (`id_panier`),
  ADD KEY `fk_id_acheteur_panier` (`id_acheteur`);

--
-- Index pour la table `panier_produit`
--
ALTER TABLE `panier_produit`
  ADD KEY `fk_id_panier_produit` (`id_panier`),
  ADD KEY `fk_id_produit_panier` (`id_produit`);

--
-- Index pour la table `produit`
--
ALTER TABLE `produit`
  ADD PRIMARY KEY (`id_produit`),
  ADD KEY `fk_id_status_produit` (`id_status`),
  ADD KEY `fk_id_categorie_produit` (`id_categorie`);

--
-- Index pour la table `produit_commentaire`
--
ALTER TABLE `produit_commentaire`
  ADD KEY `fk_id_acheteur_produit_commentaire` (`id_acheteur`),
  ADD KEY `fk_id_produit_commentaire` (`id_produit`);

--
-- Index pour la table `promotion`
--
ALTER TABLE `promotion`
  ADD PRIMARY KEY (`id_promotion`);

--
-- Index pour la table `promotion_commande`
--
ALTER TABLE `promotion_commande`
  ADD KEY `fk_id_commande_promotion` (`id_commande`),
  ADD KEY `fk_id_promotion_commande_promotion` (`id_promotion`);

--
-- Index pour la table `promotion_produit`
--
ALTER TABLE `promotion_produit`
  ADD KEY `fk_id_produit_promotion` (`id_produit`),
  ADD KEY `fk_id_promotion` (`id_promotion`);

--
-- Index pour la table `reclamation`
--
ALTER TABLE `reclamation`
  ADD PRIMARY KEY (`id_reclamation`),
  ADD KEY `fk_id_acheteur_reclamation` (`id_acheteur`);

--
-- Index pour la table `reclamation_commande`
--
ALTER TABLE `reclamation_commande`
  ADD KEY `fk_id_reclamantion` (`id_reclamation`),
  ADD KEY `fk_id_commande` (`id_commande`);

--
-- Index pour la table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id_status`);

--
-- Index pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`id_user`),
  ADD KEY `fk_id_groupe_utilisateur` (`id_groupe`),
  ADD KEY `fk_id_status_utilisateur` (`id_status`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `acheteur`
--
ALTER TABLE `acheteur`
  MODIFY `id_acheteur` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `administrateur`
--
ALTER TABLE `administrateur`
  MODIFY `id_administrateur` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `admin_menu`
--
ALTER TABLE `admin_menu`
  MODIFY `id_admin_menu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT pour la table `aide`
--
ALTER TABLE `aide`
  MODIFY `id_aide` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `beeblo`
--
ALTER TABLE `beeblo`
  MODIFY `id_beeblo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `categorie`
--
ALTER TABLE `categorie`
  MODIFY `id_categorie` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `commande`
--
ALTER TABLE `commande`
  MODIFY `id_commande` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `facture`
--
ALTER TABLE `facture`
  MODIFY `id_facture` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `filtre`
--
ALTER TABLE `filtre`
  MODIFY `id_filtre` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `groupe`
--
ALTER TABLE `groupe`
  MODIFY `id_groupe` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `livraison`
--
ALTER TABLE `livraison`
  MODIFY `id_livraison` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `livraison_type`
--
ALTER TABLE `livraison_type`
  MODIFY `id_type_livraison` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `livreur`
--
ALTER TABLE `livreur`
  MODIFY `id_livreur` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `menu`
--
ALTER TABLE `menu`
  MODIFY `id_menu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `moyen_paiement`
--
ALTER TABLE `moyen_paiement`
  MODIFY `id_moyen_paiement` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `newsletter`
--
ALTER TABLE `newsletter`
  MODIFY `id_newsletter` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `panier`
--
ALTER TABLE `panier`
  MODIFY `id_panier` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `produit`
--
ALTER TABLE `produit`
  MODIFY `id_produit` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `promotion`
--
ALTER TABLE `promotion`
  MODIFY `id_promotion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `reclamation`
--
ALTER TABLE `reclamation`
  MODIFY `id_reclamation` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `status`
--
ALTER TABLE `status`
  MODIFY `id_status` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `acheteur`
--
ALTER TABLE `acheteur`
  ADD CONSTRAINT `fk_id_status` FOREIGN KEY (`id_status`) REFERENCES `status` (`id_status`);

--
-- Contraintes pour la table `administrateur`
--
ALTER TABLE `administrateur`
  ADD CONSTRAINT `fk_id_login_administrateur` FOREIGN KEY (`id_login`) REFERENCES `utilisateur` (`id_user`);

--
-- Contraintes pour la table `admin_menu`
--
ALTER TABLE `admin_menu`
  ADD CONSTRAINT `dependance_key_main_menu` FOREIGN KEY (`main_menu`) REFERENCES `admin_menu` (`id_admin_menu`);

--
-- Contraintes pour la table `categorie`
--
ALTER TABLE `categorie`
  ADD CONSTRAINT `fk_id_status_categorie` FOREIGN KEY (`id_status`) REFERENCES `status` (`id_status`);

--
-- Contraintes pour la table `commande`
--
ALTER TABLE `commande`
  ADD CONSTRAINT `fk_id_livraison_commande` FOREIGN KEY (`id_livraison`) REFERENCES `livraison` (`id_livraison`),
  ADD CONSTRAINT `fk_id_moyen_paiement_commande` FOREIGN KEY (`id_moyen_paiement`) REFERENCES `moyen_paiement` (`id_moyen_paiement`),
  ADD CONSTRAINT `fk_id_panier_commande` FOREIGN KEY (`id_panier`) REFERENCES `panier` (`id_panier`),
  ADD CONSTRAINT `fk_id_status_commande` FOREIGN KEY (`id_status`) REFERENCES `status` (`id_status`);

--
-- Contraintes pour la table `facture`
--
ALTER TABLE `facture`
  ADD CONSTRAINT `fk_id_acheteur_facture` FOREIGN KEY (`id_acheteur`) REFERENCES `acheteur` (`id_acheteur`),
  ADD CONSTRAINT `fk_id_commande_facture` FOREIGN KEY (`id_commande`) REFERENCES `commande` (`id_commande`);

--
-- Contraintes pour la table `groupe_user_grant_menu`
--
ALTER TABLE `groupe_user_grant_menu`
  ADD CONSTRAINT `fk_id_groupe_granter` FOREIGN KEY (`id_groupe`) REFERENCES `groupe` (`id_groupe`),
  ADD CONSTRAINT `fk_id_menu_admin_granter` FOREIGN KEY (`id_menu_admin`) REFERENCES `admin_menu` (`id_admin_menu`);

--
-- Contraintes pour la table `liste_moyen_paiement`
--
ALTER TABLE `liste_moyen_paiement`
  ADD CONSTRAINT `fk_id_acheteur` FOREIGN KEY (`id_acheteur`) REFERENCES `acheteur` (`id_acheteur`),
  ADD CONSTRAINT `fk_id_moyen_paiement` FOREIGN KEY (`id_moyen_paiement`) REFERENCES `moyen_paiement` (`id_moyen_paiement`);

--
-- Contraintes pour la table `livraison`
--
ALTER TABLE `livraison`
  ADD CONSTRAINT `fk_id_acheteur_livraison` FOREIGN KEY (`id_acheteur`) REFERENCES `acheteur` (`id_acheteur`),
  ADD CONSTRAINT `fk_id_livreur_livraison` FOREIGN KEY (`id_livreur`) REFERENCES `livreur` (`id_livreur`),
  ADD CONSTRAINT `fk_id_status_livraison` FOREIGN KEY (`id_status`) REFERENCES `status` (`id_status`),
  ADD CONSTRAINT `fk_id_type_livraison_livraison` FOREIGN KEY (`id_type_livraison`) REFERENCES `livraison_type` (`id_type_livraison`);

--
-- Contraintes pour la table `livraison_type`
--
ALTER TABLE `livraison_type`
  ADD CONSTRAINT `fk_id_status_type_livraison` FOREIGN KEY (`id_status`) REFERENCES `status` (`id_status`);

--
-- Contraintes pour la table `livreur`
--
ALTER TABLE `livreur`
  ADD CONSTRAINT `fk_id_status_livreur` FOREIGN KEY (`id_status`) REFERENCES `status` (`id_status`);

--
-- Contraintes pour la table `menu`
--
ALTER TABLE `menu`
  ADD CONSTRAINT `fk_id_status_menu` FOREIGN KEY (`id_status`) REFERENCES `status` (`id_status`);

--
-- Contraintes pour la table `panier`
--
ALTER TABLE `panier`
  ADD CONSTRAINT `fk_id_acheteur_panier` FOREIGN KEY (`id_acheteur`) REFERENCES `acheteur` (`id_acheteur`);

--
-- Contraintes pour la table `panier_produit`
--
ALTER TABLE `panier_produit`
  ADD CONSTRAINT `fk_id_panier_produit` FOREIGN KEY (`id_panier`) REFERENCES `panier` (`id_panier`),
  ADD CONSTRAINT `fk_id_produit_panier` FOREIGN KEY (`id_produit`) REFERENCES `produit` (`id_produit`);

--
-- Contraintes pour la table `produit`
--
ALTER TABLE `produit`
  ADD CONSTRAINT `fk_id_categorie_produit` FOREIGN KEY (`id_categorie`) REFERENCES `categorie` (`id_categorie`),
  ADD CONSTRAINT `fk_id_status_produit` FOREIGN KEY (`id_status`) REFERENCES `status` (`id_status`);

--
-- Contraintes pour la table `produit_commentaire`
--
ALTER TABLE `produit_commentaire`
  ADD CONSTRAINT `fk_id_acheteur_produit_commentaire` FOREIGN KEY (`id_acheteur`) REFERENCES `acheteur` (`id_acheteur`),
  ADD CONSTRAINT `fk_id_produit_commentaire` FOREIGN KEY (`id_produit`) REFERENCES `produit` (`id_produit`);

--
-- Contraintes pour la table `promotion_commande`
--
ALTER TABLE `promotion_commande`
  ADD CONSTRAINT `fk_id_commande_promotion` FOREIGN KEY (`id_commande`) REFERENCES `commande` (`id_commande`),
  ADD CONSTRAINT `fk_id_promotion_commande_promotion` FOREIGN KEY (`id_promotion`) REFERENCES `promotion` (`id_promotion`);

--
-- Contraintes pour la table `promotion_produit`
--
ALTER TABLE `promotion_produit`
  ADD CONSTRAINT `fk_id_produit_promotion` FOREIGN KEY (`id_produit`) REFERENCES `produit` (`id_produit`),
  ADD CONSTRAINT `fk_id_promotion` FOREIGN KEY (`id_promotion`) REFERENCES `promotion` (`id_promotion`);

--
-- Contraintes pour la table `reclamation`
--
ALTER TABLE `reclamation`
  ADD CONSTRAINT `fk_id_acheteur_reclamation` FOREIGN KEY (`id_acheteur`) REFERENCES `acheteur` (`id_acheteur`);

--
-- Contraintes pour la table `reclamation_commande`
--
ALTER TABLE `reclamation_commande`
  ADD CONSTRAINT `fk_id_commande` FOREIGN KEY (`id_commande`) REFERENCES `commande` (`id_commande`),
  ADD CONSTRAINT `fk_id_reclamantion` FOREIGN KEY (`id_reclamation`) REFERENCES `reclamation` (`id_reclamation`);

--
-- Contraintes pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD CONSTRAINT `fk_id_groupe_utilisateur` FOREIGN KEY (`id_groupe`) REFERENCES `groupe` (`id_groupe`),
  ADD CONSTRAINT `fk_id_status_utilisateur` FOREIGN KEY (`id_status`) REFERENCES `status` (`id_status`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
