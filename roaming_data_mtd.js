// ============================================================
// ROAMING PERFORMANCE — DATA MTD
// Cara update: tambah baris baru di bawah (sebelum tanda `;). Pisahkan kolom dengan TAB.
// Dashboard otomatis memakai tanggal terbaru di DATA_MTD, dan membandingkannya
// dengan tanggal yang sama tahun lalu (mis. 2026-11-02 vs 2025-11-02).
//
// DATA_DAILY   — revenue harian, Bn IDR. Untuk tahun lalu cukup isi rev_total.
// DATA_MTD     — angka kumulatif MTD per tanggal. Kolom sama dengan DATA_MONTHLY.
//                Isi 2 baris per update: tanggal ini & tanggal yang sama tahun lalu.
// DATA_MTD_REV — revenue kumulatif MTD per Channel & Country, Bn IDR.
//
// Catatan: baris 29 Sep s.d. 2 Nov dikonversi dari snapshot lama (angka 1 desimal),
// jadi sebagian angkanya hasil hitung balik. Update berikutnya isi dengan angka asli.
// ============================================================
const DATA_DAILY = `
date	rev_total	rev_pack	rev_payu
2025-11-01	3.57	2.99	0.58
2025-11-02	3.53	2.95	0.57
2025-11-03	3.79	3.18	0.60
2025-11-04	3.69	3.09	0.60
2025-11-05	3.77	3.18	0.59
2025-11-06	3.81	3.21	0.60
2025-11-07	3.44	2.79	0.66
2025-11-08	3.66	3.05	0.61
2025-11-09	3.74	3.15	0.59
2025-11-10	3.99	3.37	0.62
2025-11-11	3.59	3.01	0.58
2025-11-12	3.76	3.17	0.59
2025-11-13	3.69	3.10	0.59
2025-11-14	3.46	2.83	0.62
2025-11-15	3.73	3.14	0.59
2025-11-16	3.63	3.09	0.54
2025-11-17	3.93	3.33	0.61
2025-11-18	3.59	3.01	0.58
2025-11-19	3.64	3.06	0.58
2025-11-20	3.68	3.10	0.58
2025-11-21	3.45	2.85	0.60
2025-11-22	3.54	2.96	0.59
2025-11-23	3.44	2.89	0.56
2025-11-24	3.66	3.07	0.59
2025-11-25	3.52	2.96	0.56
2025-11-26	3.46	2.91	0.55
2025-11-27	3.44	2.89	0.54
2025-11-28	3.08	2.47	0.61
2025-11-29	3.32	2.72	0.61
2025-11-30	3.17	2.58	0.59
2026-11-01	3.60	3.24	0.36
2026-11-02	3.79	3.38	0.41
2026-11-03	3.64	3.22	0.41
`;

const DATA_MTD = `
date	rev_halo_pack	rev_halo_payu	rev_simpati_pack	rev_simpati_payu	user_total	user_pack	user_payu	arpu_total	arpu_pack	arpu_payu	ticket_total	ticket_halo	ticket_simpati	traveler	active_roamer	active_package
2025-11-03	2.47	0.97	6.66	0.78	79.33	42.49	43.90	137.15	214.77	39.96	204.85	214.72	201.42	99.56	42.55	35.16
2026-11-03	2.45	0.67	7.39	0.52	65.02	43.05	27.75	169.65	228.60	42.85	219.64	224.57	218.05	89.54	44.45	34.27
`;

const DATA_MTD_REV = `
date	dimensi	nama	rev
2025-11-03	Channel	MyTelkomsel	6.23
2025-11-03	Channel	DigiPOS	1.42
2025-11-03	Channel	Others	1.49
2025-11-03	Country	Saudi Arabia	3.08
2025-11-03	Country	Malaysia	1.52
2025-11-03	Country	China	1.07
2025-11-03	Country	Singapore	1.04
2025-11-03	Country	Japan	0.68
2026-11-03	Channel	MyTelkomsel	7.05
2026-11-03	Channel	DigiPOS	1.45
2026-11-03	Channel	Others	1.34
2026-11-03	Country	Saudi Arabia	3.23
2026-11-03	Country	Malaysia	1.44
2026-11-03	Country	China	1.31
2026-11-03	Country	Singapore	0.89
2026-11-03	Country	Japan	0.68
`;
