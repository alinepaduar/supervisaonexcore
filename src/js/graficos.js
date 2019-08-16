let arrcolors            = [];
let arrcategorias        = [];
let arrvaloressuporte    = [];
let arrvaloresmarketing  = [];
let arrvalorescomercial  = [];
let arrvaloresfinanceiro = [];

let statusmarketing = {
    chart: {
        height: 250,
        type: 'bar',
        width: '100%'
    },
    plotOptions: {
        bar: {
            barHeight: '80px',
            distributed: true,
            horizontal: true,
            dataLabels: {
                position: 'bottom'
            },
        }
    },
    colors: arrcolors,
    dataLabels: {
        enabled: true,
        textAnchor: 'start',
        style: {
            colors: ['#000']
        },
        formatter: function(val, opt) {
            return val
        },
        offsetX: 0,
        dropShadow: {
          enabled: false
        }
    },
    series: [{
        data: arrvaloresmarketing
    }],
    stroke: {
        width: 1,
      colors: arrcolors,
    },
    xaxis: {
        categories: arrcategorias,
    },
    yaxis: {
        labels: {
            show: false
        }
    },
    tooltip: {
        theme: 'light',
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function() {
                    return ''
                }
            }
        }
    }
}

let statuscomercial = {
    chart: {
        height: 250,
        type: 'bar',
        width: '100%'
    },
    plotOptions: {
        bar: {
            barHeight: '80px',
            distributed: true,
            horizontal: true,
            dataLabels: {
                position: 'bottom'
            },
        }
    },
    colors: arrcolors,
    dataLabels: {
        enabled: true,
        textAnchor: 'start',
        style: {
            colors: ['#000']
        },
        formatter: function(val, opt) {
            return val
        },
        offsetX: 0,
        dropShadow: {
          enabled: false
        }
    },
    series: [{
        data: arrvalorescomercial
    }],
    stroke: {
        width: 1,
      colors: arrcolors,
    },
    xaxis: {
        categories: arrcategorias,
    },
    yaxis: {
        labels: {
            show: false
        }
    },
    tooltip: {
        theme: 'light',
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function() {
                    return ''
                }
            }
        }
    }
}

let statussuporte = {
    chart: {
        height: 250,
        type: 'bar',
        width: '100%'
    },
    plotOptions: {
        bar: {
            barHeight: '80px',
            distributed: true,
            horizontal: true,
            dataLabels: {
                position: 'bottom'
            },
        }
    },
    colors: arrcolors,
    dataLabels: {
        enabled: true,
        textAnchor: 'start',
        style: {
            colors: ['#000']
        },
        formatter: function(val, opt) {
            return val
        },
        offsetX: 0,
        dropShadow: {
          enabled: false
        }
    },
    series: [{
        data: arrvaloressuporte
    }],
    stroke: {
        width: 1,
      colors: arrcolors,
    },
    xaxis: {
        categories: arrcategorias,
    },
    yaxis: {
        labels: {
            show: false
        }
    },
    tooltip: {
        theme: 'light',
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function() {
                    return ''
                }
            }
        }
    }
}

let statusfinanceiro = {
    chart: {
        height: 250,
        type: 'bar',
        width: '100%'
    },
    plotOptions: {
        bar: {
            barHeight: '80px',
            distributed: true,
            horizontal: true,
            dataLabels: {
                position: 'bottom'
            },
        }
    },
    colors: arrcolors,
    dataLabels: {
        enabled: true,
        textAnchor: 'start',
        style: {
            colors: ['#000']
        },
        formatter: function(val, opt) {
            return val
        },
        offsetX: 0,
        dropShadow: {
          enabled: false
        }
    },
    series: [{
        data: arrvaloresfinanceiro
    }],
    stroke: {
        width: 1,
      colors: arrcolors,
    },
    xaxis: {
        categories: arrcategorias,
    },
    yaxis: {
        labels: {
            show: false
        }
    },
    tooltip: {
        theme: 'light',
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function() {
                    return ''
                }
            }
        }
    }
}

let clicadofila = 0;
let adicionaEmFila = (elem) => {
    elem.toggleClass('violet');

    var chart_marketing = new ApexCharts(
        document.querySelector("#chart_marketing"),
        statusmarketing
    );
    chart_marketing.render();

    var chart_comercial = new ApexCharts(
        document.querySelector("#chart_comercial"),
        statuscomercial
    );
    chart_comercial.render();

    var chart_suporte = new ApexCharts(
        document.querySelector("#chart_suporte"),
        statussuporte
    );
    chart_suporte.render();

    var chart_financeiro = new ApexCharts(
        document.querySelector("#chart_financeiro"),
        statusfinanceiro
    );
    chart_financeiro.render();

    if(clicadofila == 0){
        arrcolors.push('#673ab7');
        arrcategorias.push('Em Fila');

        arrvaloresmarketing.push(4);
        arrvalorescomercial.push(0);
        arrvaloressuporte.push(3);
        arrvaloresfinanceiro.push(0);

        clicadofila++;
        destroy_render(chart_marketing, chart_comercial, chart_suporte, chart_financeiro);
    } else {
        let itemarr = arrcolors.indexOf('#673ab7');
        arrcolors.splice(itemarr, 1);

        itemarr = arrvaloresmarketing.indexOf(4);
        arrvaloresmarketing.splice(itemarr, 1);
        itemarr = arrvalorescomercial.indexOf(4);
        arrvalorescomercial.splice(itemarr, 1);
        itemarr = arrvaloressuporte.indexOf(4);
        arrvaloressuporte.splice(itemarr, 1);
        itemarr = arrvaloresfinanceiro.indexOf(4);
        arrvaloresfinanceiro.splice(itemarr, 1);

        itemarr = arrcategorias.indexOf('Em Fila');
        arrcategorias.splice(itemarr, 1);

        clicadofila = 0;
        destroy_render(chart_marketing, chart_comercial, chart_suporte, chart_financeiro);
    }
}

let clicadopausa = 0;
let adicionaEmPausa = (elem) => {
    elem.toggleClass('yellow');

    var chart_marketing = new ApexCharts(
        document.querySelector("#chart_marketing"),
        statusmarketing
    );
    chart_marketing.render();

    var chart_comercial = new ApexCharts(
        document.querySelector("#chart_comercial"),
        statuscomercial
    );
    chart_comercial.render();

    var chart_suporte = new ApexCharts(
        document.querySelector("#chart_suporte"),
        statussuporte
    );
    chart_suporte.render();

    var chart_financeiro = new ApexCharts(
        document.querySelector("#chart_financeiro"),
        statusfinanceiro
    );
    chart_financeiro.render();

    if(clicadopausa == 0){
        arrcolors.push('#ffb300');
        arrcategorias.push('Em Pausa');

        arrvaloresmarketing.push(5);
        arrvalorescomercial.push(3);
        arrvaloressuporte.push(2);
        arrvaloresfinanceiro.push(4);

        clicadopausa++;
        destroy_render(chart_marketing, chart_comercial, chart_suporte, chart_financeiro);
    } else {
        let itemarr = arrcolors.indexOf('#ffb300');
        arrcolors.splice(itemarr, 1);

        itemarr = arrvaloresmarketing.indexOf(4);
        arrvaloresmarketing.splice(itemarr, 1);
        itemarr = arrvalorescomercial.indexOf(4);
        arrvalorescomercial.splice(itemarr, 1);
        itemarr = arrvaloressuporte.indexOf(4);
        arrvaloressuporte.splice(itemarr, 1);
        itemarr = arrvaloresfinanceiro.indexOf(4);
        arrvaloresfinanceiro.splice(itemarr, 1);

        itemarr = arrcategorias.indexOf('Em Pausa');
        arrcategorias.splice(itemarr, 1);

        clicadopausa = 0;
        destroy_render(chart_marketing, chart_comercial, chart_suporte, chart_financeiro);
    }
}

let clicadoindisp = 0;
let adicionaIndisponivel = (elem) => {
    elem.toggleClass('red');

    var chart_marketing = new ApexCharts(
        document.querySelector("#chart_marketing"),
        statusmarketing
    );
    chart_marketing.render();

    var chart_comercial = new ApexCharts(
        document.querySelector("#chart_comercial"),
        statuscomercial
    );
    chart_comercial.render();

    var chart_suporte = new ApexCharts(
        document.querySelector("#chart_suporte"),
        statussuporte
    );
    chart_suporte.render();

    var chart_financeiro = new ApexCharts(
        document.querySelector("#chart_financeiro"),
        statusfinanceiro
    );
    chart_financeiro.render();

    if(clicadoindisp == 0){
        arrcolors.push('#d50000');
        arrcategorias.push('Indisponível');

        arrvaloresmarketing.push(1);
        arrvalorescomercial.push(0);
        arrvaloressuporte.push(0);
        arrvaloresfinanceiro.push(0);

        clicadoindisp++;
        destroy_render(chart_marketing, chart_comercial, chart_suporte, chart_financeiro);
    } else {
        let itemarr = arrcolors.indexOf('#d50000');
        arrcolors.splice(itemarr, 1);

        itemarr = arrvaloresmarketing.indexOf(4);
        arrvaloresmarketing.splice(itemarr, 1);
        itemarr = arrvalorescomercial.indexOf(4);
        arrvalorescomercial.splice(itemarr, 1);
        itemarr = arrvaloressuporte.indexOf(4);
        arrvaloressuporte.splice(itemarr, 1);
        itemarr = arrvaloresfinanceiro.indexOf(4);
        arrvaloresfinanceiro.splice(itemarr, 1);

        itemarr = arrcategorias.indexOf('Indisponível');
        arrcategorias.splice(itemarr, 1);

        clicadoindisp = 0;
        destroy_render(chart_marketing, chart_comercial, chart_suporte, chart_financeiro);
    }
}

let clicadorecep = 0;
let adicionaReceptivel = (elem) => {
    elem.toggleClass('blue');

    var chart_marketing = new ApexCharts(
        document.querySelector("#chart_marketing"),
        statusmarketing
    );
    chart_marketing.render();

    var chart_comercial = new ApexCharts(
        document.querySelector("#chart_comercial"),
        statuscomercial
    );
    chart_comercial.render();

    var chart_suporte = new ApexCharts(
        document.querySelector("#chart_suporte"),
        statussuporte
    );
    chart_suporte.render();

    var chart_financeiro = new ApexCharts(
        document.querySelector("#chart_financeiro"),
        statusfinanceiro
    );
    chart_financeiro.render();

    if(clicadorecep == 0){
        arrcolors.push('#1565c0');
        arrcategorias.push('Receptível');

        arrvaloresmarketing.push(2);
        arrvalorescomercial.push(5);
        arrvaloressuporte.push(1);
        arrvaloresfinanceiro.push(1);

        clicadorecep++;
        destroy_render(chart_marketing, chart_comercial, chart_suporte, chart_financeiro);
    } else {
        let itemarr = arrcolors.indexOf('#1565c0');
        arrcolors.splice(itemarr, 1);

        itemarr = arrvaloresmarketing.indexOf(4);
        arrvaloresmarketing.splice(itemarr, 1);
        itemarr = arrvalorescomercial.indexOf(4);
        arrvalorescomercial.splice(itemarr, 1);
        itemarr = arrvaloressuporte.indexOf(4);
        arrvaloressuporte.splice(itemarr, 1);
        itemarr = arrvaloresfinanceiro.indexOf(4);
        arrvaloresfinanceiro.splice(itemarr, 1);

        itemarr = arrcategorias.indexOf('Receptível');
        arrcategorias.splice(itemarr, 1);

        clicadorecep = 0;
        destroy_render(chart_marketing, chart_comercial, chart_suporte, chart_financeiro);
    }
}

let clicadoativo = 0;
let adicionaAtivo = (elem) => {
    elem.toggleClass('orange');

    var chart_marketing = new ApexCharts(
        document.querySelector("#chart_marketing"),
        statusmarketing
    );
    chart_marketing.render();

    var chart_comercial = new ApexCharts(
        document.querySelector("#chart_comercial"),
        statuscomercial
    );
    chart_comercial.render();

    var chart_suporte = new ApexCharts(
        document.querySelector("#chart_suporte"),
        statussuporte
    );
    chart_suporte.render();

    var chart_financeiro = new ApexCharts(
        document.querySelector("#chart_financeiro"),
        statusfinanceiro
    );
    chart_financeiro.render();

    if(clicadoativo == 0){
        arrcolors.push('#f4511e');
        arrcategorias.push('Ativo');

        arrvaloresmarketing.push(3);
        arrvalorescomercial.push(3);
        arrvaloressuporte.push(5);
        arrvaloresfinanceiro.push(7);

        clicadoativo++;
        destroy_render(chart_marketing, chart_comercial, chart_suporte, chart_financeiro);
    } else {
        let itemarr = arrcolors.indexOf('#f4511e');
        arrcolors.splice(itemarr, 1);

        itemarr = arrvaloresmarketing.indexOf(4);
        arrvaloresmarketing.splice(itemarr, 1);
        itemarr = arrvalorescomercial.indexOf(4);
        arrvalorescomercial.splice(itemarr, 1);
        itemarr = arrvaloressuporte.indexOf(4);
        arrvaloressuporte.splice(itemarr, 1);
        itemarr = arrvaloresfinanceiro.indexOf(4);
        arrvaloresfinanceiro.splice(itemarr, 1);

        itemarr = arrcategorias.indexOf('Ativo');
        arrcategorias.splice(itemarr, 1);

        clicadoativo = 0;
        destroy_render(chart_marketing, chart_comercial, chart_suporte, chart_financeiro);
    }
}

let clicadodisp = 0;
let adicionaDisp = (elem) => {
    elem.toggleClass('green');

    var chart_marketing = new ApexCharts(
        document.querySelector("#chart_marketing"),
        statusmarketing
    );
    chart_marketing.render();

    var chart_comercial = new ApexCharts(
        document.querySelector("#chart_comercial"),
        statuscomercial
    );
    chart_comercial.render();

    var chart_suporte = new ApexCharts(
        document.querySelector("#chart_suporte"),
        statussuporte
    );
    chart_suporte.render();

    var chart_financeiro = new ApexCharts(
        document.querySelector("#chart_financeiro"),
        statusfinanceiro
    );
    chart_financeiro.render();

    if(clicadodisp == 0){
        arrcolors.push('#00c853');
        arrcategorias.push('Disponível');

        arrvaloresmarketing.push(0);
        arrvalorescomercial.push(5);
        arrvaloressuporte.push(0);
        arrvaloresfinanceiro.push(0);

        clicadodisp++;
        destroy_render(chart_marketing, chart_comercial, chart_suporte, chart_financeiro);
    } else {
        let itemarr = arrcolors.indexOf('#00c853');
        arrcolors.splice(itemarr, 1);

        itemarr = arrvaloresmarketing.indexOf(4);
        arrvaloresmarketing.splice(itemarr, 1);
        itemarr = arrvalorescomercial.indexOf(4);
        arrvalorescomercial.splice(itemarr, 1);
        itemarr = arrvaloressuporte.indexOf(4);
        arrvaloressuporte.splice(itemarr, 1);
        itemarr = arrvaloresfinanceiro.indexOf(4);
        arrvaloresfinanceiro.splice(itemarr, 1);

        itemarr = arrcategorias.indexOf('Disponível');
        arrcategorias.splice(itemarr, 1);

        clicadodisp = 0;
        destroy_render(chart_marketing, chart_comercial, chart_suporte, chart_financeiro);
    }
}

let clicadologados = 0;
let adicionaLogados = (elem) => {
    elem.toggleClass('teal');

    var chart_marketing = new ApexCharts(
        document.querySelector("#chart_marketing"),
        statusmarketing
    );
    chart_marketing.render();

    var chart_comercial = new ApexCharts(
        document.querySelector("#chart_comercial"),
        statuscomercial
    );
    chart_comercial.render();

    var chart_suporte = new ApexCharts(
        document.querySelector("#chart_suporte"),
        statussuporte
    );
    chart_suporte.render();

    var chart_financeiro = new ApexCharts(
        document.querySelector("#chart_financeiro"),
        statusfinanceiro
    );
    chart_financeiro.render();

    if(clicadologados == 0){
        arrcolors.push('#00897b');
        arrcategorias.push('Logado');

        arrvaloresmarketing.push(10);
        arrvalorescomercial.push(18);
        arrvaloressuporte.push(7);
        arrvaloresfinanceiro.push(10);

        clicadologados++;
        destroy_render(chart_marketing, chart_comercial, chart_suporte, chart_financeiro);
    } else {
        let itemarr = arrcolors.indexOf('#00897b');
        arrcolors.splice(itemarr, 1);

        itemarr = arrvaloresmarketing.indexOf(4);
        arrvaloresmarketing.splice(itemarr, 1);
        itemarr = arrvalorescomercial.indexOf(4);
        arrvalorescomercial.splice(itemarr, 1);
        itemarr = arrvaloressuporte.indexOf(4);
        arrvaloressuporte.splice(itemarr, 1);
        itemarr = arrvaloresfinanceiro.indexOf(4);
        arrvaloresfinanceiro.splice(itemarr, 1);

        itemarr = arrcategorias.indexOf('Logado');
        arrcategorias.splice(itemarr, 1);

        clicadologados = 0;
        destroy_render(chart_marketing, chart_comercial, chart_suporte, chart_financeiro);
    }
}

let clicadodeslog = 0;
let adicionaDeslog = (elem) => {
    elem.toggleClass('grey');

    var chart_marketing = new ApexCharts(
        document.querySelector("#chart_marketing"),
        statusmarketing
    );
    chart_marketing.render();

    var chart_comercial = new ApexCharts(
        document.querySelector("#chart_comercial"),
        statuscomercial
    );
    chart_comercial.render();

    var chart_suporte = new ApexCharts(
        document.querySelector("#chart_suporte"),
        statussuporte
    );
    chart_suporte.render();

    var chart_financeiro = new ApexCharts(
        document.querySelector("#chart_financeiro"),
        statusfinanceiro
    );
    chart_financeiro.render();

    if(clicadodeslog == 0){
        arrcolors.push('#424242');
        arrcategorias.push('Deslogado');

        arrvaloresmarketing.push(10);
        arrvalorescomercial.push(18);
        arrvaloressuporte.push(7);
        arrvaloresfinanceiro.push(10);

        clicadodeslog++;
        destroy_render(chart_marketing, chart_comercial, chart_suporte, chart_financeiro);
    } else {
        let itemarr = arrcolors.indexOf('#424242');
        arrcolors.splice(itemarr, 1);

        itemarr = arrvaloresmarketing.indexOf(4);
        arrvaloresmarketing.splice(itemarr, 1);
        itemarr = arrvalorescomercial.indexOf(4);
        arrvalorescomercial.splice(itemarr, 1);
        itemarr = arrvaloressuporte.indexOf(4);
        arrvaloressuporte.splice(itemarr, 1);
        itemarr = arrvaloresfinanceiro.indexOf(4);
        arrvaloresfinanceiro.splice(itemarr, 1);

        itemarr = arrcategorias.indexOf('Deslogado');
        arrcategorias.splice(itemarr, 1);

        clicadodeslog = 0;
        destroy_render(chart_marketing, chart_comercial, chart_suporte, chart_financeiro);
    }
}

let destroy_render = (chart_marketing, chart_comercial, chart_suporte, chart_financeiro) => {
  chart_marketing.destroy();
  chart_marketing.render();
  chart_comercial.destroy();
  chart_comercial.render();
  chart_suporte.destroy();
  chart_suporte.render();
  chart_financeiro.destroy();
  chart_financeiro.render();
}
