<?php
function get_derniers_articles() {
    $fichier = __DIR__ . '/data/articles.json';
    
    if (!file_exists($fichier)) {
        return [];
    }
    
    $contenu_json = file_get_contents($fichier);
    
    $articles = json_decode($contenu_json, true);
    
    return is_array($articles) ? $articles : [];
}
function get_categories() {
    $fichier = __DIR__ . '/data/categories.json';
    
    if (!file_exists($fichier)) {
        return [];
    }
    
    $contenu_json = file_get_contents($fichier);
    $categories = json_decode($contenu_json, true);
    
    return is_array($categories) ? $categories : [];
}