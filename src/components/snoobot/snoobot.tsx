'use client';
import styles from "@/components/snoobot/snoobot.module.css"


/**
 * 
 * @param isGlowing "Whether Snoobot's eye is glowing. Defaults to false"
 * @param passthrough "Set any attributes as normally set to a button element"
 * @returns A white-text button that lights up when hovered.
 */
export default function Snoobot(
    { children, isGlowing = true }:
        { children?: React.ReactNode, isGlowing?: boolean }
) {
    const animateGlow: string = isGlowing ? styles.glow : styles.unglow;
    return (
        /** TODO: Optimize SVG*/
        <svg width="989" height="978" viewBox="0 0 989 978" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="glow_gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(46.5 46.5) rotate(90) scale(114.5)">
                    <stop stopColor="#FFD600" />
                    <stop offset="1" stopColor="#FF4400" stopOpacity="0" />
                </radialGradient>
            </defs><path d="M282.887 89.9459C304.956 89.9459 322.847 70.9301 322.847 47.473C322.847 24.0158 304.956 5 282.887 5C260.817 5 242.927 24.0158 242.927 47.473C242.927 70.9301 260.817 89.9459 282.887 89.9459Z" fill="white" /><path d="M202.697 247.243V351.621C175.958 351.16 154.413 327.96 154.413 299.432C154.413 270.904 175.958 247.703 202.697 247.243Z" fill="white" /><path d="M784.614 247.226C811.737 247.226 833.732 270.603 833.732 299.432C833.732 328.261 811.737 351.638 784.614 351.638H783.782V247.226H784.614Z" fill="white" /><path d="M783.781 247.226V351.638H601.464C628.587 351.638 650.582 328.261 650.582 299.432C650.582 270.603 628.587 247.226 601.464 247.226H783.781Z" fill="white" /><path d="M783.782 144.583V247.226H601.465H388.345H203.531H202.698V144.583H783.782Z" fill="white" /><path d="M388.346 247.226H601.465C574.342 247.226 552.348 270.603 552.348 299.432C552.348 328.261 574.342 351.638 601.465 351.638H552.348H437.463H388.346C415.468 351.638 437.463 328.261 437.463 299.432C437.463 270.603 415.468 247.226 388.346 247.226Z" fill="white" /><path d="M203.531 247.226H388.345C361.223 247.226 339.228 270.603 339.228 299.432C339.228 328.261 361.223 351.638 388.345 351.638H203.531C203.248 351.638 202.981 351.638 202.698 351.621V247.243C202.981 247.226 203.248 247.226 203.531 247.226Z" fill="white" /><path d="M437.463 351.638V445.433H383.617H327.573L327.007 446.105V539.015V539.227H202.698V351.638H203.531H388.345H437.463Z" fill="white" /><path d="M383.616 539.015V539.21L348.285 539.227H327.006V539.015V446.105L327.572 445.433H383.616V446.105V539.015Z" fill="white" /><path d="M552.347 351.638V445.433H494.072H437.462V351.638H552.347Z" fill="white" /><path d="M437.463 445.433V539.157L383.617 539.21V539.015V446.105V445.433H437.463Z" fill="white" /><path d="M494.072 446.318V539.121L437.462 539.157V445.433H494.072V446.318Z" fill="white" /><path d="M552.348 445.433V539.086L494.073 539.121V446.318V445.433H552.348Z" fill="white" /><path d="M608.391 539.015V539.033L552.347 539.086V445.433H608.391V446.105V539.015Z" fill="white" /><path d="M663.337 539.015V539.227H640.926C640.893 539.086 640.893 539.015 640.893 539.015L608.392 539.033V539.015V446.105V445.433H663.337V446.105V539.015Z" fill="white" /><path d="M663.336 445.433H608.391H552.347V351.638H601.465H783.782V539.227H663.336V539.015V446.105V445.433Z" fill="white" /><path d="M946.069 503.674C945.902 504.594 945.736 505.497 945.569 506.381L944.986 506.258C908.356 498.86 882.849 504.276 878.203 505.408C878.037 505.444 877.904 505.479 877.804 505.514C877.587 505.39 877.388 505.231 877.188 505.09C854.178 488.791 838.244 456.21 837.444 418.409H870.927C872.992 451.998 889.992 478.172 910.654 478.172C931.367 478.172 948.383 451.928 950.398 418.268H983.881V418.409C983.082 455.148 968.03 486.95 946.069 503.674Z" fill="white" /><path d="M686.912 688.467C688.078 688.785 737.828 702.43 717.815 752.371C672.194 769.926 638.178 775.483 638.178 775.483L635.98 775.111C639.71 749.999 642.024 724.533 643.373 700.094C648.168 699.226 664.651 695.899 686.912 688.467Z" fill="white" /><path d="M758.224 656.276C764.367 658.152 806.042 672.663 789.126 718.074C764.334 732.762 739.742 743.965 717.814 752.371C737.827 702.43 688.077 688.785 686.912 688.467C707.341 681.653 732.633 671.354 758.224 656.276Z" fill="white" /><path d="M826.012 613.59C826.012 613.59 877.049 626.757 857.777 676.344C838.91 692.678 818.913 706.464 799.051 718.074C816.182 672.663 773.98 658.151 767.758 656.276C787.502 644.808 807.414 630.544 825.455 612.953L826.012 613.59Z" fill="white" /><path d="M900.931 614.44L901.497 614.864C885.646 638.543 867.015 658.877 847.118 676.344C866.149 626.757 815.75 613.59 815.75 613.59L815.2 612.953C831.001 597.344 845.353 579.116 856.825 557.845C860.921 558.499 907.108 566.799 900.931 614.44Z" fill="white" /><path d="M878.22 505.514C879.635 505.196 919.229 496.436 934.796 545.421L935.396 545.651C926.838 571.4 915.216 594.389 901.496 614.864L900.93 614.44C907.108 566.799 860.921 558.499 856.825 557.844C865.399 542.006 872.376 524.468 877.188 505.09C877.387 505.231 877.587 505.39 877.804 505.514C877.904 505.479 878.037 505.443 878.203 505.408L878.22 505.514Z" fill="white" /><path d="M878.203 505.408C882.848 504.276 908.356 498.86 944.986 506.258L945.569 506.381C942.972 520.15 939.542 533.228 935.396 545.651L934.796 545.421C919.229 496.436 879.635 505.196 878.22 505.514L878.203 505.408Z" fill="white" /><path d="M110.274 505.408C105.645 504.276 80.1375 498.86 43.5076 506.258L42.9248 506.381C42.7583 505.497 42.5918 504.594 42.4253 503.674C20.4474 486.95 5.39588 455.148 4.59668 418.409C4.59668 418.356 4.59668 418.321 4.59668 418.268H37.9632H38.0797C40.111 451.928 57.1273 478.172 77.8232 478.172C98.4858 478.172 115.485 451.998 117.55 418.409H151.033C150.234 456.21 134.3 488.808 111.29 505.09C111.09 505.249 110.89 505.39 110.69 505.514C110.59 505.479 110.44 505.444 110.274 505.408Z" fill="white" /><path d="M43.5076 506.258C80.1375 498.86 105.645 504.276 110.274 505.408L110.257 505.514C108.842 505.196 69.2484 496.436 53.6807 545.421L53.098 545.634C48.9522 533.21 45.5222 520.132 42.9248 506.381L43.5076 506.258Z" fill="white" /><path d="M87.0136 614.847C73.2774 594.371 61.6391 571.383 53.0977 545.633L53.6804 545.421C69.2481 496.436 108.842 505.196 110.257 505.514L110.274 505.408C110.44 505.443 110.59 505.479 110.69 505.514C110.89 505.39 111.089 505.249 111.289 505.09C116.101 524.468 123.077 542.006 131.652 557.844C127.573 558.499 81.3859 566.799 87.5464 614.44L87.0136 614.847Z" fill="white" /><path d="M173.294 612.953L172.728 613.59C172.728 613.59 122.329 626.757 141.376 676.344C121.463 658.877 102.832 638.525 87.0143 614.847L87.5471 614.44C81.3866 566.799 127.574 558.499 131.653 557.845C143.141 579.116 157.494 597.344 173.294 612.953Z" fill="white" /><path d="M230.27 656.276C224.193 658.116 182.418 672.628 199.368 718.091C179.738 706.482 160.007 692.678 141.376 676.344C122.328 626.757 172.728 613.59 172.728 613.59L173.294 612.953C191.11 630.544 210.773 644.808 230.27 656.276Z" fill="white" /><path d="M301.583 688.467C301.583 688.467 250.401 701.846 270.68 752.388C248.769 743.965 224.16 732.78 199.368 718.091C182.419 672.628 224.193 658.116 230.271 656.276C255.862 671.354 281.153 681.653 301.583 688.467Z" fill="white" /><path d="M351.732 775.253L350.3 775.483C350.3 775.483 316.284 769.926 270.68 752.388C250.4 701.846 301.582 688.467 301.582 688.467C323.327 695.74 339.578 699.067 344.772 700.04C345.988 724.533 348.152 750.07 351.732 775.253Z" fill="white" /><path d="M486.397 972.805H299.268V971.036L388.645 902.424C410.14 942.632 441.358 970.275 486.397 972.805Z" fill="white" /><path d="M688.145 970.876V972.805H500.134C545.422 970.239 576.89 942.296 598.635 901.734L688.145 970.876Z" fill="white" /><path d="M643.372 700.094C642.024 724.533 639.709 749.999 635.979 775.111C629.153 821.301 617.598 866.34 598.634 901.734C576.889 942.295 545.42 970.239 500.133 972.805H486.396C441.358 970.274 410.139 942.632 388.644 902.424C369.68 866.959 358.308 821.69 351.731 775.253C348.152 750.07 345.987 724.533 344.772 700.04C340.493 613.183 348.285 539.227 348.285 539.227H437.462H494.072H552.347H640.924C641.341 543.598 648.084 615.802 643.372 700.094Z" fill="white" />
            <g transform="matrix(0.990636, 0, 0, 1.003607, 343.63736, 251.583969)">
                <ellipse cx="45.125" cy="47.675" rx="45.125" ry="47.675" fill="#FF4400" />
                <g style={{ mixBlendMode: "color-dodge" }}>
                    <circle className={animateGlow} cx="46.5" cy="46.5" r="114.5" fill="url(#glow_gradient)" />
                </g>
            </g>
            <g transform="matrix(0.990636, 0, 0, 1.003607, 556.763245, 251.583969)">
                <ellipse cx="45.125" cy="47.675" rx="45.125" ry="47.675" fill="#FF4400" />
                <g style={{ mixBlendMode: "color-dodge" }}>
                    <circle className={animateGlow} cx="46.5" cy="46.5" r="114.5" fill="url(#glow_gradient)" />
                </g>
            </g><path d="M348.285 539.227C348.285 539.227 340.493 613.183 344.772 700.04C345.987 724.533 348.152 750.07 351.731 775.253C358.308 821.69 369.68 866.959 388.644 902.424C410.139 942.632 441.358 970.275 486.396 972.805C488.644 972.929 490.925 973 493.239 973C495.57 973 497.868 972.929 500.133 972.805C545.42 970.239 576.889 942.296 598.634 901.734C617.598 866.34 629.153 821.301 635.979 775.111C639.709 749.999 642.024 724.533 643.372 700.094C648.084 615.802 641.341 543.598 640.924 539.227C640.891 539.086 640.891 539.015 640.891 539.015L608.391 539.033L552.347 539.086L494.072 539.121L437.462 539.156L383.616 539.209L348.285 539.227Z" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M500.666 143L457.216 7" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M322.914 39L461.165 10" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M282.618 89.9459C304.687 89.9459 322.578 70.9301 322.578 47.473C322.578 24.0158 304.687 5 282.618 5C260.548 5 242.658 24.0158 242.658 47.473C242.658 70.9301 260.548 89.9459 282.618 89.9459Z" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M693.872 972.805H688.144H500.133H486.396H299.267H294.272" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M598.234 901.415L598.633 901.734L688.144 970.876" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M389.177 902.017L388.644 902.424L299.267 971.036" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M784.613 351.638C811.736 351.638 833.731 328.261 833.731 299.432C833.731 270.603 811.736 247.226 784.613 247.226" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M203.53 247.226C203.246 247.226 202.98 247.226 202.697 247.243C175.957 247.703 154.412 270.904 154.412 299.432C154.412 327.96 175.957 351.16 202.697 351.621C202.98 351.638 203.246 351.638 203.53 351.638" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M783.781 351.638V539.227H663.336H640.925H552.347H494.072H437.462H348.285H327.006H202.698V351.638V351.621V247.243V247.226V144.583H783.781V247.226V351.638Z" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M601.465 351.638C628.591 351.638 650.582 328.265 650.582 299.432C650.582 270.599 628.591 247.226 601.465 247.226C574.338 247.226 552.347 270.599 552.347 299.432C552.347 328.265 574.338 351.638 601.465 351.638Z" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M388.345 351.638C415.472 351.638 437.463 328.265 437.463 299.432C437.463 270.599 415.472 247.226 388.345 247.226C361.219 247.226 339.228 270.599 339.228 299.432C339.228 328.265 361.219 351.638 388.345 351.638Z" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M783.781 247.226H601.464H388.345H203.53H202.698" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M783.781 351.638H601.464H552.347H437.462H388.345H203.53H202.698" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M437.462 351.638V445.433V539.156V539.227" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M552.347 351.638V445.433V539.086V539.227" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M327.572 445.433H383.616H437.462H494.072H552.347H608.391H663.335H663.902" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M494.073 446.318V539.121V539.227" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M608.391 446.105V539.015" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M663.335 446.105V539.015" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M383.617 446.105V539.015" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M327.006 446.105V539.015" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M346.554 700.359C346.554 700.359 345.938 700.253 344.773 700.04C339.578 699.067 323.327 695.74 301.583 688.467C281.153 681.653 255.862 671.353 230.271 656.276C210.774 644.808 191.11 630.544 173.295 612.953C157.494 597.344 143.141 579.116 131.653 557.844C123.078 542.006 116.102 524.468 111.29 505.089C111.173 504.629 111.057 504.152 110.94 503.691" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M350.3 775.483C350.3 775.483 316.284 769.926 270.679 752.388C248.768 743.965 224.159 732.78 199.368 718.091C179.737 706.482 160.007 692.678 141.376 676.344C121.462 658.877 102.831 638.525 87.0137 614.847C73.2775 594.371 61.6392 571.383 53.0977 545.634C48.9519 533.21 45.5219 520.132 42.9245 506.381C42.758 505.497 42.5915 504.594 42.425 503.674C42.3251 503.196 42.2419 502.7 42.1587 502.205" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M0 417.938L6.74064 417.938L36.4942 417.938L36.5982 417.938L42.4628 417.938" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M117.633 417.259C117.617 417.648 117.583 418.02 117.55 418.409C115.485 451.998 98.4858 478.172 77.8232 478.172C57.1273 478.172 40.111 451.928 38.0797 418.268C38.0464 417.932 38.0298 417.595 38.0132 417.259" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M117.7 417.401C117.7 417.401 117.7 417.418 117.7 417.435" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M117.7 417.348C117.7 417.364 117.7 417.381 117.7 417.398" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M37.9638 418.269C37.9638 417.95 37.9472 417.631 37.9307 417.312" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M4.59618 418.411C4.59618 418.357 4.59618 418.322 4.59618 418.269C4.59618 417.968 4.57959 417.666 4.57959 417.365" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M44.2398 505.019C43.6237 504.576 43.0243 504.134 42.4249 503.674C20.4469 486.95 5.39539 455.149 4.59619 418.409" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M151.066 417.471C151.066 417.79 151.049 418.091 151.033 418.409C150.233 456.21 134.299 488.808 111.289 505.09C111.089 505.249 110.89 505.39 110.69 505.514C110.49 505.674 110.29 505.798 110.09 505.939" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M113.563 417.938L119.335 417.938L148.498 417.938L155.038 417.938" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M172.727 613.59C172.727 613.59 122.328 626.757 141.376 676.344C141.509 676.733 141.675 677.123 141.825 677.512" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M87.5471 614.44C81.3866 566.799 127.574 558.499 131.653 557.845C131.836 557.827 131.936 557.809 131.936 557.809" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M110.291 505.532C110.291 505.532 110.274 505.532 110.257 505.514C108.842 505.196 69.2484 496.436 53.6807 545.421" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M111.04 505.603C111.04 505.603 110.923 505.567 110.69 505.514C110.59 505.479 110.44 505.444 110.274 505.408C105.645 504.276 80.1372 498.86 43.5073 506.258" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M301.582 688.467C301.582 688.467 250.4 701.846 270.68 752.388" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M231.003 656.063C231.003 656.063 230.754 656.134 230.271 656.276C224.193 658.116 182.419 672.628 199.368 718.091C199.601 718.711 199.851 719.348 200.101 719.985" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M641.941 700.359C641.941 700.359 642.424 700.27 643.373 700.094C648.168 699.226 664.651 695.899 686.912 688.467C707.342 681.653 732.633 671.353 758.224 656.276C777.721 644.808 797.385 630.544 815.2 612.953C831.001 597.344 845.353 579.116 856.825 557.844C865.4 542.006 872.376 524.468 877.188 505.089C877.305 504.629 877.421 504.152 877.538 503.691" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M638.177 775.483C638.177 775.483 672.193 769.926 717.814 752.371C739.742 743.965 764.334 732.762 789.126 718.074C808.739 706.464 828.486 692.678 847.118 676.344C867.014 658.877 885.645 638.543 901.496 614.864C915.216 594.389 926.838 571.401 935.396 545.651C939.542 533.228 942.971 520.15 945.569 506.381C945.735 505.497 945.902 504.594 946.068 503.674C946.168 503.196 946.251 502.7 946.335 502.205" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M686.896 688.467C688.078 688.785 737.828 702.43 717.814 752.371V752.388" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M757.475 656.063C757.475 656.063 757.741 656.134 758.224 656.276C764.368 658.152 806.043 672.663 789.126 718.074C788.893 718.711 788.643 719.348 788.394 719.985" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M815.75 613.59C815.75 613.59 866.149 626.757 847.118 676.344C846.985 676.733 846.818 677.123 846.669 677.512" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M900.931 614.44C907.108 566.799 860.921 558.499 856.825 557.845C856.642 557.827 856.542 557.809 856.542 557.809" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M877.438 505.603C877.438 505.603 877.554 505.567 877.804 505.514C877.904 505.479 878.037 505.444 878.203 505.408C882.849 504.276 908.356 498.86 944.986 506.258" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M878.187 505.532C878.187 505.532 878.203 505.532 878.22 505.514C879.635 505.196 919.229 496.436 934.796 545.421" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M875.425 417.938L869.57 417.938L840.06 417.938L833.456 417.938" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M837.411 417.471C837.411 417.79 837.428 418.091 837.444 418.409C838.244 456.21 854.178 488.791 877.188 505.09C877.388 505.231 877.588 505.39 877.804 505.514C878.004 505.674 878.204 505.798 878.403 505.939" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M944.253 505.019C944.869 504.576 945.469 504.134 946.068 503.674C968.03 486.95 983.081 455.149 983.88 418.409" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M988 417.938L981.323 417.938L951.812 417.938L946.031 417.938" stroke="black" strokeWidth="9" strokeMiterlimit="10" /><path d="M870.845 417.259C870.861 417.648 870.895 418.02 870.928 418.409C872.992 451.998 889.992 478.172 910.655 478.172C931.367 478.172 948.383 451.928 950.398 418.268C950.431 417.932 950.448 417.595 950.465 417.259" stroke="black" strokeWidth="9" strokeMiterlimit="10" /></svg>
    )
}
