# Growth Revibe Hostinger Deployment Guide

## What this website needs on Hostinger

This website is a static Vite site with one PHP form handler:

- `public/contact-handler.php`

That means your Hostinger plan must support:

- normal website hosting
- PHP enabled for the domain
- a connected domain
- working email accounts for the domain

## Emails used by the website

The current mail handler sends form submissions to:

- `business@grothervibe.com`
- `info@growthrevibe.com`

The sender address is currently:

- `business@grothervibe.com`

If you want to change those addresses later, edit these constants in:

- `public/contact-handler.php`

```php
const RECIPIENTS = 'business@grothervibe.com, info@growthrevibe.com';
const SENDER_EMAIL = 'business@grothervibe.com';
```

## Before deployment

1. Build the website locally:
   - `npm run build`
2. Confirm the final output folder is:
   - `dist/`
3. Make sure `contact-handler.php` is uploaded to the live website root:
   - `public_html/contact-handler.php`

## Hostinger deployment steps

### 1. Add or connect the domain

In Hostinger hPanel:

1. Go to `Websites`
2. Open the website dashboard
3. Connect the domain if it is not connected yet
4. If the domain is outside Hostinger, point DNS to Hostinger first

### 2. Create the email accounts

In Hostinger hPanel:

1. Go to `Emails`
2. Open the email plan for your domain
3. Create these mailboxes if they do not already exist:
   - `business@grothervibe.com`
   - `info@growthrevibe.com`
4. Save the passwords safely

### 3. Confirm PHP is enabled

In Hostinger hPanel:

1. Go to `Websites`
2. Open `Dashboard`
3. Open `PHP Configuration`
4. Use a supported PHP version
5. Recommended:
   - PHP `8.2` or newer

### 4. Upload the website files

If using File Manager:

1. Go to `Websites`
2. Open `Dashboard`
3. Open `File Manager`
4. Open the domain `public_html` folder
5. Delete the default files if needed
6. Upload the contents of `dist/` into `public_html`
7. Upload `contact-handler.php` into `public_html`

Important:

- upload the contents of `dist`
- do not upload the `dist` folder itself as a nested folder unless you want the site to open from `/dist`

### 5. Check the form endpoint path

The front end currently sends forms to:

- `./contact-handler.php`

That means:

- `index.html` and `contact-handler.php` must sit in the same live root level
- on Hostinger this should normally be `public_html/`

### 6. Test both form flows

After upload, test:

1. Homepage inquiry form
2. Contact page inquiry form
3. Meeting request / availability form

Each should:

- show a success message
- send an email to the company inbox
- include the user details in formatted layout

## What the email contains

Each email now includes:

- submission type
- submitted date and time
- name
- email
- phone
- company or business
- selected service
- budget
- source page URL
- project message

Availability request emails also include:

- selected appointment date
- selected appointment time
- appointment timezone
- readable date label
- readable time label
- readable timezone label

## Important Hostinger note about PHP mail

The current website uses PHP `mail()`.

This is the fastest way to deploy, but Hostinger recommends SMTP for better deliverability.

If emails go to spam or do not arrive reliably, the next upgrade should be:

- replace PHP `mail()` with authenticated SMTP using a library such as PHPMailer

## Recommended SMTP values for Hostinger Email

If you later switch to SMTP, Hostinger’s documented outgoing settings are:

- host: `smtp.hostinger.com`
- SSL port: `465`
- TLS/STARTTLS port: `587`

You will also need:

- full mailbox email
- mailbox password

## Final deployment checklist

- Domain connected to Hostinger
- Website files uploaded to `public_html`
- `contact-handler.php` uploaded to `public_html`
- PHP enabled
- Email accounts created
- Forms tested live
- Both company inboxes receiving messages
- Spam folder checked after first tests

## If you want the strongest setup

Best long-term version:

1. Keep the current front-end forms
2. Replace the PHP `mail()` handler with SMTP authentication
3. Store SMTP credentials outside the public site when possible
4. Test from the live Hostinger domain only
