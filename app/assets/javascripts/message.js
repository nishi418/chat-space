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
  
  $('.form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.message').append(html);
      $('.message').animate({scrollTop: $('.message')[0].scrollHeight});
      $('form')[0].reset();
      $('.form__Submit').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
});