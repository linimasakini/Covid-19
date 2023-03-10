import 'bootstrap';

class sembuh extends HTMLElement{
    constructor(){
        super();
        this.shadowDom = this.attachShadow({mode:'open'});
    }


    set coronaItem(item){
        this._coronaItem = item;
        this.render();
    }
    

    render(){
        this.shadowDom.innerHTML = '';
        this.shadowDom.innerHTML = `<style>
        *{
            padding:0px;
            margin:0px;
        }
        .container{
            --bs-gutter-x: 1.5rem;
            --bs-gutter-y: 0;
            width: 100%;
            padding-right: calc(var(--bs-gutter-x) * .5);
            padding-left: calc(var(--bs-gutter-x) * .5);
            margin-right: auto;
            margin-left: auto;
        }
        
        @media(min-width:992px){
            .container{
                max-width: 960px;
            }
            
        }
        
        
        
        .row{
            --bs-gutter-x: 2rem;
            --bs-gutter-y: 0;
            display: flex;
            flex-wrap: wrap;
            margin-top: calc(-1 * var(--bs-gutter-y));
            margin-right: calc(-.5 * var(--bs-gutter-x));
            margin-left: calc(-.5 * var(--bs-gutter-x));
        
        }
        .row > *{
            max-width: 100%;
            padding-right: calc(var(--bs-gutter-x) * .5);
            padding-left: calc(var(--bs-gutter-x) * .5);
            margin-top: var(--bs-gutter-y);
        }
        
        @media (min-width: 768px){
        
        .col-md-3 {
            flex: 0 0 auto;
            width: 20%;
        }
        }
        .card{
            --bs-card-spacer-y: 1rem;
            --bs-card-spacer-x: 1rem;
            --bs-card-title-spacer-y: 0.5rem;
            --bs-card-border-width: 1px;
            --bs-card-border-color: var(--bs-border-color-translucent);
            --bs-card-border-radius: 0.375rem;
            --bs-card-box-shadow: ;
            --bs-card-inner-border-radius: calc(0.375rem - 1px);
            --bs-card-cap-padding-y: 0.5rem;
            --bs-card-cap-padding-x: 1rem;
            --bs-card-cap-bg: rgba(0, 0, 0, 0.03);
            --bs-card-cap-color: ;
            --bs-card-height: ;
            --bs-card-color: ;
            --bs-card-bg: #fff;
            --bs-card-img-overlay-padding: 1rem;
            --bs-card-group-margin: 0.75rem;
            position: relative;
            display: flex;
            flex-direction: column;
            min-width: 0;
            height: var(--bs-card-height);
            word-wrap: break-word;
            background-color: var(--bs-card-bg);
            background-clip: border-box;
            border: var(--bs-card-border-width) solid var(--bs-card-border-color);
            border-radius: var(--bs-card-border-radius);
        }
        .card-body{
            -webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;padding:1.25rem;
        }
        .card-title{
            margin-bottom:.75rem;
        }
        
        .text-bg-primary{
            color: #fff!important;
            background-color: RGBA(13,110,253,var(--bs-bg-opacity,1))!important;
        }
        .text-center{
            color: #fff!important;
            text-align: center!important;
        }
        
        .text-bg-warning{
            color: #fff!important;
            background-color: RGBA(255,193,7,var(--bs-bg-opacity,1))!important;
        }
        .text-bg-success{
            color: #fff!important;;
            background-color:#28a745!important;
        }
        .text-bg-danger{
            color: #fff!important;;
            background-color:#dc3545!important;
        }
        .p-3{
            padding:1rem!important;
        }
        .mb-5{
            margin-bottom:3rem!important;
        }
        .mt-3{
            margin-top:1rem!important;
        }
        .shadow-rounded{
            box-shadow:0 0 0 .1rem   ;
            border-radius:.25rem!important;
        }
                                    </style>
        <div class="container">
        <div class="row">
        <div class="col-md-3">
        <div class="card text-bg-primary p-3 mb-5 shadow-rounded">
            <div class="card-body">
                <h4 class="card-title text-center"><?xml version="1.0" encoding="iso-8859-1"?>
                <!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 369.946 369.946" style="enable-background:new 0 0 369.946 369.946;" xml:space="preserve">
                <g>
                    <g>
                        <circle style="fill:#010002;" cx="121.33" cy="137.238" r="13.921"/>
                        <circle style="fill:#010002;" cx="248.622" cy="137.238" r="13.921"/>
                        <path style="fill:#010002;" d="M184.973,0C82.975,0,0,82.975,0,184.973s82.975,184.973,184.973,184.973
                            s184.973-82.975,184.973-184.973S286.971,0,184.973,0z M248.622,111.378c14.261,0,25.854,11.6,25.854,25.86
                            s-11.594,25.854-25.854,25.854s-25.854-11.594-25.854-25.854S234.361,111.378,248.622,111.378z M121.33,111.378
                            c14.261,0,25.854,11.6,25.854,25.86s-11.594,25.854-25.854,25.854s-25.86-11.594-25.86-25.854S107.07,111.378,121.33,111.378z
                             M300.336,312.264c0-63.607-51.751-115.357-115.357-115.357c-63.613,0-115.363,51.751-115.363,115.357H57.682
                            c0-70.188,57.103-127.291,127.297-127.291c70.188,0,127.291,57.103,127.291,127.291H300.336z"/>
                    </g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                </svg>
                Positif</h4>
                <strong><p class="card-title text-center mt-3" id="positif">${this._coronaItem.positif}</p></strong>
            </div>
        </div>
    </div>
    <div class="col-md-3">
        <div class="card text-bg-warning p-3 mb-5 shadow-rounded">
            <div class="card-body">
                <h4 class="card-title text-center"><?xml version="1.0" encoding="iso-8859-1"?>
                <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 226.452 226.452" style="enable-background:new 0 0 226.452 226.452;" xml:space="preserve">
                <g>
                    <g>
                        <g>
                            <path d="M113.226,0C58.74,0,14.411,43.405,14.411,96.757c0,36.036,20.92,69.514,53.525,86.017v39.561
                                c0,2.274,1.842,4.117,4.117,4.117h86.463c2.276,0,4.117-1.844,4.117-4.117v-41.766c30.542-17.287,49.408-49.175,49.408-83.812
                                C212.041,43.405,167.712,0,113.226,0z M156.578,174.501c-1.343,0.716-2.179,2.113-2.179,3.633v40.084H76.17v-38.013
                                c0-1.592-0.917-3.042-2.356-3.721c-31.085-14.704-51.169-45.998-51.169-79.727c0-48.811,40.634-88.522,90.581-88.522
                                s90.581,39.711,90.581,88.522C203.807,129.162,185.709,158.953,156.578,174.501z"/>
                            <path d="M104.899,101.552c-1.347-6.942-5.686-13.544-11.897-18.116c-6.409-4.716-14.065-6.65-20.973-5.303
                                c-9.831,1.91-17.149,12.364-19.835,16.771c-5.464,8.946-7.929,18.373-6.598,25.212c0.985,5.087,4.536,11.377,15.826,12.466
                                c1.222,0.119,2.481,0.173,3.76,0.173c5.476,0,11.387-0.979,17.056-2.083c7.121-1.383,13.361-4.869,17.571-9.815
                                C104.452,115.403,106.262,108.546,104.899,101.552z M93.536,115.52c-3.004,3.53-7.575,6.041-12.867,7.071
                                c-6.389,1.241-13.04,2.314-18.46,1.795c-6.642-0.641-8.042-3.311-8.532-5.84c-0.921-4.732,1.255-12.33,5.541-19.352
                                c4.286-7.018,9.931-12.113,14.378-12.979c0.933-0.181,1.886-0.269,2.859-0.269c3.892,0,8.014,1.437,11.668,4.123
                                c4.564,3.359,7.732,8.118,8.693,13.054C97.935,108.871,95.651,113.037,93.536,115.52z"/>
                            <path d="M174.258,94.903c-2.686-4.407-10.004-14.861-19.835-16.771c-6.912-1.355-14.563,0.587-20.973,5.303
                                c-6.212,4.572-10.551,11.174-11.897,18.114c-1.363,6.996,0.446,13.854,5.09,19.308c4.21,4.946,10.45,8.432,17.571,9.815
                                c5.67,1.104,11.58,2.083,17.056,2.083c1.278,0,2.537-0.054,3.76-0.173c11.29-1.089,14.841-7.38,15.826-12.464
                                C182.187,113.276,179.722,103.85,174.258,94.903z M172.774,118.548c-0.49,2.527-1.89,5.197-8.532,5.838
                                c-5.42,0.515-12.07-0.555-18.46-1.795c-5.292-1.029-9.863-3.54-12.867-7.071c-2.115-2.483-4.399-6.648-3.281-12.4
                                c0.961-4.933,4.129-9.692,8.693-13.051c4.568-3.361,9.859-4.76,14.527-3.854c4.447,0.866,10.092,5.961,14.378,12.979
                                C171.52,106.216,173.695,113.813,172.774,118.548z"/>
                            <path d="M92.639,185.279c-2.276,0-4.117,1.844-4.117,4.117v20.587c0,2.274,1.842,4.117,4.117,4.117
                                c2.275,0,4.117-1.844,4.117-4.117v-20.587C96.757,187.122,94.915,185.279,92.639,185.279z"/>
                            <path d="M133.812,185.279c-2.276,0-4.117,1.844-4.117,4.117v20.587c0,2.274,1.842,4.117,4.117,4.117s4.117-1.844,4.117-4.117
                                v-20.587C137.93,187.122,136.088,185.279,133.812,185.279z"/>
                            <path d="M113.226,185.279c-2.276,0-4.117,1.844-4.117,4.117v20.587c0,2.274,1.842,4.117,4.117,4.117
                                c2.275,0,4.117-1.844,4.117-4.117v-20.587C117.343,187.122,115.502,185.279,113.226,185.279z"/>
                            <rect x="100.874" y="135.871" width="16" height="16"/>
                            <rect x="117.343" y="135.871" width="16" height="16"/>
                        </g>
                    </g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                </svg>
                 Dirawat</h4>
                <strong><p class="card-title text-center mt-3" id="dirawat">${this._coronaItem.dirawat}</p></strong>
            </div>
        </div>
    </div>
    <div class="col-md-3">
        <div class="card text-bg-success p-3 mb-5 shadow-rounded">
            <div class="card-body">
                <h4 class="card-title text-center"><i class="fa fa-smile-beam"></i> Sembuh</h4>
                <strong><p class="card-title text-center mt-3" id="sembuh">${this._coronaItem.sembuh}</p></strong>
            </div>
        </div>
    </div>
    <div class="col-md-3">
        <div class="card text-bg-danger p-3 mb-5 shadow-rounded">
            <div class="card-body">
                <h4 class="card-title text-center"><?xml version="1.0" encoding="iso-8859-1"?>
                <!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 456.18 456.18" style="enable-background:new 0 0 456.18 456.18;" xml:space="preserve">
                <g>
                    <path d="M227.528,40.118h1.125c8.052,0,16.11,0.765,23.952,2.275c0.479,0.092,0.956,0.137,1.426,0.137
                        c3.524,0,6.666-2.495,7.357-6.084c0.782-4.067-1.88-8-5.947-8.782c-8.774-1.689-17.787-2.545-26.788-2.545h-1.125
                        c-4.142,0-7.5,3.358-7.5,7.5S223.386,40.118,227.528,40.118z"/>
                    <path d="M278.37,50.304c35.151,15.094,62.158,46.067,72.243,82.852c0.914,3.331,3.935,5.519,7.229,5.519
                        c0.656,0,1.323-0.087,1.987-0.269c3.994-1.095,6.345-5.221,5.25-9.216c-11.281-41.147-41.484-75.79-80.792-92.669
                        c-3.807-1.634-8.217,0.126-9.851,3.932C272.804,44.259,274.564,48.669,278.37,50.304z"/>
                    <path d="M357.526,179.363c-7.558-25.544-34.49-40.175-60.032-32.616l-49.159,14.547c-3.972,1.175-6.239,5.348-5.063,9.32
                        c6.125,20.701,19.944,37.777,38.914,48.083c12.012,6.526,25.176,9.843,38.474,9.843c7.702,0,15.45-1.113,23.042-3.36h0.001
                        c6.726-1.99,12.272-6.48,15.621-12.642c3.348-6.163,4.096-13.26,2.105-19.985L357.526,179.363z M346.142,205.376
                        c-1.436,2.642-3.813,4.567-6.697,5.42c0,0,0,0,0,0c-16.86,4.989-34.65,3.113-50.1-5.28c-13.229-7.188-23.384-18.42-29.16-32.086
                        l41.564-12.3c17.614-5.21,36.182,4.877,41.394,22.489l3.902,13.189C347.898,199.691,347.578,202.734,346.142,205.376z"/>
                    <path d="M112.479,225.179c7.593,2.247,15.339,3.36,23.042,3.36c13.297,0,26.463-3.317,38.474-9.843
                        c18.969-10.306,32.789-27.382,38.914-48.083c1.175-3.972-1.092-8.144-5.064-9.32l-49.16-14.547
                        c-12.371-3.661-25.432-2.285-36.771,3.875c-11.338,6.16-19.599,16.368-23.261,28.741l-3.903,13.189
                        C90.644,206.435,98.596,221.071,112.479,225.179z M109.135,196.808l3.903-13.189c2.524-8.531,8.22-15.57,16.038-19.817
                        c4.951-2.69,10.376-4.057,15.857-4.057c3.174,0,6.368,0.459,9.497,1.385l41.565,12.3c-5.777,13.666-15.932,24.898-29.161,32.086
                        c-15.449,8.394-33.241,10.268-50.1,5.28C110.783,209.034,107.374,202.76,109.135,196.808z"/>
                    <path d="M234.585,196.907c-1.34-2.321-3.816-3.75-6.496-3.75c-2.68,0-5.155,1.429-6.495,3.75l-17.333,30.021
                        c-3.292,5.703-3.292,12.512,0,18.215c3.293,5.703,9.19,9.107,15.775,9.107h16.106c6.586,0,12.483-3.405,15.775-9.108
                        s3.292-12.512-0.001-18.215L234.585,196.907z M238.928,237.643c-0.347,0.601-1.17,1.608-2.785,1.608h-16.106
                        c-1.615,0-2.438-1.007-2.784-1.607c-0.347-0.601-0.808-1.817,0-3.215l10.837-18.771l10.837,18.771c0,0,0,0,0,0
                        C239.735,235.827,239.274,237.043,238.928,237.643z"/>
                    <path d="M90.022,305.444c10.796,0,20.978-3.781,29.016-10.595c6.761,10.018,10.417,21.858,10.417,34.073v9.941
                        c0,4.142,3.358,7.5,7.5,7.5h182.27c4.143,0,7.5-3.358,7.5-7.5v-9.941c0-12.215,3.656-24.055,10.416-34.073
                        c8.039,6.814,18.221,10.595,29.017,10.595c24.815,0,45.004-20.188,45.004-45.004c0-13.278-5.898-25.847-15.955-34.36v-59.526
                        c0-44.597-17.397-86.495-48.987-117.977C314.769,17.237,273.042,0,228.708,0c-0.395,0-0.792,0-1.185,0
                        c-44.383,0-86.114,17.239-117.562,48.578c-31.59,31.481-48.988,73.379-48.988,117.976v59.526
                        c-10.056,8.512-15.955,21.082-15.955,34.36C45.019,285.255,65.207,305.444,90.022,305.444z M72.789,235.888
                        c1.997-1.405,3.185-3.693,3.185-6.134v-63.2c0-40.581,15.831-78.705,44.576-107.351C149.167,30.684,187.136,15,227.576,15
                        c0.179,0,0.362,0,0.541,0.001c40.556-0.134,78.771,15.557,107.514,44.202c28.745,28.646,44.576,66.771,44.576,107.352v63.2
                        c0,2.441,1.188,4.729,3.185,6.134c7.996,5.626,12.771,14.805,12.771,24.552c0,16.544-13.46,30.004-30.004,30.004
                        c-9.323,0-17.961-4.234-23.699-11.618c-1.367-1.759-3.446-2.819-5.673-2.893c-2.194-0.072-4.371,0.845-5.853,2.511
                        c-12.387,13.923-19.208,31.849-19.208,50.478v2.441h-25.872v-25.541c0-4.142-3.357-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v25.541h-35.264
                        v-25.541c0-4.142-3.357-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v25.541h-35.263v-25.541c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5
                        v25.541h-25.872v-2.441c0-18.629-6.822-36.555-19.208-50.478c-1.481-1.665-3.618-2.582-5.853-2.511
                        c-2.227,0.074-4.305,1.134-5.673,2.893c-5.738,7.383-14.376,11.618-23.699,11.618c-16.544,0-30.003-13.459-30.003-30.004
                        C60.019,250.692,64.793,241.514,72.789,235.888z"/>
                    <path d="M422.116,364.534c0-22.744-18.504-41.248-41.248-41.248s-41.248,18.504-41.248,41.248c0,0.15,0.001,0.3,0.003,0.45H116.558
                        c0.001-0.15,0.002-0.3,0.002-0.45c0-22.744-18.504-41.248-41.249-41.248c-22.744,0-41.248,18.504-41.248,41.248
                        c0,9.175,3.072,18.031,8.602,25.199c-5.53,7.167-8.602,16.024-8.602,25.199c0,22.744,18.504,41.248,41.248,41.248
                        c22.745,0,41.249-18.504,41.249-41.248c0-0.15-0.001-0.3-0.002-0.449h223.064c-0.002,0.15-0.003,0.3-0.003,0.449
                        c0,22.744,18.504,41.248,41.248,41.248s41.248-18.504,41.248-41.248c0-9.175-3.072-18.031-8.602-25.199
                        C419.043,382.565,422.116,373.709,422.116,364.534z M398.318,395.332c5.591,4.983,8.798,12.126,8.798,19.6
                        c0,14.473-11.774,26.248-26.248,26.248s-26.248-11.775-26.248-26.248c0-2.065,0.25-4.146,0.743-6.185
                        c0.541-2.235,0.027-4.595-1.395-6.402c-1.423-1.807-3.595-2.862-5.895-2.862H108.106c-2.3,0-4.472,1.055-5.894,2.862
                        c-1.422,1.807-1.937,4.167-1.396,6.402c0.494,2.04,0.744,4.121,0.744,6.185c0,14.473-11.775,26.248-26.249,26.248
                        c-14.473,0-26.248-11.775-26.248-26.248c0-7.473,3.207-14.617,8.798-19.599c1.597-1.423,2.51-3.46,2.51-5.599
                        c0-2.139-0.913-4.176-2.51-5.599c-5.591-4.983-8.798-12.126-8.798-19.599c0-14.473,11.775-26.248,26.248-26.248
                        c14.474,0,26.249,11.775,26.249,26.248c0,2.063-0.25,4.144-0.745,6.187c-0.54,2.235-0.026,4.594,1.396,6.401
                        c1.422,1.807,3.594,2.862,5.894,2.862h239.967c2.3,0,4.472-1.055,5.895-2.862c1.422-1.807,1.936-4.167,1.396-6.402
                        c-0.494-2.039-0.744-4.12-0.744-6.186c0-14.473,11.774-26.248,26.248-26.248s26.248,11.775,26.248,26.248
                        c0,7.473-3.207,14.617-8.798,19.6c-1.597,1.423-2.51,3.46-2.51,5.599S396.721,393.909,398.318,395.332z"/>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                </svg>
                 Meninggal</h4>
                <strong><p class="card-title text-center mt-3" id="meninggal">${this._coronaItem.meninggal}</p></strong>
            </div>
        </div>
    </div>
    </div>
    </div>`;
    }
}

customElements.define('live-report', sembuh);