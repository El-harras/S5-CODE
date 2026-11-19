<?php
function get_competences()
{
    $fichier = __DIR__ . '/data/competences.json';

    if (!file_exists($fichier)) {
        return [];
    }

    $contenu_json = file_get_contents($fichier);

    $competences = json_decode($contenu_json, true);

    return is_array($competences) ? $competences : [];
}
function get_projets()
{
    $fichier = __DIR__ . '/data/projets.json';

    if (!file_exists($fichier)) {
        return [];
    }

    $contenu_json = file_get_contents($fichier);

    $projets = json_decode($contenu_json, true);

    return is_array($projets) ? $projets : [];
}