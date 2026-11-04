/* ======================================================================
   Roaming Business Performance — DATA SOURCE
   Dipakai oleh: Roaming_Business_Performance_Dashboard_Mobile.html
   Satuan: Bn IDR (miliar rupiah). Pemisah kolom: TAB (bisa paste langsung dari Excel).

   Cara update: tambahkan 1 baris baru di BAWAH tabel DATA_ACTUAL
   (dan DATA_TARGET untuk periode baru). Bulan terakhir di DATA_ACTUAL
   otomatis menjadi periode terbaru di dashboard. File HTML tidak perlu diubah.

   Kolom:
     period        = YYYY-MM
     retail        = Revenue Retail
     inbound       = Revenue Inbound (sebelumnya Tap Out)
     tap_in_cost   = Tap In Cost

   Dihitung otomatis oleh dashboard (jangan diisi):
     Total Revenue = retail + inbound
     Net Roaming   = retail + inbound - tap_in_cost
     Profitability = Net Roaming / retail
   ====================================================================== */

const DATA_TARGET = `
period	retail	inbound	tap_in_cost
2025-01	95.995	24	30.684
2025-02	92.05	24	29.559
2025-03	91.078	24	29.273
2025-04	103.06	24	33.18
2025-05	109.782	24	35.411
2025-06	159.368	24	51.062
2025-07	117.582	24	37.774
2025-08	100.544	24	32.035
2025-09	102.299	24	32.587
2025-10	114.632	24	36.076
2025-11	127.054	24	39.984
2025-12	131.587	24	41.375
2026-01	131.107	26.706	54.803
2026-02	112.538	26.706	47.041
2026-03	110.547	26.706	46.209
2026-04	119.578	26.706	49.984
2026-05	116.374	26.706	48.644
2026-06	150.769	26.706	63.021
2026-07	128.057	26.706	53.528
2026-08	114.46	26.706	47.844
2026-09	121.557	26.706	50.811
2026-10	134.893	26.706	56.385
2026-11	138.467	26.706	57.879
2026-12	161.842	26.706	67.65
`;

const DATA_ACTUAL = `
period	retail	inbound	tap_in_cost
2025-01	115.078	22.713	57.89
2025-02	98.337	29.05	34.442
2025-03	96.217	25.405	41.738
2025-04	103.775	23.551	38.212
2025-05	100.376	34.22	50.846
2025-06	130.159	32.477	79.241
2025-07	109.152	28.427	48.53
2025-08	101.525	32.915	45.45
2025-09	96.822	35.49	46.46
2025-10	104.93	30.469	45.509
2025-11	108.862	35.701	59.92
2025-12	123.639	25.081	48.18
2026-01	127.577	27.093	62.631
2026-02	89.1	27.437	48.205
2026-03	110.729	27.261	58.271
2026-04	89.063	28.329	55.06
2026-05	110.395	39.479	73.48
2026-06	127.496	31.839	62.701
2026-07	110.73	35.018	55.077
2026-08	88.81	36.37	46.17
2026-09	90.76	39.49	51.11
2026-10	105.00	26.10	47.70
`;
