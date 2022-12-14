var svgMapDatacovid = {
    data: {
      cases: {
        name: '通報數',
        format: '{0} 件',
        thousandSeparator: ','
      },
      death: {
        name: '死亡人數',
        thousandSeparator: ','
      },

      density: {
        name: '死亡率',
        format: '{0} %' ,
        thousandSeparator: ',',
        thresholdMax: 280,
        thresholdMin: 20
      }

    },
    
  applyData: 'death',
  values: {
    AF: { cases: 207214, death: 7845, density: 3.79 },
    AL: { cases: 332553, death: 3594, density: 1.08 },
    DZ: { cases: 271179, death: 6881, density: 2.54 },
    AS: { cases: 8266, death: 34, density: 0.41 },
    AD: { cases: 47686, death: 165, density: 0.35 },
    AO: { cases: 104973, death: 1928, density: 1.84 },
    AI: { cases: 3904, death: 12, density: 0.31 },
    AG: { cases: 9106, death: 146, density: 1.6 },
    AR: { cases: 9829236, death: 130080, density: 1.32 },
    AM: { cases: 445881, death: 8712, density: 1.95 },
    AW: { cases: 43752, death: 280, density: 0.64 },
    AU: { cases: 10938096, death: 15718, density: 0.14 },
    AT: { cases: 5668157, death: 21348, density: 0.38 },
    AZ: { cases: 825737, death: 10002, density: 1.21 },
    BS: { cases: 37491, death: 833, density: 2.22 },
    BH: { cases: 696614, death: 1536, density: 0.22 },
    BD: { cases: 2037011, death: 29438, density: 1.45 },
    BB: { cases: 104416, death: 567, density: 0.54 },
    BY: { cases: 994037, death: 7118, density: 0.72 },
    BE: { cases: 4668248, death: 33228, density: 0.71 },
    BZ: { cases: 69675, death: 688, density: 0.99 },
    BJ: { cases: 27982, death: 163, density: 0.58 },
    BM: { cases: 18557, death: 152, density: 0.82 },
    BT: { cases: 62524, death: 21, density: 0.03 },
    BO: { cases: 1140832, death: 22277, density: 1.95 },
    XA: { cases: 9767, death: 32, density: 0.33 },
    BA: { cases: 400868, death: 16221, density: 4.05 },
    BW: { cases: 327471, death: 2786, density: 0.85 },
    BR: { cases: 36044441, death: 692461, density: 1.92 },
    VG: { cases: 7305, death: 64, density: 0.88 },
    BN: { cases: 266819, death: 146, density: 0.05 },
    BG: { cases: 1290967, death: 38089, density: 2.95 },
    BF: { cases: 22006, death: 395, density: 1.79 },
    BI: { cases: 51722, death: 15, density: 0.03 },
    CV: { cases: 63173, death: 412, density: 0.65 },
    KH: { cases: 138467, death: 3056, density: 2.21 },
    CM: { cases: 123993, death: 1965, density: 1.58 },
    CA: { cases: 4457366, death: 48645, density: 1.09 },
    KY: { cases: 31472, death: 37, density: 0.12 },
    CF: { cases: 15310, death: 113, density: 0.74 },
    TD: { cases: 7649, death: 194, density: 2.54 },
    CL: { cases: 4997056, death: 62963, density: 1.26 },
    CN: { cases: 10167676, death: 31585, density: 0.31 },
    CO: { cases: 6330409, death: 141996, density: 2.24 },
    KM: { cases: 8979, death: 160, density: 1.78 },
    CG: { cases: 24775, death: 386, density: 1.56 },
    CK: { cases: 6607, death: 1, density: 0.02 },
    CR: { cases: 1161687, death: 9072, density: 0.78 },
    CI: { cases: 87912, death: 830, density: 0.94 },
    HR: { cases: 1260837, death: 17492, density: 1.39 },
    CU: { cases: 1111757, death: 8530, density: 0.77 },
    CW: { cases: 45707, death: 299, density: 0.65 },
    CY: { cases: 628509, death: 1255, density: 0.2 },
    CZ: { cases: 4576689, death: 42063, density: 0.92 },
    KP: { cases: 0, death: 0, density: 0 },
    CD: { cases: 94969, death: 1461, density: 1.54 },
    DK: { cases: 3379211, death: 7691, density: 0.23 },
    DJ: { cases: 15690, death: 189, density: 1.2 },
    DM: { cases: 15760, death: 74, density: 0.47 },
    DO: { cases: 655540, death: 4384, density: 0.67 },
    EC: { cases: 1031449, death: 35913, density: 3.48 },
    EG: { cases: 515493, death: 24801, density: 4.81 },
    SV: { cases: 201785, death: 4230, density: 2.1 },
    GQ: { cases: 17089, death: 183, density: 1.07 },
    ER: { cases: 10189, death: 103, density: 1.01 },
    EE: { cases: 611291, death: 2837, density: 0.46 },
    SZ: { cases: 73992, death: 1422, density: 1.92 },
    ET: { cases: 495348, death: 7572, density: 1.53 },
    FK: { cases: 1923, death: 0, density: 0.0 },
    FO: { cases: 34658, death: 28, density: 0.08 },
    FJ: { cases: 68702, death: 881, density: 1.28 },
    FI: { cases: 1438205, death: 7933, density: 0.55 },
    FR: { cases: 37988187, death: 157364, density: 0.41 },
    GF: { cases: 97526, death: 411, density: 0.42 },
    PF: { cases: 77910, death: 649, density: 0.83 },
    GA: { cases: 48973, death: 306, density: 0.62 },
    GM: { cases: 12586, death: 372, density: 2.96 },
    GE: { cases: 1808820, death: 16897, density: 0.93 },
    DE: { cases: 37177845, death: 160611, density: 0.43 },
    GH: { cases: 171038, death: 1461, density: 0.85 },
    GI: { cases: 20252, death: 110, density: 0.54 },
    GR: { cases: 5548487, death: 34779, density: 0.63 },
    GL: { cases: 11971, death: 21, density: 0.18 },
    GD: { cases: 19644, death: 238, density: 1.21 },
    GP: { cases: 198608, death: 997, density: 0.5 },
    GU: { cases: 49851, death: 411, density: 0.82 },
    GT: { cases: 1190610, death: 19987, density: 1.68 },
    GG: { cases: 33910, death: 66, density: 0.19 },
    GN: { cases: 38191, death: 465, density: 1.22 },
    GW: { cases: 8848, death: 176, density: 1.99 },
    GY: { cases: 71963, death: 1286, density: 1.79 },
    HT: { cases: 33893, death: 860, density: 2.54 },
    VA: { cases: 26, death: 0, density: 0.0 },
    HN: { cases: 463685, death: 11063, density: 2.39 },
    HU: { cases: 2181419, death: 48439, density: 2.22 },
    IS: { cases: 207974, death: 229, density: 0.11 },
    IN: { cases: 44676678, death: 530690, density: 1.19 },
    ID: { cases: 6713879, death: 160488, density: 2.39 },
    IR: { cases: 7560629, death: 144672, density: 1.91 },
    IQ: { cases: 2464997, death: 25369, density: 1.03 },
    IE: { cases: 1687668, death: 8293, density: 0.49 },
    IM: { cases: 38008, death: 116, density: 0.31 },
    IL: { cases: 4754934, death: 11988, density: 0.25 },
    IT: { cases: 24884034, death: 183138, density: 0.74 },
    JM: { cases: 152758, death: 3461, density: 2.27 },
    JP: { cases: 27765782, death: 54365, density: 0.2 },
    JE: { cases: 65130, death: 146, density: 0.22 },
    JO: { cases: 1746997, death: 14122, density: 0.81 },
    KZ: { cases: 1491711, death: 19057, density: 1.28 },
    KE: { cases: 342336, death: 5688, density: 1.66 },
    KI: { cases: 3430, death: 13, density: 0.38 },
    XK: { cases: 272200, death: 3192, density: 1.17 },
    KW: { cases: 662747, death: 2570, density: 0.39 },
    KG: { cases: 206557, death: 2991, density: 1.45 },
    LA: { cases: 217586, death: 757, density: 0.35 },
    LV: { cases: 972561, death: 6143, density: 0.63 },
    LB: { cases: 1221791, death: 10743, density: 0.88 },
    LS: { cases: 34490, death: 706, density: 2.05 },
    LR: { cases: 8043, death: 294, density: 3.66 },
    LY: { cases: 507121, death: 6437, density: 1.27 },
    LI: { cases: 21228, death: 87, density: 0.41 },
    LT: { cases: 1285267, death: 9466, density: 0.74 },
    LU: { cases: 311746, death: 1178, density: 0.38 },
    MG: { cases: 67684, death: 1415, density: 2.09 },
    MW: { cases: 88123, death: 2685, density: 3.05 },
    MY: { cases: 5021242, death: 36824, density: 0.73 },
    MV: { cases: 185666, death: 311, density: 0.17 },
    ML: { cases: 32767, death: 743, density: 2.27 },
    MT: { cases: 116212, death: 813, density: 0.7 },
    MH: { cases: 15547, death: 17, density: 0.11 },
    MQ: { cases: 224826, death: 1076, density: 0.48 },
    MR: { cases: 63423, death: 997, density: 1.57 },
    MU: { cases: 289980, death: 1039, density: 0.36 },
    YT: { cases: 41969, death: 187, density: 0.45 },
    MX: { cases: 7196485, death: 330834, density: 4.6 },
    FM: { cases: 22069, death: 58, density: 0.26 },
    MC: { cases: 15897, death: 65, density: 0.41 },
    MN: { cases: 1007266, death: 2136, density: 0.21 },
    ME: { cases: 284464, death: 2790, density: 0.98 },
    MS: { cases: 1403, death: 8, density: 0.57 },
    MA: { cases: 1271017, death: 16294, density: 1.28 },
    MZ: { cases: 230918, death: 2229, density: 0.97 },
    MM: { cases: 633590, death: 19489, density: 3.08 },
    NA: { cases: 170164, death: 4080, density: 2.4 },
    NR: { cases: 4621, death: 1, density: 0.02 },
    NP: { cases: 1000962, death: 12019, density: 1.2 },
    NL: { cases: 8559116, death: 22953, density: 0.27 },
    NC: { cases: 79162, death: 314, density: 0.4 },
    NZ: { cases: 2027981, death: 2288, density: 0.11 },
    NI: { cases: 15365, death: 245, density: 1.59 },
    NE: { cases: 9473, death: 314, density: 3.31 },
    NG: { cases: 266381, death: 3155, density: 1.18 },
    NU: { cases: 335, death: 0, density: 0.0 },
    MK: { cases: 345402, death: 9608, density: 2.78 },
    MP: { cases: 13236, death: 41, density: 0.31 },
    NO: { cases: 1473504, death: 4670, density: 0.32 },
    PS: { cases: 703228, death: 5708, density: 0.81 },
    OM: { cases: 399154, death: 4628, density: 1.16 },
    PK: { cases: 1575486, death: 30635, density: 1.94 },
    PW: { cases: 5955, death: 9, density: 0.15 },
    PA: { cases: 1020961, death: 8554, density: 0.84 },
    PG: { cases: 46663, death: 669, density: 1.43 },
    PY: { cases: 720204, death: 19655, density: 2.73 },
    PE: { cases: 4430160, death: 217960, density: 4.92 },
    PH: { cases: 4059369, death: 65172, density: 1.61 },
    PN: { cases: 4, death: 0, density: 0.0 },
    PL: { cases: 6364708, death: 118467, density: 1.86 },
    PT: { cases: 5554058, death: 25714, density: 0.46 },
    PR: { cases: 1042874, death: 5499, density: 0.53 },
    QA: { cases: 487321, death: 685, density: 0.14 },
    KR: { cases: 28534558, death: 31674, density: 0.11 },
    MD: { cases: 596100, death: 11929, density: 2.0 },
    RE: { cases: 486659, death: 906, density: 0.19 },
    RO: { cases: 3305048, death: 67341, density: 2.04 },
    RU: { cases: 21750711, death: 393277, density: 1.81 },
    RW: { cases: 132920, death: 1467, density: 1.1 },
    XC: { cases: 737, death: 2, density: 0.27 },
    BL: { cases: 5382, death: 5, density: 0.09 },
    SH: { cases: 2166, death: 0, density: 0.0 },
    KN: { cases: 6560, death: 46, density: 0.7 },
    LC: { cases: 29741, death: 409, density: 1.38 },
    MF: { cases: 12104, death: 46, density: 0.38 },
    PM: { cases: 3316, death: 2, density: 0.06 },
    VC: { cases: 9521, death: 118, density: 1.24 },
    WS: { cases: 15982, death: 29, density: 0.18 },
    SM: { cases: 22813, death: 120, density: 0.53 },
    ST: { cases: 6279, death: 77, density: 1.23 },
    SA: { cases: 826667, death: 9502, density: 1.15 },
    SN: { cases: 88896, death: 1968, density: 2.21 },
    RS: { cases: 2438130, death: 17480, density: 0.72 },
    SC: { cases: 50355, death: 172, density: 0.34 },
    SL: { cases: 7760, death: 125, density: 1.61 },
    SG: { cases: 2193890, death: 1710, density: 0.08 },
    XB: { cases: 1212, death: 5, density: 0.41 },
    SX: { cases: 10988, death: 89, density: 0.81 },
    SK: { cases: 1858531, death: 20797, density: 1.12 },
    SI: { cases: 1297794, death: 8708, density: 0.67 },
    SB: { cases: 24575, death: 153, density: 0.62 },
    SO: { cases: 27300, death: 1361, density: 4.99 },
    ZA: { cases: 4046603, death: 102550, density: 2.53 },
    SS: { cases: 18368, death: 138, density: 0.75 },
    ES: { cases: 13651239, death: 116658, density: 0.85 },
    LK: { cases: 671838, death: 16814, density: 2.5 },
    SD: { cases: 63686, death: 4994, density: 7.84 },
    SR: { cases: 81581, death: 1393, density: 1.71 },
    SE: { cases: 2665176, death: 21627, density: 0.81 },
    CH: { cases: 4365587, death: 13801, density: 0.32 },
    SY: { cases: 57423, death: 3163, density: 5.51 },
    TJ: { cases: 17786, death: 125, density: 0.7 },
    TH: { cases: 4718908, death: 33505, density: 0.71 },
    GB: { cases: 24135084, death: 198937, density: 0.82 },
    TL: { cases: 23386, death: 138, density: 0.59 },
    TG: { cases: 39339, death: 290, density: 0.74 },
    TK: { cases: 5, death: 0, density: 0.0 },
    TO: { cases: 16211, death: 12, density: 0.07 },
    TT: { cases: 185882, death: 4277, density: 2.3 },
    TN: { cases: 1147477, death: 29279, density: 2.55 },
    TR: { cases: 17004677, death: 101419, density: 0.6 },
    TM: { cases: 0, death: 0, density: 0 },
    TC: { cases: 6479, death: 36, density: 0.56 },
    TV: { cases: 2779, death: 0, density: 0.0 },
    UG: { cases: 169715, death: 3630, density: 2.14 },
    UA: { cases: 5354738, death: 110766, density: 2.07 },
    AE: { cases: 1046359, death: 2348, density: 0.22 },
    TZ: { cases: 42111, death: 845, density: 2.01 },
    US: { cases: 99027628, death: 1080010, density: 1.09 },
    VI: { cases: 23721, death: 127, density: 0.54 },
    UY: { cases: 1002988, death: 7552, density: 0.75 },
    UZ: { cases: 249217, death: 1637, density: 0.66 },
    VU: { cases: 12013, death: 14, density: 0.12 },
    VE: { cases: 549548, death: 5830, density: 1.06 },
    VN: { cases: 11523567, death: 43181, density: 0.37 },
    WF: { cases: 3415, death: 7, density: 0.2 },
    YE: { cases: 11945, death: 2159, density: 18.07 },
    ZM: { cases: 333746, death: 4019, density: 1.2 },
    ZW: { cases: 259981, death: 5637, density: 2.17 },
    TW: { cases: 8699400 , death: 15099, density: 0.17}
      }
  };
  