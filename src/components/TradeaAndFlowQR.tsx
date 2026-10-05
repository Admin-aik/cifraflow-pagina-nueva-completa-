import React, { useState } from 'react';
import { 
  TrendingUp, 
  ShieldCheck, 
  QrCode, 
  AlertTriangle, 
  BarChart3, 
  DollarSign, 
  RefreshCw, 
  ArrowUpRight, 
  ArrowDownRight, 
  Sparkles, 
  CheckCircle2, 
  Lock, 
  ArrowUp, 
  ExternalLink 
} from 'lucide-react';
import { MARKET_TICKERS } from '../data/mockData';

export const TradeaAndFlowQR: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tradea' | 'flowqr'>('tradea');
  const [selectedTicker, setSelectedTicker] = useState(MARKET_TICKERS[0]);
  const [simulatedShares, setSimulatedShares] = useState(10);
  const [vesAmount, setVesAmount] = useState<number>(428); // 10 USD approx

  const bcvRate = 42.80;
  const usdEquivalent = (vesAmount / bcvRate).toFixed(2);

  return (
    <section id="tradea" className="py-24 relative bg-[#050a26]/90 backdrop-blur-xl border-y border-purple-500/30 text-white overflow-hidden">
      
      {/* Background Accent Lines */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-400/40 text-cyan-300 text-xs font-bold tracking-wider uppercase">
            <BarChart3 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Simuladores Educativos Bimonetarios</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            <a
              href="https://tradea.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 hover:from-cyan-500 hover:via-teal-500 hover:to-emerald-500 text-white shadow-xl shadow-cyan-500/25 transition-all transform hover:-translate-y-1 active:translate-y-0 group cursor-pointer"
            >
              <span>Tradea Junior & Flow QR</span>
              <ExternalLink className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
            </a>
          </h2>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            Aprende sobre el Mercado de Valores de Caracas (BVC) y pagos bimonetarios con herramientas interactivas de simulación libres de riesgo financiero real.
          </p>
        </div>

        {/* Scam-Free Pedagogical Guarantee Badge */}
        <div className="mb-10 max-w-4xl mx-auto bg-amber-950/40 border border-amber-500/40 p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row items-center gap-4 text-left shadow-lg text-white">
          <div className="p-3 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 shrink-0">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <div className="text-xs font-black uppercase text-amber-300 tracking-wider flex items-center gap-2">
              <span>Garantía Pedagógica Anti-Esquemas Piramidales</span>
              <ShieldCheck className="w-4 h-4 text-cyan-300" />
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
              Educación objetiva y rigurosa. <strong className="text-white font-bold">Cifra Flow prohíbe explícitamente cualquier recomendación de inversión especulativa, esquemas Ponzi o promesas de enriquecimiento rápido ("get-rich-quick schemes")</strong>. Todas las simulaciones utilizan saldos académicos virtuales.
            </p>
          </div>
        </div>

        {/* Main Interface Block */}
        <div className="bg-slate-900/95 rounded-3xl border border-purple-400/40 p-6 sm:p-8 shadow-2xl space-y-8 backdrop-blur-xl text-white">
          
          {/* Top Switcher Tabs */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-purple-500/20 pb-6">
            
            <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-2xl border border-purple-500/30 w-full sm:w-auto">
              <button
                onClick={() => setActiveTab('tradea')}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  activeTab === 'tradea'
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <TrendingUp className="w-4 h-4 text-cyan-300" />
                <span>Simulador Tradea Junior (BVC)</span>
              </button>

              <button
                onClick={() => setActiveTab('flowqr')}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  activeTab === 'flowqr'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <QrCode className="w-4 h-4 text-pink-300" />
                <span>Cobro Flow QR Bimonetario</span>
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-300">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-mono">Simulación Activa v2.4</span>
            </div>
          </div>

          {/* TAB 1: TRADEA JUNIOR BVC SIMULATOR */}
          {activeTab === 'tradea' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Tickers Sidebar */}
              <div className="lg:col-span-4 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between">
                  <span>Mercado de Valores Simulado:</span>
                  <RefreshCw className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
                </div>

                <div className="space-y-2">
                  {MARKET_TICKERS.map((ticker) => {
                    const isSelected = selectedTicker.symbol === ticker.symbol;
                    return (
                      <button
                        key={ticker.symbol}
                        onClick={() => setSelectedTicker(ticker)}
                        className={`w-full p-3.5 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-cyan-950/60 border-cyan-400 shadow-md ring-1 ring-cyan-400/50 text-white'
                            : 'bg-slate-950/70 border-purple-500/20 hover:bg-slate-950 hover:border-purple-400/50 text-slate-200'
                        }`}
                      >
                        <div>
                          <div className="text-xs font-black text-white flex items-center gap-1.5">
                            {ticker.symbol}
                            {ticker.type === 'bvc' && (
                              <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-900/60 text-cyan-300 font-mono font-bold border border-blue-500/40">
                                BVC
                              </span>
                            )}
                          </div>
                          <div className="text-[10px] text-slate-400">{ticker.name}</div>
                        </div>

                        <div className="text-right">
                          <div className="text-xs font-mono font-bold text-white">
                            {ticker.price}
                          </div>
                          <div className={`text-[10px] font-mono font-bold flex items-center justify-end ${
                            ticker.isPositive ? 'text-emerald-400' : 'text-rose-400'
                          }`}>
                            {ticker.isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                            <span>{ticker.change}</span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Trade Details & Simulator Box */}
              <div className="lg:col-span-8 bg-slate-950/80 rounded-2xl border border-purple-400/40 p-6 space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-purple-500/20">
                  <div>
                    <div className="text-xs font-mono text-cyan-300 font-bold uppercase">Activo Bursátil</div>
                    <h3 className="font-display font-black text-2xl text-white mt-0.5">
                      {selectedTicker.name} ({selectedTicker.symbol})
                    </h3>
                  </div>

                  <div className="text-right">
                    <div className="text-xs text-slate-400 font-medium">Cotización Actual</div>
                    <div className="text-2xl font-mono font-black text-cyan-300">
                      {selectedTicker.price}
                    </div>
                  </div>
                </div>

                {/* Simulated Order Form */}
                <div className="space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Simulación de Compra de Acciones con Saldo XP:
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-200">Cantidad de Acciones a Simular</label>
                      <input
                        type="number"
                        min={1}
                        max={100}
                        value={simulatedShares}
                        onChange={(e) => setSimulatedShares(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-full mt-1.5 bg-slate-900 border border-purple-400/40 rounded-xl px-3.5 py-2.5 text-white font-mono text-sm focus:border-cyan-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-200">Total Simulado (VES)</label>
                      <div className="w-full mt-1.5 bg-slate-900 border border-purple-500/30 rounded-xl px-3.5 py-2.5 text-cyan-300 font-mono text-sm font-bold">
                        {simulatedShares} × {selectedTicker.price}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-400/30 text-xs text-slate-200">
                    💡 <strong className="text-white">Regla de Riesgo:</strong> Enseña a diversificar el portafolio escolar y calcular dividendos en bolívares y dólares sin especulación.
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: FLOW QR BIMONETARY SIMULATOR */}
          {activeTab === 'flowqr' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold uppercase text-pink-300 tracking-wider">
                  Calculadora Oficial Tasa BCV
                </span>
                <h3 className="font-display font-black text-2xl text-white">
                  Generador de Cobro Flow QR
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                  Simula la creación de un código QR bimonetario con cálculo automático de IGTF y tipo de cambio oficial del Banco Central de Venezuela.
                </p>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="text-xs font-bold text-slate-200">Monto a Cobrar (VES)</label>
                    <input
                      type="number"
                      value={vesAmount}
                      onChange={(e) => setVesAmount(parseFloat(e.target.value) || 0)}
                      className="w-full mt-1.5 bg-slate-950 border border-purple-400/40 rounded-xl px-3.5 py-2.5 text-white font-mono text-base focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-purple-500/30 text-xs space-y-1">
                    <div className="flex justify-between text-slate-400">
                      <span>Tasa Oficial BCV:</span>
                      <span className="font-mono font-bold text-white">Bs. {bcvRate.toFixed(2)} / USD</span>
                    </div>
                    <div className="flex justify-between text-cyan-300 font-bold">
                      <span>Equivalente en Dólares:</span>
                      <span className="font-mono text-sm">${usdEquivalent} USD</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 flex flex-col items-center justify-center p-8 bg-slate-950/80 rounded-2xl border border-purple-400/40 text-center space-y-4">
                <div className="p-4 bg-slate-900 rounded-2xl shadow-[0_0_25px_rgba(0,240,255,0.25)] border-2 border-cyan-400/70">
                  <QrCode className="w-36 h-36 text-cyan-300" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">QR Dinámico Simulado Cifra Flow</div>
                  <div className="text-[11px] text-slate-400 font-mono mt-0.5">Monto: Bs. {vesAmount.toFixed(2)} (${usdEquivalent} USD)</div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Return to Top Button */}
        <div className="mt-12 text-center">
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-purple-400/30 hover:border-cyan-400/50 text-xs font-bold transition-all shadow-md cursor-pointer group"
          >
            <ArrowUp className="w-4 h-4 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
            <span>Regresar a la Portada</span>
          </a>
        </div>

      </div>
    </section>
  );
};
