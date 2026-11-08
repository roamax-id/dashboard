// ============================================================
// ROAMING PERFORMANCE — DATA MTD
// Cara update: ganti / tambah baris di bawah (sebelum tanda `;). Pisahkan kolom dengan TAB
// (copy-paste langsung dari Excel otomatis jadi TAB). Urutan kolom harus sama dengan header.
// Dashboard otomatis memakai tanggal terbaru di DATA_MTD, dan membandingkannya
// dengan tanggal yang sama tahun lalu (mis. 2026-11-05 vs 2025-11-05).
//
// DATA_DAILY   — revenue harian, Bn IDR: rev_total, rev_pack, rev_payu.
// DATA_MTD     — angka kumulatif MTD per tanggal. Isi 2 baris per update:
//                tanggal ini & tanggal yang sama tahun lalu.
//                rev_*    : revenue per brand (Halo, SIMPATI, byU), Bn IDR
//                           (Revenue Total/Pack/PAYU dihitung otomatis)
//                user_*   : Roaming User, ribu (k)    arpu_* : ARPU, k IDR
//                ticket_* : Pack Ticket Size, k IDR (Halo, SIMPATI, byU)
//                traveler, active_roamer, active_package : ribu (k)
//                (Active Rate & Package Rate dihitung otomatis)
// DATA_MTD_REV — revenue kumulatif MTD per Channel & Country, Bn IDR.
// ============================================================
const DATA_DAILY = `
date	rev_total	rev_pack	rev_payu
2025-11-01	3.60	3.03	0.58
2025-11-02	3.56	2.99	0.57
2025-11-03	3.83	3.22	0.61
2025-11-04	3.74	3.13	0.61
2025-11-05	3.81	3.22	0.59
2025-11-06	3.85	3.24	0.60
2025-11-07	3.48	2.82	0.66
2025-11-08	3.71	3.10	0.61
2025-11-09	3.78	3.19	0.59
2025-11-10	4.03	3.41	0.62
2025-11-11	3.63	3.05	0.58
2025-11-12	3.79	3.21	0.59
2025-11-13	3.73	3.13	0.59
2025-11-14	3.49	2.86	0.62
2025-11-15	3.76	3.17	0.60
2025-11-16	3.66	3.12	0.54
2025-11-17	3.97	3.36	0.61
2025-11-18	3.62	3.05	0.58
2025-11-19	3.68	3.10	0.58
2025-11-20	3.72	3.14	0.58
2025-11-21	3.49	2.88	0.61
2025-11-22	3.58	2.99	0.59
2025-11-23	3.48	2.92	0.56
2025-11-24	3.69	3.11	0.59
2025-11-25	3.56	3.00	0.57
2025-11-26	3.50	2.95	0.56
2025-11-27	3.48	2.93	0.55
2025-11-28	3.11	2.50	0.61
2025-11-29	3.36	2.75	0.61
2025-11-30	3.21	2.62	0.59
2026-11-01	3.64	3.27	0.36
2026-11-02	3.83	3.42	0.41
2026-11-03	3.68	3.26	0.42
2026-11-04	3.58	3.18	0.40
2026-11-05	3.70	3.27	0.43
2026-11-06	3.54	3.09	0.45
2026-11-07	3.66	3.25	0.40
`;

const DATA_MTD = `
date	rev_halo_pack	rev_halo_payu	rev_simpati_pack	rev_simpati_payu	rev_byu_pack	rev_byu_payu	user_total	user_pack	user_payu	arpu_total	arpu_pack	arpu_payu	ticket_total	ticket_halo	ticket_simpati	ticket_byU	traveler	active_roamer	active_package
2025-11-07	5.76	2.31	15.63	1.89	0.27	0.01	172.46	99.62	96.19	148.40	214.70	43.72	201.91	206.28	199.93	228.58	196.33	86.17	73.22
2026-11-07	5.50	1.63	16.94	1.24	0.34	0.00	140.59	97.41	60.71	180.00	230.36	47.25	216.94	219.02	216.35	213.05	183.04	97.78	78.26
`;

const DATA_MTD_REV = `
date	dimensi	nama	rev
2025-11-07	Channel	MyTelkomsel	14.77
2025-11-07	Channel	DigiPOS	3.24
2025-11-07	Channel	Others	3.38
2025-11-07	Country	Saudi Arabia	7.46
2025-11-07	Country	Malaysia	3.60
2025-11-07	Country	China	2.38
2025-11-07	Country	Singapore	2.41
2025-11-07	Country	Japan	1.60
2026-11-07	Channel	MyTelkomsel	16.00
2026-11-07	Channel	DigiPOS	3.37
2026-11-07	Channel	Others	3.07
2026-11-07	Country	Saudi Arabia	7.74
2026-11-07	Country	Malaysia	3.25
2026-11-07	Country	China	2.88
2026-11-07	Country	Singapore	2.05
2026-11-07	Country	Japan	1.48
`;
