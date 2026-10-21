function apiBase() {
  return (process.env.NEXT_PUBLIC_API_BASE_URL || '').trim().replace(/\/$/, '')
}

export function isApiConfigured() {
  return Boolean(apiBase())
}

export async function apiRequest(path, { method = 'GET', body } = {}) {
  const base = apiBase()
  if (!base) {
    throw new Error('Form service is not configured.')
  }

  let response
  try {
    response = await fetch(`${base}${path}`, {
      method,
      headers: {
        Accept: 'application/json',
        ...(body ? { 'Content-Type': 'application/json' } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
    })
  } catch {
    throw new Error('Form service is temporarily unavailable. Please email us directly.')
  }

  const data = await response.json().catch(() => null)

  if (!response.ok) {
    const error = new Error(data?.error || 'Something went wrong. Please try again.')
    error.status = response.status
    throw error
  }

  return data ?? {}
}
