---
id: phr-20260526-ai-assistant-integrated
date: 2026-05-26
stage: misc
title: ai-portfolio-assistant-integrated
feature: portfolio-spec
---

# PROMPT
okay go on (implementing Groq AI chatbot)

# RESPONSE
Successfully integrated a high-performance **AI Portfolio Assistant** powered by **Groq**.

**Key Implementation Details:**
1.  **Groq SDK**: Integrated `groq-sdk` for ultra-fast Llama 3 inference.
2.  **Resume-Expert Brain**: Configured a complex system prompt containing Muhammad Faizan's full CV, projects, and technical metrics to ensure accurate and professional responses.
3.  **Secure Backend**: Created a `/api/chat` serverless route to protect API keys and handle multi-turn conversations.
4.  **Glassmorphic UI**: Designed a sleek, floating chat component using:
    - **Framer Motion**: For smooth opening/closing and entrance animations.
    - **Tailwind CSS**: For a blurred surface/90 background and accent1 glows.
    - **Mobile-Responsive**: Ensures recruiters can chat comfortably on any device.

**Current Status**: 
The chatbot is live and visible in the bottom-right corner. It requires a `GROQ_API_KEY` in `packages/web/.env.local` to process messages.
