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
SELECT p.*, pt.* FROM panier AS p JOIN panier_produit AS pd ON pd.id_panier = p.id_panier JOIN produit AS pt ON pt.id_produit = pd.id_produit WHERE p.termine = 0;

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
