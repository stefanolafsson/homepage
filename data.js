// Single source of truth for site content rendered by site.js.
// Edit here — nav, events, and publications render on every page from this file.
// `title`/`authors`/`venue`/`meta` may contain HTML entities and inline <a> tags;
// they are inserted via innerHTML. All content here is author-controlled (no user
// input), so there is no XSS surface.
//
// Events: `start`/`end` are ISO dates (YYYY-MM-DD) used only for sorting and the
// upcoming/past split. `end` is optional (defaults to `start`) for multi-day events.
// `meta` is the human-readable date + location line, shown verbatim.
// An event counts as "upcoming" until its end date has passed.

const NAV_ITEMS = [
  { href: "index.html", label: "Home" },
  { href: "research.html", label: "Research" },
  { href: "events.html", label: "Events & Activities" },
  { href: "service.html", label: "Service & Supervision" },
  { href: "consulting.html", label: "Consulting" },
];

const EVENTS = [
  // ── Upcoming (sorted automatically) ──
  {
    start: "2026-04-20",
    end: "2026-04-22",
    meta: "April 20&ndash;22, 2026 &middot; Utrecht, Netherlands",
    title: "Attended the CLARIN University Curricula Workshop",
  },
  {
    start: "2026-09-07",
    end: "2026-09-11",
    meta: "September 7&ndash;11, 2026 &middot; Puebla, Mexico",
    title: "Chairing the Doctoral Consortium at IVA 2026",
  },
  {
    start: "2026-09-24",
    meta: "September 24, 2026 &middot; University of Iceland",
    title: "Speaker at &Iacute;slenskan og snjallt&aelig;knin",
  },
  {
    start: "2026-10-14",
    end: "2026-10-15",
    meta: "October 14&ndash;15, 2026 &middot; Reykjavik University",
    title: 'Co-organizer of the <a href="https://www.nordicaimeet.com" target="_blank" rel="noopener">Nordic AI Meet</a>',
  },

  // ── Past (sorted automatically) ──
  {
    start: "2026-05-06",
    meta: "May 6, 2026 &middot; Reykjavik University",
    title: 'Speaker and panelist at <a href="https://www.ru.is/vidburdir/log-og-taekni-bilid-bruad" target="_blank" rel="noopener">Lög og tækni – bilið brúað</a> (Law and Technology – Bridging the Gap)',
  },
  {
    start: "2026-03-13",
    meta: "March 13, 2026 &middot; Reykjavik University",
    title: "Speaker at AI &amp; Society",
  },
  {
    start: "2026-02-11",
    meta: "February 11, 2026 &middot; Reykjavik University",
    title: "Teaching AI at the Third Stage of Life — One day course at Magnavita",
  },
  {
    start: "2026-02-10",
    meta: "February 10, 2026 &middot; Reykjavik University",
    title: "Panelist at Equality Days — Beyond Bias: How Women Can Shape the Next Generation of AI Systems",
  },
  {
    start: "2026-01-28",
    meta: "January 28, 2026 &middot; Árni Magnússon Institute, Reykjavik",
    title: 'Organized &amp; spoke at the <a href="https://www.arnastofnun.is/is/vidburdir/malthing-um-fyrsta-maltolvunarverkefnid" target="_blank" rel="noopener">Symposium on Iceland\'s First Computational Linguistics Project</a>',
  },
  {
    start: "2025-12-02",
    end: "2025-12-07",
    meta: "December 2&ndash;7, 2025 &middot; Copenhagen, Denmark",
    title: 'Attendee and sponsor through the <a href="https://www.nordicpartnership.ai" target="_blank" rel="noopener">Nordic AI Partnership</a> at <a href="https://eurips.cc" target="_blank" rel="noopener">EurIPS Copenhagen 2025</a>',
  },
  {
    start: "2025-11-26",
    end: "2025-11-27",
    meta: "November 26&ndash;27, 2025 &middot; Norrk&ouml;ping, Sweden",
    title: 'Program Committee Member for <a href="https://nordicaimeet.com" target="_blank" rel="noopener">Nordic AI Meet</a>',
  },
  {
    start: "2025-11-20",
    meta: "November 20, 2025 &middot; Reykjavik, Iceland",
    title: "Speaker on The Present and Future of AI — Landsbankinn",
  },
  {
    start: "2025-10-22",
    meta: "October 22, 2025 &middot; Helsinki, Finland",
    title: 'Attended (representing Reykjavik University) the Official Launch of <a href="https://www.newnordics.ai" target="_blank" rel="noopener">New Nordics AI</a>',
  },
  {
    start: "2025-10-15",
    meta: "October 15, 2025 &middot; Gr&oacute;ska, Reykjavik",
    title: "Participant in the Workshop on AI and Language Technology Center — Ministry of Culture, Innovation and Higher Education",
  },
  {
    start: "2025-09-22",
    meta: "September 22, 2025 &middot; Reykjavik University",
    title: "Presented on AI at the Third Stage of Life — Magnavita",
  },
  {
    start: "2025-09-16",
    end: "2025-09-19",
    meta: "September 16-19, 2025 &middot; Berlin, Germany",
    title: 'Workshop &amp; Tutorial Chair and attendee at the 25th International Conference on Intelligent Virtual Agents (<a href="https://iva.acm.org/2025/" target="_blank" rel="noopener">IVA25</a>)',
  },
  {
    start: "2025-09-08",
    meta: "September 8, 2025 &middot; University of Iceland",
    title: 'Presented on the start-up Careflux as part of the <a href="https://malvis.hi.is/is/hvad-er-i-gangi-i-islenskri-maltaekni-fyrirlestrarod-maltaekniseturs" target="_blank" rel="noopener">&ldquo;Hvað er í gangi í íslenskri máltækni?&rdquo;</a> lecture series',
  },
  {
    start: "2025-08-12",
    meta: "August 12, 2025 &middot; Reykjavik University",
    title: "Organized a workshop on AI for the Psychology Department",
  },
  {
    start: "2025-06-19",
    end: "2025-06-20",
    meta: "June 19&ndash;20, 2025 &middot; Open University",
    title: "Teaching Practical Use of Generative AI for Academic Writing, Teaching, and Professional Work",
  },
  {
    start: "2025-05-13",
    end: "2025-05-15",
    meta: "May 13&ndash;15, 2025 &middot; Reykjavik University",
    title: 'Attended the <a href="https://immerse-erasmus.eu" target="_blank" rel="noopener">IMMERSE</a> Consortium Meeting',
  },
  {
    start: "2025-02-14",
    meta: "February 14, 2025 &middot; Reykjavik University",
    title: "Participant in the Nordic AI Workshop",
  },
  {
    start: "2025-02-07",
    end: "2025-02-08",
    meta: "February 7&ndash;8, 2025 &middot; Harpa, Reykjavik",
    title: "Speaker at UTmessan 2025 &mdash; The Future is Multi-Modal",
  },
  {
    start: "2025-01-17",
    meta: "January 17, 2025 &middot; Reykjavik University",
    title: 'Co-organized &amp; moderated <a href="https://www.ru.is/en/events/ai-and-society-bridging-innovation-and-responsibility" target="_blank" rel="noopener">AI and Society: Bridging Innovation and Responsibility</a>',
  },
  {
    start: "2025-01-17",
    meta: "January 17, 2025 &middot; Reykjavik University",
    title: "Organized the Reykjavik AI Festival &mdash; AI Research Presentations &amp; Showcase",
  },
  {
    start: "2024-11-28",
    meta: "November 28, 2024 &middot; H&oacute;tel Reykjavik Nordica",
    title: 'Attended <a href="https://www.stjornarradid.is/raduneyti/heilbrigdisraduneytid/heilbrigdisthing-2024/" target="_blank" rel="noopener">Heilbrig&eth;is&thorn;ing 2024</a> (Health Congress 2024)',
  },
  {
    start: "2024-11-20",
    end: "2024-11-21",
    meta: "November 20&ndash;21, 2024 &middot; Reykjavik University",
    title: "Co-organized the CRESS Academic Retreat",
  },
  {
    start: "2024-11-04",
    end: "2024-11-05",
    meta: "November 4&ndash;5, 2024 &middot; Hilton Nordica, Reykjavik",
    title: 'Attended <a href="https://www.saa.is/is/frettir-greinar/malthing-saa" target="_blank" rel="noopener">M&aacute;l&thorn;ing S&Aacute;&Aacute;</a> &mdash; Quality and Results in Treatment Work',
  },
  {
    start: "2024-10-31",
    meta: "October 31, 2024",
    title: 'Guest on the <a href="https://open.spotify.com/episode/22hpfE8aMPGajP6VogWs2L" target="_blank" rel="noopener">Verkfræðivarpið</a> podcast with Anna Sigríður Islind',
  },
  {
    start: "2024-10-15",
    meta: "October 15, 2024 &middot; Reykjavik University",
    title: "Presented on AI at the Third Stage of Life &mdash; H&aacute;sk&oacute;li &thorn;ri&eth;ja &aelig;viskei&eth;s",
  },
  {
    start: "2024-09-01",
    meta: "September 2024 &middot; Glasgow, UK",
    title: 'Attended as Program Committee member and Demo Chair at the 24th International Conference on Intelligent Virtual Agents (<a href="https://iva.acm.org/2024/" target="_blank" rel="noopener">IVA24</a>)',
  },
  {
    start: "2024-01-18",
    meta: "January 18, 2024",
    title: 'Attended the <a href="https://gudni.forseti.is/fréttir/2024-01-18-nýskoepunarverðlaun-forseta-íslands/" target="_blank" rel="noopener">Nýsköpunarverðlaun forseta Íslands</a> (President of Iceland\'s Innovation Award) &mdash; students were nominated for their work',
  },
  {
    start: "2023-09-22",
    meta: "September 22, 2023 &middot; University of Zurich",
    title: 'Invited speaker at the interdisciplinary workshop <a href="https://ethics.dsi.uzh.ch/news/invitation_humanization-of-healthcare-chatbots/" target="_blank" rel="noopener">&ldquo;Humanization of Healthcare Chatbots&rdquo;</a>',
  },
  {
    start: "2023-09-01",
    meta: "September 2023",
    title: 'Co-authored &ldquo;Notkun gervigreindar í heilbrigðiskerfinu&rdquo; in <a href="https://www.sky.is/images/stories/Tolvumal/Tolvumal_2023.pdf" target="_blank" rel="noopener">Tölvumál</a>',
  },
  {
    start: "2023-09-01",
    meta: "September 2023 &middot; Würzburg, Germany",
    title: 'Program Committee member at the 23th international conference on Intelligent Virtual Agents (<a href="https://iva.acm.org/2023/" target="_blank" rel="noopener">IVA23</a>)',
  },
  {
    start: "2023-06-14",
    meta: "June 14, 2023",
    title: 'Hosted the Official Opening of the <a href="https://www.nltp-info.eu/post/iceland-introduces-muninn-their-national-language-technology-platform" target="_blank" rel="noopener">Muninn Language Technologies Portal</a>',
  },
  {
    start: "2023-06-08",
    meta: "June 8, 2023 &middot; Reykjavik, Iceland",
    title: "Invited speaker on generative AI &mdash; Landsbankinn",
  },
  {
    start: "2023-06-01",
    meta: "June 1, 2023 &middot; Reykjavik University",
    title: 'Hosted Dr. Tobias Kowatsch for the talk &ldquo;Digital Therapeutics for Healthy Longevity&rdquo; and the workshop &ldquo;MobileCoach: An Open Source Software Platform for Digital Health Interventions&rdquo;',
  },
  {
    start: "2023-04-26",
    meta: "April 26, 2023",
    title: 'Guest lecture &mdash; &ldquo;Natural Language Interactions with Virtual Human Counselors&rdquo; at CDHI (ETH Zurich, University of Zurich, University of St. Gallen)',
  },
  {
    start: "2023-04-19",
    meta: "April 19, 2023 &middot; School of Social Sciences, University of Iceland",
    title: "Invited talk on Artificial Intelligence",
  },
  {
    start: "2023-03-01",
    meta: "Spring 2023",
    title: 'Took the <a href="https://www.informatics-europe.org/events/academic-leadership-development.html" target="_blank" rel="noopener">Informatics Europe Academic Leadership Development Course</a>, led by Geraldine Fitzpatrick',
  },
  {
    start: "2023-02-10",
    meta: "February 10, 2023 &middot; Iceland Academy of the Arts",
    title: "Invited panelist on AI",
  },
  {
    start: "2023-02-01",
    meta: "February 2023",
    title: "Team Soultech &mdash; 2nd place at the Gulleggið start-up innovation competition",
  },
  {
    start: "2023-01-19",
    meta: "January 19, 2023",
    title: "Invited speaker at Læknadagar &mdash; &ldquo;Stafrænar meðferðir við nikótínfíkn&rdquo;",
  },
  {
    start: "2022-09-01",
    meta: "September 2022 &middot; Faro, Portugal",
    title: 'Program Committee member at the 22nd international conference on Intelligent Virtual Agents (<a href="https://ivaconference2022.ualg.pt" target="_blank" rel="noopener">IVA22</a>)',
  },
  {
    start: "2022-07-01",
    meta: "July 2022 &middot; Reykjavik University",
    title: 'Co-organized the <a href="http://cadia.ru.is/events/IWSSL22/program.html" target="_blank" rel="noopener">Third Annual International Workshop on Self-Supervised Learning</a>',
  },
];

const PUBLICATIONS = [
  // ── 2026 ──
  {
    url: "http://lrec-conf.org/proceedings/lrec2026/workshops/rapid6mentalai/2026.rapid6mentalai-1.0.pdf",
    title: "The Icelandic Language Biobank: Data Collection through a Clinical Analysis Platform",
    authors: "I Nowenstein, N Núñez Macías, GT Örnólfsson, S Ólafsson, B Bergþórsdóttir, I Kristínardóttir, H Hafsteinsson",
    venue: "Proceedings of the RaPID Workshop (MentalAI), LREC 2026",
    year: 2026,
  },

  // ── 2025 ──
  {
    url: "https://scholar.google.com/citations?view_op=view_citation&amp;hl=en&amp;user=F0xHwH8AAAAJ&amp;citation_for_view=F0xHwH8AAAAJ:QIV2ME_5wuYC",
    title: "The Mobile Health Intervention for Rural Patients with Atrial Fibrillation: A Randomized Controlled Trial",
    authors: "JW Magnani, K Plevniak, D Ferry, D Martin, MM Brooks, E Kimani, et al.",
    venue: "International Journal of Cardiology, 133575",
    year: 2025,
  },
  {
    url: "https://scholar.google.com/citations?view_op=view_citation&amp;hl=en&amp;user=F0xHwH8AAAAJ&amp;citation_for_view=F0xHwH8AAAAJ:mVmsd5A6BfQC",
    title: "A Mobile Relational Agent to Enhance Atrial Fibrillation Self-care: Primary and Secondary Outcomes of a Randomized Controlled Trial",
    authors: "JW Magnani, CM Lalama, KZ Abebe, D Ferry, BL Rollman, MQ Lancet, et al.",
    venue: "American Heart Journal",
    year: 2025,
  },
  {
    url: "https://scholar.google.com/citations?view_op=view_citation&amp;hl=en&amp;user=F0xHwH8AAAAJ&amp;citation_for_view=F0xHwH8AAAAJ:9ZlFYXVOiuMC",
    title: "Aligning Language Models for Icelandic Legal Text Summarization",
    authors: "&THORN; Hrafn Harðarson, H Loftsson, S &Oacute;lafsson",
    venue: "The Joint 25th Nordic Conference on Computational Linguistics and 11th Conference on Natural Language Processing",
    year: 2025,
  },

  // ── 2024 ──
  {
    url: "https://scholar.google.com/citations?view_op=view_citation&amp;hl=en&amp;user=F0xHwH8AAAAJ&amp;citation_for_view=F0xHwH8AAAAJ:4DMP91E08xMC",
    title: "The Development and Feasibility of a Triage System for Use in Primary Care",
    authors: "MF Helgason, KS Hl&iacute;farson, B Olsen, SO Ellertsson, H Loftsson, et al.",
    venue: "2024 IEEE 12th International Conference on Healthcare Informatics (ICHI)",
    year: 2024,
  },
  {
    url: "https://scholar.google.com/citations?view_op=view_citation&amp;hl=en&amp;user=F0xHwH8AAAAJ&amp;citation_for_view=F0xHwH8AAAAJ:aqlVkmm33-oC",
    title: "Evaluating Icelandic Sentiment Analysis Models Trained on Translated Data",
    authors: "&Oacute;A J&oacute;hannsson, BH Arndal, E&Ouml; J&oacute;nsson, S &Oacute;lafsson, H Loftsson",
    venue: "Proceedings of the 3rd Annual Meeting of the Special Interest Group on Under-resourced Languages (SIGUL)",
    year: 2024,
  },
  {
    url: "http://dx.doi.org/10.1145/3652988.3673955",
    title: "Exploring the Potential of Virtual Agents in Atrial Fibrillation Management: Insights from a Randomized Trial",
    authors: "M Fallah, T Bickmore, S Olafsson, M Paasche-Orlow, AJ Mrkva, JW Magnani",
    venue: "Proceedings of the ACM International Conference on Intelligent Virtual Agents (IVA '24)",
    year: 2024,
  },

  // ── 2023 ──
  {
    url: "http://dx.doi.org/10.1145/3570945.3607361",
    title: "Accommodating User Expressivity while Maintaining Safety for a Virtual Alcohol Misuse Counselor",
    authors: "S Olafsson, P Pedrelli, BC Wallace, T Bickmore",
    venue: "Proceedings of the 23rd ACM International Conference on Intelligent Virtual Agents (IVA '23)",
    year: 2023,
    selected: true,
  },
  {
    url: "http://dx.doi.org/10.1145/3570945.3607314",
    title: "Conversational Assessment of Mild Cognitive Impairment with Virtual Agents",
    authors: "EE Hurstak, S Olafsson, TK O'Leary, HJ Cabral, M Paasche-Orlow, T Bickmore",
    venue: "Proceedings of the 23rd ACM International Conference on Intelligent Virtual Agents (IVA '23)",
    year: 2023,
  },

  // ── 2022 ──
  {
    title: "Community Dynamics in Technospiritual Interventions: Lessons Learned from a Church-Based mHealth Pilot",
    authors: "TK O'Leary, D Parmar, S Olafsson, M Paasche-Orlow, T Bickmore, AG Parker",
    venue: "CHI Conference on Human Factors in Computing Systems",
    year: 2022,
  },
  {
    title: "Design and Rationale of the Mobile Health Intervention for Rural Atrial Fibrillation",
    authors: "JW Magnani, D Ferry, G Swabe, D Martin, X Chen, MM Brooks, E Kimani, MK Paasche-Orlow, S &Oacute;lafsson, T Bickmore, et al.",
    venue: "American Heart Journal, 252, 16&ndash;25, Elsevier",
    year: 2022,
  },
  {
    title: "Designing Empathic Virtual Agents: Manipulating Animation, Voice, Rendering, and Empathy to Create Persuasive Agents",
    authors: "D Parmar, S Olafsson, D Utami, P Murali, T Bickmore",
    venue: "Autonomous Agents and Multi-Agent Systems, 36(1):1&ndash;24, Springer",
    year: 2022,
  },
  {
    title: "Techno-spiritual Engagement: Mechanisms for Improving Uptake of mHealth Apps Designed for Church Members",
    authors: "HS Yun, S Zhou, E Kimani, S Olafsson, TK O'Leary, D Parmar, J Hoffman, S Intille, M Paasche-Orlow, T Bickmore",
    venue: "",
    year: 2022,
  },

  // ── 2021 ──
  {
    url: "https://doi.org/10.2196/30704",
    title: "Mitigating Patient and Consumer Safety Risks When Using Conversational Assistants for Medical Information: Exploratory Mixed Methods Experiment",
    authors: "TW Bickmore, S &Oacute;lafsson, TK O'Leary",
    venue: "Journal of Medical Internet Research, 23(11):e30704",
    year: 2021,
  },
  {
    title: "A Hybrid Structured-Neural Dialog System for Automated Counseling",
    authors: "S Olafsson",
    venue: "PhD Thesis, Northeastern University",
    year: 2021,
  },
  {
    title: "Black Men's Experiences with Health Care: Individuals' Accounts of Challenges, Suggestions for Change, and the Potential Utility of Virtual Agent Technology to Assist Black Men with Health Management",
    authors: "J Kramer, L Yinusa-Nyahkoon, S Olafsson, B Penti, E Woodhams, T Bickmore, BW Jack",
    venue: "Qualitative Health Research, 31(10):1772&ndash;1785, SAGE Publications",
    year: 2021,
  },
  {
    title: "Diversity Informatics: Reducing Racial and Gender Bias with Virtual Agents",
    authors: "T Bickmore, D Parmar, E Kimani, S Olafsson",
    venue: "21st ACM International Conference on Intelligent Virtual Agents, 25&ndash;32",
    year: 2021,
  },
  {
    title: "&lsquo;More Like a Person than Reading Text in a Machine&rsquo;: Characterizing User Choice of Embodied Agents vs. Conventional GUIs on Smartphones",
    authors: "S Olafsson, D Parmar, E Kimani, TK O'Leary, T Bickmore",
    venue: "Extended Abstracts of the 2021 CHI Conference on Human Factors in Computing Systems",
    year: 2021,
  },

  // ── 2020 ──
  {
    title: "Community-Based Cultural Tailoring of Virtual Agents",
    authors: "TK O'Leary, E Stowell, E Kimani, D Parmar, S Olafsson, J Hoffman, AG Parker, MK Paasche-Orlow, T Bickmore",
    venue: "Proceedings of the 20th ACM International Conference on Intelligent Virtual Agents",
    year: 2020,
  },
  {
    title: "Motivating Health Behavior Change with Humorous Virtual Agents",
    authors: "S Olafsson, TK O'Leary, TW Bickmore",
    venue: "Proceedings of the 20th ACM International Conference on Intelligent Virtual Agents",
    year: 2020,
    selected: true,
  },
  {
    title: "Navigating the Combinatorics of Virtual Agent Design Space to Maximize Persuasion",
    authors: "D Parmar, S &Oacute;lafsson, D Utami, P Murali, T Bickmore",
    venue: "Proceedings of the 19th International Conference on Autonomous Agents and MultiAgent Systems (AAMAS), 1010&ndash;1018",
    year: 2020,
  },
  {
    title: "Towards a Computational Framework for Automating Substance Use Counseling with Virtual Agents",
    authors: "S Olafsson, B Wallace, TW Bickmore",
    venue: "AAMAS, 966&ndash;974",
    year: 2020,
  },

  // ── 2019 ──
  {
    url: "https://scholar.google.com/citations?view_op=view_citation&amp;hl=en&amp;user=F0xHwH8AAAAJ&amp;citation_for_view=F0xHwH8AAAAJ:qjMakFHDy7sC",
    title: "Coerced Change-Talk with Conversational Agents Promotes Confidence in Behavior Change",
    authors: "S Olafsson, T O'Leary, T Bickmore",
    venue: "Proceedings of the 13th EAI International Conference on Pervasive Computing Technologies for Healthcare",
    year: 2019,
  },
  {
    title: "Can the Use of Siri, Alexa, and Google Assistant for Medical Information Result in Patient Harm?",
    authors: "TW Bickmore, H Trinh, S Olafsson, et al.",
    venue: "JCOM, 26(1)",
    year: 2019,
  },

  // ── 2018 ──
  {
    url: "https://doi.org/10.2196/11510",
    title: "Patient and Consumer Safety Risks When Using Conversational Assistants for Medical Information: An Observational Study of Siri, Alexa, and Google Assistant",
    authors: "TW Bickmore, H Trinh, S Olafsson, TK O'Leary, R Asadi, NM Rickles, R Cruz",
    venue: "Journal of Medical Internet Research, 20(9):e11510",
    year: 2018,
    selected: true,
  },
  {
    url: "https://doi.org/10.1007/978-3-319-95579-7_3",
    title: "Safety First: Conversational Agents for Health Care",
    authors: "T Bickmore, H Trinh, R Asadi, S Olafsson",
    venue: "Human&ndash;Computer Interaction Series, Springer, 33&ndash;57",
    year: 2018,
  },
  {
    title: "Looking the Part: The Effect of Attire and Setting on Perceptions of a Virtual Health Counselor",
    authors: "D Parmar, S Olafsson, D Utami, T Bickmore",
    venue: "Proceedings of the 18th International Conference on Intelligent Virtual Agents, 301&ndash;306",
    year: 2018,
  },
  {
    title: "Virtual Counselor for Patients in Medication-Assisted Treatment for Opioid Use",
    authors: "S Olafsson, T O'Leary, C Lee, T Bickmore",
    venue: "GREATS18 at the ACM International Conference on Intelligent Virtual Agents",
    year: 2018,
  },

  // ── 2017 ──
  {
    title: "That's a Rap: Increasing Engagement with Rap Music Performance by Virtual Agents",
    authors: "S Olafsson, E Kimani, R Asadi, T Bickmore",
    venue: "International Conference on Intelligent Virtual Agents, 325&ndash;334, Springer",
    year: 2017,
  },

  // ── 2016 ──
  {
    title: "Increasing Engagement with Virtual Agents Using Automatic Camera Motion",
    authors: "L Ring, D Utami, S Olafsson, T Bickmore",
    venue: "International Conference on Intelligent Virtual Agents, 29&ndash;39, Springer",
    year: 2016,
  },
  {
    title: "Learning Icelandic Language and Culture in Virtual Reykjavik: Starting to Talk",
    authors: "B B&eacute;di, B Arnbj&ouml;rnsd&oacute;ttir, HH Vilhj&aacute;lmsson, HE Helgad&oacute;ttir, S &Oacute;lafsson, E Bj&ouml;rgvinsson",
    venue: "CALL Communities and Culture &mdash; Short Papers from EUROCALL, 37&ndash;43",
    year: 2016,
  },
  {
    title: "Starting a Conversation with Strangers in Virtual Reykjavik: Explicit Announcement of Presence",
    authors: "S &Oacute;lafsson, B B&eacute;di, HE Helgd&oacute;ttir, B Arnbj&ouml;rnsd&oacute;ttir, HH Vilhj&aacute;lmsson",
    venue: "Proceedings from the 3rd European Symposium on Multimodal Communication, Dublin, 62&ndash;68",
    year: 2016,
  },
  {
    url: "https://scholar.google.com/citations?view_op=view_citation&amp;hl=en&amp;user=F0xHwH8AAAAJ&amp;citation_for_view=F0xHwH8AAAAJ:zYLM7Y9cAGgC",
    title: "&ldquo;That Reminds Me&hellip;&rdquo;: Towards a Computational Model of Topic Development Within and Across Conversations",
    authors: "S Olafsson, T Bickmore",
    venue: "Just Talking &mdash; Casual Talk among Humans and Machines Workshop, LREC 2016",
    year: 2016,
  },

  // ── 2015 ──
  {
    url: "https://scholar.google.com/citations?view_op=view_citation&amp;hl=en&amp;user=F0xHwH8AAAAJ&amp;citation_for_view=F0xHwH8AAAAJ:W7OEmFMy1HYC",
    title: "When Strangers Meet: Collaborative Construction of Procedural Conversation in Embodied Conversational Agents",
    authors: "S &Oacute;lafsson",
    venue: "",
    year: 2015,
  },

  // ── 2014 ──
  {
    title: "We Never Stop Behaving: The Challenge of Specifying and Integrating Continuous Behavior",
    authors: "HH Vilhj&aacute;lmsson, EI Bj&ouml;rgvinsson, HE Helgad&oacute;ttir, S &Oacute;lafsson",
    venue: "Workshop on Architectures and Standards for IVAs at the 14th International Conference on Intelligent Virtual Agents",
    year: 2014,
  },
];
