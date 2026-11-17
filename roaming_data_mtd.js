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
2026-11-11	3.74	3.34	0.41
2026-11-12	3.70	3.29	0.41
2026-11-13	3.29	2.84	0.44
2026-11-14	3.60	3.19	0.41
2026-11-15	3.56	3.16	0.40
2026-11-16	3.66	3.23	0.43
`;

const DATA_MTD = `
date	rev_halo_pack	rev_halo_payu	rev_simpati_pack	rev_simpati_payu	rev_byu_pack	rev_byu_payu	user_total	user_pack	user_payu	arpu_total	arpu_pack	arpu_payu	ticket_total	ticket_halo	ticket_simpati	ticket_byU	traveler	active_roamer	active_package
2025-11-16	12.84	5.27	36.46	4.28	0.60	0.02	347.67	217.42	196.30	169.25	226.76	48.61	203.11	205.71	201.87	226.34	490.13	220.22	186.19
2026-11-16	12.86	3.77	38.02	2.79	0.84	0.01	284.04	210.57	123.49	202.22	241.63	53.13	215.01	218.17	215.02	175.62	426.45	225.73	179.76
`;

const DATA_MTD_REV = `
date	dimensi	nama	rev
2025-11-16	Channel	MyTelkomsel	33.86
2025-11-16	Channel	DigiPOS	7.70
2025-11-16	Channel	Others	7.74
2025-11-16	Country	Saudi Arabia	17.88
2025-11-16	Country	Malaysia	7.92
2025-11-16	Country	China	5.49
2025-11-16	Country	Singapore	5.67
2025-11-16	Country	Japan	3.67
2026-11-16	Channel	MyTelkomsel	36.21
2026-11-16	Channel	DigiPOS	7.65
2026-11-16	Channel	Others	7.02
2026-11-16	Country	Saudi Arabia	17.25
2026-11-16	Country	Malaysia	7.39
2026-11-16	Country	China	6.76
2026-11-16	Country	Singapore	4.80
2026-11-16	Country	Japan	3.48
`;
