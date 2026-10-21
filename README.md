# StudyGlide Educational Consult 

Next.js site for StudyGlide Educational Consult.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local`:

```
NEXT_PUBLIC_API_BASE_URL=https://yourdomain.com/api
```

That is the `hosting/api` folder on Namecheap, with no trailing slash. On Vercel, set the same variable. Do this when you deploy the API. Until it is set, forms show an unavailable message and the testimonial section stays empty.

## Namecheap (forms, testimonials, email)

1. In cPanel, create a MySQL database and user. In phpMyAdmin, select that database and import `hosting/schema.sql`.
2. Upload `hosting/api` to `public_html/api` and `hosting/media` to `public_html/media`.
3. Copy `config.example.php` to `config.php` in that `api` folder. Fill in the database, the mailbox (`mail.privateemail.com`, port 465), `admin_email`, `media_base_url`, and `allowed_origins` (your live site and `www`). Set `configured` to `true`.
4. Upload testimonial videos into `public_html/media/testimonials/`. In phpMyAdmin, insert a row in `testimonials` with `video_path` set to the file name.
5. Submissions are in phpMyAdmin. Mail errors are in cPanel → Metrics → Errors. A saved row still counts as a successful form submit if the mailbox rejects the message.

## Build

```bash
npm run build
npm start
```

## Deploy (Vercel)

Connect the repo to Vercel. Framework preset: **Next.js**. No SPA rewrites needed — routing is handled by the App Router.

## Routes

All previous URLs are preserved (`/about`, `/services`, `/destination/uk`, `/faq`, etc.) via `src/app/`.
