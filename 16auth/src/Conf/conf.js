const conf = {
    apiKey: String(import.meta.env.VITE_aPI_KEY),
    authDomain: String(import.meta.env.VITE_AUTH_DOMAIN),
    projectId: String(import.meta.env.VITE_PROJECT_ID),
    appId: String(import.meta.env.VITE_APP_ID),
    serviceID: String(import.meta.env.VITE_EMAILJS_SERVICE_ID),
    templateID: String(import.meta.env.VITE_EMAILJS_TEMPLATE_ID),
    publicKey: String(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
}

export { conf } 