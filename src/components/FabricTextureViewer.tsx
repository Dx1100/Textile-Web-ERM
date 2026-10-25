import React, { useState } from 'react';
import { ZoomIn, ZoomOut, Sparkles } from 'lucide-react';
import { TexturePatternType } from '../types';

interface FabricTextureViewerProps {
  texture: TexturePatternType;
  colorHex: string;
  colorName: string;
  weaveName: string;
  gsm: number;
  className?: string;
  allowZoom?: boolean;
}

export const FabricTextureViewer: React.FC<FabricTextureViewerProps> = ({
  texture,
  colorHex,
  colorName,
  weaveName,
  gsm,
  className = '',
  allowZoom = true,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className={`relative overflow-hidden group select-none ${className}`}>
      {/* Background base tone */}
      <div 
        className="absolute inset-0 transition-all duration-700"
        style={{ backgroundColor: colorHex }}
      />

      {/* Procedural Textile Pattern Layer */}
      <div 
        className={`absolute inset-0 transition-transform duration-700 ease-out ${
          isZoomed ? 'scale-175' : 'scale-100 group-hover:scale-105'
        }`}
      >
        {texture === 'zari-brocade' && (
          <svg className="w-full h-full opacity-65" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id={`brocade-${colorHex.replace('#', '')}`} width="56" height="56" patternUnits="userSpaceOnUse">
                {/* Gold floral jaal & paisley trellis */}
                <path d="M28 0 C35 14, 45 20, 56 28 C45 36, 35 42, 28 56 C21 42, 11 36, 0 28 C11 20, 21 14, 28 0 Z" fill="none" stroke="#D8B26E" strokeWidth="1.2" opacity="0.8" />
                <circle cx="28" cy="28" r="4.5" fill="#EAD098" opacity="0.9" />
                <path d="M28 20 C32 24, 32 32, 28 36 C24 32, 24 24, 28 20 Z" fill="#D8B26E" opacity="0.75" />
                {/* Secondary florets */}
                <circle cx="0" cy="0" r="3" fill="#D8B26E" opacity="0.7" />
                <circle cx="56" cy="0" r="3" fill="#D8B26E" opacity="0.7" />
                <circle cx="0" cy="56" r="3" fill="#D8B26E" opacity="0.7" />
                <circle cx="56" cy="56" r="3" fill="#D8B26E" opacity="0.7" />
                <path d="M0 28 Q14 28 28 14 M28 42 Q42 28 56 28" fill="none" stroke="#C5A059" strokeWidth="0.8" strokeDasharray="2,2" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#brocade-${colorHex.replace('#', '')})`} />
          </svg>
        )}

        {texture === 'raw-silk-slub' && (
          <svg className="w-full h-full opacity-40 mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="slub" width="40" height="20" patternUnits="userSpaceOnUse">
                <line x1="0" y1="4" x2="22" y2="4" stroke="#FFF" strokeWidth="1.6" strokeLinecap="round" opacity="0.4" />
                <line x1="26" y1="4" x2="40" y2="4" stroke="#000" strokeWidth="1" opacity="0.3" />
                <line x1="5" y1="12" x2="35" y2="12" stroke="#FFF" strokeWidth="2.2" strokeLinecap="round" opacity="0.5" />
                <line x1="12" y1="18" x2="24" y2="18" stroke="#000" strokeWidth="1.2" opacity="0.25" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#slub)" />
          </svg>
        )}

        {texture === 'chanderi-gold' && (
          <svg className="w-full h-full opacity-55" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="chanderi" width="32" height="32" patternUnits="userSpaceOnUse">
                {/* Sheer gossamer grid with gold zari highlights */}
                <line x1="0" y1="0" x2="32" y2="0" stroke="#E5C778" strokeWidth="0.75" opacity="0.6" />
                <line x1="0" y1="16" x2="32" y2="16" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.3" />
                <line x1="0" y1="0" x2="0" y2="32" stroke="#E5C778" strokeWidth="0.75" opacity="0.6" />
                <line x1="16" y1="0" x2="16" y2="32" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.3" />
                {/* Miniature zari buti */}
                <polygon points="16,13 18,16 16,19 14,16" fill="#F0D38D" opacity="0.9" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#chanderi)" />
          </svg>
        )}

        {texture === 'velvet-rich' && (
          <div className="w-full h-full bg-gradient-to-tr from-black/50 via-transparent to-white/20">
            {/* Subtle brushed velvet pile sheen */}
            <div className="w-full h-full opacity-35 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-200/40 via-transparent to-black/60" />
          </div>
        )}

        {texture === 'chikankari-georgette' && (
          <svg className="w-full h-full opacity-60" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="chikankari" width="48" height="48" patternUnits="userSpaceOnUse">
                {/* Needlework Bakhiya shadow work petals */}
                <circle cx="24" cy="24" r="10" fill="#FFFFFF" opacity="0.25" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="1.5,1.5" />
                <path d="M24 14 C27 20, 27 28, 24 34 M14 24 C20 27, 28 27, 34 24" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
                {/* Mukaish flattened silver wire dot */}
                <circle cx="24" cy="24" r="2" fill="#E8EDF2" stroke="#FFF" strokeWidth="0.8" />
                <circle cx="6" cy="6" r="1.5" fill="#E8EDF2" opacity="0.8" />
                <circle cx="42" cy="42" r="1.5" fill="#E8EDF2" opacity="0.8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#chikankari)" />
          </svg>
        )}

        {texture === 'pure-mulberry' && (
          <div className="w-full h-full">
            {/* Liquid drape satin gradient */}
            <div className="w-full h-full opacity-45 bg-[linear-gradient(115deg,rgba(255,255,255,0.4)_0%,transparent_35%,rgba(255,255,255,0.6)_50%,transparent_65%,rgba(0,0,0,0.3)_100%)]" />
          </div>
        )}

        {texture === 'dola-silk' && (
          <svg className="w-full h-full opacity-45" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dola" width="24" height="24" patternUnits="userSpaceOnUse">
                <rect x="2" y="2" width="20" height="20" fill="none" stroke="#D8B26E" strokeWidth="0.6" opacity="0.4" />
                <circle cx="12" cy="12" r="2" fill="#D8B26E" opacity="0.7" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dola)" />
          </svg>
        )}

        {texture === 'linen-weave' && (
          <svg className="w-full h-full opacity-35 mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="linen" width="8" height="8" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="8" y2="0" stroke="#FFF" strokeWidth="1" opacity="0.4" />
                <line x1="0" y1="4" x2="8" y2="4" stroke="#000" strokeWidth="1" opacity="0.3" />
                <line x1="0" y1="0" x2="0" y2="8" stroke="#FFF" strokeWidth="1" opacity="0.4" />
                <line x1="4" y1="0" x2="4" y2="8" stroke="#000" strokeWidth="1" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#linen)" />
          </svg>
        )}
      </div>

      {/* Atmospheric Textile Drape Lighting & Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10 pointer-events-none" />

      {/* Subtle diagonal silk reflection gleam */}
      <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 transform pointer-events-none transition-transform duration-1000 group-hover:translate-x-full" />

      {/* Top right: Tactile Micro-Zoom trigger */}
      {allowZoom && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsZoomed(!isZoomed);
          }}
          className="absolute top-3 right-3 z-10 p-2 bg-white/90 backdrop-blur-sm text-stone-800 rounded-full shadow-sm hover:bg-white hover:text-stone-950 transition-all text-xs flex items-center gap-1.5"
          title={isZoomed ? 'Zoom Out' : 'Inspect Micro-Weave (2.5x)'}
        >
          {isZoomed ? (
            <>
              <ZoomOut className="w-3.5 h-3.5" />
              <span className="text-[11px] font-medium pr-1">1x</span>
            </>
          ) : (
            <>
              <ZoomIn className="w-3.5 h-3.5" />
              <span className="text-[11px] font-medium pr-1">Inspect Weave</span>
            </>
          )}
        </button>
      )}

      {/* Bottom overlay: Clean unboxed swatch stamp */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white/90 text-xs pointer-events-none">
        <div className="flex items-center gap-1.5 drop-shadow-sm font-medium">
          <span className="w-2 h-2 rounded-full border border-white/50" style={{ backgroundColor: colorHex }} />
          <span className="truncate max-w-[160px]">{colorName}</span>
        </div>
        <div className="text-[11px] text-white/80 tabular-nums drop-shadow-sm">
          {gsm} GSM · {weaveName.split(' ')[0]}
        </div>
      </div>
    </div>
  );
};
