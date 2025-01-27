function initMaps() {
    // Map coordinates
    const casalMontaniLocation = { lat: 41.174577, lng: 14.388032 }; // Basilica coordinates (nuovo)
    const basilicaLocation = { lat: 41.889744, lng: 12.494901 }; // Casal Montani coordinates
  
    // Map 1 - Basilica
    const map1 = new google.maps.Map(document.getElementById('map-canvas-1'), {
        center: basilicaLocation,
        zoom: 15,
      center: e,
      scrollwheel: !1,
      mapTypeId: "satellite",
        styles: [
            {
                "featureType": "administrative",
                "elementType": "all",
                "stylers": [{"visibility": "simplified"}]
            },
            // Add more style rules as needed
        ]
    });
  
    const marker1 = new google.maps.Marker({
        position: basilicaLocation,
        map: map1,
        title: 'Basilica Santi Giovanni e Paolo'
    });
  
    // Map 2 - Casal Montani
    const map2 = new google.maps.Map(document.getElementById('map-canvas-2'), {
        center: casalMontaniLocation,
        zoom: 15,
      center: e,
      scrollwheel: !1,
      mapTypeId: "satellite",
        styles: [
            {
                "featureType": "administrative",
                "elementType": "all",
                "stylers": [{"visibility": "simplified"}]
            },
    ]});
  
    const marker2 = new google.maps.Marker({
        position: casalMontaniLocation,
        map: map2,
        title: 'Casal Montani'
    });
  
    // Event handlers for Map 1
    document.getElementById('btn-show-content-1').addEventListener('click', function() {
        document.getElementById('map-content-1').classList.toggle('show-map-content');
        document.getElementById('btn-show-content-1').classList.toggle('active');
    });
  
    document.getElementById('btn-show-map-1').addEventListener('click', function() {
        document.getElementById('map-content-1').classList.toggle('show-map-content');
        document.getElementById('btn-show-content-1').classList.toggle('active');
    });
  
    // Event handlers for Map 2
    document.getElementById('btn-show-content-2').addEventListener('click', function() {
        document.getElementById('map-content-2').classList.toggle('show-map-content');
        document.getElementById('btn-show-content-2').classList.toggle('active');
    });
  
    document.getElementById('btn-show-map-2').addEventListener('click', function() {
        document.getElementById('map-content-2').classList.toggle('show-map-content');
        document.getElementById('btn-show-content-2').classList.toggle('active');
    });
  
    // Resize maps when window is resized
    google.maps.event.addDomListener(window, 'resize', function() {
        const center1 = map1.getCenter();
        const center2 = map2.getCenter();
        
        google.maps.event.trigger(map1, 'resize');
        google.maps.event.trigger(map2, 'resize');
        
        map1.setCenter(center1);
        map2.setCenter(center2);
    });
  }
  
function alert_markup(t, e) {
  return (
    '<div class="alert alert-' +
    t +
    '" role="alert">' +
    e +
    '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span>&times;</span></button></div>'
  );
}
$(document).ready(function () {
  $(".wp1").waypoint(
    function () {
      $(".wp1").addClass("animated fadeInLeft");
    },
    { offset: "75%" }
  ),
    $(".wp2").waypoint(
      function () {
        $(".wp2").addClass("animated fadeInRight");
      },
      { offset: "75%" }
    ),
    $(".wp3").waypoint(
      function () {
        $(".wp3").addClass("animated fadeInLeft");
      },
      { offset: "75%" }
    ),
    $(".wp4").waypoint(
      function () {
        $(".wp4").addClass("animated fadeInRight");
      },
      { offset: "75%" }
    ),
    $(".wp5").waypoint(
      function () {
        $(".wp5").addClass("animated fadeInLeft");
      },
      { offset: "75%" }
    ),
    $(".wp6").waypoint(
      function () {
        $(".wp6").addClass("animated fadeInRight");
      },
      { offset: "75%" }
    ),
    $(".wp7").waypoint(
      function () {
        $(".wp7").addClass("animated fadeInUp");
      },
      { offset: "75%" }
    ),
    $(".wp8").waypoint(
      function () {
        $(".wp8").addClass("animated fadeInLeft");
      },
      { offset: "75%" }
    ),
    $(".wp9").waypoint(
      function () {
        $(".wp9").addClass("animated fadeInRight");
      },
      { offset: "75%" }
    ),
    $(".flexslider").flexslider({ animation: "slide" }),
    $(".single_image").fancybox({ padding: 4 }),
    $(".fancybox").fancybox({ padding: 4, width: 1e3, height: 800 }),
    $('[data-toggle="tooltip"]').tooltip(),
    $(".nav-toggle").click(function () {
      $(this).toggleClass("active"),
        $(".header-nav").toggleClass("open"),
        event.preventDefault();
    }),
    $(".header-nav li a").click(function () {
      $(".nav-toggle").toggleClass("active"),
        $(".header-nav").toggleClass("open");
    }),
    $(function () {
      $(window).scroll(function () {
        20 <= $(window).scrollTop()
          ? ($("section.navigation").addClass("fixed"),
            $("header").css({ "border-bottom": "none", padding: "35px 0" }),
            $("header .member-actions").css({ top: "26px" }),
            $("header .navicon").css({ top: "34px" }))
          : ($("section.navigation").removeClass("fixed"),
            $("header").css({
              "border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
              padding: "50px 0",
            }),
            $("header .member-actions").css({ top: "41px" }),
            $("header .navicon").css({ top: "48px" }));
      });
    }),
    $(function () {
      $("a[href*=#]:not([href=#])").click(function () {
        if (
          location.pathname.replace(/^\//, "") ===
            this.pathname.replace(/^\//, "") &&
          location.hostname === this.hostname
        ) {
          var t = $(this.hash);
          if (
            (t = t.length ? t : $("[name=" + this.hash.slice(1) + "]")).length
          )
            return (
              $("html,body").animate({ scrollTop: t.offset().top - 90 }, 2e3),
              !1
            );
        }
      });
    });
  var t = document.getElementsByClassName("share-bar"),
    e = document.createElement("script");
  (e.type = "text/javascript"),
    (e.async = !0),
    (e.src = "https://apis.google.com/js/platform.js");
  var n = document.getElementsByTagName("script")[0];
  n.parentNode.insertBefore(e, n);
  for (var a = 0; a < t.length; a++) {
    var o =
      '<iframe allowtransparency="true" frameborder="0" scrolling="no"src="https://platform.twitter.com/widgets/tweet_button.html?url=' +
      encodeURIComponent(window.location) +
      "&amp;text=" +
      encodeURIComponent(document.title) +
      '&amp;via=ramswarooppatra&amp;hashtags=ramandantara&amp;count=horizontal"style="width:105px; height:21px;"></iframe><iframe src="//www.facebook.com/plugins/like.php?href=' +
      encodeURIComponent(window.location) +
      '&amp;width&amp;layout=button_count&amp;action=like&amp;show_faces=false&amp;share=true&amp;height=21&amp;appId=101094500229731&amp;width=150" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:150px; height:21px;" allowTransparency="true"></iframe><div class="g-plusone" data-size="medium"></div>';
    (t[a].innerHTML = o), (t[a].style.display = "inline-block");
  }
  $(".player").YTPlayer(),
    $("#btn-show-map-1").click(function () {
      $("#map-content-1").toggleClass("toggle-map-content-1"),
        $("#btn-show-content-1").toggleClass("toggle-map-content-1");
    }),
    $("#btn-show-content-1").click(function () {
      $("#map-content-1").toggleClass("toggle-map-content-1"),
        $("#btn-show-content-1").toggleClass("toggle-map-content-1");
    }),
    $("#btn-show-map-2").click(function () {
      $("#map-content-2").toggleClass("toggle-map-content-2"),
        $("#btn-show-content-2").toggleClass("toggle-map-content-2");
    }),
    $("#btn-show-content-2").click(function () {
      $("#map-content-2").toggleClass("toggle-map-content-2"),
        $("#btn-show-content-2").toggleClass("toggle-map-content-2");
    });
  var s = createCalendar({
    options: { class: "", id: "" },
    data: {
      title: "Ram and Antara's Wedding",
      start: new Date("Nov 27, 2017 10:00"),
      end: new Date("Nov 29, 2017 00:00"),
      address: "ITC Fortune Park Hotel, Kolkata",
      description:
        "We can't wait to see you on our big day. For any queries or issues, please contact Mr. Amit Roy at +91 9876543210.",
    },
  });
  $("#add-to-cal").html(s),
    $("#rsvp-form").on("submit", function (t) {
      t.preventDefault();
      var e = $(this).serialize();
      $("#alert-wrapper").html(
        alert_markup(
          "info",
          "<strong>Just a sec!</strong> We are saving your details."
        )
      ),
        "b0e53b10c1f55ede516b240036b88f40" !== MD5($("#invite_code").val()) &&
        "2ac7f43695eb0479d5846bb38eec59cc" !== MD5($("#invite_code").val())
          ? $("#alert-wrapper").html(
              alert_markup(
                "danger",
                "<strong>Sorry!</strong> Your invite code is incorrect."
              )
            )
          : $.post(
              "https://script.google.com/macros/s/AKfycbyo0rEknln8LedEP3bkONsfOh776IR5lFidLhJFQ6jdvRiH4dKvHZmtoIybvnxpxYr2cA/exec",
              e
            )
              .done(function (t) {
                console.log(t),
                  "error" === t.result
                    ? $("#alert-wrapper").html(
                        alert_markup("danger", t.message)
                      )
                    : ($("#alert-wrapper").html(""),
                      $("#rsvp-modal").modal("show"));
              })
              .fail(function (t) {
                console.log(t),
                  $("#alert-wrapper").html(
                    alert_markup(
                      "danger",
                      "<strong>Sorry!</strong> There is some issue with the server. "
                    )
                  );
              });
    });
});
var MD5 = function (t) {
  function e(t, e) {
    return (t << e) | (t >>> (32 - e));
  }
  function n(t, e) {
    var n, a, o, s, r;
    return (
      (o = 2147483648 & t),
      (s = 2147483648 & e),
      (r = (1073741823 & t) + (1073741823 & e)),
      (n = 1073741824 & t) & (a = 1073741824 & e)
        ? 2147483648 ^ r ^ o ^ s
        : n | a
        ? 1073741824 & r
          ? 3221225472 ^ r ^ o ^ s
          : 1073741824 ^ r ^ o ^ s
        : r ^ o ^ s
    );
  }
  function a(t, a, o, s, r, i, l) {
    var _;
    return (t = n(t, n(n(((_ = a) & o) | (~_ & s), r), l))), n(e(t, i), a);
  }
  function o(t, a, o, s, r, i, l) {
    var _;
    return (t = n(t, n(n((a & (_ = s)) | (o & ~_), r), l))), n(e(t, i), a);
  }
  function s(t, a, o, s, r, i, l) {
    return (t = n(t, n(n(a ^ o ^ s, r), l))), n(e(t, i), a);
  }
  function r(t, a, o, s, r, i, l) {
    return (t = n(t, n(n(o ^ (a | ~s), r), l))), n(e(t, i), a);
  }
  function i(t) {
    var e,
      n = "",
      a = "";
    for (e = 0; e <= 3; e++)
      n += (a = "0" + ((t >>> (8 * e)) & 255).toString(16)).substr(
        a.length - 2,
        2
      );
    return n;
  }
  var l,
    _,
    c,
    p,
    d,
    m,
    g,
    f,
    h,
    u = [];
  for (
    u = (function (t) {
      for (
        var e,
          n = t.length,
          a = n + 8,
          o = 16 * (1 + (a - (a % 64)) / 64),
          s = Array(o - 1),
          r = 0,
          i = 0;
        i < n;

      )
        (r = (i % 4) * 8),
          (s[(e = (i - (i % 4)) / 4)] = s[e] | (t.charCodeAt(i) << r)),
          i++;
      return (
        (r = (i % 4) * 8),
        (s[(e = (i - (i % 4)) / 4)] = s[e] | (128 << r)),
        (s[o - 2] = n << 3),
        (s[o - 1] = n >>> 29),
        s
      );
    })(
      (t = (function (t) {
        t = t.replace(/\r\n/g, "\n");
        for (var e = "", n = 0; n < t.length; n++) {
          var a = t.charCodeAt(n);
          a < 128
            ? (e += String.fromCharCode(a))
            : (127 < a && a < 2048
                ? (e += String.fromCharCode((a >> 6) | 192))
                : ((e += String.fromCharCode((a >> 12) | 224)),
                  (e += String.fromCharCode(((a >> 6) & 63) | 128))),
              (e += String.fromCharCode((63 & a) | 128)));
        }
        return e;
      })(t))
    ),
      m = 1732584193,
      g = 4023233417,
      f = 2562383102,
      h = 271733878,
      l = 0;
    l < u.length;
    l += 16
  )
    (m = a((_ = m), (c = g), (p = f), (d = h), u[l + 0], 7, 3614090360)),
      (h = a(h, m, g, f, u[l + 1], 12, 3905402710)),
      (f = a(f, h, m, g, u[l + 2], 17, 606105819)),
      (g = a(g, f, h, m, u[l + 3], 22, 3250441966)),
      (m = a(m, g, f, h, u[l + 4], 7, 4118548399)),
      (h = a(h, m, g, f, u[l + 5], 12, 1200080426)),
      (f = a(f, h, m, g, u[l + 6], 17, 2821735955)),
      (g = a(g, f, h, m, u[l + 7], 22, 4249261313)),
      (m = a(m, g, f, h, u[l + 8], 7, 1770035416)),
      (h = a(h, m, g, f, u[l + 9], 12, 2336552879)),
      (f = a(f, h, m, g, u[l + 10], 17, 4294925233)),
      (g = a(g, f, h, m, u[l + 11], 22, 2304563134)),
      (m = a(m, g, f, h, u[l + 12], 7, 1804603682)),
      (h = a(h, m, g, f, u[l + 13], 12, 4254626195)),
      (f = a(f, h, m, g, u[l + 14], 17, 2792965006)),
      (m = o(
        m,
        (g = a(g, f, h, m, u[l + 15], 22, 1236535329)),
        f,
        h,
        u[l + 1],
        5,
        4129170786
      )),
      (h = o(h, m, g, f, u[l + 6], 9, 3225465664)),
      (f = o(f, h, m, g, u[l + 11], 14, 643717713)),
      (g = o(g, f, h, m, u[l + 0], 20, 3921069994)),
      (m = o(m, g, f, h, u[l + 5], 5, 3593408605)),
      (h = o(h, m, g, f, u[l + 10], 9, 38016083)),
      (f = o(f, h, m, g, u[l + 15], 14, 3634488961)),
      (g = o(g, f, h, m, u[l + 4], 20, 3889429448)),
      (m = o(m, g, f, h, u[l + 9], 5, 568446438)),
      (h = o(h, m, g, f, u[l + 14], 9, 3275163606)),
      (f = o(f, h, m, g, u[l + 3], 14, 4107603335)),
      (g = o(g, f, h, m, u[l + 8], 20, 1163531501)),
      (m = o(m, g, f, h, u[l + 13], 5, 2850285829)),
      (h = o(h, m, g, f, u[l + 2], 9, 4243563512)),
      (f = o(f, h, m, g, u[l + 7], 14, 1735328473)),
      (m = s(
        m,
        (g = o(g, f, h, m, u[l + 12], 20, 2368359562)),
        f,
        h,
        u[l + 5],
        4,
        4294588738
      )),
      (h = s(h, m, g, f, u[l + 8], 11, 2272392833)),
      (f = s(f, h, m, g, u[l + 11], 16, 1839030562)),
      (g = s(g, f, h, m, u[l + 14], 23, 4259657740)),
      (m = s(m, g, f, h, u[l + 1], 4, 2763975236)),
      (h = s(h, m, g, f, u[l + 4], 11, 1272893353)),
      (f = s(f, h, m, g, u[l + 7], 16, 4139469664)),
      (g = s(g, f, h, m, u[l + 10], 23, 3200236656)),
      (m = s(m, g, f, h, u[l + 13], 4, 681279174)),
      (h = s(h, m, g, f, u[l + 0], 11, 3936430074)),
      (f = s(f, h, m, g, u[l + 3], 16, 3572445317)),
      (g = s(g, f, h, m, u[l + 6], 23, 76029189)),
      (m = s(m, g, f, h, u[l + 9], 4, 3654602809)),
      (h = s(h, m, g, f, u[l + 12], 11, 3873151461)),
      (f = s(f, h, m, g, u[l + 15], 16, 530742520)),
      (m = r(
        m,
        (g = s(g, f, h, m, u[l + 2], 23, 3299628645)),
        f,
        h,
        u[l + 0],
        6,
        4096336452
      )),
      (h = r(h, m, g, f, u[l + 7], 10, 1126891415)),
      (f = r(f, h, m, g, u[l + 14], 15, 2878612391)),
      (g = r(g, f, h, m, u[l + 5], 21, 4237533241)),
      (m = r(m, g, f, h, u[l + 12], 6, 1700485571)),
      (h = r(h, m, g, f, u[l + 3], 10, 2399980690)),
      (f = r(f, h, m, g, u[l + 10], 15, 4293915773)),
      (g = r(g, f, h, m, u[l + 1], 21, 2240044497)),
      (m = r(m, g, f, h, u[l + 8], 6, 1873313359)),
      (h = r(h, m, g, f, u[l + 15], 10, 4264355552)),
      (f = r(f, h, m, g, u[l + 6], 15, 2734768916)),
      (g = r(g, f, h, m, u[l + 13], 21, 1309151649)),
      (m = r(m, g, f, h, u[l + 4], 6, 4149444226)),
      (h = r(h, m, g, f, u[l + 11], 10, 3174756917)),
      (f = r(f, h, m, g, u[l + 2], 15, 718787259)),
      (g = r(g, f, h, m, u[l + 9], 21, 3951481745)),
      (m = n(m, _)),
      (g = n(g, c)),
      (f = n(f, p)),
      (h = n(h, d));
  return (i(m) + i(g) + i(f) + i(h)).toLowerCase();
};
