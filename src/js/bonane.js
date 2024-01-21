/* Main bonane JS */

/**
 * launch carousel
 */
function launchCarousel() {
  $("#quote-carousel").carousel({
    pause: true,
    interval: 4000,
  });
}

$(document).ready(function () {
  launchCarousel();
});

// Fetch json file
$.getJSON("USER.json", function (elements) {
  elements.forEach(function (nous, i) {
    document.getElementById("carousel-indicators").innerHTML += `
              <li data-target="#quote-carousel" data-slide-to="${i}" class="${isActive(
      i
    )}" title="${checkName(nous.name)}">
                <img src="${checkImage(nous.image)}" alt="">
              </li>`;

    document.getElementById("name").innerHTML += `
            <div class="item ${isActive(i)}">
               <blockquote>
                  <div class="row">
                       <div class="col-sm-3 text-center">
                           <img class="img-circle" src="${checkImage(
                             nous.image
                           )}" style="width: 100px;height:100px;">
                       </div>
                        <div class="col-sm-9">
                            <p>${formatMessage(nous.message)}</p>
                            <div class="row">
                                <small>
                                    ${checkName(nous.name)}
                                    <a href="${checkGithub(
                                      nous.username
                                    )}" target="_blank" 
                                    style="color: #f9f9f9;margin: 5px">
                                    <i class="fa fa-github"></i>
                                    <i class="flag-icon flag-icon-${getFlag(
                                      nous
                                    )}"></i>
                                    </a>
                                </small>
                            </div>
                        </div>
                    </div>
               </blockquote>
            </div>`;
  });
});
