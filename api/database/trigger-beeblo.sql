DELIMITER //
CREATE TRIGGER after_add_panier AFTER INSERT
ON panier_produit FOR EACH ROW
BEGIN
	DECLARE somme_prix FLOAT;
    SET somme_prix = (SELECT SUM((SELECT p.prix_produit FROM produit WHERE id_produit = p.id_produit) * (pd.quantite)) FROM panier_produit AS pd JOIN produit AS p ON p.id_produit = pd.id_produit WHERE pd.id_panier = NEW.id_panier);
	UPDATE panier SET prix_total_panier = somme_prix WHERE id_panier = NEW.id_panier;
END //
DELIMITER ;

DELIMITER //
CREATE TRIGGER after_update_panier AFTER UPDATE
ON panier_produit FOR EACH ROW
BEGIN
	DECLARE somme_prix FLOAT;
    SET somme_prix = (SELECT SUM((SELECT p.prix_produit FROM produit WHERE id_produit = p.id_produit) * (pd.quantite)) FROM panier_produit AS pd JOIN produit AS p ON p.id_produit = pd.id_produit WHERE pd.id_panier = NEW.id_panier);
	UPDATE panier SET prix_total_panier = somme_prix WHERE id_panier = NEW.id_panier;
END //
DELIMITER ;

DELIMITER //
CREATE TRIGGER after_delete_panier AFTER DELETE
ON panier_produit FOR EACH ROW
BEGIN
	DECLARE somme_prix FLOAT;
    SET somme_prix = (SELECT SUM((SELECT p.prix_produit FROM produit WHERE id_produit = p.id_produit) * (pd.quantite)) FROM panier_produit AS pd JOIN produit AS p ON p.id_produit = pd.id_produit WHERE pd.id_panier = OLD.id_panier);
	UPDATE panier SET prix_total_panier = somme_prix WHERE id_panier = OLD.id_panier;
END //
DELIMITER ;

CREATE VIEW view_panier AS
SELECT p.*, pt.* FROM panier AS p JOIN panier_produit AS pd ON pd.id_panier = p.id_panier JOIN produit AS pt ON pt.id_produit = pd.id_produit WHERE p.termine = 0;
