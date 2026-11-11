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
2026-11-08	3.63	3.25	0.39
2026-11-09	3.68	3.29	0.39
2026-11-10	3.75	3.34	0.42
`;

const DATA_MTD = `
date	rev_halo_pack	rev_halo_payu	rev_simpati_pack	rev_simpati_payu	rev_byu_pack	rev_byu_payu	user_total	user_pack	user_payu	arpu_total	arpu_pack	arpu_payu	ticket_total	ticket_halo	ticket_simpati	ticket_byU	traveler	active_roamer	active_package
2025-11-10	8.21	3.31	22.75	2.71	0.39	0.01	235.82	140.75	131.62	156.84	219.99	45.76	203.04	206.28	201.50	229.03	317.27	141.60	120.26
2026-11-10	7.99	2.32	24.17	1.74	0.52	0.01	190.09	136.11	81.37	190.51	236.27	49.87	217.41	220.98	217.26	179.26	270.52	142.22	114.12
`;

const DATA_MTD_REV = `
date	dimensi	nama	rev
2025-11-10	Channel	MyTelkomsel	21.26
2025-11-10	Channel	DigiPOS	4.85
2025-11-10	Channel	Others	4.85
2025-11-10	Country	Saudi Arabia	10.96
2025-11-10	Country	Malaysia	5.05
2025-11-10	Country	China	3.48
2025-11-10	Country	Singapore	3.51
2025-11-10	Country	Japan	2.31
2026-11-10	Channel	MyTelkomsel	22.87
2026-11-10	Channel	DigiPOS	4.89
2026-11-10	Channel	Others	4.40
2026-11-10	Country	Saudi Arabia	11.12
2026-11-10	Country	Malaysia	4.57
2026-11-10	Country	China	4.23
2026-11-10	Country	Singapore	2.95
2026-11-10	Country	Japan	2.13
`;
