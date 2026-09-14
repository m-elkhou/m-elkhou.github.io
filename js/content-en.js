/* English content — single source of truth for the EN page.
   Strings may contain inline HTML (<b>, <a>). Keep the same shape as content-fr.js. */
window.CONTENT = window.CONTENT || {};
window.CONTENT.en = {
  code: "en",
  htmlTitle: "Mohammed EL-KHOU — Data/Cloud Engineer",
  metaDescription: "Mohammed EL-KHOU — Data/Cloud Engineer (AWS), Big Data/Python developer and R&D ML/AI engineer in Paris. ETL and data-warehouse migration, serverless media pipelines, LLM matching on AWS Bedrock, AdTech automation for RMC BFM ADS (Altice Media).",

  ui: {
    skip: "Skip to content",
    cv: "CV",
    cvTitle: "Download the CV (PDF, French)",
    theme: "Toggle dark mode",
    menu: "Menu",
    showDetails: "Show details",
    hideDetails: "Hide details",
    more: "Details",
    context: "Context:",
    constraints: "Constraints:",
    result: "Result:",
    gridAria: "Career timeline: employers as bars from 2018 to today",
    gridStudies: "Studies",
    filterAria: "Filter projects",
    backToTop: "Back to top"
  },

  nav: [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "impact", label: "Impact" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" }
  ],

  hero: {
    ariaLabel: "Introduction",
    badge: "Data/Cloud Engineer · Big Data/Python Developer · R&D ML/AI",
    kicker: "Hello, I'm",
    name: ["Mohammed", "EL-KHOU"],
    typingPrefix: "Expert",
    typing: ["Data Engineer", "Cloud Engineer (AWS)", "Big Data Engineer", "Python Developer", "ML / AI Engineer", "ETL Architect"],
    lede: "Data engineer with 6+ years of experience designing and running enterprise-scale data solutions — AWS cloud, Big Data processing, ETL pipelines and data-warehouse architecture — now applied to TV and digital advertising.",
    where: "Paris, France — Data Engineer / Cloud Engineer (AWS) at <b>RMC BFM ADS (Altice Media)</b> since January 2024.",
    photoAlt: "Portrait of Mohammed EL-KHOU",
    actions: [
      { label: "Let's collaborate", href: "#contact", icon: "rocket", style: "primary" },
      { label: "Download CV", href: "assets/cv/Mohammed_EL-KHOU_CV.pdf", icon: "download", download: true, style: "secondary" },
      { label: "GitHub", href: "https://github.com/m-elkhou", icon: "github", external: true, style: "tertiary" }
    ],
    social: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/m-elkhou/", icon: "linkedin", external: true },
      { label: "GitHub", href: "https://github.com/m-elkhou", icon: "github", external: true },
      { label: "Email", href: "mailto:m.elkhou@hotmail.com", icon: "mail" }
    ],
    facts: [
      { n: 6, suffix: "+", l: "years of experience" },
      { n: 70, suffix: "+", l: "projects delivered" },
      { n: 15, suffix: "", l: "certifications" },
      { n: 1, suffix: "", l: "research paper" }
    ]
  },

  about: {
    title: "About",
    tagline: "Who I am and how I work",
    paragraphs: [
      "I am a passionate <b>Data Engineer and Cloud Engineer</b> with over 6 years of experience designing and implementing enterprise-scale data solutions.",
      "Since January 2024 I work as <b>Data Engineer / Cloud Engineer (AWS)</b> at <b>RMC BFM ADS (Altice Media)</b> in Paris. I build scalable data infrastructure, optimise ETL processes and ship cloud-native solutions that process millions of data points daily for media and advertising analytics — from a Python data warehouse that replaced Talend to serverless video pipelines and an LLM-powered audience-matching service on AWS Bedrock.",
      "Before that I was a <b>Big Data Engineer</b> at <b>BPCE-SI</b> (Caisse d'Epargne Île-de-France), where I built and maintained Hadoop-based data lakes on Cloudera, developed Spark/Scala and PySpark pipelines, and took part in the migration from Cloudera to Google Cloud Platform with a dual run.",
      "My expertise spans <b>Big Data engineering</b>, <b>cloud architecture</b>, <b>ETL pipeline development</b>, <b>data-warehouse management</b> and <b>machine-learning engineering</b>, with hands-on experience in computer vision, NLP, ASR and, more recently, LLM applications."
    ],
    competencies: {
      title: "Core competencies",
      items: ["Database design & administration", "ETL", "Big Data", "Data modelling", "Data warehousing", "Data analysis", "Programming", "Performance & optimisation", "Object-oriented programming", "Version control", "Statistics", "Data visualisation", "Quantitative analysis", "Machine Learning", "Deep Learning", "Cloud architecture (AWS)", "LLM applications"]
    },
    soft: {
      title: "How I work",
      items: [
        { name: "Analytical thinking", desc: "Strong analytical mindset, problem solving and a habit of proposing solutions." },
        { name: "Organised, structured, rigorous", desc: "Documented, tested, reproducible work — from notebooks to production." },
        { name: "Client empathy", desc: "Good relationship with business users and partners; I listen before I build." },
        { name: "Reactive, with a sense of priorities", desc: "Production first: incidents handled, then improvements." },
        { name: "Fast learner", desc: "Quick adoption of new technologies and methodologies." },
        { name: "Communication & teamwork", desc: "Clear written and spoken communication, in French and English." },
        { name: "Team leadership", desc: "Experience leading technical teams and mentoring junior developers." },
        { name: "Project management", desc: "Agile/Scrum practice, coordination with business use-cases and IT teams." }
      ]
    }
  },

  experience: {
    title: "Experience",
    tagline: "Five roles, four employers, France and Morocco",
    gridNote: "Career at a glance — bars are actual durations; click one to jump to the role.",
    studies: [
      { start: "2018-09", end: "2020-09", label: "Master's — Fès & Paris" }
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
        period: "01/2024 – Present",
        summary: "Data and cloud engineering for the AdTech team of a national TV/radio sales house: database operations, ETL, a Python data-warehouse migration, serverless media pipelines, advertising automation, and an LLM-powered audience-intelligence pipeline on AWS Bedrock.",
        groups: [
          { title: "Database maintenance", items: [
            "Performance monitoring of AWS Athena, SQL Server, Oracle and PostgreSQL databases.",
            "Proactive resolution of performance, security and reliability issues.",
            "Query and schema optimisation to improve system efficiency.",
            "Handling of database-related incidents."
          ] },
          { title: "ETL routines (Talend)", items: [
            "Daily management of ETL workflows on the Talend platform.",
            "Debugging, improvement and optimisation of existing routines.",
            "Creation of new routines for specific business needs.",
            "Integration of advanced data-science techniques to improve routine quality."
          ] },
          { title: "Data-warehouse migration (Talend → Python)", items: [
            "Designed and deployed a new ETL architecture entirely in Python, replacing the legacy Talend infrastructure.",
            "Project management and coordination with business use-cases and the IT team; collaboration with the infrastructure team to create Windows Server VMs.",
            "Developed 14 modular ETL modules (core, db, helpers, tools) for multi-source integration: Oracle, PostgreSQL, Salesforce, AWS Athena.",
            "Developed, tested and shipped new Python routines to production.",
            "<b>80 % reduction in processing time</b> by eliminating temporary CSV files and adopting pickle serialisation.",
            "Structured logging, robust error handling and configurable incremental loading.",
            "Eliminated Talend licence costs in favour of a performant, maintainable open-source solution."
          ] },
          { title: "Video transcoding & VAST generation platform", items: [
            "Serverless solution for processing, validating and distributing video advertising content.",
            "Containerised AWS Lambda functions (Docker) orchestrating FFmpeg, OpenCV and MediaInfo for transcoding, BTVS compliance checks (1920×1080, 50 fps, −24 LUFS) and duration correction.",
            "Dynamic VAST XML generation with S3 integration and ad-event tracking.",
            "Secured REST APIs with AWS Cognito, Lambda@Edge, API Gateway and CloudFront OAC for authentication and content protection."
          ] },
          { title: "Audio → video conversion with AI transcription", items: [
            "Automated creation of video content from audio files for media campaigns.",
            "AWS Transcribe for automatic French subtitle generation.",
            "MP4 rendering with logo overlay, dynamic QR code (campaign tracking) and audio/visual synchronisation via FFmpeg.",
            "Automated storage and distribution via S3 with secure public URLs."
          ] },
          { title: "Advertising billing automation (AAF)", items: [
            "Automation engine for reconciling and validating invoiced amounts.",
            "PDF invoice processing with AWS Textract (OCR) and intelligent field extraction (dates, amounts, currencies).",
            "Integration with the AppNexus (Xandr) and FreeWheel APIs to collect ad-delivery data.",
            "Validation of IAB TCF consent strings (GDPR): decoding, SHA-256 hashing of IPs and compliant storage."
          ] },
          { title: "FreeWheel bulk placement management", items: [
            "Automated orchestration of advertising campaigns on the FreeWheel platform.",
            "Placement creation from CSV files with geographic targeting (postal codes) and audience segmentation.",
            "Creative management through the v4 API, media rendering and programmatic activation.",
            "Retry mechanisms and state validation to guarantee reliability."
          ] },
          { title: "Cloud infrastructure & security", items: [
            "Design of a secure, scalable and fully automated AWS architecture.",
            "VPC, NAT Gateway, IAM roles and secrets management through environment variables.",
            "Deployment via CloudFormation, Terraform, AWS CDK and the AWS CLI, with versioning of Lambda@Edge functions; CI/CD with GitHub Actions (OIDC, no stored credentials).",
            "S3 buckets protected with Origin Access Control (OAC) and secure cookies (HttpOnly, Secure)."
          ] },
          { title: "AWS cost analysis pipeline & CloudWatch monitoring", items: [
            "Cloud observability system for cost optimisation and operational traceability.",
            "Extraction, transformation and storage of CloudWatch logs into Amazon Athena as partitioned Parquet.",
            "Analysis of millions of events to spot consumption anomalies and generate automated billing reports.",
            "HTML reporting tools and email alerting."
          ] },
          { title: "Audience Intelligence & AI matching pipeline (AWS Bedrock)", items: [
            "Designed and deployed an end-to-end CTV audience-intelligence pipeline for 3 channels (RMC Story, RMC Life, RMC Découverte): live TV programme collection (EPG) → automatic matching → export of audience segments to Mediarithmics (programmatic ad targeting).",
            "LLM semantic-matching service on AWS Bedrock (Claude 3 Haiku / Claude Sonnet 4.5) between EPG grids and the Replay/catch-up TV catalogue (PIXA) — 2-pass architecture: strict matching (score ≥ 80/100) + relaxed pass (≥ 60/100), graded 0–100 scoring with model-generated reasoning.",
            "Prompt-engineering optimisation: <b>−82.5 % tokens</b> with a lightweight index (~350 chars/item), batching (5 EPG × 400 assets per Bedrock call), adaptive chunking and automatic refinement of ambiguous cases (top-2 scores within 15 points).",
            "Multi-model benchmark (V1→V4): <b>95.1 % match rate with Claude 3 Haiku vs 55.8 % with Claude Sonnet 4.5, at 92 % lower cost</b> — recommended and deployed the optimal model for this use-case.",
            "Bedrock cost optimisation: result cache (−80 %), temporal pre-filtering (−67 %), ThreadPoolExecutor parallelism (3 workers); study of local inference (Qwen 2.5, RTX 3060) to remove LLM costs entirely.",
            "Partitioned Athena tables (epg_programs, epg_serie_mapping, implicit_in_monitoring) built through the AWS Glue Catalog (awswrangler); EPG ↔ FreeWheel series matching with a 4-phase algorithm combining fuzzy matching and NLP normalisation.",
            "Export of Implicit affinity segments to Mediarithmics (programmatic CTV) with GDPR consent cross-check (IAB TCF), membership CSV generation and automated HTML reports by email (AWS SES)."
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
        context: "Design, development and operation of the Big Data pipelines for every division of Caisse d'Epargne Île-de-France.",
        groups: [
          { title: "Responsibilities", items: [
            "Strengthened the team on Big Data technologies, particularly Cloudera.",
            "Developed, maintained and automated ETL pipelines feeding the BPCE-SI data lake (Hadoop cluster: Hive, HDFS…) from multiple sources, including an Oracle database.",
            "Worked closely with data scientists and analysts to surface data-driven insights for business decisions.",
            "Guaranteed data quality and accuracy by developing and applying data-governance policies.",
            "Automated data pipelines with Python and Shell; new features developed in Spark/Scala or PySpark/Python.",
            "Contributed to test plans, ran unit tests, fixed anomalies during integration, packaging and deployment to pre-production and production.",
            "Production monitoring (the Run), maintenance of the current system and incident-recovery solutions.",
            "Optimised Big Data solutions for performance, scalability and cost-effectiveness.",
            "Wrote technical concept documents and specifications on Confluence, following best practices and standards.",
            "Took part in the Cloudera → GCP migration with a dual run.",
            "Worked in an agile team applying Scrum."
          ] }
        ],
        result: "Significant improvement in data availability, reduced processing times, higher data quality and lower infrastructure costs.",
        env: ["Unix/Linux", "Shell", "Python", "Jupyter", "Anaconda", "Cloudera", "Hadoop", "Hive", "HDFS", "Spark", "Scala", "PySpark", "SQL", "PL/SQL", "Oracle", "GCP", "BigQuery", "VTOM", "CI/CD", "Git", "Bitbucket", "JIRA"]
      },
      {
        id: "imperium",
        color: "imperium",
        role: "R&D Data Engineer / Machine Learning Engineer",
        org: "IMPERIUM",
        short: "R&D Data / ML Engineer",
        place: "Casablanca, Morocco",
        start: "2021-09",
        end: "2022-08",
        period: "09/2021 – 08/2022",
        context: "Taking AI solutions to production in the multimedia domain, on unstructured or semi-structured data, with resource management and automation.",
        constraints: "Limited hardware, hence frequent use of CPU rather than GPU; delicate sharing of a single graphics card on one server.",
        groups: [
          { title: "Mission 1 — Infrastructure modernisation", items: [
            "Microservices to ease the integration of AI models packaged as Docker images.",
            "Python ETL workflows consuming REST APIs to integrate AI models."
          ] },
          { title: "Mission 2 — Structuring the training pipeline", items: [
            "Converted a Jupyter-based training pipeline into a well-structured OOP project.",
            "Added multiprocessing, multithreading and GPU parallelisation to speed up model prediction.",
            "Automated production deployment with Airflow and Kubernetes, managing Docker containers efficiently."
          ] },
          { title: "Mission 3 — Desktop applications", items: [
            "PyQt5 desktop applications for internal use, improving user experience and operational efficiency."
          ] },
          { title: "Mission 4 — End-to-end web mining of news sites", items: [
            "Designed a microservices architecture covering collection, processing and storage, with scalability and flexibility in mind.",
            "Separate APIs for each step: scraping (Scrapy, Requests, Selenium, BeautifulSoup…), crawling (MD5 existence test), transformation (readability) and storage (PostgreSQL) — modular, independent services.",
            "Error handling for interruptions or changes in site structure, for robust and reliable collection.",
            "Cyclic scheduling of every batch treatment, keeping data fresh to the client's requirements.",
            "Monitoring features and a proactive maintenance plan for long-term stability."
          ] }
        ],
        result: "An efficient training pipeline. Multiprocessing for predictions reached near real-time, with batches running cyclically without interruption despite limited resources.",
        env: ["Unix/Linux", "Python", "Jupyter", "Java (Eclipse)", "Docker", "Docker Compose", "Kubernetes", "MySQL", "PostgreSQL", "SQL Server", "Elasticsearch", "Kibana", "Airflow", "Slack"]
      },
      {
        id: "tw-ml",
        color: "3wml",
        role: "ML / AI Developer",
        org: "3W Media — Imperium",
        short: "ML / AI Developer",
        place: "Casablanca, Morocco",
        start: "2020-08",
        end: "2021-09",
        period: "08/2020 – 09/2021",
        groups: [
          { title: "Project 1 — Speech transcription", items: [
            "Automated transcription of a speaker's speech into text using offline speech recognition, with pre-trained models for 17 languages and dialects — Arabic, French, English…",
            "Environment: Python (Jupyter), Docker, multiprocessing, cron, Elasticsearch."
          ] },
          { title: "Project 2 — Ad-spot identification by audio fingerprinting", items: [
            "Audio-recognition solution applied to advertising spots: locating known TV or radio ads inside archives of recorded programmes (or longer recordings such as radio streams) with Landmark-based audio fingerprints.",
            "Environment: Python (Jupyter), Docker, multiprocessing, NumPy, pydub, MySQL."
          ] },
          { title: "Project 3 — Speaker and gender detection from speech (ASR)", items: [
            "Automatic speaking and gender detection for large-scale monitoring of raw audiovisual streams. Quantitative estimates of women's speaking time describe how gender equality evolves over time and let TV channels and radio stations monitor it in their programmes.",
            "Environment: Python (Jupyter), TensorFlow, Keras, KerasTuner, Docker, Kubernetes, Elasticsearch, RESTful APIs."
          ] },
          { title: "Project 4 — Social-media topic detection & sentiment analysis (Morocco)", items: [
            "Analysed large heterogeneous datasets (text, tabular data, documents); real-time extraction of unstructured data — hundreds of articles from multiple sources, behaviours and formats (text, charts, tables) — Big Data processing.",
            "Data analysis and database design; prototyping in Jupyter notebooks with the Python AI/data-science stack.",
            "Trained ML models for sentiment classification and news-topic detection on French utterances (comments/posts).",
            "Configured and deployed Kubernetes pods with YAML configs; documentation and training.",
            "Environment: Python 3.8, Twitter API, Scrapy, NLTK, scikit-learn, word2vec, BoW, TF-IDF, BERTopic, Docker, PostgreSQL."
          ] },
          { title: "Project 5 — Face AI", items: [
            "End-to-end face recognition and facial-attribute analysis pipeline (age, gender, emotion, ethnicity) in Python — a hybrid framework wrapping state-of-the-art pre-trained models: VGG-Face, Google FaceNet, OpenFace, Facebook DeepFace, DeepID, ArcFace, Dlib and SFace.",
            "Environment: Python (Jupyter), TensorFlow, Keras, Docker, multiprocessing, GPU parallelisation, cron, Elasticsearch."
          ] },
          { title: "Project 6 — Multilingual dictionary", items: [
            "An alternative to the alphabetical dictionary where words are grouped by meaning and by familiar structural hierarchies.",
            "Environment: Python (Jupyter), Docker, SQL Server, Solr, WordNet (OMW)."
          ] }
        ],
        env: ["Python", "TensorFlow", "Keras", "PyTorch", "OpenCV", "NLTK", "scikit-learn", "BERTopic", "Scrapy", "Twitter API", "Flask", "Docker", "Kubernetes", "Elasticsearch", "Solr", "MySQL", "PostgreSQL", "SQL Server"]
      },
      {
        id: "tw-ds",
        color: "3wds",
        role: "Data Scientist",
        org: "3W Media — Imperium",
        short: "Data Scientist",
        place: "Casablanca, Morocco",
        start: "2020-03",
        end: "2020-08",
        period: "03/2020 – 08/2020",
        context: "Detection and recognition of objects (brands, logos, shapes…) in advertising screens on TV streams, billboards and newspapers.",
        groups: [
          { title: "Tasks", items: [
            "Comparative study of state-of-the-art object-detection algorithms (YOLO, RetinaNet, Faster R-CNN, Mask R-CNN, Cascade Mask R-CNN…).",
            "End-to-end pipeline in Python, from data scraping to production deployment.",
            "Scraped images and videos from social media; built a data-cleaning pipeline (duplicate-image removal).",
            "Designed a new data-augmentation strategy for object-detection problems.",
            "Trained the labelling team.",
            "Trained models for object detection and instance segmentation.",
            "Deployed a Flask API to serve the models."
          ] }
        ],
        env: ["Unix/Linux (CPU-GPU)", "Python", "Jupyter", "VS Code", "PyTorch", "Detectron2", "RetinaNet", "Faster R-CNN", "Mask R-CNN", "Cascade Mask R-CNN", "OpenCV", "Docker", "Flask", "Selenium"]
      }
    ]
  },

  projects: {
    title: "Projects",
    tagline: "Professional work described at CV level, plus personal and open-source projects",
    filters: [
      { id: "all", label: "All" },
      { id: "adtech", label: "AdTech & Cloud" },
      { id: "data", label: "Data engineering" },
      { id: "ml", label: "ML & AI" },
      { id: "oss", label: "Personal & open source" }
    ],
    items: [
      {
        id: "audience-intelligence", cats: ["adtech", "ml", "data"],
        org: "RMC BFM ADS (Altice Media) · 2025 – 2026",
        title: "Audience Intelligence — EPG → LLM matching → CTV segments",
        summary: "End-to-end pipeline that collects live TV schedules, matches programmes to the catch-up catalogue with Claude on AWS Bedrock, and exports Implicit audience segments to the Mediarithmics DMP.",
        stack: ["AWS Bedrock", "Claude 3 Haiku", "Athena", "Glue", "awswrangler", "SES", "ECS Fargate", "Terraform", "Node.js", "pytest"],
        sections: [
          { title: "What it does", items: [
            "Collects the EPG of RMC Story, RMC Life and RMC Découverte, matches each programme against the FreeWheel series catalogue and the Replay/catch-up index, then builds and ships audience segments to Mediarithmics for programmatic CTV targeting.",
            "Second flow: rebuilds CTV <i>viewing journeys</i> from FreeWheel ad calls and sends them to the DMP as activity events (BFM TV, RMC Découverte, RMC Story, RMC Life × Samsung / LG / TCL / Android TV / Apple TV).",
            "IAB TCF consent decoded with the official IAB library through a small Node sidecar, deployed on ECS Fargate Spot for about 3 $/month; each run is logged locally and in CloudWatch."
          ] },
          { title: "Engineering highlights", items: [
            "2-pass LLM matching (strict ≥ 80, relaxed ≥ 60) with graded scoring and model-written reasoning; ambiguous cases refined automatically.",
            "−82.5 % tokens through a compact index, batching and adaptive chunking; result cache (−80 %) and temporal pre-filtering (−67 %) on Bedrock costs.",
            "Benchmark V1→V4: 95.1 % match rate with Claude 3 Haiku vs 55.8 % with Claude Sonnet 4.5, at 92 % lower cost.",
            "195 automated tests, GitHub Actions CI, Terraform infrastructure; progressive migration of legacy Windows-VM jobs to AWS."
          ] }
        ],
        role: "Author and maintainer (AdTech team)."
      },
      {
        id: "pytalendshift", cats: ["data"],
        org: "RMC BFM ADS (Altice Media) · 2024 – 2026",
        title: "Enterprise ETL modernisation — Talend → Python data warehouse",
        summary: "Replaced the legacy Talend ETL with a modular Python architecture feeding the PostgreSQL data warehouse from Oracle, Salesforce and Athena — 80 % faster, no licence.",
        stack: ["Python 3.9+", "pandas", "pickle", "Oracle", "PostgreSQL", "Salesforce", "AWS Athena", "Windows Task Scheduler", "SMTP alerts"],
        sections: [
          { title: "Challenge", items: [
            "The Talend jobs were over-complex and redundant: queries for simple renames, temporary CSV files re-read at every step, tables fully loaded by one job then re-read by the next."
          ] },
          { title: "Architecture", items: [
            "14 specialised modules (core, db, helpers, tools) and 15+ numbered routines (referentials, revenue indicators, spots, planning, Salesforce imports, dynamic flat imports).",
            "Direct source → pandas → destination mapping; pickle serialisation keeps column types and removes re-transformation.",
            "Structured logging, email alerting on anomalies, configurable incremental loading with change-data-capture style deltas."
          ] },
          { title: "Business results", items: [
            "80 % reduction in processing time; daily processing from about 8 hours to 1.5 hours.",
            "Eliminated €50K+ annual Talend licensing costs.",
            "Improved data quality with a 99.95 % accuracy rate; easier maintenance in the open-source Python ecosystem."
          ] }
        ],
        role: "Designed, built and run in production."
      },
      {
        id: "vast-platform", cats: ["adtech"],
        org: "RMC BFM ADS (Altice Media) · 2024 – 2025",
        title: "Video transcoding & VAST generation platform (addressable TV)",
        summary: "Serverless pipeline that lets publishers deliver addressable-TV creatives: containerised Lambda transcoding with FFmpeg, BTVS compliance checks, VAST XML generation and a secured upload UI.",
        stack: ["AWS Lambda", "Docker", "FFmpeg", "OpenCV", "MediaInfo", "S3", "DynamoDB", "API Gateway", "CloudFront OAC", "Cognito", "Lambda@Edge", "FreeWheel API"],
        sections: [
          { title: "Technical implementation", items: [
            "Containerised Lambda functions running FFmpeg, OpenCV and MediaInfo for transcoding, quality validation, duration correction and format standardisation.",
            "Broadcast compliance for BTVS: 1920×1080, 50 fps, −24 LUFS loudness and true-peak checks.",
            "Dynamic creation of IAB-compliant VAST tags with S3 integration; presigned upload URLs and a provisioning database of delivered creatives.",
            "Web front end for upload and configuration; Cognito authentication, Lambda@Edge and CloudFront OAC to protect content; FreeWheel API integration for creative management.",
            "Real-time event tracking for campaign metrics; log pipeline for the VAST responder (device type, publisher ID, origin) into Athena."
          ] },
          { title: "Business impact", items: [
            "Reduced video processing time by 75 % through parallel serverless execution.",
            "99.9 % uptime with automatic scaling and fault tolerance.",
            "60 % lower operational costs than a server-based solution; real-time delivery of advertising content across channels."
          ] }
        ],
        role: "Author — architecture, code, infrastructure and operations."
      },
      {
        id: "audio-to-video", cats: ["adtech", "ml"],
        org: "RMC BFM ADS (Altice Media) · 2024",
        title: "Audio → video conversion with AI transcription",
        summary: "Turns radio spots (WAV) into subtitled MP4 videos with logo overlay and a campaign QR code, using AWS Transcribe and FFmpeg.",
        stack: ["AWS Transcribe", "FFmpeg", "Python", "S3", "Lambda", "QR generation"],
        sections: [
          { title: "Features", items: [
            "French speech recognition with AWS Transcribe, rendered as synchronised subtitles.",
            "Automated MP4 generation with logo overlay, title card and dynamic QR code for campaign tracking.",
            "Automated S3 storage with secure URL generation for multi-platform delivery; validation of audio/video sync."
          ] },
          { title: "Outcome", items: [
            "Manual video production time reduced by 90 %; about 95 % transcription accuracy on French content; scalable to many campaigns at once."
          ] }
        ],
        role: "Author."
      },
      {
        id: "aaf", cats: ["adtech", "data"],
        org: "RMC BFM ADS (Altice Media) · 2024 – 2025",
        title: "Advertising billing automation (AAF)",
        summary: "Reconciles declared amounts with billing calls: OCR on PDF invoices, ad-delivery data from Xandr/AppNexus and FreeWheel APIs, and GDPR consent validation.",
        stack: ["AWS Textract", "AppNexus / Xandr API", "FreeWheel API", "Athena", "S3", "Lambda", "IAB TCF", "SHA-256"],
        sections: [
          { title: "What it does", items: [
            "Reads PDF invoices with Textract and extracts dates, amounts and currencies with a mapping configuration per supplier.",
            "Collects delivery data through the AppNexus and FreeWheel APIs and reconciles them with the declared amounts in an Athena mapping table.",
            "Decodes IAB TCF consent strings, hashes IP addresses (SHA-256) and stores results in a compliant form."
          ] }
        ],
        role: "Author."
      },
      {
        id: "yieldai-forecasting", cats: ["data", "ml"],
        org: "RMC BFM ADS (Altice Media) · 2026",
        title: "YieldAI — weekly ad-inventory forecasting on ECS",
        summary: "Weekly forecasting of ad requests and audience share, run as a Step Functions chain of ECS Fargate tasks with Athena as the data layer, deployed with Terraform and GitHub Actions.",
        stack: ["Python 3.11", "LightGBM", "Holt / ARIMA", "ECS Fargate", "Step Functions", "EventBridge", "Athena", "S3", "SNS", "Terraform", "GitHub Actions (OIDC)", "uv", "ruff"],
        sections: [
          { title: "Pipeline", items: [
            "Ingest → (train on the first Monday) → predict → backtest → monitor, each step an ECS task started only if the previous one exited 0; SNS alert on failure.",
            "Models per environment and site section (LightGBM, Holt, ARIMA); artefacts on S3; prediction CSVs consumed by downstream tools."
          ] },
          { title: "My contribution", items: [
            "Industrialisation: AWS infrastructure (Terraform audit and roll-out, S3 bucket layout, Athena workgroups and quotas), CI/CD with OIDC, container images, environment migration and replay of multi-month end-to-end runs on real data.",
            "Production runs and incident analysis; fixes proven on real data (fill-rate parity, model-run tracking, multi-target email reports)."
          ] }
        ],
        role: "Infrastructure, deployment, CI/CD and production operations — forecasting models designed by a partner consultancy."
      },
      {
        id: "sales-copilot", cats: ["adtech", "ml"],
        org: "RMC BFM ADS (Altice Media) · 2026",
        title: "Sales Copilot — from an agency brief to a costed recommendation",
        summary: "Paste a media-agency brief; Claude on Bedrock extracts the criteria, they are mapped to DMP segments, confronted with forecasted avails, and turned into a budget/CPM feasibility and mix recommendation.",
        stack: ["Python (stdlib http.server)", "AWS Bedrock", "Claude Haiku 4.5", "Athena", "Mediarithmics segments", "EC2", "IAM roles"],
        sections: [
          { title: "Flow", items: [
            "Brief → extraction of advertiser, target, budget, period and environments (LLM with heuristic fallback, always editable).",
            "Target → matching against 538 DMP segments, validated by the salesperson.",
            "Avails → forecasted ad requests × unsold share on the selected segments, period and environments.",
            "Recommendation → feasibility, environment mix, deliverable impressions and a day-by-day curve."
          ] },
          { title: "Notes", items: [
            "Zero third-party web framework; light/dark editorial UI; credentials only through the instance IAM role in production."
          ] }
        ],
        role: "Author (V1 prototype)."
      },
      {
        id: "may", cats: ["adtech"],
        org: "RMC BFM ADS (Altice Media) · 2026",
        title: "MAY — policy-engine gateway between an LLM agent and the ad server",
        summary: "An API that lets a partner's LLM agent create and manage direct-deal campaigns on the SpringServe ad server without ever holding our credentials — a policy engine decides what may pass.",
        stack: ["FastAPI", "Caddy (TLS)", "EC2", "AWS CDK", "S3 audit log", "CloudWatch", "pytest"],
        sections: [
          { title: "Design", items: [
            "Partner sees a stable HTTPS URL, an API key and a restricted business contract; never an IP, an AWS name or an ad-server identifier.",
            "Every write goes through a policy engine — the single guard rail between a third-party LLM and a billing ad server; kill switch and at most one alert per hour.",
            "Audit trail in S3; campaigns appear in the ad-server console under a dedicated demand partner with the house naming convention."
          ] }
        ],
        role: "Infrastructure, deployment, CI and documentation — business logic (service, mapper, client) by a colleague."
      },
      {
        id: "consent-etl", cats: ["data", "adtech"],
        org: "RMC BFM ADS (Altice Media) · 2025 – 2026",
        title: "FreeWheel consent ETL with self-healing 90-day recovery",
        summary: "Daily job that decodes IAB TCF consent from FreeWheel impressions into Athena — and re-audits the last 90 days every run because source files keep arriving days later.",
        stack: ["Python", "Athena", "Glue", "S3", "IAB TCF", "SHA-256", "Windows Task Scheduler"],
        sections: [
          { title: "The problem", items: [
            "Source Parquet files were delivered up to 43 days after the event date; a J+1 job silently produced truncated partitions that a simple 'folder exists' check never re-detected."
          ] },
          { title: "The fix", items: [
            "Two-stage, cheapest-first detection: an S3 fingerprint (file count, total size, max modified date) skips 95 %+ of dates with no Athena cost; only drifted dates are re-queried and repaired.",
            "Watermarks, resumable runs after interruption, IP hashing and partitioned output by date."
          ] }
        ],
        role: "Author."
      },
      {
        id: "visit-analyzer", cats: ["adtech"],
        org: "RMC BFM ADS (Altice Media) · 2026",
        title: "Visit Analyzer — real-time TCF consent inside the DMP activity stream",
        summary: "A mediarithmics Activity Analyzer plugin in TypeScript that decodes IAB TCF strings in-stream and emits $set_user_choice events so consent is tracked correctly on set-top boxes and smart TVs.",
        stack: ["TypeScript 5", "Node ≥ 18", "@iabtcf/core", "mediarithmics plugins SDK", "vitest"],
        sections: [
          { title: "How it works", items: [
            "Resolves the channel, sorts events oldest-first, deduplicates consent strings, decodes each distinct string once with the official IAB library, classifies it positive or negative for the required vendors and purposes, and injects at most two events at the right position.",
            "60 tests: unit, bot-to-bot and golden input → output comparisons."
          ] }
        ],
        role: "Author."
      },
      {
        id: "lake-formation", cats: ["data", "adtech"],
        org: "RMC BFM ADS (Altice Media) · 2026",
        title: "Governed cross-account data sharing with Lake Formation",
        summary: "Read-only, column-level sharing of Athena views from the AdTech account to partner accounts — Lake Formation grants instead of bucket policies, every access audited in CloudTrail.",
        stack: ["AWS Lake Formation", "Athena", "Glue Catalog", "S3", "CloudTrail", "IAM"],
        sections: [
          { title: "Design", items: [
            "The Lake Formation service role reads S3 on behalf of the partner; partners never get direct S3 access.",
            "One grant per partner, per database/table/column; rollback and validation procedures; post-mortem of a June 2026 incident documented."
          ] }
        ],
        role: "Author."
      },
      {
        id: "lat-sftp", cats: ["adtech", "data"],
        org: "RMC BFM ADS (Altice Media) · 2025 – 2026",
        title: "Linear Ad Tracking — operator SFTP exchange and FreeWheel segments",
        summary: "A CloudFormation-managed AWS Transfer Family SFTP endpoint for telecom operators, a daily Oracle → CSV → S3 extract, and a job that turns exposure returns into FreeWheel audience segments.",
        stack: ["AWS Transfer Family", "Lambda identity provider", "CloudFormation", "S3", "Oracle", "Python", "FreeWheel AIM", "pytest"],
        sections: [
          { title: "Components", items: [
            "One shared SFTP server with per-operator users, password authentication through a Lambda identity provider, and dedicated input/output prefixes.",
            "Daily ETL extracting the ad log from Oracle to CSV for each operator; cost and security investigations (elastic IP, SFTP attack analysis).",
            "LAT job: aggregates household exposures returned by operators, assigns segment groups and uploads taxonomy and membership files to FreeWheel (daily add / campaign-control replace modes) — 59 tests."
          ] }
        ],
        role: "Author."
      },
      {
        id: "planning-monitor", cats: ["adtech"],
        org: "RMC BFM ADS (Altice Media) · 2025",
        title: "FreeWheel linear planning monitor",
        summary: "Checks every day that tomorrow's airings are registered in FreeWheel for three TV channels and raises SMS and email alerts on anomalies.",
        stack: ["Python", "FreeWheel API", "AWS SNS", "AWS SES", "CloudFormation"],
        sections: [
          { title: "Use cases", items: [
            "Detects timeouts or failures of the MediaPilot → FreeWheel planning sync, sends critical alerts and feeds reliability reporting."
          ] }
        ],
        role: "Author (in production)."
      },
      {
        id: "fw-bulk", cats: ["adtech"],
        org: "RMC BFM ADS (Altice Media) · 2024 – 2025",
        title: "FreeWheel bulk placements & weather-based targeting",
        summary: "Bulk creation of placements, insertion orders and creatives from CSV, plus a variant that drives placements from live OpenWeatherMap conditions.",
        stack: ["Python", "FreeWheel API v4", "OpenWeatherMap", "Athena", "awswrangler", "email reports"],
        sections: [
          { title: "Features", items: [
            "Complete workflow from campaign creation to activation, with geographic targeting by postal code and audience segmentation.",
            "Retry and state validation for reliability; run history stored in Athena; email notifications.",
            "Weather variant: fetches current conditions and updates placement targeting accordingly."
          ] }
        ],
        role: "Author."
      },
      {
        id: "aws-cost", cats: ["data", "adtech"],
        org: "RMC BFM ADS (Altice Media) · 2025",
        title: "AWS cost analysis & CloudWatch log analytics",
        summary: "Extracts Lambda logs from CloudWatch into partitioned Parquet on S3 and Athena to analyse millions of events, spot consumption anomalies and produce billing reports.",
        stack: ["CloudWatch Logs", "Athena", "Parquet", "S3", "Lambda alerts", "Python"],
        sections: [
          { title: "Details", items: [
            "Parses request logs (publisher ID, device type, origin, headers) into an Athena table; extended-period searches and specific-key lookups.",
            "HTML reporting and email alerting; a Lambda alert function for anomalies."
          ] }
        ],
        role: "Author."
      },
      {
        id: "signage-extension", cats: ["adtech"],
        org: "RMC BFM ADS (Altice Media) · 2025",
        title: "Digital-signage automation — Chrome extension",
        summary: "A Manifest V3 extension replacing fragile PowerShell/DevTools scripts: automatic multi-site login, smooth scrolling and real-time control for office screens.",
        stack: ["Chrome Extension (MV3)", "JavaScript", "Service worker"],
        sections: [
          { title: "Why", items: [
            "Previous scripts suffered unstable DevTools connections, firewall issues and frequent restarts; the extension runs natively in the browser with a modern control interface."
          ] }
        ],
        role: "Author."
      },
      {
        id: "vpc-study", cats: ["adtech"],
        org: "RMC BFM ADS (Altice Media) · 2026",
        title: "VPC, subnets & NAT Gateway — architecture study",
        summary: "A read-only audit of the real infrastructure against official AWS documentation to decide whether a custom VPC with private subnets and NAT benefits the S3 ↔ Lambda ↔ EC2 flows.",
        stack: ["AWS VPC", "VPC endpoints", "NAT Gateway", "Lambda", "EC2", "AWS CLI"],
        sections: [
          { title: "Outcome", items: [
            "Cost comparison (~14 € vs +60–90 €/month), two common misconceptions corrected from the documentation, recommendation: gateway endpoints first, then private subnets where EC2 justifies them."
          ] }
        ],
        role: "Author."
      },
      {
        id: "hadoop-gcp", cats: ["data"],
        org: "BPCE-SI · 2022 – 2024",
        title: "Enterprise Hadoop data lake & Cloudera → GCP migration",
        summary: "Big Data pipelines for every division of Caisse d'Epargne Île-de-France on a Cloudera cluster, and a dual-run migration to Google Cloud (BigQuery).",
        stack: ["Cloudera", "Hadoop", "HDFS", "Hive", "Spark", "Scala", "PySpark", "Oracle", "GCP", "BigQuery", "VTOM"],
        sections: [
          { title: "Technical scope", items: [
            "Automated ingestion from Oracle databases into the Hadoop data lake (HDFS, Hive); high-performance processing with Spark/Scala and PySpark.",
            "Data-governance policies and monitoring; technical concept documents on Confluence.",
            "Dual-run migration from Cloudera to Google Cloud Platform."
          ] },
          { title: "Business impact", items: [
            "Data availability improved from 85 % to 99.5 %.",
            "Processing times reduced by 65 % through optimisation.",
            "Infrastructure costs down 40 % after migration; automated validation frameworks for data quality."
          ] }
        ],
        role: "Big Data Engineer in the team."
      },
      {
        id: "object-detection", cats: ["ml"],
        org: "3W Media — Imperium · 2020",
        title: "Object detection & brand recognition in advertising media",
        summary: "State-of-the-art detection of brand logos and ads across TV streams, billboards and print, from scraping to a production Flask API.",
        stack: ["PyTorch", "Detectron2", "YOLO", "RetinaNet", "Faster R-CNN", "Mask R-CNN", "OpenCV", "Flask", "Docker", "Selenium"],
        sections: [
          { title: "Technical work", items: [
            "Comparative evaluation of YOLO, RetinaNet, Faster R-CNN, Mask R-CNN and Cascade Mask R-CNN.",
            "End-to-end pipeline from social-media scraping to deployment; duplicate-image cleaning; a new augmentation strategy for detection.",
            "Custom training for detection and instance segmentation; Flask REST API for real-time inference."
          ] },
          { title: "Results", items: [
            "94.2 % mAP on the custom dataset; 45 ms per image on GPU.",
            "Deployed to production serving 10K+ requests daily; trained a team of 5 annotators for consistent labelling."
          ] }
        ]
      },
      {
        id: "social-nlp", cats: ["ml"],
        org: "3W Media — Imperium · 2020 – 2021",
        title: "Social-media intelligence & sentiment analysis platform",
        summary: "Topic detection and French sentiment analysis on Moroccan news and social media, processed at scale and served through a real-time dashboard.",
        stack: ["BERT / BERTopic", "NLTK", "scikit-learn", "word2vec", "TF-IDF", "Twitter API", "Scrapy", "PostgreSQL", "Kubernetes"],
        sections: [
          { title: "Techniques", items: [
            "BERT-based topic detection for real-time trend identification; custom French sentiment classifier.",
            "Real-time processing of hundreds of articles a day from multiple sources; Word2Vec, TF-IDF and Bag-of-Words representations.",
            "Kubernetes deployment with auto-scaling."
          ] },
          { title: "Results", items: [
            "50K+ social posts processed daily with 95 % uptime; 89–91 % accuracy in French sentiment classification; topic-detection latency under 2 seconds; real-time trend dashboard."
          ] }
        ]
      },
      {
        id: "face-ai", cats: ["ml"],
        org: "3W Media — Imperium · 2021",
        title: "Multi-model face recognition & attribute analysis",
        summary: "Hybrid framework wrapping VGG-Face, FaceNet, OpenFace, DeepFace, DeepID, ArcFace, Dlib and SFace for recognition plus age, gender, emotion and ethnicity analysis.",
        stack: ["TensorFlow", "Keras", "OpenCV", "Dlib", "GPU", "Elasticsearch", "Docker"],
        sections: [
          { title: "Implementation", items: [
            "GPU parallelisation and multiprocessing for real-time inference; containerised, scheduled with cron; face embeddings stored and searched in Elasticsearch."
          ] },
          { title: "Results", items: [
            "99.1 % recognition accuracy on LFW; 1000+ faces per minute with GPU acceleration; 0.1 % false-positive rate with ensembles; deployed across several production environments."
          ] }
        ]
      },
      {
        id: "speech-audio", cats: ["ml"],
        org: "3W Media — Imperium · 2020 – 2021",
        title: "Speech & audio AI — transcription, ad fingerprinting, gender detection",
        summary: "Three audio systems for media monitoring: offline speech-to-text for 17 languages, Landmark audio fingerprinting to find known ad spots in broadcast archives, and speaker/gender detection to measure speaking time.",
        stack: ["Python", "TensorFlow", "Keras", "KerasTuner", "NumPy", "pydub", "Docker", "Kubernetes", "Elasticsearch", "MySQL"],
        sections: [
          { title: "Systems", items: [
            "Transcription: offline recognition with pre-trained models for 17 languages and dialects (Arabic, French, English…), multiprocessing, scheduled by cron, indexed in Elasticsearch.",
            "Audio fingerprinting: locate instances of known TV/radio ads inside long recordings using Landmark-based fingerprints.",
            "ASR gender detection: automatic speaking and gender detection to quantify women's speaking time in TV and radio programmes, exposed as a RESTful service on Kubernetes."
          ] }
        ]
      },
      {
        id: "web-mining", cats: ["data"],
        org: "IMPERIUM · 2021 – 2022",
        title: "End-to-end news web-mining microservices",
        summary: "Independent APIs for scraping, crawling, readability transformation and PostgreSQL storage, scheduled cyclically with monitoring and error handling for changing site structures.",
        stack: ["Python", "Scrapy", "Selenium", "BeautifulSoup", "readability", "PostgreSQL", "Docker", "Airflow"],
        sections: [
          { title: "Also at IMPERIUM", items: [
            "Training pipeline restructured from notebooks into an OOP project with multiprocessing, multithreading and GPU parallelisation — near real-time predictions on limited hardware.",
            "AI models packaged as Docker microservices; deployment automated with Airflow and Kubernetes; PyQt5 desktop tools for internal use."
          ] }
        ]
      },
      {
        id: "multilingual-dict", cats: ["ml", "data"],
        org: "3W Media — Imperium · 2021",
        title: "Multilingual dictionary",
        summary: "A dictionary organised by meaning and structural hierarchies rather than alphabetically, built on WordNet (OMW) with a Solr search back end.",
        stack: ["Python", "WordNet (OMW)", "Solr", "SQL Server", "Docker"],
        sections: [
          { title: "Details", items: [
            "Semantic grouping of words across languages with familiar structural hierarchies; indexed for fast lookup."
          ] }
        ]
      },
      {
        id: "anli", cats: ["oss", "ml"],
        org: "Personal · 2026",
        title: "ANLI agentic-IA — Mixture-of-Agents for adversarial NLI",
        summary: "Instead of one model classifying a premise/hypothesis pair, a small team of LLM agents collaborates: three specialised proposers in parallel, an adversarial critic, then an aggregator that decides.",
        stack: ["Python", "OpenAI-compatible APIs", "Ollama (local)", "JSON schemas", "pytest", "matplotlib"],
        sections: [
          { title: "Design", items: [
            "Roles: logical prover, negation analyst, counterfactual reasoner → critic → aggregator; heterogeneous model per role or a single local model (Qwen on an RTX 3060).",
            "Validated JSON contracts with retry, per-role result cache for resumable runs, ablations (critic on/off, self-consistency voting), cost estimation from measured tokens.",
            "Documented: architecture, dataset statistics, model/role assignment, costs, literature on model diversity."
          ] }
        ],
        role: "Personal project — private repository, walkthrough available on request."
      },
      {
        id: "workjobs", cats: ["oss"],
        org: "Personal · 2025 – 2026",
        title: "WorkJobs — multi-platform job scraping & auto-apply suite",
        summary: "One command runs every profile × platform pair across ten French and international job boards, tracks what was already done, and emails an HTML report — with a browser-free path wherever a public API exists.",
        stack: ["Python 3.12", "Selenium (Edge)", "Playwright / Patchright", "GraphQL & JSON APIs", "Windows Task Scheduler", "pytest (1 194 tests)"],
        sections: [
          { title: "Engineering", items: [
            "Platform modules for FreeWork, HelloWork, Collective, LinkedIn outreach, Welcome to the Jungle (Algolia index), Monster, Indeed (GraphQL), Malt, APEC and Arc.dev.",
            "Per-profile run locks, repost deduplication over a rolling 90-day window, unified run logs, resilient browser launch, questionnaire detection for forms that need a human.",
            "Analytics dashboard, scheduled unattended runs, 1 194 pure-Python unit tests with the browser layer mocked.",
            "Companion tools: a Chrome extension for FreeWork and a LinkedIn scraper."
          ] }
        ],
        role: "Personal project — private repositories, walkthrough available on request."
      },
      {
        id: "dental", cats: ["oss", "ml"],
        org: "Personal · 2022",
        title: "Dental disease detection on panoramic X-rays",
        summary: "Detects and localises caries, periodontitis, impacted teeth and other conditions on panoramic dental X-rays with Faster R-CNN and transfer learning.",
        stack: ["Python", "TensorFlow", "Keras", "OpenCV", "Faster R-CNN", "Google Colab", "Kaggle"],
        sections: [
          { title: "Details", items: [
            "Image processing, object detection and localisation, CNN transfer learning; output images and presentation included."
          ] }
        ]
      },
      {
        id: "bigdata-lab", cats: ["oss", "data"],
        org: "Personal · 2022 – 2025",
        title: "Big Data lab — Spark, Scala, Kafka, Cloudera",
        summary: "Course notes, notebooks and projects on Spark (2.3 → 3.3), Scala, Kafka and the Cloudera QuickStart VM, kept as a living reference.",
        stack: ["Spark", "Scala", "PySpark", "Kafka", "Cloudera", "Jupyter"],
        sections: [
          { title: "Contents", items: [
            "Cloudera tutorial, Scala course material and a Scala tutorial repository, Spark notebooks and mini-projects."
          ] }
        ],
        role: "Personal notes — private repositories."
      },
      {
        id: "classics", cats: ["oss", "ml"],
        org: "Personal & academic · 2019 – 2023",
        title: "Earlier open-source work",
        summary: "Desktop applications in Java, academic ML notebooks and an Arduino robot — the projects that started the GitHub profile.",
        stack: ["Java Swing", "Java RMI", "JEE", "Python", "Dlib", "scikit-learn", "Arduino", "Android"],
        sections: [
          { title: "Repositories", items: [
            "<a href=\"https://github.com/m-elkhou/Tetris\" target=\"_blank\" rel=\"noopener noreferrer\">Tetris</a> — design and development of the video game in Java (★ 16).",
            "<a href=\"https://github.com/m-elkhou/FileBrowser\" target=\"_blank\" rel=\"noopener noreferrer\">FileBrowser</a> — a file browser in Java Swing (★ 12).",
            "<a href=\"https://github.com/m-elkhou/Facial_Expression_Detection\" target=\"_blank\" rel=\"noopener noreferrer\">Facial_Expression_Detection</a> — Dlib face landmarks + multi-class SVM to recognise emotions (★ 10).",
            "<a href=\"https://github.com/m-elkhou/Chatt-App\" target=\"_blank\" rel=\"noopener noreferrer\">Chatt-App</a> — desktop messaging and file sharing with Java RMI and Swing (★ 6).",
            "<a href=\"https://github.com/m-elkhou/Web_Mining\" target=\"_blank\" rel=\"noopener noreferrer\">Web_Mining</a>, <a href=\"https://github.com/m-elkhou/Image_Mining\" target=\"_blank\" rel=\"noopener noreferrer\">Image_Mining</a>, <a href=\"https://github.com/m-elkhou/Data_Mining\" target=\"_blank\" rel=\"noopener noreferrer\">Data_Mining</a> — academic NLP, text/image mining and scraping projects.",
            "<a href=\"https://github.com/m-elkhou/Quiz-Generator\" target=\"_blank\" rel=\"noopener noreferrer\">Quiz-Generator</a> (JEE), <a href=\"https://github.com/m-elkhou/Security-robot\" target=\"_blank\" rel=\"noopener noreferrer\">Security-robot</a> (Arduino smart car), <a href=\"https://github.com/m-elkhou/CreditCard\" target=\"_blank\" rel=\"noopener noreferrer\">CreditCard</a> (Android)."
          ] }
        ],
        links: [{ label: "All repositories", href: "https://github.com/m-elkhou?tab=repositories" }]
      }
    ]
  },

  impact: {
    title: "Impact",
    tagline: "Quantified results and recognition across the career",
    metrics: [
      { n: "80 %", l: "ETL processing-time reduction", d: "Python architecture replacing the legacy Talend infrastructure." },
      { n: "€50K+", l: "Annual cost savings", d: "Talend licensing costs eliminated with open-source Python." },
      { n: "99.9 %", l: "System uptime", d: "Serverless video platform with automatic scaling and fault tolerance." },
      { n: "10M+", l: "Records processed daily", d: "High-volume processing across several enterprise systems." },
      { n: "75 %", l: "Faster video processing", d: "Parallel serverless execution for advertising content." },
      { n: "99.95 %", l: "Data-quality accuracy", d: "Robust validation and error-handling mechanisms." },
      { n: "95.1 %", l: "LLM match rate", d: "EPG ↔ catalogue matching with Claude 3 Haiku on Bedrock, at 92 % lower cost than the larger model." },
      { n: "−82.5 %", l: "Tokens per Bedrock call", d: "Compact index, batching and adaptive chunking." }
    ],
    blocks: [
      { title: "Leadership & team impact", items: [
        "<b>BPCE-SI:</b> led the Big Data team's upskilling on the Cloudera platform, mentored 3 junior engineers.",
        "<b>IMPERIUM:</b> managed a cross-functional team of 8 across ML engineering and data science.",
        "<b>3W Media:</b> trained an annotation team of 5 specialists for computer-vision projects.",
        "<b>Knowledge transfer:</b> 20+ technical workshops on cloud architecture and ML deployment."
      ] },
      { title: "Project management", items: [
        "<b>Migrations:</b> led 3 major platform migrations with zero downtime.",
        "<b>Agile:</b> implemented Scrum practices, improving delivery speed by 40 %.",
        "<b>Stakeholders:</b> coordinated with C-level executives and technical teams.",
        "<b>Risk:</b> comprehensive disaster-recovery and backup strategies."
      ] },
      { title: "Innovation & research", items: [
        "<b>Patents:</b> 2 pending applications for video processing and AI automation.",
        "<b>Publication:</b> co-authored paper on \"Scalable Video Processing in Cloud Environments\".",
        "<b>Open source:</b> contributions to 5+ projects, 500+ GitHub stars.",
        "<b>Writing:</b> 15+ technical articles on Medium and LinkedIn."
      ] },
      { title: "Recognition & certifications", items: [
        "<b>AWS:</b> Solutions Architect Associate in progress; certified on CloudFront, S3 and Big Data with Spark and Hadoop.",
        "<b>AI/ML:</b> Deep Learning Specialization (DeepLearning.AI) — neural networks, computer vision.",
        "<b>Big Data:</b> Hadoop Platform and Application Framework (UC San Diego), ETL pipelines, Scala, distributed systems."
      ] }
    ],
    yearsTitle: "Business impact by year",
    years: [
      { year: "2026", title: "RMC BFM ADS — AI & industrialisation", items: [
        "Audience-intelligence pipeline in production: 95.1 % LLM match rate at 92 % lower cost; Bedrock spend cut by cache (−80 %) and pre-filtering (−67 %).",
        "Forecasting pipeline industrialised on ECS Fargate/Step Functions with Terraform and OIDC CI/CD; multi-month end-to-end runs on real data.",
        "Governed cross-account data sharing (Lake Formation), self-healing consent ETL, real-time consent tracking in the DMP."
      ] },
      { year: "2024", title: "RMC BFM ADS — Digital transformation", items: [
        "Operational costs reduced by 60 % through serverless architecture adoption.",
        "Content delivery speed improved by 75 % with global CDN optimisation.",
        "Real-time advertising analytics processing 50M+ events daily.",
        "99.9 % SLA compliance for critical media-processing workflows."
      ] },
      { year: "2023", title: "BPCE-SI — Big Data modernisation", items: [
        "Data availability increased from 85 % to 99.5 % through platform optimisation.",
        "Infrastructure costs reduced by 40 % via the cloud-migration strategy.",
        "Data-processing speed improved by 65 % with Spark optimisation.",
        "Data quality enhanced with automated validation frameworks."
      ] },
      { year: "2022", title: "IMPERIUM — AI/ML platform development", items: [
        "Near real-time ML inference with a 95 % accuracy improvement.",
        "Model training time reduced by 70 % through distributed computing.",
        "Scalable microservices architecture serving 1M+ requests.",
        "Automated ML pipeline reducing deployment time by 80 %."
      ] },
      { year: "2021", title: "3W Media — Computer-vision innovation", items: [
        "94.2 % mAP object-detection accuracy on production datasets.",
        "Inference time reduced to 45 ms, enabling real-time video analysis.",
        "10K+ daily requests with 99.8 % uptime.",
        "Data-annotation standards improving model consistency."
      ] }
    ]
  },

  skills: {
    title: "Skills",
    tagline: "My technical expertise",
    proficiency: [
      { title: "Programming languages", items: [
        { name: "Python", pct: 98 },
        { name: "SQL / PL/SQL", pct: 95 },
        { name: "Scala", pct: 90 },
        { name: "Java", pct: 85 }
      ] },
      { title: "Cloud & Big Data", items: [
        { name: "ETL & data pipelines", detail: "Talend, Airflow, VTOM, Step Functions, custom Python ETL", pct: 96 },
        { name: "Amazon Web Services", detail: "Athena, S3, Lambda, API Gateway, EC2, ECS, Glue, Lake Formation, IAM, CloudFront, Cognito, CloudWatch, Transcribe, Textract, Bedrock", pct: 95 },
        { name: "Big Data stack", detail: "Spark, Hadoop (HDFS, Hive, HBase, Pig, Storm), Cloudera, Kafka", pct: 92 },
        { name: "Google Cloud Platform", detail: "BigQuery, Cloud Storage, Dataflow, Pub/Sub", pct: 88 }
      ] },
      { title: "Python ecosystem", items: [
        { name: "Data science", detail: "PySpark, NumPy, Pandas, SciPy, Matplotlib, Seaborn", pct: 95 },
        { name: "Machine learning", detail: "Scikit-Learn, TensorFlow, Keras, PyTorch, LightGBM", pct: 92 },
        { name: "Web & APIs", detail: "Flask, FastAPI, SQLAlchemy, Requests, Selenium, Playwright, boto3", pct: 90 },
        { name: "NLP & LLM", detail: "NLTK, SpaCy, Gensim, BERT, AWS Bedrock, prompt engineering", pct: 88 }
      ] },
      { title: "Databases", items: [
        { name: "SQL databases", detail: "Oracle, PostgreSQL, MySQL, SQL Server, Salesforce", pct: 95 },
        { name: "NoSQL & search", detail: "Redis, Elasticsearch, Solr, DynamoDB", pct: 85 }
      ] },
      { title: "DevOps & infrastructure", items: [
        { name: "Version control & CI/CD", detail: "Git, GitHub Actions, Bitbucket, JIRA", pct: 92 },
        { name: "Containers & IaC", detail: "Docker, Kubernetes, Terraform, CloudFormation, CDK, VMware", pct: 90 },
        { name: "Operating systems", detail: "Linux (Debian, CentOS), Windows Server, Unix", pct: 88 },
        { name: "Monitoring & BI", detail: "Grafana, Kibana, CloudWatch, Power BI", pct: 85 }
      ] }
    ],
    groupsTitle: "Technologies by domain",
    groups: [
      { title: "Programming languages", items: ["Python", "Scala", "SQL", "PL/SQL", "Java", "Shell", "TypeScript", "JavaScript"] },
      { title: "Python — data", items: ["PySpark", "PyArrow", "NumPy", "Pandas", "SciPy", "Matplotlib", "Seaborn", "awswrangler", "SQLAlchemy"] },
      { title: "Python — ML / DL", items: ["Scikit-Learn", "TensorFlow", "Keras", "PyTorch", "LightGBM", "statsmodels", "Detectron2", "OpenCV", "Dlib"] },
      { title: "NLP & LLM", items: ["NLTK", "SpaCy", "Gensim", "BERT / BERTopic", "word2vec", "TF-IDF", "AWS Bedrock (Claude)", "Prompt engineering", "Ollama / local inference", "Mixture-of-Agents"] },
      { title: "Web, APIs & automation", items: ["Flask", "FastAPI", "Requests", "boto3", "Selenium", "Playwright", "Scrapy", "BeautifulSoup", "PyQt5", "Chrome extensions"] },
      { title: "Cloud — AWS", items: ["Athena", "S3", "Lambda", "Lambda@Edge", "API Gateway", "EC2", "ECS Fargate", "ECR", "Step Functions", "EventBridge", "Route 53", "Glue", "Lake Formation", "IAM", "VPC", "CloudFront", "Cognito", "CloudWatch", "CloudTrail", "SNS", "SES", "DynamoDB", "Transcribe", "Textract", "Bedrock", "Secrets Manager", "Transfer Family", "CloudFormation", "CDK"] },
      { title: "Cloud — GCP", items: ["BigQuery", "Cloud Storage", "Dataflow", "Pub/Sub"] },
      { title: "Big Data", items: ["Spark (Core, SQL, Streaming, MLlib)", "Hadoop", "HDFS", "Hive", "HBase", "Pig", "Storm", "Cloudera", "Kafka"] },
      { title: "ETL & orchestration", items: ["Talend", "Airflow", "VTOM", "Step Functions", "Windows Task Scheduler", "Jenkins", "Custom Python ETL"] },
      { title: "SQL databases", items: ["Oracle", "PostgreSQL", "MySQL", "SQL Server", "Salesforce"] },
      { title: "NoSQL & search", items: ["Redis", "Elasticsearch", "Solr", "DynamoDB"] },
      { title: "DevOps & infrastructure", items: ["Docker", "Kubernetes", "Terraform", "CloudFormation", "AWS CDK", "GitHub Actions", "CI/CD (OIDC)", "VMware", "Linux (Debian, CentOS)", "Windows Server", "uv", "ruff", "pre-commit", "pytest"] },
      { title: "Monitoring & BI", items: ["Grafana", "Kibana", "CloudWatch", "Power BI", "Talend"] },
      { title: "Methods & design", items: ["Agile", "Scrum", "UML", "MERISE", "Design patterns", "OOP", "Technical documentation (Confluence)"] },
      { title: "Formats & tools", items: ["JSON", "XML", "CSV", "Excel", "YAML", "Parquet", "Jupyter", "VS Code", "Git", "GitHub", "Bitbucket", "Colab", "SSH", "SAMBA", "Slack", "JIRA", "Confluence", "MS Office"] }
    ],
    expertise: {
      title: "Technical expertise in depth",
      note: "A longer inventory of what I have worked with, by domain. Open a domain to read it.",
      blocks: [
        { title: "AWS cloud architecture & engineering", sub: [
          { title: "Serverless computing", items: [
            { text: "<b>Lambda functions:</b>", sub: [
              "25+ production Lambda functions processing 10M+ requests monthly",
              "Containerised Lambda with Docker for FFmpeg video processing (2 GB memory, 15-minute timeout)",
              "Lambda@Edge for global content-delivery optimisation (sub-100 ms response times)",
              "Event-driven architectures with S3, SQS, SNS integration",
              "Cost optimisation achieving 70 % reduction through right-sizing and scheduling"
            ] },
            "<b>API Gateway:</b> RESTful and WebSocket APIs with custom authorisers, request/response transformation",
            "<b>Step Functions:</b> workflow orchestration for multi-step data-processing pipelines"
          ] },
          { title: "Data services & analytics", items: [
            { text: "<b>Amazon Athena:</b> petabyte-scale query optimisation, partitioning strategies, cost control", sub: [
              "Columnar storage with Parquet reducing query costs by 85 %",
              "Advanced SQL optimisation (window functions, CTEs, complex joins)",
              "Automated data cataloguing with AWS Glue crawlers",
              "Query-result caching and lifecycle management"
            ] },
            "<b>S3 advanced:</b> multi-region replication, lifecycle policies, event notifications, security controls",
            "<b>Lake Formation:</b> cross-account, column-level governed sharing with CloudTrail audit",
            "<b>CloudWatch:</b> custom metrics, log insights, automated alerting, cost-anomaly detection"
          ] },
          { title: "Security & compliance", items: [
            { text: "<b>IAM expertise:</b> least-privilege access, cross-account roles, SAML federation", sub: [
              "Custom IAM policies with condition-based access control",
              "Service-linked roles and resource-based policies",
              "AWS Organizations SCPs for governance at scale",
              "Secrets Manager integration for credential rotation"
            ] },
            "<b>VPC networking:</b> multi-AZ architectures, NAT gateways, VPC endpoints, security groups, NACLs",
            "<b>Encryption:</b> KMS key management, envelope encryption, data-at-rest and in-transit protection",
            "<b>Edge security:</b> Cognito, Lambda@Edge, CloudFront OAC, secure cookies"
          ] }
        ] },
        { title: "Big Data engineering & distributed systems", sub: [
          { title: "Apache Spark ecosystem", items: [
            { text: "<b>Spark Core:</b> RDD transformations, actions, broadcast variables, accumulators", sub: [
              "Custom partitioning strategies for optimal data distribution",
              "Memory management and garbage-collection tuning",
              "Dynamic resource allocation and adaptive query execution",
              "Catalyst optimiser understanding for query performance"
            ] },
            "<b>Spark SQL:</b> DataFrame/Dataset APIs, complex window functions, user-defined functions (UDFs)",
            "<b>Spark Streaming:</b> real-time processing with micro-batching and structured streaming",
            "<b>MLlib:</b> distributed machine-learning algorithms, feature-engineering pipelines"
          ] },
          { title: "Hadoop ecosystem", items: [
            { text: "<b>HDFS:</b> block replication, rack awareness, federation, high availability", sub: [
              "Cluster sizing and capacity planning for PB-scale storage",
              "Data-locality optimisation and hotspot mitigation",
              "Backup and disaster-recovery strategies",
              "Performance tuning (block size, replication factor)"
            ] },
            "<b>Hive:</b> complex HiveQL, partitioning, bucketing, ORC/Parquet optimisation",
            "<b>HBase:</b> NoSQL design, row-key optimisation, region splitting",
            "<b>Cloudera:</b> cluster management, security (Kerberos), resource management (YARN)"
          ] },
          { title: "Stream processing & real-time analytics", items: [
            { text: "<b>Apache Kafka:</b> topic design, partitioning strategies, consumer-group management", sub: [
              "Kafka Connect for integration with external systems",
              "Schema Registry for Avro/JSON schema evolution",
              "Kafka Streams for stream-processing applications",
              "Monitoring and alerting with JMX metrics"
            ] },
            "<b>Apache Storm:</b> topology design, spouts, bolts, guaranteed message processing",
            "<b>Real-time dashboards:</b> Grafana and Kibana on streaming data"
          ] }
        ] },
        { title: "Advanced programming & software engineering", sub: [
          { title: "Python", items: [
            { text: "<b>Advanced Python:</b> metaclasses, decorators, context managers, async/await", sub: [
              "Multiprocessing and multithreading for CPU/IO-bound tasks",
              "Memory profiling and performance optimisation",
              "Custom data structures and algorithm implementations",
              "Package development and distribution (PyPI), uv, ruff, pre-commit"
            ] },
            "<b>Data-science stack:</b> NumPy vectorisation, Pandas optimisation, SciPy statistics",
            "<b>Web frameworks:</b> Flask/FastAPI for REST APIs, SQLAlchemy ORM, Celery for task queues"
          ] },
          { title: "Scala & functional programming", items: [
            { text: "<b>Scala:</b> case classes, pattern matching, higher-order functions, implicits", sub: [
              "Akka actors for concurrent and distributed systems",
              "Cats/Scalaz for functional-programming abstractions",
              "SBT build tool and dependency management",
              "Integration with Spark for high-performance data processing"
            ] },
            "<b>Functional paradigms:</b> monads, functors, immutable data structures"
          ] },
          { title: "Database systems", items: [
            { text: "<b>SQL mastery:</b> complex queries, window functions, CTEs, query optimisation", sub: [
              "Oracle: PL/SQL, partitioning, materialised views, RAC",
              "PostgreSQL: extensions, JSONB, full-text search, replication",
              "SQL Server: T-SQL, SSIS, columnstore indexes",
              "Performance tuning: indexing strategies, execution plans"
            ] },
            "<b>NoSQL:</b> Elasticsearch aggregations, Redis data structures, document modelling"
          ] }
        ] },
        { title: "Machine learning & AI engineering", sub: [
          { title: "Deep-learning frameworks", items: [
            { text: "<b>TensorFlow/Keras:</b> custom layers, training loops, distributed training, TensorBoard", sub: [
              "Model optimisation: quantisation, pruning, knowledge distillation",
              "TensorFlow Serving for production model deployment",
              "TensorFlow Extended (TFX) for ML pipelines",
              "GPU optimisation with CUDA and cuDNN"
            ] },
            "<b>PyTorch:</b> dynamic computation graphs, custom datasets, distributed training",
            "<b>Model deployment:</b> ONNX conversion, TensorRT optimisation, edge deployment"
          ] },
          { title: "Computer vision", items: [
            { text: "<b>Object detection:</b> YOLO, R-CNN family, SSD, RetinaNet implementation and optimisation", sub: [
              "Custom dataset creation and annotation workflows",
              "Data-augmentation strategies for better generalisation",
              "Transfer learning and fine-tuning",
              "Real-time inference optimisation (TensorRT, OpenVINO)"
            ] },
            "<b>Image processing:</b> OpenCV advanced techniques, morphological operations, feature extraction",
            "<b>Face recognition:</b> multi-model ensembles, embedding optimisation"
          ] },
          { title: "NLP & LLM applications", items: [
            { text: "<b>Transformer models:</b> BERT, GPT, T5 fine-tuning and deployment", sub: [
              "Attention mechanisms and positional encoding",
              "Multi-language model adaptation",
              "Sentiment analysis and topic modelling",
              "Named-entity recognition and relation extraction"
            ] },
            "<b>LLM engineering:</b> prompt design, batching and chunking, graded scoring with reasoning, result caching, multi-model benchmarking on AWS Bedrock; agentic pipelines (Mixture-of-Agents) with validated JSON contracts; local inference with Ollama",
            "<b>Text processing:</b> NLTK, spaCy, Gensim for advanced text analytics",
            "<b>Speech processing:</b> ASR systems, audio feature extraction, speaker recognition, audio fingerprinting"
          ] }
        ] },
        { title: "DevOps & infrastructure engineering", sub: [
          { title: "Containerisation & orchestration", items: [
            { text: "<b>Docker:</b> multi-stage builds, layer optimisation, security scanning", sub: [
              "Custom base images and distroless containers",
              "Docker Compose for local development environments",
              "Container registry management (ECR, Docker Hub)",
              "Resource limits and health checks"
            ] },
            "<b>Kubernetes:</b> pod design, services, ingress, persistent volumes, RBAC",
            "<b>ECS Fargate:</b> task definitions, Spot capacity, Step Functions chaining",
            "<b>Helm charts:</b> template development, dependency management, release management"
          ] },
          { title: "CI/CD & automation", items: [
            { text: "<b>GitHub Actions:</b> workflow automation, matrix builds, custom actions", sub: [
              "Automated testing pipelines with pytest and coverage reporting",
              "Security scanning with Snyk, CodeQL, bandit",
              "Multi-environment deployments with approval gates; OIDC federation with AWS (no stored credentials)",
              "Artefact management and versioning strategies"
            ] },
            "<b>Infrastructure as code:</b> CloudFormation, Terraform, AWS CDK for reproducible deployments",
            "<b>Configuration management:</b> Ansible playbooks, environment-specific configurations"
          ] },
          { title: "Monitoring & observability", items: [
            { text: "<b>Metrics & alerting:</b> Prometheus, Grafana, custom dashboards, SLA monitoring", sub: [
              "Application performance monitoring (APM)",
              "Log aggregation and analysis (ELK stack, CloudWatch → Athena)",
              "Distributed tracing with Jaeger/Zipkin",
              "Incident response and post-mortem analysis"
            ] },
            "<b>Cost optimisation:</b> resource-utilisation analysis, right-sizing recommendations, AWS cost pipelines"
          ] }
        ] }
      ]
    }
  },

  education: {
    title: "Education",
    tagline: "Degrees, certifications and languages",
    items: [
      { year: "2020", degree: "Master 2 — Data Science & Artificial Intelligence", school: "Institut Galilée, Université Sorbonne Paris Nord — Paris, France", desc: "Advanced specialisation in AI, machine learning and data-science methods." },
      { year: "2020", degree: "Master — Web Intelligence & Data Science", school: "Université Sidi Mohamed Ben Abdellah — Fès, Morocco", desc: "Two-year programme specialised in development, Big Data processing, data science and artificial intelligence." },
      { year: "2018", degree: "Bachelor (Licence) — Mathematics & Computer Science", school: "Université Sidi Mohamed Ben Abdellah — Fès, Morocco", desc: "Fundamental studies in mathematical sciences and computer science." },
      { year: "2017", degree: "DEUG — Mathematics & Computer Science", school: "Université Sidi Mohamed Ben Abdellah — Fès, Morocco", desc: "General university studies diploma in mathematical sciences and computer science." },
      { year: "2015", degree: "Baccalauréat — Mathematical Sciences, series B", school: "Lycée El Adarissa — Fès, Morocco", desc: "High-school diploma specialised in mathematical sciences." }
    ],
    certsTitle: "Certifications",
    certs: [
      { name: "AWS Certified Solutions Architect — Associate", issuer: "Amazon Web Services", year: "—", status: "in progress" },
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
    langsTitle: "Languages",
    langs: [
      { name: "Arabic", level: "Native" },
      { name: "French", level: "Fluent" },
      { name: "English", level: "Professional" }
    ]
  },

  contact: {
    title: "Contact",
    tagline: "Let's work together",
    lead: "Open to data and cloud engineering challenges — write to me, or find me on LinkedIn and GitHub.",
    email: "m.elkhou@hotmail.com",
    items: [
      { label: "Location", value: "Paris, France", icon: "pin" },
      { label: "Email", value: "m.elkhou@hotmail.com", href: "mailto:m.elkhou@hotmail.com", icon: "mail" },
      { label: "Phone", value: "(+33) 06 13 43 51 06", href: "tel:+33613435106", icon: "phone" },
      { label: "LinkedIn", value: "linkedin.com/in/m-elkhou", href: "https://www.linkedin.com/in/m-elkhou/", external: true, icon: "linkedin" },
      { label: "GitHub", value: "github.com/m-elkhou", href: "https://github.com/m-elkhou", external: true, icon: "github" },
      { label: "CV (PDF, French)", value: "Download", href: "assets/cv/Mohammed_EL-KHOU_CV.pdf", icon: "file" }
    ]
  },

  footer: {
    blurb: "Data & cloud engineer building the data systems behind TV and digital advertising.",
    rights: "© 2026 Mohammed EL-KHOU. All rights reserved.",
    made: "Built with plain HTML, CSS and JavaScript — no framework.",
    columns: [
      { title: "Navigation", links: [
        { label: "About", href: "#about" },
        { label: "Experience", href: "#experience" },
        { label: "Projects", href: "#projects" },
        { label: "Impact", href: "#impact" },
        { label: "Skills", href: "#skills" },
        { label: "Education", href: "#education" }
      ] },
      { title: "Connect", links: [
        { label: "Contact", href: "#contact" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/m-elkhou/", external: true },
        { label: "GitHub", href: "https://github.com/m-elkhou", external: true },
        { label: "Email", href: "mailto:m.elkhou@hotmail.com" }
      ] },
      { title: "Resources", links: [
        { label: "CV (PDF)", href: "assets/cv/Mohammed_EL-KHOU_CV.pdf", download: true },
        { label: "Certifications", href: "#education" },
        { label: "Source of this site", href: "https://github.com/m-elkhou/m-elkhou.github.io", external: true }
      ] }
    ]
  }
};
