$(function () {

    /*placeholder*/
    $('input, textarea').each(function () {
        var placeholder = $(this).attr('placeholder');
        $(this).focus(function () {
            $(this).attr('placeholder', '');
        });
        $(this).focusout(function () {
            $(this).attr('placeholder', placeholder);
        });
    });

    /*preloader*/
    setTimeout(function () {
        if (!$('.preloader').hasClass('done')) {
            $('.preloader').addClass('done');
        }
    }, 2000)
    /*slider*/
    $(function () {
        $('.sl').slick({
            autoplay: false,
            autoplaySpeed: 3000,
            dots: true,
            arrows: false,
            speed: 300,
            fade: false,
            pauseOnDotsHover: true,
            responsive: [
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        $('.product-slider').slick({
            autoplay: false,
            autoplaySpeed: 3000,
            dots: true,
            arrows: false,
            speed: 300,
            fade: false,
            pauseOnDotsHover: true,
            slidesToShow: 5,
            slidesToScroll: 1
        });
        $('a[data-toggle="tab"]').on('shown.bs.tab', function () {
            $($(this).attr('href')).find('.sl_product').slick({
                autoplay: false,
                autoplaySpeed: 3000,
                dots: true,
                arrows: false,
                speed: 300,
                fade: false,
                pauseOnDotsHover: true,
                slidesToShow: 3,
                slidesToScroll: 1
            });
        }).first().trigger('shown.bs.tab');
    });
});

/*maps*/

function initMap() {
    var location = {lat: 49.819280, lng: 24.062008};
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: location,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM
        },
        scrollwheel: false,
        streetViewControl: false,
        scaleControl: false,
        tilesloaded: false,
        mapTypeControl: false,
        fullscreenControl: false,
        styles: [
            {
                "featureType": "administrative",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#ff0300"
                    },
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 129.33333333333334
                    },
                    {
                        "gamma": 1
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#abff00"
                    },
                    {
                        "saturation": 61.80000000000001
                    },
                    {
                        "lightness": 13.800000000000011
                    },
                    {
                        "gamma": 1
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#1fa661"
                    },
                    {
                        "weight": "0.55"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#00b7ff"
                    },
                    {
                        "saturation": -31.19999999999996
                    },
                    {
                        "lightness": 2.1803921568627374
                    },
                    {
                        "gamma": 1
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#00B5FF"
                    },
                    {
                        "saturation": -33.33333333333343
                    },
                    {
                        "lightness": 27.294117647058826
                    },
                    {
                        "gamma": 1
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit.station.airport",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "transit.station.bus",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#00B7FF"
                    },
                    {
                        "saturation": 8.400000000000006
                    },
                    {
                        "lightness": 36.400000000000006
                    },
                    {
                        "gamma": 1
                    }
                ]
            }
        ]
    });
    var iconBase = 'img/';
    var icons = {
        marker: {
            icon: iconBase + 'marker.png'
        }
    };
    var features = [
        {
            position: new google.maps.LatLng(49.819280, 24.062008),
            type: 'marker'
        }
    ];
    features.forEach(function (feature) {
        var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map
        });
        var contentString = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<div id="bodyContent">' +
            '<p style="color: #000">м. Львів, вул. Півколо, 14</p>' +
            '</div>' +
            '</div>';
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
    });

}
