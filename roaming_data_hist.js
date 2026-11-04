// ============================================================
// ROAMING PERFORMANCE — DATA HISTORICAL (bulanan)
// Cara update: tambah baris baru di bawah (sebelum tanda `;). Pisahkan kolom dengan TAB
// (copy-paste langsung dari Excel otomatis jadi TAB). Urutan kolom harus sama dengan header.
//
// DATA_MONTHLY — 1 baris per bulan
//   rev_*      : revenue per brand, Bn IDR (Revenue Total/Pack/PAYU dihitung otomatis)
//   user_*     : Roaming User, ribu (k)
//   arpu_*     : ARPU, k IDR            ticket_* : Pack Ticket Size, k IDR
//   traveler, active_roamer, active_package : ribu (k)  (Active Rate & Package Rate dihitung otomatis)
//
// DATA_MONTHLY_REV — revenue per Channel & Country, Bn IDR (1 baris per item per bulan)
// ============================================================
const DATA_MONTHLY = `
period	rev_halo_pack	rev_halo_payu	rev_simpati_pack	rev_simpati_payu	user_total	user_pack	user_payu	arpu_total	arpu_pack	arpu_payu	ticket_total	ticket_halo	ticket_simpati	traveler	active_roamer	active_package
2025-01	23.523	11.721	70.29	8.547	626.295	378.623	346.27	182.151	247.773	58.532	194.76	194.455	194.862	876.916	451.972	356.468
2025-02	20.057	8.433	64.809	7.817	589.226	337.826	333.098	171.608	251.213	48.784	199.387	194.897	200.819	790.883	407.009	317.976
2025-03	27.293	9.475	58.375	7.666	527.461	288.643	314.17	194.914	296.798	54.56	214.357	223.3	210.417	789.823	365.196	268.19
2025-04	24.328	12.004	57.264	7.36	498.608	300.191	281.025	202.474	271.799	68.904	197.513	196.421	197.981	785.75	356.244	279.501
2025-05	25.475	8.645	119.817	8.995	659.768	376.284	370.382	246.955	386.124	47.629	317.937	234.114	344.134	894.877	458.417	349.581
2025-06	20.946	9.402	48.241	8.352	553.309	286.061	344.261	157.128	241.861	51.569	187.364	203.795	181.026	767.019	351.819	259.075
2025-07	19.35	9.546	61.445	7.312	522.366	343.499	259.661	186.944	235.211	64.924	186.508	185.408	186.857	836.71	393.049	314.589
2025-08	16.776	7.662	59.193	7.182	519.959	313.245	278.631	174.654	242.523	53.274	191.983	186.151	193.703	748.938	367.631	287.096
2025-09	20.436	9.083	59.706	7.043	510.426	322.163	277.365	188.603	248.762	58.14	196.392	199.222	195.442	755.113	384.701	295.797
2025-10	22.742	9.732	63.573	7.784	545.286	338.981	290.074	190.416	254.63	60.385	201.259	207.771	199.028	793.057	405.708	311.511
2025-11	23.086	9.577	67.102	8.111	561.97	352.259	294.606	191.962	256.03	60.04	201.376	203.199	200.756	827.45	422.069	325.676
2025-12	34.863	11.526	75.245	9.628	631.464	398.678	334.85	207.87	276.183	63.176	216.642	242.972	206.284	963.837	496.885	367.027
2026-01	24.822	10.442	72.876	7.676	594.823	378.87	304.343	194.706	257.866	59.532	204.707	205.035	204.595	888.785	452.156	351.224
2026-02	17.525	7.151	58.375	6.003	456.333	289.665	232.54	195.152	262.027	56.569	213.293	201.592	217.075	684.834	346.527	266.574
2026-03	28.887	11.303	63.773	7.221	512.537	336.856	262.631	216.929	275.074	70.532	215.608	226.7	210.933	557.715	271.783	197.469
2026-04	18.654	7.821	68.823	5.721	429.334	280.45	211.858	235.291	311.917	63.918	253.667	207.072	270.143	867.307	375.739	247.305
2026-05	23.756	8.375	102.695	6.826	506.498	328.747	250.234	279.67	384.645	60.748	310.732	237.772	334.474	762.041	403.876	307.841
2026-06	21.219	8.401	57.28	6.664	476.067	294.367	249.098	190.709	260.736	59.991	211.283	216.872	209.285	782.761	367.549	274.816
2026-07	18.882	6.49	66.279	6.234	493.848	324.678	237.076	198.208	262.292	53.672	206.231	195.547	209.492	783.761	368.549	275.816
2026-08	16.98	4.73	56.55	5.24	448.64	289.46	216.69	186.118	254.025	46.01	200.229	191.691	202.95	729.516	348.82	264.009
2026-09	19.641	5.972	59.271	5.403	445.186	291.266	215.144	199.919	278.613	48.257	217.996	209.183	218.896	697.295	346.233	264.043
2026-10	23.627	6.905	68.93	5.465	482.336	360.829	229.088	217.538	256.511	53.996	215.724	219.273	214.534	728.5	387.6	301.5
`;

const DATA_MONTHLY_REV = `
period	dimensi	nama	rev
2025-01	Channel	MyTelkomsel	62.584
2025-01	Channel	DigiPOS	15.239
2025-01	Channel	Others	15.99
2025-01	Country	Saudi Arabia	39.443
2025-01	Country	Malaysia	16.985
2025-01	Country	Singapore	12.286
2025-01	Country	China	5.923
2025-01	Country	Japan	8.163
2025-02	Channel	MyTelkomsel	55.246
2025-02	Channel	DigiPOS	15.643
2025-02	Channel	Others	13.977
2025-02	Country	Saudi Arabia	39.154
2025-02	Country	Malaysia	13.906
2025-02	Country	Singapore	9.591
2025-02	Country	China	5.631
2025-02	Country	Japan	5.979
2025-03	Channel	MyTelkomsel	61.693
2025-03	Channel	DigiPOS	9.057
2025-03	Channel	Others	14.919
2025-03	Country	Saudi Arabia	29.197
2025-03	Country	Malaysia	11.436
2025-03	Country	Singapore	13.488
2025-03	Country	China	10.22
2025-03	Country	Japan	8.037
2025-04	Channel	MyTelkomsel	58.087
2025-04	Channel	DigiPOS	9.844
2025-04	Channel	Others	13.661
2025-04	Country	Saudi Arabia	23.19
2025-04	Country	Malaysia	14.112
2025-04	Country	Singapore	14.178
2025-04	Country	China	10.224
2025-04	Country	Japan	7.877
2025-05	Channel	MyTelkomsel	64.782
2025-05	Channel	DigiPOS	60.848
2025-05	Channel	Others	19.662
2025-05	Country	Saudi Arabia	94.282
2025-05	Country	Malaysia	13.382
2025-05	Country	Singapore	10.202
2025-05	Country	China	8.551
2025-05	Country	Japan	6.283
2025-06	Channel	MyTelkomsel	51.328
2025-06	Channel	DigiPOS	5.172
2025-06	Channel	Others	12.687
2025-06	Country	Saudi Arabia	16.078
2025-06	Country	Malaysia	13.633
2025-06	Country	Singapore	10.054
2025-06	Country	China	9.712
2025-06	Country	Japan	6.369
2025-07	Channel	MyTelkomsel	53.004
2025-07	Channel	DigiPOS	13.715
2025-07	Channel	Others	14.075
2025-07	Country	Saudi Arabia	29.041
2025-07	Country	Malaysia	16.673
2025-07	Country	Singapore	10.262
2025-07	Country	China	7.208
2025-07	Country	Japan	4.671
2025-08	Channel	MyTelkomsel	47.695
2025-08	Channel	DigiPOS	15.526
2025-08	Channel	Others	12.749
2025-08	Country	Saudi Arabia	31.004
2025-08	Country	Malaysia	14.315
2025-08	Country	Singapore	8.751
2025-08	Country	China	6.84
2025-08	Country	Japan	4.088
2025-09	Channel	MyTelkomsel	53.532
2025-09	Channel	DigiPOS	13.387
2025-09	Channel	Others	13.223
2025-09	Country	Saudi Arabia	27.654
2025-09	Country	Malaysia	13.909
2025-09	Country	Singapore	10.022
2025-09	Country	China	9.763
2025-09	Country	Japan	5.127
2025-10	Channel	MyTelkomsel	58.924
2025-10	Channel	DigiPOS	13.649
2025-10	Channel	Others	13.741
2025-10	Country	Saudi Arabia	29.692
2025-10	Country	Malaysia	15.041
2025-10	Country	Singapore	10.543
2025-10	Country	China	10.54
2025-10	Country	Japan	6.494
2025-11	Channel	MyTelkomsel	61.488
2025-11	Channel	DigiPOS	14.543
2025-11	Channel	Others	14.157
2025-11	Country	Saudi Arabia	33.007
2025-11	Country	Malaysia	14.752
2025-11	Country	Singapore	10.664
2025-11	Country	China	9.784
2025-11	Country	Japan	6.805
2025-12	Channel	MyTelkomsel	81.879
2025-12	Channel	DigiPOS	11.612
2025-12	Channel	Others	16.616
2025-12	Country	Saudi Arabia	32.032
2025-12	Country	Malaysia	18.782
2025-12	Country	Singapore	13.453
2025-12	Country	China	14.042
2025-12	Country	Japan	10.778
2026-01	Channel	MyTelkomsel	69.682
2026-01	Channel	DigiPOS	14.485
2026-01	Channel	Others	13.53
2026-01	Country	Saudi Arabia	36.399
2026-01	Country	Malaysia	17.52
2026-01	Country	Singapore	10.713
2026-01	Country	China	9.586
2026-01	Country	Japan	8.42
2026-02	Channel	MyTelkomsel	51.955
2026-02	Channel	DigiPOS	13.353
2026-02	Channel	Others	10.592
2026-02	Country	Saudi Arabia	33.358
2026-02	Country	Malaysia	12.137
2026-02	Country	Singapore	7.959
2026-02	Country	China	5.338
2026-02	Country	Japan	5.62
2026-03	Channel	MyTelkomsel	71.22
2026-03	Channel	DigiPOS	8.817
2026-03	Channel	Others	12.623
2026-03	Country	Saudi Arabia	29.387
2026-03	Country	Malaysia	13.957
2026-03	Country	Singapore	10.189
2026-03	Country	China	14.14
2026-03	Country	Japan	9.666
2026-04	Channel	MyTelkomsel	50.267
2026-04	Channel	DigiPOS	26.573
2026-04	Channel	Others	10.637
2026-04	Country	Saudi Arabia	36.885
2026-04	Country	Malaysia	12.431
2026-04	Country	Singapore	8.176
2026-04	Country	China	10.718
2026-04	Country	Japan	6.532
2026-05	Channel	MyTelkomsel	64.245
2026-05	Channel	DigiPOS	47.907
2026-05	Channel	Others	14.299
2026-05	Country	Saudi Arabia	74.288
2026-05	Country	Malaysia	12.425
2026-05	Country	Singapore	8.472
2026-05	Country	China	10.558
2026-05	Country	Japan	6.204
2026-06	Channel	MyTelkomsel	57.936
2026-06	Channel	DigiPOS	9.418
2026-06	Channel	Others	11.145
2026-06	Country	Saudi Arabia	21.498
2026-06	Country	Malaysia	14.822
2026-06	Country	Singapore	9.229
2026-06	Country	China	10.623
2026-06	Country	Japan	5.855
2026-07	Channel	MyTelkomsel	55.779
2026-07	Channel	DigiPOS	17.088
2026-07	Channel	Others	12.293
2026-07	Country	Saudi Arabia	31.029
2026-07	Country	Malaysia	15.172
2026-07	Country	Singapore	9.397
2026-07	Country	China	7.733
2026-07	Country	Japan	4.405
2026-08	Channel	MyTelkomsel	50.4
2026-08	Channel	DigiPOS	12.6
2026-08	Channel	Others	10.5
2026-08	Country	Saudi Arabia	24.402
2026-08	Country	Malaysia	13.065
2026-08	Country	Singapore	8.505
2026-08	Country	China	7.886
2026-08	Country	Japan	3.499
2026-09	Channel	MyTelkomsel	55.263
2026-09	Channel	DigiPOS	12.261
2026-09	Channel	Others	11.388
2026-09	Country	Saudi Arabia	24.438
2026-09	Country	Malaysia	12.709
2026-09	Country	Singapore	8.585
2026-09	Country	China	11.077
2026-09	Country	Japan	4.962
2026-10	Channel	MyTelkomsel	65.548
2026-10	Channel	DigiPOS	14.138
2026-10	Channel	Others	12.87
2026-10	Country	Saudi Arabia	29.933
2026-10	Country	Malaysia	13.983
2026-10	Country	Singapore	12.761
2026-10	Country	China	9.096
2026-10	Country	Japan	6.708
`;
