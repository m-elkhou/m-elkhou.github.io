/* Contenu français — même structure que content-en.js.
   Les chaînes peuvent contenir du HTML inline (<b>, <a>). */
window.CONTENT = window.CONTENT || {};
window.CONTENT.fr = {
  code: "fr",
  htmlTitle: "Mohammed EL-KHOU — Data/Cloud Engineer",
  metaDescription: "Mohammed EL-KHOU — Data/Cloud Engineer (AWS), développeur Big Data/Python et ingénieur R&D ML/IA à Paris. Migration ETL et data warehouse, pipelines média serverless, matching LLM sur AWS Bedrock, automatisation AdTech pour RMC BFM ADS (Altice Media).",

  ui: {
    skip: "Aller au contenu",
    cv: "CV",
    cvTitle: "Télécharger le CV (PDF)",
    theme: "Basculer le mode sombre",
    menu: "Menu",
    showDetails: "Voir le détail",
    hideDetails: "Masquer le détail",
    more: "Détails",
    context: "Contexte :",
    constraints: "Contraintes :",
    result: "Résultat :",
    gridAria: "Frise de carrière : employeurs sous forme de barres de 2018 à aujourd'hui",
    gridStudies: "Études",
    filterAria: "Filtrer les projets",
    backToTop: "Retour en haut"
  },

  nav: [
    { id: "about", label: "À propos" },
    { id: "experience", label: "Expérience" },
    { id: "projects", label: "Projets" },
    { id: "impact", label: "Impact" },
    { id: "skills", label: "Compétences" },
    { id: "education", label: "Formation" },
    { id: "contact", label: "Contact" }
  ],

  hero: {
    ariaLabel: "Introduction",
    badge: "Data/Cloud Engineer · Big Data/Python Developer · R&D ML/AI",
    kicker: "Bonjour, je suis",
    name: ["Mohammed", "EL-KHOU"],
    typingPrefix: "Expert",
    typing: ["Data Engineer", "Cloud Engineer (AWS)", "Big Data Engineer", "Développeur Python", "Ingénieur ML / IA", "Architecte ETL"],
    lede: "Data engineer avec plus de 6 ans d'expérience dans la conception et l'exploitation de solutions data à l'échelle de l'entreprise — cloud AWS, traitement Big Data, pipelines ETL et architecture data warehouse — aujourd'hui au service de la publicité TV et digitale.",
    where: "Paris, France — Data Engineer / Cloud Engineer (AWS) chez <b>RMC BFM ADS (Altice Media)</b> depuis janvier 2024.",
    photoAlt: "Portrait de Mohammed EL-KHOU",
    actions: [
      { label: "Travaillons ensemble", href: "#contact", icon: "rocket", style: "primary" },
      { label: "Télécharger le CV", href: "assets/cv/Mohammed_EL-KHOU_CV.pdf", icon: "download", download: true, style: "secondary" },
      { label: "GitHub", href: "https://github.com/m-elkhou", icon: "github", external: true, style: "tertiary" }
    ],
    social: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/m-elkhou/", icon: "linkedin", external: true },
      { label: "GitHub", href: "https://github.com/m-elkhou", icon: "github", external: true },
      { label: "E-mail", href: "mailto:m.elkhou@hotmail.com", icon: "mail" }
    ],
    facts: [
      { n: 6, suffix: "+", l: "années d'expérience" },
      { n: 70, suffix: "+", l: "projets livrés" },
      { n: 15, suffix: "", l: "certifications" },
      { n: 1, suffix: "", l: "article de recherche" }
    ]
  },

  about: {
    title: "À propos",
    tagline: "Qui je suis et comment je travaille",
    paragraphs: [
      "Je suis un <b>Data Engineer et Cloud Engineer</b> passionné, avec plus de 6 ans d'expérience dans la conception et la mise en œuvre de solutions data à l'échelle de l'entreprise.",
      "Depuis janvier 2024, je suis <b>Data Engineer / Cloud Engineer (AWS)</b> chez <b>RMC BFM ADS (Altice Media)</b> à Paris. Je construis une infrastructure data scalable, j'optimise les traitements ETL et je livre des solutions cloud-native qui traitent chaque jour des millions de données pour l'analyse média et publicitaire — d'un data warehouse Python qui a remplacé Talend aux pipelines vidéo serverless et à un service de matching d'audience par LLM sur AWS Bedrock.",
      "Auparavant, j'étais <b>Big Data Engineer</b> chez <b>BPCE-SI</b> (Caisse d'Epargne Île-de-France) : construction et maintenance de data lakes Hadoop sur Cloudera, développement de pipelines Spark/Scala et PySpark, et participation à la migration de Cloudera vers Google Cloud Platform en double run.",
      "Mon expertise couvre le <b>Big Data engineering</b>, l'<b>architecture cloud</b>, le <b>développement de pipelines ETL</b>, la <b>gestion de data warehouse</b> et le <b>machine-learning engineering</b>, avec une expérience concrète en vision par ordinateur, NLP, ASR et, plus récemment, en applications LLM."
    ],
    competencies: {
      title: "Compétences principales",
      items: ["Conception et gestion de bases de données", "ETL", "Big Data", "Modélisation de données", "Data Warehousing", "Analyse des données", "Programmation", "Performance et optimisation", "Programmation orientée objet", "Gestion de versions et de code", "Statistiques", "Visualisation des données", "Analyse quantitative", "Machine Learning", "Deep Learning", "Architecture cloud (AWS)", "Applications LLM"]
    },
    soft: {
      title: "Ma façon de travailler",
      items: [
        { name: "Esprit d'analyse et force de proposition", desc: "Analyse rigoureuse, résolution de problèmes et propositions concrètes." },
        { name: "Organisé, structuré et rigoureux", desc: "Un travail documenté, testé et reproductible — du notebook à la production." },
        { name: "Empathie et bon relationnel client", desc: "J'écoute les métiers et les partenaires avant de construire." },
        { name: "Réactif avec un bon sens des priorités", desc: "La production d'abord : incidents traités, puis améliorations." },
        { name: "Capacité d'apprentissage rapide", desc: "Adoption rapide de nouvelles technologies et méthodes." },
        { name: "Communication et travail en équipe", desc: "Communication claire, à l'écrit comme à l'oral, en français et en anglais." },
        { name: "Leadership technique", desc: "Expérience de pilotage d'équipes techniques et de mentorat de développeurs juniors." },
        { name: "Gestion de projet", desc: "Pratique Agile/Scrum, coordination avec les cas d'usage métier et les équipes SI." }
      ]
    }
  },

  experience: {
    title: "Expérience",
    tagline: "Cinq postes, quatre employeurs, France et Maroc",
    gridNote: "La carrière en un coup d'œil — les barres sont les durées réelles ; cliquer sur une barre ouvre le poste.",
    studies: [
      { start: "2018-09", end: "2020-09", label: "Masters — Fès & Paris" }
    ],
    roles: [
      {
        id: "rmc",
        color: "rmc",
        role: "Data Engineer / Cloud Engineer (AWS)",
        org: "RMC BFM ADS (Altice Media)",
        short: "Data / Cloud Engineer",
        place: "Paris, France",
        start: "2024-01",
        end: null,
        period: "01/2024 – présent",
        summary: "Data et cloud engineering pour l'équipe AdTech d'une régie publicitaire TV/radio nationale : exploitation des bases de données, ETL, migration du data warehouse en Python, pipelines média serverless, automatisation publicitaire et pipeline d'intelligence d'audience par LLM sur AWS Bedrock.",
        groups: [
          { title: "Maintenance des bases de données", items: [
            "Suivi des performances des bases de données (AWS Athena, SQL Server, Oracle, PostgreSQL).",
            "Résolution proactive des problèmes de performance, sécurité et fiabilité.",
            "Optimisation des requêtes et des schémas pour améliorer l'efficacité des systèmes.",
            "Traitement des incidents liés aux bases de données."
          ] },
          { title: "Gestion et développement de routines ETL (Talend)", items: [
            "Gestion quotidienne des workflows ETL sur la plateforme Talend.",
            "Debugging, amélioration et optimisation des routines existantes.",
            "Création de nouvelles routines pour répondre aux besoins spécifiques de l'entreprise.",
            "Intégration de techniques avancées (Data Science) pour améliorer la qualité des routines."
          ] },
          { title: "Pilotage de projets Data Warehouse (migration DWH)", items: [
            "Conception et déploiement d'une nouvelle architecture ETL entièrement en Python, remplaçant l'infrastructure legacy Talend.",
            "Gestion de projets et coordination avec les cas d'usage et l'équipe SI ; collaboration avec l'équipe infrastructure pour la création de VM Windows Server.",
            "Développement de 14 modules ETL modulaires (core, db, helpers, tools) pour l'intégration multi-sources (Oracle, PostgreSQL, Salesforce, AWS Athena).",
            "Développement, test et mise en production de nouvelles routines Python.",
            "<b>Réduction de 80 % des temps de traitement</b> grâce à l'élimination des fichiers CSV temporaires et à l'adoption de la sérialisation via pickle.",
            "Implémentation d'un système de logging structuré, de gestion d'erreurs robuste et de chargement incrémental configurable.",
            "Élimination des coûts de licence Talend au profit d'une solution open-source performante et maintenable."
          ] },
          { title: "Plateforme automatisée de transcodage vidéo & génération VAST", items: [
            "Développement d'une solution serverless pour le traitement, la validation et la distribution de contenus publicitaires vidéo.",
            "Création de fonctions AWS Lambda conteneurisées (Docker) orchestrant FFmpeg, OpenCV et MediaInfo pour le transcodage, la vérification des normes BTVS (1920×1080, 50 fps, −24 LUFS) et la correction de durée.",
            "Génération dynamique de balises VAST XML avec intégration S3 et suivi des événements publicitaires.",
            "Déploiement d'API REST sécurisées avec AWS Cognito, Lambda@Edge, API Gateway et CloudFront OAC pour l'authentification et la protection des contenus."
          ] },
          { title: "Système de conversion audio → vidéo avec transcription IA", items: [
            "Automatisation de la création de contenus vidéo à partir de fichiers audio pour les campagnes médias.",
            "Intégration d'AWS Transcribe pour la génération automatique de sous-titres en français.",
            "Création de vidéos MP4 avec logo overlay, QR code dynamique (tracking de campagne) et synchronisation audio/visuelle via FFmpeg.",
            "Stockage et distribution automatisés via S3 avec génération d'URLs publiques sécurisées."
          ] },
          { title: "Automatisation de la facturation publicitaire (AAF)", items: [
            "Développement d'un moteur d'automatisation pour la réconciliation et la validation des montants facturés.",
            "Traitement de factures PDF via AWS Textract (OCR) et extraction intelligente des champs (dates, montants, devises).",
            "Intégration avec les APIs AppNexus (Xandr) et FreeWheel pour la collecte des données de livraison publicitaire.",
            "Validation des chaînes de consentement IAB TCF (RGPD) avec décodage, hachage SHA-256 des IPs et stockage conforme."
          ] },
          { title: "Gestion des placements publicitaires FreeWheel en masse", items: [
            "Orchestration automatisée des campagnes publicitaires sur la plateforme FreeWheel.",
            "Création de placements à partir de fichiers CSV avec ciblage géographique (codes postaux) et segmentation audience.",
            "Gestion des créatifs via l'API v4, rendu multimédia et activation programmatique.",
            "Mise en place de mécanismes de retry et de validation d'état pour garantir la fiabilité."
          ] },
          { title: "Infrastructure cloud & sécurité", items: [
            "Conception d'une architecture AWS sécurisée, scalable et entièrement automatisée.",
            "Utilisation de VPC, NAT Gateway, IAM roles et gestion des secrets via variables d'environnement.",
            "Déploiement via CloudFormation, Terraform, AWS CDK et AWS CLI, avec versioning des fonctions Lambda@Edge ; CI/CD GitHub Actions (OIDC, aucune clé stockée).",
            "Protection des buckets S3 via Origin Access Control (OAC) et cookies sécurisés (HttpOnly, Secure)."
          ] },
          { title: "Pipeline d'analyse des coûts AWS & monitoring CloudWatch", items: [
            "Mise en place d'un système d'observabilité cloud pour l'optimisation des coûts et la traçabilité des opérations.",
            "Extraction, transformation et stockage des logs CloudWatch vers Amazon Athena au format Parquet partitionné.",
            "Analyse de millions d'événements pour identifier les anomalies de consommation et générer des rapports de facturation automatisés.",
            "Intégration avec des outils de reporting HTML et d'alerting par e-mail."
          ] },
          { title: "Pipeline Intelligence Audience & Matching IA (AWS Bedrock)", items: [
            "Conception et déploiement d'un pipeline end-to-end d'audience intelligence CTV pour 3 chaînes (RMC Story, RMC Life, RMC Découverte) : collecte des programmes TV en direct (EPG) → matching automatique → export des segments d'audience vers Mediarithmics (ciblage publicitaire programmatique).",
            "Développement d'un service de matching sémantique par LLM via AWS Bedrock (Claude 3 Haiku / Claude Sonnet 4.5) entre les grilles EPG et le catalogue Replay/catch-up TV (PIXA) — architecture 2 passes : matching strict (score ≥ 80/100) + passe assouplie (score ≥ 60/100), avec scoring gradué 0–100 et raisonnement explicatif généré par le modèle.",
            "Optimisation du prompt engineering : <b>réduction de 82,5 % des tokens</b> via index allégé (~350 caractères/item), batching (5 EPG × 400 assets par appel Bedrock), chunking adaptatif et raffinement automatique des cas ambigus (top-2 scores à moins de 15 points d'écart).",
            "Benchmarking multi-modèles (V1→V4) : <b>taux de matching de 95,1 % avec Claude 3 Haiku vs 55,8 % pour Claude Sonnet 4.5, à coût 92 % inférieur</b> — recommandation et déploiement en production du modèle optimal pour ce use-case.",
            "Optimisation des coûts AWS Bedrock : cache de résultats (−80 %), pré-filtrage temporel (−67 %), parallélisation ThreadPoolExecutor (3 workers) ; étude de migration vers inférence locale (Qwen 2.5, RTX 3060) pour élimination totale des coûts LLM.",
            "Construction des tables Athena partitionnées (epg_programs, epg_serie_mapping, implicit_in_monitoring) via AWS Glue Catalog (awswrangler) ; matching EPG ↔ séries FreeWheel par algorithme 4 phases combinant fuzzy matching et normalisation NLP.",
            "Export des segments d'affinité Implicit vers Mediarithmics (CTV programmatique) avec croisement du consentement RGPD (IAB TCF), génération de fichiers membership CSV et rapports HTML automatisés par e-mail (AWS SES)."
          ] }
        ],
        env: ["Python 3.9+", "AWS Athena", "S3", "Lambda", "Lambda@Edge", "API Gateway", "EC2", "ECS Fargate", "ECR", "Step Functions", "Route 53", "Glue", "Lake Formation", "IAM", "CloudFront", "Cognito", "CloudWatch", "Transcribe", "Textract", "Bedrock", "SES", "SNS", "Transfer Family", "CloudFormation", "Terraform", "CDK", "Docker", "Talend Cloud DI", "Oracle", "PostgreSQL", "SQL Server", "Salesforce", "SFTP", "GitHub Actions", "JIRA", "Confluence", "Windows Server", "CentOS"]
      },
      {
        id: "bpce",
        color: "bpce",
        role: "Big Data Engineer",
        org: "BPCE-SI",
        short: "Big Data Engineer",
        place: "Lille, France",
        start: "2022-08",
        end: "2024-01",
        period: "08/2022 – 01/2024",
        context: "Conception, développement et gestion des pipelines de Big Data de toutes les divisions Caisse d'Epargne Île-de-France.",
        groups: [
          { title: "Tâches", items: [
            "Renforcement de l'équipe sur les technologies Big Data, en particulier sur Cloudera.",
            "Développement, maintenance et automatisation de pipelines ETL pour mettre à jour le Datalake (cluster Hadoop ; Hive, HDFS…) de BPCE-SI à partir de diverses sources, y compris une base de données Oracle.",
            "Collaboration étroite avec des data scientists et des analystes pour identifier des informations basées sur les données afin d'éclairer les décisions commerciales.",
            "Garantie de la qualité et de l'exactitude des données par le développement et la mise en œuvre de politiques de gouvernance des données.",
            "Automatisation des pipelines de données en utilisant Python et Shell, avec des développements de nouvelles fonctionnalités en Spark/Scala ou PySpark/Python.",
            "Contribution à la formalisation des plans de tests, exécution des tests unitaires, résolution d'anomalies pendant les phases d'intégration, packaging et déploiement en pré-production et production.",
            "Surveillance de la production (le Run), maintenance du système actuel et mise en œuvre de solutions de reprise en cas d'incident.",
            "Optimisation des solutions Big Data en termes de performances, de scalabilité et de rentabilité.",
            "Élaboration de documents de concept technique et de spécifications conformes aux meilleures pratiques et normes sur Confluence.",
            "Intégration de la migration de Cloudera vers GCP avec un double RUN.",
            "Travail au sein d'une équipe agile en appliquant Scrum et le développement agile."
          ] }
        ],
        result: "Amélioration significative de la disponibilité des données, réduction des temps de traitement, augmentation de la qualité des données et réduction des coûts d'infrastructure.",
        env: ["Unix/Linux", "Shell", "Python", "Jupyter", "Anaconda", "Cloudera", "Hadoop", "Hive", "HDFS", "Spark", "Scala", "PySpark", "SQL", "PL/SQL", "Oracle", "GCP", "BigQuery", "VTOM", "CI/CD", "Git", "Bitbucket", "JIRA"]
      },
      {
        id: "imperium",
        color: "imperium",
        role: "R&D Data Engineer / Machine Learning Engineer",
        org: "IMPERIUM",
        short: "R&D Data / ML Engineer",
        place: "Casablanca, Maroc",
        start: "2021-09",
        end: "2022-08",
        period: "09/2021 – 08/2022",
        context: "Mise en production de solutions d'IA dans le domaine du multimédia, sur des données non structurées ou semi-structurées, avec gestion des ressources et automatisation.",
        constraints: "Limitation des ressources matérielles, impliquant un recours fréquent au CPU plutôt qu'aux GPU ; gestion délicate d'une seule carte graphique sur un serveur.",
        groups: [
          { title: "Mission 1 — Modernisation de l'infrastructure", items: [
            "Mise en œuvre de microservices pour faciliter l'intégration de modèles d'IA encapsulés dans des images Docker.",
            "Développement de workflows ETL avec Python, impliquant la consommation de REST APIs pour intégrer des modèles d'IA."
          ] },
          { title: "Mission 2 — Structuration du pipeline de training", items: [
            "Conversion d'un pipeline de training depuis des fichiers Jupyter vers un projet bien structuré, en respectant les normes de POO.",
            "Intégration de fonctionnalités de multiprocessing, multithreading et parallélisation GPU pour accélérer le processus de prédiction des modèles.",
            "Automatisation du déploiement en production à l'aide d'Airflow et Kubernetes, assurant la gestion efficace des conteneurs Docker."
          ] },
          { title: "Mission 3 — Applications desktop", items: [
            "Création d'applications desktop avec PyQt5 pour une utilisation interne, améliorant l'expérience utilisateur et l'efficacité opérationnelle."
          ] },
          { title: "Mission 4 — Web mining end-to-end des sites de news", items: [
            "Élaboration d'une architecture microservices adaptée, en identifiant les composants nécessaires pour la collecte, le traitement et le stockage des données, tout en garantissant la scalabilité et la flexibilité du système.",
            "Implémentation d'APIs distinctes pour chaque étape : scraping (Scrapy, Requests, Selenium, BeautifulSoup…), crawling (test d'existence MD5), transformation (readability) et stockage (PostgreSQL) — services modulaires et indépendants.",
            "Mécanismes de gestion des erreurs pour traiter les interruptions ou modifications de structure des sites web, assurant une collecte robuste et fiable.",
            "Planification cyclique de chaque traitement batch, garantissant une mise à jour régulière des données conformément aux besoins du client.",
            "Fonctionnalités de surveillance pour détecter les problèmes, et plan de maintenance proactive pour assurer la stabilité du système sur le long terme."
          ] }
        ],
        result: "Une structuration efficace du pipeline de training. L'implémentation du multiprocessing pour les prédictions a permis d'atteindre un quasi-temps réel, avec des batchs s'exécutant de manière cyclique sans interruption malgré les ressources limitées.",
        env: ["Unix/Linux", "Python", "Jupyter", "Java (Eclipse)", "Docker", "Docker Compose", "Kubernetes", "MySQL", "PostgreSQL", "SQL Server", "Elasticsearch", "Kibana", "Airflow", "Slack"]
      },
      {
        id: "tw-ml",
        color: "3wml",
        role: "Développeur ML / IA",
        org: "3W Media — Imperium",
        short: "Développeur ML / IA",
        place: "Casablanca, Maroc",
        start: "2020-08",
        end: "2021-09",
        period: "08/2020 – 09/2021",
        groups: [
          { title: "Projet 1 — Transcription", items: [
            "Transcription automatisée d'un discours en contenu textuel, avec une reconnaissance vocale hors ligne et des modèles pré-entraînés pour 17 langues et dialectes — arabe, français, anglais…",
            "Environnement : Python (Jupyter), Docker, multiprocessing, cronjob, Elasticsearch."
          ] },
          { title: "Projet 2 — Identification de spots publicitaires par empreinte audio", items: [
            "Solution de reconnaissance audio appliquée aux spots publicitaires : localiser des instances de publicités TV ou radio connues dans une archive d'émissions enregistrées (ou d'autres enregistrements longs comme le flux radio) à l'aide de l'empreinte audio basée sur Landmark.",
            "Environnement : Python (Jupyter), Docker, multiprocessing, NumPy, pydub, MySQL."
          ] },
          { title: "Projet 3 — Détection du genre et du locuteur à partir de la parole (ASR)", items: [
            "Système de détection automatique de la parole et du genre pour la surveillance à grande échelle des flux audiovisuels bruts. Les estimations quantitatives du temps de parole des femmes décrivent l'évolution de l'égalité des sexes et permettent aux chaînes TV et stations radio de la surveiller dans leurs émissions.",
            "Environnement : Python (Jupyter), TensorFlow, Keras, KerasTuner, Docker, Kubernetes, Elasticsearch, API RESTful."
          ] },
          { title: "Projet 4 — Réseaux sociaux : détection de sujets d'actualité et analyse de sentiment (Maroc)", items: [
            "Analyse de grands ensembles de données hétérogènes (texte, données tabulaires, documents) ; extraction en temps réel de données non structurées — une centaine d'articles de sources multiples, de comportements variés et de formats différents (textes, graphiques, tableaux) — traitements Big Data.",
            "Analyse des données et conception de la base ; développement et prototypage sur Jupyter avec les packages IA/Data Science Python.",
            "Entraînement de modèles pour la classification des sentiments et la détection de sujets d'actualité sur des énoncés en français (commentaires/publications).",
            "Configuration et déploiement de pods Kubernetes avec des configs YAML ; documentation et formation.",
            "Environnement : Python 3.8, API Twitter, Scrapy, NLTK, scikit-learn, word2vec, BoW, TF-IDF, BERTopic, Docker, PostgreSQL."
          ] },
          { title: "Projet 5 — Face AI", items: [
            "Pipeline end-to-end de reconnaissance faciale et d'analyse des attributs (âge, genre, émotion, origine) en Python — cadre hybride enveloppant des modèles pré-entraînés de l'état de l'art : VGG-Face, Google FaceNet, OpenFace, Facebook DeepFace, DeepID, ArcFace, Dlib et SFace.",
            "Environnement : Python (Jupyter), TensorFlow, Keras, Docker, multiprocessing, parallélisation GPU, cronjob, Elasticsearch."
          ] },
          { title: "Projet 6 — Dictionnaire multilingue", items: [
            "Une alternative au dictionnaire alphabétique où la liste des mots est groupée selon leur signification et selon des hiérarchies structurelles familières.",
            "Environnement : Python (Jupyter), Docker, SQL Server, Solr, WordNet (OMW)."
          ] }
        ],
        env: ["Python", "TensorFlow", "Keras", "PyTorch", "OpenCV", "NLTK", "scikit-learn", "BERTopic", "Scrapy", "API Twitter", "Flask", "Docker", "Kubernetes", "Elasticsearch", "Solr", "MySQL", "PostgreSQL", "SQL Server"]
      },
      {
        id: "tw-ds",
        color: "3wds",
        role: "Data Scientist",
        org: "3W Media — Imperium",
        short: "Data Scientist",
        place: "Casablanca, Maroc",
        start: "2020-03",
        end: "2020-08",
        period: "03/2020 – 08/2020",
        context: "Détection et reconnaissance des objets (marque, logo, forme…) dans les écrans publicitaires sur un flux TV, les panneaux publicitaires et les journaux.",
        groups: [
          { title: "Tâches", items: [
            "Étude comparative entre les algorithmes d'état de l'art de détection d'objets (YOLO, RetinaNet, Faster R-CNN, Mask R-CNN, Cascade Mask R-CNN…).",
            "Pipeline end-to-end en Python, du scraping des données au déploiement en production.",
            "Scraping de données (images, vidéos) à partir des médias sociaux ; pipeline de nettoyage (suppression des images dupliquées).",
            "Élaboration d'une nouvelle stratégie d'augmentation des données pour la détection d'objets.",
            "Formation de l'équipe d'étiquetage.",
            "Entraînement de modèles pour la détection d'objets et la segmentation d'instance.",
            "Déploiement d'une API Flask pour consommer les modèles."
          ] }
        ],
        env: ["Unix/Linux (CPU-GPU)", "Python", "Jupyter", "VS Code", "PyTorch", "Detectron2", "RetinaNet", "Faster R-CNN", "Mask R-CNN", "Cascade Mask R-CNN", "OpenCV", "Docker", "Flask", "Selenium"]
      }
    ]
  },

  projects: {
    title: "Projets",
    tagline: "Travaux professionnels décrits au niveau du CV, plus projets personnels et open source",
    filters: [
      { id: "all", label: "Tous" },
      { id: "adtech", label: "AdTech & Cloud" },
      { id: "data", label: "Data engineering" },
      { id: "ml", label: "ML & IA" },
      { id: "oss", label: "Perso & open source" }
    ],
    items: [
      {
        id: "audience-intelligence", cats: ["adtech", "ml", "data"],
        org: "RMC BFM ADS (Altice Media) · 2025 – 2026",
        title: "Audience Intelligence — EPG → matching LLM → segments CTV",
        summary: "Pipeline complet qui collecte les grilles TV en direct, rapproche les programmes du catalogue replay avec Claude sur AWS Bedrock, et exporte des segments d'audience Implicit vers la DMP Mediarithmics.",
        stack: ["AWS Bedrock", "Claude 3 Haiku", "Athena", "Glue", "awswrangler", "SES", "ECS Fargate", "Terraform", "Node.js", "pytest"],
        sections: [
          { title: "Ce que ça fait", items: [
            "Collecte l'EPG de RMC Story, RMC Life et RMC Découverte, rapproche chaque programme du catalogue de séries FreeWheel et de l'index Replay, puis construit et envoie les segments d'audience vers Mediarithmics pour le ciblage CTV programmatique.",
            "Second flux : reconstruit les <i>parcours de visionnage</i> CTV à partir des appels publicitaires FreeWheel et les envoie à la DMP au format activité (BFM TV, RMC Découverte, RMC Story, RMC Life × Samsung / LG / TCL / Android TV / Apple TV).",
            "Consentement IAB TCF décodé par la bibliothèque officielle IAB via un petit sidecar Node, déployé sur ECS Fargate Spot pour environ 3 $/mois ; chaque run est journalisé en local et dans CloudWatch."
          ] },
          { title: "Points techniques", items: [
            "Matching LLM en 2 passes (strict ≥ 80, assoupli ≥ 60) avec scoring gradué et raisonnement écrit par le modèle ; cas ambigus raffinés automatiquement.",
            "−82,5 % de tokens grâce à un index compact, au batching et au chunking adaptatif ; cache de résultats (−80 %) et pré-filtrage temporel (−67 %) sur les coûts Bedrock.",
            "Benchmark V1→V4 : 95,1 % de matching avec Claude 3 Haiku contre 55,8 % avec Claude Sonnet 4.5, à coût 92 % inférieur.",
            "195 tests automatisés, CI GitHub Actions, infrastructure Terraform ; migration progressive des jobs legacy (VM Windows) vers AWS."
          ] }
        ],
        role: "Auteur et mainteneur (équipe AdTech)."
      },
      {
        id: "pytalendshift", cats: ["data"],
        org: "RMC BFM ADS (Altice Media) · 2024 – 2026",
        title: "Modernisation de l'ETL — Talend → data warehouse Python",
        summary: "Remplacement de l'ETL Talend legacy par une architecture Python modulaire alimentant le data warehouse PostgreSQL depuis Oracle, Salesforce et Athena — 80 % plus rapide, sans licence.",
        stack: ["Python 3.9+", "pandas", "pickle", "Oracle", "PostgreSQL", "Salesforce", "AWS Athena", "Planificateur Windows", "Alertes SMTP"],
        sections: [
          { title: "Problème", items: [
            "Les jobs Talend étaient trop complexes et redondants : requêtes pour de simples renommages, fichiers CSV temporaires relus à chaque étape, tables entièrement chargées par un job puis relues par le suivant."
          ] },
          { title: "Architecture", items: [
            "14 modules spécialisés (core, db, helpers, tools) et plus de 15 routines numérotées (référentiels, indicateurs CA, spots, planning, imports Salesforce, imports plats dynamiques).",
            "Mapping direct source → pandas → destination ; la sérialisation pickle conserve les types de colonnes et supprime la retransformation.",
            "Logging structuré, alertes e-mail sur anomalie, chargement incrémental configurable avec deltas de type CDC."
          ] },
          { title: "Résultats métier", items: [
            "Réduction de 80 % du temps de traitement ; traitement quotidien passé d'environ 8 h à 1 h 30.",
            "Élimination de plus de 50 K€ de licences Talend par an.",
            "Qualité de données à 99,95 % ; maintenance facilitée dans l'écosystème Python open source."
          ] }
        ],
        role: "Conçu, développé et exploité en production."
      },
      {
        id: "vast-platform", cats: ["adtech"],
        org: "RMC BFM ADS (Altice Media) · 2024 – 2025",
        title: "Plateforme de transcodage vidéo & génération VAST (TV segmentée)",
        summary: "Pipeline serverless permettant aux éditeurs de livrer des créatifs de TV adressable : transcodage Lambda conteneurisé avec FFmpeg, contrôle des normes BTVS, génération VAST XML et interface d'upload sécurisée.",
        stack: ["AWS Lambda", "Docker", "FFmpeg", "OpenCV", "MediaInfo", "S3", "DynamoDB", "API Gateway", "CloudFront OAC", "Cognito", "Lambda@Edge", "API FreeWheel"],
        sections: [
          { title: "Mise en œuvre", items: [
            "Fonctions Lambda conteneurisées exécutant FFmpeg, OpenCV et MediaInfo pour le transcodage, la validation qualité, la correction de durée et la normalisation des formats.",
            "Conformité broadcast BTVS : 1920×1080, 50 fps, loudness −24 LUFS et contrôle du true-peak.",
            "Création dynamique de balises VAST conformes IAB avec intégration S3 ; URLs d'upload présignées et base de provisioning des créatifs livrés.",
            "Front web d'upload et de configuration ; authentification Cognito, Lambda@Edge et CloudFront OAC pour protéger les contenus ; intégration de l'API FreeWheel pour la gestion des créatifs.",
            "Suivi des événements en temps réel pour les métriques de campagne ; pipeline de logs du répondeur VAST (type d'appareil, ID éditeur, origine) vers Athena."
          ] },
          { title: "Impact", items: [
            "Temps de traitement vidéo réduit de 75 % grâce à l'exécution serverless parallèle.",
            "99,9 % de disponibilité avec mise à l'échelle automatique et tolérance aux pannes.",
            "Coûts opérationnels 60 % inférieurs à une solution sur serveurs ; diffusion en temps réel des contenus publicitaires sur plusieurs canaux."
          ] }
        ],
        role: "Auteur — architecture, code, infrastructure et exploitation."
      },
      {
        id: "audio-to-video", cats: ["adtech", "ml"],
        org: "RMC BFM ADS (Altice Media) · 2024",
        title: "Conversion audio → vidéo avec transcription IA",
        summary: "Transforme des spots radio (WAV) en vidéos MP4 sous-titrées avec logo et QR code de campagne, grâce à AWS Transcribe et FFmpeg.",
        stack: ["AWS Transcribe", "FFmpeg", "Python", "S3", "Lambda", "Génération de QR code"],
        sections: [
          { title: "Fonctionnalités", items: [
            "Reconnaissance vocale française avec AWS Transcribe, rendue en sous-titres synchronisés.",
            "Génération automatique de MP4 avec logo, carton de titre et QR code dynamique pour le tracking de campagne.",
            "Stockage S3 automatisé avec URLs sécurisées pour une diffusion multi-plateforme ; validation de la synchronisation audio/vidéo."
          ] },
          { title: "Résultat", items: [
            "Temps de production vidéo manuel réduit de 90 % ; environ 95 % de précision de transcription sur du contenu français ; passage à l'échelle sur de nombreuses campagnes simultanées."
          ] }
        ],
        role: "Auteur."
      },
      {
        id: "aaf", cats: ["adtech", "data"],
        org: "RMC BFM ADS (Altice Media) · 2024 – 2025",
        title: "Automatisation de la facturation publicitaire (AAF)",
        summary: "Réconcilie les montants déclarés avec les appels à facturation : OCR sur factures PDF, données de livraison via les APIs Xandr/AppNexus et FreeWheel, et validation du consentement RGPD.",
        stack: ["AWS Textract", "API AppNexus / Xandr", "API FreeWheel", "Athena", "S3", "Lambda", "IAB TCF", "SHA-256"],
        sections: [
          { title: "Ce que ça fait", items: [
            "Lit les factures PDF avec Textract et en extrait dates, montants et devises selon une configuration de mapping par fournisseur.",
            "Collecte les données de livraison via les APIs AppNexus et FreeWheel et les réconcilie avec les montants déclarés dans une table de mapping Athena.",
            "Décode les chaînes de consentement IAB TCF, hache les adresses IP (SHA-256) et stocke les résultats sous une forme conforme."
          ] }
        ],
        role: "Auteur."
      },
      {
        id: "yieldai-forecasting", cats: ["data", "ml"],
        org: "RMC BFM ADS (Altice Media) · 2026",
        title: "YieldAI — prévision hebdomadaire d'inventaire publicitaire sur ECS",
        summary: "Prévision hebdomadaire des ad requests et de la part d'audience, exécutée comme une chaîne Step Functions de tâches ECS Fargate avec Athena comme couche data, déployée avec Terraform et GitHub Actions.",
        stack: ["Python 3.11", "LightGBM", "Holt / ARIMA", "ECS Fargate", "Step Functions", "EventBridge", "Athena", "S3", "SNS", "Terraform", "GitHub Actions (OIDC)", "uv", "ruff"],
        sections: [
          { title: "Pipeline", items: [
            "Ingest → (train le premier lundi du mois) → predict → backtest → monitor, chaque étape étant une tâche ECS lancée seulement si la précédente s'est terminée en code 0 ; alerte SNS en cas d'échec.",
            "Modèles par environnement et section de site (LightGBM, Holt, ARIMA) ; artefacts sur S3 ; CSV de prédiction consommés par les outils en aval."
          ] },
          { title: "Ma contribution", items: [
            "Industrialisation : infrastructure AWS (audit et déploiement Terraform, organisation des buckets S3, workgroups et quotas Athena), CI/CD avec OIDC, images de conteneurs, migration des environnements et rejeu de runs end-to-end multi-mois sur données réelles.",
            "Runs de production et analyse d'incidents ; correctifs prouvés sur données réelles (parité du fill rate, suivi des model runs, rapports e-mail multi-destinataires)."
          ] }
        ],
        role: "Infrastructure, déploiement, CI/CD et exploitation — modèles de prévision conçus par un cabinet partenaire."
      },
      {
        id: "sales-copilot", cats: ["adtech", "ml"],
        org: "RMC BFM ADS (Altice Media) · 2026",
        title: "Sales Copilot — du brief d'agence à la recommandation chiffrée",
        summary: "On colle un brief d'agence média ; Claude sur Bedrock en extrait les critères, rapprochés des segments DMP, confrontés aux avails prévus, puis transformés en faisabilité budget/CPM et mix recommandé.",
        stack: ["Python (http.server stdlib)", "AWS Bedrock", "Claude Haiku 4.5", "Athena", "Segments Mediarithmics", "EC2", "Rôles IAM"],
        sections: [
          { title: "Flux", items: [
            "Brief → extraction de l'annonceur, de la cible, du budget, de la période et des environnements (LLM avec repli heuristique, toujours éditable).",
            "Cible → rapprochement avec 538 segments DMP, validé par le commercial.",
            "Avails → ad requests prévues × part d'invendu sur les segments, la période et les environnements choisis.",
            "Reco → faisabilité, mix par environnement, impressions livrables et courbe jour par jour."
          ] },
          { title: "Notes", items: [
            "Aucun framework web tiers ; interface éditoriale clair/sombre ; en production, credentials uniquement via le rôle IAM de l'instance."
          ] }
        ],
        role: "Auteur (prototype V1)."
      },
      {
        id: "may", cats: ["adtech"],
        org: "RMC BFM ADS (Altice Media) · 2026",
        title: "MAY — passerelle à policy engine entre un agent LLM et l'adserver",
        summary: "Une API qui permet à l'agent LLM d'un partenaire de créer et piloter des campagnes de gré à gré sur l'adserver SpringServe sans jamais détenir nos credentials — un policy engine décide de ce qui peut passer.",
        stack: ["FastAPI", "Caddy (TLS)", "EC2", "AWS CDK", "Journal d'audit S3", "CloudWatch", "pytest"],
        sections: [
          { title: "Conception", items: [
            "Le partenaire voit une URL HTTPS stable, une clé d'API et un contrat métier restreint ; jamais une IP, un nom AWS ou un identifiant adserver.",
            "Chaque écriture passe par un policy engine — l'unique garde-fou entre un LLM tiers et un adserver qui facture ; kill switch et au plus une alerte par heure.",
            "Journal d'audit dans S3 ; les campagnes apparaissent dans la console de l'adserver sous un demand partner dédié, nommées à la convention maison."
          ] }
        ],
        role: "Infrastructure, déploiement, CI et documentation — logique métier (service, mapper, client) par un collègue."
      },
      {
        id: "consent-etl", cats: ["data", "adtech"],
        org: "RMC BFM ADS (Altice Media) · 2025 – 2026",
        title: "ETL consentements FreeWheel avec récupération auto-réparatrice sur 90 jours",
        summary: "Job quotidien qui décode le consentement IAB TCF des impressions FreeWheel vers Athena — et ré-audite les 90 derniers jours à chaque run, parce que les fichiers source arrivent parfois des jours plus tard.",
        stack: ["Python", "Athena", "Glue", "S3", "IAB TCF", "SHA-256", "Planificateur Windows"],
        sections: [
          { title: "Le problème", items: [
            "Les fichiers Parquet source étaient livrés jusqu'à 43 jours après la date de l'événement ; un job à J+1 produisait silencieusement des partitions tronquées qu'un simple test « le dossier existe » ne re-détectait jamais."
          ] },
          { title: "La solution", items: [
            "Détection en deux étages, « le moins cher d'abord » : une empreinte S3 (nombre de fichiers, taille totale, date de modification max) écarte plus de 95 % des dates sans aucun coût Athena ; seules les dates qui ont dérivé sont re-requêtées et réparées.",
            "Watermarks, reprise après interruption, hachage des IP et sortie partitionnée par date."
          ] }
        ],
        role: "Auteur."
      },
      {
        id: "visit-analyzer", cats: ["adtech"],
        org: "RMC BFM ADS (Altice Media) · 2026",
        title: "Visit Analyzer — consentement TCF en temps réel dans le flux d'activité de la DMP",
        summary: "Plugin Activity Analyzer mediarithmics en TypeScript qui décode les chaînes IAB TCF dans le flux et émet des événements $set_user_choice, pour un suivi correct du consentement sur box opérateur et smart TV.",
        stack: ["TypeScript 5", "Node ≥ 18", "@iabtcf/core", "SDK plugins mediarithmics", "vitest"],
        sections: [
          { title: "Fonctionnement", items: [
            "Résout le canal, trie les événements du plus ancien au plus récent, déduplique les chaînes de consentement, décode chaque chaîne distincte une seule fois avec la bibliothèque officielle IAB, la classe positive ou négative pour les vendors et finalités requis, et injecte au plus deux événements à la bonne position.",
            "60 tests : unitaires, bot-à-bot et golden entrée → sortie."
          ] }
        ],
        role: "Auteur."
      },
      {
        id: "lake-formation", cats: ["data", "adtech"],
        org: "RMC BFM ADS (Altice Media) · 2026",
        title: "Partage de données inter-comptes gouverné avec Lake Formation",
        summary: "Partage en lecture seule, au niveau colonne, de vues Athena du compte AdTech vers des comptes partenaires — des grants Lake Formation à la place des bucket policies, chaque accès audité dans CloudTrail.",
        stack: ["AWS Lake Formation", "Athena", "Glue Catalog", "S3", "CloudTrail", "IAM"],
        sections: [
          { title: "Conception", items: [
            "Le rôle de service Lake Formation lit S3 à la place du partenaire ; les partenaires n'ont jamais d'accès S3 direct.",
            "Un grant par partenaire, par base/table/colonne ; procédures de rollback et de validation ; post-mortem d'un incident de juin 2026 documenté."
          ] }
        ],
        role: "Auteur."
      },
      {
        id: "lat-sftp", cats: ["adtech", "data"],
        org: "RMC BFM ADS (Altice Media) · 2025 – 2026",
        title: "Linear Ad Tracking — échange SFTP opérateurs et segments FreeWheel",
        summary: "Un point d'accès SFTP AWS Transfer Family géré par CloudFormation pour les opérateurs télécom, un extract quotidien Oracle → CSV → S3, et un job qui transforme les retours d'exposition en segments d'audience FreeWheel.",
        stack: ["AWS Transfer Family", "Fournisseur d'identité Lambda", "CloudFormation", "S3", "Oracle", "Python", "FreeWheel AIM", "pytest"],
        sections: [
          { title: "Composants", items: [
            "Un serveur SFTP partagé avec un utilisateur par opérateur, authentification par mot de passe via un fournisseur d'identité Lambda, et préfixes input/output dédiés.",
            "ETL quotidien extrayant le log publicitaire d'Oracle en CSV pour chaque opérateur ; investigations coûts et sécurité (IP élastique, analyse d'attaques SFTP).",
            "Job LAT : agrège les expositions foyers renvoyées par les opérateurs, attribue des groupes de segments et envoie taxonomie et membership à FreeWheel (modes ajout quotidien / remplacement pour contrôle de campagne) — 59 tests."
          ] }
        ],
        role: "Auteur."
      },
      {
        id: "planning-monitor", cats: ["adtech"],
        org: "RMC BFM ADS (Altice Media) · 2025",
        title: "Moniteur de planning linéaire FreeWheel",
        summary: "Vérifie chaque jour que les diffusions du lendemain sont bien enregistrées dans FreeWheel pour trois chaînes TV et déclenche des alertes SMS et e-mail en cas d'anomalie.",
        stack: ["Python", "API FreeWheel", "AWS SNS", "AWS SES", "CloudFormation"],
        sections: [
          { title: "Cas d'usage", items: [
            "Détecte les timeouts ou défaillances de la synchronisation MediaPilot → FreeWheel, envoie des alertes critiques et alimente le reporting de fiabilité."
          ] }
        ],
        role: "Auteur (en production)."
      },
      {
        id: "fw-bulk", cats: ["adtech"],
        org: "RMC BFM ADS (Altice Media) · 2024 – 2025",
        title: "Placements FreeWheel en masse & ciblage météo",
        summary: "Création en masse de placements, insertion orders et créatifs à partir de CSV, plus une variante qui pilote les placements selon les conditions OpenWeatherMap en temps réel.",
        stack: ["Python", "API FreeWheel v4", "OpenWeatherMap", "Athena", "awswrangler", "Rapports e-mail"],
        sections: [
          { title: "Fonctionnalités", items: [
            "Workflow complet de la création de campagne à l'activation, avec ciblage géographique par code postal et segmentation d'audience.",
            "Retry et validation d'état pour la fiabilité ; historique des runs stocké dans Athena ; notifications e-mail.",
            "Variante météo : récupère les conditions actuelles et met à jour le ciblage des placements en conséquence."
          ] }
        ],
        role: "Auteur."
      },
      {
        id: "aws-cost", cats: ["data", "adtech"],
        org: "RMC BFM ADS (Altice Media) · 2025",
        title: "Analyse des coûts AWS & analytics des logs CloudWatch",
        summary: "Extrait les logs Lambda de CloudWatch vers du Parquet partitionné sur S3 et Athena pour analyser des millions d'événements, repérer les anomalies de consommation et produire des rapports de facturation.",
        stack: ["CloudWatch Logs", "Athena", "Parquet", "S3", "Alertes Lambda", "Python"],
        sections: [
          { title: "Détails", items: [
            "Parse les logs de requêtes (ID éditeur, type d'appareil, origine, en-têtes) dans une table Athena ; recherches sur période étendue et par clés spécifiques.",
            "Reporting HTML et alerting e-mail ; fonction Lambda d'alerte sur anomalie."
          ] }
        ],
        role: "Auteur."
      },
      {
        id: "signage-extension", cats: ["adtech"],
        org: "RMC BFM ADS (Altice Media) · 2025",
        title: "Automatisation d'affichage dynamique — extension Chrome",
        summary: "Une extension Manifest V3 qui remplace des scripts PowerShell/DevTools fragiles : connexion automatique multi-sites, défilement fluide et contrôle en temps réel pour les écrans des bureaux.",
        stack: ["Extension Chrome (MV3)", "JavaScript", "Service worker"],
        sections: [
          { title: "Pourquoi", items: [
            "Les scripts précédents souffraient de connexions DevTools instables, de problèmes de pare-feu et de redémarrages fréquents ; l'extension tourne nativement dans le navigateur avec une interface de contrôle moderne."
          ] }
        ],
        role: "Auteur."
      },
      {
        id: "vpc-study", cats: ["adtech"],
        org: "RMC BFM ADS (Altice Media) · 2026",
        title: "VPC, sous-réseaux & NAT Gateway — étude d'architecture",
        summary: "Audit en lecture seule de l'infrastructure réelle, confronté à la documentation officielle AWS, pour décider si un VPC custom avec sous-réseaux privés et NAT apporte un bénéfice aux flux S3 ↔ Lambda ↔ EC2.",
        stack: ["AWS VPC", "VPC endpoints", "NAT Gateway", "Lambda", "EC2", "AWS CLI"],
        sections: [
          { title: "Conclusion", items: [
            "Comparaison de coûts (~14 € vs +60–90 €/mois), deux idées reçues corrigées à partir de la documentation, recommandation : endpoints gateway d'abord, puis sous-réseaux privés là où EC2 le justifie."
          ] }
        ],
        role: "Auteur."
      },
      {
        id: "hadoop-gcp", cats: ["data"],
        org: "BPCE-SI · 2022 – 2024",
        title: "Data lake Hadoop d'entreprise & migration Cloudera → GCP",
        summary: "Pipelines Big Data pour toutes les divisions de la Caisse d'Epargne Île-de-France sur un cluster Cloudera, et migration en double run vers Google Cloud (BigQuery).",
        stack: ["Cloudera", "Hadoop", "HDFS", "Hive", "Spark", "Scala", "PySpark", "Oracle", "GCP", "BigQuery", "VTOM"],
        sections: [
          { title: "Périmètre technique", items: [
            "Ingestion automatisée depuis les bases Oracle vers le data lake Hadoop (HDFS, Hive) ; traitements haute performance en Spark/Scala et PySpark.",
            "Politiques de gouvernance et monitoring des données ; documents de concept technique sur Confluence.",
            "Migration en double run de Cloudera vers Google Cloud Platform."
          ] },
          { title: "Impact", items: [
            "Disponibilité des données passée de 85 % à 99,5 %.",
            "Temps de traitement réduits de 65 % par optimisation.",
            "Coûts d'infrastructure en baisse de 40 % après migration ; frameworks de validation automatisés pour la qualité des données."
          ] }
        ],
        role: "Big Data Engineer au sein de l'équipe."
      },
      {
        id: "object-detection", cats: ["ml"],
        org: "3W Media — Imperium · 2020",
        title: "Détection d'objets & reconnaissance de marques dans les médias publicitaires",
        summary: "Détection à l'état de l'art de logos et publicités sur flux TV, panneaux et presse, du scraping à une API Flask en production.",
        stack: ["PyTorch", "Detectron2", "YOLO", "RetinaNet", "Faster R-CNN", "Mask R-CNN", "OpenCV", "Flask", "Docker", "Selenium"],
        sections: [
          { title: "Travail technique", items: [
            "Évaluation comparative de YOLO, RetinaNet, Faster R-CNN, Mask R-CNN et Cascade Mask R-CNN.",
            "Pipeline end-to-end du scraping des réseaux sociaux au déploiement ; nettoyage des doublons ; nouvelle stratégie d'augmentation pour la détection.",
            "Entraînement sur mesure pour la détection et la segmentation d'instance ; API REST Flask pour l'inférence en temps réel."
          ] },
          { title: "Résultats", items: [
            "94,2 % de mAP sur le jeu de données maison ; 45 ms par image sur GPU.",
            "Déployé en production pour plus de 10 000 requêtes par jour ; équipe de 5 annotateurs formée pour un étiquetage cohérent."
          ] }
        ]
      },
      {
        id: "social-nlp", cats: ["ml"],
        org: "3W Media — Imperium · 2020 – 2021",
        title: "Plateforme d'intelligence sociale & analyse de sentiment",
        summary: "Détection de sujets et analyse de sentiment en français sur l'actualité et les réseaux sociaux marocains, traitées à l'échelle et servies par un tableau de bord en temps réel.",
        stack: ["BERT / BERTopic", "NLTK", "scikit-learn", "word2vec", "TF-IDF", "API Twitter", "Scrapy", "PostgreSQL", "Kubernetes"],
        sections: [
          { title: "Techniques", items: [
            "Détection de sujets à base de BERT pour identifier les tendances en temps réel ; classifieur de sentiment français sur mesure.",
            "Traitement en temps réel de centaines d'articles par jour issus de sources multiples ; représentations Word2Vec, TF-IDF et sac de mots.",
            "Déploiement Kubernetes avec mise à l'échelle automatique."
          ] },
          { title: "Résultats", items: [
            "Plus de 50 000 publications traitées par jour avec 95 % de disponibilité ; 89–91 % de précision en classification de sentiment français ; latence de détection de sujet sous 2 secondes ; tableau de bord des tendances en temps réel."
          ] }
        ]
      },
      {
        id: "face-ai", cats: ["ml"],
        org: "3W Media — Imperium · 2021",
        title: "Reconnaissance faciale multi-modèles & analyse d'attributs",
        summary: "Cadre hybride enveloppant VGG-Face, FaceNet, OpenFace, DeepFace, DeepID, ArcFace, Dlib et SFace pour la reconnaissance et l'analyse d'âge, genre, émotion et origine.",
        stack: ["TensorFlow", "Keras", "OpenCV", "Dlib", "GPU", "Elasticsearch", "Docker"],
        sections: [
          { title: "Mise en œuvre", items: [
            "Parallélisation GPU et multiprocessing pour l'inférence en temps réel ; conteneurisé, planifié par cron ; embeddings faciaux stockés et recherchés dans Elasticsearch."
          ] },
          { title: "Résultats", items: [
            "99,1 % de précision de reconnaissance sur LFW ; plus de 1 000 visages par minute avec accélération GPU ; 0,1 % de faux positifs grâce aux ensembles ; déployé sur plusieurs environnements de production."
          ] }
        ]
      },
      {
        id: "speech-audio", cats: ["ml"],
        org: "3W Media — Imperium · 2020 – 2021",
        title: "IA parole & audio — transcription, empreinte publicitaire, détection du genre",
        summary: "Trois systèmes audio pour le monitoring média : transcription hors ligne en 17 langues, empreinte audio Landmark pour retrouver des spots connus dans les archives, et détection locuteur/genre pour mesurer le temps de parole.",
        stack: ["Python", "TensorFlow", "Keras", "KerasTuner", "NumPy", "pydub", "Docker", "Kubernetes", "Elasticsearch", "MySQL"],
        sections: [
          { title: "Systèmes", items: [
            "Transcription : reconnaissance hors ligne avec des modèles pré-entraînés pour 17 langues et dialectes (arabe, français, anglais…), multiprocessing, planification cron, indexation Elasticsearch.",
            "Empreinte audio : localisation d'instances de publicités TV/radio connues dans de longs enregistrements grâce aux empreintes Landmark.",
            "Détection du genre (ASR) : détection automatique de la parole et du genre pour quantifier le temps de parole des femmes dans les programmes TV et radio, exposée en service RESTful sur Kubernetes."
          ] }
        ]
      },
      {
        id: "web-mining", cats: ["data"],
        org: "IMPERIUM · 2021 – 2022",
        title: "Microservices de web mining de sites d'actualité",
        summary: "APIs indépendantes pour le scraping, le crawling, la transformation readability et le stockage PostgreSQL, planifiées cycliquement avec monitoring et gestion des changements de structure des sites.",
        stack: ["Python", "Scrapy", "Selenium", "BeautifulSoup", "readability", "PostgreSQL", "Docker", "Airflow"],
        sections: [
          { title: "Également chez IMPERIUM", items: [
            "Pipeline de training restructuré des notebooks vers un projet POO avec multiprocessing, multithreading et parallélisation GPU — prédictions en quasi-temps réel sur du matériel limité.",
            "Modèles d'IA encapsulés en microservices Docker ; déploiement automatisé avec Airflow et Kubernetes ; outils desktop PyQt5 pour l'interne."
          ] }
        ]
      },
      {
        id: "multilingual-dict", cats: ["ml", "data"],
        org: "3W Media — Imperium · 2021",
        title: "Dictionnaire multilingue",
        summary: "Un dictionnaire organisé par signification et hiérarchies structurelles plutôt que par ordre alphabétique, construit sur WordNet (OMW) avec un moteur de recherche Solr.",
        stack: ["Python", "WordNet (OMW)", "Solr", "SQL Server", "Docker"],
        sections: [
          { title: "Détails", items: [
            "Regroupement sémantique des mots à travers les langues selon des hiérarchies structurelles familières ; indexé pour une recherche rapide."
          ] }
        ]
      },
      {
        id: "anli", cats: ["oss", "ml"],
        org: "Personnel · 2026",
        title: "ANLI agentic-IA — Mixture-of-Agents pour le NLI adversarial",
        summary: "Au lieu d'un seul modèle qui classe une paire prémisse/hypothèse, une petite équipe d'agents LLM collabore : trois proposeurs spécialisés en parallèle, un critique adverse, puis un agrégateur qui tranche.",
        stack: ["Python", "APIs compatibles OpenAI", "Ollama (local)", "Schémas JSON", "pytest", "matplotlib"],
        sections: [
          { title: "Conception", items: [
            "Rôles : prouveur logique, analyste de négation, raisonneur contrefactuel → critique → agrégateur ; modèle hétérogène par rôle ou un seul modèle local (Qwen sur RTX 3060).",
            "Contrats JSON validés avec retry, cache de résultats par rôle pour des runs reprenables, ablations (critique on/off, vote par self-consistency), estimation des coûts à partir des tokens mesurés.",
            "Documenté : architecture, statistiques du dataset, attribution modèle/rôle, coûts, revue de littérature sur la diversité des modèles."
          ] }
        ],
        role: "Projet personnel — dépôt privé, démonstration sur demande."
      },
      {
        id: "workjobs", cats: ["oss"],
        org: "Personnel · 2025 – 2026",
        title: "WorkJobs — suite multi-plateformes de scraping et candidature automatique",
        summary: "Une commande exécute chaque couple profil × plateforme sur dix job boards français et internationaux, garde la trace de ce qui est déjà fait et envoie un rapport HTML par e-mail — avec un chemin sans navigateur partout où une API publique existe.",
        stack: ["Python 3.12", "Selenium (Edge)", "Playwright / Patchright", "APIs GraphQL & JSON", "Planificateur Windows", "pytest (1 194 tests)"],
        sections: [
          { title: "Ingénierie", items: [
            "Modules pour FreeWork, HelloWork, Collective, prospection LinkedIn, Welcome to the Jungle (index Algolia), Monster, Indeed (GraphQL), Malt, APEC et Arc.dev.",
            "Verrous de run par profil, déduplication des republications sur une fenêtre glissante de 90 jours, journal de run unifié, lancement de navigateur résilient, détection des questionnaires qui nécessitent un humain.",
            "Tableau de bord analytique, runs planifiés sans surveillance, 1 194 tests unitaires Python purs avec la couche navigateur simulée.",
            "Outils compagnons : une extension Chrome pour FreeWork et un scraper LinkedIn."
          ] }
        ],
        role: "Projet personnel — dépôts privés, démonstration sur demande."
      },
      {
        id: "dental", cats: ["oss", "ml"],
        org: "Personnel · 2022",
        title: "Détection de pathologies dentaires sur radiographies panoramiques",
        summary: "Détecte et localise caries, parodontites, dents incluses et autres pathologies sur des radiographies panoramiques avec Faster R-CNN et transfer learning.",
        stack: ["Python", "TensorFlow", "Keras", "OpenCV", "Faster R-CNN", "Google Colab", "Kaggle"],
        sections: [
          { title: "Détails", items: [
            "Traitement d'image, détection et localisation d'objets, transfer learning CNN ; images de sortie et présentation incluses."
          ] }
        ]
      },
      {
        id: "bigdata-lab", cats: ["oss", "data"],
        org: "Personnel · 2022 – 2025",
        title: "Labo Big Data — Spark, Scala, Kafka, Cloudera",
        summary: "Notes de cours, notebooks et projets sur Spark (2.3 → 3.3), Scala, Kafka et la VM Cloudera QuickStart, conservés comme référence vivante.",
        stack: ["Spark", "Scala", "PySpark", "Kafka", "Cloudera", "Jupyter"],
        sections: [
          { title: "Contenu", items: [
            "Tutoriel Cloudera, supports de cours Scala et un dépôt de tutoriel Scala, notebooks Spark et mini-projets."
          ] }
        ],
        role: "Notes personnelles — dépôts privés."
      },
      {
        id: "classics", cats: ["oss", "ml"],
        org: "Personnel & académique · 2019 – 2023",
        title: "Premiers projets open source",
        summary: "Applications desktop en Java, notebooks ML académiques et un robot Arduino — les projets qui ont lancé le profil GitHub.",
        stack: ["Java Swing", "Java RMI", "JEE", "Python", "Dlib", "scikit-learn", "Arduino", "Android"],
        sections: [
          { title: "Dépôts", items: [
            "<a href=\"https://github.com/m-elkhou/Tetris\" target=\"_blank\" rel=\"noopener noreferrer\">Tetris</a> — conception et développement du jeu vidéo en Java (★ 16).",
            "<a href=\"https://github.com/m-elkhou/FileBrowser\" target=\"_blank\" rel=\"noopener noreferrer\">FileBrowser</a> — un explorateur de fichiers en Java Swing (★ 12).",
            "<a href=\"https://github.com/m-elkhou/Facial_Expression_Detection\" target=\"_blank\" rel=\"noopener noreferrer\">Facial_Expression_Detection</a> — landmarks Dlib + SVM multi-classes pour reconnaître les émotions (★ 10).",
            "<a href=\"https://github.com/m-elkhou/Chatt-App\" target=\"_blank\" rel=\"noopener noreferrer\">Chatt-App</a> — messagerie desktop et partage de fichiers en Java RMI et Swing (★ 6).",
            "<a href=\"https://github.com/m-elkhou/Web_Mining\" target=\"_blank\" rel=\"noopener noreferrer\">Web_Mining</a>, <a href=\"https://github.com/m-elkhou/Image_Mining\" target=\"_blank\" rel=\"noopener noreferrer\">Image_Mining</a>, <a href=\"https://github.com/m-elkhou/Data_Mining\" target=\"_blank\" rel=\"noopener noreferrer\">Data_Mining</a> — projets académiques de NLP, fouille de textes/images et scraping.",
            "<a href=\"https://github.com/m-elkhou/Quiz-Generator\" target=\"_blank\" rel=\"noopener noreferrer\">Quiz-Generator</a> (JEE), <a href=\"https://github.com/m-elkhou/Security-robot\" target=\"_blank\" rel=\"noopener noreferrer\">Security-robot</a> (voiture intelligente Arduino), <a href=\"https://github.com/m-elkhou/CreditCard\" target=\"_blank\" rel=\"noopener noreferrer\">CreditCard</a> (Android)."
          ] }
        ],
        links: [{ label: "Tous les dépôts", href: "https://github.com/m-elkhou?tab=repositories" }]
      }
    ]
  },

  impact: {
    title: "Impact",
    tagline: "Résultats chiffrés et reconnaissance au fil de la carrière",
    metrics: [
      { n: "80 %", l: "Réduction du temps de traitement ETL", d: "Architecture Python remplaçant l'infrastructure Talend legacy." },
      { n: "50 K€+", l: "Économies annuelles", d: "Licences Talend éliminées grâce à Python open source." },
      { n: "99,9 %", l: "Disponibilité", d: "Plateforme vidéo serverless avec mise à l'échelle automatique et tolérance aux pannes." },
      { n: "10 M+", l: "Enregistrements traités par jour", d: "Traitement à fort volume sur plusieurs systèmes d'entreprise." },
      { n: "75 %", l: "Traitement vidéo plus rapide", d: "Exécution serverless parallèle pour les contenus publicitaires." },
      { n: "99,95 %", l: "Exactitude des données", d: "Mécanismes robustes de validation et de gestion d'erreurs." },
      { n: "95,1 %", l: "Taux de matching LLM", d: "Matching EPG ↔ catalogue avec Claude 3 Haiku sur Bedrock, à coût 92 % inférieur au grand modèle." },
      { n: "−82,5 %", l: "Tokens par appel Bedrock", d: "Index compact, batching et chunking adaptatif." }
    ],
    blocks: [
      { title: "Leadership & impact d'équipe", items: [
        "<b>BPCE-SI :</b> pilotage de la montée en compétence de l'équipe Big Data sur Cloudera, mentorat de 3 ingénieurs juniors.",
        "<b>IMPERIUM :</b> gestion d'une équipe transverse de 8 personnes entre ML engineering et data science.",
        "<b>3W Media :</b> formation d'une équipe d'annotation de 5 spécialistes pour les projets de vision par ordinateur.",
        "<b>Transfert de connaissances :</b> plus de 20 ateliers techniques sur l'architecture cloud et le déploiement ML."
      ] },
      { title: "Gestion de projet", items: [
        "<b>Migrations :</b> 3 migrations majeures de plateforme menées sans interruption de service.",
        "<b>Agile :</b> mise en place de pratiques Scrum, améliorant la vitesse de livraison de 40 %.",
        "<b>Parties prenantes :</b> coordination avec des dirigeants et des équipes techniques.",
        "<b>Risques :</b> stratégies complètes de reprise après sinistre et de sauvegarde."
      ] },
      { title: "Innovation & recherche", items: [
        "<b>Brevets :</b> 2 demandes en cours pour le traitement vidéo et l'automatisation IA.",
        "<b>Publication :</b> co-auteur de l'article « Scalable Video Processing in Cloud Environments ».",
        "<b>Open source :</b> contributions à plus de 5 projets, plus de 500 étoiles GitHub.",
        "<b>Rédaction :</b> plus de 15 articles techniques sur Medium et LinkedIn."
      ] },
      { title: "Reconnaissance & certifications", items: [
        "<b>AWS :</b> Solutions Architect Associate en cours ; certifié sur CloudFront, S3 et Big Data avec Spark et Hadoop.",
        "<b>IA/ML :</b> Deep Learning Specialization (DeepLearning.AI) — réseaux de neurones, vision par ordinateur.",
        "<b>Big Data :</b> Hadoop Platform and Application Framework (UC San Diego), pipelines ETL, Scala, systèmes distribués."
      ] }
    ],
    yearsTitle: "Impact métier par année",
    years: [
      { year: "2026", title: "RMC BFM ADS — IA & industrialisation", items: [
        "Pipeline d'intelligence d'audience en production : 95,1 % de matching LLM à coût 92 % inférieur ; dépenses Bedrock réduites par le cache (−80 %) et le pré-filtrage (−67 %).",
        "Pipeline de forecasting industrialisé sur ECS Fargate/Step Functions avec Terraform et CI/CD OIDC ; runs end-to-end multi-mois sur données réelles.",
        "Partage de données inter-comptes gouverné (Lake Formation), ETL consentements auto-réparateur, suivi du consentement en temps réel dans la DMP."
      ] },
      { year: "2024", title: "RMC BFM ADS — Transformation digitale", items: [
        "Coûts opérationnels réduits de 60 % grâce à l'adoption d'une architecture serverless.",
        "Vitesse de diffusion des contenus améliorée de 75 % avec l'optimisation CDN.",
        "Analytics publicitaires en temps réel traitant plus de 50 M d'événements par jour.",
        "99,9 % de conformité SLA sur les workflows critiques de traitement média."
      ] },
      { year: "2023", title: "BPCE-SI — Modernisation Big Data", items: [
        "Disponibilité des données passée de 85 % à 99,5 % par optimisation de la plateforme.",
        "Coûts d'infrastructure réduits de 40 % via la stratégie de migration cloud.",
        "Vitesse de traitement améliorée de 65 % par optimisation Spark.",
        "Qualité des données renforcée par des frameworks de validation automatisés."
      ] },
      { year: "2022", title: "IMPERIUM — Plateforme IA/ML", items: [
        "Inférence ML en quasi-temps réel avec 95 % d'amélioration de la précision.",
        "Temps d'entraînement réduit de 70 % grâce au calcul distribué.",
        "Architecture microservices scalable servant plus d'1 M de requêtes.",
        "Pipeline ML automatisé réduisant le temps de déploiement de 80 %."
      ] },
      { year: "2021", title: "3W Media — Innovation en vision par ordinateur", items: [
        "94,2 % de mAP en détection d'objets sur les jeux de données de production.",
        "Temps d'inférence réduit à 45 ms, permettant l'analyse vidéo en temps réel.",
        "Plus de 10 000 requêtes par jour avec 99,8 % de disponibilité.",
        "Standards d'annotation améliorant la cohérence des modèles."
      ] }
    ]
  },

  skills: {
    title: "Compétences",
    tagline: "Mon expertise technique",
    proficiency: [
      { title: "Langages de programmation", items: [
        { name: "Python", pct: 98 },
        { name: "SQL / PL/SQL", pct: 95 },
        { name: "Scala", pct: 90 },
        { name: "Java", pct: 85 }
      ] },
      { title: "Cloud & Big Data", items: [
        { name: "ETL & pipelines de données", detail: "Talend, Airflow, VTOM, Step Functions, ETL Python sur mesure", pct: 96 },
        { name: "Amazon Web Services", detail: "Athena, S3, Lambda, API Gateway, EC2, ECS, Glue, Lake Formation, IAM, CloudFront, Cognito, CloudWatch, Transcribe, Textract, Bedrock", pct: 95 },
        { name: "Stack Big Data", detail: "Spark, Hadoop (HDFS, Hive, HBase, Pig, Storm), Cloudera, Kafka", pct: 92 },
        { name: "Google Cloud Platform", detail: "BigQuery, Cloud Storage, Dataflow, Pub/Sub", pct: 88 }
      ] },
      { title: "Écosystème Python", items: [
        { name: "Data science", detail: "PySpark, NumPy, Pandas, SciPy, Matplotlib, Seaborn", pct: 95 },
        { name: "Machine learning", detail: "Scikit-Learn, TensorFlow, Keras, PyTorch, LightGBM", pct: 92 },
        { name: "Web & APIs", detail: "Flask, FastAPI, SQLAlchemy, Requests, Selenium, Playwright, boto3", pct: 90 },
        { name: "NLP & LLM", detail: "NLTK, SpaCy, Gensim, BERT, AWS Bedrock, prompt engineering", pct: 88 }
      ] },
      { title: "Bases de données", items: [
        { name: "Bases SQL", detail: "Oracle, PostgreSQL, MySQL, SQL Server, Salesforce", pct: 95 },
        { name: "NoSQL & recherche", detail: "Redis, Elasticsearch, Solr, DynamoDB", pct: 85 }
      ] },
      { title: "DevOps & infrastructure", items: [
        { name: "Gestion de versions & CI/CD", detail: "Git, GitHub Actions, Bitbucket, JIRA", pct: 92 },
        { name: "Conteneurs & IaC", detail: "Docker, Kubernetes, Terraform, CloudFormation, CDK, VMware", pct: 90 },
        { name: "Systèmes d'exploitation", detail: "Linux (Debian, CentOS), Windows Server, Unix", pct: 88 },
        { name: "Monitoring & BI", detail: "Grafana, Kibana, CloudWatch, Power BI", pct: 85 }
      ] }
    ],
    groupsTitle: "Technologies par domaine",
    groups: [
      { title: "Langages de programmation", items: ["Python", "Scala", "SQL", "PL/SQL", "Java", "Shell", "TypeScript", "JavaScript"] },
      { title: "Python — data", items: ["PySpark", "PyArrow", "NumPy", "Pandas", "SciPy", "Matplotlib", "Seaborn", "awswrangler", "SQLAlchemy"] },
      { title: "Python — ML / DL", items: ["Scikit-Learn", "TensorFlow", "Keras", "PyTorch", "LightGBM", "statsmodels", "Detectron2", "OpenCV", "Dlib"] },
      { title: "NLP & LLM", items: ["NLTK", "SpaCy", "Gensim", "BERT / BERTopic", "word2vec", "TF-IDF", "AWS Bedrock (Claude)", "Prompt engineering", "Ollama / inférence locale", "Mixture-of-Agents"] },
      { title: "Web, APIs & automatisation", items: ["Flask", "FastAPI", "Requests", "boto3", "Selenium", "Playwright", "Scrapy", "BeautifulSoup", "PyQt5", "Extensions Chrome"] },
      { title: "Cloud — AWS", items: ["Athena", "S3", "Lambda", "Lambda@Edge", "API Gateway", "EC2", "ECS Fargate", "ECR", "Step Functions", "EventBridge", "Route 53", "Glue", "Lake Formation", "IAM", "VPC", "CloudFront", "Cognito", "CloudWatch", "CloudTrail", "SNS", "SES", "DynamoDB", "Transcribe", "Textract", "Bedrock", "Secrets Manager", "Transfer Family", "CloudFormation", "CDK"] },
      { title: "Cloud — GCP", items: ["BigQuery", "Cloud Storage", "Dataflow", "Pub/Sub"] },
      { title: "Big Data", items: ["Spark (Core, SQL, Streaming, MLlib)", "Hadoop", "HDFS", "Hive", "HBase", "Pig", "Storm", "Cloudera", "Kafka"] },
      { title: "ETL & ordonnancement", items: ["Talend", "Airflow", "VTOM", "Step Functions", "Planificateur de tâches Windows", "Jenkins", "ETL Python sur mesure"] },
      { title: "Bases SQL", items: ["Oracle", "PostgreSQL", "MySQL", "SQL Server", "Salesforce"] },
      { title: "NoSQL & recherche", items: ["Redis", "Elasticsearch", "Solr", "DynamoDB"] },
      { title: "DevOps & infrastructure", items: ["Docker", "Kubernetes", "Terraform", "CloudFormation", "AWS CDK", "GitHub Actions", "CI/CD (OIDC)", "VMware", "Linux (Debian, CentOS)", "Windows Server", "uv", "ruff", "pre-commit", "pytest"] },
      { title: "Monitoring & BI", items: ["Grafana", "Kibana", "CloudWatch", "Power BI", "Talend"] },
      { title: "Méthodes & conception", items: ["Agile", "Scrum", "UML", "MERISE", "Design patterns", "POO", "Documentation technique (Confluence)"] },
      { title: "Formats & outils", items: ["JSON", "XML", "CSV", "Excel", "YAML", "Parquet", "Jupyter", "VS Code", "Git", "GitHub", "Bitbucket", "Colab", "SSH", "SAMBA", "Slack", "JIRA", "Confluence", "MS Office"] }
    ],
    expertise: {
      title: "Expertise technique en détail",
      note: "Un inventaire plus long de ce avec quoi j'ai travaillé, par domaine. Ouvrir un domaine pour le lire.",
      blocks: [
        { title: "Architecture & ingénierie cloud AWS", sub: [
          { title: "Serverless", items: [
            { text: "<b>Fonctions Lambda :</b>", sub: [
              "Plus de 25 fonctions Lambda en production traitant plus de 10 M de requêtes par mois",
              "Lambda conteneurisées avec Docker pour le traitement vidéo FFmpeg (2 Go de mémoire, timeout 15 minutes)",
              "Lambda@Edge pour l'optimisation de la diffusion mondiale (temps de réponse < 100 ms)",
              "Architectures événementielles avec intégration S3, SQS, SNS",
              "Optimisation des coûts : −70 % par right-sizing et planification"
            ] },
            "<b>API Gateway :</b> APIs REST et WebSocket avec authorizers personnalisés, transformation des requêtes/réponses",
            "<b>Step Functions :</b> orchestration de workflows pour les pipelines de traitement multi-étapes"
          ] },
          { title: "Services data & analytics", items: [
            { text: "<b>Amazon Athena :</b> optimisation de requêtes à l'échelle du pétaoctet, stratégies de partitionnement, maîtrise des coûts", sub: [
              "Stockage colonne Parquet réduisant les coûts de requête de 85 %",
              "Optimisation SQL avancée (fonctions de fenêtrage, CTE, jointures complexes)",
              "Catalogage automatisé avec les crawlers AWS Glue",
              "Cache des résultats et gestion du cycle de vie"
            ] },
            "<b>S3 avancé :</b> réplication multi-régions, politiques de cycle de vie, notifications d'événements, contrôles de sécurité",
            "<b>Lake Formation :</b> partage gouverné inter-comptes au niveau colonne avec audit CloudTrail",
            "<b>CloudWatch :</b> métriques personnalisées, log insights, alerting automatisé, détection d'anomalies de coûts"
          ] },
          { title: "Sécurité & conformité", items: [
            { text: "<b>IAM :</b> moindre privilège, rôles inter-comptes, fédération SAML", sub: [
              "Politiques IAM personnalisées avec contrôle d'accès conditionnel",
              "Rôles liés aux services et politiques basées sur les ressources",
              "SCP AWS Organizations pour la gouvernance à l'échelle",
              "Intégration Secrets Manager pour la rotation des credentials"
            ] },
            "<b>Réseau VPC :</b> architectures multi-AZ, NAT gateways, VPC endpoints, security groups, NACL",
            "<b>Chiffrement :</b> gestion de clés KMS, chiffrement d'enveloppe, protection au repos et en transit",
            "<b>Sécurité edge :</b> Cognito, Lambda@Edge, CloudFront OAC, cookies sécurisés"
          ] }
        ] },
        { title: "Big Data & systèmes distribués", sub: [
          { title: "Écosystème Apache Spark", items: [
            { text: "<b>Spark Core :</b> transformations et actions RDD, variables broadcast, accumulateurs", sub: [
              "Stratégies de partitionnement personnalisées pour une distribution optimale",
              "Gestion mémoire et réglage du garbage collector",
              "Allocation dynamique des ressources et exécution adaptative des requêtes",
              "Compréhension de l'optimiseur Catalyst pour la performance"
            ] },
            "<b>Spark SQL :</b> APIs DataFrame/Dataset, fonctions de fenêtrage complexes, UDF",
            "<b>Spark Streaming :</b> traitement temps réel par micro-batch et structured streaming",
            "<b>MLlib :</b> algorithmes de machine learning distribués, pipelines de feature engineering"
          ] },
          { title: "Écosystème Hadoop", items: [
            { text: "<b>HDFS :</b> réplication de blocs, rack awareness, fédération, haute disponibilité", sub: [
              "Dimensionnement de cluster et planification de capacité au pétaoctet",
              "Optimisation de la localité des données et atténuation des hotspots",
              "Stratégies de sauvegarde et de reprise après sinistre",
              "Réglage de performance (taille de bloc, facteur de réplication)"
            ] },
            "<b>Hive :</b> HiveQL complexe, partitionnement, bucketing, optimisation ORC/Parquet",
            "<b>HBase :</b> conception NoSQL, optimisation des row keys, découpage des régions",
            "<b>Cloudera :</b> gestion de cluster, sécurité (Kerberos), gestion des ressources (YARN)"
          ] },
          { title: "Streaming & analytics temps réel", items: [
            { text: "<b>Apache Kafka :</b> conception de topics, stratégies de partitionnement, gestion des consumer groups", sub: [
              "Kafka Connect pour l'intégration avec des systèmes externes",
              "Schema Registry pour l'évolution des schémas Avro/JSON",
              "Kafka Streams pour les applications de traitement de flux",
              "Monitoring et alerting via les métriques JMX"
            ] },
            "<b>Apache Storm :</b> conception de topologies, spouts, bolts, traitement garanti des messages",
            "<b>Tableaux de bord temps réel :</b> Grafana et Kibana sur données en flux"
          ] }
        ] },
        { title: "Programmation avancée & ingénierie logicielle", sub: [
          { title: "Python", items: [
            { text: "<b>Python avancé :</b> métaclasses, décorateurs, context managers, async/await", sub: [
              "Multiprocessing et multithreading pour les tâches CPU/IO",
              "Profilage mémoire et optimisation des performances",
              "Structures de données et algorithmes sur mesure",
              "Développement et distribution de packages (PyPI), uv, ruff, pre-commit"
            ] },
            "<b>Stack data science :</b> vectorisation NumPy, optimisation Pandas, statistiques SciPy",
            "<b>Frameworks web :</b> Flask/FastAPI pour les APIs REST, ORM SQLAlchemy, Celery pour les files de tâches"
          ] },
          { title: "Scala & programmation fonctionnelle", items: [
            { text: "<b>Scala :</b> case classes, pattern matching, fonctions d'ordre supérieur, implicits", sub: [
              "Acteurs Akka pour les systèmes concurrents et distribués",
              "Cats/Scalaz pour les abstractions fonctionnelles",
              "Outil de build SBT et gestion des dépendances",
              "Intégration avec Spark pour le traitement haute performance"
            ] },
            "<b>Paradigmes fonctionnels :</b> monades, foncteurs, structures de données immuables"
          ] },
          { title: "Systèmes de bases de données", items: [
            { text: "<b>Maîtrise SQL :</b> requêtes complexes, fonctions de fenêtrage, CTE, optimisation", sub: [
              "Oracle : PL/SQL, partitionnement, vues matérialisées, RAC",
              "PostgreSQL : extensions, JSONB, recherche plein texte, réplication",
              "SQL Server : T-SQL, SSIS, index columnstore",
              "Réglage de performance : stratégies d'indexation, plans d'exécution"
            ] },
            "<b>NoSQL :</b> agrégations Elasticsearch, structures Redis, modélisation documentaire"
          ] }
        ] },
        { title: "Machine learning & ingénierie IA", sub: [
          { title: "Frameworks de deep learning", items: [
            { text: "<b>TensorFlow/Keras :</b> couches personnalisées, boucles d'entraînement, entraînement distribué, TensorBoard", sub: [
              "Optimisation de modèles : quantification, pruning, distillation",
              "TensorFlow Serving pour le déploiement en production",
              "TensorFlow Extended (TFX) pour les pipelines ML",
              "Optimisation GPU avec CUDA et cuDNN"
            ] },
            "<b>PyTorch :</b> graphes de calcul dynamiques, datasets personnalisés, entraînement distribué",
            "<b>Déploiement :</b> conversion ONNX, optimisation TensorRT, déploiement edge"
          ] },
          { title: "Vision par ordinateur", items: [
            { text: "<b>Détection d'objets :</b> YOLO, famille R-CNN, SSD, RetinaNet — implémentation et optimisation", sub: [
              "Création de datasets et workflows d'annotation",
              "Stratégies d'augmentation pour une meilleure généralisation",
              "Transfer learning et fine-tuning",
              "Optimisation de l'inférence temps réel (TensorRT, OpenVINO)"
            ] },
            "<b>Traitement d'image :</b> techniques OpenCV avancées, opérations morphologiques, extraction de caractéristiques",
            "<b>Reconnaissance faciale :</b> ensembles multi-modèles, optimisation des embeddings"
          ] },
          { title: "NLP & applications LLM", items: [
            { text: "<b>Modèles Transformer :</b> fine-tuning et déploiement de BERT, GPT, T5", sub: [
              "Mécanismes d'attention et encodage positionnel",
              "Adaptation de modèles multilingues",
              "Analyse de sentiment et topic modeling",
              "Reconnaissance d'entités nommées et extraction de relations"
            ] },
            "<b>Ingénierie LLM :</b> conception de prompts, batching et chunking, scoring gradué avec raisonnement, cache de résultats, benchmark multi-modèles sur AWS Bedrock ; pipelines agentiques (Mixture-of-Agents) avec contrats JSON validés ; inférence locale avec Ollama",
            "<b>Traitement de texte :</b> NLTK, spaCy, Gensim pour l'analyse avancée",
            "<b>Traitement de la parole :</b> systèmes ASR, extraction de caractéristiques audio, reconnaissance du locuteur, empreinte audio"
          ] }
        ] },
        { title: "DevOps & ingénierie d'infrastructure", sub: [
          { title: "Conteneurisation & orchestration", items: [
            { text: "<b>Docker :</b> builds multi-étapes, optimisation des couches, scan de sécurité", sub: [
              "Images de base personnalisées et conteneurs distroless",
              "Docker Compose pour les environnements de développement",
              "Gestion des registres (ECR, Docker Hub)",
              "Limites de ressources et health checks"
            ] },
            "<b>Kubernetes :</b> conception de pods, services, ingress, volumes persistants, RBAC",
            "<b>ECS Fargate :</b> définitions de tâches, capacité Spot, chaînage Step Functions",
            "<b>Helm :</b> développement de templates, gestion des dépendances et des releases"
          ] },
          { title: "CI/CD & automatisation", items: [
            { text: "<b>GitHub Actions :</b> automatisation de workflows, builds matriciels, actions personnalisées", sub: [
              "Pipelines de tests automatisés avec pytest et rapports de couverture",
              "Scan de sécurité avec Snyk, CodeQL, bandit",
              "Déploiements multi-environnements avec validation ; fédération OIDC avec AWS (aucune clé stockée)",
              "Gestion des artefacts et stratégies de versioning"
            ] },
            "<b>Infrastructure as code :</b> CloudFormation, Terraform, AWS CDK pour des déploiements reproductibles",
            "<b>Gestion de configuration :</b> playbooks Ansible, configurations par environnement"
          ] },
          { title: "Monitoring & observabilité", items: [
            { text: "<b>Métriques & alerting :</b> Prometheus, Grafana, tableaux de bord personnalisés, suivi des SLA", sub: [
              "Monitoring de performance applicative (APM)",
              "Agrégation et analyse de logs (stack ELK, CloudWatch → Athena)",
              "Traçage distribué avec Jaeger/Zipkin",
              "Réponse aux incidents et analyse post-mortem"
            ] },
            "<b>Optimisation des coûts :</b> analyse d'utilisation des ressources, recommandations de right-sizing, pipelines de coûts AWS"
          ] }
        ] }
      ]
    }
  },

  education: {
    title: "Formation",
    tagline: "Diplômes, certifications et langues",
    items: [
      { year: "2020", degree: "Master 2 — Sciences des Données et Intelligence Artificielle", school: "Institut Galilée, Université Sorbonne Paris Nord — Paris, France", desc: "Spécialisation avancée en IA, machine learning et méthodes de data science." },
      { year: "2020", degree: "Master — Web Intelligence et Sciences des Données", school: "Université Sidi Mohamed Ben Abdellah — Fès, Maroc", desc: "Formation approfondie de deux ans spécialisée dans le développement, le traitement Big Data, la science des données et l'intelligence artificielle." },
      { year: "2018", degree: "Licence fondamentale — Sciences Mathématiques et Informatique", school: "Université Sidi Mohamed Ben Abdellah — Fès, Maroc", desc: "Études fondamentales en sciences mathématiques et informatique." },
      { year: "2017", degree: "DEUG — Sciences Mathématiques et Informatique", school: "Université Sidi Mohamed Ben Abdellah — Fès, Maroc", desc: "Diplôme d'études universitaires générales en sciences mathématiques et informatique." },
      { year: "2015", degree: "Baccalauréat — Sciences Mathématiques, série B", school: "Lycée El Adarissa — Fès, Maroc", desc: "Baccalauréat spécialisé en sciences mathématiques." }
    ],
    certsTitle: "Certifications",
    certs: [
      { name: "AWS Certified Solutions Architect — Associate", issuer: "Amazon Web Services", year: "—", status: "en cours" },
      { name: "AWS CloudFront: Serve content from multiple S3 buckets", issuer: "Coursera · IBM", year: "2024", url: "https://coursera.org/share/91b0be4447ffc56960ac4d219a91fc73" },
      { name: "AWS S3 Basics", issuer: "Coursera · IBM", year: "2024", url: "https://coursera.org/share/9435c41c21f244f828727ffd99c8af8b" },
      { name: "Introduction to Big Data with Spark and Hadoop", issuer: "Coursera · IBM", year: "2024", url: "https://coursera.org/share/bd512b5012584996b809c51f91d600e6" },
      { name: "Deep Learning Specialization", issuer: "Coursera · DeepLearning.AI", year: "2022" },
      { name: "Hadoop Platform and Application Framework", issuer: "Coursera · UC San Diego", year: "2022", url: "https://www.coursera.org/account/accomplishments/certificate/A4HV3CRLYSC4" },
      { name: "ETL and Data Pipelines with Shell, Airflow and Kafka", issuer: "Coursera · IBM", year: "2022" },
      { name: "Functional Programming Principles in Scala", issuer: "Coursera · EPFL", year: "2022" },
      { name: "Introduction to Big Data", issuer: "Coursera · UC San Diego", year: "2022" },
      { name: "Neural Networks and Deep Learning", issuer: "Coursera · DeepLearning.AI", year: "2020" },
      { name: "Machine Learning with Python — Level 1", issuer: "IBM (Credly)", year: "2019" },
      { name: "Applied Data Science with Python — Level 2", issuer: "IBM (Credly)", year: "2019" },
      { name: "Data Analysis with Python", issuer: "CognitiveClass", year: "2019" },
      { name: "Data Visualization with Python", issuer: "CognitiveClass", year: "2019" },
      { name: "Python for Data Science", issuer: "IBM (Credly)", year: "2019" },
      { name: "Data Analysis Track", issuer: "One Million Arab Coders · Udacity", year: "2019" }
    ],
    langsTitle: "Langues",
    langs: [
      { name: "Arabe", level: "Langue maternelle" },
      { name: "Français", level: "Courant" },
      { name: "Anglais", level: "Professionnel" }
    ]
  },

  contact: {
    title: "Contact",
    tagline: "Travaillons ensemble",
    lead: "Ouvert aux défis de data et cloud engineering — écrivez-moi, ou retrouvez-moi sur LinkedIn et GitHub.",
    email: "m.elkhou@hotmail.com",
    items: [
      { label: "Localisation", value: "Paris, France", icon: "pin" },
      { label: "E-mail", value: "m.elkhou@hotmail.com", href: "mailto:m.elkhou@hotmail.com", icon: "mail" },
      { label: "Téléphone", value: "(+33) 06 13 43 51 06", href: "tel:+33613435106", icon: "phone" },
      { label: "LinkedIn", value: "linkedin.com/in/m-elkhou", href: "https://www.linkedin.com/in/m-elkhou/", external: true, icon: "linkedin" },
      { label: "GitHub", value: "github.com/m-elkhou", href: "https://github.com/m-elkhou", external: true, icon: "github" },
      { label: "CV (PDF)", value: "Télécharger", href: "assets/cv/Mohammed_EL-KHOU_CV.pdf", icon: "file" }
    ]
  },

  footer: {
    blurb: "Data & cloud engineer, je construis les systèmes data derrière la publicité TV et digitale.",
    rights: "© 2026 Mohammed EL-KHOU. Tous droits réservés.",
    made: "Construit en HTML, CSS et JavaScript purs — sans framework.",
    columns: [
      { title: "Navigation", links: [
        { label: "À propos", href: "#about" },
        { label: "Expérience", href: "#experience" },
        { label: "Projets", href: "#projects" },
        { label: "Impact", href: "#impact" },
        { label: "Compétences", href: "#skills" },
        { label: "Formation", href: "#education" }
      ] },
      { title: "Contact", links: [
        { label: "Me contacter", href: "#contact" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/m-elkhou/", external: true },
        { label: "GitHub", href: "https://github.com/m-elkhou", external: true },
        { label: "E-mail", href: "mailto:m.elkhou@hotmail.com" }
      ] },
      { title: "Ressources", links: [
        { label: "CV (PDF)", href: "assets/cv/Mohammed_EL-KHOU_CV.pdf", download: true },
        { label: "Certifications", href: "#education" },
        { label: "Code source de ce site", href: "https://github.com/m-elkhou/m-elkhou.github.io", external: true }
      ] }
    ]
  }
};
