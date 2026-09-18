# ChangeWatch MVP

ChangeWatch is a responsive, static consumer web-app prototype for monitoring meaningful changes on public webpages.

## Run locally

Open `dist/index.html` in a browser, or serve the `dist` folder with any static web server.

## What works

- Landing-page onboarding and selectable examples
- URL validation and a two-step create-monitor flow
- Editable interpreted monitoring rules
- Frequency selection with plan-aware guidance
- Dashboard search, filters, card actions and status updates
- Monitor detail, meaningful-change timeline, comparison and alert history
- Sample notification email
- Empty, loading, success, error, blocked-page, page-change, temporary-failure and email-verification states
- Responsive layout, keyboard navigation and visible focus styles
- Device-local demo state using `localStorage`

## MVP limitation

This prototype uses simulated data. It does not retrieve webpages, schedule checks, or send email. The UI is structured so those services can replace the demo layer later.
