const translations = {
  en: {
    // Header
    'tagline': 'Software Developer — Bergen, Norway',

    // Contact buttons
    'btn.email': 'Email',
    'btn.linkedin': 'LinkedIn',
    'btn.github': 'GitHub',
    'btn.cv': 'View CV',

    // Section headings
    'section.skills': 'Skills & Tech',
    'section.experience': 'Work Experience',
    'section.education': 'Education',
    'section.projects': 'Projects',

    // Skill categories
    'skills.backend': 'Backend',
    'skills.frontend': 'Frontend',
    'skills.data': 'Data & ETL',
    'skills.tools': 'Tools & Infra',

    // Work Experience
    'job.knowit.title': 'Software Developer',
    'job.knowit.company': 'Knowit Experience Bergen',
    'job.knowit.desc': 'Consulting on data-driven solutions and cloud infrastructure. More to come as I dive into new projects.',
    'job.knowit.badge': 'Current',
    'job.knowit.date': '2026 —',

    'job.aquacloud.title': 'Software Developer',
    'job.aquacloud.company': 'AquaCloud',
    'job.aquacloud.desc': 'Technical ownership of APIs, ETL pipelines, and analytical systems for salmon biomass and mortality tracking. Built data platform infrastructure with FastAPI, dbt, dlthub, DuckDB, Terraform, and AWS. Developed insights frontend with comprehensive monitoring and observability. Collaborated with research institutes including Veterinærinstituttet.',
    'job.aquacloud.date': '2025 — 2026',

    'job.echo.title': 'Board Member & Finance Lead',
    'job.echo.company': 'echo Webkom, UiB',
    'job.echo.desc': 'Development and operations of websites for the computer science student organization at UiB. Managed finances and contributed to technical decisions.',
    'job.echo.date': '2022 — 2024',

    // Education
    'edu.master.title': 'Master in Software Development',
    'edu.master.institution': 'University of Bergen / Western Norway University of Applied Sciences',
    'edu.master.desc': 'Specialized in algorithms, advanced software technologies, programming languages, model-driven software development, and software security.',
    'edu.master.date': '2022 — 2024',

    'edu.bachelor.title': 'Bachelor in Cognitive Science',
    'edu.bachelor.institution': 'University of Bergen',
    'edu.bachelor.desc': 'Specialization in computer science. Focus on machine learning, functional programming, algorithms and data structures.',
    'edu.bachelor.date': '2018 — 2022',

    // Projects
    'project.budget.title': 'Budget Tracker',
    'project.budget.company': 'Personal Project',
    'project.budget.desc': 'Developing a budget tracking tool for personal finance management with expense categorization, periodic payment planning, and graphical consumption visualization. Features an interactive calendar for financial planning and support for shared expenses. Built with Go backend, Svelte frontend, and dockerized PostgreSQL.',
    'project.budget.badge': 'Ongoing',
    'project.budget.date': '2024 —',

    'project.thesis.title': 'Design and Evaluation of a Data Space Service for the Smart Ocean Platform',
    'project.thesis.company': 'Master Thesis · SFI Smart Ocean',
    'project.thesis.desc': 'Developed REST API, data forwarding, and database solution for storing and providing access to sensor data. Built with Python, FastAPI, MQTT, and MongoDB.',
    'project.thesis.date': '2024',

    'project.shroomy.title': 'Shroomy - AI Mushroom Identifier',
    'project.shroomy.company': 'Academic Project · HVL',
    'project.shroomy.desc': 'Developed backend REST API for AI-powered mushroom identification from images. Integrated FastAI/PyTorch model into classification endpoints returning top-5 predictions with confidence scores. Built multi-image prediction feature that averages probabilities across multiple images for improved accuracy. Backend built with Django REST Framework, MongoDB, and OpenCV.',
    'project.shroomy.date': '2023',

    // Footer
    'footer.name': 'Jonas Hammerseth',
    'footer.location': 'Bergen, Norway · 2026'
  },

  no: {
    // Header
    'tagline': 'Programvareutvikler — Bergen, Norge',

    // Contact buttons
    'btn.email': 'E-post',
    'btn.linkedin': 'LinkedIn',
    'btn.github': 'GitHub',
    'btn.cv': 'Se CV',

    // Section headings
    'section.skills': 'Ferdigheter & Teknologi',
    'section.experience': 'Arbeidserfaring',
    'section.education': 'Utdanning',
    'section.projects': 'Prosjekter',

    // Skill categories
    'skills.backend': 'Backend',
    'skills.frontend': 'Frontend',
    'skills.data': 'Data & ETL',
    'skills.tools': 'Verktøy & Infrastruktur',

    // Work Experience
    'job.knowit.title': 'Programvareutvikler',
    'job.knowit.company': 'Knowit Experience Bergen',
    'job.knowit.desc': 'Konsulentarbeid innen datadrevne løsninger og skyinfrastruktur. Mer kommer etter hvert som jeg starter på nye prosjekter.',
    'job.knowit.badge': 'Nåværende',
    'job.knowit.date': '2026 —',

    'job.aquacloud.title': 'Programvareutvikler',
    'job.aquacloud.company': 'AquaCloud',
    'job.aquacloud.desc': 'Teknisk ansvar for API-er, ETL-pipelines og analytiske systemer for sporing av laksebiomasse og dødelighet. Bygget dataplatform-infrastruktur med FastAPI, dbt, dlthub, DuckDB, Terraform og AWS. Utviklet insights-frontend med omfattende overvåkning og observerbarhet. Samarbeidet med forskningsinstitutter inkludert Veterinærinstituttet.',
    'job.aquacloud.date': '2025 — 2026',

    'job.echo.title': 'Styremedlem & Økonomiansvarlig',
    'job.echo.company': 'echo Webkom, UiB',
    'job.echo.desc': 'Utvikling og drift av nettsider for studentorganisasjonen for informatikkstudenter ved UiB. Administrerte økonomi og bidro til tekniske beslutninger.',
    'job.echo.date': '2022 — 2024',

    // Education
    'edu.master.title': 'Master i Programvareutvikling',
    'edu.master.institution': 'Universitetet i Bergen / Høgskulen på Vestlandet',
    'edu.master.desc': 'Spesialisering i algoritmer, avanserte programvareteknologier, programmeringsspråk, modelldrevet programvareutvikling og programvaresikkerhet.',
    'edu.master.date': '2022 — 2024',

    'edu.bachelor.title': 'Bachelor i Kognitiv Vitenskap',
    'edu.bachelor.institution': 'Universitetet i Bergen',
    'edu.bachelor.desc': 'Spesialisering i informatikk. Fokus på maskinlæring, funksjonell programmering, algoritmer og datastrukturer.',
    'edu.bachelor.date': '2018 — 2022',

    // Projects
    'project.budget.title': 'Budget Tracker',
    'project.budget.company': 'Personlig Prosjekt',
    'project.budget.desc': 'Utvikler et budsjettsporingsverktøy for personlig økonomiforvaltning med utgiftskategorisering, periodisk betalingsplanlegging og grafisk forbruksvisualisering. Funksjoner inkluderer en interaktiv kalender for økonomisk planlegging og støtte for delte utgifter. Bygget med Go backend, Svelte frontend og dockerisert PostgreSQL.',
    'project.budget.badge': 'Pågående',
    'project.budget.date': '2024 —',

    'project.thesis.title': 'Design og Evaluering av en Data Space-tjeneste for Smart Ocean-plattformen',
    'project.thesis.company': 'Masteroppgave · SFI Smart Ocean',
    'project.thesis.desc': 'Utviklet REST API, dataviderekobling og databaseløsning for lagring og tilgang til sensordata. Bygget med Python, FastAPI, MQTT og MongoDB.',
    'project.thesis.date': '2024',

    'project.shroomy.title': 'Shroomy - AI Soppidentifikator',
    'project.shroomy.company': 'Akademisk Prosjekt · HVL',
    'project.shroomy.desc': 'Utviklet backend REST API for AI-drevet soppidentifikasjon fra bilder. Integrerte FastAI/PyTorch-modell i klassifiseringsendepunkter som returnerer topp-5 prediksjoner med konfidensscore. Bygget multi-bilde prediksjonsfunksjon som beregner gjennomsnittlige sannsynligheter på tvers av flere bilder for forbedret nøyaktighet. Backend bygget med Django REST Framework, MongoDB og OpenCV.',
    'project.shroomy.date': '2023',

    // Footer
    'footer.name': 'Jonas Hammerseth',
    'footer.location': 'Bergen, Norge · 2026'
  }
};
