FROM mcr.microsoft.com/playwright:v1.36.0-jammy

RUN npx playwright install-deps

CMD ["npx", "playwright", "run-server", "--port", "4444"]
