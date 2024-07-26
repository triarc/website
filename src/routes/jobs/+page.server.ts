import type { Actions } from '@sveltejs/kit'

export const actions = {
  submitApplication: async (event) => {
    const formData = await event.request.formData()
    const firstName = formData.get('first-name')
    const lastName = formData.get('last-name')
    const email = formData.get('email')
    const phone = formData.get('phone')
    const docs = formData.getAll('documents')
    const baseUrl = 'https://chatbot.triarc-labs.com'
    const chatMessage = `Neue Bewerbung:\n ${firstName} ${lastName}\nEmail: ${email}\nTelefon: ${phone ?? '-'}`
    try {
      await fetch(`${baseUrl}/chat/send`, {
        body: JSON.stringify({ message: chatMessage }),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
    } catch (e) {
      console.error(e)
    }
  },
} satisfies Actions
