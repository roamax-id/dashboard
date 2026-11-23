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
`;

const DATA_MTD = `
date	rev_halo_pack	rev_halo_payu	rev_simpati_pack	rev_simpati_payu	rev_byu_pack	rev_byu_payu	user_total	user_pack	user_payu	arpu_total	arpu_pack	arpu_payu	ticket_total	ticket_halo	ticket_simpati	ticket_byU	traveler	active_roamer	active_package
2025-11-22	17.42	7.21	50.19	5.87	0.82	0.02	454.28	293.47	258.22	177.62	230.37	50.66	202.44	204.10	201.53	226.12	650.96	297.11	250.19
2026-11-22	17.44	5.26	51.93	3.92	1.17	0.01	376.17	282.82	168.14	208.82	245.30	54.59	213.97	215.74	214.45	175.13	572.55	305.66	241.31
`;

const DATA_MTD_REV = `
date	dimensi	nama	rev
2025-11-22	Channel	MyTelkomsel	46.22
2025-11-22	Channel	DigiPOS	10.78
2025-11-22	Channel	Others	10.61
2025-11-22	Country	Saudi Arabia	24.86
2025-11-22	Country	Malaysia	11.01
2025-11-22	Country	China	7.30
2025-11-22	Country	Singapore	7.83
2025-11-22	Country	Japan	5.04
2026-11-22	Channel	MyTelkomsel	49.20
2026-11-22	Channel	DigiPOS	10.57
2026-11-22	Channel	Others	9.60
2026-11-22	Country	Saudi Arabia	24.07
2026-11-22	Country	Malaysia	10.11
2026-11-22	Country	China	9.25
2026-11-22	Country	Singapore	6.58
2026-11-22	Country	Japan	4.74
`;
