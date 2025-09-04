# connex

Connex is a QR &amp; NFC-powered digital business card platform enabling secure, customizable, and real-time contact sharing. Built to compete with HiHello and HeyDrop, it integrates CRM tools, Apple Wallet, and data privacy compliance (GDPR/DPA). Designed for professionals, startups, and enterprises.

# Notes:

- being on commit ["ca017c3"](https://github.com/deeptux/connex/commit/ca017c3f5e83292b21dc87bb09432f0450a9d2ac), deploying the project on vercel produces error like this:

```bash
ERR_PNPM_META_FETCH_FAIL GET https://registry.npmjs.org/turbo: Value of this must be of type URLSearchParams
Error: Command pnpm install exited with 1
```

and in order to fix this, go to Vercel Dashboard > Settings > Build and Deployment > Framework Setting > Install Command > override it then replace pnpm install to npm isntall only.
