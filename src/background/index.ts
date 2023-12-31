console.log('background is running')

chrome.runtime.onMessage.addListener((request, sender, senderResponse) => {
  if (request.type === 'MEDIA') {
    fetch('http://localhost:5644/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: request?.data }),
    })
      .then(() => {
        console.log(request.data)
        senderResponse(true)
      })
      .catch((err) => {
        console.log(err)
        senderResponse(false)
      })
  }
})
