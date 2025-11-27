document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // 1. TEMPLATES (Header, Footer, Modals)
    // ==========================================
    
    const TEMPLATES = {
        header: `
        <header id="header" class="fixed w-full top-0 z-50 transition-all duration-700 ease-in-out border-b border-transparent">
            <nav class="container mx-auto px-6 py-3 flex justify-between items-center">
                <a href="index.html" class="flex items-center">
                    <img src="images/logo.png" alt="Svojas Inc. Logo" class="h-14 md:h-20 transition-all duration-500">
                </a>
                <!-- Desktop Menu -->
                <div class="hidden md:flex items-center space-x-8">
                    <a href="index.html" class="nav-link text-sm uppercase tracking-wide">Home</a>
                    <a href="about.html" class="nav-link text-sm uppercase tracking-wide">About Us</a>
                    <a href="services.html" class="nav-link text-sm uppercase tracking-wide">Services</a>
                    <a href="industries.html" class="nav-link text-sm uppercase tracking-wide">Industries</a>
                    <a href="equipment.html" class="nav-link text-sm uppercase tracking-wide">Equipment</a>
                    <a href="faq.html" class="nav-link text-sm uppercase tracking-wide">FAQ</a>
                    <a href="contact.html" class="nav-link text-sm uppercase tracking-wide">Contact</a>
                </div>
                <div class="hidden md:flex items-center space-x-6">
                     <a href="tel:+12014900220" class="flex items-center space-x-2 text-sm font-bold phone-link transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.759a11.024 11.024 0 005.176 5.176l.76-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                        <span>+1 201 490 0220</span>
                    </a>
                    <a href="quote.html" class="btn-gradient text-white font-bold text-sm px-6 py-3 rounded-full shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-0.5">Get Quote</a>
                </div>
                <!-- Mobile Menu Button -->
                <button id="mobile-menu-button" class="md:hidden transition-colors duration-300">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
            </nav>
            <!-- Mobile Menu -->
            <div id="mobile-menu" class="hidden md:hidden px-6 pb-6 pt-4 glass-panel absolute w-full left-0 top-full border-t border-gray-100/20 !rounded-t-none">
                <div class="flex flex-col space-y-4">
                    <a href="index.html" class="block font-bold text-slate-800 hover:text-orange-500">Home</a>
                    <a href="about.html" class="block font-bold text-slate-800 hover:text-orange-500">About Us</a>
                    <a href="services.html" class="block font-bold text-slate-800 hover:text-orange-500">Services</a>
                    <a href="industries.html" class="block font-bold text-slate-800 hover:text-orange-500">Industries</a>
                    <a href="equipment.html" class="block font-bold text-slate-800 hover:text-orange-500">Equipment</a>
                    <a href="faq.html" class="block font-bold text-slate-800 hover:text-orange-500">FAQ</a>
                    <a href="contact.html" class="block font-bold text-slate-800 hover:text-orange-500">Contact</a>
                    <a href="quote.html" class="block btn-gradient text-white text-center font-bold mt-4 px-5 py-3 rounded-xl">Get a Free Quote</a>
                </div>
            </div>
        </header>`,

        footer: `
        <footer class="relative bg-slate-900 text-white overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"></div>
            <div class="absolute -top-24 -left-24 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div class="container mx-auto px-6 pt-20 pb-12 relative z-10">
                <div class="grid lg:grid-cols-4 gap-12 mb-16">
                    <div class="lg:col-span-1">
                        <a href="index.html" class="block mb-6">
                            <img src="images/logo.png" alt="Svojas Inc. Logo" class="h-16 opacity-90 hover:opacity-100 transition-opacity">
                        </a>
                        <p class="text-slate-400 leading-relaxed mb-6">"CARRYING YOUR LOAD AND TRUST"<br>Reliable logistics solutions tailored for the modern supply chain.</p>
                    </div>
                    <div>
                        <h4 class="font-bold mb-6 text-white text-lg relative inline-block">Quick Links<span class="absolute bottom-0 left-0 w-1/2 h-1 bg-orange-500 rounded-full"></span></h4>
                        <ul class="space-y-4">
                            <li><a href="index.html" class="text-slate-400 hover:text-orange-400 transition-colors duration-300 block">Home</a></li>
                            <li><a href="about.html" class="text-slate-400 hover:text-orange-400 transition-colors duration-300 block">About Us</a></li>
                            <li><a href="services.html" class="text-slate-400 hover:text-orange-400 transition-colors duration-300 block">Services</a></li>
                            <li><a href="industries.html" class="text-slate-400 hover:text-orange-400 transition-colors duration-300 block">Industries</a></li>
                            <li><a href="contact.html" class="text-slate-400 hover:text-orange-400 transition-colors duration-300 block">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-bold mb-6 text-white text-lg relative inline-block">Resources<span class="absolute bottom-0 left-0 w-1/2 h-1 bg-orange-500 rounded-full"></span></h4>
                        <ul class="space-y-4">
                            <li><a href="equipment.html" class="text-slate-400 hover:text-orange-400 transition-colors duration-300 block">Equipment Guide</a></li>
                            <li><a href="faq.html" class="text-slate-400 hover:text-orange-400 transition-colors duration-300 block">FAQ</a></li>
                            <li><a href="quote.html" class="text-slate-400 hover:text-orange-400 transition-colors duration-300 block">Get Quote</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-bold mb-6 text-white text-lg relative inline-block">Get in Touch<span class="absolute bottom-0 left-0 w-1/2 h-1 bg-orange-500 rounded-full"></span></h4>
                        <div class="space-y-4 text-slate-400">
                            <p class="flex items-start gap-3"><svg class="w-6 h-6 text-orange-500 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg><span>155 New Boston St.<br>Building M, Suite 130,<br>Woburn, MA 01801</span></p>
                            <p class="flex items-center gap-3"><svg class="w-5 h-5 text-orange-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg><a href="tel:+12014900220" class="hover:text-white transition-colors">+1 201 490 0220</a></p>
                            <p class="flex items-center gap-3"><svg class="w-5 h-5 text-orange-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg><a href="mailto:info@svojasinc.com" class="hover:text-white transition-colors">info@svojasinc.com</a></p>
                        </div>
                        <a href="quote.html" class="mt-8 inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-orange-500/30 transition-all transform hover:-translate-y-1">Request Rate</a>
                    </div>
                </div>
                <div class="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-center items-center text-slate-500 text-sm">
                    <p>&copy; 2021 Svojas Inc. All Rights Reserved.</p>
                </div>
            </div>
        </footer>`,

        modal: `
        <div id="service-modal" class="fixed inset-0 z-50 hidden overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                <div class="fixed inset-0 transition-opacity bg-slate-900/70 backdrop-blur-sm" aria-hidden="true" id="modal-overlay"></div>
                <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div class="inline-block overflow-hidden text-left align-bottom transition-all transform glass-panel shadow-2xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full !bg-white/95 !border-white/80">
                    <div class="px-6 pt-8 pb-6 sm:p-8">
                        <div class="sm:flex sm:items-start">
                            <div class="mt-3 text-center sm:mt-0 sm:text-left w-full">
                                <div class="flex justify-between items-center mb-8 border-b border-gray-200/60 pb-6">
                                    <h3 class="text-3xl font-bold leading-6 text-slate-800" id="modal-title">Service Title</h3>
                                    <button id="modal-close-btn" class="text-gray-400 hover:text-orange-500 transition-colors duration-300 bg-gray-50 hover:bg-orange-50 p-2 rounded-full">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                    </button>
                                </div>
                                <div class="mt-2">
                                    <p class="text-lg text-slate-600 mb-8 leading-relaxed" id="modal-description">Description.</p>
                                    <h4 class="font-bold text-slate-800 mb-4 uppercase text-sm tracking-wide flex items-center">
                                        <span class="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span> Key Features
                                    </h4>
                                    <ul class="text-base text-slate-600 space-y-4 bg-gray-50/50 p-6 rounded-xl border border-gray-100" id="modal-details"></ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="px-6 py-6 bg-gray-50/80 sm:px-8 sm:flex sm:flex-row-reverse gap-4 border-t border-gray-200/60">
                        <a href="quote.html" class="btn-gradient inline-flex justify-center w-full px-8 py-3 text-base font-bold text-white rounded-full shadow-md hover:shadow-xl focus:outline-none transition-all duration-500 sm:w-auto">Get a Quote</a>
                        <button type="button" id="modal-bottom-close-btn" class="inline-flex justify-center w-full px-8 py-3 mt-3 text-base font-bold text-slate-600 bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-50 focus:outline-none transition-all duration-500 sm:mt-0 sm:w-auto">Close</button>
                    </div>
                </div>
            </div>
        </div>`
    };

    // ==========================================
    // 2. INJECTION & INITIALIZATION
    // ==========================================

    const injectHTML = (id, html) => {
        const el = document.getElementById(id);
        if(el) el.innerHTML = html;
    };

    injectHTML('dynamic-header', TEMPLATES.header);
    injectHTML('dynamic-footer', TEMPLATES.footer);
    injectHTML('dynamic-modal', TEMPLATES.modal);

    // Dynamic Year (Removed as year is now hardcoded)
    // const yearSpan = document.getElementById('year');
    // if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // ==========================================
    // 3. EVENT LISTENERS & LOGIC
    // ==========================================

    // Scroll Effect
    const headerElement = document.getElementById('header');
    if (headerElement) {
        window.addEventListener('scroll', () => {
            headerElement.classList.toggle('scrolled', window.scrollY > 50);
        });
        if(window.scrollY > 50) headerElement.classList.add('scrolled');
    }

    // Mobile Menu
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    }

    // Active Link Highlighting
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active-page', 'text-orange-500');
        }
    });

    // Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.action = "https://formspree.io/f/meoldnwk";
        contactForm.method = "POST";
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST', body: formData, headers: { 'Accept': 'application/json' }
                });
                if (response.ok) {
                    document.getElementById('contact-form-container').classList.add('hidden');
                    document.getElementById('contact-success-message').classList.remove('hidden');
                } else {
                    const data = await response.json();
                    throw new Error(data.errors ? data.errors.map(e => e.message).join(", ") : 'Submission failed.');
                }
            } catch (err) { alert('Error: ' + err.message); }
        });
    }

    // Quote Form
    const quoteForm = document.getElementById('quote-form');
    if (quoteForm) {
        quoteForm.action = "https://formspree.io/f/xvgnoqlz";
        
        let currentStep = 1;
        let formState = {};
        const steps = {
            1: `
                <h3 class="text-xl font-bold mb-6 text-center text-slate-800">What are you shipping?</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${['General Freight (LTL/FTL):standard', 'Intermodal Container:container', 'Oversized / Heavy:oog', 'Airport Recovery/Delivery:air'].map(type => {
                        const [label, val] = type.split(':');
                        return `
                        <input type="radio" name="Shipment Category" value="${val}" id="type-${val}" class="hidden quote-option-radio">
                        <label for="type-${val}" class="block p-6 rounded-xl cursor-pointer">
                            <h4 class="font-bold text-lg">${label}</h4>
                        </label>`;
                    }).join('')}
                </div>`,
            2: (needsFollowUp) => needsFollowUp ? 
                `<h3 class="text-xl font-bold mb-6 text-center text-slate-800">Import or Export?</h3>
                 <div class="flex justify-center gap-6">
                    <input type="radio" name="Direction" value="import" id="type-import" class="hidden quote-option-radio"><label for="type-import" class="w-full text-center block p-6 rounded-xl cursor-pointer"><h4 class="font-bold text-lg">Import</h4></label>
                    <input type="radio" name="Direction" value="export" id="type-export" class="hidden quote-option-radio"><label for="type-export" class="w-full text-center block p-6 rounded-xl cursor-pointer"><h4 class="font-bold text-lg">Export</h4></label>
                 </div>
                 <div class="mt-8 text-center"><button type="button" class="back-btn text-sm text-slate-500 hover:text-orange-500 hover:underline">Back</button></div>` :
                `<h3 class="text-xl font-bold mb-6 text-center text-slate-800">Shipment Details</h3>
                 <div class="space-y-5">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div><label class="block text-sm font-bold text-slate-700 mb-1">Origin Zip</label><input type="text" name="Origin Zip" class="w-full rounded-lg p-3" required></div>
                        <div><label class="block text-sm font-bold text-slate-700 mb-1">Destination Zip</label><input type="text" name="Dest Zip" class="w-full rounded-lg p-3" required></div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div><label class="block text-sm font-bold text-slate-700 mb-1">Commodity</label><input type="text" name="Commodity" class="w-full rounded-lg p-3" required></div>
                        <div><label class="block text-sm font-bold text-slate-700 mb-1">Total Weight (lbs)</label><input type="number" name="Weight" class="w-full rounded-lg p-3" required></div>
                    </div>
                 </div>
                 <div class="mt-8 flex justify-between items-center"><button type="button" class="back-btn text-sm text-slate-500 hover:text-orange-500 hover:underline">Back</button><button type="button" class="next-btn btn-gradient text-white font-bold px-8 py-3 rounded-full shadow-lg">Continue</button></div>`,
            contact: `
                <h3 class="text-xl font-bold mb-6 text-center text-slate-800">Contact Information</h3>
                <div class="grid grid-cols-1 gap-5">
                    <div><label class="block text-sm font-bold text-slate-700 mb-1">Full Name</label><input type="text" name="Name" class="w-full rounded-lg p-3" required></div>
                    <div><label class="block text-sm font-bold text-slate-700 mb-1">Company</label><input type="text" name="Company" class="w-full rounded-lg p-3" required></div>
                    <div><label class="block text-sm font-bold text-slate-700 mb-1">Email</label><input type="email" name="email" class="w-full rounded-lg p-3" required></div>
                    <div><label class="block text-sm font-bold text-slate-700 mb-1">Phone</label><input type="tel" name="Phone" class="w-full rounded-lg p-3" required></div>
                </div>
                <div class="mt-8 flex justify-between items-center"><button type="button" class="back-btn text-sm text-slate-500 hover:text-orange-500 hover:underline">Back</button><button type="submit" class="btn-gradient text-white font-bold px-8 py-3 rounded-full shadow-lg">Get Quote</button></div>`
        };

        const renderStep = () => {
            const container = document.getElementById('progress-bar-container');
            const fill = document.getElementById('progress-bar-fill');
            const text = document.getElementById('progress-text');
            
            if(container) {
                if(currentStep === 1) container.classList.add('hidden');
                else {
                    container.classList.remove('hidden');
                    const total = formState.needsFollowUp ? 4 : 3;
                    text.textContent = `Step ${currentStep} of ${total}`;
                    fill.style.width = `${((currentStep - 1) / (total - 1)) * 100}%`;
                }
            }

            // Logic to determine HTML based on state
            if(currentStep === 1) quoteForm.innerHTML = steps[1];
            else if(currentStep === 2) quoteForm.innerHTML = steps[2](formState.needsFollowUp);
            else if(currentStep === 3) quoteForm.innerHTML = formState.needsFollowUp ? steps[2](false) : steps.contact;
            else if(currentStep === 4) quoteForm.innerHTML = steps.contact;
            
            attachListeners();
        };

        const saveState = () => {
             quoteForm.querySelectorAll('input, select').forEach(input => {
                 if(input.type === 'radio' && input.checked) formState[input.name] = input.value;
                 else if(input.type !== 'radio' && input.value) formState[input.name] = input.value;
             });
        };

        const attachListeners = () => {
            // Radio Button Changes
            quoteForm.querySelectorAll('input[type="radio"]').forEach(r => {
                r.addEventListener('change', (e) => {
                    saveState();
                    if(currentStep === 1) {
                        formState.needsFollowUp = ['container', 'oog', 'air'].includes(e.target.value);
                    }
                    currentStep++; renderStep();
                });
            });
            // Buttons
            const backBtn = quoteForm.querySelector('.back-btn');
            const nextBtn = quoteForm.querySelector('.next-btn');
            
            if(backBtn) backBtn.addEventListener('click', () => { currentStep--; renderStep(); });
            if(nextBtn) nextBtn.addEventListener('click', () => { saveState(); currentStep++; renderStep(); });
        };

        renderStep(); // Init

        quoteForm.addEventListener('submit', async (e) => {
            e.preventDefault(); saveState();
            const formData = new FormData();
            Object.keys(formState).forEach(k => formData.append(k, formState[k]));
            if(formState.email) formData.append('_replyto', formState.email);

            try {
                const res = await fetch(quoteForm.action, { method: 'POST', body: formData, headers: {'Accept': 'application/json'} });
                if(res.ok) {
                    document.getElementById('quote-form-container').classList.add('hidden');
                    document.getElementById('success-message').classList.remove('hidden');
                } else throw new Error('Failed');
            } catch(e) { alert('Submission Error. Check configuration.'); }
        });
        
        document.getElementById('reset-quote-form').addEventListener('click', () => {
            currentStep = 1; formState = {}; quoteForm.reset(); renderStep();
            document.getElementById('quote-form-container').classList.remove('hidden');
            document.getElementById('success-message').classList.add('hidden');
        });
    }

    // Modal Logic
    const servicesData = {
        'ftl': { title: 'FTL & LTL', description: 'Full Truckload and Less-than-Truckload solutions optimized for cost and speed.', details: ['Nationwide coverage', 'Dry Van & Reefer', 'Real-time Tracking'] },
        'hazmat': { title: 'Hazardous Materials', description: 'Certified handling of sensitive and dangerous goods.', details: ['Class 3, 8, 9', 'Compliance Guaranteed', 'Vetted Carriers'] },
        'amazon': { title: 'Amazon Deliveries', description: 'Expert FBA delivery services with precise appointment scheduling.', details: ['CARP/Relay Booking', 'Strict Compliance', 'Drop Trailer Programs'] },
        'crossdock': { title: 'Cross Docking', description: 'Rapid unloading and reloading to minimize storage costs.', details: ['Transloading', 'Short-term Storage', 'Distribution'] },
        'drayage': { title: 'Drayage', description: 'Container movement from ports and rail ramps.', details: ['TWIC Certified', 'Port & Rail Access', 'Container Tracking'] },
        'air': { title: 'Airport Recovery', description: 'Ground transport for import/export air cargo.', details: ['TSA Compliant', 'Fast Recovery', 'Dedicated Trucks'] },
        'oog': { title: 'Specialized & OOG', description: 'Heavy haul and over-dimensional cargo solutions.', details: ['RGN & Flatbed', 'Permits & Escorts', 'Project Planning'] }
    };

    document.addEventListener('click', (e) => {
        const trigger = e.target.closest('.service-card-trigger');
        if(trigger) {
            const data = servicesData[trigger.dataset.service];
            if(data) {
                document.getElementById('modal-title').textContent = data.title;
                document.getElementById('modal-description').textContent = data.description;
                document.getElementById('modal-details').innerHTML = data.details.map(d => `<li class="flex items-center"><svg class="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>${d}</li>`).join('');
                document.getElementById('service-modal').classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }
        }
        if(e.target.closest('#modal-close-btn') || e.target.closest('#modal-bottom-close-btn') || e.target.id === 'modal-overlay') {
            document.getElementById('service-modal').classList.add('hidden');
            document.body.style.overflow = '';
        }
    });
});