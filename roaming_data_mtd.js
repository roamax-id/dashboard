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
2026-11-04	3.54	3.14	0.40
`;

const DATA_MTD = `
date	rev_halo_pack	rev_halo_payu	rev_simpati_pack	rev_simpati_payu	user_total	user_pack	user_payu	arpu_total	arpu_pack	arpu_payu	ticket_total	ticket_halo	ticket_simpati	traveler	active_roamer	active_package
2025-11-04	3.25	1.30	8.97	1.06	103.44	56.36	57.81	140.89	216.73	40.80	205.03	212.57	202.43	132.67	56.45	47.19
2026-11-04	3.21	0.91	9.77	0.68	83.53	56.44	35.55	174.40	229.91	44.73	218.63	221.97	217.56	118.26	59.43	46.66
`;

const DATA_MTD_REV = `
date	dimensi	nama	rev
2025-11-04	Channel	MyTelkomsel	8.29
2025-11-04	Channel	DigiPOS	1.97
2025-11-04	Channel	Others	1.95
2025-11-04	Country	Saudi Arabia	4.23
2025-11-04	Country	Malaysia	2.04
2025-11-04	Country	China	1.40
2025-11-04	Country	Singapore	1.35
2025-11-04	Country	Japan	0.93
2026-11-04	Channel	MyTelkomsel	9.28
2026-11-04	Channel	DigiPOS	1.92
2026-11-04	Channel	Others	1.78
2026-11-04	Country	Saudi Arabia	4.30
2026-11-04	Country	Malaysia	1.92
2026-11-04	Country	China	1.73
2026-11-04	Country	Singapore	1.19
2026-11-04	Country	Japan	0.89
`;
