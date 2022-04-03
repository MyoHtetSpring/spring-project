(async () => {

    const topology = await fetch(
        'https://code.highcharts.com/mapdata/countries/mm/mm-all.topo.json'
    ).then(response => response.json());

    // Prepare demo data. The data is joined to map using value of 'hc-key'
    // property by default. See API docs for 'joinBy' for more info on linking
    // data and map.
    const data = [
        ['mm-tn', 10,'#f68484'], ['mm-5760', 11,'#f17f7f'], ['mm-mo', 12,'#f38181'], ['mm-ra', 13,'#f68585'],
        ['mm-ay', 14,'#f48282'], ['mm-ch', 15,'#f78686'], ['mm-mg', 16,'#ea7878'], ['mm-sh', 17,'#f17f7f'],
        ['mm-kh', 18,'#f78686'], ['mm-kn', 19,'#f58484'], ['mm-kc', 20,'#f48383'], ['mm-sa', 21,'#f28181'],
        ['mm-ba', 22,'#f28080'], ['mm-md', 23,'#ea7878'], ['mm-ya', 24,'#a02424']
    ];

    // Create the chart
    Highcharts.mapChart('container', {
        chart: {
            map: topology
        },

        title: {
            text: 'Number of students from Different States & Division'
        },

        subtitle: {
            text: 'Students from foreign countries : <a href="http://code.highcharts.com/mapdata/countries/mm/mm-all.topo.json">15</a>'
        },

        mapNavigation: {
            enabled: false,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },
        colorAxis: {
            tickPixelInterval: 100,
            minColor: '#f78585',
            maxColor: '#a02424'
          },

        series: [{
            data: data,
            keys: ['hc-key', 'value', 'color'],
            name: 'Random data',
            states: {
                hover: {
                    color: '#fab7b7'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });

})();