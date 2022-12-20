async function send_message() {
  const API_URL = "";
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  const response = await fetch(API_URL, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    body: JSON.stringify({
      name: name,
      email: email,
      message: message
    })
  });
  let status = document.querySelector("#msg-status");
  if (response.status === 200){
    status.classList.add('msg-status-success');
    status.innerHTML = "Message Sent";
  }else{
    status.classList.add('msg-status-failed');
    status.innerHTML = "Message sending failed";
  }
}
