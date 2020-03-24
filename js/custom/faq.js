function build_accordion(data) {
  data.items.forEach(function (item, index) {
    $('#accordion').append(`
      <div class="panel single-accordion">
        <h6>
          <a role="button" class="collapsed" aria-expanded="false" aria-controls="collapse_${index}" data-toggle="collapse" data-parent="#accordion" href="#collapse_${index}" style="text-transform:none">
            ${item.title}
            <span class="accor-open"><i class="fa fa-plus" aria-hidden="true"></i></span>
            <span class="accor-close"><i class="fa fa-minus" aria-hidden="true"></i></span>
          </a>
        </h6>
        <div id="collapse_${index}" class="accordion-content collapse">
          <p> ${item.content} </p>
        </div>
      </div>`
    );
  });
}

$(document).ready(function () {

  $(".toggle-accordion").on("click", function () {
    var accordionId = $(this).attr("accordion-id");

    if ($(this).hasClass("active")) {
      closeAllPanels(accordionId);
      $(this).removeClass("active");
    } else {
      openAllPanels(accordionId);
      $(this).addClass("active");
    }
  });

  openAllPanels = function (aId) {
    $(aId + ' .accordion-content').collapse('show');
  }
  closeAllPanels = function (aId) {
    $(aId + ' .accordion-content').collapse('hide');
  }

  $.getJSON("/json/faq.json", function (data) {
    build_accordion(data);
  });

});