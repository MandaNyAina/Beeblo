export interface Acheteur {
  id_acheteur: number | undefined,
  nom_acheteur: string,
  prenom_acheteur: string | null,
  email_acheteur: string,
  numero_client_acheteur: string,
  adresse_acheteur: string,
  code_postal: string,
  ville_acheteur: string,
  pays_acheteur: string,
  id_type_acheteur: number,
  etat_acheteur: number,
  id_status: number
}

export interface TypeAcheteur {
  id_type_acheteur: number,
  libelle_type_acheteur: string
}
