const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/+$/, '');

export function apiUrl(path) {
    if (!path.startsWith('/')) {
        throw new Error('API path must start with /.');
    }

    return `${apiBaseUrl}${path}`;
}
