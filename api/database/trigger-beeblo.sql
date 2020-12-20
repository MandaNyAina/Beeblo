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
SELECT p.*, pp.id_produit, pc.id_commande, (
    CASE
    WHEN (pp.id_produit IS NULL AND pp.id_produit IS NULL) THEN true
    ELSE false
	END
) AS can_delete
FROM promotion AS p
LEFT JOIN promotion_produit AS pp ON pp.id_promotion = p.id_promotion
LEFT JOIN promotion_commande AS pc ON pc.id_promotion = p.id_promotion;
