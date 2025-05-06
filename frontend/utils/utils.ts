export const handleNavigation=(type:string)=>{
    const element = document.getElementById(type);

    element && element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

}

export const accessOffre=[
    'Un Community Manager personnalisé 100 avis positifs de plus sur Google',
    "Gestion de 2 réseaux sociaux au choix (Facebook, Linkedin, Instagram et TikTok) : animation, envoi des messages, réponses aux commentaires, conception réponse type",
    "Création de la ligne éditoriale: élaboration du planning de publication avec contenu textuel et visuel",
    "Feedback sur les résultats obtenus chaque fin du mois",
    "Tarif :500€ HT/mois",
    "Frais de démarrage :1000€ HTOffert"
]

export const premiumOffre=[
    'Un Community Manager personnalisé 300 avis positifs de plus sur Google',
    "Gestion de 4 réseaux sociaux (Facebook, Linkedin, Instagram et TikTok) : animation, envoi des messages, réponses aux commentaires, conception de réponse type",
    "Veille concurrentielle plus détaillée",
    "Création de la ligne éditoriale: élaboration du planning de publication avec contenu textuel et visuel",
    "Feedback plus détaillé sur les résultats obtenus chaque fin du mois",
    "Aide à la création d'évènements et conseil sur les produits générateurs de buzz",
    "Tarif :1300€ HT/mois",
    "Frais de démarrage : 1500€ HT Offert"
]

export const listinfo=[
    {
        image:'/assets/images/info1.png',
        title:'Donnez vie à votre marque',
        text:"Ne vous contentez pas d'exister sur les réseaux. Créez une véritable connexion émotionnelle avec votre audience."
    },
    {
        image:'/assets/images/info2.png',
        title:'Chez JDA Diffusion, nous transformons vos réseaux en un véritable moteur de croissance.',
        text:"Nous mettons en place des stratégies sur-mesure pour attirer, engager et fidéliser vos futurs clients."
    },
    {
        image:'/assets/images/info3.png',
        title:'Notre Community Management, c’est plus que publier : c’est construire votre succès.',
        text:"Chaque contenu vise à renforcer votre notoriété et transformer votre audience en clients engagés."
    }
    
]