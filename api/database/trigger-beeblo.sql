DELIMITER //
CREATE TRIGGER after_add_panier AFTER INSERT
ON panier_produit FOR EACH ROW
BEGIN
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
END //
DELIMITER ;

DELIMITER //
CREATE TRIGGER after_update_panier AFTER UPDATE
ON panier_produit FOR EACH ROW
BEGIN
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
END //
DELIMITER ;

DELIMITER //
CREATE TRIGGER after_delete_panier AFTER DELETE
ON panier_produit FOR EACH ROW
BEGIN
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
END //
DELIMITER ;

DELIMITER //
CREATE TRIGGER after_add_commande AFTER INSERT
ON commande FOR EACH ROW
BEGIN
	UPDATE panier SET termine = 1 WHERE id_panier = NEW.id_panier;
END //
DELIMITER ;

CREATE VIEW view_panier AS
SELECT p.*, pt.* FROM panier AS p
LEFT JOIN panier_produit AS pd ON pd.id_panier = p.id_panier
LEFT JOIN produit AS pt ON pt.id_produit = pd.id_produit WHERE p.termine = 0;

CREATE VIEW view_promotion_produit AS
SELECT pr.*,  p.*, pp.est_active FROM promotion AS pr
JOIN promotion_produit AS pp ON pr.id_promotion = pp.id_promotion
JOIN produit AS p ON p.id_produit = pp.id_produit;

CREATE VIEW view_produit AS
SELECT p.*, s.designation_status status, c.nom_categorie categorie, pr.id_promotion, pr.reduction_promotion, (p.prix_produit - (p.prix_produit * (pr.reduction_promotion / 100))) prix_reduction FROM produit AS p
INNER JOIN status AS s ON s.id_status = p.id_status
INNER JOIN categorie AS c ON c.id_categorie = p.id_categorie
LEFT JOIN promotion_produit AS pp ON pp.id_produit = p.id_produit
LEFT JOIN promotion AS pr ON pr.id_promotion = pp.id_promotion AND pr.date_expiration_promotion > NOW();

CREATE VIEW view_promotion AS
SELECT p.*,
  (CASE WHEN (COUNT(pp.id_produit)) THEN true ELSE false END) AS promo_for_produit,
  (CASE WHEN (COUNT(pc.id_commande)) THEN true ELSE false END) AS promo_for_commande,
  (
    CASE
    WHEN (pp.id_produit IS NULL AND pc.id_commande IS NULL) THEN false
    ELSE true
	END
) AS used
FROM promotion AS p
LEFT JOIN promotion_produit AS pp ON pp.id_promotion = p.id_promotion
LEFT JOIN promotion_commande AS pc ON pc.id_promotion = p.id_promotion;

CREATE VIEW view_commande AS
SELECT c.id_commande,
			c.numero_commande,
			c.date_commande,
			p.id_panier id_panier,
      p.id_acheteur,
      c.id_status,
      s.designation_status status,
      mp.nom_moyen_paiement moyen_paiement,
      (p.prix_total_panier - (p.prix_total_panier * (CASE WHEN (pr.id_promotion IS NULL) THEN 0 ELSE (pr.reduction_promotion / 100) END))) prix_commande,
      (CASE WHEN (pr.id_promotion IS NULL) THEN false ELSE true END) has_promo,
      pr.reduction_promotion,
      pr.code_promotion
FROM commande AS c
LEFT JOIN promotion_commande AS pc ON pc.id_commande = c.id_commande
LEFT JOIN promotion AS pr ON pr.id_promotion = pc.id_promotion
LEFT JOIN panier AS p ON p.id_panier = c.id_panier
LEFT JOIN status AS s ON s.id_status = c.id_status
LEFT JOIN moyen_paiement AS mp ON mp.id_moyen_paiement = c.id_moyen_paiement;

CREATE VIEW view_commande_produit AS
SELECT vc.id_commande,
			vc.numero_commande,
      vc.prix_commande,
      vp.id_produit,
      vp.nom_produit,
      vp.numero_produit,
      vp.prix_produit,
      pp.quantite,
      vp.stock_produit,
      vp.categorie,
      vc.has_promo,
      vc.code_promotion
FROM view_commande AS vc
LEFT JOIN panier_produit AS pp ON pp.id_panier = vc.id_panier
LEFT JOIN view_produit AS vp ON vp.id_produit = pp.id_produit;

DELIMITER //
CREATE TRIGGER after_update_commande AFTER UPDATE
ON commande FOR EACH ROW
BEGIN
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
END //
DELIMITER ;

CREATE VIEW view_facture AS
SELECT
	f.numero_facture, f.prix_ht, f.prix_tva, f.prix_ttc,
    ac.numero_client_acheteur, ac.id_acheteur, ac.nom_acheteur, ac.prenom_acheteur, ac.email_acheteur, ac.adresse_acheteur, ac.code_postal, ac.pays_acheteur,
    vcp.id_commande, vcp.numero_commande, vcp.prix_commande, vcp.has_promo promotion_commande, vcp.code_promotion, vcp.id_produit, vcp.nom_produit, vcp.categorie, vcp.prix_produit, vcp.quantite, wp.reduction_promotion promotion_produit
FROM facture AS f
LEFT JOIN acheteur AS ac ON ac.id_acheteur = f.id_acheteur
LEFT JOIN view_commande_produit AS vcp ON vcp.id_commande = f.id_commande
LEFT JOIN view_produit AS wp ON wp.id_produit = vcp.id_produit;

CREATE VIEW view_categorie AS
SELECT c.*, (CASE WHEN ((SELECT COUNT(*) FROM produit WHERE produit.id_categorie = c.id_categorie) != 0) THEN false ELSE true END) can_delete
FROM categorie AS c

CREATE VIEW view_livraison_commande AS
SELECT
l.*,
lt.type_livraison, lv.nom_livreur, lv.telephone_livreur, lv.email_livreur,
a.nom_acheteur, a.prenom_acheteur, a.numero_client_acheteur, a.adresse_acheteur, a.code_postal, a.ville_acheteur, a.pays_acheteur,
c.numero_commande, c.date_commande,
vc.status, vc.prix_commande
FROM livraison AS l
JOIN acheteur AS a ON a.id_acheteur = l.id_acheteur
JOIN commande AS c ON c.id_livraison = l.id_livraison
JOIN view_commande AS vc ON vc.id_commande = c.id_commande
JOIN livraison_type AS lt ON lt.id_type_livraison = l.id_type_livraison
JOIN livreur AS lv ON lv.id_livreur = l.id_acheteur
JOIN status AS s ON s.id_status = l.id_status;

CREATE VIEW view_livraison AS
SELECT
l.*,
lt.type_livraison, lv.nom_livreur, lv.telephone_livreur, lv.email_livreur,
a.nom_acheteur, a.prenom_acheteur, a.numero_client_acheteur, a.adresse_acheteur, a.code_postal, a.ville_acheteur, a.pays_acheteur
FROM livraison AS l
JOIN acheteur AS a ON a.id_acheteur = l.id_acheteur
JOIN livraison_type AS lt ON lt.id_type_livraison = l.id_type_livraison
JOIN livreur AS lv ON lv.id_livreur = l.id_acheteur
JOIN status AS s ON s.id_status = l.id_status;

CREATE VIEW view_type_livraison AS
SELECT lt.*, (CASE WHEN (COUNT(l.id_livraison) > 0) THEN false ELSE true END) can_delete
FROM livraison_type AS lt
LEFT JOIN livraison AS l ON l.id_type_livraison = lt.id_type_livraison;

CREATE VIEW view_livreur AS
SELECT lv.*, (CASE WHEN (COUNT(l.id_livraison) > 0) THEN false ELSE true END) can_delete
FROM livreur AS lv
LEFT JOIN livraison AS l ON l.id_livreur = lv.id_livreur;

CREATE VIEW view_groupe_grant AS
SELECT guig.*,  am.name, am.url, am.icon, am.submenu, am.main_menu
FROM groupe_user_grant_menu AS guig
JOIN admin_menu AS am ON am.id_admin_menu = guig.id_menu_admin

CREATE VIEW view_admin AS
SELECT
admin.*,
login.nom_utilisateur,
status.designation_status,
login.id_groupe,
groupe.nom_groupe
FROM administrateur AS admin
JOIN utilisateur AS login ON login.id_user = admin.id_login
JOIN groupe ON groupe.id_groupe = login.id_groupe
JOIN status ON status.id_status = login.id_status
