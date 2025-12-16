
// --- Portfolio Data (15 Projects) ---
const portfolioItems = [
    {
        title: "Flusso 1: Gestione Allegati Mail e Notifica Slack",
        description: "Workflow per l'estrazione e l'archiviazione automatica degli allegati email con notifica in tempo reale su Slack.",
        youtube: "https://youtu.be/FKftAjtOiJU",
        github: "https://github.com/ilenia-unida/Gestione-allegati-mail-e-notifica-su-Slack",
        image: "https://imgur.com/jDitvbv.png"
    },
    {
        title: "Flusso 2: Archiviare Messaggi Slack e Invio Mail",
        description: "Sistema di archiviazione automatica dei messaggi Slack e generazione di riepiloghi periodici inviati via email.",
        youtube: "https://youtu.be/Z2BvPtWAgmE",
        github: "https://github.com/ilenia-unida/Archiviare-i-messaggi-su-Slack-e-invio-mail",
        image: "https://imgur.com/fCvG09n.png"
    },
    {
        title: "Flusso 3: Creare Cartella su Drive da Istruzione Mail",
        description: "Automazione per la creazione dinamica di cartelle su Google Drive basata su istruzioni ricevute tramite email.",
        youtube: "https://youtu.be/OMxUVSNWkok",
        github: "https://github.com/ilenia-unida/Creare-una-cartella-su-Drive-inviando-l-istruzione-con-una-mail",
        image: "https://imgur.com/MdEqtys.png"
    },
    {
        title: "Flusso 4: Scraping con Google Custom Search",
        description: "Implementazione di web scraping per l'acquisizione strutturata di dati tramite l'API di Google Custom Search.",
        youtube: "https://youtu.be/BC6U6vJ5JsI",
        github: "https://github.com/ilenia-unida/Scraping-con-Google-Custom-Search/tree/main",
        image: "https://imgur.com/PwUFtfp.png"
    },
    {
        title: "Flusso 5: Scoring di Profili con Scraping",
        description: "Workflow AI per la valutazione (Scoring) e la classificazione automatica di profili e dati ottenuti tramite scraping.",
        youtube: "https://youtu.be/zv2m_LeGJZc",
        github: "https://github.com/ilenia-unida/Scoring-di-profili-ottenuti-con-lo-scraping",
        image: "https://imgur.com/CQSNl9r.png"
    },
    {
        title: "Flusso 6: Scraping con Phantombuster",
        description: "Utilizzo di Phantombuster per tecniche di scraping avanzate, integrato in una pipeline n8n.",
        youtube: "https://youtu.be/rGYWzIco6gw",
        github: "https://github.com/ilenia-unida/Scraping-con-Phantombuster/tree/main",
        image: "https://imgur.com/WSQZesw.png"
    },
    {
        title: "Flusso 7: Creazione Contenuti Social Automatizzata",
        description: "Generazione automatica di idee e copy per i social media utilizzando l'Intelligenza Artificiale.",
        youtube: "https://youtu.be/mC1Fv0yVAkU",
        github: "https://github.com/ilenia-unida/Creazione-automatizzata-di-contenuti-per-i-social",
        image: "https://imgur.com/2lxV3oV.png"
    },
    {
        title: "Flusso 8: Creazione Pagina Notion e Keyword",
        description: "Automazione del Content Management System (CMS): creazione di pagine Notion strutturate a partire da keyword specifiche.",
        youtube: "https://youtu.be/spKK-pqKWWA",
        github: "https://github.com/ilenia-unida/Creazione-pagina-su-Notion-e-Keyword",
        image: "https://imgur.com/EJHmhwY.png"
    },
    {
        title: "Flusso 9: Workflow di Gestione dell'Errore",
        description: "Implementazione di un robusto Error Handling per la gestione e la notifica strutturata degli errori nei flussi complessi.",
        youtube: "https://youtu.be/hFIJ8nR2p3Y",
        github: "https://github.com/ilenia-unida/Workflow-di-gestione-dell-errore",
        image: "https://imgur.com/MJNq50F.png"
    },
    {
        title: "Flusso 10: Report Giornaliero Ticket Zendesk",
        description: "Generazione automatizzata di un report di Business Intelligence quotidiano sui ticket del servizio clienti Zendesk.",
        youtube: "https://youtu.be/ZLX-nVJRQrs",
        github: "https://github.com/ilenia-unida/Report-giornaliero-automatizzato-sui-ticket-Zendesk/tree/main",
        image: "https://imgur.com/uLprQ81.png"
    },
    {
        title: "Flusso 11: Analisi Risposte Sondaggio con AI",
        description: "Utilizzo dell'AI per analizzare, classificare e riassumere automaticamente le risposte aperte degli utenti a sondaggi o feedback.",
        youtube: "https://youtu.be/3iqY0xf6BTo",
        github: "https://github.com/ilenia-unida/Analizi-risposte-degli-utenti-a-un-sondaggio-Formbrics",
        image: "https://imgur.com/GW2Et9f.png"
    },
    {
        title: "Flusso 12: Chat Bot AI Avanzato (RAG)",
        description: "Architettura RAG (Retrieval-Augmented Generation) con gestione del Fallback per un Chatbot su Knowledge Base.",
        youtube: "https://youtu.be/MNRREksiUHI",
        github: "https://github.com/ilenia-unida/Chat-Bot-Ai-avanzato/tree/main",
        image: "https://imgur.com/EAidLIi.png"
    },
    {
        title: "Flusso 13: Dashboard in Tempo Reale",
        description: "Creazione di Dashboard interattive in HTML/CSS e generazione di report di criticità tramite AI.",
        youtube: "https://youtu.be/gNxayFaFNeM",
        github: "https://github.com/ilenia-unida/Dashboard-in-Html-con-n8n/tree/main",
        image: "https://imgur.com/C6tqCRK.png"
    },
    {
        title: "Flusso 14: Lead Management & Scoring AI",
        description: "Classificazione automatica dei Lead (Scoring) via email con Gemini, integrazione con CRM e follow-up strategico.",
        youtube: "https://youtu.be/EESTTAZ31pI",
        github: "https://github.com/ilenia-unida/Lead-Management/tree/main",
        image: "https://imgur.com/9oRKXCG.png"
    },
    {
        title: "Flusso 15: Workflow Multi-Agent per Marketing",
        description: "Architettura Multi-Agent per la generazione di Brand Strategy, Piani Editoriali a 3 fasi e Copy Pubblicitari finali.",
        youtube: "https://youtu.be/fYTBnUSdQkA",
        github: "https://github.com/ilenia-unida/Workflow-Multi-agent-per-la-creazione-di-contenuti-marketing",
        image: "https://imgur.com/3E3EbAm.png"
    }
];

// --- Intersection Observer for "Reveal on Scroll" ---
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Load Portfolio Grid FIRST
    const gridContainer = document.getElementById('portfolio-grid');
    if (gridContainer) {
        renderPortfolio(gridContainer);
    }

    // 2. Setup Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, observerOptions);

    // 3. Select elements AFTER portfolio has been rendered
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(el => observer.observe(el));

    // 4. Setup Contact Form Handler (if present)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        setupContactForm(contactForm);
    }
});

// --- Portfolio Rendering (Horizontal Card Layout) ---
function renderPortfolio(container) {
    container.innerHTML = portfolioItems.map((item, index) => `
        <div class="group flex flex-col md:flex-row bg-slate-900 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] overflow-hidden reveal-on-scroll delay-100 h-full">
            
            <!-- Image Side (Left on Desktop, Top on Mobile) -->
            <div class="md:w-2/5 h-48 md:h-auto relative shrink-0 overflow-hidden">
                <!-- Added referrerpolicy="no-referrer" to fix Imgur hotlinking issues -->
                <img src="${item.image}" alt="${item.title}" referrerpolicy="no-referrer" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-slate-900/10"></div>
            </div>

            <!-- Content Side (Right on Desktop, Bottom on Mobile) -->
            <div class="p-6 md:w-3/5 flex flex-col relative">
                <h3 class="text-lg font-bold text-white mb-3 leading-tight group-hover:text-cyan-400 transition-colors">
                    ${item.title}
                </h3>
                
                <p class="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                    ${item.description}
                </p>

                <!-- Actions / Links -->
                <div class="mt-auto pt-4 border-t border-slate-800 flex items-center gap-4">
                    <a href="${item.youtube}" target="_blank" class="flex items-center gap-2 text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wide transition-all shadow hover:shadow-red-900/50">
                        <i class="fab fa-youtube"></i> Demo
                    </a>
                    <a href="${item.github}" target="_blank" class="flex items-center gap-2 text-slate-300 hover:text-white hover:bg-slate-800 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wide transition-colors border border-slate-700">
                        <i class="fab fa-github"></i> Code
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// --- Handle Contact Form Submission via JS ---
function setupContactForm(form) {
    const result = document.getElementById('form-result');
    const submitBtn = document.getElementById('submit-btn');

    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Invio in corso...';
        result.classList.add('hidden');

        // Prepare Data
        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        
        const json = JSON.stringify(object);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            });

            const jsonResponse = await response.json();

            if (response.status === 200) {
                result.innerHTML = "<span class='text-green-400'><i class='fas fa-check-circle'></i> Messaggio inviato con successo! Ti risponderò presto.</span>";
                result.classList.remove('hidden');
                form.reset();
            } else {
                console.error("Web3Forms Error:", jsonResponse);
                result.innerHTML = `<span class='text-red-400'>${jsonResponse.message || "Qualcosa è andato storto. Riprova più tardi."}</span>`;
                result.classList.remove('hidden');
            }
        } catch (error) {
            console.error("Network Error:", error);
            result.innerHTML = "<span class='text-red-400'>Errore di connessione. Riprova più tardi.</span>";
            result.classList.remove('hidden');
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerText = 'Invia Messaggio';
            setTimeout(() => {
                result.classList.add('hidden');
            }, 8000);
        }
    });
}
