<script lang="ts">
  let thread = undefined
  let messages = []

  function addMessage(message) {
    messages = [...messages, message]
    setTimeout(() => {
      document.getElementById('messages').scrollTo({
        behavior: 'smooth',
        top: document.getElementById('messages').scrollHeight,
      })
    }, 50)
  }

  async function onKeyUp(event) {
    if (event.keyCode === 13) {
      event.preventDefault()

      const message = event.target.value.trim()
      if (message.length === 0) {
        return
      }

      event.target.value = ''
      addMessage({
        name: 'You',
        message,
        time: new Date(),
      })
      const baseUrl = 'https://chatbot.triarc-labs.com'
      const result = await fetch(thread ? `${baseUrl}/chat/send?thread=${thread}` : `${baseUrl}/chat/send`, {
        body: JSON.stringify({ message }),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await result.json()
      if (!thread) {
        thread = data.thread
        const threadSource = new EventSource(`${baseUrl}/chat/${thread}/receive`)
        threadSource.onmessage = (evt) => {
          const data = JSON.parse(evt.data)
          addMessage({
            time: new Date(data.time),
            message: data.message,
            name: data.name,
          })
        }
      }
    }
  }
</script>

<div class="bg-gray-100 pt-10" id="live-chat">
  <div class="max-w-7xl mx-auto pb-12 px-4 sm:pb-16 sm:px-6 lg:px-8">
    <div class="mx-auto divide-y-2 divide-gray-200">
      <h2 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">Live Chat</h2>
      <div class="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200 mt-6">
        <div class="px-4 py-5 sm:p-6 h-64 overflow-y-auto" id="messages">
          {#each messages as message}
            <p class="text-base text-gray-500 pb-2">{message.name}: {message.message}</p>
          {/each}
        </div>
        <input
          id="chat-message"
          type="text"
          name="chat"
          placeholder="Sprich mit uns über dein nächstes Projekt!"
          on:keyup={onKeyUp}
          class="px-4 py-4 sm:px-6 block w-full sm:text-sm rounded-md focus:outline-none"
        />
      </div>
    </div>
  </div>
</div>
