# Iroshan Executive Website

Next.js + Tailwind personal website built for an executive profile in government/defence technology leadership.

## Run

```bash
npm install
npm run dev
```

## Content Editing

All editable copy and structured data is under `content/`:

- `content/site.ts`
- `content/home.ts`
- `content/experience.ts`
- `content/case-studies.ts`
- `content/expertise.ts`
- `content/education.ts`
- `content/leadership.ts`
- `content/contact.ts`

## Notes

- LinkedIn is wired globally to: `https://www.linkedin.com/in/iroshan-pathirannahalage/`
- Copy intentionally avoids sensitive military/operational disclosures.
- Sports leadership gallery expects these files:
  - `public/images/pentathlon-challenge-2025-podium.jpg`
  - `public/images/pentathlon-challenge-2025-team.jpg`
  - `public/images/pentathlon-challenge-2025-inspection.jpg`

## Contact Form Setup

1. Copy env template:

```bash
cp .env.example .env.local
```

2. Configure SMTP values in `.env.local`.
3. For Gmail, create an App Password and set `SMTP_PASS` to that value.
4. Restart dev server after updating env values.
5. Submit the contact form from `/contact` to verify delivery.

Quick local API test:

```bash
curl -X POST http://localhost:3002/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name":"Test User",
    "organization":"Test Org",
    "email":"test@example.com",
    "topic":"Contact API Test",
    "message":"Testing contact service delivery."
  }'
```

## AI Chatbot Setup

1. Add AI environment variables in `.env.local`:

```env
OPENAI_API_KEY=your-openai-api-key
OPENAI_CHAT_MODEL=gpt-4o-mini
```

2. Restart the dev server.
3. Open the floating `Chat with AI Assistant` widget and test prompts.

## Vercel Deployment (Auto Deploy from GitHub)

1. Go to Vercel and click `Add New...` -> `Project`.
2. Import repo: `iroshansam78/IROSHAN-PATHIRANNAHALAGE`.
3. Framework preset: `Next.js` (auto-detected).
4. Add environment variables from `.env.example` in Vercel Project Settings.
5. Deploy.

After initial deployment, pushes to `main` trigger automatic production deploys.
