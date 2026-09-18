const icons = {
  link: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1"/><path d="M14 11a5 5 0 0 0-7.1-.1l-2 2a5 5 0 0 0 7.1 7.1l1.1-1.1"/></svg>',
  search: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>',
  plus: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
  bell: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></svg>',
  shield: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 4 6v5c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10V6l-8-3Z"/><path d="m9 12 2 2 4-5"/></svg>',
  clock: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  edit: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m4 16-1 5 5-1L19 9l-4-4L4 16Z"/><path d="m13 7 4 4"/></svg>',
  pause: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14M16 5v14"/></svg>',
  trash: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3M7 7l1 13h8l1-13"/></svg>',
  check: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>',
  arrow: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M14 7l5 5-5 5"/></svg>',
  mail: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>',
  info: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>',
  alert: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4 3 20h18L12 4Z"/><path d="M12 9v5M12 17h.01"/></svg>',
  tag: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 13 11 4H4v7l9 9 7-7Z"/><circle cx="8" cy="8" r="1"/></svg>',
  calendar: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/></svg>',
  box: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m4 7 8-4 8 4v10l-8 4-8-4V7Z"/><path d="m4 7 8 4 8-4M12 11v10"/></svg>',
  file: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h8l4 4v14H6V3Z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>',
  rotate: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 7v5h-5M4 17v-5h5"/><path d="M7 8a7 7 0 0 1 11 2M17 16a7 7 0 0 1-11-2"/></svg>'
};

const examples = [
  { label: 'Price drop', url: 'https://www.sony.co.in/headphones/wh-1000xm6', request: 'Alert me when the price drops below ₹30,000.' },
  { label: 'Applications', url: 'https://www.example.edu/admissions', request: 'Tell me when applications open.' },
  { label: 'Size 9', url: 'https://www.example.com/running-shoes', request: 'Notify me when size 9 is available.' },
  { label: 'Appointments', url: 'https://www.exampleclinic.com/appointments', request: 'Tell me when appointment slots appear.' },
  { label: 'Policy update', url: 'https://www.example.com/pricing-policy', request: 'Alert me if the pricing policy changes.' }
];

const defaultMonitors = [
  { id: 'sony', title: 'Sony WH-1000XM6 Wireless Headphones', domain: 'sony.co.in', logo: 'S', logoClass: 'sony', condition: 'Price below ₹30,000', current: '₹29,499', previous: '₹34,990', status: 'met', statusLabel: 'Condition met', last: 'Today, 2:04 PM', next: 'Today, 8:00 PM', frequency: 'Every six hours', paused: false },
  { id: 'iim', title: 'MBA Admissions 2027', domain: 'iiml.ac.in', logo: 'I', logoClass: 'iim', condition: 'Applications are open', current: 'Not open yet', previous: 'Not open', status: 'unchanged', statusLabel: 'Unchanged', last: 'Today, 8:02 AM', next: 'Tomorrow, 8:00 AM', frequency: 'Daily', paused: false },
  { id: 'flight', title: 'Bengaluru to Paris flights', domain: 'skyscanner.co.in', logo: 'K', logoClass: 'air', condition: 'Return fare below ₹45,000', current: '₹51,840', previous: '₹52,220', status: 'warning', statusLabel: 'Attention required', last: 'Yesterday, 10:18 PM', next: 'Check paused', frequency: 'Every six hours', paused: true },
  { id: 'policy', title: 'Consumer pricing policy', domain: 'example.com', logo: 'P', condition: 'Meaningful policy content changes', current: 'Could not reach page', previous: 'No change detected', status: 'error', statusLabel: 'Page unavailable', last: 'Yesterday, 4:10 PM', next: 'Today, 4:00 PM', frequency: 'Daily', paused: false }
];

const state = {
  monitors: readMonitors(),
  draft: JSON.parse(sessionStorage.getItem('cw-draft') || 'null') || {},
  filter: 'all',
  search: ''
};

function readMonitors() {
  try { return JSON.parse(localStorage.getItem('cw-monitors')) || defaultMonitors; }
  catch { return defaultMonitors; }
}
function saveMonitors() { localStorage.setItem('cw-monitors', JSON.stringify(state.monitors)); }
function saveDraft() { sessionStorage.setItem('cw-draft', JSON.stringify(state.draft)); }
function escapeHTML(value = '') { return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function route() { return location.hash.replace(/^#\/?/, '').split('?')[0] || 'home'; }
function setShell(publicShell) {
  document.querySelectorAll('[data-shell="public"]').forEach(el => el.hidden = !publicShell);
  document.body.classList.toggle('in-app', !publicShell);
}
function toast(message) {
  const region = document.getElementById('toast-region');
  const node = document.createElement('div'); node.className = 'toast'; node.textContent = message;
  region.append(node); setTimeout(() => node.remove(), 3200);
}
function appHeader() {
  return `<div class="app-shell"><header class="app-bar"><a class="brand" href="#/"><span class="brand-mark" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m5 12 4 4L19 6"/></svg></span><span>ChangeWatch</span></a><div class="app-actions"><a class="icon-button" href="#/email" aria-label="View sample alert">${icons.bell}</a><span class="avatar" aria-label="Demo user">VR</span></div></header><div class="app-page">`;
}
function demoBanner() { return `<div class="demo-banner" role="note">${icons.info}<div><strong>Interactive demonstration</strong><br>Values and checks shown here are simulated. No webpage is being monitored and no email will be sent.</div></div>`; }

function landing() {
  setShell(true);
  return `<section class="hero"><div class="hero-inner"><span class="eyebrow"><span class="eyebrow-dot"></span>Meaningful alerts, not page noise</span><h1>Stop checking.<br>Start watching.</h1><p class="hero-copy">Paste any public webpage, describe what you’re waiting for, and get alerted when it happens.</p><form class="watch-form" id="hero-form" novalidate><div class="field-row"><div class="field-wrap">${icons.link}<label class="sr-only" for="hero-url">Public webpage URL</label><input id="hero-url" name="url" type="url" inputmode="url" autocomplete="url" placeholder="Paste a public webpage URL"></div><div class="field-wrap">${icons.bell}<label class="sr-only" for="hero-request">What are you waiting for?</label><input id="hero-request" name="request" autocomplete="off" placeholder="e.g. Price below ₹40,000"></div><button class="button button-primary" type="submit">Start watching ${icons.arrow}</button></div><p class="form-error" id="hero-error" role="alert"></p><p class="demo-note">Try the flow with sample data. Live monitoring is not connected in this MVP.</p></form><div class="example-row" aria-label="Example monitoring requests">${examples.map((x,i)=>`<button class="example-chip" data-example="${i}" type="button">${x.label}</button>`).join('')}</div></div></section>
  <section class="section" id="how-it-works"><div class="section-head center"><span class="eyebrow">Simple by design</span><h2>From waiting to watching in under a minute</h2><p>No selectors, code or complicated rules. Say what matters in your own words.</p></div><div class="steps"><article class="step"><span class="step-number">1</span><h3>Paste the page</h3><p>Use any public product, application, appointment or policy page.</p></article><article class="step"><span class="step-number">2</span><h3>Describe the change</h3><p>“Tell me when size 9 is available” is enough. You can review the rule before saving.</p></article><article class="step"><span class="step-number">3</span><h3>Receive an alert</h3><p>We notify you only when the change matches what you asked for.</p></article></div></section>
  <section class="section section-tight"><div class="section-head"><span class="eyebrow">Built for real waiting</span><h2>One place for the pages you keep revisiting</h2></div><div class="use-grid">${[
    ['tag','Prices','Know when a product or fare falls below your target.'],['box','Availability','Catch restocks, variants and sizes when they return.'],['file','Applications','See when admissions, grants or forms open.'],['calendar','Appointments','Get notified when a public slot appears.'],['shield','Policy changes','Follow meaningful updates to terms and pricing.']
  ].map(x=>`<article class="use-card"><span class="use-icon">${icons[x[0]]}</span><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join('')}</div></section>
  <section class="trust-section" id="privacy"><div class="trust-inner"><div><span class="eyebrow">Responsible by default</span><h2>Public pages only. Clear rules. No hidden access.</h2><p>ChangeWatch is designed to respect access controls and website restrictions. If a page cannot be checked responsibly, we tell you plainly.</p></div><div class="trust-list"><div class="trust-item">${icons.shield}<div><strong>No passwords or private pages</strong><span>We do not sign in, bypass protection or access gated content.</span></div></div><div class="trust-item">${icons.clock}<div><strong>Measured checking</strong><span>Checks run only at the frequency you choose and respect site limits.</span></div></div><div class="trust-item">${icons.bell}<div><strong>Meaningful alerts</strong><span>Your editable rule decides what deserves an email.</span></div></div></div></div></section>
  <section class="section" id="pricing"><div class="section-head center"><span class="eyebrow">Simple pricing</span><h2>Start free. Check more often when it matters.</h2><p>Payment is not connected in this MVP.</p></div><div class="pricing-grid">${[
    ['Free','₹0','3 monitors','Daily checks','Email alerts'],['Plus','₹299','25 monitors','Six-hour checks','Change history'],['Pro','₹799','100 monitors','Hourly checks','Priority alerts']
  ].map((p,i)=>`<article class="price-card ${i===1?'featured':''}">${i===1?'<span class="popular">Most useful</span>':''}<h3>${p[0]}</h3><div class="price">${p[1]} <small>/ month</small></div><ul><li>${p[2]}</li><li>${p[3]}</li><li>${p[4]}</li></ul><a class="button ${i===1?'button-primary':'button-ghost'} button-full" href="#/create">Try the demo</a></article>`).join('')}</div></section>`;
}

function createPage() {
  setShell(false);
  const d = state.draft;
  return `${appHeader()}<div class="create-wrap"><div class="page-head"><div><p class="eyebrow">New monitor</p><h1>What should we watch?</h1><p>Use a public page and describe the result you care about.</p></div></div>${demoBanner()}<div class="progress-line" aria-label="Step 1 of 2"><span class="progress-segment active"></span><span class="progress-segment"></span></div><form class="form-card" id="create-form" novalidate><h2>Page and change</h2><p>We’ll turn your request into a simple rule you can check next.</p><div class="form-group"><label for="create-url">Public webpage URL</label><input class="text-input" id="create-url" type="url" value="${escapeHTML(d.url || '')}" placeholder="https://example.com/product" required><p class="hint">Pages requiring a login or blocking automated access are not supported.</p><p class="form-error" id="url-error" role="alert"></p></div><div class="form-group"><label for="create-request">What are you waiting for?</label><textarea class="text-area" id="create-request" placeholder="Tell me when the price is below ₹30,000" required>${escapeHTML(d.request || '')}</textarea><p class="hint">Write it naturally. Include a price, size, status or event when relevant.</p><p class="form-error" id="request-error" role="alert"></p></div><fieldset class="form-group"><legend class="group-label">How often should we check?</legend><div class="radio-grid"><div class="radio-card"><input id="daily" name="frequency" type="radio" value="Daily" ${!d.frequency||d.frequency==='Daily'?'checked':''}><label for="daily"><strong>Daily</strong><span>Included in Free</span></label></div><div class="radio-card"><input id="six" name="frequency" type="radio" value="Every six hours" ${d.frequency==='Every six hours'?'checked':''}><label for="six"><strong>Every six hours</strong><span>Plus · available in demo</span></label></div><div class="radio-card"><input id="hourly" name="frequency" type="radio" value="Hourly" ${d.frequency==='Hourly'?'checked':''}><label for="hourly"><strong>Hourly</strong><span>Pro · available in demo</span></label></div></div></fieldset><div class="form-group"><label for="channel">Alert channel</label><select class="select-input" id="channel"><option>Email</option></select></div><div class="form-footer"><a class="button button-ghost" href="#/">Cancel</a><button class="button button-primary" type="submit">Review monitor ${icons.arrow}</button></div></form></div></div>`;
}

function inferRule(request='') {
  const price = request.match(/(?:₹|Rs\.?\s?)([\d,]+)/i) || request.match(/(?:below|under|less than)\s+([\d,]+)/i);
  if (price) return { type: 'Price is below', value: `₹${price[1].replace(/₹/g,'')}`, current: '₹34,990' };
  if (/size\s*9/i.test(request)) return { type: 'Size 9 is', value: 'Available', current: 'Unavailable' };
  if (/application/i.test(request)) return { type: 'Applications are', value: 'Open', current: 'Closed' };
  if (/appointment|slot/i.test(request)) return { type: 'Appointment slots are', value: 'Available', current: 'No slots' };
  if (/policy|pricing page|changes?/i.test(request)) return { type: 'Meaningful page content', value: 'Changes', current: 'No change detected' };
  return { type: 'Page status', value: 'Matches your request', current: 'Not matched' };
}
function pageName(url='') {
  if (/sony/i.test(url)) return 'Sony WH-1000XM6 product page';
  try { const host = new URL(url).hostname.replace('www.',''); return `${host} webpage`; } catch { return 'Public webpage'; }
}
function reviewPage() {
  setShell(false);
  if (!state.draft.url) { location.hash = '#/create'; return ''; }
  const d=state.draft, rule=inferRule(d.request);
  return `${appHeader()}<div class="create-wrap"><div class="page-head"><div><p class="eyebrow">New monitor</p><h1>Check the rule</h1><p>Make sure we understood what matters before activating it.</p></div></div>${demoBanner()}<div class="progress-line" aria-label="Step 2 of 2"><span class="progress-segment active"></span><span class="progress-segment active"></span></div><form class="form-card" id="review-form"><h2>Our interpretation</h2><p>This is the condition that would trigger an alert.</p><div class="interpret-card"><h3>${icons.check} Clear, trackable condition</h3><dl class="interpret-grid"><dt>Page</dt><dd>${escapeHTML(pageName(d.url))}</dd><dt>Watching for</dt><dd>${escapeHTML(rule.type)} ${escapeHTML(rule.value)}</dd><dt>Current value</dt><dd>${escapeHTML(rule.current)}</dd><dt>Frequency</dt><dd>${escapeHTML(d.frequency || 'Daily')}</dd></dl></div><div class="form-group"><label for="rule-type">Edit the condition</label><div class="rule-editor"><select class="select-input" id="rule-type"><option>${escapeHTML(rule.type)}</option><option>Page contains</option><option>Value becomes available</option><option>Meaningful page content changes</option></select><input class="text-input" id="rule-value" value="${escapeHTML(rule.value)}" aria-label="Condition value"></div></div><div class="form-group"><label for="email">Send alerts to</label><div class="email-row"><input class="text-input" id="email" type="email" value="veera@example.com"><button class="button button-ghost" type="button" id="verify-email">Verify email</button></div><p class="hint" id="verify-hint">Demo only. No verification email will be sent.</p></div><div class="form-footer"><a class="button button-ghost" href="#/create">Back</a><button class="button button-primary" type="submit">Activate monitor</button></div></form></div></div>`;
}

function monitorCard(m) {
  return `<article class="monitor-card" data-status="${m.paused?'paused':m.status}"><div class="card-top"><div class="site-id"><span class="site-logo ${m.logoClass || ''}">${escapeHTML(m.logo)}</span><div><div class="site-title">${escapeHTML(m.title)}</div><div class="site-domain">${escapeHTML(m.domain)}</div></div></div><span class="status status-${m.paused?'warning':m.status==='met'?'met':m.status==='unchanged'?'unchanged':m.status==='error'?'error':'warning'}">${m.paused?'Paused':escapeHTML(m.statusLabel)}</span></div><p class="condition">${escapeHTML(m.condition)}</p><div class="current-value">Current detected value<strong>${escapeHTML(m.current)}</strong></div><div class="card-meta"><span>Last checked<strong>${escapeHTML(m.last)}</strong></span><span>Next check<strong>${escapeHTML(m.next)}</strong></span></div><div class="card-actions"><a class="button button-ghost button-small" href="#/detail/${m.id}">View details</a><button class="icon-button" data-action="edit" data-id="${m.id}" aria-label="Edit ${escapeHTML(m.title)}">${icons.edit}</button><button class="icon-button" data-action="pause" data-id="${m.id}" aria-label="${m.paused?'Resume':'Pause'} ${escapeHTML(m.title)}">${m.paused?icons.arrow:icons.pause}</button><button class="icon-button" data-action="check" data-id="${m.id}" aria-label="Check ${escapeHTML(m.title)} now">${icons.rotate}</button><button class="icon-button" data-action="delete" data-id="${m.id}" aria-label="Delete ${escapeHTML(m.title)}">${icons.trash}</button></div></article>`;
}
function dashboard() {
  setShell(false);
  const q=state.search.toLowerCase();
  const visible=state.monitors.filter(m=>(state.filter==='all'||(state.filter==='met'&&m.status==='met')||(state.filter==='attention'&&(m.status==='warning'||m.status==='error'||m.paused))||(state.filter==='active'&&!m.paused))&&(!q||`${m.title} ${m.domain} ${m.condition}`.toLowerCase().includes(q)));
  return `${appHeader()}<div class="page-head"><div><h1>Your monitors</h1><p>See what changed and what is still being watched.</p></div><div class="page-actions"><a class="button button-ghost" href="#/states">View product states</a><a class="button button-primary" href="#/create">${icons.plus} Add monitor</a></div></div>${demoBanner()}<div class="toolbar"><div class="search-wrap">${icons.search}<label class="sr-only" for="monitor-search">Search monitors</label><input class="text-input" id="monitor-search" value="${escapeHTML(state.search)}" placeholder="Search pages or conditions"></div><div class="filter-tabs" aria-label="Filter monitors">${[['all','All'],['active','Active'],['met','Condition met'],['attention','Needs attention']].map(x=>`<button class="filter-tab ${state.filter===x[0]?'active':''}" data-filter="${x[0]}">${x[1]}</button>`).join('')}</div><select class="select-input" aria-label="Sort monitors"><option>Recently checked</option><option>Page name</option><option>Status</option></select></div>${visible.length?`<div class="monitor-grid">${visible.map(monitorCard).join('')}</div>`:`<div class="empty-panel"><span class="empty-icon">${icons.search}</span><h2>${state.monitors.length?'No monitors match':'Nothing to watch yet'}</h2><p>${state.monitors.length?'Try a different search or filter.':'Add a public webpage and tell us what you are waiting for.'}</p>${state.monitors.length?'<button class="button button-ghost" id="clear-filters">Clear filters</button>':'<a class="button button-primary" href="#/create">Add your first monitor</a>'}</div>`}</div></div>`;
}

function detailPage(id) {
  setShell(false);
  const m=state.monitors.find(x=>x.id===id)||defaultMonitors[0];
  return `${appHeader()}<div class="page-head"><div><a href="#/dashboard" style="color:var(--muted);text-decoration:none;font-size:.9rem">← All monitors</a><h1 style="margin-top:12px">${escapeHTML(m.title)}</h1><p>${escapeHTML(m.domain)}</p></div><div class="page-actions"><button class="button button-ghost" data-detail-pause data-id="${m.id}">${m.paused?'Resume':'Pause'}</button><a class="button button-primary" href="#/create">${icons.edit} Edit</a></div></div>${demoBanner()}<div class="detail-grid"><div><section class="panel"><div class="panel-title"><h2>Current status</h2><span class="status status-${m.status==='met'?'met':'unchanged'}">${escapeHTML(m.statusLabel)}</span></div><div class="change-hero"><div class="change-value">Previous<strong>${escapeHTML(m.previous||'₹34,990')}</strong></div><span class="change-arrow">${icons.arrow}</span><div class="change-value new">Current<strong>${escapeHTML(m.current)}</strong></div></div><p style="color:var(--muted);font-size:.86rem;margin:14px 0 0">Detected today at 2:04 PM. Page values are simulated for this MVP.</p></section><section class="panel"><div class="panel-title"><h2>Meaningful changes</h2></div><div class="timeline"><div class="timeline-item"><span class="timeline-dot"></span><div><h3>Price fell below your target</h3><p>₹34,990 → ₹29,499</p><span class="timeline-time">Today, 2:04 PM</span></div></div><div class="timeline-item"><span class="timeline-dot"></span><div><h3>Price decreased</h3><p>₹36,490 → ₹34,990 · No alert sent</p><span class="timeline-time">12 Sep, 8:03 AM</span></div></div><div class="timeline-item"><span class="timeline-dot"></span><div><h3>Monitor activated</h3><p>First value detected: ₹36,490</p><span class="timeline-time">8 Sep, 5:42 PM</span></div></div></div></section></div><aside><section class="panel"><div class="panel-title"><h2>Monitor details</h2></div><dl class="detail-kv"><div><dt>Your request</dt><dd>Alert me when this costs less than ₹30,000.</dd></div><div><dt>Interpreted rule</dt><dd>${escapeHTML(m.condition)}</dd></div><div><dt>Last successful check</dt><dd>${escapeHTML(m.last)}</dd></div><div><dt>Check frequency</dt><dd>${escapeHTML(m.frequency)}</dd></div><div><dt>Alert channel</dt><dd>Email</dd></div></dl></section><section class="panel"><div class="panel-title"><h2>Alert history</h2><a href="#/email" style="font-size:.84rem;color:var(--primary)">Preview</a></div><div class="alert-item">${icons.mail}<div><p>Condition met alert</p><span>Today, 2:05 PM · Delivered</span></div></div><div class="alert-item">${icons.check}<div><p>Email verified</p><span>8 Sep, 5:40 PM</span></div></div></section></aside></div></div></div>`;
}

function emailPage() {
  setShell(false);
  return `${appHeader()}<div class="email-stage"><div class="page-head"><div><a href="#/dashboard" style="color:var(--muted);text-decoration:none;font-size:.9rem">← Dashboard</a><h1 style="margin-top:12px">Sample email alert</h1><p>This preview shows what a condition-met notification would look like.</p></div></div>${demoBanner()}<article class="email-window"><div class="email-chrome">Email preview · Not sent</div><header class="email-head"><h2>Price drop detected: Sony headphones are now ₹29,499</h2><p><strong>From:</strong> ChangeWatch &lt;alerts@changewatch.example&gt;</p><p><strong>To:</strong> veera@example.com</p></header><div class="email-body"><div class="brand email-brand"><span class="brand-mark" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m5 12 4 4L19 6"/></svg></span><span>ChangeWatch</span></div><span class="status status-met">Your condition was met</span><h1>The price is now below ₹30,000</h1><p>Sony WH-1000XM6 Wireless Headphones changed in a way that matches your monitoring rule.</p><div class="email-change"><div class="email-change-row"><span>Previous<br><strong>₹34,990</strong></span>${icons.arrow}<span>Now<br><strong style="color:var(--success)">₹29,499</strong></span></div><p style="margin:15px 0 0;color:var(--muted);font-size:.86rem">Detected 18 September 2026 at 2:04 PM IST</p></div><div class="email-actions"><a class="button button-primary" href="https://www.sony.co.in" target="_blank" rel="noopener">View monitored page</a><a class="button button-ghost" href="#/detail/sony">Manage monitor</a></div><p class="email-fineprint">ChangeWatch detected this value on a public webpage. Check the page before making a purchase because prices and availability can change quickly.</p></div></article></div></div></div>`;
}

function statesPage() {
  setShell(false);
  const cards = [
    ['Loading','<div class="spinner" aria-label="Loading"></div>','Checking the public page and looking for the value that matches your rule.'],
    ['Monitor activated',`<span class="check-circle">${icons.check}</span>`,'Watching started. The next check is scheduled for tomorrow at 8:00 AM.'],
    ['Condition met','<span class="status status-met">Condition met</span>','The detected value matches the saved rule. An alert would be sent.'],
    ['Invalid URL',`<span class="state-symbol error">${icons.alert}</span>`,'Enter a complete public URL, such as https://example.com/page.'],
    ['Unsupported or blocked page',`<span class="state-symbol warning">${icons.shield}</span>`,'This page requires a login or does not allow automated checks. ChangeWatch will not try to bypass it.'],
    ['Page structure changed',`<span class="state-symbol warning">${icons.alert}</span>`,'We can still reach the page, but we can no longer find the value being watched. Review the rule.'],
    ['Temporary checking failure',`<span class="state-symbol error">${icons.rotate}</span>`,'The page could not be reached. We will try again at the next scheduled check.'],
    ['Verify your email','<div class="verification" aria-label="Verification code example"><span>4</span><span>8</span><span>1</span><span>2</span></div>','Enter the code sent to your email before alerts can be delivered.']
  ];
  return `${appHeader()}<div class="page-head"><div><a href="#/dashboard" style="color:var(--muted);text-decoration:none;font-size:.9rem">← Dashboard</a><h1 style="margin-top:12px">Product states</h1><p>Realistic feedback for the moments that need clarity and trust.</p></div></div>${demoBanner()}<div class="states-grid">${cards.map(c=>`<article class="state-card"><div class="state-visual">${c[1]}</div><h2>${c[0]}</h2><p>${c[2]}</p>${c[0]==='Page structure changed'?'<button class="button button-ghost button-small">Review rule</button>':''}</article>`).join('')}</div></div></div>`;
}

function render() {
  const current=route(); let html='';
  if(current==='home') html=landing();
  else if(current==='create') html=createPage();
  else if(current==='review') html=reviewPage();
  else if(current==='dashboard') html=dashboard();
  else if(current.startsWith('detail/')) html=detailPage(current.split('/')[1]);
  else if(current==='email') html=emailPage();
  else if(current==='states') html=statesPage();
  else { location.hash='#/'; return; }
  document.getElementById('main').innerHTML=html;
  bind();
  window.scrollTo({top:0,behavior:'instant'});
  document.title = current==='home'?'ChangeWatch — Stop checking. Start watching.':`${({create:'Create a monitor',review:'Review monitor',dashboard:'Your monitors',email:'Sample alert',states:'Product states'})[current]||'Monitor details'} — ChangeWatch`;
}

function validPublicUrl(raw) {
  try { const u=new URL(raw); return ['http:','https:'].includes(u.protocol) && !['localhost','127.0.0.1'].includes(u.hostname); } catch { return false; }
}
function bind() {
  document.querySelectorAll('[data-example]').forEach(btn=>btn.addEventListener('click',()=>{ const x=examples[+btn.dataset.example]; document.getElementById('hero-url').value=x.url; document.getElementById('hero-request').value=x.request; document.getElementById('hero-url').focus(); }));
  document.getElementById('hero-form')?.addEventListener('submit',e=>{ e.preventDefault(); const url=e.target.url.value.trim(), request=e.target.request.value.trim(), err=document.getElementById('hero-error'); if(!validPublicUrl(url)){err.textContent='Enter a complete public URL starting with http:// or https://.';return;} if(request.length<5){err.textContent='Describe the change you want us to watch for.';return;} state.draft={url,request,frequency:'Daily'};saveDraft();location.hash='#/create'; });
  document.getElementById('create-form')?.addEventListener('submit',e=>{ e.preventDefault(); const url=document.getElementById('create-url').value.trim(), request=document.getElementById('create-request').value.trim(); document.getElementById('url-error').textContent='';document.getElementById('request-error').textContent=''; if(!validPublicUrl(url)){document.getElementById('url-error').textContent='Enter a complete public URL starting with http:// or https://.';return;} if(request.length<5){document.getElementById('request-error').textContent='Add a little more detail about the change you want.';return;} state.draft={url,request,frequency:new FormData(e.target).get('frequency')};saveDraft();location.hash='#/review'; });
  document.getElementById('verify-email')?.addEventListener('click',()=>{document.getElementById('verify-hint').innerHTML='<span style="color:var(--success);font-weight:700">Demo email verified.</span> No message was sent.';toast('Email marked as verified for this demo.');});
  document.getElementById('review-form')?.addEventListener('submit',e=>{e.preventDefault(); const rule=inferRule(state.draft.request), url=new URL(state.draft.url); state.monitors.unshift({id:'new-'+Date.now(),title:pageName(state.draft.url),domain:url.hostname.replace('www.',''),logo:url.hostname[0].toUpperCase(),condition:`${document.getElementById('rule-type').value} ${document.getElementById('rule-value').value}`,current:rule.current,previous:'Not checked',status:'unchanged',statusLabel:'Unchanged',last:'Just now · simulated',next:state.draft.frequency==='Daily'?'Tomorrow, 8:00 AM':'In six hours',frequency:state.draft.frequency,paused:false});saveMonitors();sessionStorage.removeItem('cw-draft');state.draft={};location.hash='#/dashboard';setTimeout(()=>toast('Monitor activated with simulated data.'),100);});
  document.getElementById('monitor-search')?.addEventListener('input',e=>{state.search=e.target.value;const pos=e.target.selectionStart;render();const input=document.getElementById('monitor-search');input.focus();input.setSelectionRange(pos,pos);});
  document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{state.filter=b.dataset.filter;render();}));
  document.getElementById('clear-filters')?.addEventListener('click',()=>{state.filter='all';state.search='';render();});
  document.querySelectorAll('[data-action="pause"]').forEach(b=>b.addEventListener('click',()=>togglePause(b.dataset.id)));
  document.querySelectorAll('[data-action="edit"]').forEach(b=>b.addEventListener('click',()=>{const m=state.monitors.find(x=>x.id===b.dataset.id);if(!m)return;state.draft={url:`https://${m.domain}`,request:m.condition,frequency:m.frequency};saveDraft();location.hash='#/create';}));
  document.querySelectorAll('[data-action="check"]').forEach(b=>b.addEventListener('click',()=>{b.disabled=true;b.innerHTML='<span class="spinner" style="width:18px;height:18px"></span>';setTimeout(()=>{const m=state.monitors.find(x=>x.id===b.dataset.id);if(m){m.last='Just now · simulated';saveMonitors();render();toast('Demo check complete. No live request was made.');}},800);}));
  document.querySelectorAll('[data-action="delete"]').forEach(b=>b.addEventListener('click',()=>confirmDelete(b.dataset.id)));
  document.querySelector('[data-detail-pause]')?.addEventListener('click',e=>togglePause(e.currentTarget.dataset.id));
}
function togglePause(id){const m=state.monitors.find(x=>x.id===id);if(!m)return;m.paused=!m.paused;m.next=m.paused?'Check paused':'In six hours';saveMonitors();render();toast(m.paused?'Monitor paused.':'Monitor resumed.');}
function confirmDelete(id){const m=state.monitors.find(x=>x.id===id);if(!m)return;const root=document.getElementById('modal-root');root.innerHTML=`<div class="modal-backdrop" role="presentation"><section class="modal" role="dialog" aria-modal="true" aria-labelledby="delete-title"><h2 id="delete-title">Delete this monitor?</h2><p>${escapeHTML(m.title)} will be removed from this demo dashboard.</p><div class="modal-actions"><button class="button button-ghost" id="cancel-delete">Cancel</button><button class="button button-danger" id="confirm-delete">Delete monitor</button></div></section></div>`;const cancel=()=>{root.innerHTML='';};document.getElementById('cancel-delete').onclick=cancel;document.querySelector('.modal-backdrop').onclick=e=>{if(e.target.classList.contains('modal-backdrop'))cancel();};document.getElementById('confirm-delete').onclick=()=>{state.monitors=state.monitors.filter(x=>x.id!==id);saveMonitors();cancel();render();toast('Monitor deleted.');};document.getElementById('cancel-delete').focus();}

function registerWebMCP() {
  const ctx=document.modelContext;if(!ctx?.registerTool)return;
  const safe=(tool)=>{try{Promise.resolve(ctx.registerTool(tool)).catch(()=>{});}catch{}};
  safe({name:'start_monitor_creation',title:'Start monitor creation',description:'Open the ChangeWatch monitor creation flow with a public webpage URL and a natural-language monitoring request.',inputSchema:{type:'object',properties:{url:{type:'string'},request:{type:'string'}},required:['url','request'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:true},execute(input){if(!validPublicUrl(input.url)||typeof input.request!=='string'||input.request.length<5)throw new Error('A valid public URL and monitoring request are required.');state.draft={url:input.url,request:input.request,frequency:'Daily'};saveDraft();location.hash='#/create';return{status:'staged',route:'create'};}});
  safe({name:'list_demo_monitors',title:'List demo monitors',description:'List monitors currently shown in the device-local ChangeWatch demo dashboard.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:false},execute(){return state.monitors.map(({id,title,domain,condition,current,status,paused})=>({id,title,domain,condition,current,status,paused}));}});
}

window.addEventListener('hashchange',render);
window.addEventListener('DOMContentLoaded',()=>{render();registerWebMCP();});
