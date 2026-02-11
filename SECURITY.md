# Security Documentation

## Overview

This document outlines the security measures implemented in the Knit AI Financial Infrastructure application and provides guidance for secure deployment.

## Security Measures Implemented

### 1. Content Security Policy (CSP)

- **Location**: `index.html`
- **Purpose**: Mitigates XSS attacks by restricting resource loading
- **Policy Details**:
  - Scripts: Only from self, Tailwind CDN, and ESM.sh
  - Styles: Self and Google Fonts
  - Images: Self, data URIs, and HTTPS sources
  - Connections: Self, Google Generative AI API, and ESM.sh

### 2. External Link Security

- **Location**: `components/PricingPage.tsx`
- **Implementation**: All `target="_blank"` links include `rel="noopener noreferrer"`
- **Purpose**: Prevents reverse tabnabbing attacks

### 3. XSS Prevention

- **Removed**: `dangerouslySetInnerHTML` from `components/DesignSystem.tsx`
- **Replaced with**: Safe JSX template literals for style injection
- **Purpose**: Eliminates potential XSS injection points

### 4. Input Validation

- **Chatbot** (`components/Chatbot.tsx`):
  - Maximum message length: 1000 characters
  - Client-side and server-side validation
  
- **Contact Form** (`components/ContactPage.tsx`):
  - First/Last Name: 50 characters max
  - Company Name: 100 characters max
  - Email: 100 characters max
  - Message: 2000 characters max
  - Phone: 20 characters max

### 5. Environment Variable Protection

- **Location**: `.gitignore`
- **Protected Files**:
  - `.env`
  - `.env.local`
  - `.env*.local`
- **Purpose**: Prevents accidental commit of API keys to version control

### 6. API Key Management

- **Location**: `services/geminiService.ts`
- **Security Warning**: Comprehensive documentation about client-side API key risks
- **Recommendation**: Move to backend server for production

## Known Security Considerations

### ⚠️ CRITICAL: Client-Side API Key Exposure

**Current State**: The Gemini API key is exposed in the client-side bundle.

**Risk Level**: HIGH for production environments

**Impact**: Anyone can:

- View the API key in browser DevTools
- Use the key for their own requests
- Potentially exhaust your API quota

**Mitigation for Production**:

1. **Create a Backend API**:

   ```
   Client → Your Backend Server → Gemini API
   ```

2. **Recommended Stack**:
   - Node.js/Express
   - Python/Flask
   - Serverless Functions (Vercel, Netlify, AWS Lambda)

3. **Implementation Steps**:
   - Move `geminiService.ts` logic to backend
   - Create API endpoints (e.g., `/api/analyze-risk`, `/api/chat`)
   - Store API key in server environment variables
   - Add rate limiting and authentication

### Form Submission Security

**Current State**: Contact form uses simulated submission (setTimeout)

**For Production**:

- Implement server-side form processing
- Add CSRF token protection
- Implement rate limiting
- Add email validation on backend
- Consider using reCAPTCHA to prevent spam

### HTTPS Enforcement

**Recommendation**: Always deploy with HTTPS enabled

- Protects data in transit
- Required for modern browser features
- Improves SEO ranking

## Security Best Practices for Deployment

### 1. Environment Configuration

```bash
# Production .env.local should NEVER be committed
VITE_GEMINI_API_KEY=your_production_key_here
```

### 2. Backend API Example (Node.js/Express)

```javascript
// server.js
const express = require('express');
const { GoogleGenAI } = require('@google/genai');

const app = express();
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

app.post('/api/chat', async (req, res) => {
  // Add authentication here
  // Add rate limiting here
  
  const { message, history } = req.body;
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: [{ role: 'user', parts: [{ text: message }] }]
    });
    
    res.json({ response: response.text });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate response' });
  }
});
```

### 3. Rate Limiting

Implement rate limiting to prevent abuse:

- Chatbot: 10 messages per minute per IP
- Contact form: 3 submissions per hour per IP
- Risk analysis: 5 requests per minute per user

### 4. Monitoring

Set up monitoring for:

- API key usage and quota
- Failed authentication attempts
- Unusual traffic patterns
- Error rates

## Security Checklist for Production

- [ ] Move API keys to backend server
- [ ] Implement authentication for API endpoints
- [ ] Add rate limiting
- [ ] Enable HTTPS
- [ ] Set up monitoring and alerting
- [ ] Implement CSRF protection for forms
- [ ] Add input sanitization on backend
- [ ] Set up logging for security events
- [ ] Regular security audits
- [ ] Keep dependencies updated

## Reporting Security Issues

If you discover a security vulnerability, please email: <security@knit.cash>

**Do not** create public GitHub issues for security vulnerabilities.

## Compliance

This application handles financial data. Ensure compliance with:

- PCI DSS (if processing payments)
- GDPR (if serving EU users)
- POPIA (South African data protection)
- Local financial regulations

## Last Updated

2026-02-11

## Version

1.0.0
