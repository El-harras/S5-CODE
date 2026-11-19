# PROFIL (
    #id_profil,(PK)
    nom,
    domaine,
    phrase_accroche,
    description,
    formation,
    image
)

# COMPETENCE (
    #id_competence,(PK)
    nom,
    description,
    image,
    id_profil* (FK)
)

# PROJET (
    #id_projet,(PK)
    nom,
    description,
    categorie,
    type,
    image,
    id_profil* (FK)
)

# CONTACT (
    #id_contact,(PK)
    type,
    valeur,
    id_profil* (FK)
)