$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="message__Group">
          <div class="messageInfo">
            <div class="messageInfo__Name">
              ${message.user_name}
            </div>
            <div class="messageInfo__Date">
              ${message.created_at}
            </div>
          </div>
          <div class="messageContent">
            <p class="message__Text">
              ${message.content}
            </p>
            <img class="message_image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="message__Group">
        <div class="messageInfo">
          <div class="messageInfo__Name">
            ${message.user_name}
          </div>
          <div class="messageInfo__Date">
            ${message.created_at}
          </div>
        </div>
        <div class="messageContent">
          <p class="Message__Text">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }  

  let reloadMessages = function() {
    let last_message_id = $('.message__Group:last').data("message-id") || 0;
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        let insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.message').append(insertHTML);
        $('.message').animate({ scrollTop: $('.message')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  setInterval(reloadMessages, 7000);
});