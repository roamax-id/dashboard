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
2025-11-02	1.61	0.63	4.34	0.52	54.10	27.92	30.11	131.09	212.83	38.17	204.38	217.41	199.94	62.02	27.08	21.45
2026-11-02	1.66	0.44	4.96	0.34	44.68	29.14	18.81	165.46	227.09	41.18	219.94	225.65	218.10	57.41	29.19	22.06
`;

const DATA_MTD_REV = `
date	dimensi	nama	rev
2025-11-02	Channel	MyTelkomsel	4.05
2025-11-02	Channel	DigiPOS	0.92
2025-11-02	Channel	Others	0.97
2025-11-02	Country	Saudi Arabia	1.98
2025-11-02	Country	Malaysia	1.00
2025-11-02	Country	China	0.69
2025-11-02	Country	Singapore	0.67
2025-11-02	Country	Japan	0.43
2026-11-02	Channel	MyTelkomsel	4.76
2026-11-02	Channel	DigiPOS	0.95
2026-11-02	Channel	Others	0.91
2026-11-02	Country	Saudi Arabia	2.14
2026-11-02	Country	Malaysia	0.94
2026-11-02	Country	China	0.90
2026-11-02	Country	Singapore	0.57
2026-11-02	Country	Japan	0.46
`;
