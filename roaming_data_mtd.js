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
2026-11-01	3.63	3.26	0.36
2026-11-02	3.83	3.42	0.41
2026-11-03	3.68	3.26	0.42
2026-11-04	3.58	3.18	0.40
2026-11-05	3.70	3.27	0.43
2026-11-06	3.54	3.09	0.45
2026-11-07	3.66	3.25	0.40
2026-11-08	3.64	3.25	0.39
2026-11-09	3.68	3.29	0.39
2026-11-10	3.75	3.34	0.42
2026-11-11	3.74	3.34	0.41
2026-11-12	3.70	3.29	0.41
2026-11-13	3.32	2.88	0.44
2026-11-14	3.65	3.24	0.41
2026-11-15	3.62	3.22	0.40
2026-11-16	3.77	3.34	0.43
2026-11-17	3.69	3.28	0.41
2026-11-18	3.56	3.12	0.44
2026-11-19	3.73	3.25	0.48
2026-11-20	3.16	2.72	0.44
2026-11-21	3.46	3.02	0.44
2026-11-22	3.58	3.18	0.40
2026-11-23	3.70	3.24	0.46
2026-11-24	3.60	3.18	0.42
2026-11-25	3.63	3.19	0.43
`;

const DATA_MTD = `
date	rev_halo_pack	rev_halo_payu	rev_simpati_pack	rev_simpati_payu	rev_byu_pack	rev_byu_payu	user_total	user_pack	user_payu	arpu_total	arpu_pack	arpu_payu	ticket_total	ticket_halo	ticket_simpati	ticket_byU	traveler	active_roamer	active_package
2025-11-25	19.59	8.14	56.94	6.64	0.92	0.02	501.10	328.94	284.99	182.23	232.65	51.89	202.78	204.08	202.00	225.95	725.42	332.33	279.42
2026-11-25	19.78	6.00	59.05	4.50	1.33	0.01	419.85	318.92	188.70	212.75	247.19	55.59	214.14	214.77	214.98	175.91	642.53	344.43	271.97
`;

const DATA_MTD_REV = `
date	dimensi	nama	rev
2025-11-25	Channel	MyTelkomsel	52.13
2025-11-25	Channel	DigiPOS	12.40
2025-11-25	Channel	Others	11.99
2025-11-25	Country	Saudi Arabia	28.27
2025-11-25	Country	Malaysia	12.45
2025-11-25	Country	China	8.35
2025-11-25	Country	Singapore	8.78
2025-11-25	Country	Japan	5.67
2026-11-25	Channel	MyTelkomsel	55.70
2026-11-25	Channel	DigiPOS	12.21
2026-11-25	Channel	Others	10.92
2026-11-25	Country	Saudi Arabia	27.73
2026-11-25	Country	Malaysia	11.46
2026-11-25	Country	China	10.49
2026-11-25	Country	Singapore	7.44
2026-11-25	Country	Japan	5.39
`;
