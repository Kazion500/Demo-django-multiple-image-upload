$(function () {

  $(".js-upload-photos").click(function () {
    $("#fileupload").click();
  });

  $("#fileupload").fileupload({
    dataType: 'json',
    done: function (e, data) {
      if (data.result.is_valid) {
        $("#gallery tbody").prepend(
          `<tr>
            <td><img src='${data.result.url}'></td>
            <td><a href='${data.result.url}'> ${data.result.name} </a></td>
            <td>
              <a href=" ${data.result.url}" class="btn btn-danger">
                Delete
              </a>
              <a href="${data.result.url}" class="btn btn-info">
                Edit
              </a>
            </td>
          </tr>`
        );
      }
    }
  });

});
