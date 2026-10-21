import { apiRequest } from '../lib/api'

/**
 * @returns {'subscribed' | 'already_subscribed'}
 */
export async function subscribeNewsletter(email) {
  const data = await apiRequest('/newsletter.php', {
    method: 'POST',
    body: { email: email.trim().toLowerCase() },
  })

  return data.status === 'already_subscribed' ? 'already_subscribed' : 'subscribed'
}
